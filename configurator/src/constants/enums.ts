import { proto } from '../proto/proto';

export const SubTypeLabels: Record<number, string> = {
  [proto.SubType.Gamepad]: 'Standard Gamepad',
  [proto.SubType.GuitarHeroGuitar]: 'Guitar Hero Guitar (5-Fret)',
  [proto.SubType.RockBandGuitar]: 'Rock Band Guitar (with Solo Frets)',
  [proto.SubType.GuitarHeroDrums]: 'Guitar Hero Drums (3 pads + 2 cymbals + kick)',
  [proto.SubType.RockBandDrums]: 'Rock Band Drums (4 pads + kick)',
  [proto.SubType.LiveGuitar]: 'Guitar Hero Live (6-Button 2x3)',
  [proto.SubType.DjHeroTurntable]: 'DJ Hero Turntable',
  [proto.SubType.StageKit]: 'Rock Band Stage Kit (Strobe & Fog)',
  [proto.SubType.Dancepad]: 'Dance Pad (DDR / ITG)',
  [proto.SubType.Wheel]: 'Racing Wheel',
  [proto.SubType.ProKeys]: 'Rock Band 3 Pro Keyboard',
  [proto.SubType.ProGuitarMustang]: 'RB3 Pro Guitar (Mustang)',
  [proto.SubType.FightStick]: 'Arcade Fightstick',
  [proto.SubType.FlightStick]: 'Flight HOTAS Stick',
  [proto.SubType.Taiko]: 'Taiko no Tatsujin Drum',
  [proto.SubType.PopNMusic]: 'Pop\'n Music Controller',
  [proto.SubType.KeyboardMouse]: 'Keyboard & Mouse Emulation',
  [proto.SubType.Midi]: 'MIDI Device / Controller',
};

export const ConsoleTypeLabels: Record<number, string> = {
  [proto.ConsoleType.ConsolePC]: 'PC (Windows / Linux / Mac)',
  [proto.ConsoleType.ConsoleXbox360]: 'Xbox 360',
  [proto.ConsoleType.ConsolePS3]: 'PlayStation 3',
  [proto.ConsoleType.ConsolePS4_PS5]: 'PlayStation 4 / 5',
  [proto.ConsoleType.ConsoleSwitch_Switch2]: 'Nintendo Switch',
  [proto.ConsoleType.ConsoleWii_WiiU]: 'Nintendo Wii / Wii U',
  [proto.ConsoleType.ConsoleOgXbox]: 'Original Xbox',
  [proto.ConsoleType.ConsolePS2]: 'PlayStation 2',
};

export const ConsoleModeLabels: Record<number, string> = {
  [proto.ConsoleMode.ModeHid]: 'Standard USB HID Gamepad',
  [proto.ConsoleMode.ModeXbox360]: 'XInput (Xbox 360)',
  [proto.ConsoleMode.ModeXboxOne]: 'Xbox One (GIP)',
  [proto.ConsoleMode.ModePs3]: 'PlayStation 3 HID',
  [proto.ConsoleMode.ModePs4]: 'PlayStation 4 DualShock/Specialty',
  [proto.ConsoleMode.ModePs5]: 'PlayStation 5 DualSense',
  [proto.ConsoleMode.ModeSwitch]: 'Nintendo Switch Controller',
  [proto.ConsoleMode.ModeOgXbox]: 'Original Xbox Protocol',
  [proto.ConsoleMode.ModeWiiRb]: 'Wii Rock Band Instrument',
  [proto.ConsoleMode.ModeGuitarHeroArcade]: 'Guitar Hero Arcade (Raw)',
};

export const PinModeLabels: Record<number, string> = {
  [proto.PinMode.PullUp]: 'Pull-Up (Active Low)',
  [proto.PinMode.PullDown]: 'Pull-Down (Active High)',
  [proto.PinMode.Floating]: 'Floating (Analog / External resistor)',
  [proto.PinMode.BusKeep]: 'Bus Keeper',
};

export const WS2812TypeLabels: Record<number, string> = {
  [proto.WS2812Type.Ws2812Grb]: 'WS2812 / WS2812B (GRB)',
  [proto.WS2812Type.Ws2812Rgb]: 'WS2811 / WS2812 (RGB)',
  [proto.WS2812Type.Ws2812Bgr]: 'WS2812 (BGR)',
  [proto.WS2812Type.Ws2812Grbw]: 'SK6812 (GRBW - RGB + White)',
  [proto.WS2812Type.Ws2812Rgbw]: 'SK6812 (RGBW)',
};

export const APA102TypeLabels: Record<number, string> = {
  [proto.APA102Type.Apa102Bgr]: 'APA102 / DotStar (BGR)',
  [proto.APA102Type.Apa102Rgb]: 'APA102 / DotStar (RGB)',
  [proto.APA102Type.Apa102Grb]: 'APA102 / DotStar (GRB)',
};

export const RgbPatternTypeLabels: Record<number, string> = {
  [proto.RgbPatternType.PatternRainbow]: 'Rainbow Cycle',
  [proto.RgbPatternType.PatternFade]: 'Color Breathing / Fade',
};

export const ReactiveRgbPatternTypeLabels: Record<number, string> = {
  [proto.ReactiveRgbPatternType.PatternStatic]: 'Instant Light on Press',
  [proto.ReactiveRgbPatternType.PatternHeatmap]: 'Heatmap (Gradient based on Pressure/Velocity)',
  [proto.ReactiveRgbPatternType.PatternSpread]: 'Wave / Ripple Spread',
};
