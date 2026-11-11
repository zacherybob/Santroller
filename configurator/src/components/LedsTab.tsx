import React, { useState } from 'react';
import { proto } from '../proto/proto';
import { RgbPatternTypeLabels, ReactiveRgbPatternTypeLabels } from '../constants/enums';
import { Sparkles, Plus, Trash2, Palette, Sun, Flame, Eye } from 'lucide-react';

interface LedsTabProps {
  config: proto.Config;
  onChange: (newConfig: proto.Config) => void;
  selectedProfileId: number;
}

export const LedsTab: React.FC<LedsTabProps> = ({ config, onChange, selectedProfileId }) => {
  const profile = (config.profiles || []).find(p => p.opts?.uid === selectedProfileId) || config.profiles?.[0];
  const leds = profile?.leds || [];

  const handleAddLed = () => {
    if (!profile) return;
    const newLed = proto.Led.create({
      device: {
        rgb: {
          deviceId: 1,
          hasStart: true,
          startR: 0,
          startG: 255,
          startB: 128,
          startW: 0,
          endR: 255,
          endG: 0,
          endB: 128,
          endW: 0,
          activeLed: [0, 1, 2]
        }
      },
      mapping: {
        patternMapping: {
          pattern: proto.RgbPatternType.PatternRainbow,
          speed: 25,
          brightness: 200
        }
      }
    });

    const updatedProfile = proto.Profile.create({
      ...profile,
      leds: [...leds, newLed]
    });

    const updatedProfiles = (config.profiles || []).map(p =>
      p.opts?.uid === profile.opts?.uid ? updatedProfile : p
    );

    onChange(proto.Config.create({ ...config, profiles: updatedProfiles }));
  };

  const handleDeleteLed = (index: number) => {
    if (!profile) return;
    const updated = leds.filter((_, i) => i !== index);
    const updatedProfile = proto.Profile.create({
      ...profile,
      leds: updated
    });
    const updatedProfiles = (config.profiles || []).map(p =>
      p.opts?.uid === profile.opts?.uid ? updatedProfile : p
    );
    onChange(proto.Config.create({ ...config, profiles: updatedProfiles }));
  };

  const handleUpdateLed = (index: number, updatedLed: proto.ILed) => {
    if (!profile) return;
    const updated = leds.map((l, i) => (i === index ? proto.Led.create(updatedLed) : l));
    const updatedProfile = proto.Profile.create({
      ...profile,
      leds: updated
    });
    const updatedProfiles = (config.profiles || []).map(p =>
      p.opts?.uid === profile.opts?.uid ? updatedProfile : p
    );
    onChange(proto.Config.create({ ...config, profiles: updatedProfiles }));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#141824] border border-[#23293d] rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            LED & RGB Lighting Effects ({leds.length})
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Program addressable RGB LEDs, GPIO indicator lights, and DMX fixtures. Configure static colors, animated rainbow cycles, or reactive strum/hit illumination.
          </p>
        </div>

        <button
          onClick={handleAddLed}
          className="flex items-center gap-1.5 text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg transition shadow-lg shadow-indigo-950/40"
        >
          <Plus className="w-4 h-4" />
          <span>Add LED Effect</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {leds.map((led, idx) => {
          const rgb = led.device?.rgb;
          const pattern = led.mapping?.patternMapping;
          const inputMapping = led.mapping?.inputMapping;

          return (
            <div
              key={idx}
              className="bg-[#141824] border border-[#23293d] rounded-xl p-5 flex flex-col justify-between group hover:border-indigo-500/50 transition"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400">
                      <Palette className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-100 text-sm">
                        {pattern ? 'Animated Pattern Effect' : inputMapping ? 'Reactive Input Light' : 'Static Color Effect'}
                      </h3>
                      <p className="text-xs text-slate-400">
                        Assigned to Device #{rgb?.deviceId || 1} • LEDs [{(rgb?.activeLed || []).join(', ')}]
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeleteLed(idx)}
                    className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Color Visualizer Swatch */}
                {rgb && (
                  <div className="flex items-center gap-3 bg-[#111420] p-3 rounded-lg border border-[#1f2638]">
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className="w-8 h-8 rounded-full border border-white/20 shadow"
                        style={{ backgroundColor: `rgb(${rgb.startR || 0}, ${rgb.startG || 0}, ${rgb.startB || 0})` }}
                      />
                      <span className="text-[10px] text-slate-400">Start</span>
                    </div>

                    <div className="flex-1 flex flex-col gap-1 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>RGB Range</span>
                        <span className="font-mono text-slate-200">
                          {rgb.startR},{rgb.startG},{rgb.startB} → {rgb.endR},{rgb.endG},{rgb.endB}
                        </span>
                      </div>
                      <div
                        className="h-2 rounded-full w-full"
                        style={{
                          background: `linear-gradient(to right, rgb(${rgb.startR || 0}, ${rgb.startG || 0}, ${rgb.startB || 0}), rgb(${rgb.endR || 0}, ${rgb.endG || 0}, ${rgb.endB || 0}))`
                        }}
                      />
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <div
                        className="w-8 h-8 rounded-full border border-white/20 shadow"
                        style={{ backgroundColor: `rgb(${rgb.endR || 0}, ${rgb.endG || 0}, ${rgb.endB || 0})` }}
                      />
                      <span className="text-[10px] text-slate-400">End</span>
                    </div>
                  </div>
                )}

                {/* Effect Mode & Settings */}
                <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                  <div>
                    <label className="text-slate-400 block mb-1">Effect Type</label>
                    <select
                      value={pattern ? 'pattern' : inputMapping ? 'reactive' : 'static'}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === 'pattern') {
                          handleUpdateLed(idx, {
                            ...led,
                            mapping: {
                              patternMapping: { pattern: proto.RgbPatternType.PatternRainbow, speed: 20, brightness: 255 }
                            }
                          });
                        } else if (val === 'reactive') {
                          handleUpdateLed(idx, {
                            ...led,
                            mapping: {
                              inputMapping: {
                                input: { gpio: { pin: 2, pinMode: proto.PinMode.PullUp, analog: false } },
                                pattern: proto.ReactiveRgbPatternType.PatternStatic
                              }
                            }
                          });
                        } else {
                          handleUpdateLed(idx, {
                            ...led,
                            mapping: { staticMapping: {} }
                          });
                        }
                      }}
                      className="w-full bg-[#1b2132] border border-[#2a3450] text-slate-200 rounded px-2.5 py-1.5 focus:border-indigo-500 focus:outline-none"
                    >
                      <option value="pattern">Animated Rainbow / Breathing</option>
                      <option value="reactive">Reactive (Triggered by Button/Hit)</option>
                      <option value="static">Static Always-On</option>
                    </select>
                  </div>

                  {pattern && (
                    <div>
                      <label className="text-slate-400 block mb-1">Pattern</label>
                      <select
                        value={pattern.pattern || proto.RgbPatternType.PatternRainbow}
                        onChange={(e) => {
                          const pType = parseInt(e.target.value);
                          handleUpdateLed(idx, {
                            ...led,
                            mapping: {
                              patternMapping: { ...pattern, pattern: pType }
                            }
                          });
                        }}
                        className="w-full bg-[#1b2132] border border-[#2a3450] text-slate-200 rounded px-2.5 py-1.5 focus:border-indigo-500 focus:outline-none"
                      >
                        {Object.entries(RgbPatternTypeLabels).map(([id, label]) => (
                          <option key={id} value={id}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {pattern && (
                    <>
                      <div>
                        <span className="text-slate-400 flex items-center justify-between mb-1">
                          <span>Speed:</span>
                          <span className="font-mono">{pattern.speed}</span>
                        </span>
                        <input
                          type="range"
                          min="1"
                          max="100"
                          value={pattern.speed || 20}
                          onChange={(e) => {
                            handleUpdateLed(idx, {
                              ...led,
                              mapping: {
                                patternMapping: { ...pattern, speed: parseInt(e.target.value) }
                              }
                            });
                          }}
                          className="w-full accent-indigo-500"
                        />
                      </div>
                      <div>
                        <span className="text-slate-400 flex items-center justify-between mb-1">
                          <span>Brightness:</span>
                          <span className="font-mono">{pattern.brightness}</span>
                        </span>
                        <input
                          type="range"
                          min="0"
                          max="255"
                          value={pattern.brightness || 200}
                          onChange={(e) => {
                            handleUpdateLed(idx, {
                              ...led,
                              mapping: {
                                patternMapping: { ...pattern, brightness: parseInt(e.target.value) }
                              }
                            });
                          }}
                          className="w-full accent-indigo-500"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {leds.length === 0 && (
          <div className="col-span-2 text-center py-12 text-slate-400 border border-dashed border-[#23293d] rounded-xl">
            No lighting effects defined yet. Click "Add LED Effect" to add animations or button-reactive lighting!
          </div>
        )}
      </div>
    </div>
  );
};
