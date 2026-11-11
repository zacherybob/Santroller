import React, { useState } from 'react';
import { proto } from '../proto/proto';
import { WS2812TypeLabels, APA102TypeLabels } from '../constants/enums';
import { Cpu, Plus, Trash2, Sliders, Radio, Share2, Layers, CheckCircle2 } from 'lucide-react';

interface DevicesTabProps {
  config: proto.Config;
  onChange: (newConfig: proto.Config) => void;
}

export const DevicesTab: React.FC<DevicesTabProps> = ({ config, onChange }) => {
  const devices = config.devices || [];
  const [selectedType, setSelectedType] = useState<string>('ws2812');

  const handleAddDevice = (type: string) => {
    const nextId = (devices.reduce((max, d) => Math.max(max, d.deviceid || 0), 0) || 0) + 1;
    let newDev: proto.IDevice = { deviceid: nextId };

    switch (type) {
      case 'ws2812':
        newDev.ws2812 = {
          pin: 16,
          type: proto.WS2812Type.Ws2812Grb,
          count: 10
        };
        break;
      case 'apa102':
        newDev.apa102 = {
          spi: { block: 0, mosi: 19, miso: 16, sck: 18, clock: 2000000 },
          type: proto.APA102Type.Apa102Bgr,
          count: 8
        };
        break;
      case 'wii':
        newDev.wii = {
          i2c: { block: 0, sda: 4, scl: 5, clock: 100000 },
          mappingMode: proto.MappingMode.PerInput
        };
        break;
      case 'psx':
        newDev.psx = {
          spi: { block: 0, mosi: 3, miso: 4, sck: 2, clock: 500000 },
          attPin: 5,
          ackPin: 6,
          mappingMode: proto.MappingMode.PerInput
        };
        break;
      case 'multiplexer':
        newDev.multiplexer = {
          inputPin: 26,
          sixteenChannel: false,
          s0Pin: 18,
          s1Pin: 19,
          s2Pin: 20,
          s3Pin: 21
        };
        break;
      case 'matrix':
        newDev.matrix = {
          outPins: 0b00001111,
          inPins: 0b11110000
        };
        break;
      case 'usbHost':
        newDev.usbHost = {
          firstPin: 0,
          dmFirst: false,
          enable5v: true,
          mappingMode: proto.MappingMode.PerInput
        };
        break;
      case 'midiSerial':
        newDev.midiSerial = {
          uart: { block: 0, tx: 0, rx: 1, baudrate: 31250 }
        };
        break;
      case 'mpr121':
        newDev.mpr121 = {
          i2c: { block: 0, sda: 4, scl: 5, clock: 400000 },
          touchpadCount: 12,
          ddrPins: 0,
          enablePins: 0xFFF
        };
        break;
    }

    const updated = proto.Config.create({
      ...config,
      devices: [...devices, proto.Device.create(newDev)]
    });
    onChange(updated);
  };

  const handleDeleteDevice = (id: number) => {
    const updated = proto.Config.create({
      ...config,
      devices: devices.filter(d => d.deviceid !== id)
    });
    onChange(updated);
  };

  const getDeviceTitle = (dev: proto.IDevice): { title: string; desc: string; icon: any } => {
    if (dev.ws2812) return { title: `WS2812 Addressable RGB (Pin ${dev.ws2812.pin})`, desc: `${dev.ws2812.count} LEDs - ${WS2812TypeLabels[dev.ws2812.type || 1]}`, icon: Radio };
    if (dev.apa102) return { title: 'APA102 / DotStar SPI LEDs', desc: `${dev.apa102.count} LEDs - SPI Block ${dev.apa102.spi?.block}`, icon: Radio };
    if (dev.wii) return { title: 'Wii Extension Port (I2C)', desc: `SDA ${dev.wii.i2c?.sda}, SCL ${dev.wii.i2c?.scl} - Guitar/Nunchuk/Classic`, icon: Cpu };
    if (dev.psx) return { title: 'PlayStation 1/2 Controller Bus', desc: `ATT: ${dev.psx.attPin}, ACK: ${dev.psx.ackPin}`, icon: Cpu };
    if (dev.multiplexer) return { title: `Analog Multiplexer (${dev.multiplexer.sixteenChannel ? '16' : '8'}-Ch)`, desc: `ADC Pin ${dev.multiplexer.inputPin}, Select Pins ${dev.multiplexer.s0Pin}, ${dev.multiplexer.s1Pin}, ${dev.multiplexer.s2Pin}`, icon: Layers };
    if (dev.matrix) return { title: 'Key Matrix Scanner', desc: `Out Mask: 0x${(dev.matrix.outPins || 0).toString(16)}, In Mask: 0x${(dev.matrix.inPins || 0).toString(16)}`, icon: Layers };
    if (dev.usbHost) return { title: 'USB Host (Pico-PIO-USB)', desc: `Pins D+/D-: ${dev.usbHost.firstPin}/${(dev.usbHost.firstPin || 0) + 1}`, icon: Share2 };
    if (dev.midiSerial) return { title: 'Hardware MIDI DIN (UART)', desc: `Baud: ${dev.midiSerial.uart?.baudrate || 31250} - TX ${dev.midiSerial.uart?.tx}, RX ${dev.midiSerial.uart?.rx}`, icon: Sliders };
    if (dev.mpr121) return { title: 'MPR121 Capacitive Touch Sensor', desc: `${dev.mpr121.touchpadCount} Touchpads (I2C Block ${dev.mpr121.i2c?.block})`, icon: Cpu };
    return { title: `Device #${dev.deviceid}`, desc: 'Custom Peripheral', icon: Cpu };
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Top Banner and Add Action */}
      <div className="bg-[#141824] border border-[#23293d] rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-400" />
            Hardware & Peripherals Configuration
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Configure external hardware attached to your microcontroller: addressable LEDs, I2C/SPI sensors, multiplexers, Wii/PS2 adapters, USB Host, and MIDI.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-[#1b2132] border border-[#2a3450] text-slate-100 rounded-lg px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
          >
            <option value="ws2812">WS2812 Addressable RGB</option>
            <option value="apa102">APA102 / DotStar SPI RGB</option>
            <option value="wii">Wii Extension Port (I2C)</option>
            <option value="psx">PlayStation 1/2 Controller (SPI)</option>
            <option value="multiplexer">74HC4051/4067 Multiplexer</option>
            <option value="matrix">Button Key Matrix</option>
            <option value="usbHost">Pico USB Host Port</option>
            <option value="midiSerial">Hardware MIDI DIN (UART)</option>
            <option value="mpr121">MPR121 Capacitive Touch</option>
          </select>
          <button
            onClick={() => handleAddDevice(selectedType)}
            className="flex items-center gap-1 text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add Device</span>
          </button>
        </div>
      </div>

      {/* Device List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {devices.map((dev) => {
          const info = getDeviceTitle(dev);
          const Icon = info.icon;
          return (
            <div
              key={dev.deviceid}
              className="bg-[#141824] border border-[#23293d] rounded-xl p-5 flex flex-col justify-between group hover:border-indigo-500/50 transition"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-100 text-sm">{info.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{info.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono bg-[#1b2132] px-2 py-0.5 rounded text-indigo-300 border border-[#252e46]">
                    ID #{dev.deviceid}
                  </span>
                </div>

                {/* Inline Quick Config Fields */}
                <div className="mt-4 pt-3 border-t border-[#1e2436] grid grid-cols-2 gap-3 text-xs">
                  {dev.ws2812 && (
                    <>
                      <div>
                        <span className="text-slate-400">Data GPIO:</span>
                        <input
                          type="number"
                          value={dev.ws2812.pin || 0}
                          onChange={(e) => {
                            dev.ws2812!.pin = parseInt(e.target.value);
                            onChange(proto.Config.create({ ...config }));
                          }}
                          className="w-full mt-1 bg-[#1b2132] border border-[#29334e] rounded px-2 py-1 text-white"
                        />
                      </div>
                      <div>
                        <span className="text-slate-400">LED Count:</span>
                        <input
                          type="number"
                          value={dev.ws2812.count || 0}
                          onChange={(e) => {
                            dev.ws2812!.count = parseInt(e.target.value);
                            onChange(proto.Config.create({ ...config }));
                          }}
                          className="w-full mt-1 bg-[#1b2132] border border-[#29334e] rounded px-2 py-1 text-white"
                        />
                      </div>
                    </>
                  )}

                  {dev.wii && (
                    <>
                      <div>
                        <span className="text-slate-400">SDA Pin:</span>
                        <input
                          type="number"
                          value={dev.wii.i2c?.sda || 0}
                          onChange={(e) => {
                            if (dev.wii?.i2c) dev.wii.i2c.sda = parseInt(e.target.value);
                            onChange(proto.Config.create({ ...config }));
                          }}
                          className="w-full mt-1 bg-[#1b2132] border border-[#29334e] rounded px-2 py-1 text-white"
                        />
                      </div>
                      <div>
                        <span className="text-slate-400">SCL Pin:</span>
                        <input
                          type="number"
                          value={dev.wii.i2c?.scl || 0}
                          onChange={(e) => {
                            if (dev.wii?.i2c) dev.wii.i2c.scl = parseInt(e.target.value);
                            onChange(proto.Config.create({ ...config }));
                          }}
                          className="w-full mt-1 bg-[#1b2132] border border-[#29334e] rounded px-2 py-1 text-white"
                        />
                      </div>
                    </>
                  )}

                  {dev.multiplexer && (
                    <>
                      <div>
                        <span className="text-slate-400">Analog Read Pin:</span>
                        <input
                          type="number"
                          value={dev.multiplexer.inputPin || 0}
                          onChange={(e) => {
                            dev.multiplexer!.inputPin = parseInt(e.target.value);
                            onChange(proto.Config.create({ ...config }));
                          }}
                          className="w-full mt-1 bg-[#1b2132] border border-[#29334e] rounded px-2 py-1 text-white"
                        />
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <input
                          type="checkbox"
                          checked={!!dev.multiplexer.sixteenChannel}
                          onChange={(e) => {
                            dev.multiplexer!.sixteenChannel = e.target.checked;
                            onChange(proto.Config.create({ ...config }));
                          }}
                          className="rounded border-slate-600 text-indigo-600"
                        />
                        <span className="text-slate-300">16 Channels (4067)</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1e2436] flex items-center justify-between">
                <span className="text-xs text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Active
                </span>
                <button
                  onClick={() => handleDeleteDevice(dev.deviceid)}
                  className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 transition p-1 hover:bg-red-500/10 rounded"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          );
        })}

        {devices.length === 0 && (
          <div className="col-span-2 text-center py-12 text-slate-400 border border-dashed border-[#23293d] rounded-xl">
            No external peripherals configured yet. Direct GPIO button and analog mappings do not require a separate peripheral device.
          </div>
        )}
      </div>
    </div>
  );
};
