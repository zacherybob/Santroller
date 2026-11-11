import React from 'react';
import { proto } from '../proto/proto';
import { Tag, Building, Plus, Trash2, Eye, ShieldAlert } from 'lucide-react';

interface GuiConfigTabProps {
  config: proto.Config;
  onChange: (newConfig: proto.Config) => void;
}

export const GuiConfigTab: React.FC<GuiConfigTabProps> = ({ config, onChange }) => {
  const guiConfigs = config.guiConfig || [];

  const handleAddLabel = () => {
    const nextId = (guiConfigs.reduce((max, g) => Math.max(max, g.deviceid || 0), 0) || 0) + 1;
    const newEntry = proto.GuiConfig.create({
      deviceid: nextId,
      label: {
        label: `Switch / Fret #${nextId}`,
        pin: 2,
        showToCustomer: true
      }
    });

    onChange(
      proto.Config.create({
        ...config,
        guiConfig: [...guiConfigs, newEntry]
      })
    );
  };

  const handleDeleteLabel = (index: number) => {
    const updated = guiConfigs.filter((_, idx) => idx !== index);
    onChange(proto.Config.create({ ...config, guiConfig: updated }));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#141824] border border-[#23293d] rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Tag className="w-5 h-5 text-indigo-400" />
            Custom Labels & Seller Branding Config
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Store friendly labels for pins and components inside the device's EEPROM so end users know what each physical switch does, or customize custom builder/seller branding.
          </p>
        </div>

        <button
          onClick={handleAddLabel}
          className="flex items-center gap-1.5 text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg transition shadow-lg shadow-indigo-950/40"
        >
          <Plus className="w-4 h-4" />
          <span>Add Custom Pin Label</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guiConfigs.map((g, idx) => {
          const labelInfo = g.label;
          return (
            <div
              key={idx}
              className="bg-[#141824] border border-[#23293d] rounded-xl p-4 flex flex-col justify-between group hover:border-indigo-500/50 transition"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono bg-[#1b2132] px-2 py-0.5 rounded text-indigo-300 border border-[#242c44]">
                    Pin Label #{g.deviceid}
                  </span>
                  <button
                    onClick={() => handleDeleteLabel(idx)}
                    className="p-1 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {labelInfo && (
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block mb-1">Friendly Name</span>
                      <input
                        type="text"
                        value={labelInfo.label || ''}
                        onChange={(e) => {
                          labelInfo.label = e.target.value;
                          onChange(proto.Config.create({ ...config }));
                        }}
                        className="w-full bg-[#1b2132] border border-[#29334e] rounded px-2.5 py-1.5 text-white focus:border-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-1">Target Pin</span>
                      <input
                        type="number"
                        value={labelInfo.pin || 0}
                        onChange={(e) => {
                          labelInfo.pin = parseInt(e.target.value);
                          onChange(proto.Config.create({ ...config }));
                        }}
                        className="w-full bg-[#1b2132] border border-[#29334e] rounded px-2.5 py-1.5 text-white font-mono focus:border-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {guiConfigs.length === 0 && (
          <div className="col-span-2 text-center py-12 text-slate-400 border border-dashed border-[#23293d] rounded-xl">
            No custom labels saved in this configuration yet.
          </div>
        )}
      </div>
    </div>
  );
};
