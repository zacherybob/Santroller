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
  ReportIdConfigInfoSaved = 0x33,
}

export type EventCallback = (event: proto.IEvent) => void;
export type LogCallback = (line: string) => void;

interface GenericHidDevice {
  productName: string;
  vendorId: number;
  productId: number;
  opened: boolean;
  open(): Promise<void>;
  close(): Promise<void>;
  sendFeatureReport(reportId: number, data: Uint8Array): Promise<void>;
  receiveFeatureReport(reportId: number, length?: number): Promise<DataView>;
  addEventListener(event: string, handler: (e: any) => void): void;
}

/**
 * Native Node-HID wrapper when running in Electron
 */
class NodeHidDeviceWrapper implements GenericHidDevice {
  public productName: string;
  public vendorId: number;
  public productId: number;
  public opened: boolean = false;
  private path: string;
  private ipcRenderer: any;
  private reportListeners: ((e: any) => void)[] = [];

  constructor(info: any, ipc: any) {
    this.productName = info.product || 'Santroller RP2040 Device';
    this.vendorId = info.vendorId;
    this.productId = info.productId;
    this.path = info.path;
    this.ipcRenderer = ipc;

    this.ipcRenderer.on('node-hid-data', (event: any, msg: any) => {
      if (msg.path === this.path) {
        const u8 = new Uint8Array(msg.data);
        for (const l of this.reportListeners) {
          l({ data: new DataView(u8.buffer) });
        }
      }
    });
  }

  async open(): Promise<void> {
    await this.ipcRenderer.invoke('node-hid-open', this.path);
    this.opened = true;
  }

  async close(): Promise<void> {
    if (this.opened) {
      await this.ipcRenderer.invoke('node-hid-close', this.path);
      this.opened = false;
    }
  }

  async sendFeatureReport(reportId: number, data: Uint8Array): Promise<void> {
    // node-hid expects reportId as the first byte of data
    let payload: number[];
    if (data[0] === reportId) {
      payload = Array.from(data);
    } else {
      payload = [reportId, ...Array.from(data)];
    }
    await this.ipcRenderer.invoke('node-hid-send-feature-report', {
      path: this.path,
      data: payload
    });
  }

  async receiveFeatureReport(reportId: number, length: number = 64): Promise<DataView> {
    const res: number[] = await this.ipcRenderer.invoke('node-hid-receive-feature-report', {
      path: this.path,
      reportId,
      length
    });
    const u8 = new Uint8Array(res);
    return new DataView(u8.buffer);
  }

  addEventListener(event: string, handler: (e: any) => void) {
    if (event === 'inputreport') {
      this.reportListeners.push(handler);
    }
  }
}

/**
 * WebHID device adapter to conform to GenericHidDevice interface
 */
class WebHidDeviceWrapper implements GenericHidDevice {
  public productName: string;
  public vendorId: number;
  public productId: number;
  public opened: boolean;
  private dev: any;

  constructor(dev: any) {
    this.dev = dev;
    this.productName = dev.productName || 'Santroller Device';
    this.vendorId = dev.vendorId;
    this.productId = dev.productId;
    this.opened = dev.opened;
  }

  async open(): Promise<void> {
    if (!this.dev.opened) {
      await this.dev.open();
    }
    this.opened = this.dev.opened;
  }

  async close(): Promise<void> {
    if (this.dev.opened) {
      await this.dev.close();
    }
    this.opened = false;
  }

  async sendFeatureReport(reportId: number, data: Uint8Array): Promise<void> {
    // If the data already contains reportId as byte 0, pass data directly or slice
    let payload = data;
    if (data.length > 0 && data[0] === reportId) {
      payload = data.subarray(1);
    }
    await this.dev.sendFeatureReport(reportId, payload);
  }

  async receiveFeatureReport(reportId: number): Promise<DataView> {
    const res = await this.dev.receiveFeatureReport(reportId);
    return res;
  }

  addEventListener(event: string, handler: (e: any) => void) {
    this.dev.addEventListener(event, handler);
  }
}

/**
 * SantrollerDeviceConnection manages communication with a Santroller device
 * via native OS node-hid in Electron, WebHID in browsers, or offline Simulator.
 */
export class SantrollerDeviceConnection {
  private device: GenericHidDevice | null = null;
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
   * Enumerate all detected USB HID devices across native node-hid and WebHID
   */
  public async listDevices(): Promise<any[]> {
    const results: any[] = [];
    if (typeof window !== 'undefined' && (window as any).require) {
      try {
        const { ipcRenderer } = (window as any).require('electron');
        if (ipcRenderer) {
          const list = await ipcRenderer.invoke('node-hid-list');
          for (const d of list) {
            results.push({
              source: 'native',
              path: d.path,
              vendorId: d.vendorId,
              productId: d.productId,
              productName: d.product || 'USB HID Device',
              manufacturer: d.manufacturer || '',
              usagePage: d.usagePage,
              usage: d.usage,
              isSantroller: (d.vendorId === 0x1209) ||
                (d.vendorId === 0x2e8a) ||
                (d.usagePage === 0xFF00 || d.usagePage === 65280) ||
                /santroller|rp2040|pico|guitar|drum|gamepad/i.test(d.product || '')
            });
          }
        }
      } catch (err: any) {
        console.warn('Native listDevices error:', err);
      }
    }

    if (typeof navigator !== 'undefined' && 'hid' in navigator) {
      try {
        const webDevices = await (navigator as any).hid.getDevices();
        for (const wd of webDevices) {
          results.push({
            source: 'webhid',
            raw: wd,
            vendorId: wd.vendorId,
            productId: wd.productId,
            productName: wd.productName || 'WebHID Device',
            collections: wd.collections,
            isSantroller: (wd.vendorId === 0x1209) ||
              (wd.vendorId === 0x2e8a) ||
              (wd.collections && wd.collections.some((c: any) => c.usagePage === 0xFF00 || c.usagePage === 65280)) ||
              /santroller|rp2040|pico|guitar|drum|gamepad/i.test(wd.productName || '')
          });
        }
      } catch (err: any) {
        console.warn('WebHID listDevices error:', err);
      }
    }
    return results;
  }

  /**
   * Connect to a specific chosen device
   */
  public async connectToDevice(target: any): Promise<boolean> {
    this.disconnect();
    this.emitLog(`Connecting to selected device: ${target.productName} (VID: 0x${target.vendorId?.toString(16)}, PID: 0x${target.productId?.toString(16)})`);
    if (target.source === 'native') {
      const { ipcRenderer } = (window as any).require('electron');
      const nodeDev = new NodeHidDeviceWrapper(target, ipcRenderer);
      await nodeDev.open();
      this.device = nodeDev;
      return await this.setupDeviceConnection();
    } else if (target.source === 'webhid' && target.raw) {
      const webDev = new WebHidDeviceWrapper(target.raw);
      await webDev.open();
      this.device = webDev;
      return await this.setupDeviceConnection();
    }
    return false;
  }

  /**
   * Primary auto-connection method:
   * First tries Native Node-HID (bypasses Windows OS WebHID exclusive block on controllers),
   * then falls back to WebHID.
   */
  public async connectHardware(): Promise<boolean> {
    this.emitLog('Scanning for connected Santroller devices...');

    // 1. Try Native Electron Node-HID IPC first (Windows-proof)
    if (typeof window !== 'undefined' && (window as any).require) {
      try {
        const { ipcRenderer } = (window as any).require('electron');
        if (ipcRenderer) {
          const deviceList: any[] = await ipcRenderer.invoke('node-hid-list');
          this.emitLog(`Found ${deviceList.length} USB HID device(s) on system via Native driver.`);

          // Filter for Santroller RP2040 / RP2350
          const match = deviceList.find(d =>
            (d.vendorId === 0x1209 && (d.productId === 0x2882 || d.productId === 0x2883)) ||
            (d.vendorId === 0x2e8a) || // Raspberry Pi Pico
            (d.usagePage === 0xFF00 || d.usagePage === 65280) ||
            (d.product && /santroller|rp2040|pico|guitar|drum/i.test(d.product))
          );

          if (match) {
            this.emitLog(`Found Santroller via Native HID: ${match.product || 'Santroller'} (VID: 0x${match.vendorId.toString(16)}, PID: 0x${match.productId.toString(16)})`);
            const nodeDev = new NodeHidDeviceWrapper(match, ipcRenderer);
            await nodeDev.open();
            this.device = nodeDev;
            return await this.setupDeviceConnection();
          }
        }
      } catch (err: any) {
        this.emitLog(`Native HID scan skipped: ${err.message}`);
      }
    }

    // 2. Fall back to standard WebHID
    return await this.connectWebHID();
  }

  public async connectWebHID(): Promise<boolean> {
    if (typeof navigator === 'undefined' || !('hid' in navigator)) {
      throw new Error('Neither native HID nor WebHID is available in this environment.');
    }

    const filters = [
      { usagePage: 0xFF00 },
      { usagePage: 65280 },
      { vendorId: 0x1209, productId: 0x2882 },
      { vendorId: 0x1209, productId: 0x2883 },
      { vendorId: 0x1209 },
      { vendorId: 0x2e8a }, // Raspberry Pi Pico
      { vendorId: 0x046d }, // Logitech
      { vendorId: 0x12ba }, // RedOctane
      { vendorId: 0x045e }, // Microsoft
      { vendorId: 0x054c }  // Sony
    ];

    let devices: any[] = await (navigator as any).hid.getDevices();
    let dev = devices.find(d =>
      (d.vendorId === 0x1209) ||
      (d.vendorId === 0x2e8a) ||
      (d.collections && d.collections.some((c: any) => c.usagePage === 0xFF00 || c.usagePage === 65280)) ||
      (d.productName && /santroller|rp2040|pico|guitar|drum/i.test(d.productName))
    );

    if (!dev) {
      try {
        const requested = await (navigator as any).hid.requestDevice({ filters });
        if (requested && requested.length > 0) {
          dev = requested[0];
        }
      } catch (e: any) {
        this.emitLog(`WebHID filtered request: ${e.message}`);
      }
    }

    if (!dev) {
      try {
        // Broad request if specific filter yielded no selection
        const allRequested = await (navigator as any).hid.requestDevice({ filters: [] });
        if (allRequested && allRequested.length > 0) {
          dev = allRequested[0];
        }
      } catch (e: any) {
        this.emitLog(`WebHID open picker: ${e.message}`);
      }
    }

    if (!dev) {
      this.emitLog('No Santroller device selected or found.');
      return false;
    }

    const webDev = new WebHidDeviceWrapper(dev);
    await webDev.open();
    this.device = webDev;
    return await this.setupDeviceConnection();
  }

  private async setupDeviceConnection(): Promise<boolean> {
    if (!this.device) return false;

    this.device.addEventListener('inputreport', (event: any) => {
      this.handleInputReport(event);
    });

    this.connected = true;
    this.isSimulator = false;

    // Start periodic keepalive
    this.startKeepalive();

    // Read Version & Board type with error guarding
    try {
      await this.queryDeviceInfo();
    } catch (e: any) {
      this.emitLog(`Device info handshake notice: ${e.message}`);
    }

    // Read Configuration with error guarding
    try {
      await this.readConfigFromDevice();
    } catch (e: any) {
      this.emitLog(`Configuration read notice: ${e.message}`);
    }

    this.emitLog(`Connected to: ${this.device.productName} (Firmware: ${this.deviceVersion} on ${this.deviceBoard})`);
    return true;
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

    this.startSimulatorEvents();
    return true;
  }

  public disconnect() {
    if (this.keepaliveTimer) {
      clearInterval(this.keepaliveTimer);
      this.keepaliveTimer = null;
    }

    if (this.device && this.device.opened) {
      try {
        this.sendCommand({ disconnect: {} });
        this.device.close();
      } catch (e) {
        // ignore
      }
    }

    this.device = null;
    this.connected = false;
    this.emitLog('Disconnected from device.');
  }

  private startKeepalive() {
    if (this.keepaliveTimer) {
      clearInterval(this.keepaliveTimer);
    }
    this.keepaliveTimer = setInterval(async () => {
      if (this.connected && this.device && this.device.opened) {
        try {
          const report = new Uint8Array([ReportId.ReportIdKeepalive]);
          await this.device.sendFeatureReport(ReportId.ReportIdKeepalive, report);
        } catch (e) {
          // ignore keepalive failures
        }
      }
    }, 400);
  }

  private async queryDeviceInfo() {
    if (!this.device) return;
    try {
      const verView = await this.device.receiveFeatureReport(ReportId.ReportIdGetVersion, 64);
      if (verView && verView.byteLength > 1) {
        const dec = new TextDecoder();
        this.deviceVersion = dec.decode(new Uint8Array(verView.buffer, verView.byteOffset + 1, verView.byteLength - 1)).replace(/\0/g, '').trim();
      }

      const typeView = await this.device.receiveFeatureReport(ReportId.ReportIdGetType, 64);
      if (typeView && typeView.byteLength > 1) {
        const dec = new TextDecoder();
        this.deviceBoard = dec.decode(new Uint8Array(typeView.buffer, typeView.byteOffset + 1, typeView.byteLength - 1)).replace(/\0/g, '').trim();
      }
    } catch (e) {
      console.warn('Failed to query device info', e);
    }
  }

  public async readConfigFromDevice(): Promise<proto.Config | null> {
    if (this.isSimulator) {
      return this.config;
    }

    if (!this.device) return null;

    try {
      this.emitLog('Reading configuration from device EEPROM/Flash...');
      const infoView = await this.device.receiveFeatureReport(ReportId.ReportIdConfigInfo, 64);

      let dataSize = 0;
      let mainSize = 0;
      if (infoView && infoView.byteLength > 1) {
        try {
          const rawBytes = new Uint8Array(infoView.buffer, infoView.byteOffset + 1, infoView.byteLength - 1);
          const decodedInfo = proto.ConfigInfo.decode(rawBytes);
          dataSize = decodedInfo.dataSize || 0;
          mainSize = decodedInfo.mainSize || 0;
        } catch (e) {
          const dv = new DataView(infoView.buffer, infoView.byteOffset + 1);
          dataSize = dv.getInt32(0, true);
        }
      }

      const chunks: Uint8Array[] = [];
      let totalBytes = 0;

      while (true) {
        const chunk = await this.device.receiveFeatureReport(ReportId.ReportIdConfig, 64);
        if (!chunk || chunk.byteLength <= 1) break;
        const bytes = new Uint8Array(chunk.buffer, chunk.byteOffset + 1, chunk.byteLength - 1);
        chunks.push(bytes);
        totalBytes += bytes.length;
        if (dataSize > 0 && totalBytes >= dataSize) {
          break;
        }
        if (bytes.length < 63) {
          break;
        }
      }

      if (totalBytes > 0) {
        const fullBuf = new Uint8Array(totalBytes);
        let offset = 0;
        for (const c of chunks) {
          fullBuf.set(c, offset);
          offset += c.length;
        }

        const sizeToDecode = mainSize > 0 ? mainSize : totalBytes;
        try {
          this.config = proto.Config.decode(fullBuf.subarray(0, sizeToDecode));
        } catch {
          this.config = proto.Config.decodeDelimited(fullBuf);
        }

        this.emitLog(`Configuration loaded (${totalBytes} bytes, ${this.config.profiles?.length || 0} profiles).`);
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

    if (!this.device) return false;

    try {
      this.emitLog('Writing configuration to device...');
      const encoded = proto.Config.encode(cfg).finish();

      const infoMsg = proto.ConfigInfo.create({
        dataSize: encoded.length,
        mainSize: encoded.length,
        auxSize: 0,
        dataCrc: 0,
        magic: 0x434F4E46
      });
      const encodedInfo = proto.ConfigInfo.encode(infoMsg).finish();

      const infoReport = new Uint8Array(64);
      infoReport[0] = ReportId.ReportIdConfigInfo;
      infoReport.set(encodedInfo, 1);
      await this.device.sendFeatureReport(ReportId.ReportIdConfigInfo, infoReport);

      let offset = 0;
      while (offset < encoded.length) {
        const chunkLen = Math.min(63, encoded.length - offset);
        const chunk = new Uint8Array(64);
        chunk[0] = ReportId.ReportIdConfig;
        chunk.set(encoded.subarray(offset, offset + chunkLen), 1);
        await this.device.sendFeatureReport(ReportId.ReportIdConfig, chunk);
        offset += chunkLen;
      }

      const loadedReport = new Uint8Array([ReportId.ReportIdLoaded, 1]);
      await this.device.sendFeatureReport(ReportId.ReportIdLoaded, loadedReport);

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

    if (!this.device) return false;

    try {
      const commandMsg = proto.Command.create(cmd);
      const encoded = proto.Command.encodeDelimited(commandMsg).finish();
      const report = new Uint8Array(64);
      report[0] = ReportId.ReportIdCommand;
      report.set(encoded, 1);
      await this.device.sendFeatureReport(ReportId.ReportIdCommand, report);
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
    if (!this.device) return false;
    try {
      const report = new Uint8Array([ReportId.ReportIdBootloader, 1]);
      await this.device.sendFeatureReport(ReportId.ReportIdBootloader, report);
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
      // not a protobuf report
    }
  }

  private startSimulatorEvents() {
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
