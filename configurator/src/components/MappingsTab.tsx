import React, { useState } from 'react';
import { proto } from '../proto/proto';
import { PinModeLabels } from '../constants/enums';
import { deviceConnection } from '../services/deviceConnection';
import { Sliders, Plus, Trash2, Crosshair, Sparkles, AlertCircle, ArrowRightLeft } from 'lucide-react';

interface MappingsTabProps {
  config: proto.Config;
  onChange: (newConfig: proto.Config) => void;
  selectedProfileId: number;
}

export const MappingsTab: React.FC<MappingsTabProps> = ({ config, onChange, selectedProfileId }) => {
  const profile = (config.profiles || []).find(p => p.opts?.uid === selectedProfileId) || config.profiles?.[0];
  const mappings = profile?.mappings || [];
  const [detectingIndex, setDetectingIndex] = useState<number | null>(null);

  const handleAddMapping = () => {
    if (!profile) return;
    const newMapping = proto.Mapping.create({
      mapping: { ghButton: proto.GuitarHeroGuitarButtonType.GreenFret },
      input: {
        gpio: { pin: 2, pinMode: proto.PinMode.PullUp, analog: false }
      },
      debounce: 5,
      min: 0,
      max: 1023,
      deadzone: 0,
      inverted: false
    });

    const updatedProfile = proto.Profile.create({
      ...profile,
      mappings: [...mappings, newMapping]
    });

    const updatedProfiles = (config.profiles || []).map(p =>
      p.opts?.uid === profile.opts?.uid ? updatedProfile : p
    );

    onChange(proto.Config.create({ ...config, profiles: updatedProfiles }));
  };

  const handleDeleteMapping = (index: number) => {
    if (!profile) return;
    const updatedMappings = mappings.filter((_, idx) => idx !== index);
    const updatedProfile = proto.Profile.create({
      ...profile,
      mappings: updatedMappings
    });

    const updatedProfiles = (config.profiles || []).map(p =>
      p.opts?.uid === profile.opts?.uid ? updatedProfile : p
    );

    onChange(proto.Config.create({ ...config, profiles: updatedProfiles }));
  };

  const handleUpdateMapping = (index: number, updates: Partial<proto.IMapping>) => {
    if (!profile) return;
    const updatedMappings = mappings.map((m, idx) => {
      if (idx === index) {
        return proto.Mapping.create({ ...m, ...updates });
      }
      return m;
    });

    const updatedProfile = proto.Profile.create({
      ...profile,
      mappings: updatedMappings
    });

    const updatedProfiles = (config.profiles || []).map(p =>
      p.opts?.uid === profile.opts?.uid ? updatedProfile : p
    );

    onChange(proto.Config.create({ ...config, profiles: updatedProfiles }));
  };

  const handleAutoDetectPin = async (index: number, isAnalog: boolean) => {
    setDetectingIndex(index);
    try {
      await deviceConnection.sendCommand({
        detectPin: {
          detectType: isAnalog ? proto.PinDetectType.DetectAnalog : proto.PinDetectType.DetectDigital
        }
      });

      // Hook one-time event listener
      const cleanup = (evt: proto.IEvent) => {
        if (evt.pin && evt.pin.pin !== undefined) {
          const detectedPin = evt.pin.pin;
          const current = mappings[index];
          if (current && current.input) {
            handleUpdateMapping(index, {
              input: {
                gpio: {
                  pin: detectedPin,
                  pinMode: isAnalog ? proto.PinMode.Floating : proto.PinMode.PullUp,
                  analog: isAnalog
                }
              }
            });
          }
          setDetectingIndex(null);
        }
      };

      deviceConnection.onEvent(cleanup);
    } catch (e) {
      setDetectingIndex(null);
    }
  };

  // Helper to format output display string
  const getOutputLabel = (out: proto.IOutput): string => {
    if (out.ghButton !== undefined && out.ghButton !== null) {
      const names: Record<number, string> = {
        [proto.GuitarHeroGuitarButtonType.GreenFret]: 'GH Green Fret',
        [proto.GuitarHeroGuitarButtonType.RedFret]: 'GH Red Fret',
        [proto.GuitarHeroGuitarButtonType.YellowFret]: 'GH Yellow Fret',
        [proto.GuitarHeroGuitarButtonType.BlueFret]: 'GH Blue Fret',
        [proto.GuitarHeroGuitarButtonType.OrangeFret]: 'GH Orange Fret',
        [proto.GuitarHeroGuitarButtonType.StrumUp]: 'Strum Bar UP',
        [proto.GuitarHeroGuitarButtonType.StrumDown]: 'Strum Bar DOWN',
        [proto.GuitarHeroGuitarButtonType.StarPower]: 'Star Power Button',
      };
      return names[out.ghButton] || `GH Button (${out.ghButton})`;
    }
    if (out.ghAxis !== undefined && out.ghAxis !== null) {
      const axes: Record<number, string> = {
        [proto.GuitarHeroGuitarAxisType.Whammy]: 'Whammy Bar (Analog)',
        [proto.GuitarHeroGuitarAxisType.Slider]: 'Touch Slider Bar (Analog)',
      };
      return axes[out.ghAxis] || `GH Axis (${out.ghAxis})`;
    }
    if (out.gamepadButton !== undefined && out.gamepadButton !== null) {
      return `Gamepad Button (${out.gamepadButton})`;
    }
    if (out.gamepadAxis !== undefined && out.gamepadAxis !== null) {
      return `Gamepad Axis (${out.gamepadAxis})`;
    }
    return 'Custom Action';
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#141824] border border-[#23293d] rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-400" />
            Input-to-Output Mappings ({mappings.length})
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Assign physical switches, potentiometers, hall sensors, and peripheral inputs to game controller buttons & axes.
          </p>
        </div>

        <button
          onClick={handleAddMapping}
          className="flex items-center gap-1.5 text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg transition shadow-lg shadow-indigo-950/40"
        >
          <Plus className="w-4 h-4" />
          <span>Add Mapping</span>
        </button>
      </div>

      {detectingIndex !== null && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-center justify-between animate-pulse">
          <div className="flex items-center gap-3 text-amber-300">
            <Crosshair className="w-5 h-5 animate-spin" />
            <span className="text-sm font-medium">
              Listening for controller input... Press the button or move the axis on your controller now!
            </span>
          </div>
          <button
            onClick={() => setDetectingIndex(null)}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded transition"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Mappings Table */}
      <div className="bg-[#141824] border border-[#23293d] rounded-xl overflow-hidden shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#101420] text-slate-400 text-xs font-semibold uppercase tracking-wider border-b border-[#23293d]">
              <th className="py-3 px-4">Output Action</th>
              <th className="py-3 px-4">Input Pin / Source</th>
              <th className="py-3 px-4">Pin Mode</th>
              <th className="py-3 px-4">Calibration & Filtering</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e2436] text-xs">
            {mappings.map((m, idx) => {
              const isAnalog = !!m.input?.gpio?.analog;
              const pin = m.input?.gpio?.pin ?? 0;
              const pinMode = m.input?.gpio?.pinMode ?? proto.PinMode.PullUp;

              return (
                <tr key={idx} className="hover:bg-[#181d2c]/60 transition group">
                  {/* Output Action */}
                  <td className="py-3.5 px-4 font-medium text-slate-200">
                    <div className="flex items-center gap-2">
                      <select
                        value={
                          m.mapping?.ghButton !== undefined
                            ? `ghb_${m.mapping.ghButton}`
                            : m.mapping?.ghAxis !== undefined
                            ? `gha_${m.mapping.ghAxis}`
                            : 'custom'
                        }
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val.startsWith('ghb_')) {
                            const bId = parseInt(val.replace('ghb_', ''));
                            handleUpdateMapping(idx, {
                              mapping: { ghButton: bId }
                            });
                          } else if (val.startsWith('gha_')) {
                            const aId = parseInt(val.replace('gha_', ''));
                            handleUpdateMapping(idx, {
                              mapping: { ghAxis: aId }
                            });
                          }
                        }}
                        className="bg-[#1b2132] border border-[#2a3450] text-slate-100 rounded px-2.5 py-1.5 focus:border-indigo-500 focus:outline-none"
                      >
                        <optgroup label="Guitar Hero Buttons">
                          <option value="ghb_1">Green Fret</option>
                          <option value="ghb_2">Red Fret</option>
                          <option value="ghb_3">Yellow Fret</option>
                          <option value="ghb_4">Blue Fret</option>
                          <option value="ghb_5">Orange Fret</option>
                          <option value="ghb_8">Strum UP</option>
                          <option value="ghb_9">Strum DOWN</option>
                          <option value="ghb_10">Star Power / Select</option>
                        </optgroup>
                        <optgroup label="Guitar Hero Axes">
                          <option value="gha_1">Whammy Bar</option>
                          <option value="gha_2">Slider Bar (Touch/Analog)</option>
                        </optgroup>
                      </select>
                    </div>
                  </td>

                  {/* Input Source & Pin */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">GPIO:</span>
                      <input
                        type="number"
                        value={pin}
                        onChange={(e) => {
                          const newPin = parseInt(e.target.value);
                          handleUpdateMapping(idx, {
                            input: {
                              gpio: {
                                pin: newPin,
                                pinMode: pinMode,
                                analog: isAnalog
                              }
                            }
                          });
                        }}
                        className="w-16 bg-[#1b2132] border border-[#2a3450] text-white rounded px-2 py-1 text-center font-mono"
                      />

                      <button
                        onClick={() => handleAutoDetectPin(idx, isAnalog)}
                        title="Auto-detect physical pin"
                        className="flex items-center gap-1 bg-[#232a3d] hover:bg-indigo-600 text-slate-300 hover:text-white px-2 py-1 rounded transition text-xs"
                      >
                        <Crosshair className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Detect</span>
                      </button>
                    </div>
                  </td>

                  {/* Pin Mode / Input Type */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <select
                        value={pinMode}
                        onChange={(e) => {
                          const newMode = parseInt(e.target.value);
                          handleUpdateMapping(idx, {
                            input: {
                              gpio: {
                                pin: pin,
                                pinMode: newMode,
                                analog: isAnalog
                              }
                            }
                          });
                        }}
                        className="bg-[#1b2132] border border-[#2a3450] text-slate-200 rounded px-2 py-1"
                      >
                        {Object.entries(PinModeLabels).map(([id, label]) => (
                          <option key={id} value={id}>
                            {label}
                          </option>
                        ))}
                      </select>

                      <label className="flex items-center gap-1 cursor-pointer ml-1 text-slate-400">
                        <input
                          type="checkbox"
                          checked={isAnalog}
                          onChange={(e) => {
                            const newAnalog = e.target.checked;
                            handleUpdateMapping(idx, {
                              input: {
                                gpio: {
                                  pin: pin,
                                  pinMode: newAnalog ? proto.PinMode.Floating : proto.PinMode.PullUp,
                                  analog: newAnalog
                                }
                              }
                            });
                          }}
                          className="rounded border-slate-600 text-indigo-600"
                        />
                        <span>ADC</span>
                      </label>
                    </div>
                  </td>

                  {/* Calibration & Debounce */}
                  <td className="py-3.5 px-4 text-slate-300">
                    {isAnalog ? (
                      <div className="flex items-center gap-2 text-xs">
                        <span>Min:</span>
                        <input
                          type="number"
                          value={m.min ?? 0}
                          onChange={(e) => handleUpdateMapping(idx, { min: parseInt(e.target.value) })}
                          className="w-14 bg-[#1b2132] border border-[#2a3450] rounded px-1.5 py-0.5 text-center"
                        />
                        <span>Max:</span>
                        <input
                          type="number"
                          value={m.max ?? 1023}
                          onChange={(e) => handleUpdateMapping(idx, { max: parseInt(e.target.value) })}
                          className="w-14 bg-[#1b2132] border border-[#2a3450] rounded px-1.5 py-0.5 text-center"
                        />
                        <span>Deadzone:</span>
                        <input
                          type="number"
                          value={m.deadzone ?? 0}
                          onChange={(e) => handleUpdateMapping(idx, { deadzone: parseInt(e.target.value) })}
                          className="w-12 bg-[#1b2132] border border-[#2a3450] rounded px-1.5 py-0.5 text-center"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Debounce:</span>
                        <input
                          type="number"
                          value={m.debounce ?? 5}
                          onChange={(e) => handleUpdateMapping(idx, { debounce: parseInt(e.target.value) })}
                          className="w-14 bg-[#1b2132] border border-[#2a3450] rounded px-1.5 py-0.5 text-center font-mono"
                        />
                        <span className="text-slate-500">ms</span>
                        <label className="flex items-center gap-1 ml-3 cursor-pointer text-slate-400">
                          <input
                            type="checkbox"
                            checked={!!m.inverted}
                            onChange={(e) => handleUpdateMapping(idx, { inverted: e.target.checked })}
                            className="rounded border-slate-600 text-indigo-600"
                          />
                          <span>Invert</span>
                        </label>
                      </div>
                    )}
                  </td>

                  {/* Delete */}
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => handleDeleteMapping(idx)}
                      title="Remove mapping"
                      className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {mappings.length === 0 && (
          <div className="py-12 text-center text-slate-400">
            No mappings configured for this profile yet. Click "Add Mapping" above to get started.
          </div>
        )}
      </div>
    </div>
  );
};
