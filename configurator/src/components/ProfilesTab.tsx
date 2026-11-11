import React, { useState } from 'react';
import { proto } from '../proto/proto';
import { SubTypeLabels } from '../constants/enums';
import { Layers, Plus, Trash2, Cpu, Settings2, ShieldCheck, Gamepad2, ArrowRight } from 'lucide-react';

interface ProfilesTabProps {
  config: proto.Config;
  onChange: (newConfig: proto.Config) => void;
  selectedProfileId: number;
  onSelectProfile: (id: number) => void;
}

export const ProfilesTab: React.FC<ProfilesTabProps> = ({
  config,
  onChange,
  selectedProfileId,
  onSelectProfile
}) => {
  const profiles = config.profiles || [];
  const selectedProfile = profiles.find(p => p.opts?.uid === selectedProfileId) || profiles[0];

  const handleAddProfile = () => {
    const newUid = (profiles.reduce((max, p) => Math.max(max, p.opts?.uid || 0), 0) || 0) + 1;
    const newProfile = proto.Profile.create({
      opts: {
        uid: newUid,
        name: `New Profile #${newUid}`,
        deviceToEmulate: proto.SubType.GuitarHeroGuitar,
        faceButtonMappingMode: proto.FaceButtonMappingMode.LegendBased,
        xinputOnWindows: true,
        ps4OrPs5Mode: false,
        supportsSlider: true,
        invertYAxisHid: false,
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
      mappings: [],
      leds: []
    });

    const updated = proto.Config.create({
      ...config,
      profiles: [...profiles, newProfile]
    });
    onChange(updated);
    onSelectProfile(newUid);
  };

  const handleDeleteProfile = (uid: number) => {
    if (profiles.length <= 1) {
      alert('You must have at least one profile configured.');
      return;
    }
    const updatedProfiles = profiles.filter(p => p.opts?.uid !== uid);
    const updated = proto.Config.create({
      ...config,
      profiles: updatedProfiles
    });
    onChange(updated);
    if (selectedProfileId === uid) {
      onSelectProfile(updatedProfiles[0]?.opts?.uid || 1);
    }
  };

  const handleUpdateProfileOpts = (field: keyof proto.IProfileOpts, value: any) => {
    if (!selectedProfile || !selectedProfile.opts) return;
    const updatedOpts = { ...selectedProfile.opts, [field]: value };
    const updatedProfiles = profiles.map(p => {
      if (p.opts?.uid === selectedProfile.opts?.uid) {
        return proto.Profile.create({
          ...p,
          opts: updatedOpts
        });
      }
      return p;
    });

    onChange(proto.Config.create({ ...config, profiles: updatedProfiles }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar Profile List */}
      <div className="lg:col-span-1 bg-[#141824] border border-[#23293d] rounded-xl p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#23293d]">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
            <Layers className="w-4 h-4" />
            <span>Profiles ({profiles.length})</span>
          </div>
          <button
            onClick={handleAddProfile}
            className="flex items-center gap-1 text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-2.5 py-1.5 rounded-lg transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto max-h-[600px] pr-1">
          {profiles.map(p => {
            const uid = p.opts?.uid || 0;
            const isSelected = uid === selectedProfileId;
            const subType = p.opts?.deviceToEmulate || proto.SubType.GuitarHeroGuitar;
            return (
              <div
                key={uid}
                onClick={() => onSelectProfile(uid)}
                className={`cursor-pointer p-3 rounded-lg border transition flex items-center justify-between group ${
                  isSelected
                    ? 'bg-indigo-600/20 border-indigo-500/80 text-white shadow-lg shadow-indigo-950/40'
                    : 'bg-[#181d2c] border-[#22293e] hover:border-slate-600 text-slate-300'
                }`}
              >
                <div className="flex flex-col gap-0.5 truncate">
                  <div className="flex items-center gap-2 font-medium text-sm">
                    <Gamepad2 className={`w-4 h-4 ${isSelected ? 'text-indigo-400' : 'text-slate-500'}`} />
                    <span className="truncate">{p.opts?.name || `Profile #${uid}`}</span>
                  </div>
                  <span className="text-xs text-slate-400 truncate">
                    {SubTypeLabels[subType] || 'Custom Device'}
                  </span>
                </div>

                {profiles.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteProfile(uid);
                    }}
                    title="Delete profile"
                    className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/20 text-red-400 rounded transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Profile Settings Editor */}
      <div className="lg:col-span-3 bg-[#141824] border border-[#23293d] rounded-xl p-6">
        {selectedProfile && selectedProfile.opts ? (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#23293d]">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Settings2 className="w-5 h-5 text-indigo-400" />
                  {selectedProfile.opts.name}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Internal UID: <span className="font-mono text-indigo-300">{selectedProfile.opts.uid}</span> | Emulating: <span className="text-emerald-400 font-medium">{SubTypeLabels[selectedProfile.opts.deviceToEmulate] || 'Device'}</span>
                </p>
              </div>
            </div>

            {/* Profile General Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase text-slate-400">Profile Name</label>
                <input
                  type="text"
                  value={selectedProfile.opts.name || ''}
                  onChange={(e) => handleUpdateProfileOpts('name', e.target.value)}
                  className="bg-[#1b2132] border border-[#2a3450] text-slate-100 rounded-lg px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase text-slate-400">Emulated Rhythm Game SubType</label>
                <select
                  value={selectedProfile.opts.deviceToEmulate || proto.SubType.GuitarHeroGuitar}
                  onChange={(e) => handleUpdateProfileOpts('deviceToEmulate', parseInt(e.target.value))}
                  className="bg-[#1b2132] border border-[#2a3450] text-slate-100 rounded-lg px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                >
                  {Object.entries(SubTypeLabels).map(([id, label]) => (
                    <option key={id} value={id}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase text-slate-400">Face Button Mode</label>
                <select
                  value={selectedProfile.opts.faceButtonMappingMode || proto.FaceButtonMappingMode.LegendBased}
                  onChange={(e) => handleUpdateProfileOpts('faceButtonMappingMode', parseInt(e.target.value))}
                  className="bg-[#1b2132] border border-[#2a3450] text-slate-100 rounded-lg px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                >
                  <option value={proto.FaceButtonMappingMode.LegendBased}>Legend Based (A/B/X/Y labeled by prompt)</option>
                  <option value={proto.FaceButtonMappingMode.PositionBased}>Position Based (North/South/East/West)</option>
                </select>
              </div>
            </div>

            {/* Protocol & Compatibility Toggles */}
            <div className="border border-[#22293e] bg-[#101420] rounded-xl p-5 flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Console & OS Compatibility Flags
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-start gap-3 p-3 rounded-lg bg-[#181e2e] border border-[#242d45] cursor-pointer hover:border-slate-500 transition">
                  <input
                    type="checkbox"
                    checked={!!selectedProfile.opts.xinputOnWindows}
                    onChange={(e) => handleUpdateProfileOpts('xinputOnWindows', e.target.checked)}
                    className="mt-0.5 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-200">Force XInput on Windows</span>
                    <span className="text-xs text-slate-400">Emulates Xbox 360 controller when connected to Windows PC for automatic Clone Hero / YARG plug-and-play.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-lg bg-[#181e2e] border border-[#242d45] cursor-pointer hover:border-slate-500 transition">
                  <input
                    type="checkbox"
                    checked={!!selectedProfile.opts.ps4OrPs5Mode}
                    onChange={(e) => handleUpdateProfileOpts('ps4OrPs5Mode', e.target.checked)}
                    className="mt-0.5 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-200">PS4 / PS5 Mode</span>
                    <span className="text-xs text-slate-400">Enables PlayStation 4/5 specialty instrument emulation with auth passthrough.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-lg bg-[#181e2e] border border-[#242d45] cursor-pointer hover:border-slate-500 transition">
                  <input
                    type="checkbox"
                    checked={!!selectedProfile.opts.supportsSlider}
                    onChange={(e) => handleUpdateProfileOpts('supportsSlider', e.target.checked)}
                    className="mt-0.5 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-200">World Tour Slider Bar Support</span>
                    <span className="text-xs text-slate-400">Provides GH:WT style neck touch slider reports over HID/XInput.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-lg bg-[#181e2e] border border-[#242d45] cursor-pointer hover:border-slate-500 transition">
                  <input
                    type="checkbox"
                    checked={!!selectedProfile.opts.cymbalGlitchFix}
                    onChange={(e) => handleUpdateProfileOpts('cymbalGlitchFix', e.target.checked)}
                    className="mt-0.5 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-200">Drum Cymbal Glitch Fix</span>
                    <span className="text-xs text-slate-400">Prevents dropped hits during fast cymbal roll transitions on older drum kits.</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Profile Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="bg-[#181e2e] border border-[#242d45] rounded-xl p-4 text-center">
                <span className="text-2xl font-bold text-indigo-400">{selectedProfile.mappings?.length || 0}</span>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Configured Mappings</p>
              </div>
              <div className="bg-[#181e2e] border border-[#242d45] rounded-xl p-4 text-center">
                <span className="text-2xl font-bold text-emerald-400">{selectedProfile.leds?.length || 0}</span>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">LED Channels</p>
              </div>
              <div className="bg-[#181e2e] border border-[#242d45] rounded-xl p-4 text-center">
                <span className="text-2xl font-bold text-amber-400">{selectedProfile.assignments?.length || 1}</span>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Console Assignments</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 text-slate-400">
            Select or create a profile to configure its properties.
          </div>
        )}
      </div>
    </div>
  );
};
