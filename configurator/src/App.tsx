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
  Radio,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Play
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

  useEffect(() => {
    // If not already connected, connect to simulator by default so user can test immediately
    if (!deviceConnection.isConnected()) {
      deviceConnection.connectSimulator();
      setIsConnected(true);
      setIsSimulator(true);
      setBoardInfo(deviceConnection.getBoard());
      setVersionInfo(deviceConnection.getVersion());
      setConfig(deviceConnection.getConfig());
    }
  }, []);

  const handleConnectHardware = async () => {
    try {
      const ok = await deviceConnection.connectWebHID();
      if (ok) {
        setIsConnected(true);
        setIsSimulator(false);
        setBoardInfo(deviceConnection.getBoard());
        setVersionInfo(deviceConnection.getVersion());
        setConfig(deviceConnection.getConfig());
      }
    } catch (err: any) {
      alert(`USB connection error: ${err.message}`);
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
          <div className="flex items-center gap-3">
            {isConnected ? (
              <div className="flex items-center gap-2 bg-[#181f30] border border-[#26314c] rounded-lg px-3 py-1.5 text-xs">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-medium text-slate-200">
                  {isSimulator ? 'Simulator Active' : 'USB Connected'}
                </span>
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
                <button
                  onClick={handleConnectHardware}
                  className="flex items-center gap-1.5 text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-3.5 py-2 rounded-lg transition shadow-md shadow-indigo-600/30"
                >
                  <Usb className="w-4 h-4" />
                  <span>Connect USB Device</span>
                </button>
                <button
                  onClick={handleConnectSimulator}
                  className="flex items-center gap-1.5 text-xs bg-[#1f273b] hover:bg-[#28324c] border border-[#2f3b58] text-slate-200 font-medium px-3 py-2 rounded-lg transition"
                >
                  <Play className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Offline Simulator</span>
                </button>
              </div>
            )}

            {/* Save / Export Actions */}
            <div className="h-6 w-px bg-[#232a3d] mx-1" />

            <button
              onClick={handleSaveToDevice}
              disabled={isSaving}
              className="flex items-center gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 text-white font-semibold px-4 py-2 rounded-lg transition shadow-lg shadow-emerald-950/40"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{isSaving ? 'Writing...' : 'Save to Device'}</span>
            </button>

            <button
              onClick={handleExportJson}
              title="Export configuration to JSON file"
              className="p-2 bg-[#181d2c] hover:bg-[#21283c] border border-[#232b40] rounded-lg text-slate-300 transition"
            >
              <Download className="w-4 h-4" />
            </button>

            <label
              title="Import configuration JSON"
              className="cursor-pointer p-2 bg-[#181d2c] hover:bg-[#21283c] border border-[#232b40] rounded-lg text-slate-300 transition"
            >
              <Upload className="w-4 h-4" />
              <input type="file" accept=".json" onChange={handleImportJson} className="hidden" />
            </label>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 overflow-x-auto">
          {[
            { id: 'profiles', label: 'Profiles & Emulation', icon: Gamepad2 },
            { id: 'devices', label: 'Hardware Peripherals', icon: Cpu },
            { id: 'mappings', label: 'Input Mappings & Pins', icon: Sliders },
            { id: 'leds', label: 'Lighting & LEDs', icon: Sparkles },
            { id: 'telemetry', label: 'Live Telemetry & Logs', icon: Activity },
            { id: 'labels', label: 'Branding & Labels', icon: Tag },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition ${
                  isActive
                    ? 'border-indigo-500 text-white font-semibold bg-indigo-500/5'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Save Notification Toast */}
      {saveStatus && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-medium animate-bounce">
          <CheckCircle2 className="w-5 h-5" />
          <span>{saveStatus}</span>
        </div>
      )}

      {/* Main Workspace Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'profiles' && (
          <ProfilesTab
            config={config}
            onChange={setConfig}
            selectedProfileId={selectedProfileId}
            onSelectProfile={setSelectedProfileId}
          />
        )}

        {activeTab === 'devices' && (
          <DevicesTab config={config} onChange={setConfig} />
        )}

        {activeTab === 'mappings' && (
          <MappingsTab
            config={config}
            onChange={setConfig}
            selectedProfileId={selectedProfileId}
          />
        )}

        {activeTab === 'leds' && (
          <LedsTab
            config={config}
            onChange={setConfig}
            selectedProfileId={selectedProfileId}
          />
        )}

        {activeTab === 'telemetry' && <TelemetryTab />}

        {activeTab === 'labels' && (
          <GuiConfigTab config={config} onChange={setConfig} />
        )}
      </main>
    </div>
  );
}
