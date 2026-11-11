import { proto } from '../proto/proto';

export enum ReportId {
  ReportIdPs3Feature = 0,
  ReportIdGamepad = 1,
  ReportIdKeyboard = 2,
  ReportIdMouse = 3,
  ReportIdConsumer = 4,
  ReportIdSantrollerCapabilities = 0x10,
  ReportIdConfig = 0x22,
  ReportIdConfigInfo = 0x23,
  ReportIdLoaded = 0x24,
  ReportIdKeepalive = 0x25,
  ReportIdBootloader = 0x26,
  ReportIdCommand = 0x27,
  ReportIdGetActiveProfiles = 0x28,
  ReportIdGetVersion = 0x29,
  ReportIdUpdateFirmware = 0x30,
  ReportIdUploadFirmware = 0x31,
  ReportIdGetType = 0x32,
}

export interface ConfigInfo {
  dataSize: number;
  dataCrc: number;
  mainSize: number;
  auxSize: number;
  magic: number;
}

export type EventCallback = (event: proto.IEvent) => void;
export type LogCallback = (line: string) => void;

/**
 * SantrollerDeviceConnection manages communication with a Santroller device
 * either via WebHID in the browser / Electron or through a Mock/Simulator backend.
 */
export class SantrollerDeviceConnection {
  private hidDevice: any = null;
  private isSimulator: boolean = false;
  private keepaliveTimer: any = null;
  private onEventCallbacks: EventCallback[] = [];
  private onLogCallbacks: LogCallback[] = [];
  private connected: boolean = false;
  private deviceVersion: string = 'v1.0.0-mock';
  private deviceBoard: string = 'Raspberry Pi Pico';
  private config: proto.Config = proto.Config.create();

  constructor() {
    this.createDefaultConfig();
  }

  public isConnected(): boolean {
    return this.connected;
  }

  public getIsSimulator(): boolean {
    return this.isSimulator;
  }

  public getVersion(): string {
    return this.deviceVersion;
  }

  public getBoard(): string {
    return this.deviceBoard;
  }

  public getConfig(): proto.Config {
    return this.config;
  }

  public setConfig(cfg: proto.Config) {
    this.config = cfg;
  }

  public onEvent(cb: EventCallback) {
    this.onEventCallbacks.push(cb);
  }

  public onLog(cb: LogCallback) {
    this.onLogCallbacks.push(cb);
  }

  private emitEvent(evt: proto.IEvent) {
    for (const cb of this.onEventCallbacks) {
      cb(evt);
    }
  }

  private emitLog(log: string) {
    for (const cb of this.onLogCallbacks) {
      cb(log);
    }
  }

  /**
   * Connect via WebHID (Available in Chrome / Edge / Electron)
   */
  public async connectWebHID(): Promise<boolean> {
    try {
      if (!('hid' in navigator)) {
        throw new Error('WebHID is not supported in this browser/environment.');
      }

      // Request device with vendor/usage matching Santroller
      const devices = await (navigator as any).hid.requestDevice({
        filters: []
      });

      if (!devices || devices.length === 0) {
        return false;
      }

      this.hidDevice = devices[0];
      await this.hidDevice.open();

      this.hidDevice.addEventListener('inputreport', (event: any) => {
        this.handleInputReport(event);
      });

      this.connected = true;
      this.isSimulator = false;

      // Start keepalive
      this.startKeepalive();

      // Read Version & Type
      await this.queryDeviceInfo();
      // Read Config
      await this.readConfigFromDevice();

      this.emitLog(`Connected to USB device: ${this.hidDevice.productName}`);
      return true;
    } catch (err: any) {
      this.emitLog(`WebHID connection failed: ${err.message}`);
      throw err;
    }
  }

  /**
   * Start Simulator / Offline Mode
   */
  public connectSimulator(): boolean {
    this.connected = true;
    this.isSimulator = true;
    this.deviceVersion = 'v2.1.0-dev (Simulated)';
    this.deviceBoard = 'Raspberry Pi Pico (RP2040)';

    this.emitLog('Connected to virtual Santroller simulator.');
    this.emitLog('Firmware: ' + this.deviceVersion + ' on ' + this.deviceBoard);

    // Simulate periodic heartbeat / mock events
    this.startSimulatorEvents();
    return true;
  }

  public disconnect() {
    if (this.keepaliveTimer) {
      clearInterval(this.keepaliveTimer);
      this.keepaliveTimer = null;
    }

    if (this.hidDevice && this.hidDevice.opened) {
      try {
        this.sendCommand({ disconnect: {} });
        this.hidDevice.close();
      } catch (e) {
        // ignore
      }
    }

    this.hidDevice = null;
    this.connected = false;
    this.emitLog('Disconnected from device.');
  }

  private startKeepalive() {
    this.keepaliveTimer = setInterval(async () => {
      if (this.connected && this.hidDevice && this.hidDevice.opened) {
        try {
          const report = new Uint8Array([ReportId.ReportIdKeepalive]);
          await this.hidDevice.sendFeatureReport(ReportId.ReportIdKeepalive, report);
        } catch (e) {
          // ignore keepalive failures
        }
      }
    }, 500);
  }

  private async queryDeviceInfo() {
    if (!this.hidDevice) return;
    try {
      const verView = await this.hidDevice.receiveFeatureReport(ReportId.ReportIdGetVersion);
      const dec = new TextDecoder();
      this.deviceVersion = dec.decode(verView.buffer).replace(/\0/g, '').trim();

      const typeView = await this.hidDevice.receiveFeatureReport(ReportId.ReportIdGetType);
      this.deviceBoard = dec.decode(typeView.buffer).replace(/\0/g, '').trim();
    } catch (e) {
      console.warn('Failed to query device info', e);
    }
  }

  public async readConfigFromDevice(): Promise<proto.Config | null> {
    if (this.isSimulator) {
      return this.config;
    }

    if (!this.hidDevice) return null;

    try {
      this.emitLog('Reading configuration from device...');
      // 1. Fetch info
      const infoView = await this.hidDevice.receiveFeatureReport(ReportId.ReportIdConfigInfo);
      // parse config info struct or length
      const chunks: Uint8Array[] = [];
      let totalBytes = 0;

      while (true) {
        const chunk = await this.hidDevice.receiveFeatureReport(ReportId.ReportIdConfig);
        if (!chunk || chunk.byteLength <= 1) break;
        const bytes = new Uint8Array(chunk.buffer, chunk.byteOffset + 1, chunk.byteLength - 1);
        chunks.push(bytes);
        totalBytes += bytes.length;
        if (bytes.length < 63) {
          break; // Last chunk
        }
      }

      if (totalBytes > 0) {
        const fullBuf = new Uint8Array(totalBytes);
        let offset = 0;
        for (const c of chunks) {
          fullBuf.set(c, offset);
          offset += c.length;
        }

        // Decode protobuf
        this.config = proto.Config.decodeDelimited(fullBuf);
        this.emitLog(`Loaded configuration (${totalBytes} bytes, ${this.config.profiles?.length || 0} profiles).`);
        return this.config;
      }
    } catch (err: any) {
      this.emitLog(`Error reading config: ${err.message}`);
    }
    return null;
  }

  public async writeConfigToDevice(configToSave?: proto.Config): Promise<boolean> {
    const cfg = configToSave || this.config;
    this.config = cfg;

    if (this.isSimulator) {
      this.emitLog('Simulator: Configuration saved successfully (virtual memory).');
      return true;
    }

    if (!this.hidDevice) return false;

    try {
      this.emitLog('Writing configuration to device...');
      const encoded = proto.Config.encodeDelimited(cfg).finish();

      // Send Info report first
      const infoReport = new Uint8Array(64);
      infoReport[0] = ReportId.ReportIdConfigInfo;
      // encode sizes
      await this.hidDevice.sendFeatureReport(ReportId.ReportIdConfigInfo, infoReport);

      // Send chunks of 63 bytes
      let offset = 0;
      while (offset < encoded.length) {
        const chunkLen = Math.min(63, encoded.length - offset);
        const chunk = new Uint8Array(64);
        chunk[0] = ReportId.ReportIdConfig;
        chunk.set(encoded.subarray(offset, offset + chunkLen), 1);
        await this.hidDevice.sendFeatureReport(ReportId.ReportIdConfig, chunk);
        offset += chunkLen;
      }

      // Send Loaded report
      const loadedReport = new Uint8Array([ReportId.ReportIdLoaded, 1]);
      await this.hidDevice.sendFeatureReport(ReportId.ReportIdLoaded, loadedReport);

      this.emitLog('Configuration successfully uploaded to device flash!');
      return true;
    } catch (err: any) {
      this.emitLog(`Failed to write config: ${err.message}`);
      return false;
    }
  }

  public async sendCommand(cmd: proto.ICommand): Promise<boolean> {
    if (this.isSimulator) {
      this.emitLog(`Simulator command received: ${JSON.stringify(cmd)}`);
      if (cmd.detectPin) {
        setTimeout(() => {
          this.emitEvent({
            pin: { pin: cmd.detectPin?.detectType === proto.PinDetectType.DetectDigital ? 14 : 26 }
          });
          this.emitLog(`Simulator: Detected pin ${cmd.detectPin?.detectType === proto.PinDetectType.DetectDigital ? 'GPIO 14' : 'ADC 26'}`);
        }, 1500);
      }
      return true;
    }

    if (!this.hidDevice) return false;

    try {
      const commandMsg = proto.Command.create(cmd);
      const encoded = proto.Command.encodeDelimited(commandMsg).finish();
      const report = new Uint8Array(64);
      report[0] = ReportId.ReportIdCommand;
      report.set(encoded, 1);
      await this.hidDevice.sendFeatureReport(ReportId.ReportIdCommand, report);
      return true;
    } catch (err: any) {
      this.emitLog(`Command error: ${err.message}`);
      return false;
    }
  }

  public async rebootToBootloader(): Promise<boolean> {
    if (this.isSimulator) {
      this.emitLog('Simulator: Rebooting to bootloader...');
      return true;
    }
    if (!this.hidDevice) return false;
    try {
      const report = new Uint8Array([ReportId.ReportIdBootloader, 1]);
      await this.hidDevice.sendFeatureReport(ReportId.ReportIdBootloader, report);
      this.emitLog('Device rebooted to BOOTSEL / bootloader.');
      return true;
    } catch (e: any) {
      this.emitLog(`Reboot error: ${e.message}`);
      return false;
    }
  }

  private handleInputReport(event: any) {
    const { data } = event;
    if (!data || data.byteLength === 0) return;

    try {
      const uint8 = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
      // Decode EventList protobuf
      const eventList = proto.EventList.decodeDelimited(uint8);
      if (eventList && eventList.event) {
        for (const evt of eventList.event) {
          if (evt.console && evt.console.data) {
            this.emitLog(`[FIRMWARE] ${evt.console.data}`);
          }
          this.emitEvent(evt);
        }
      }
    } catch (e) {
      // not a protobuf report or raw event
    }
  }

  private startSimulatorEvents() {
    // Generate mock button / axis telemetry occasionally for testing
    let toggle = false;
    setInterval(() => {
      if (!this.isSimulator || !this.connected) return;
      toggle = !toggle;
      this.emitEvent({
        button: { id: 1, stateRaw: toggle, state: toggle },
        axis: { id: 2, stateRaw: Math.floor(Math.sin(Date.now() / 1000) * 512 + 512), state: Math.floor(Math.sin(Date.now() / 1000) * 127 + 128) }
      });
    }, 400);
  }

  public createDefaultConfig(): proto.Config {
    this.config = proto.Config.create({
      devices: [
        {
          deviceid: 1,
          ws2812: {
            pin: 16,
            type: proto.WS2812Type.Ws2812Grb,
            count: 12
          }
        },
        {
          deviceid: 2,
          wii: {
            i2c: { block: 0, sda: 4, scl: 5, clock: 100000 },
            mappingMode: proto.MappingMode.PerInput
          }
        }
      ],
      profiles: [
        {
          opts: {
            uid: 1,
            name: 'Guitar Hero Guitar',
            deviceToEmulate: proto.SubType.GuitarHeroGuitar,
            faceButtonMappingMode: proto.FaceButtonMappingMode.LegendBased,
            xinputOnWindows: true,
            ps4OrPs5Mode: false,
            supportsSlider: true,
            cymbalGlitchFix: false
          },
          assignments: [
            {
              assignments: [
                {
                  consoleType: {
                    consoleType: proto.ConsoleType.ConsolePC,
                    forcedType: proto.ConsoleMode.ModeXbox360
                  }
                }
              ]
            }
          ],
          mappings: [
            {
              mapping: { ghButton: proto.GuitarHeroGuitarButtonType.GreenFret },
              input: { gpio: { pin: 2, pinMode: proto.PinMode.PullUp, analog: false } },
              debounce: 5
            },
            {
              mapping: { ghButton: proto.GuitarHeroGuitarButtonType.RedFret },
              input: { gpio: { pin: 3, pinMode: proto.PinMode.PullUp, analog: false } },
              debounce: 5
            },
            {
              mapping: { ghButton: proto.GuitarHeroGuitarButtonType.YellowFret },
              input: { gpio: { pin: 6, pinMode: proto.PinMode.PullUp, analog: false } },
              debounce: 5
            },
            {
              mapping: { ghButton: proto.GuitarHeroGuitarButtonType.BlueFret },
              input: { gpio: { pin: 7, pinMode: proto.PinMode.PullUp, analog: false } },
              debounce: 5
            },
            {
              mapping: { ghButton: proto.GuitarHeroGuitarButtonType.OrangeFret },
              input: { gpio: { pin: 8, pinMode: proto.PinMode.PullUp, analog: false } },
              debounce: 5
            },
            {
              mapping: { ghButton: proto.GuitarHeroGuitarButtonType.StrumUp },
              input: { gpio: { pin: 9, pinMode: proto.PinMode.PullUp, analog: false } },
              debounce: 10
            },
            {
              mapping: { ghButton: proto.GuitarHeroGuitarButtonType.StrumDown },
              input: { gpio: { pin: 10, pinMode: proto.PinMode.PullUp, analog: false } },
              debounce: 10
            },
            {
              mapping: { ghAxis: proto.GuitarHeroGuitarAxisType.Whammy },
              input: { gpio: { pin: 26, pinMode: proto.PinMode.Floating, analog: true } },
              min: 50,
              max: 950,
              deadzone: 20
            }
          ],
          leds: [
            {
              device: {
                rgb: {
                  deviceId: 1,
                  hasStart: true,
                  startR: 0,
                  startG: 255,
                  startB: 0,
                  startW: 0,
                  endR: 255,
                  endG: 0,
                  endB: 0,
                  endW: 0,
                  activeLed: [0, 1, 2, 3, 4]
                }
              },
              mapping: {
                patternMapping: {
                  pattern: proto.RgbPatternType.PatternRainbow,
                  speed: 30,
                  brightness: 180
                }
              }
            }
          ]
        }
      ],
      guiConfig: [
        {
          deviceid: 1,
          label: {
            label: 'Main Neck WS2812 Strip',
            pin: 16,
            showToCustomer: true
          }
        }
      ],
      syncCalibrations: true
    });
    return this.config;
  }
}

export const deviceConnection = new SantrollerDeviceConnection();
