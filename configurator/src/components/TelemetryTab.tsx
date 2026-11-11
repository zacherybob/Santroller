import React, { useState, useEffect, useRef } from 'react';
import { proto } from '../proto/proto';
import { deviceConnection } from '../services/deviceConnection';
import { Activity, Terminal, Flame, Zap, RefreshCw, Cpu, CheckCircle2, AlertTriangle, Send } from 'lucide-react';

export const TelemetryTab: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([
    'Santroller Configurator initialized.',
    'System ready.'
  ]);
  const [recentEvents, setRecentEvents] = useState<proto.IEvent[]>([]);
  const [buttonStates, setButtonStates] = useState<Record<number, boolean>>({});
  const [axisStates, setAxisStates] = useState<Record<number, { raw: number; val: number }>>({});
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    deviceConnection.onLog((msg) => {
      setLogs((prev) => [...prev.slice(-300), `[${new Date().toLocaleTimeString()}] ${msg}`]);
    });

    deviceConnection.onEvent((evt) => {
      setRecentEvents((prev) => [evt, ...prev.slice(0, 50)]);

      if (evt.button && evt.button.id !== undefined) {
        setButtonStates((prev) => ({
          ...prev,
          [evt.button!.id!]: !!evt.button!.state
        }));
      }

      if (evt.axis && evt.axis.id !== undefined) {
        setAxisStates((prev) => ({
          ...prev,
          [evt.axis!.id!]: {
            raw: evt.axis!.stateRaw || 0,
            val: evt.axis!.state || 0
          }
        }));
      }
    });
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleReboot = async () => {
    if (confirm('Reboot Santroller device into BOOTSEL / bootloader mode for firmware flashing?')) {
      await deviceConnection.rebootToBootloader();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Live Input Visualizer */}
      <div className="lg:col-span-1 flex flex-col gap-4">
        <div className="bg-[#141824] border border-[#23293d] rounded-xl p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#23293d]">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              Live Input Monitor
            </h2>
            <span className="text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
              POLLING ACTIVE
            </span>
          </div>

          {/* Quick Buttons Indicator */}
          <div>
            <span className="text-xs font-semibold uppercase text-slate-400 block mb-2">Digital Inputs</span>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => {
                const active = buttonStates[id];
                return (
                  <div
                    key={id}
                    className={`py-2 px-1 text-center rounded-lg border font-mono text-xs transition duration-75 ${
                      active
                        ? 'bg-emerald-500 text-black border-emerald-400 font-bold shadow-lg shadow-emerald-500/30 scale-105'
                        : 'bg-[#181d2c] border-[#22293e] text-slate-400'
                    }`}
                  >
                    B{id}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Axes Indicator */}
          <div>
            <span className="text-xs font-semibold uppercase text-slate-400 block mb-2">Analog Axes</span>
            <div className="flex flex-col gap-3">
              {[1, 2].map((axisId) => {
                const info = axisStates[axisId] || { raw: 512, val: 128 };
                const pct = Math.min(100, Math.max(0, (info.val / 255) * 100));
                return (
                  <div key={axisId} className="flex flex-col gap-1 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Axis #{axisId}</span>
                      <span className="font-mono text-slate-200">
                        Raw: {info.raw} ({Math.round(pct)}%)
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#181d2c] border border-[#22293e] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 transition-all duration-75"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hardware Quick Actions */}
          <div className="pt-2 border-t border-[#23293d] flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase text-slate-400">Maintenance & Bootloader</span>
            <button
              onClick={handleReboot}
              className="flex items-center justify-center gap-2 text-xs bg-amber-600/20 hover:bg-amber-600 border border-amber-500/30 hover:border-amber-500 text-amber-200 hover:text-white py-2 px-3 rounded-lg transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reboot to Bootloader (BOOTSEL)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Firmware Debug Console */}
      <div className="lg:col-span-2 bg-[#141824] border border-[#23293d] rounded-xl p-5 flex flex-col h-[580px]">
        <div className="flex items-center justify-between pb-3 border-b border-[#23293d]">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <Terminal className="w-4 h-4 text-indigo-400" />
            Device Console & Protocol Log
          </h2>
          <button
            onClick={() => setLogs([])}
            className="text-xs text-slate-400 hover:text-slate-200 transition"
          >
            Clear Log
          </button>
        </div>

        {/* Terminal Output */}
        <div className="flex-1 overflow-y-auto font-mono text-xs text-slate-300 p-3 my-3 bg-[#0a0d14] rounded-lg border border-[#1b2234] flex flex-col gap-1 leading-relaxed">
          {logs.map((line, idx) => (
            <div
              key={idx}
              className={
                line.includes('[FIRMWARE]')
                  ? 'text-cyan-400'
                  : line.includes('Error')
                  ? 'text-red-400'
                  : line.includes('Connected')
                  ? 'text-emerald-400'
                  : 'text-slate-300'
              }
            >
              {line}
            </div>
          ))}
          <div ref={logEndRef} />
        </div>

        <div className="text-[11px] text-slate-500 flex items-center justify-between">
          <span>Bidirectional USB HID Feature Reports & Interrupt In Endpoints</span>
          <span className="text-indigo-400">Protobuf v2 Streams</span>
        </div>
      </div>
    </div>
  );
};
