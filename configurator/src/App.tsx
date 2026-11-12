import React, { useState, useEffect } from 'react';
import { proto } from './proto/proto';
import { deviceConnection } from './services/deviceConnection';
import { ProfilesTab } from './components/ProfilesTab';
import { DevicesTab } from './components/DevicesTab';
import { MappingsTab } from './components/MappingsTab';
import { LedsTab } from './components/LedsTab';
import { TelemetryTab } from './components/TelemetryTab';
import { GuiConfigTab } from './components/GuiConfigTab';
import {
  Gamepad2,
  Cpu,
  Sliders,
  Sparkles,
  Activity,
  Tag,
  Usb,
  Save,
  Download,
  Upload,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Play,
  RefreshCw,
  X,
  ChevronRight,
  Terminal,
  Info
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'profiles' | 'devices' | 'mappings' | 'leds' | 'telemetry' | 'labels'>('profiles');
  const [config, setConfig] = useState<proto.Config>(deviceConnection.getConfig());
  const [selectedProfileId, setSelectedProfileId] = useState<number>(1);
  const [isConnected, setIsConnected] = useState<boolean>(deviceConnection.isConnected());
  const [isSimulator, setIsSimulator] = useState<boolean>(deviceConnection.getIsSimulator());
  const [boardInfo, setBoardInfo] = useState<string>('Not Connected');
  const [versionInfo, setVersionInfo] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Device Modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [discoveredDevices, setDiscoveredDevices] = useState<any[]>([]);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [connectionLogs, setConnectionLogs] = useState<string[]>([]);

  useEffect(() => {
    // Listen to connection logs
    deviceConnection.onLog((msg) => {
      setConnectionLogs((prev) => [...prev.slice(-100), `[${new Date().toLocaleTimeString()}] ${msg}`]);
    });

    // Start with simulator if no real hardware is currently connected
    if (!deviceConnection.isConnected()) {
      deviceConnection.connectSimulator();
      setIsConnected(true);
      setIsSimulator(true);
      setBoardInfo(deviceConnection.getBoard());
      setVersionInfo(deviceConnection.getVersion());
      setConfig(deviceConnection.getConfig());
    }
  }, []);

  const handleScanDevices = async () => {
    setIsScanning(true);
    try {
      const list = await deviceConnection.listDevices();
      setDiscoveredDevices(list);
    } catch (err: any) {
      alert(`Error listing devices: ${err.message}`);
    } finally {
      setIsScanning(false);
    }
  };

  const handleOpenDeviceModal = async () => {
    setIsModalOpen(true);
    await handleScanDevices();
  };

  const handleDirectConnectDevice = async (target: any) => {
    try {
      const ok = await deviceConnection.connectToDevice(target);
      if (ok) {
        setIsConnected(true);
        setIsSimulator(false);
        setBoardInfo(deviceConnection.getBoard());
        setVersionInfo(deviceConnection.getVersion());
        setConfig(deviceConnection.getConfig());
        setIsModalOpen(false);
      }
    } catch (err: any) {
      alert(`Failed to connect to ${target.productName}: ${err.message}`);
    }
  };

  const handleAutoConnectHardware = async () => {
    try {
      const ok = await deviceConnection.connectHardware();
      if (ok) {
        setIsConnected(true);
        setIsSimulator(false);
        setBoardInfo(deviceConnection.getBoard());
        setVersionInfo(deviceConnection.getVersion());
        setConfig(deviceConnection.getConfig());
        setIsModalOpen(false);
      } else {
        // If auto-connect didn't match immediately, open the device modal for manual inspection
        setIsModalOpen(true);
        await handleScanDevices();
      }
    } catch (err: any) {
      setIsModalOpen(true);
      await handleScanDevices();
    }
  };

  const handleConnectSimulator = () => {
    deviceConnection.connectSimulator();
    setIsConnected(true);
    setIsSimulator(true);
    setBoardInfo(deviceConnection.getBoard());
    setVersionInfo(deviceConnection.getVersion());
    setConfig(deviceConnection.getConfig());
  };

  const handleDisconnect = () => {
    deviceConnection.disconnect();
    setIsConnected(false);
    setIsSimulator(false);
    setBoardInfo('Disconnected');
    setVersionInfo('');
  };

  const handleSaveToDevice = async () => {
    setIsSaving(true);
    setSaveStatus(null);
    try {
      const ok = await deviceConnection.writeConfigToDevice(config);
      if (ok) {
        setSaveStatus('Configuration successfully saved to device!');
      } else {
        setSaveStatus('Failed to write configuration.');
      }
    } catch (e: any) {
      setSaveStatus(`Save error: ${e.message}`);
    } finally {
      setIsSaving(false);
      setTimeout(() => setSaveStatus(null), 4000);
    }
  };

  const handleExportJson = () => {
    const jsonStr = JSON.stringify(config.toJSON(), null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `santroller-config-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        const importedConfig = proto.Config.fromObject(parsed);
        setConfig(importedConfig);
        deviceConnection.setConfig(importedConfig);
        alert('Configuration imported successfully!');
      } catch (err: any) {
        alert('Invalid configuration JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-[#0e111a] text-slate-100 flex flex-col">
      {/* Top Header & Navigation */}
      <header className="border-b border-[#1f2638] bg-[#121622]/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-600/30">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-base tracking-tight text-white">Santroller Configurator</h1>
                <span className="text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30">
                  v2.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Rhythm Game Firmware & Controller Suite</p>
            </div>
          </div>

          {/* Connection Status & Device Controls */}
          <div className="flex items-center gap-2">
            {isConnected && !isSimulator ? (
              <div className="flex items-center gap-2 bg-[#181f30] border border-emerald-500/30 rounded-lg px-3 py-1.5 text-xs">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-emerald-300">USB Connected</span>
                <span className="text-slate-400 font-mono text-[11px] border-l border-[#2e3b5a] pl-2 ml-1">
                  {boardInfo} ({versionInfo})
                </span>
                <button
                  onClick={handleDisconnect}
                  className="ml-2 text-[11px] text-slate-400 hover:text-red-400 transition"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {isSimulator && (
                  <div className="flex items-center gap-2 bg-[#181f30] border border-[#26314c] rounded-lg px-2.5 py-1 text-xs">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-slate-300 text-[11px]">Simulator Active</span>
                  </div>
                )}
                <button
                  onClick={handleAutoConnectHardware}
                  className="flex items-center gap-1.5 text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-3 py-1.5 rounded-lg transition shadow-md shadow-indigo-600/30"
                >
                  <Usb className="w-3.5 h-3.5" />
                  <span>Connect USB Device</span>
                </button>
                <button
                  onClick={handleOpenDeviceModal}
                  title="View detected USB and HID devices"
                  className="flex items-center gap-1 text-xs bg-[#1f273b] hover:bg-[#28324c] border border-[#2f3b58] text-slate-300 font-medium px-2.5 py-1.5 rounded-lg transition"
                >
                  <RefreshCw className="w-3 h-3 text-slate-400" />
                  <span>Scan</span>
                </button>
              </div>
            )}

            {/* Save / Export Actions */}
            <div className="h-6 w-px bg-[#232a3d] mx-1" />

            <button
              onClick={handleSaveToDevice}
              disabled={isSaving}
              className="flex items-center gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 text-white font-semibold px-3.5 py-1.5 rounded-lg transition shadow-lg shadow-emerald-950/40"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{isSaving ? 'Writing...' : 'Save to Device'}</span>
            </button>

            <button
              onClick={handleExportJson}
              title="Export configuration to JSON file"
              className="p-1.5 bg-[#181d2c] hover:bg-[#21283c] border border-[#232b40] rounded-lg text-slate-300 transition"
            >
              <Download className="w-3.5 h-3.5" />
            </button>

            <label
              title="Import configuration JSON"
              className="cursor-pointer p-1.5 bg-[#181d2c] hover:bg-[#21283c] border border-[#232b40] rounded-lg text-slate-300 transition"
            >
              <Upload className="w-3.5 h-3.5" />
              <input type="file" accept=".json" onChange={handleImportJson} className="hidden" />
            </label>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 overflow-x-auto">
          {[
            { id: 'profiles', label: 'Profiles & Emulation', icon: Gamepad2 },
            { id: 'devices', label: 'Hardware Pins & Sensors', icon: Cpu },
            { id: 'mappings', label: 'Input Mappings & Calibration', icon: Sliders },
            { id: 'leds', label: 'RGB & Reactive LEDs', icon: Sparkles },
            { id: 'telemetry', label: 'Live Telemetry & Console', icon: Activity },
            { id: 'labels', label: 'Labels & Styling', icon: Tag },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-3.5 border-b-2 text-xs font-medium transition whitespace-nowrap ${
                  active
                    ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Save Status Notification Banner */}
      {saveStatus && (
        <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-4 py-2 text-center text-xs text-emerald-300 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{saveStatus}</span>
        </div>
      )}

      {/* Main Content View */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">
        {activeTab === 'profiles' && (
          <ProfilesTab
            config={config}
            setConfig={setConfig}
            selectedProfileId={selectedProfileId}
            setSelectedProfileId={setSelectedProfileId}
          />
        )}

        {activeTab === 'devices' && (
          <DevicesTab
            config={config}
            setConfig={setConfig}
            selectedProfileId={selectedProfileId}
          />
        )}

        {activeTab === 'mappings' && (
          <MappingsTab
            config={config}
            setConfig={setConfig}
            selectedProfileId={selectedProfileId}
          />
        )}

        {activeTab === 'leds' && (
          <LedsTab
            config={config}
            setConfig={setConfig}
            selectedProfileId={selectedProfileId}
          />
        )}

        {activeTab === 'telemetry' && <TelemetryTab />}

        {activeTab === 'labels' && (
          <GuiConfigTab config={config} setConfig={setConfig} />
        )}
      </main>

      {/* Device Selection & Troubleshooting Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#141824] border border-[#23293d] rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-[#23293d] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                  <Usb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">USB Device Scanner & Connection</h3>
                  <p className="text-xs text-slate-400">Detecting RP2040 and Santroller devices on Windows</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1f2638] transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto flex-1 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Discovered HID Devices ({discoveredDevices.length})
                </span>
                <button
                  onClick={handleScanDevices}
                  disabled={isScanning}
                  className="flex items-center gap-1.5 text-xs bg-[#1f273b] hover:bg-[#28324c] border border-[#2f3b58] text-slate-200 px-3 py-1.5 rounded-lg transition"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin text-indigo-400' : ''}`} />
                  <span>{isScanning ? 'Scanning...' : 'Rescan Devices'}</span>
                </button>
              </div>

              {/* Devices List */}
              <div className="flex flex-col gap-2">
                {discoveredDevices.length === 0 ? (
                  <div className="bg-[#0e111a] border border-[#1f2638] rounded-xl p-6 text-center text-xs text-slate-400 flex flex-col items-center gap-2">
                    <AlertCircle className="w-8 h-8 text-amber-400" />
                    <p className="font-medium text-slate-200">No USB HID devices detected</p>
                    <p className="text-[11px] text-slate-400 max-w-md">
                      If your RP2040 device is plugged in, click the button below to prompt Windows/Chromium to grant permission, or verify your USB cable.
                    </p>
                    <button
                      onClick={handleAutoConnectHardware}
                      className="mt-2 text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-lg transition shadow-md"
                    >
                      Prompt WebHID Permission Picker
                    </button>
                  </div>
                ) : (
                  discoveredDevices.map((dev, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border flex items-center justify-between transition ${
                        dev.isSantroller
                          ? 'bg-emerald-950/20 border-emerald-500/40 hover:border-emerald-500'
                          : 'bg-[#181d2c] border-[#232b40] hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            dev.isSantroller
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          <Usb className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-white">
                              {dev.productName || 'Unknown HID Device'}
                            </h4>
                            {dev.isSantroller && (
                              <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                                Santroller / RP2040 Match
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-3 mt-0.5">
                            <span>VID: 0x{dev.vendorId ? dev.vendorId.toString(16).padStart(4, '0').toUpperCase() : '----'}</span>
                            <span>PID: 0x{dev.productId ? dev.productId.toString(16).padStart(4, '0').toUpperCase() : '----'}</span>
                            {dev.usagePage && <span>UsagePage: 0x{dev.usagePage.toString(16).toUpperCase()}</span>}
                            <span className="text-slate-500 capitalize">{dev.source}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDirectConnectDevice(dev)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${
                          dev.isSantroller
                            ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950/50'
                            : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                        }`}
                      >
                        <span>Connect</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Troubleshooting Instructions for RP2040 on Windows */}
              <div className="bg-[#0e111a] border border-[#1f2638] rounded-xl p-4 text-xs text-slate-300 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                  <Info className="w-4 h-4" />
                  <span>RP2040 Windows Connection Guide</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px]">
                  <li>
                    <strong className="text-slate-200">Data Cable:</strong> Make sure your USB cable supports data transfer (some cheap cables only deliver power).
                  </li>
                  <li>
                    <strong className="text-slate-200">XInput Mode on Windows:</strong> When Santroller connects in XInput mode, Windows automatically binds the gamepad driver. The configurator connects over the secondary Vendor Feature Report (Usage Page <code className="text-indigo-300">0xFF00</code>).
                  </li>
                  <li>
                    <strong className="text-slate-200">Reflashing / BOOTSEL:</strong> If the firmware crashed or is unconfigured, hold the <code className="text-indigo-300">BOOTSEL</code> button on the RP2040 while plugging it in. It will mount as a USB flash drive (RPI-RP2) where you can drag and drop the Santroller <code className="text-indigo-300">.uf2</code> file.
                  </li>
                </ul>
              </div>

              {/* Connection Diagnostics Console */}
              <div className="bg-[#0b0d14] border border-[#1a1f2e] rounded-xl p-3 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Connection Diagnostics Log</span>
                </div>
                <div className="font-mono text-[10px] text-slate-400 max-h-28 overflow-y-auto space-y-0.5">
                  {connectionLogs.slice(-10).map((log, i) => (
                    <div key={i} className="leading-tight text-slate-300">{log}</div>
                  ))}
                  {connectionLogs.length === 0 && (
                    <div className="text-slate-600">No connection logs yet.</div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#23293d] flex items-center justify-between bg-[#10131d]">
              <button
                onClick={handleConnectSimulator}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                <span>Switch to Offline Simulator</span>
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-xs bg-[#1f273b] hover:bg-[#28324c] border border-[#2f3b58] text-slate-200 px-4 py-1.5 rounded-lg font-medium transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
