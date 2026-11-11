import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace proto. */
export namespace proto {

    /** ReportId enum. */
    enum ReportId {

        /** ReportIdPs3Feature value */
        ReportIdPs3Feature = 0,

        /** ReportIdGamepad value */
        ReportIdGamepad = 1,

        /** ReportIdKeyboard value */
        ReportIdKeyboard = 2,

        /** ReportIdMouse value */
        ReportIdMouse = 3,

        /** ReportIdConsumer value */
        ReportIdConsumer = 4,

        /** ReportIdSantrollerCapabilities value */
        ReportIdSantrollerCapabilities = 16,

        /** ReportIdConfig value */
        ReportIdConfig = 34,

        /** ReportIdConfigInfo value */
        ReportIdConfigInfo = 35,

        /** ReportIdLoaded value */
        ReportIdLoaded = 36,

        /** ReportIdKeepalive value */
        ReportIdKeepalive = 37,

        /** ReportIdBootloader value */
        ReportIdBootloader = 38,

        /** ReportIdCommand value */
        ReportIdCommand = 39,

        /** ReportIdGetActiveProfiles value */
        ReportIdGetActiveProfiles = 40,

        /** ReportIdGetVersion value */
        ReportIdGetVersion = 41,

        /** ReportIdUpdateFirmware value */
        ReportIdUpdateFirmware = 48,

        /** ReportIdUploadFirmware value */
        ReportIdUploadFirmware = 49,

        /** ReportIdGetType value */
        ReportIdGetType = 50,

        /** ReportIdPs301 value */
        ReportIdPs301 = 1,

        /** ReportIdPs302 value */
        ReportIdPs302 = 2,

        /** ReportIdPs3EE value */
        ReportIdPs3EE = 238,

        /** ReportIdPs3EF value */
        ReportIdPs3EF = 239,

        /** ReportIdPs3F2 value */
        ReportIdPs3F2 = 242,

        /** ReportIdPs3F4 value */
        ReportIdPs3F4 = 244,

        /** ReportIdPs3F5 value */
        ReportIdPs3F5 = 245,

        /** ReportIdPs3F6 value */
        ReportIdPs3F6 = 246,

        /** ReportIdPs3F7 value */
        ReportIdPs3F7 = 247,

        /** ReportIdPs3F8 value */
        ReportIdPs3F8 = 248,

        /** ReportIdPs4Feature value */
        ReportIdPs4Feature = 3,

        /** ReportIdPs405 value */
        ReportIdPs405 = 5,

        /** ReportIdPs4SetChallenge value */
        ReportIdPs4SetChallenge = 240,

        /** ReportIdPs4GetResponse value */
        ReportIdPs4GetResponse = 241,

        /** ReportIdPs4GetAuthStatus value */
        ReportIdPs4GetAuthStatus = 242,

        /** ReportIdPs4GetAuthPageSize value */
        ReportIdPs4GetAuthPageSize = 243,

        /** ReportIdPs502 value */
        ReportIdPs502 = 2,

        /** ReportIdPs5Feature value */
        ReportIdPs5Feature = 3,

        /** ReportIdPs5E0 value */
        ReportIdPs5E0 = 224,

        /** ReportIdPs5SetChallenge value */
        ReportIdPs5SetChallenge = 240,

        /** ReportIdPs5GetResponse value */
        ReportIdPs5GetResponse = 241,

        /** ReportIdPs5GetAuthStatus value */
        ReportIdPs5GetAuthStatus = 242,

        /** ReportSwitchOutput00 value */
        ReportSwitchOutput00 = 0,

        /** ReportSwitchFeature value */
        ReportSwitchFeature = 1,

        /** ReportSwitchOutput10 value */
        ReportSwitchOutput10 = 16,

        /** ReportSwitchOutput21 value */
        ReportSwitchOutput21 = 33,

        /** ReportSwitchOutput30 value */
        ReportSwitchOutput30 = 48,

        /** ReportSwitchConfiguration value */
        ReportSwitchConfiguration = 128,

        /** ReportSwitchInput value */
        ReportSwitchInput = 129,

        /** ReportSwitchOutput82 value */
        ReportSwitchOutput82 = 130
    }

    /** MappingMode enum. */
    enum MappingMode {

        /** PerInput value */
        PerInput = 1,

        /** PerExtension value */
        PerExtension = 2
    }

    /** FaceButtonMappingMode enum. */
    enum FaceButtonMappingMode {

        /** LegendBased value */
        LegendBased = 1,

        /** PositionBased value */
        PositionBased = 2
    }

    /** WiiExtType enum. */
    enum WiiExtType {

        /** WiiNunchuk value */
        WiiNunchuk = 0,

        /** WiiClassicController value */
        WiiClassicController = 1,

        /** WiiClassicControllerPro value */
        WiiClassicControllerPro = 257,

        /** WiiThqUdrawTablet value */
        WiiThqUdrawTablet = 65298,

        /** WiiUbisoftDrawsomeTablet value */
        WiiUbisoftDrawsomeTablet = 65299,

        /** WiiGuitarHeroGuitar value */
        WiiGuitarHeroGuitar = 3,

        /** WiiGuitarHeroDrums value */
        WiiGuitarHeroDrums = 259,

        /** WiiDjHeroTurntable value */
        WiiDjHeroTurntable = 771,

        /** WiiTaikoNoTatsujinController value */
        WiiTaikoNoTatsujinController = 17,

        /** WiiMotionPlus value */
        WiiMotionPlus = 5,

        /** WiiNoExtension value */
        WiiNoExtension = 6155,

        /** WiiNotInitialised value */
        WiiNotInitialised = 65535
    }

    /** SubType enum. */
    enum SubType {

        /** Gamepad value */
        Gamepad = 1,

        /** Dancepad value */
        Dancepad = 2,

        /** GuitarHeroGuitar value */
        GuitarHeroGuitar = 3,

        /** RockBandGuitar value */
        RockBandGuitar = 4,

        /** GuitarHeroDrums value */
        GuitarHeroDrums = 5,

        /** RockBandDrums value */
        RockBandDrums = 6,

        /** LiveGuitar value */
        LiveGuitar = 7,

        /** DjHeroTurntable value */
        DjHeroTurntable = 8,

        /** StageKit value */
        StageKit = 9,

        /** DisneyInfinity value */
        DisneyInfinity = 10,

        /** Skylanders value */
        Skylanders = 11,

        /** LegoDimensions value */
        LegoDimensions = 12,

        /** ProjectDiva value */
        ProjectDiva = 13,

        /** GuitarFreaks value */
        GuitarFreaks = 14,

        /** Wheel value */
        Wheel = 15,

        /** ProKeys value */
        ProKeys = 16,

        /** ProGuitarMustang value */
        ProGuitarMustang = 17,

        /** ProGuitarSquire value */
        ProGuitarSquire = 18,

        /** KeyboardMouse value */
        KeyboardMouse = 19,

        /** FightStick value */
        FightStick = 20,

        /** FlightStick value */
        FlightStick = 21,

        /** PopNMusic value */
        PopNMusic = 22,

        /** DJMax value */
        DJMax = 23,

        /** Taiko value */
        Taiko = 24,

        /** PowerGigDrum value */
        PowerGigDrum = 25,

        /** PowerGigGuitar value */
        PowerGigGuitar = 26,

        /** RockRevolutionGuitar value */
        RockRevolutionGuitar = 27,

        /** Midi value */
        Midi = 28,

        /** Unknown value */
        Unknown = 255
    }

    /** PinMode enum. */
    enum PinMode {

        /** PullDown value */
        PullDown = 1,

        /** PullUp value */
        PullUp = 2,

        /** Floating value */
        Floating = 3,

        /** BusKeep value */
        BusKeep = 4
    }

    /** Mpr121PinMode enum. */
    enum Mpr121PinMode {

        /** Touch value */
        Touch = 1,

        /** Digital value */
        Digital = 2
    }

    /** UsbDeviceType enum. */
    enum UsbDeviceType {

        /** UsbDeviceTypeGeneric value */
        UsbDeviceTypeGeneric = 1,

        /** UsbDeviceTypeSantroller value */
        UsbDeviceTypeSantroller = 2,

        /** UsbDeviceTypeXbox360 value */
        UsbDeviceTypeXbox360 = 3,

        /** UsbDeviceTypeXbox360Wireless value */
        UsbDeviceTypeXbox360Wireless = 4,

        /** UsbDeviceTypeXbox360BigButton value */
        UsbDeviceTypeXbox360BigButton = 5,

        /** UsbDeviceTypeXboxOne value */
        UsbDeviceTypeXboxOne = 6,

        /** UsbDeviceTypeXboxOG value */
        UsbDeviceTypeXboxOG = 7,

        /** UsbDeviceTypePS3 value */
        UsbDeviceTypePS3 = 8,

        /** UsbDeviceTypePS4 value */
        UsbDeviceTypePS4 = 9,

        /** UsbDeviceTypePS5 value */
        UsbDeviceTypePS5 = 10,

        /** UsbDeviceTypeWiiRockBand value */
        UsbDeviceTypeWiiRockBand = 11,

        /** UsbDeviceTypeSwitch value */
        UsbDeviceTypeSwitch = 12,

        /** UsbDeviceTypeRaphnet value */
        UsbDeviceTypeRaphnet = 13,

        /** UsbDeviceTypeStreamDeck value */
        UsbDeviceTypeStreamDeck = 14,

        /** UsbDeviceTypeLTEK value */
        UsbDeviceTypeLTEK = 15,

        /** UsbDeviceTypeStadia value */
        UsbDeviceTypeStadia = 16,

        /** UsbDeviceTypeMidi value */
        UsbDeviceTypeMidi = 17,

        /** UsbDeviceTypeKeyboard value */
        UsbDeviceTypeKeyboard = 18,

        /** UsbDeviceTypeMouse value */
        UsbDeviceTypeMouse = 19
    }

    /** PS2ControllerType enum. */
    enum PS2ControllerType {

        /** PS2ControllerTypeUnknown value */
        PS2ControllerTypeUnknown = 1,

        /** PS2ControllerTypeDigital value */
        PS2ControllerTypeDigital = 2,

        /** PS2ControllerTypeDualshock value */
        PS2ControllerTypeDualshock = 3,

        /** PS2ControllerTypeDualshock2 value */
        PS2ControllerTypeDualshock2 = 4,

        /** PS2ControllerTypeGuitar value */
        PS2ControllerTypeGuitar = 5,

        /** PS2ControllerTypeNegCon value */
        PS2ControllerTypeNegCon = 6,

        /** PS2ControllerTypeJogCon value */
        PS2ControllerTypeJogCon = 7,

        /** PS2ControllerTypeGunCon value */
        PS2ControllerTypeGunCon = 8,

        /** PS2ControllerTypeFlightStick value */
        PS2ControllerTypeFlightStick = 9,

        /** PS2ControllerTypeMouse value */
        PS2ControllerTypeMouse = 10,

        /** PS2ControllerTypeTaiko value */
        PS2ControllerTypeTaiko = 11,

        /** PS2ControllerTypePopNMusic value */
        PS2ControllerTypePopNMusic = 12
    }

    /** APA102Type enum. */
    enum APA102Type {

        /** Apa102Rgb value */
        Apa102Rgb = 1,

        /** Apa102Rbg value */
        Apa102Rbg = 2,

        /** Apa102Grb value */
        Apa102Grb = 3,

        /** Apa102Gbr value */
        Apa102Gbr = 4,

        /** Apa102Brg value */
        Apa102Brg = 5,

        /** Apa102Bgr value */
        Apa102Bgr = 6
    }

    /** WS2812Type enum. */
    enum WS2812Type {

        /** Ws2812Rgb value */
        Ws2812Rgb = 1,

        /** Ws2812Rbg value */
        Ws2812Rbg = 2,

        /** Ws2812Grb value */
        Ws2812Grb = 3,

        /** Ws2812Gbr value */
        Ws2812Gbr = 4,

        /** Ws2812Brg value */
        Ws2812Brg = 5,

        /** Ws2812Bgr value */
        Ws2812Bgr = 6,

        /** Ws2812Rgbw value */
        Ws2812Rgbw = 7,

        /** Ws2812Rbgw value */
        Ws2812Rbgw = 8,

        /** Ws2812Grbw value */
        Ws2812Grbw = 9,

        /** Ws2812Gbrw value */
        Ws2812Gbrw = 10,

        /** Ws2812Brgw value */
        Ws2812Brgw = 11,

        /** Ws2812Bgrw value */
        Ws2812Bgrw = 12
    }

    /** ConsoleMode enum. */
    enum ConsoleMode {

        /** ModeHid value */
        ModeHid = 1,

        /** ModeOgXbox value */
        ModeOgXbox = 2,

        /** ModeXbox360 value */
        ModeXbox360 = 3,

        /** ModeXboxOne value */
        ModeXboxOne = 4,

        /** ModePs3 value */
        ModePs3 = 5,

        /** ModePs4 value */
        ModePs4 = 6,

        /** ModePs5 value */
        ModePs5 = 7,

        /** ModeWiiRb value */
        ModeWiiRb = 8,

        /** ModeSwitch value */
        ModeSwitch = 9,

        /** ModeGuitarHeroArcade value */
        ModeGuitarHeroArcade = 10
    }

    /** ConsoleType enum. */
    enum ConsoleType {

        /** ConsoleWii_WiiU value */
        ConsoleWii_WiiU = 1,

        /** ConsoleOgXbox value */
        ConsoleOgXbox = 2,

        /** ConsoleXbox360 value */
        ConsoleXbox360 = 3,

        /** ConsoleXboxOne value */
        ConsoleXboxOne = 4,

        /** ConsolePS2 value */
        ConsolePS2 = 5,

        /** ConsolePS3 value */
        ConsolePS3 = 6,

        /** ConsolePS4_PS5 value */
        ConsolePS4_PS5 = 7,

        /** ConsoleSwitch_Switch2 value */
        ConsoleSwitch_Switch2 = 8,

        /** ConsolePC value */
        ConsolePC = 9
    }

    /** PinDetectType enum. */
    enum PinDetectType {

        /** DetectDigital value */
        DetectDigital = 1,

        /** DetectAnalog value */
        DetectAnalog = 2
    }

    /** RgbPatternType enum. */
    enum RgbPatternType {

        /** PatternRainbow value */
        PatternRainbow = 1,

        /** PatternFade value */
        PatternFade = 2
    }

    /** ReactiveRgbPatternType enum. */
    enum ReactiveRgbPatternType {

        /** PatternStatic value */
        PatternStatic = 1,

        /** PatternHeatmap value */
        PatternHeatmap = 2,

        /** PatternSpread value */
        PatternSpread = 3
    }

    /** CapabilitiyFlags enum. */
    enum CapabilitiyFlags {

        /** CapabilityHasStandardPlayerLeds value */
        CapabilityHasStandardPlayerLeds = 1,

        /** CapabilityHasRGBIndicatorLed value */
        CapabilityHasRGBIndicatorLed = 2,

        /** CapabilityHasInstrumentLeds value */
        CapabilityHasInstrumentLeds = 4,

        /** CapabilityHasRumble value */
        CapabilityHasRumble = 8,

        /** CapabilityDpadAsButtons value */
        CapabilityDpadAsButtons = 16
    }

    /** ProfileAssignMask enum. */
    enum ProfileAssignMask {

        /** AssignUsb value */
        AssignUsb = 1,

        /** AssignBluetoothGamepad value */
        AssignBluetoothGamepad = 2,

        /** AssignPsx value */
        AssignPsx = 4,

        /** AssignBluetoothWiimote value */
        AssignBluetoothWiimote = 8,

        /** AssignWiimoteExtension value */
        AssignWiimoteExtension = 16
    }

    /** BluetoothMode enum. */
    enum BluetoothMode {

        /** BTStandard value */
        BTStandard = 1,

        /** BTWiimote value */
        BTWiimote = 2
    }

    /** CycleType enum. */
    enum CycleType {

        /** custom value */
        custom = 1,

        /** pickup value */
        pickup = 2
    }

    /** CrkdDrumCalibrationType enum. */
    enum CrkdDrumCalibrationType {

        /** Debounce value */
        Debounce = 1,

        /** Min value */
        Min = 2,

        /** Max value */
        Max = 3,

        /** HoldTick value */
        HoldTick = 4,

        /** RawValue value */
        RawValue = 5
    }

    /** GamepadButtonType enum. */
    enum GamepadButtonType {

        /** Gamepad_A value */
        Gamepad_A = 1,

        /** Gamepad_B value */
        Gamepad_B = 2,

        /** Gamepad_X value */
        Gamepad_X = 3,

        /** Gamepad_Y value */
        Gamepad_Y = 4,

        /** Gamepad_Back value */
        Gamepad_Back = 5,

        /** Gamepad_Start value */
        Gamepad_Start = 6,

        /** Gamepad_Guide value */
        Gamepad_Guide = 7,

        /** Gamepad_Capture value */
        Gamepad_Capture = 8,

        /** Gamepad_LeftShoulder value */
        Gamepad_LeftShoulder = 9,

        /** Gamepad_RightShoulder value */
        Gamepad_RightShoulder = 10,

        /** Gamepad_LeftThumbClick value */
        Gamepad_LeftThumbClick = 11,

        /** Gamepad_RightThumbClick value */
        Gamepad_RightThumbClick = 12,

        /** Gamepad_DpadUp value */
        Gamepad_DpadUp = 13,

        /** Gamepad_DpadDown value */
        Gamepad_DpadDown = 14,

        /** Gamepad_DpadLeft value */
        Gamepad_DpadLeft = 15,

        /** Gamepad_DpadRight value */
        Gamepad_DpadRight = 16
    }

    /** GamepadAxisType enum. */
    enum GamepadAxisType {

        /** Gamepad_LeftStickX value */
        Gamepad_LeftStickX = 1,

        /** Gamepad_LeftStickY value */
        Gamepad_LeftStickY = 2,

        /** Gamepad_RightStickX value */
        Gamepad_RightStickX = 3,

        /** Gamepad_RightStickY value */
        Gamepad_RightStickY = 4,

        /** Gamepad_LeftTrigger value */
        Gamepad_LeftTrigger = 5,

        /** Gamepad_RightTrigger value */
        Gamepad_RightTrigger = 6,

        /** Gamepad_AccelX value */
        Gamepad_AccelX = 7,

        /** Gamepad_AccelY value */
        Gamepad_AccelY = 8,

        /** Gamepad_AccelZ value */
        Gamepad_AccelZ = 9,

        /** Gamepad_Gyro value */
        Gamepad_Gyro = 10
    }

    /** ProjectDivaAxisType enum. */
    enum ProjectDivaAxisType {

        /** ProjectDiva_Slider value */
        ProjectDiva_Slider = 7
    }

    /** GuitarFreaksButtonType enum. */
    enum GuitarFreaksButtonType {

        /** GuitarFreaks_Red value */
        GuitarFreaks_Red = 1,

        /** GuitarFreaks_Green value */
        GuitarFreaks_Green = 2,

        /** GuitarFreaks_Blue value */
        GuitarFreaks_Blue = 3,

        /** GuitarFreaks_Strum value */
        GuitarFreaks_Strum = 7
    }

    /** GuitarHeroGuitarButtonType enum. */
    enum GuitarHeroGuitarButtonType {

        /** GuitarHeroGuitar_Green value */
        GuitarHeroGuitar_Green = 1,

        /** GuitarHeroGuitar_Red value */
        GuitarHeroGuitar_Red = 2,

        /** GuitarHeroGuitar_Yellow value */
        GuitarHeroGuitar_Yellow = 3,

        /** GuitarHeroGuitar_Blue value */
        GuitarHeroGuitar_Blue = 4,

        /** GuitarHeroGuitar_Orange value */
        GuitarHeroGuitar_Orange = 5,

        /** GuitarHeroGuitar_TapGreen value */
        GuitarHeroGuitar_TapGreen = 6,

        /** GuitarHeroGuitar_TapRed value */
        GuitarHeroGuitar_TapRed = 7,

        /** GuitarHeroGuitar_TapYellow value */
        GuitarHeroGuitar_TapYellow = 8,

        /** GuitarHeroGuitar_TapBlue value */
        GuitarHeroGuitar_TapBlue = 9,

        /** GuitarHeroGuitar_TapOrange value */
        GuitarHeroGuitar_TapOrange = 10,

        /** GuitarHeroGuitar_Pedal value */
        GuitarHeroGuitar_Pedal = 18
    }

    /** GuitarHeroGuitarAxisType enum. */
    enum GuitarHeroGuitarAxisType {

        /** GuitarHeroGuitar_Whammy value */
        GuitarHeroGuitar_Whammy = 1,

        /** GuitarHeroGuitar_Tilt value */
        GuitarHeroGuitar_Tilt = 2
    }

    /** GuitarHeroArcadeButtonType enum. */
    enum GuitarHeroArcadeButtonType {

        /** GuitarHeroArcade_Green value */
        GuitarHeroArcade_Green = 1,

        /** GuitarHeroArcade_Red value */
        GuitarHeroArcade_Red = 2,

        /** GuitarHeroArcade_Yellow value */
        GuitarHeroArcade_Yellow = 3,

        /** GuitarHeroArcade_Blue value */
        GuitarHeroArcade_Blue = 4,

        /** GuitarHeroArcade_Orange value */
        GuitarHeroArcade_Orange = 5,

        /** GuitarHeroArcade_Side value */
        GuitarHeroArcade_Side = 6
    }

    /** GuitarHeroArcadeAxisType enum. */
    enum GuitarHeroArcadeAxisType {

        /** GuitarHeroArcade_Tilt value */
        GuitarHeroArcade_Tilt = 1
    }

    /** GuitarHeroLiveGuitarButtonType enum. */
    enum GuitarHeroLiveGuitarButtonType {

        /** GuitarHeroLiveGuitar_White1 value */
        GuitarHeroLiveGuitar_White1 = 1,

        /** GuitarHeroLiveGuitar_White2 value */
        GuitarHeroLiveGuitar_White2 = 2,

        /** GuitarHeroLiveGuitar_White3 value */
        GuitarHeroLiveGuitar_White3 = 3,

        /** GuitarHeroLiveGuitar_Black1 value */
        GuitarHeroLiveGuitar_Black1 = 4,

        /** GuitarHeroLiveGuitar_Black2 value */
        GuitarHeroLiveGuitar_Black2 = 5,

        /** GuitarHeroLiveGuitar_Black3 value */
        GuitarHeroLiveGuitar_Black3 = 6,

        /** GuitarHeroLiveGuitar_GHTV value */
        GuitarHeroLiveGuitar_GHTV = 7,

        /** GuitarHeroLiveGuitar_StrumUp value */
        GuitarHeroLiveGuitar_StrumUp = 8,

        /** GuitarHeroLiveGuitar_StrumDown value */
        GuitarHeroLiveGuitar_StrumDown = 9
    }

    /** GuitarHeroLiveGuitarAxisType enum. */
    enum GuitarHeroLiveGuitarAxisType {

        /** GuitarHeroLiveGuitar_Whammy value */
        GuitarHeroLiveGuitar_Whammy = 1,

        /** GuitarHeroLiveGuitar_Tilt value */
        GuitarHeroLiveGuitar_Tilt = 2
    }

    /** RockBandGuitarButtonType enum. */
    enum RockBandGuitarButtonType {

        /** RockBandGuitar_Green value */
        RockBandGuitar_Green = 1,

        /** RockBandGuitar_Red value */
        RockBandGuitar_Red = 2,

        /** RockBandGuitar_Yellow value */
        RockBandGuitar_Yellow = 3,

        /** RockBandGuitar_Blue value */
        RockBandGuitar_Blue = 4,

        /** RockBandGuitar_Orange value */
        RockBandGuitar_Orange = 5,

        /** RockBandGuitar_SoloGreen value */
        RockBandGuitar_SoloGreen = 6,

        /** RockBandGuitar_SoloRed value */
        RockBandGuitar_SoloRed = 7,

        /** RockBandGuitar_SoloYellow value */
        RockBandGuitar_SoloYellow = 8,

        /** RockBandGuitar_SoloBlue value */
        RockBandGuitar_SoloBlue = 9,

        /** RockBandGuitar_SoloOrange value */
        RockBandGuitar_SoloOrange = 10,

        /** RockBandGuitar_Pedal value */
        RockBandGuitar_Pedal = 18
    }

    /** RockBandGuitarAxisType enum. */
    enum RockBandGuitarAxisType {

        /** RockBandGuitar_Whammy value */
        RockBandGuitar_Whammy = 1,

        /** RockBandGuitar_Tilt value */
        RockBandGuitar_Tilt = 2,

        /** RockBandGuitar_Pickup value */
        RockBandGuitar_Pickup = 3
    }

    /** RockBandDrumsButtonType enum. */
    enum RockBandDrumsButtonType {

        /** RockBandDrums_Kick1Pedal value */
        RockBandDrums_Kick1Pedal = 12,

        /** RockBandDrums_Kick2Pedal value */
        RockBandDrums_Kick2Pedal = 13
    }

    /** RockBandDrumsAxisType enum. */
    enum RockBandDrumsAxisType {

        /** RockBandDrums_RedPad value */
        RockBandDrums_RedPad = 1,

        /** RockBandDrums_YellowPad value */
        RockBandDrums_YellowPad = 2,

        /** RockBandDrums_BluePad value */
        RockBandDrums_BluePad = 3,

        /** RockBandDrums_GreenPad value */
        RockBandDrums_GreenPad = 4,

        /** RockBandDrums_YellowCymbal value */
        RockBandDrums_YellowCymbal = 5,

        /** RockBandDrums_BlueCymbal value */
        RockBandDrums_BlueCymbal = 6,

        /** RockBandDrums_GreenCymbal value */
        RockBandDrums_GreenCymbal = 7
    }

    /** GuitarHeroDrumsAxisType enum. */
    enum GuitarHeroDrumsAxisType {

        /** GuitarHeroDrums_RedPad value */
        GuitarHeroDrums_RedPad = 1,

        /** GuitarHeroDrums_YellowPad value */
        GuitarHeroDrums_YellowPad = 2,

        /** GuitarHeroDrums_BluePad value */
        GuitarHeroDrums_BluePad = 3,

        /** GuitarHeroDrums_OrangePad value */
        GuitarHeroDrums_OrangePad = 4,

        /** GuitarHeroDrums_GreenPad value */
        GuitarHeroDrums_GreenPad = 5,

        /** GuitarHeroDrums_KickPedal value */
        GuitarHeroDrums_KickPedal = 6
    }

    /** DJHTurntableButtonType enum. */
    enum DJHTurntableButtonType {

        /** DJHTurntable_LeftBlue value */
        DJHTurntable_LeftBlue = 1,

        /** DJHTurntable_LeftRed value */
        DJHTurntable_LeftRed = 2,

        /** DJHTurntable_LeftGreen value */
        DJHTurntable_LeftGreen = 3,

        /** DJHTurntable_RightBlue value */
        DJHTurntable_RightBlue = 4,

        /** DJHTurntable_RightRed value */
        DJHTurntable_RightRed = 5,

        /** DJHTurntable_RightGreen value */
        DJHTurntable_RightGreen = 6
    }

    /** DJHTurntableAxisType enum. */
    enum DJHTurntableAxisType {

        /** DJHTurntable_LeftVelocity value */
        DJHTurntable_LeftVelocity = 1,

        /** DJHTurntable_RightVelocity value */
        DJHTurntable_RightVelocity = 2,

        /** DJHTurntable_EffectsKnob value */
        DJHTurntable_EffectsKnob = 3,

        /** DJHTurntable_Crossfader value */
        DJHTurntable_Crossfader = 4
    }

    /** DJMaxTurntableButtonType enum. */
    enum DJMaxTurntableButtonType {

        /** DJMaxTurntable_B1 value */
        DJMaxTurntable_B1 = 1,

        /** DJMaxTurntable_B2 value */
        DJMaxTurntable_B2 = 2,

        /** DJMaxTurntable_B3 value */
        DJMaxTurntable_B3 = 3,

        /** DJMaxTurntable_B4 value */
        DJMaxTurntable_B4 = 4,

        /** DJMaxTurntable_B5 value */
        DJMaxTurntable_B5 = 5,

        /** DJMaxTurntable_B6 value */
        DJMaxTurntable_B6 = 6,

        /** DJMaxTurntable_B7 value */
        DJMaxTurntable_B7 = 7,

        /** DJMaxTurntable_B8 value */
        DJMaxTurntable_B8 = 8,

        /** DJMaxTurntable_B9 value */
        DJMaxTurntable_B9 = 9,

        /** DJMaxTurntable_E1 value */
        DJMaxTurntable_E1 = 10,

        /** DJMaxTurntable_E2 value */
        DJMaxTurntable_E2 = 11,

        /** DJMaxTurntable_E3 value */
        DJMaxTurntable_E3 = 12,

        /** DJMaxTurntable_E4 value */
        DJMaxTurntable_E4 = 13
    }

    /** DJMaxTurntableAxisType enum. */
    enum DJMaxTurntableAxisType {

        /** DJMaxTurntable_LeftVelocity value */
        DJMaxTurntable_LeftVelocity = 1,

        /** DJMaxTurntable_RightVelocity value */
        DJMaxTurntable_RightVelocity = 2
    }

    /** PopNMusicButtonType enum. */
    enum PopNMusicButtonType {

        /** PopNMusic_Button1 value */
        PopNMusic_Button1 = 1,

        /** PopNMusic_Button2 value */
        PopNMusic_Button2 = 2,

        /** PopNMusic_Button3 value */
        PopNMusic_Button3 = 3,

        /** PopNMusic_Button4 value */
        PopNMusic_Button4 = 4,

        /** PopNMusic_Button5 value */
        PopNMusic_Button5 = 5,

        /** PopNMusic_Button6 value */
        PopNMusic_Button6 = 6,

        /** PopNMusic_Button7 value */
        PopNMusic_Button7 = 7,

        /** PopNMusic_Button8 value */
        PopNMusic_Button8 = 8,

        /** PopNMusic_Button9 value */
        PopNMusic_Button9 = 9
    }

    /** PopNMusicAxisType enum. */
    enum PopNMusicAxisType {

        /** PopNMusic_LeftStickX value */
        PopNMusic_LeftStickX = 1,

        /** PopNMusic_LeftStickY value */
        PopNMusic_LeftStickY = 2
    }

    /** ProGuitarButtonType enum. */
    enum ProGuitarButtonType {

        /** ProGuitar_Green value */
        ProGuitar_Green = 12,

        /** ProGuitar_Red value */
        ProGuitar_Red = 13,

        /** ProGuitar_Yellow value */
        ProGuitar_Yellow = 14,

        /** ProGuitar_Blue value */
        ProGuitar_Blue = 15,

        /** ProGuitar_Orange value */
        ProGuitar_Orange = 16,

        /** ProGuitar_SoloGreen value */
        ProGuitar_SoloGreen = 17,

        /** ProGuitar_SoloRed value */
        ProGuitar_SoloRed = 18,

        /** ProGuitar_SoloYellow value */
        ProGuitar_SoloYellow = 19,

        /** ProGuitar_SoloBlue value */
        ProGuitar_SoloBlue = 20,

        /** ProGuitar_SoloOrange value */
        ProGuitar_SoloOrange = 21,

        /** ProGuitar_Pedal value */
        ProGuitar_Pedal = 22
    }

    /** ProGuitarAxisType enum. */
    enum ProGuitarAxisType {

        /** ProGuitar_LowEFret value */
        ProGuitar_LowEFret = 1,

        /** ProGuitar_AFret value */
        ProGuitar_AFret = 2,

        /** ProGuitar_DFret value */
        ProGuitar_DFret = 3,

        /** ProGuitar_GFret value */
        ProGuitar_GFret = 4,

        /** ProGuitar_BFret value */
        ProGuitar_BFret = 5,

        /** ProGuitar_HighEFret value */
        ProGuitar_HighEFret = 6,

        /** ProGuitar_LowEFretVelocity value */
        ProGuitar_LowEFretVelocity = 7,

        /** ProGuitar_AFretVelocity value */
        ProGuitar_AFretVelocity = 8,

        /** ProGuitar_DFretVelocity value */
        ProGuitar_DFretVelocity = 9,

        /** ProGuitar_GFretVelocity value */
        ProGuitar_GFretVelocity = 10,

        /** ProGuitar_BFretVelocity value */
        ProGuitar_BFretVelocity = 11,

        /** ProGuitar_HighEFretVelocity value */
        ProGuitar_HighEFretVelocity = 12,

        /** ProGuitar_Tilt value */
        ProGuitar_Tilt = 15,

        /** ProGuitar_AutoCalibrationMicrophone value */
        ProGuitar_AutoCalibrationMicrophone = 16,

        /** ProGuitar_AutoCalibrationLight value */
        ProGuitar_AutoCalibrationLight = 17
    }

    /** MidiTriggerType enum. */
    enum MidiTriggerType {

        /** Normal value */
        Normal = 1,

        /** Drum value */
        Drum = 2
    }

    /** AnalogToDigitalTriggerType enum. */
    enum AnalogToDigitalTriggerType {

        /** JoyHigh value */
        JoyHigh = 1,

        /** JoyLow value */
        JoyLow = 2,

        /** Exact value */
        Exact = 3,

        /** Range value */
        Range = 4
    }

    /** MouseAxisType enum. */
    enum MouseAxisType {

        /** Mouse_MoveX value */
        Mouse_MoveX = 1,

        /** Mouse_MoveY value */
        Mouse_MoveY = 2,

        /** Mouse_ScrollX value */
        Mouse_ScrollX = 3,

        /** Mouse_ScrollY value */
        Mouse_ScrollY = 4
    }

    /** MouseButtonType enum. */
    enum MouseButtonType {

        /** Mouse_Left value */
        Mouse_Left = 1,

        /** Mouse_Middle value */
        Mouse_Middle = 2,

        /** Mouse_Right value */
        Mouse_Right = 3
    }

    /** WiiAxisType enum. */
    enum WiiAxisType {

        /** WiiAxisClassicLeftStickX value */
        WiiAxisClassicLeftStickX = 1,

        /** WiiAxisClassicLeftStickY value */
        WiiAxisClassicLeftStickY = 2,

        /** WiiAxisClassicRightStickX value */
        WiiAxisClassicRightStickX = 3,

        /** WiiAxisClassicRightStickY value */
        WiiAxisClassicRightStickY = 4,

        /** WiiAxisClassicLeftTrigger value */
        WiiAxisClassicLeftTrigger = 5,

        /** WiiAxisClassicRightTrigger value */
        WiiAxisClassicRightTrigger = 6,

        /** WiiAxisDrumJoystickX value */
        WiiAxisDrumJoystickX = 7,

        /** WiiAxisDrumJoystickY value */
        WiiAxisDrumJoystickY = 8,

        /** WiiAxisGuitarJoystickX value */
        WiiAxisGuitarJoystickX = 9,

        /** WiiAxisGuitarJoystickY value */
        WiiAxisGuitarJoystickY = 10,

        /** WiiAxisGuitarWhammy value */
        WiiAxisGuitarWhammy = 11,

        /** WiiAxisNunchukStickX value */
        WiiAxisNunchukStickX = 12,

        /** WiiAxisNunchukStickY value */
        WiiAxisNunchukStickY = 13,

        /** WiiAxisNunchukAccelerationX value */
        WiiAxisNunchukAccelerationX = 14,

        /** WiiAxisNunchukAccelerationY value */
        WiiAxisNunchukAccelerationY = 15,

        /** WiiAxisNunchukAccelerationZ value */
        WiiAxisNunchukAccelerationZ = 16,

        /** WiiAxisNunchukRotationPitch value */
        WiiAxisNunchukRotationPitch = 17,

        /** WiiAxisNunchukRotationRoll value */
        WiiAxisNunchukRotationRoll = 18,

        /** WiiAxisDjTurntableLeft value */
        WiiAxisDjTurntableLeft = 19,

        /** WiiAxisDjTurntableRight value */
        WiiAxisDjTurntableRight = 20,

        /** WiiAxisDjCrossfadeSlider value */
        WiiAxisDjCrossfadeSlider = 21,

        /** WiiAxisDjEffectDial value */
        WiiAxisDjEffectDial = 22,

        /** WiiAxisDjStickX value */
        WiiAxisDjStickX = 23,

        /** WiiAxisDjStickY value */
        WiiAxisDjStickY = 24,

        /** WiiAxisUDrawPenX value */
        WiiAxisUDrawPenX = 25,

        /** WiiAxisUDrawPenY value */
        WiiAxisUDrawPenY = 26,

        /** WiiAxisUDrawPenPressure value */
        WiiAxisUDrawPenPressure = 27,

        /** WiiAxisDrawsomePenX value */
        WiiAxisDrawsomePenX = 28,

        /** WiiAxisDrawsomePenY value */
        WiiAxisDrawsomePenY = 29,

        /** WiiAxisDrawsomePenPressure value */
        WiiAxisDrawsomePenPressure = 30
    }

    /** WiiButtonType enum. */
    enum WiiButtonType {

        /** WiiButtonGuitarGreen value */
        WiiButtonGuitarGreen = 1,

        /** WiiButtonGuitarRed value */
        WiiButtonGuitarRed = 2,

        /** WiiButtonGuitarYellow value */
        WiiButtonGuitarYellow = 3,

        /** WiiButtonGuitarBlue value */
        WiiButtonGuitarBlue = 4,

        /** WiiButtonGuitarOrange value */
        WiiButtonGuitarOrange = 5,

        /** WiiButtonGuitarTapGreen value */
        WiiButtonGuitarTapGreen = 6,

        /** WiiButtonGuitarTapRed value */
        WiiButtonGuitarTapRed = 7,

        /** WiiButtonGuitarTapYellow value */
        WiiButtonGuitarTapYellow = 8,

        /** WiiButtonGuitarTapBlue value */
        WiiButtonGuitarTapBlue = 9,

        /** WiiButtonGuitarTapOrange value */
        WiiButtonGuitarTapOrange = 10,

        /** WiiButtonGuitarMinus value */
        WiiButtonGuitarMinus = 11,

        /** WiiButtonGuitarPlus value */
        WiiButtonGuitarPlus = 12,

        /** WiiButtonGuitarStrumUp value */
        WiiButtonGuitarStrumUp = 13,

        /** WiiButtonGuitarStrumDown value */
        WiiButtonGuitarStrumDown = 14,

        /** WiiButtonGuitarPedal value */
        WiiButtonGuitarPedal = 15,

        /** WiiButtonDrumMinus value */
        WiiButtonDrumMinus = 16,

        /** WiiButtonDrumPlus value */
        WiiButtonDrumPlus = 17,

        /** WiiButtonNunchukC value */
        WiiButtonNunchukC = 18,

        /** WiiButtonNunchukZ value */
        WiiButtonNunchukZ = 19,

        /** WiiButtonUDrawPenClick value */
        WiiButtonUDrawPenClick = 20,

        /** WiiButtonUDrawPenButton1 value */
        WiiButtonUDrawPenButton1 = 21,

        /** WiiButtonUDrawPenButton2 value */
        WiiButtonUDrawPenButton2 = 22,

        /** WiiButtonTaTaConLeftDrumRim value */
        WiiButtonTaTaConLeftDrumRim = 23,

        /** WiiButtonTaTaConLeftDrumCenter value */
        WiiButtonTaTaConLeftDrumCenter = 24,

        /** WiiButtonTaTaConRightDrumRim value */
        WiiButtonTaTaConRightDrumRim = 25,

        /** WiiButtonTaTaConRightDrumCenter value */
        WiiButtonTaTaConRightDrumCenter = 26,

        /** WiiButtonDjHeroEuphoria value */
        WiiButtonDjHeroEuphoria = 27,

        /** WiiButtonDjHeroLeftGreen value */
        WiiButtonDjHeroLeftGreen = 28,

        /** WiiButtonDjHeroLeftRed value */
        WiiButtonDjHeroLeftRed = 29,

        /** WiiButtonDjHeroLeftBlue value */
        WiiButtonDjHeroLeftBlue = 30,

        /** WiiButtonDjHeroRightGreen value */
        WiiButtonDjHeroRightGreen = 31,

        /** WiiButtonDjHeroRightRed value */
        WiiButtonDjHeroRightRed = 32,

        /** WiiButtonDjHeroRightBlue value */
        WiiButtonDjHeroRightBlue = 33,

        /** WiiButtonDjHeroMinus value */
        WiiButtonDjHeroMinus = 34,

        /** WiiButtonDjHeroPlus value */
        WiiButtonDjHeroPlus = 35,

        /** WiiButtonClassicA value */
        WiiButtonClassicA = 36,

        /** WiiButtonClassicB value */
        WiiButtonClassicB = 37,

        /** WiiButtonClassicX value */
        WiiButtonClassicX = 38,

        /** WiiButtonClassicY value */
        WiiButtonClassicY = 39,

        /** WiiButtonClassicDPadUp value */
        WiiButtonClassicDPadUp = 40,

        /** WiiButtonClassicDPadDown value */
        WiiButtonClassicDPadDown = 41,

        /** WiiButtonClassicDPadLeft value */
        WiiButtonClassicDPadLeft = 42,

        /** WiiButtonClassicDPadRight value */
        WiiButtonClassicDPadRight = 43,

        /** WiiButtonClassicZl value */
        WiiButtonClassicZl = 44,

        /** WiiButtonClassicZr value */
        WiiButtonClassicZr = 45,

        /** WiiButtonClassicLt value */
        WiiButtonClassicLt = 46,

        /** WiiButtonClassicRt value */
        WiiButtonClassicRt = 47,

        /** WiiButtonClassicPlus value */
        WiiButtonClassicPlus = 48,

        /** WiiButtonClassicMinus value */
        WiiButtonClassicMinus = 49,

        /** WiiButtonClassicHome value */
        WiiButtonClassicHome = 50
    }

    /** PS2AxisType enum. */
    enum PS2AxisType {

        /** PS2AxisGunConHSync value */
        PS2AxisGunConHSync = 1,

        /** PS2AxisGunConVSync value */
        PS2AxisGunConVSync = 2,

        /** PS2AxisMouseX value */
        PS2AxisMouseX = 3,

        /** PS2AxisMouseY value */
        PS2AxisMouseY = 4,

        /** PS2AxisNegConTwist value */
        PS2AxisNegConTwist = 5,

        /** PS2AxisNegConI value */
        PS2AxisNegConI = 6,

        /** PS2AxisNegConIi value */
        PS2AxisNegConIi = 7,

        /** PS2AxisNegConL value */
        PS2AxisNegConL = 8,

        /** PS2AxisJogConWheel value */
        PS2AxisJogConWheel = 9,

        /** PS2AxisGuitarWhammy value */
        PS2AxisGuitarWhammy = 10,

        /** PS2AxisLeftStickX value */
        PS2AxisLeftStickX = 12,

        /** PS2AxisLeftStickY value */
        PS2AxisLeftStickY = 13,

        /** PS2AxisRightStickX value */
        PS2AxisRightStickX = 14,

        /** PS2AxisRightStickY value */
        PS2AxisRightStickY = 15,

        /** PS2AxisDualshock2L1 value */
        PS2AxisDualshock2L1 = 16,

        /** PS2AxisDualshock2R1 value */
        PS2AxisDualshock2R1 = 17,

        /** PS2AxisDualshock2RightButton value */
        PS2AxisDualshock2RightButton = 18,

        /** PS2AxisDualshock2LeftButton value */
        PS2AxisDualshock2LeftButton = 19,

        /** PS2AxisDualshock2UpButton value */
        PS2AxisDualshock2UpButton = 20,

        /** PS2AxisDualshock2DownButton value */
        PS2AxisDualshock2DownButton = 21,

        /** PS2AxisDualshock2Triangle value */
        PS2AxisDualshock2Triangle = 22,

        /** PS2AxisDualshock2Circle value */
        PS2AxisDualshock2Circle = 23,

        /** PS2AxisDualshock2Cross value */
        PS2AxisDualshock2Cross = 24,

        /** PS2AxisDualshock2Square value */
        PS2AxisDualshock2Square = 25,

        /** PS2AxisDualshock2L2 value */
        PS2AxisDualshock2L2 = 26,

        /** PS2AxisDualshock2R2 value */
        PS2AxisDualshock2R2 = 27
    }

    /** PS2ButtonType enum. */
    enum PS2ButtonType {

        /** PS2ButtonMouseLeft value */
        PS2ButtonMouseLeft = 1,

        /** PS2ButtonMouseRight value */
        PS2ButtonMouseRight = 2,

        /** PS2ButtonNegConA value */
        PS2ButtonNegConA = 3,

        /** PS2ButtonNegConB value */
        PS2ButtonNegConB = 4,

        /** PS2ButtonNegConStart value */
        PS2ButtonNegConStart = 5,

        /** PS2ButtonNegConR value */
        PS2ButtonNegConR = 6,

        /** PS2ButtonGuitarGreen value */
        PS2ButtonGuitarGreen = 7,

        /** PS2ButtonGuitarRed value */
        PS2ButtonGuitarRed = 8,

        /** PS2ButtonGuitarYellow value */
        PS2ButtonGuitarYellow = 9,

        /** PS2ButtonGuitarBlue value */
        PS2ButtonGuitarBlue = 10,

        /** PS2ButtonGuitarOrange value */
        PS2ButtonGuitarOrange = 11,

        /** PS2ButtonGuitarStrumUp value */
        PS2ButtonGuitarStrumUp = 12,

        /** PS2ButtonGuitarStrumDown value */
        PS2ButtonGuitarStrumDown = 13,

        /** PS2ButtonGuitarDpadUp value */
        PS2ButtonGuitarDpadUp = 14,

        /** PS2ButtonGuitarDpadDown value */
        PS2ButtonGuitarDpadDown = 15,

        /** PS2ButtonGuitarDpadLeft value */
        PS2ButtonGuitarDpadLeft = 16,

        /** PS2ButtonGuitarDpadRight value */
        PS2ButtonGuitarDpadRight = 17,

        /** PS2ButtonGuitarSelect value */
        PS2ButtonGuitarSelect = 18,

        /** PS2ButtonGuitarStart value */
        PS2ButtonGuitarStart = 19,

        /** PS2ButtonGuitarTilt value */
        PS2ButtonGuitarTilt = 20,

        /** PS2ButtonGuitarTapGreen value */
        PS2ButtonGuitarTapGreen = 21,

        /** PS2ButtonGuitarTapRed value */
        PS2ButtonGuitarTapRed = 22,

        /** PS2ButtonGuitarTapYellow value */
        PS2ButtonGuitarTapYellow = 23,

        /** PS2ButtonGuitarTapBlue value */
        PS2ButtonGuitarTapBlue = 24,

        /** PS2ButtonGuitarTapOrange value */
        PS2ButtonGuitarTapOrange = 25,

        /** PS2ButtonSelect value */
        PS2ButtonSelect = 26,

        /** PS2ButtonL3 value */
        PS2ButtonL3 = 27,

        /** PS2ButtonR3 value */
        PS2ButtonR3 = 28,

        /** PS2ButtonStart value */
        PS2ButtonStart = 29,

        /** PS2ButtonDpadUp value */
        PS2ButtonDpadUp = 30,

        /** PS2ButtonDpadRight value */
        PS2ButtonDpadRight = 31,

        /** PS2ButtonDpadDown value */
        PS2ButtonDpadDown = 32,

        /** PS2ButtonDpadLeft value */
        PS2ButtonDpadLeft = 33,

        /** PS2ButtonL2 value */
        PS2ButtonL2 = 34,

        /** PS2ButtonR2 value */
        PS2ButtonR2 = 35,

        /** PS2ButtonL1 value */
        PS2ButtonL1 = 36,

        /** PS2ButtonR1 value */
        PS2ButtonR1 = 37,

        /** PS2ButtonTriangle value */
        PS2ButtonTriangle = 38,

        /** PS2ButtonCircle value */
        PS2ButtonCircle = 39,

        /** PS2ButtonCross value */
        PS2ButtonCross = 40,

        /** PS2ButtonSquare value */
        PS2ButtonSquare = 41,

        /** PS2ButtonTaikoRimLeft value */
        PS2ButtonTaikoRimLeft = 42,

        /** PS2ButtonTaikoRimRight value */
        PS2ButtonTaikoRimRight = 43,

        /** PS2ButtonTaikoCenterLeft value */
        PS2ButtonTaikoCenterLeft = 44,

        /** PS2ButtonTaikoCenterRight value */
        PS2ButtonTaikoCenterRight = 45
    }

    /** CrkdNeckButtonType enum. */
    enum CrkdNeckButtonType {

        /** CrkdGreen value */
        CrkdGreen = 1,

        /** CrkdRed value */
        CrkdRed = 2,

        /** CrkdYellow value */
        CrkdYellow = 3,

        /** CrkdBlue value */
        CrkdBlue = 4,

        /** CrkdOrange value */
        CrkdOrange = 5,

        /** CrkdDpadUp value */
        CrkdDpadUp = 6,

        /** CrkdDpadDown value */
        CrkdDpadDown = 7,

        /** CrkdDpadLeft value */
        CrkdDpadLeft = 8,

        /** CrkdDpadRight value */
        CrkdDpadRight = 9,

        /** CrkdSoloGreen value */
        CrkdSoloGreen = 10,

        /** CrkdSoloRed value */
        CrkdSoloRed = 11,

        /** CrkdSoloYellow value */
        CrkdSoloYellow = 12,

        /** CrkdSoloBlue value */
        CrkdSoloBlue = 13,

        /** CrkdSoloOrange value */
        CrkdSoloOrange = 14
    }

    /** CrkdDrumAxisType enum. */
    enum CrkdDrumAxisType {

        /** CrkdRedPad value */
        CrkdRedPad = 1,

        /** CrkdYellowPad value */
        CrkdYellowPad = 2,

        /** CrkdBluePad value */
        CrkdBluePad = 3,

        /** CrkdGreenPad value */
        CrkdGreenPad = 4,

        /** CrkdYellowCymbal value */
        CrkdYellowCymbal = 5,

        /** CrkdBlueCymbal value */
        CrkdBlueCymbal = 6,

        /** CrkdGreenCymbal value */
        CrkdGreenCymbal = 7,

        /** CrkdKick1 value */
        CrkdKick1 = 8,

        /** CrkdKick2 value */
        CrkdKick2 = 9
    }

    /** Gh5NeckButtonType enum. */
    enum Gh5NeckButtonType {

        /** Gh5Green value */
        Gh5Green = 1,

        /** Gh5Red value */
        Gh5Red = 2,

        /** Gh5Yellow value */
        Gh5Yellow = 3,

        /** Gh5Blue value */
        Gh5Blue = 4,

        /** Gh5Orange value */
        Gh5Orange = 5,

        /** Gh5TapGreen value */
        Gh5TapGreen = 6,

        /** Gh5TapRed value */
        Gh5TapRed = 7,

        /** Gh5TapYellow value */
        Gh5TapYellow = 8,

        /** Gh5TapBlue value */
        Gh5TapBlue = 9,

        /** Gh5TapOrange value */
        Gh5TapOrange = 10
    }

    /** AccelerometerInputType enum. */
    enum AccelerometerInputType {

        /** AccelerometerX value */
        AccelerometerX = 1,

        /** AccelerometerY value */
        AccelerometerY = 2,

        /** AccelerometerZ value */
        AccelerometerZ = 3,

        /** AccelerometerAdc1 value */
        AccelerometerAdc1 = 4,

        /** AccelerometerAdc2 value */
        AccelerometerAdc2 = 5,

        /** AccelerometerAdc3 value */
        AccelerometerAdc3 = 6
    }

    /** ProGuitarNeckButtonType enum. */
    enum ProGuitarNeckButtonType {

        /** ProGuitarNeckGreen value */
        ProGuitarNeckGreen = 1,

        /** ProGuitarNeckRed value */
        ProGuitarNeckRed = 2,

        /** ProGuitarNeckYellow value */
        ProGuitarNeckYellow = 3,

        /** ProGuitarNeckBlue value */
        ProGuitarNeckBlue = 4,

        /** ProGuitarNeckOrange value */
        ProGuitarNeckOrange = 5,

        /** ProGuitarNeckSoloGreen value */
        ProGuitarNeckSoloGreen = 6,

        /** ProGuitarNeckSoloRed value */
        ProGuitarNeckSoloRed = 7,

        /** ProGuitarNeckSoloYellow value */
        ProGuitarNeckSoloYellow = 8,

        /** ProGuitarNeckSoloBlue value */
        ProGuitarNeckSoloBlue = 9,

        /** ProGuitarNeckSoloOrange value */
        ProGuitarNeckSoloOrange = 10
    }

    /** ProGuitarMidiButtonType enum. */
    enum ProGuitarMidiButtonType {

        /** ProGuitarMidi_A value */
        ProGuitarMidi_A = 1,

        /** ProGuitarMidi_B value */
        ProGuitarMidi_B = 2,

        /** ProGuitarMidi_X value */
        ProGuitarMidi_X = 3,

        /** ProGuitarMidi_Y value */
        ProGuitarMidi_Y = 4,

        /** ProGuitarMidi_Back value */
        ProGuitarMidi_Back = 5,

        /** ProGuitarMidi_Start value */
        ProGuitarMidi_Start = 6,

        /** ProGuitarMidi_Guide value */
        ProGuitarMidi_Guide = 7,

        /** ProGuitarMidi_DpadUp value */
        ProGuitarMidi_DpadUp = 8,

        /** ProGuitarMidi_DpadDown value */
        ProGuitarMidi_DpadDown = 9,

        /** ProGuitarMidi_DpadLeft value */
        ProGuitarMidi_DpadLeft = 10,

        /** ProGuitarMidi_DpadRight value */
        ProGuitarMidi_DpadRight = 11,

        /** ProGuitarMidi_Green value */
        ProGuitarMidi_Green = 12,

        /** ProGuitarMidi_Red value */
        ProGuitarMidi_Red = 13,

        /** ProGuitarMidi_Yellow value */
        ProGuitarMidi_Yellow = 14,

        /** ProGuitarMidi_Blue value */
        ProGuitarMidi_Blue = 15,

        /** ProGuitarMidi_Orange value */
        ProGuitarMidi_Orange = 16,

        /** ProGuitarMidi_SoloGreen value */
        ProGuitarMidi_SoloGreen = 17,

        /** ProGuitarMidi_SoloRed value */
        ProGuitarMidi_SoloRed = 18,

        /** ProGuitarMidi_SoloYellow value */
        ProGuitarMidi_SoloYellow = 19,

        /** ProGuitarMidi_SoloBlue value */
        ProGuitarMidi_SoloBlue = 20,

        /** ProGuitarMidi_SoloOrange value */
        ProGuitarMidi_SoloOrange = 21,

        /** ProGuitarMidi_Pedal value */
        ProGuitarMidi_Pedal = 22
    }

    /** ProGuitarNeckAxisType enum. */
    enum ProGuitarNeckAxisType {

        /** ProGuitarNeckLowEFret value */
        ProGuitarNeckLowEFret = 1,

        /** ProGuitarNeckAFret value */
        ProGuitarNeckAFret = 2,

        /** ProGuitarNeckDFret value */
        ProGuitarNeckDFret = 3,

        /** ProGuitarNeckGFret value */
        ProGuitarNeckGFret = 4,

        /** ProGuitarNeckBFret value */
        ProGuitarNeckBFret = 5,

        /** ProGuitarNeckHighEFret value */
        ProGuitarNeckHighEFret = 6
    }

    /** ProKeyboardAxisType enum. */
    enum ProKeyboardAxisType {

        /** ProKeyboardPedal value */
        ProKeyboardPedal = 1,

        /** ProKeyboardTouchPad value */
        ProKeyboardTouchPad = 2
    }

    /** ProKeyboardButtonType enum. */
    enum ProKeyboardButtonType {

        /** ProKeyboardOverdrive value */
        ProKeyboardOverdrive = 1
    }

    /**
     * Properties of a CycleInput.
     * @deprecated Use proto.CycleInput.$Properties instead.
     */
    interface ICycleInput extends proto.CycleInput.$Properties {
    }

    /** Represents a CycleInput. */
    class CycleInput {

        /**
         * Constructs a new CycleInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.CycleInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CycleInput deviceid. */
        deviceid: number;

        /** CycleInput input. */
        input?: (proto.Input.$Properties|null);

        /** CycleInput inputReverse. */
        inputReverse?: (proto.Input.$Properties|null);

        /**
         * Creates a new CycleInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CycleInput instance
         */
        static create(properties: proto.CycleInput.$Shape): proto.CycleInput & proto.CycleInput.$Shape;
        static create(properties?: proto.CycleInput.$Properties): proto.CycleInput;

        /**
         * Encodes the specified CycleInput message. Does not implicitly {@link proto.CycleInput.verify|verify} messages.
         * @param message CycleInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.CycleInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CycleInput message, length delimited. Does not implicitly {@link proto.CycleInput.verify|verify} messages.
         * @param message CycleInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.CycleInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CycleInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.CycleInput & proto.CycleInput.$Shape} CycleInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CycleInput & proto.CycleInput.$Shape;

        /**
         * Decodes a CycleInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.CycleInput & proto.CycleInput.$Shape} CycleInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CycleInput & proto.CycleInput.$Shape;

        /**
         * Verifies a CycleInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CycleInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CycleInput
         */
        static fromObject(object: { [k: string]: any }): proto.CycleInput;

        /**
         * Creates a plain object from a CycleInput message. Also converts values to other types if specified.
         * @param message CycleInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.CycleInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CycleInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CycleInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CycleInput {

        /** Properties of a CycleInput. */
        interface $Properties {

            /** CycleInput deviceid */
            deviceid: number;

            /** CycleInput input */
            input?: (proto.Input.$Properties|null);

            /** CycleInput inputReverse */
            inputReverse?: (proto.Input.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CycleInput. */
        type $Shape = {
          deviceid: number;
          input?: proto.Input.$Shape|null;
          inputReverse?: proto.Input.$Shape|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a ToggleInput.
     * @deprecated Use proto.ToggleInput.$Properties instead.
     */
    interface IToggleInput extends proto.ToggleInput.$Properties {
    }

    /** Represents a ToggleInput. */
    class ToggleInput {

        /**
         * Constructs a new ToggleInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ToggleInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ToggleInput deviceid. */
        deviceid: number;

        /** ToggleInput input. */
        input?: (proto.Input.$Properties|null);

        /**
         * Creates a new ToggleInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToggleInput instance
         */
        static create(properties: proto.ToggleInput.$Shape): proto.ToggleInput & proto.ToggleInput.$Shape;
        static create(properties?: proto.ToggleInput.$Properties): proto.ToggleInput;

        /**
         * Encodes the specified ToggleInput message. Does not implicitly {@link proto.ToggleInput.verify|verify} messages.
         * @param message ToggleInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ToggleInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToggleInput message, length delimited. Does not implicitly {@link proto.ToggleInput.verify|verify} messages.
         * @param message ToggleInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ToggleInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToggleInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ToggleInput & proto.ToggleInput.$Shape} ToggleInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ToggleInput & proto.ToggleInput.$Shape;

        /**
         * Decodes a ToggleInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ToggleInput & proto.ToggleInput.$Shape} ToggleInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ToggleInput & proto.ToggleInput.$Shape;

        /**
         * Verifies a ToggleInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToggleInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToggleInput
         */
        static fromObject(object: { [k: string]: any }): proto.ToggleInput;

        /**
         * Creates a plain object from a ToggleInput message. Also converts values to other types if specified.
         * @param message ToggleInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ToggleInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToggleInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ToggleInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ToggleInput {

        /** Properties of a ToggleInput. */
        interface $Properties {

            /** ToggleInput deviceid */
            deviceid: number;

            /** ToggleInput input */
            input?: (proto.Input.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ToggleInput. */
        type $Shape = {
          deviceid: number;
          input?: proto.Input.$Shape|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a GPIOInput.
     * @deprecated Use proto.GPIOInput.$Properties instead.
     */
    interface IGPIOInput extends proto.GPIOInput.$Properties {
    }

    /** Represents a GPIOInput. */
    class GPIOInput {

        /**
         * Constructs a new GPIOInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.GPIOInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GPIOInput pin. */
        pin: number;

        /** GPIOInput pinMode. */
        pinMode: proto.PinMode;

        /** GPIOInput analog. */
        analog: boolean;

        /**
         * Creates a new GPIOInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GPIOInput instance
         */
        static create(properties: proto.GPIOInput.$Shape): proto.GPIOInput & proto.GPIOInput.$Shape;
        static create(properties?: proto.GPIOInput.$Properties): proto.GPIOInput;

        /**
         * Encodes the specified GPIOInput message. Does not implicitly {@link proto.GPIOInput.verify|verify} messages.
         * @param message GPIOInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.GPIOInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GPIOInput message, length delimited. Does not implicitly {@link proto.GPIOInput.verify|verify} messages.
         * @param message GPIOInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.GPIOInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GPIOInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.GPIOInput & proto.GPIOInput.$Shape} GPIOInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GPIOInput & proto.GPIOInput.$Shape;

        /**
         * Decodes a GPIOInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.GPIOInput & proto.GPIOInput.$Shape} GPIOInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GPIOInput & proto.GPIOInput.$Shape;

        /**
         * Verifies a GPIOInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GPIOInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GPIOInput
         */
        static fromObject(object: { [k: string]: any }): proto.GPIOInput;

        /**
         * Creates a plain object from a GPIOInput message. Also converts values to other types if specified.
         * @param message GPIOInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.GPIOInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GPIOInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GPIOInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GPIOInput {

        /** Properties of a GPIOInput. */
        interface $Properties {

            /** GPIOInput pin */
            pin: number;

            /** GPIOInput pinMode */
            pinMode: proto.PinMode;

            /** GPIOInput analog */
            analog: boolean;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GPIOInput. */
        type $Shape = proto.GPIOInput.$Properties;
    }

    /**
     * Properties of a MatrixInput.
     * @deprecated Use proto.MatrixInput.$Properties instead.
     */
    interface IMatrixInput extends proto.MatrixInput.$Properties {
    }

    /** Represents a MatrixInput. */
    class MatrixInput {

        /**
         * Constructs a new MatrixInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MatrixInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MatrixInput deviceid. */
        deviceid: number;

        /** MatrixInput pin. */
        pin: number;

        /** MatrixInput outputPin. */
        outputPin: number;

        /**
         * Creates a new MatrixInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatrixInput instance
         */
        static create(properties: proto.MatrixInput.$Shape): proto.MatrixInput & proto.MatrixInput.$Shape;
        static create(properties?: proto.MatrixInput.$Properties): proto.MatrixInput;

        /**
         * Encodes the specified MatrixInput message. Does not implicitly {@link proto.MatrixInput.verify|verify} messages.
         * @param message MatrixInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MatrixInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatrixInput message, length delimited. Does not implicitly {@link proto.MatrixInput.verify|verify} messages.
         * @param message MatrixInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MatrixInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatrixInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MatrixInput & proto.MatrixInput.$Shape} MatrixInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MatrixInput & proto.MatrixInput.$Shape;

        /**
         * Decodes a MatrixInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MatrixInput & proto.MatrixInput.$Shape} MatrixInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MatrixInput & proto.MatrixInput.$Shape;

        /**
         * Verifies a MatrixInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatrixInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatrixInput
         */
        static fromObject(object: { [k: string]: any }): proto.MatrixInput;

        /**
         * Creates a plain object from a MatrixInput message. Also converts values to other types if specified.
         * @param message MatrixInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MatrixInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatrixInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MatrixInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MatrixInput {

        /** Properties of a MatrixInput. */
        interface $Properties {

            /** MatrixInput deviceid */
            deviceid: number;

            /** MatrixInput pin */
            pin: number;

            /** MatrixInput outputPin */
            outputPin: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MatrixInput. */
        type $Shape = proto.MatrixInput.$Properties;
    }

    /**
     * Properties of a ADS1115Input.
     * @deprecated Use proto.ADS1115Input.$Properties instead.
     */
    interface IADS1115Input extends proto.ADS1115Input.$Properties {
    }

    /** Represents a ADS1115Input. */
    class ADS1115Input {

        /**
         * Constructs a new ADS1115Input.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ADS1115Input.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ADS1115Input deviceid. */
        deviceid: number;

        /** ADS1115Input channel. */
        channel: number;

        /**
         * Creates a new ADS1115Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADS1115Input instance
         */
        static create(properties: proto.ADS1115Input.$Shape): proto.ADS1115Input & proto.ADS1115Input.$Shape;
        static create(properties?: proto.ADS1115Input.$Properties): proto.ADS1115Input;

        /**
         * Encodes the specified ADS1115Input message. Does not implicitly {@link proto.ADS1115Input.verify|verify} messages.
         * @param message ADS1115Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ADS1115Input.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADS1115Input message, length delimited. Does not implicitly {@link proto.ADS1115Input.verify|verify} messages.
         * @param message ADS1115Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ADS1115Input.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADS1115Input message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ADS1115Input & proto.ADS1115Input.$Shape} ADS1115Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ADS1115Input & proto.ADS1115Input.$Shape;

        /**
         * Decodes a ADS1115Input message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ADS1115Input & proto.ADS1115Input.$Shape} ADS1115Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ADS1115Input & proto.ADS1115Input.$Shape;

        /**
         * Verifies a ADS1115Input message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADS1115Input message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADS1115Input
         */
        static fromObject(object: { [k: string]: any }): proto.ADS1115Input;

        /**
         * Creates a plain object from a ADS1115Input message. Also converts values to other types if specified.
         * @param message ADS1115Input
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ADS1115Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADS1115Input to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ADS1115Input
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ADS1115Input {

        /** Properties of a ADS1115Input. */
        interface $Properties {

            /** ADS1115Input deviceid */
            deviceid: number;

            /** ADS1115Input channel */
            channel: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ADS1115Input. */
        type $Shape = proto.ADS1115Input.$Properties;
    }

    /**
     * Properties of a MultiplexerInput.
     * @deprecated Use proto.MultiplexerInput.$Properties instead.
     */
    interface IMultiplexerInput extends proto.MultiplexerInput.$Properties {
    }

    /** Represents a MultiplexerInput. */
    class MultiplexerInput {

        /**
         * Constructs a new MultiplexerInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MultiplexerInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MultiplexerInput deviceid. */
        deviceid: number;

        /** MultiplexerInput channel. */
        channel: number;

        /**
         * Creates a new MultiplexerInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MultiplexerInput instance
         */
        static create(properties: proto.MultiplexerInput.$Shape): proto.MultiplexerInput & proto.MultiplexerInput.$Shape;
        static create(properties?: proto.MultiplexerInput.$Properties): proto.MultiplexerInput;

        /**
         * Encodes the specified MultiplexerInput message. Does not implicitly {@link proto.MultiplexerInput.verify|verify} messages.
         * @param message MultiplexerInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MultiplexerInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MultiplexerInput message, length delimited. Does not implicitly {@link proto.MultiplexerInput.verify|verify} messages.
         * @param message MultiplexerInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MultiplexerInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MultiplexerInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MultiplexerInput & proto.MultiplexerInput.$Shape} MultiplexerInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MultiplexerInput & proto.MultiplexerInput.$Shape;

        /**
         * Decodes a MultiplexerInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MultiplexerInput & proto.MultiplexerInput.$Shape} MultiplexerInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MultiplexerInput & proto.MultiplexerInput.$Shape;

        /**
         * Verifies a MultiplexerInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MultiplexerInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MultiplexerInput
         */
        static fromObject(object: { [k: string]: any }): proto.MultiplexerInput;

        /**
         * Creates a plain object from a MultiplexerInput message. Also converts values to other types if specified.
         * @param message MultiplexerInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MultiplexerInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MultiplexerInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MultiplexerInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MultiplexerInput {

        /** Properties of a MultiplexerInput. */
        interface $Properties {

            /** MultiplexerInput deviceid */
            deviceid: number;

            /** MultiplexerInput channel */
            channel: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MultiplexerInput. */
        type $Shape = proto.MultiplexerInput.$Properties;
    }

    /**
     * Properties of an AccelerometerInput.
     * @deprecated Use proto.AccelerometerInput.$Properties instead.
     */
    interface IAccelerometerInput extends proto.AccelerometerInput.$Properties {
    }

    /** Represents an AccelerometerInput. */
    class AccelerometerInput {

        /**
         * Constructs a new AccelerometerInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.AccelerometerInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AccelerometerInput deviceid. */
        deviceid: number;

        /** AccelerometerInput type. */
        type: proto.AccelerometerInputType;

        /**
         * Creates a new AccelerometerInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccelerometerInput instance
         */
        static create(properties: proto.AccelerometerInput.$Shape): proto.AccelerometerInput & proto.AccelerometerInput.$Shape;
        static create(properties?: proto.AccelerometerInput.$Properties): proto.AccelerometerInput;

        /**
         * Encodes the specified AccelerometerInput message. Does not implicitly {@link proto.AccelerometerInput.verify|verify} messages.
         * @param message AccelerometerInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.AccelerometerInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccelerometerInput message, length delimited. Does not implicitly {@link proto.AccelerometerInput.verify|verify} messages.
         * @param message AccelerometerInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.AccelerometerInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccelerometerInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.AccelerometerInput & proto.AccelerometerInput.$Shape} AccelerometerInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AccelerometerInput & proto.AccelerometerInput.$Shape;

        /**
         * Decodes an AccelerometerInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.AccelerometerInput & proto.AccelerometerInput.$Shape} AccelerometerInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AccelerometerInput & proto.AccelerometerInput.$Shape;

        /**
         * Verifies an AccelerometerInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccelerometerInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccelerometerInput
         */
        static fromObject(object: { [k: string]: any }): proto.AccelerometerInput;

        /**
         * Creates a plain object from an AccelerometerInput message. Also converts values to other types if specified.
         * @param message AccelerometerInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.AccelerometerInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccelerometerInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AccelerometerInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AccelerometerInput {

        /** Properties of an AccelerometerInput. */
        interface $Properties {

            /** AccelerometerInput deviceid */
            deviceid: number;

            /** AccelerometerInput type */
            type: proto.AccelerometerInputType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AccelerometerInput. */
        type $Shape = proto.AccelerometerInput.$Properties;
    }

    /**
     * Properties of a MPR121Input.
     * @deprecated Use proto.MPR121Input.$Properties instead.
     */
    interface IMPR121Input extends proto.MPR121Input.$Properties {
    }

    /** Represents a MPR121Input. */
    class MPR121Input {

        /**
         * Constructs a new MPR121Input.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MPR121Input.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MPR121Input deviceid. */
        deviceid: number;

        /** MPR121Input pin. */
        pin: number;

        /** MPR121Input mode. */
        mode: proto.Mpr121PinMode;

        /** MPR121Input pinMode. */
        pinMode: proto.PinMode;

        /**
         * Creates a new MPR121Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MPR121Input instance
         */
        static create(properties: proto.MPR121Input.$Shape): proto.MPR121Input & proto.MPR121Input.$Shape;
        static create(properties?: proto.MPR121Input.$Properties): proto.MPR121Input;

        /**
         * Encodes the specified MPR121Input message. Does not implicitly {@link proto.MPR121Input.verify|verify} messages.
         * @param message MPR121Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MPR121Input.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MPR121Input message, length delimited. Does not implicitly {@link proto.MPR121Input.verify|verify} messages.
         * @param message MPR121Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MPR121Input.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MPR121Input message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MPR121Input & proto.MPR121Input.$Shape} MPR121Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MPR121Input & proto.MPR121Input.$Shape;

        /**
         * Decodes a MPR121Input message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MPR121Input & proto.MPR121Input.$Shape} MPR121Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MPR121Input & proto.MPR121Input.$Shape;

        /**
         * Verifies a MPR121Input message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MPR121Input message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MPR121Input
         */
        static fromObject(object: { [k: string]: any }): proto.MPR121Input;

        /**
         * Creates a plain object from a MPR121Input message. Also converts values to other types if specified.
         * @param message MPR121Input
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MPR121Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MPR121Input to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MPR121Input
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MPR121Input {

        /** Properties of a MPR121Input. */
        interface $Properties {

            /** MPR121Input deviceid */
            deviceid: number;

            /** MPR121Input pin */
            pin: number;

            /** MPR121Input mode */
            mode: proto.Mpr121PinMode;

            /** MPR121Input pinMode */
            pinMode: proto.PinMode;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MPR121Input. */
        type $Shape = proto.MPR121Input.$Properties;
    }

    /**
     * Properties of a FixedInput.
     * @deprecated Use proto.FixedInput.$Properties instead.
     */
    interface IFixedInput extends proto.FixedInput.$Properties {
    }

    /** Represents a FixedInput. */
    class FixedInput {

        /**
         * Constructs a new FixedInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.FixedInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** FixedInput value. */
        value: number;

        /**
         * Creates a new FixedInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FixedInput instance
         */
        static create(properties: proto.FixedInput.$Shape): proto.FixedInput & proto.FixedInput.$Shape;
        static create(properties?: proto.FixedInput.$Properties): proto.FixedInput;

        /**
         * Encodes the specified FixedInput message. Does not implicitly {@link proto.FixedInput.verify|verify} messages.
         * @param message FixedInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.FixedInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FixedInput message, length delimited. Does not implicitly {@link proto.FixedInput.verify|verify} messages.
         * @param message FixedInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.FixedInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FixedInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.FixedInput & proto.FixedInput.$Shape} FixedInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FixedInput & proto.FixedInput.$Shape;

        /**
         * Decodes a FixedInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.FixedInput & proto.FixedInput.$Shape} FixedInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FixedInput & proto.FixedInput.$Shape;

        /**
         * Verifies a FixedInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FixedInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FixedInput
         */
        static fromObject(object: { [k: string]: any }): proto.FixedInput;

        /**
         * Creates a plain object from a FixedInput message. Also converts values to other types if specified.
         * @param message FixedInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.FixedInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FixedInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for FixedInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace FixedInput {

        /** Properties of a FixedInput. */
        interface $Properties {

            /** FixedInput value */
            value: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a FixedInput. */
        type $Shape = proto.FixedInput.$Properties;
    }

    /**
     * Properties of a WiiAxisInput.
     * @deprecated Use proto.WiiAxisInput.$Properties instead.
     */
    interface IWiiAxisInput extends proto.WiiAxisInput.$Properties {
    }

    /** Represents a WiiAxisInput. */
    class WiiAxisInput {

        /**
         * Constructs a new WiiAxisInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.WiiAxisInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WiiAxisInput deviceid. */
        deviceid: number;

        /** WiiAxisInput axis. */
        axis: proto.WiiAxisType;

        /**
         * Creates a new WiiAxisInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiiAxisInput instance
         */
        static create(properties: proto.WiiAxisInput.$Shape): proto.WiiAxisInput & proto.WiiAxisInput.$Shape;
        static create(properties?: proto.WiiAxisInput.$Properties): proto.WiiAxisInput;

        /**
         * Encodes the specified WiiAxisInput message. Does not implicitly {@link proto.WiiAxisInput.verify|verify} messages.
         * @param message WiiAxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.WiiAxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiiAxisInput message, length delimited. Does not implicitly {@link proto.WiiAxisInput.verify|verify} messages.
         * @param message WiiAxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.WiiAxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiiAxisInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.WiiAxisInput & proto.WiiAxisInput.$Shape} WiiAxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WiiAxisInput & proto.WiiAxisInput.$Shape;

        /**
         * Decodes a WiiAxisInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.WiiAxisInput & proto.WiiAxisInput.$Shape} WiiAxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WiiAxisInput & proto.WiiAxisInput.$Shape;

        /**
         * Verifies a WiiAxisInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiiAxisInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiiAxisInput
         */
        static fromObject(object: { [k: string]: any }): proto.WiiAxisInput;

        /**
         * Creates a plain object from a WiiAxisInput message. Also converts values to other types if specified.
         * @param message WiiAxisInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.WiiAxisInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiiAxisInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WiiAxisInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WiiAxisInput {

        /** Properties of a WiiAxisInput. */
        interface $Properties {

            /** WiiAxisInput deviceid */
            deviceid: number;

            /** WiiAxisInput axis */
            axis: proto.WiiAxisType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WiiAxisInput. */
        type $Shape = proto.WiiAxisInput.$Properties;
    }

    /**
     * Properties of a WiiButtonInput.
     * @deprecated Use proto.WiiButtonInput.$Properties instead.
     */
    interface IWiiButtonInput extends proto.WiiButtonInput.$Properties {
    }

    /** Represents a WiiButtonInput. */
    class WiiButtonInput {

        /**
         * Constructs a new WiiButtonInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.WiiButtonInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WiiButtonInput deviceid. */
        deviceid: number;

        /** WiiButtonInput button. */
        button: proto.WiiButtonType;

        /**
         * Creates a new WiiButtonInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiiButtonInput instance
         */
        static create(properties: proto.WiiButtonInput.$Shape): proto.WiiButtonInput & proto.WiiButtonInput.$Shape;
        static create(properties?: proto.WiiButtonInput.$Properties): proto.WiiButtonInput;

        /**
         * Encodes the specified WiiButtonInput message. Does not implicitly {@link proto.WiiButtonInput.verify|verify} messages.
         * @param message WiiButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.WiiButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiiButtonInput message, length delimited. Does not implicitly {@link proto.WiiButtonInput.verify|verify} messages.
         * @param message WiiButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.WiiButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiiButtonInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.WiiButtonInput & proto.WiiButtonInput.$Shape} WiiButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WiiButtonInput & proto.WiiButtonInput.$Shape;

        /**
         * Decodes a WiiButtonInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.WiiButtonInput & proto.WiiButtonInput.$Shape} WiiButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WiiButtonInput & proto.WiiButtonInput.$Shape;

        /**
         * Verifies a WiiButtonInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiiButtonInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiiButtonInput
         */
        static fromObject(object: { [k: string]: any }): proto.WiiButtonInput;

        /**
         * Creates a plain object from a WiiButtonInput message. Also converts values to other types if specified.
         * @param message WiiButtonInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.WiiButtonInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiiButtonInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WiiButtonInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WiiButtonInput {

        /** Properties of a WiiButtonInput. */
        interface $Properties {

            /** WiiButtonInput deviceid */
            deviceid: number;

            /** WiiButtonInput button */
            button: proto.WiiButtonType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WiiButtonInput. */
        type $Shape = proto.WiiButtonInput.$Properties;
    }

    /**
     * Properties of a CrkdNeckButtonInput.
     * @deprecated Use proto.CrkdNeckButtonInput.$Properties instead.
     */
    interface ICrkdNeckButtonInput extends proto.CrkdNeckButtonInput.$Properties {
    }

    /** Represents a CrkdNeckButtonInput. */
    class CrkdNeckButtonInput {

        /**
         * Constructs a new CrkdNeckButtonInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.CrkdNeckButtonInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CrkdNeckButtonInput deviceid. */
        deviceid: number;

        /** CrkdNeckButtonInput button. */
        button: proto.CrkdNeckButtonType;

        /**
         * Creates a new CrkdNeckButtonInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CrkdNeckButtonInput instance
         */
        static create(properties: proto.CrkdNeckButtonInput.$Shape): proto.CrkdNeckButtonInput & proto.CrkdNeckButtonInput.$Shape;
        static create(properties?: proto.CrkdNeckButtonInput.$Properties): proto.CrkdNeckButtonInput;

        /**
         * Encodes the specified CrkdNeckButtonInput message. Does not implicitly {@link proto.CrkdNeckButtonInput.verify|verify} messages.
         * @param message CrkdNeckButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.CrkdNeckButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CrkdNeckButtonInput message, length delimited. Does not implicitly {@link proto.CrkdNeckButtonInput.verify|verify} messages.
         * @param message CrkdNeckButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.CrkdNeckButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CrkdNeckButtonInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.CrkdNeckButtonInput & proto.CrkdNeckButtonInput.$Shape} CrkdNeckButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CrkdNeckButtonInput & proto.CrkdNeckButtonInput.$Shape;

        /**
         * Decodes a CrkdNeckButtonInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.CrkdNeckButtonInput & proto.CrkdNeckButtonInput.$Shape} CrkdNeckButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CrkdNeckButtonInput & proto.CrkdNeckButtonInput.$Shape;

        /**
         * Verifies a CrkdNeckButtonInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CrkdNeckButtonInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrkdNeckButtonInput
         */
        static fromObject(object: { [k: string]: any }): proto.CrkdNeckButtonInput;

        /**
         * Creates a plain object from a CrkdNeckButtonInput message. Also converts values to other types if specified.
         * @param message CrkdNeckButtonInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.CrkdNeckButtonInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrkdNeckButtonInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CrkdNeckButtonInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CrkdNeckButtonInput {

        /** Properties of a CrkdNeckButtonInput. */
        interface $Properties {

            /** CrkdNeckButtonInput deviceid */
            deviceid: number;

            /** CrkdNeckButtonInput button */
            button: proto.CrkdNeckButtonType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CrkdNeckButtonInput. */
        type $Shape = proto.CrkdNeckButtonInput.$Properties;
    }

    /**
     * Properties of a CrkdDrumAxisInput.
     * @deprecated Use proto.CrkdDrumAxisInput.$Properties instead.
     */
    interface ICrkdDrumAxisInput extends proto.CrkdDrumAxisInput.$Properties {
    }

    /** Represents a CrkdDrumAxisInput. */
    class CrkdDrumAxisInput {

        /**
         * Constructs a new CrkdDrumAxisInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.CrkdDrumAxisInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CrkdDrumAxisInput deviceid. */
        deviceid: number;

        /** CrkdDrumAxisInput axis. */
        axis: proto.CrkdDrumAxisType;

        /**
         * Creates a new CrkdDrumAxisInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CrkdDrumAxisInput instance
         */
        static create(properties: proto.CrkdDrumAxisInput.$Shape): proto.CrkdDrumAxisInput & proto.CrkdDrumAxisInput.$Shape;
        static create(properties?: proto.CrkdDrumAxisInput.$Properties): proto.CrkdDrumAxisInput;

        /**
         * Encodes the specified CrkdDrumAxisInput message. Does not implicitly {@link proto.CrkdDrumAxisInput.verify|verify} messages.
         * @param message CrkdDrumAxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.CrkdDrumAxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CrkdDrumAxisInput message, length delimited. Does not implicitly {@link proto.CrkdDrumAxisInput.verify|verify} messages.
         * @param message CrkdDrumAxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.CrkdDrumAxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CrkdDrumAxisInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.CrkdDrumAxisInput & proto.CrkdDrumAxisInput.$Shape} CrkdDrumAxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CrkdDrumAxisInput & proto.CrkdDrumAxisInput.$Shape;

        /**
         * Decodes a CrkdDrumAxisInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.CrkdDrumAxisInput & proto.CrkdDrumAxisInput.$Shape} CrkdDrumAxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CrkdDrumAxisInput & proto.CrkdDrumAxisInput.$Shape;

        /**
         * Verifies a CrkdDrumAxisInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CrkdDrumAxisInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrkdDrumAxisInput
         */
        static fromObject(object: { [k: string]: any }): proto.CrkdDrumAxisInput;

        /**
         * Creates a plain object from a CrkdDrumAxisInput message. Also converts values to other types if specified.
         * @param message CrkdDrumAxisInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.CrkdDrumAxisInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrkdDrumAxisInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CrkdDrumAxisInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CrkdDrumAxisInput {

        /** Properties of a CrkdDrumAxisInput. */
        interface $Properties {

            /** CrkdDrumAxisInput deviceid */
            deviceid: number;

            /** CrkdDrumAxisInput axis */
            axis: proto.CrkdDrumAxisType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CrkdDrumAxisInput. */
        type $Shape = proto.CrkdDrumAxisInput.$Properties;
    }

    /**
     * Properties of a Gh5NeckButtonInput.
     * @deprecated Use proto.Gh5NeckButtonInput.$Properties instead.
     */
    interface IGh5NeckButtonInput extends proto.Gh5NeckButtonInput.$Properties {
    }

    /** Represents a Gh5NeckButtonInput. */
    class Gh5NeckButtonInput {

        /**
         * Constructs a new Gh5NeckButtonInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Gh5NeckButtonInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Gh5NeckButtonInput deviceid. */
        deviceid: number;

        /** Gh5NeckButtonInput button. */
        button: proto.Gh5NeckButtonType;

        /**
         * Creates a new Gh5NeckButtonInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Gh5NeckButtonInput instance
         */
        static create(properties: proto.Gh5NeckButtonInput.$Shape): proto.Gh5NeckButtonInput & proto.Gh5NeckButtonInput.$Shape;
        static create(properties?: proto.Gh5NeckButtonInput.$Properties): proto.Gh5NeckButtonInput;

        /**
         * Encodes the specified Gh5NeckButtonInput message. Does not implicitly {@link proto.Gh5NeckButtonInput.verify|verify} messages.
         * @param message Gh5NeckButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.Gh5NeckButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Gh5NeckButtonInput message, length delimited. Does not implicitly {@link proto.Gh5NeckButtonInput.verify|verify} messages.
         * @param message Gh5NeckButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.Gh5NeckButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Gh5NeckButtonInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.Gh5NeckButtonInput & proto.Gh5NeckButtonInput.$Shape} Gh5NeckButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Gh5NeckButtonInput & proto.Gh5NeckButtonInput.$Shape;

        /**
         * Decodes a Gh5NeckButtonInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.Gh5NeckButtonInput & proto.Gh5NeckButtonInput.$Shape} Gh5NeckButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Gh5NeckButtonInput & proto.Gh5NeckButtonInput.$Shape;

        /**
         * Verifies a Gh5NeckButtonInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Gh5NeckButtonInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Gh5NeckButtonInput
         */
        static fromObject(object: { [k: string]: any }): proto.Gh5NeckButtonInput;

        /**
         * Creates a plain object from a Gh5NeckButtonInput message. Also converts values to other types if specified.
         * @param message Gh5NeckButtonInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.Gh5NeckButtonInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Gh5NeckButtonInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Gh5NeckButtonInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Gh5NeckButtonInput {

        /** Properties of a Gh5NeckButtonInput. */
        interface $Properties {

            /** Gh5NeckButtonInput deviceid */
            deviceid: number;

            /** Gh5NeckButtonInput button */
            button: proto.Gh5NeckButtonType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Gh5NeckButtonInput. */
        type $Shape = proto.Gh5NeckButtonInput.$Properties;
    }

    /**
     * Properties of a VTechGuitarIOExpanderInput.
     * @deprecated Use proto.VTechGuitarIOExpanderInput.$Properties instead.
     */
    interface IVTechGuitarIOExpanderInput extends proto.VTechGuitarIOExpanderInput.$Properties {
    }

    /** Represents a VTechGuitarIOExpanderInput. */
    class VTechGuitarIOExpanderInput {

        /**
         * Constructs a new VTechGuitarIOExpanderInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.VTechGuitarIOExpanderInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VTechGuitarIOExpanderInput deviceid. */
        deviceid: number;

        /** VTechGuitarIOExpanderInput button. */
        button: number;

        /**
         * Creates a new VTechGuitarIOExpanderInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VTechGuitarIOExpanderInput instance
         */
        static create(properties: proto.VTechGuitarIOExpanderInput.$Shape): proto.VTechGuitarIOExpanderInput & proto.VTechGuitarIOExpanderInput.$Shape;
        static create(properties?: proto.VTechGuitarIOExpanderInput.$Properties): proto.VTechGuitarIOExpanderInput;

        /**
         * Encodes the specified VTechGuitarIOExpanderInput message. Does not implicitly {@link proto.VTechGuitarIOExpanderInput.verify|verify} messages.
         * @param message VTechGuitarIOExpanderInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.VTechGuitarIOExpanderInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VTechGuitarIOExpanderInput message, length delimited. Does not implicitly {@link proto.VTechGuitarIOExpanderInput.verify|verify} messages.
         * @param message VTechGuitarIOExpanderInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.VTechGuitarIOExpanderInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VTechGuitarIOExpanderInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.VTechGuitarIOExpanderInput & proto.VTechGuitarIOExpanderInput.$Shape} VTechGuitarIOExpanderInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.VTechGuitarIOExpanderInput & proto.VTechGuitarIOExpanderInput.$Shape;

        /**
         * Decodes a VTechGuitarIOExpanderInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.VTechGuitarIOExpanderInput & proto.VTechGuitarIOExpanderInput.$Shape} VTechGuitarIOExpanderInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.VTechGuitarIOExpanderInput & proto.VTechGuitarIOExpanderInput.$Shape;

        /**
         * Verifies a VTechGuitarIOExpanderInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VTechGuitarIOExpanderInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VTechGuitarIOExpanderInput
         */
        static fromObject(object: { [k: string]: any }): proto.VTechGuitarIOExpanderInput;

        /**
         * Creates a plain object from a VTechGuitarIOExpanderInput message. Also converts values to other types if specified.
         * @param message VTechGuitarIOExpanderInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.VTechGuitarIOExpanderInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VTechGuitarIOExpanderInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VTechGuitarIOExpanderInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VTechGuitarIOExpanderInput {

        /** Properties of a VTechGuitarIOExpanderInput. */
        interface $Properties {

            /** VTechGuitarIOExpanderInput deviceid */
            deviceid: number;

            /** VTechGuitarIOExpanderInput button */
            button: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VTechGuitarIOExpanderInput. */
        type $Shape = proto.VTechGuitarIOExpanderInput.$Properties;
    }

    /**
     * Properties of a MouseAxisInput.
     * @deprecated Use proto.MouseAxisInput.$Properties instead.
     */
    interface IMouseAxisInput extends proto.MouseAxisInput.$Properties {
    }

    /** Represents a MouseAxisInput. */
    class MouseAxisInput {

        /**
         * Constructs a new MouseAxisInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MouseAxisInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MouseAxisInput deviceid. */
        deviceid: number;

        /** MouseAxisInput axis. */
        axis: proto.MouseAxisType;

        /**
         * Creates a new MouseAxisInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MouseAxisInput instance
         */
        static create(properties: proto.MouseAxisInput.$Shape): proto.MouseAxisInput & proto.MouseAxisInput.$Shape;
        static create(properties?: proto.MouseAxisInput.$Properties): proto.MouseAxisInput;

        /**
         * Encodes the specified MouseAxisInput message. Does not implicitly {@link proto.MouseAxisInput.verify|verify} messages.
         * @param message MouseAxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MouseAxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MouseAxisInput message, length delimited. Does not implicitly {@link proto.MouseAxisInput.verify|verify} messages.
         * @param message MouseAxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MouseAxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MouseAxisInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MouseAxisInput & proto.MouseAxisInput.$Shape} MouseAxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MouseAxisInput & proto.MouseAxisInput.$Shape;

        /**
         * Decodes a MouseAxisInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MouseAxisInput & proto.MouseAxisInput.$Shape} MouseAxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MouseAxisInput & proto.MouseAxisInput.$Shape;

        /**
         * Verifies a MouseAxisInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MouseAxisInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MouseAxisInput
         */
        static fromObject(object: { [k: string]: any }): proto.MouseAxisInput;

        /**
         * Creates a plain object from a MouseAxisInput message. Also converts values to other types if specified.
         * @param message MouseAxisInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MouseAxisInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MouseAxisInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MouseAxisInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MouseAxisInput {

        /** Properties of a MouseAxisInput. */
        interface $Properties {

            /** MouseAxisInput deviceid */
            deviceid: number;

            /** MouseAxisInput axis */
            axis: proto.MouseAxisType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MouseAxisInput. */
        type $Shape = proto.MouseAxisInput.$Properties;
    }

    /**
     * Properties of a MouseButtonInput.
     * @deprecated Use proto.MouseButtonInput.$Properties instead.
     */
    interface IMouseButtonInput extends proto.MouseButtonInput.$Properties {
    }

    /** Represents a MouseButtonInput. */
    class MouseButtonInput {

        /**
         * Constructs a new MouseButtonInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MouseButtonInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MouseButtonInput deviceid. */
        deviceid: number;

        /** MouseButtonInput button. */
        button: proto.MouseButtonType;

        /**
         * Creates a new MouseButtonInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MouseButtonInput instance
         */
        static create(properties: proto.MouseButtonInput.$Shape): proto.MouseButtonInput & proto.MouseButtonInput.$Shape;
        static create(properties?: proto.MouseButtonInput.$Properties): proto.MouseButtonInput;

        /**
         * Encodes the specified MouseButtonInput message. Does not implicitly {@link proto.MouseButtonInput.verify|verify} messages.
         * @param message MouseButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MouseButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MouseButtonInput message, length delimited. Does not implicitly {@link proto.MouseButtonInput.verify|verify} messages.
         * @param message MouseButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MouseButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MouseButtonInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MouseButtonInput & proto.MouseButtonInput.$Shape} MouseButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MouseButtonInput & proto.MouseButtonInput.$Shape;

        /**
         * Decodes a MouseButtonInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MouseButtonInput & proto.MouseButtonInput.$Shape} MouseButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MouseButtonInput & proto.MouseButtonInput.$Shape;

        /**
         * Verifies a MouseButtonInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MouseButtonInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MouseButtonInput
         */
        static fromObject(object: { [k: string]: any }): proto.MouseButtonInput;

        /**
         * Creates a plain object from a MouseButtonInput message. Also converts values to other types if specified.
         * @param message MouseButtonInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MouseButtonInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MouseButtonInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MouseButtonInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MouseButtonInput {

        /** Properties of a MouseButtonInput. */
        interface $Properties {

            /** MouseButtonInput deviceid */
            deviceid: number;

            /** MouseButtonInput button */
            button: proto.MouseButtonType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MouseButtonInput. */
        type $Shape = proto.MouseButtonInput.$Properties;
    }

    /**
     * Properties of a KeyboardKeyInput.
     * @deprecated Use proto.KeyboardKeyInput.$Properties instead.
     */
    interface IKeyboardKeyInput extends proto.KeyboardKeyInput.$Properties {
    }

    /** Represents a KeyboardKeyInput. */
    class KeyboardKeyInput {

        /**
         * Constructs a new KeyboardKeyInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.KeyboardKeyInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** KeyboardKeyInput deviceid. */
        deviceid: number;

        /** KeyboardKeyInput key. */
        key: number;

        /**
         * Creates a new KeyboardKeyInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyboardKeyInput instance
         */
        static create(properties: proto.KeyboardKeyInput.$Shape): proto.KeyboardKeyInput & proto.KeyboardKeyInput.$Shape;
        static create(properties?: proto.KeyboardKeyInput.$Properties): proto.KeyboardKeyInput;

        /**
         * Encodes the specified KeyboardKeyInput message. Does not implicitly {@link proto.KeyboardKeyInput.verify|verify} messages.
         * @param message KeyboardKeyInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.KeyboardKeyInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyboardKeyInput message, length delimited. Does not implicitly {@link proto.KeyboardKeyInput.verify|verify} messages.
         * @param message KeyboardKeyInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.KeyboardKeyInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyboardKeyInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.KeyboardKeyInput & proto.KeyboardKeyInput.$Shape} KeyboardKeyInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.KeyboardKeyInput & proto.KeyboardKeyInput.$Shape;

        /**
         * Decodes a KeyboardKeyInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.KeyboardKeyInput & proto.KeyboardKeyInput.$Shape} KeyboardKeyInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.KeyboardKeyInput & proto.KeyboardKeyInput.$Shape;

        /**
         * Verifies a KeyboardKeyInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyboardKeyInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyboardKeyInput
         */
        static fromObject(object: { [k: string]: any }): proto.KeyboardKeyInput;

        /**
         * Creates a plain object from a KeyboardKeyInput message. Also converts values to other types if specified.
         * @param message KeyboardKeyInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.KeyboardKeyInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyboardKeyInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for KeyboardKeyInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace KeyboardKeyInput {

        /** Properties of a KeyboardKeyInput. */
        interface $Properties {

            /** KeyboardKeyInput deviceid */
            deviceid: number;

            /** KeyboardKeyInput key */
            key: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a KeyboardKeyInput. */
        type $Shape = proto.KeyboardKeyInput.$Properties;
    }

    /**
     * Properties of a ShortcutInput.
     * @deprecated Use proto.ShortcutInput.$Properties instead.
     */
    interface IShortcutInput extends proto.ShortcutInput.$Properties {
    }

    /** Represents a ShortcutInput. */
    class ShortcutInput {

        /**
         * Constructs a new ShortcutInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ShortcutInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ShortcutInput inputs. */
        inputs: proto.Input.$Properties[];

        /**
         * Creates a new ShortcutInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShortcutInput instance
         */
        static create(properties: proto.ShortcutInput.$Shape): proto.ShortcutInput & proto.ShortcutInput.$Shape;
        static create(properties?: proto.ShortcutInput.$Properties): proto.ShortcutInput;

        /**
         * Encodes the specified ShortcutInput message. Does not implicitly {@link proto.ShortcutInput.verify|verify} messages.
         * @param message ShortcutInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ShortcutInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ShortcutInput message, length delimited. Does not implicitly {@link proto.ShortcutInput.verify|verify} messages.
         * @param message ShortcutInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ShortcutInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShortcutInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ShortcutInput & proto.ShortcutInput.$Shape} ShortcutInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ShortcutInput & proto.ShortcutInput.$Shape;

        /**
         * Decodes a ShortcutInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ShortcutInput & proto.ShortcutInput.$Shape} ShortcutInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ShortcutInput & proto.ShortcutInput.$Shape;

        /**
         * Verifies a ShortcutInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ShortcutInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShortcutInput
         */
        static fromObject(object: { [k: string]: any }): proto.ShortcutInput;

        /**
         * Creates a plain object from a ShortcutInput message. Also converts values to other types if specified.
         * @param message ShortcutInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ShortcutInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShortcutInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ShortcutInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ShortcutInput {

        /** Properties of a ShortcutInput. */
        interface $Properties {

            /** ShortcutInput inputs */
            inputs?: (proto.Input.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ShortcutInput. */
        type $Shape = {
          inputs?: proto.Input.$Shape[]|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a HeldInput.
     * @deprecated Use proto.HeldInput.$Properties instead.
     */
    interface IHeldInput extends proto.HeldInput.$Properties {
    }

    /** Represents a HeldInput. */
    class HeldInput {

        /**
         * Constructs a new HeldInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.HeldInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HeldInput input. */
        input: proto.Input.$Properties;

        /** HeldInput time. */
        time: number;

        /**
         * Creates a new HeldInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeldInput instance
         */
        static create(properties: proto.HeldInput.$Shape): proto.HeldInput & proto.HeldInput.$Shape;
        static create(properties?: proto.HeldInput.$Properties): proto.HeldInput;

        /**
         * Encodes the specified HeldInput message. Does not implicitly {@link proto.HeldInput.verify|verify} messages.
         * @param message HeldInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.HeldInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeldInput message, length delimited. Does not implicitly {@link proto.HeldInput.verify|verify} messages.
         * @param message HeldInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.HeldInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeldInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.HeldInput & proto.HeldInput.$Shape} HeldInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HeldInput & proto.HeldInput.$Shape;

        /**
         * Decodes a HeldInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.HeldInput & proto.HeldInput.$Shape} HeldInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HeldInput & proto.HeldInput.$Shape;

        /**
         * Verifies a HeldInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeldInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeldInput
         */
        static fromObject(object: { [k: string]: any }): proto.HeldInput;

        /**
         * Creates a plain object from a HeldInput message. Also converts values to other types if specified.
         * @param message HeldInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.HeldInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeldInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for HeldInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HeldInput {

        /** Properties of a HeldInput. */
        interface $Properties {

            /** HeldInput input */
            input: proto.Input.$Properties;

            /** HeldInput time */
            time: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HeldInput. */
        type $Shape = {
          input: proto.Input.$Shape;
          time: number;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a PS2AxisInput.
     * @deprecated Use proto.PS2AxisInput.$Properties instead.
     */
    interface IPS2AxisInput extends proto.PS2AxisInput.$Properties {
    }

    /** Represents a PS2AxisInput. */
    class PS2AxisInput {

        /**
         * Constructs a new PS2AxisInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.PS2AxisInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PS2AxisInput deviceid. */
        deviceid: number;

        /** PS2AxisInput axis. */
        axis: proto.PS2AxisType;

        /**
         * Creates a new PS2AxisInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PS2AxisInput instance
         */
        static create(properties: proto.PS2AxisInput.$Shape): proto.PS2AxisInput & proto.PS2AxisInput.$Shape;
        static create(properties?: proto.PS2AxisInput.$Properties): proto.PS2AxisInput;

        /**
         * Encodes the specified PS2AxisInput message. Does not implicitly {@link proto.PS2AxisInput.verify|verify} messages.
         * @param message PS2AxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.PS2AxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PS2AxisInput message, length delimited. Does not implicitly {@link proto.PS2AxisInput.verify|verify} messages.
         * @param message PS2AxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.PS2AxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PS2AxisInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.PS2AxisInput & proto.PS2AxisInput.$Shape} PS2AxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PS2AxisInput & proto.PS2AxisInput.$Shape;

        /**
         * Decodes a PS2AxisInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.PS2AxisInput & proto.PS2AxisInput.$Shape} PS2AxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PS2AxisInput & proto.PS2AxisInput.$Shape;

        /**
         * Verifies a PS2AxisInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PS2AxisInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PS2AxisInput
         */
        static fromObject(object: { [k: string]: any }): proto.PS2AxisInput;

        /**
         * Creates a plain object from a PS2AxisInput message. Also converts values to other types if specified.
         * @param message PS2AxisInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.PS2AxisInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PS2AxisInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PS2AxisInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PS2AxisInput {

        /** Properties of a PS2AxisInput. */
        interface $Properties {

            /** PS2AxisInput deviceid */
            deviceid: number;

            /** PS2AxisInput axis */
            axis: proto.PS2AxisType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PS2AxisInput. */
        type $Shape = proto.PS2AxisInput.$Properties;
    }

    /**
     * Properties of a PS2ButtonInput.
     * @deprecated Use proto.PS2ButtonInput.$Properties instead.
     */
    interface IPS2ButtonInput extends proto.PS2ButtonInput.$Properties {
    }

    /** Represents a PS2ButtonInput. */
    class PS2ButtonInput {

        /**
         * Constructs a new PS2ButtonInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.PS2ButtonInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PS2ButtonInput deviceid. */
        deviceid: number;

        /** PS2ButtonInput button. */
        button: proto.PS2ButtonType;

        /**
         * Creates a new PS2ButtonInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PS2ButtonInput instance
         */
        static create(properties: proto.PS2ButtonInput.$Shape): proto.PS2ButtonInput & proto.PS2ButtonInput.$Shape;
        static create(properties?: proto.PS2ButtonInput.$Properties): proto.PS2ButtonInput;

        /**
         * Encodes the specified PS2ButtonInput message. Does not implicitly {@link proto.PS2ButtonInput.verify|verify} messages.
         * @param message PS2ButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.PS2ButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PS2ButtonInput message, length delimited. Does not implicitly {@link proto.PS2ButtonInput.verify|verify} messages.
         * @param message PS2ButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.PS2ButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PS2ButtonInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.PS2ButtonInput & proto.PS2ButtonInput.$Shape} PS2ButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PS2ButtonInput & proto.PS2ButtonInput.$Shape;

        /**
         * Decodes a PS2ButtonInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.PS2ButtonInput & proto.PS2ButtonInput.$Shape} PS2ButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PS2ButtonInput & proto.PS2ButtonInput.$Shape;

        /**
         * Verifies a PS2ButtonInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PS2ButtonInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PS2ButtonInput
         */
        static fromObject(object: { [k: string]: any }): proto.PS2ButtonInput;

        /**
         * Creates a plain object from a PS2ButtonInput message. Also converts values to other types if specified.
         * @param message PS2ButtonInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.PS2ButtonInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PS2ButtonInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PS2ButtonInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PS2ButtonInput {

        /** Properties of a PS2ButtonInput. */
        interface $Properties {

            /** PS2ButtonInput deviceid */
            deviceid: number;

            /** PS2ButtonInput button */
            button: proto.PS2ButtonType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PS2ButtonInput. */
        type $Shape = proto.PS2ButtonInput.$Properties;
    }

    /**
     * Properties of a USBButtonInput.
     * @deprecated Use proto.USBButtonInput.$Properties instead.
     */
    interface IUSBButtonInput extends proto.USBButtonInput.$Properties {
    }

    /** Represents a USBButtonInput. */
    class USBButtonInput {

        /**
         * Constructs a new USBButtonInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.USBButtonInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** USBButtonInput deviceid. */
        deviceid: number;

        /** USBButtonInput button. */
        button: proto.Output.$Properties;

        /**
         * Creates a new USBButtonInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns USBButtonInput instance
         */
        static create(properties: proto.USBButtonInput.$Shape): proto.USBButtonInput & proto.USBButtonInput.$Shape;
        static create(properties?: proto.USBButtonInput.$Properties): proto.USBButtonInput;

        /**
         * Encodes the specified USBButtonInput message. Does not implicitly {@link proto.USBButtonInput.verify|verify} messages.
         * @param message USBButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.USBButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified USBButtonInput message, length delimited. Does not implicitly {@link proto.USBButtonInput.verify|verify} messages.
         * @param message USBButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.USBButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a USBButtonInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.USBButtonInput & proto.USBButtonInput.$Shape} USBButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.USBButtonInput & proto.USBButtonInput.$Shape;

        /**
         * Decodes a USBButtonInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.USBButtonInput & proto.USBButtonInput.$Shape} USBButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.USBButtonInput & proto.USBButtonInput.$Shape;

        /**
         * Verifies a USBButtonInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a USBButtonInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns USBButtonInput
         */
        static fromObject(object: { [k: string]: any }): proto.USBButtonInput;

        /**
         * Creates a plain object from a USBButtonInput message. Also converts values to other types if specified.
         * @param message USBButtonInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.USBButtonInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this USBButtonInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for USBButtonInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace USBButtonInput {

        /** Properties of a USBButtonInput. */
        interface $Properties {

            /** USBButtonInput deviceid */
            deviceid: number;

            /** USBButtonInput button */
            button: proto.Output.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a USBButtonInput. */
        type $Shape = {
          deviceid: number;
          button: proto.Output.$Shape;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a USBAxisInput.
     * @deprecated Use proto.USBAxisInput.$Properties instead.
     */
    interface IUSBAxisInput extends proto.USBAxisInput.$Properties {
    }

    /** Represents a USBAxisInput. */
    class USBAxisInput {

        /**
         * Constructs a new USBAxisInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.USBAxisInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** USBAxisInput deviceid. */
        deviceid: number;

        /** USBAxisInput axis. */
        axis: proto.Output.$Properties;

        /**
         * Creates a new USBAxisInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns USBAxisInput instance
         */
        static create(properties: proto.USBAxisInput.$Shape): proto.USBAxisInput & proto.USBAxisInput.$Shape;
        static create(properties?: proto.USBAxisInput.$Properties): proto.USBAxisInput;

        /**
         * Encodes the specified USBAxisInput message. Does not implicitly {@link proto.USBAxisInput.verify|verify} messages.
         * @param message USBAxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.USBAxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified USBAxisInput message, length delimited. Does not implicitly {@link proto.USBAxisInput.verify|verify} messages.
         * @param message USBAxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.USBAxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a USBAxisInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.USBAxisInput & proto.USBAxisInput.$Shape} USBAxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.USBAxisInput & proto.USBAxisInput.$Shape;

        /**
         * Decodes a USBAxisInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.USBAxisInput & proto.USBAxisInput.$Shape} USBAxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.USBAxisInput & proto.USBAxisInput.$Shape;

        /**
         * Verifies a USBAxisInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a USBAxisInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns USBAxisInput
         */
        static fromObject(object: { [k: string]: any }): proto.USBAxisInput;

        /**
         * Creates a plain object from a USBAxisInput message. Also converts values to other types if specified.
         * @param message USBAxisInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.USBAxisInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this USBAxisInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for USBAxisInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace USBAxisInput {

        /** Properties of a USBAxisInput. */
        interface $Properties {

            /** USBAxisInput deviceid */
            deviceid: number;

            /** USBAxisInput axis */
            axis: proto.Output.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a USBAxisInput. */
        type $Shape = {
          deviceid: number;
          axis: proto.Output.$Shape;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a MidiNoteInput.
     * @deprecated Use proto.MidiNoteInput.$Properties instead.
     */
    interface IMidiNoteInput extends proto.MidiNoteInput.$Properties {
    }

    /** Represents a MidiNoteInput. */
    class MidiNoteInput {

        /**
         * Constructs a new MidiNoteInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MidiNoteInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MidiNoteInput note. */
        note: number;

        /** MidiNoteInput channel. */
        channel: number;

        /**
         * Creates a new MidiNoteInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MidiNoteInput instance
         */
        static create(properties: proto.MidiNoteInput.$Shape): proto.MidiNoteInput & proto.MidiNoteInput.$Shape;
        static create(properties?: proto.MidiNoteInput.$Properties): proto.MidiNoteInput;

        /**
         * Encodes the specified MidiNoteInput message. Does not implicitly {@link proto.MidiNoteInput.verify|verify} messages.
         * @param message MidiNoteInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MidiNoteInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MidiNoteInput message, length delimited. Does not implicitly {@link proto.MidiNoteInput.verify|verify} messages.
         * @param message MidiNoteInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MidiNoteInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MidiNoteInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MidiNoteInput & proto.MidiNoteInput.$Shape} MidiNoteInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MidiNoteInput & proto.MidiNoteInput.$Shape;

        /**
         * Decodes a MidiNoteInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MidiNoteInput & proto.MidiNoteInput.$Shape} MidiNoteInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MidiNoteInput & proto.MidiNoteInput.$Shape;

        /**
         * Verifies a MidiNoteInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MidiNoteInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MidiNoteInput
         */
        static fromObject(object: { [k: string]: any }): proto.MidiNoteInput;

        /**
         * Creates a plain object from a MidiNoteInput message. Also converts values to other types if specified.
         * @param message MidiNoteInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MidiNoteInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MidiNoteInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MidiNoteInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MidiNoteInput {

        /** Properties of a MidiNoteInput. */
        interface $Properties {

            /** MidiNoteInput note */
            note: number;

            /** MidiNoteInput channel */
            channel: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MidiNoteInput. */
        type $Shape = proto.MidiNoteInput.$Properties;
    }

    /**
     * Properties of a MidiControlChangeInput.
     * @deprecated Use proto.MidiControlChangeInput.$Properties instead.
     */
    interface IMidiControlChangeInput extends proto.MidiControlChangeInput.$Properties {
    }

    /** Represents a MidiControlChangeInput. */
    class MidiControlChangeInput {

        /**
         * Constructs a new MidiControlChangeInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MidiControlChangeInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MidiControlChangeInput cc. */
        cc: number;

        /** MidiControlChangeInput channel. */
        channel: number;

        /**
         * Creates a new MidiControlChangeInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MidiControlChangeInput instance
         */
        static create(properties: proto.MidiControlChangeInput.$Shape): proto.MidiControlChangeInput & proto.MidiControlChangeInput.$Shape;
        static create(properties?: proto.MidiControlChangeInput.$Properties): proto.MidiControlChangeInput;

        /**
         * Encodes the specified MidiControlChangeInput message. Does not implicitly {@link proto.MidiControlChangeInput.verify|verify} messages.
         * @param message MidiControlChangeInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MidiControlChangeInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MidiControlChangeInput message, length delimited. Does not implicitly {@link proto.MidiControlChangeInput.verify|verify} messages.
         * @param message MidiControlChangeInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MidiControlChangeInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MidiControlChangeInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MidiControlChangeInput & proto.MidiControlChangeInput.$Shape} MidiControlChangeInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MidiControlChangeInput & proto.MidiControlChangeInput.$Shape;

        /**
         * Decodes a MidiControlChangeInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MidiControlChangeInput & proto.MidiControlChangeInput.$Shape} MidiControlChangeInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MidiControlChangeInput & proto.MidiControlChangeInput.$Shape;

        /**
         * Verifies a MidiControlChangeInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MidiControlChangeInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MidiControlChangeInput
         */
        static fromObject(object: { [k: string]: any }): proto.MidiControlChangeInput;

        /**
         * Creates a plain object from a MidiControlChangeInput message. Also converts values to other types if specified.
         * @param message MidiControlChangeInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MidiControlChangeInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MidiControlChangeInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MidiControlChangeInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MidiControlChangeInput {

        /** Properties of a MidiControlChangeInput. */
        interface $Properties {

            /** MidiControlChangeInput cc */
            cc: number;

            /** MidiControlChangeInput channel */
            channel: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MidiControlChangeInput. */
        type $Shape = proto.MidiControlChangeInput.$Properties;
    }

    /**
     * Properties of a MidiPitchBendInput.
     * @deprecated Use proto.MidiPitchBendInput.$Properties instead.
     */
    interface IMidiPitchBendInput extends proto.MidiPitchBendInput.$Properties {
    }

    /** Represents a MidiPitchBendInput. */
    class MidiPitchBendInput {

        /**
         * Constructs a new MidiPitchBendInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MidiPitchBendInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MidiPitchBendInput channel. */
        channel: number;

        /**
         * Creates a new MidiPitchBendInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MidiPitchBendInput instance
         */
        static create(properties: proto.MidiPitchBendInput.$Shape): proto.MidiPitchBendInput & proto.MidiPitchBendInput.$Shape;
        static create(properties?: proto.MidiPitchBendInput.$Properties): proto.MidiPitchBendInput;

        /**
         * Encodes the specified MidiPitchBendInput message. Does not implicitly {@link proto.MidiPitchBendInput.verify|verify} messages.
         * @param message MidiPitchBendInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MidiPitchBendInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MidiPitchBendInput message, length delimited. Does not implicitly {@link proto.MidiPitchBendInput.verify|verify} messages.
         * @param message MidiPitchBendInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MidiPitchBendInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MidiPitchBendInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MidiPitchBendInput & proto.MidiPitchBendInput.$Shape} MidiPitchBendInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MidiPitchBendInput & proto.MidiPitchBendInput.$Shape;

        /**
         * Decodes a MidiPitchBendInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MidiPitchBendInput & proto.MidiPitchBendInput.$Shape} MidiPitchBendInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MidiPitchBendInput & proto.MidiPitchBendInput.$Shape;

        /**
         * Verifies a MidiPitchBendInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MidiPitchBendInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MidiPitchBendInput
         */
        static fromObject(object: { [k: string]: any }): proto.MidiPitchBendInput;

        /**
         * Creates a plain object from a MidiPitchBendInput message. Also converts values to other types if specified.
         * @param message MidiPitchBendInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MidiPitchBendInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MidiPitchBendInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MidiPitchBendInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MidiPitchBendInput {

        /** Properties of a MidiPitchBendInput. */
        interface $Properties {

            /** MidiPitchBendInput channel */
            channel: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MidiPitchBendInput. */
        type $Shape = proto.MidiPitchBendInput.$Properties;
    }

    /**
     * Properties of a MidiProGuitarButtonInput.
     * @deprecated Use proto.MidiProGuitarButtonInput.$Properties instead.
     */
    interface IMidiProGuitarButtonInput extends proto.MidiProGuitarButtonInput.$Properties {
    }

    /** Represents a MidiProGuitarButtonInput. */
    class MidiProGuitarButtonInput {

        /**
         * Constructs a new MidiProGuitarButtonInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MidiProGuitarButtonInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MidiProGuitarButtonInput button. */
        button: proto.ProGuitarMidiButtonType;

        /**
         * Creates a new MidiProGuitarButtonInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MidiProGuitarButtonInput instance
         */
        static create(properties: proto.MidiProGuitarButtonInput.$Shape): proto.MidiProGuitarButtonInput & proto.MidiProGuitarButtonInput.$Shape;
        static create(properties?: proto.MidiProGuitarButtonInput.$Properties): proto.MidiProGuitarButtonInput;

        /**
         * Encodes the specified MidiProGuitarButtonInput message. Does not implicitly {@link proto.MidiProGuitarButtonInput.verify|verify} messages.
         * @param message MidiProGuitarButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MidiProGuitarButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MidiProGuitarButtonInput message, length delimited. Does not implicitly {@link proto.MidiProGuitarButtonInput.verify|verify} messages.
         * @param message MidiProGuitarButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MidiProGuitarButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MidiProGuitarButtonInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MidiProGuitarButtonInput & proto.MidiProGuitarButtonInput.$Shape} MidiProGuitarButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MidiProGuitarButtonInput & proto.MidiProGuitarButtonInput.$Shape;

        /**
         * Decodes a MidiProGuitarButtonInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MidiProGuitarButtonInput & proto.MidiProGuitarButtonInput.$Shape} MidiProGuitarButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MidiProGuitarButtonInput & proto.MidiProGuitarButtonInput.$Shape;

        /**
         * Verifies a MidiProGuitarButtonInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MidiProGuitarButtonInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MidiProGuitarButtonInput
         */
        static fromObject(object: { [k: string]: any }): proto.MidiProGuitarButtonInput;

        /**
         * Creates a plain object from a MidiProGuitarButtonInput message. Also converts values to other types if specified.
         * @param message MidiProGuitarButtonInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MidiProGuitarButtonInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MidiProGuitarButtonInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MidiProGuitarButtonInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MidiProGuitarButtonInput {

        /** Properties of a MidiProGuitarButtonInput. */
        interface $Properties {

            /** MidiProGuitarButtonInput button */
            button: proto.ProGuitarMidiButtonType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MidiProGuitarButtonInput. */
        type $Shape = proto.MidiProGuitarButtonInput.$Properties;
    }

    /**
     * Properties of a MidiProGuitarAxisInput.
     * @deprecated Use proto.MidiProGuitarAxisInput.$Properties instead.
     */
    interface IMidiProGuitarAxisInput extends proto.MidiProGuitarAxisInput.$Properties {
    }

    /** Represents a MidiProGuitarAxisInput. */
    class MidiProGuitarAxisInput {

        /**
         * Constructs a new MidiProGuitarAxisInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MidiProGuitarAxisInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MidiProGuitarAxisInput axis. */
        axis: proto.ProGuitarAxisType;

        /**
         * Creates a new MidiProGuitarAxisInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MidiProGuitarAxisInput instance
         */
        static create(properties: proto.MidiProGuitarAxisInput.$Shape): proto.MidiProGuitarAxisInput & proto.MidiProGuitarAxisInput.$Shape;
        static create(properties?: proto.MidiProGuitarAxisInput.$Properties): proto.MidiProGuitarAxisInput;

        /**
         * Encodes the specified MidiProGuitarAxisInput message. Does not implicitly {@link proto.MidiProGuitarAxisInput.verify|verify} messages.
         * @param message MidiProGuitarAxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MidiProGuitarAxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MidiProGuitarAxisInput message, length delimited. Does not implicitly {@link proto.MidiProGuitarAxisInput.verify|verify} messages.
         * @param message MidiProGuitarAxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MidiProGuitarAxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MidiProGuitarAxisInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MidiProGuitarAxisInput & proto.MidiProGuitarAxisInput.$Shape} MidiProGuitarAxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MidiProGuitarAxisInput & proto.MidiProGuitarAxisInput.$Shape;

        /**
         * Decodes a MidiProGuitarAxisInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MidiProGuitarAxisInput & proto.MidiProGuitarAxisInput.$Shape} MidiProGuitarAxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MidiProGuitarAxisInput & proto.MidiProGuitarAxisInput.$Shape;

        /**
         * Verifies a MidiProGuitarAxisInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MidiProGuitarAxisInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MidiProGuitarAxisInput
         */
        static fromObject(object: { [k: string]: any }): proto.MidiProGuitarAxisInput;

        /**
         * Creates a plain object from a MidiProGuitarAxisInput message. Also converts values to other types if specified.
         * @param message MidiProGuitarAxisInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MidiProGuitarAxisInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MidiProGuitarAxisInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MidiProGuitarAxisInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MidiProGuitarAxisInput {

        /** Properties of a MidiProGuitarAxisInput. */
        interface $Properties {

            /** MidiProGuitarAxisInput axis */
            axis: proto.ProGuitarAxisType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MidiProGuitarAxisInput. */
        type $Shape = proto.MidiProGuitarAxisInput.$Properties;
    }

    /**
     * Properties of a ProtarNeckAxisInput.
     * @deprecated Use proto.ProtarNeckAxisInput.$Properties instead.
     */
    interface IProtarNeckAxisInput extends proto.ProtarNeckAxisInput.$Properties {
    }

    /** Represents a ProtarNeckAxisInput. */
    class ProtarNeckAxisInput {

        /**
         * Constructs a new ProtarNeckAxisInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ProtarNeckAxisInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ProtarNeckAxisInput deviceid. */
        deviceid: number;

        /** ProtarNeckAxisInput axis. */
        axis: proto.ProGuitarNeckAxisType;

        /**
         * Creates a new ProtarNeckAxisInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtarNeckAxisInput instance
         */
        static create(properties: proto.ProtarNeckAxisInput.$Shape): proto.ProtarNeckAxisInput & proto.ProtarNeckAxisInput.$Shape;
        static create(properties?: proto.ProtarNeckAxisInput.$Properties): proto.ProtarNeckAxisInput;

        /**
         * Encodes the specified ProtarNeckAxisInput message. Does not implicitly {@link proto.ProtarNeckAxisInput.verify|verify} messages.
         * @param message ProtarNeckAxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ProtarNeckAxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtarNeckAxisInput message, length delimited. Does not implicitly {@link proto.ProtarNeckAxisInput.verify|verify} messages.
         * @param message ProtarNeckAxisInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ProtarNeckAxisInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtarNeckAxisInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ProtarNeckAxisInput & proto.ProtarNeckAxisInput.$Shape} ProtarNeckAxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ProtarNeckAxisInput & proto.ProtarNeckAxisInput.$Shape;

        /**
         * Decodes a ProtarNeckAxisInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ProtarNeckAxisInput & proto.ProtarNeckAxisInput.$Shape} ProtarNeckAxisInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ProtarNeckAxisInput & proto.ProtarNeckAxisInput.$Shape;

        /**
         * Verifies a ProtarNeckAxisInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtarNeckAxisInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtarNeckAxisInput
         */
        static fromObject(object: { [k: string]: any }): proto.ProtarNeckAxisInput;

        /**
         * Creates a plain object from a ProtarNeckAxisInput message. Also converts values to other types if specified.
         * @param message ProtarNeckAxisInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ProtarNeckAxisInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtarNeckAxisInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ProtarNeckAxisInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ProtarNeckAxisInput {

        /** Properties of a ProtarNeckAxisInput. */
        interface $Properties {

            /** ProtarNeckAxisInput deviceid */
            deviceid: number;

            /** ProtarNeckAxisInput axis */
            axis: proto.ProGuitarNeckAxisType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ProtarNeckAxisInput. */
        type $Shape = proto.ProtarNeckAxisInput.$Properties;
    }

    /**
     * Properties of a ProtarNeckButtonInput.
     * @deprecated Use proto.ProtarNeckButtonInput.$Properties instead.
     */
    interface IProtarNeckButtonInput extends proto.ProtarNeckButtonInput.$Properties {
    }

    /** Represents a ProtarNeckButtonInput. */
    class ProtarNeckButtonInput {

        /**
         * Constructs a new ProtarNeckButtonInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ProtarNeckButtonInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ProtarNeckButtonInput deviceid. */
        deviceid: number;

        /** ProtarNeckButtonInput button. */
        button: proto.ProGuitarNeckButtonType;

        /**
         * Creates a new ProtarNeckButtonInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtarNeckButtonInput instance
         */
        static create(properties: proto.ProtarNeckButtonInput.$Shape): proto.ProtarNeckButtonInput & proto.ProtarNeckButtonInput.$Shape;
        static create(properties?: proto.ProtarNeckButtonInput.$Properties): proto.ProtarNeckButtonInput;

        /**
         * Encodes the specified ProtarNeckButtonInput message. Does not implicitly {@link proto.ProtarNeckButtonInput.verify|verify} messages.
         * @param message ProtarNeckButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ProtarNeckButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtarNeckButtonInput message, length delimited. Does not implicitly {@link proto.ProtarNeckButtonInput.verify|verify} messages.
         * @param message ProtarNeckButtonInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ProtarNeckButtonInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtarNeckButtonInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ProtarNeckButtonInput & proto.ProtarNeckButtonInput.$Shape} ProtarNeckButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ProtarNeckButtonInput & proto.ProtarNeckButtonInput.$Shape;

        /**
         * Decodes a ProtarNeckButtonInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ProtarNeckButtonInput & proto.ProtarNeckButtonInput.$Shape} ProtarNeckButtonInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ProtarNeckButtonInput & proto.ProtarNeckButtonInput.$Shape;

        /**
         * Verifies a ProtarNeckButtonInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtarNeckButtonInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtarNeckButtonInput
         */
        static fromObject(object: { [k: string]: any }): proto.ProtarNeckButtonInput;

        /**
         * Creates a plain object from a ProtarNeckButtonInput message. Also converts values to other types if specified.
         * @param message ProtarNeckButtonInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ProtarNeckButtonInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtarNeckButtonInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ProtarNeckButtonInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ProtarNeckButtonInput {

        /** Properties of a ProtarNeckButtonInput. */
        interface $Properties {

            /** ProtarNeckButtonInput deviceid */
            deviceid: number;

            /** ProtarNeckButtonInput button */
            button: proto.ProGuitarNeckButtonType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ProtarNeckButtonInput. */
        type $Shape = proto.ProtarNeckButtonInput.$Properties;
    }

    /**
     * Properties of a MidiInput.
     * @deprecated Use proto.MidiInput.$Properties instead.
     */
    interface IMidiInput extends proto.MidiInput.$Properties {
    }

    /** Represents a MidiInput. */
    class MidiInput {

        /**
         * Constructs a new MidiInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MidiInput.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MidiInput deviceid. */
        deviceid: number;

        /** MidiInput midiNote. */
        midiNote?: (proto.MidiNoteInput.$Properties|null);

        /** MidiInput midiControlChange. */
        midiControlChange?: (proto.MidiControlChangeInput.$Properties|null);

        /** MidiInput midiPitchBend. */
        midiPitchBend?: (proto.MidiPitchBendInput.$Properties|null);

        /** MidiInput midiProGuitarButton. */
        midiProGuitarButton?: (proto.MidiProGuitarButtonInput.$Properties|null);

        /** MidiInput midiProGuitarAxis. */
        midiProGuitarAxis?: (proto.MidiProGuitarAxisInput.$Properties|null);

        /** MidiInput input. */
        input?: ("midiNote"|"midiControlChange"|"midiPitchBend"|"midiProGuitarButton"|"midiProGuitarAxis");

        /**
         * Creates a new MidiInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MidiInput instance
         */
        static create(properties: proto.MidiInput.$Shape): proto.MidiInput & proto.MidiInput.$Shape;
        static create(properties?: proto.MidiInput.$Properties): proto.MidiInput;

        /**
         * Encodes the specified MidiInput message. Does not implicitly {@link proto.MidiInput.verify|verify} messages.
         * @param message MidiInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MidiInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MidiInput message, length delimited. Does not implicitly {@link proto.MidiInput.verify|verify} messages.
         * @param message MidiInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MidiInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MidiInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MidiInput & proto.MidiInput.$Shape} MidiInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MidiInput & proto.MidiInput.$Shape;

        /**
         * Decodes a MidiInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MidiInput & proto.MidiInput.$Shape} MidiInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MidiInput & proto.MidiInput.$Shape;

        /**
         * Verifies a MidiInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MidiInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MidiInput
         */
        static fromObject(object: { [k: string]: any }): proto.MidiInput;

        /**
         * Creates a plain object from a MidiInput message. Also converts values to other types if specified.
         * @param message MidiInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MidiInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MidiInput to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MidiInput
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MidiInput {

        /** Properties of a MidiInput. */
        interface $Properties {

            /** MidiInput deviceid */
            deviceid: number;

            /** MidiInput midiNote */
            midiNote?: (proto.MidiNoteInput.$Properties|null);

            /** MidiInput midiControlChange */
            midiControlChange?: (proto.MidiControlChangeInput.$Properties|null);

            /** MidiInput midiPitchBend */
            midiPitchBend?: (proto.MidiPitchBendInput.$Properties|null);

            /** MidiInput midiProGuitarButton */
            midiProGuitarButton?: (proto.MidiProGuitarButtonInput.$Properties|null);

            /** MidiInput midiProGuitarAxis */
            midiProGuitarAxis?: (proto.MidiProGuitarAxisInput.$Properties|null);

            /** MidiInput input */
            input?: ("midiNote"|"midiControlChange"|"midiPitchBend"|"midiProGuitarButton"|"midiProGuitarAxis");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a MidiInput. */
        type $Shape = {
          deviceid: number;
          midiNote?: proto.MidiNoteInput.$Shape|null;
          midiControlChange?: proto.MidiControlChangeInput.$Shape|null;
          midiPitchBend?: proto.MidiPitchBendInput.$Shape|null;
          midiProGuitarButton?: proto.MidiProGuitarButtonInput.$Shape|null;
          midiProGuitarAxis?: proto.MidiProGuitarAxisInput.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ input?: undefined; midiNote?: null; midiControlChange?: null; midiPitchBend?: null; midiProGuitarButton?: null; midiProGuitarAxis?: null }|{ input?: "midiNote"; midiNote: proto.MidiNoteInput.$Shape; midiControlChange?: null; midiPitchBend?: null; midiProGuitarButton?: null; midiProGuitarAxis?: null }|{ input?: "midiControlChange"; midiNote?: null; midiControlChange: proto.MidiControlChangeInput.$Shape; midiPitchBend?: null; midiProGuitarButton?: null; midiProGuitarAxis?: null }|{ input?: "midiPitchBend"; midiNote?: null; midiControlChange?: null; midiPitchBend: proto.MidiPitchBendInput.$Shape; midiProGuitarButton?: null; midiProGuitarAxis?: null }|{ input?: "midiProGuitarButton"; midiNote?: null; midiControlChange?: null; midiPitchBend?: null; midiProGuitarButton: proto.MidiProGuitarButtonInput.$Shape; midiProGuitarAxis?: null }|{ input?: "midiProGuitarAxis"; midiNote?: null; midiControlChange?: null; midiPitchBend?: null; midiProGuitarButton?: null; midiProGuitarAxis: proto.MidiProGuitarAxisInput.$Shape })
        );
    }

    /**
     * Properties of an Input.
     * @deprecated Use proto.Input.$Properties instead.
     */
    interface IInput extends proto.Input.$Properties {
    }

    /** Represents an Input. */
    class Input {

        /**
         * Constructs a new Input.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Input.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Input gpio. */
        gpio?: (proto.GPIOInput.$Properties|null);

        /** Input fixed. */
        fixed?: (proto.FixedInput.$Properties|null);

        /** Input mpr121. */
        mpr121?: (proto.MPR121Input.$Properties|null);

        /** Input midi. */
        midi?: (proto.MidiInput.$Properties|null);

        /** Input mouseAxis. */
        mouseAxis?: (proto.MouseAxisInput.$Properties|null);

        /** Input mouseButton. */
        mouseButton?: (proto.MouseButtonInput.$Properties|null);

        /** Input wiiAxis. */
        wiiAxis?: (proto.WiiAxisInput.$Properties|null);

        /** Input wiiButton. */
        wiiButton?: (proto.WiiButtonInput.$Properties|null);

        /** Input key. */
        key?: (proto.KeyboardKeyInput.$Properties|null);

        /** Input crkd. */
        crkd?: (proto.CrkdNeckButtonInput.$Properties|null);

        /** Input shortcut. */
        shortcut?: (proto.ShortcutInput.$Properties|null);

        /** Input ads1115. */
        ads1115?: (proto.ADS1115Input.$Properties|null);

        /** Input accelerometer. */
        accelerometer?: (proto.AccelerometerInput.$Properties|null);

        /** Input gh5Neck. */
        gh5Neck?: (proto.Gh5NeckButtonInput.$Properties|null);

        /** Input ps2Axis. */
        ps2Axis?: (proto.PS2AxisInput.$Properties|null);

        /** Input ps2Button. */
        ps2Button?: (proto.PS2ButtonInput.$Properties|null);

        /** Input usbButton. */
        usbButton?: (proto.USBButtonInput.$Properties|null);

        /** Input usbAxis. */
        usbAxis?: (proto.USBAxisInput.$Properties|null);

        /** Input multiplexer. */
        multiplexer?: (proto.MultiplexerInput.$Properties|null);

        /** Input protarNeckAxis. */
        protarNeckAxis?: (proto.ProtarNeckAxisInput.$Properties|null);

        /** Input protarNeckButton. */
        protarNeckButton?: (proto.ProtarNeckButtonInput.$Properties|null);

        /** Input vtechExpander. */
        vtechExpander?: (proto.VTechGuitarIOExpanderInput.$Properties|null);

        /** Input held. */
        held?: (proto.HeldInput.$Properties|null);

        /** Input matrix. */
        matrix?: (proto.MatrixInput.$Properties|null);

        /** Input crkdDrum. */
        crkdDrum?: (proto.CrkdDrumAxisInput.$Properties|null);

        /** Input cycle. */
        cycle?: (proto.CycleInput.$Properties|null);

        /** Input toggle. */
        toggle?: (proto.ToggleInput.$Properties|null);

        /** Input input. */
        input?: ("gpio"|"fixed"|"mpr121"|"midi"|"mouseAxis"|"mouseButton"|"wiiAxis"|"wiiButton"|"key"|"crkd"|"shortcut"|"ads1115"|"accelerometer"|"gh5Neck"|"ps2Axis"|"ps2Button"|"usbButton"|"usbAxis"|"multiplexer"|"protarNeckAxis"|"protarNeckButton"|"vtechExpander"|"held"|"matrix"|"crkdDrum"|"cycle"|"toggle");

        /**
         * Creates a new Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Input instance
         */
        static create(properties: proto.Input.$Shape): proto.Input & proto.Input.$Shape;
        static create(properties?: proto.Input.$Properties): proto.Input;

        /**
         * Encodes the specified Input message. Does not implicitly {@link proto.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.Input.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link proto.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.Input.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.Input & proto.Input.$Shape} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Input & proto.Input.$Shape;

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.Input & proto.Input.$Shape} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Input & proto.Input.$Shape;

        /**
         * Verifies an Input message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Input
         */
        static fromObject(object: { [k: string]: any }): proto.Input;

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @param message Input
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Input to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Input
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Input {

        /** Properties of an Input. */
        interface $Properties {

            /** Input gpio */
            gpio?: (proto.GPIOInput.$Properties|null);

            /** Input fixed */
            fixed?: (proto.FixedInput.$Properties|null);

            /** Input mpr121 */
            mpr121?: (proto.MPR121Input.$Properties|null);

            /** Input midi */
            midi?: (proto.MidiInput.$Properties|null);

            /** Input mouseAxis */
            mouseAxis?: (proto.MouseAxisInput.$Properties|null);

            /** Input mouseButton */
            mouseButton?: (proto.MouseButtonInput.$Properties|null);

            /** Input wiiAxis */
            wiiAxis?: (proto.WiiAxisInput.$Properties|null);

            /** Input wiiButton */
            wiiButton?: (proto.WiiButtonInput.$Properties|null);

            /** Input key */
            key?: (proto.KeyboardKeyInput.$Properties|null);

            /** Input crkd */
            crkd?: (proto.CrkdNeckButtonInput.$Properties|null);

            /** Input shortcut */
            shortcut?: (proto.ShortcutInput.$Properties|null);

            /** Input ads1115 */
            ads1115?: (proto.ADS1115Input.$Properties|null);

            /** Input accelerometer */
            accelerometer?: (proto.AccelerometerInput.$Properties|null);

            /** Input gh5Neck */
            gh5Neck?: (proto.Gh5NeckButtonInput.$Properties|null);

            /** Input ps2Axis */
            ps2Axis?: (proto.PS2AxisInput.$Properties|null);

            /** Input ps2Button */
            ps2Button?: (proto.PS2ButtonInput.$Properties|null);

            /** Input usbButton */
            usbButton?: (proto.USBButtonInput.$Properties|null);

            /** Input usbAxis */
            usbAxis?: (proto.USBAxisInput.$Properties|null);

            /** Input multiplexer */
            multiplexer?: (proto.MultiplexerInput.$Properties|null);

            /** Input protarNeckAxis */
            protarNeckAxis?: (proto.ProtarNeckAxisInput.$Properties|null);

            /** Input protarNeckButton */
            protarNeckButton?: (proto.ProtarNeckButtonInput.$Properties|null);

            /** Input vtechExpander */
            vtechExpander?: (proto.VTechGuitarIOExpanderInput.$Properties|null);

            /** Input held */
            held?: (proto.HeldInput.$Properties|null);

            /** Input matrix */
            matrix?: (proto.MatrixInput.$Properties|null);

            /** Input crkdDrum */
            crkdDrum?: (proto.CrkdDrumAxisInput.$Properties|null);

            /** Input cycle */
            cycle?: (proto.CycleInput.$Properties|null);

            /** Input toggle */
            toggle?: (proto.ToggleInput.$Properties|null);

            /** Input input */
            input?: ("gpio"|"fixed"|"mpr121"|"midi"|"mouseAxis"|"mouseButton"|"wiiAxis"|"wiiButton"|"key"|"crkd"|"shortcut"|"ads1115"|"accelerometer"|"gh5Neck"|"ps2Axis"|"ps2Button"|"usbButton"|"usbAxis"|"multiplexer"|"protarNeckAxis"|"protarNeckButton"|"vtechExpander"|"held"|"matrix"|"crkdDrum"|"cycle"|"toggle");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of an Input. */
        type $Shape = {
          gpio?: proto.GPIOInput.$Shape|null;
          fixed?: proto.FixedInput.$Shape|null;
          mpr121?: proto.MPR121Input.$Shape|null;
          midi?: proto.MidiInput.$Shape|null;
          mouseAxis?: proto.MouseAxisInput.$Shape|null;
          mouseButton?: proto.MouseButtonInput.$Shape|null;
          wiiAxis?: proto.WiiAxisInput.$Shape|null;
          wiiButton?: proto.WiiButtonInput.$Shape|null;
          key?: proto.KeyboardKeyInput.$Shape|null;
          crkd?: proto.CrkdNeckButtonInput.$Shape|null;
          shortcut?: proto.ShortcutInput.$Shape|null;
          ads1115?: proto.ADS1115Input.$Shape|null;
          accelerometer?: proto.AccelerometerInput.$Shape|null;
          gh5Neck?: proto.Gh5NeckButtonInput.$Shape|null;
          ps2Axis?: proto.PS2AxisInput.$Shape|null;
          ps2Button?: proto.PS2ButtonInput.$Shape|null;
          usbButton?: proto.USBButtonInput.$Shape|null;
          usbAxis?: proto.USBAxisInput.$Shape|null;
          multiplexer?: proto.MultiplexerInput.$Shape|null;
          protarNeckAxis?: proto.ProtarNeckAxisInput.$Shape|null;
          protarNeckButton?: proto.ProtarNeckButtonInput.$Shape|null;
          vtechExpander?: proto.VTechGuitarIOExpanderInput.$Shape|null;
          held?: proto.HeldInput.$Shape|null;
          matrix?: proto.MatrixInput.$Shape|null;
          crkdDrum?: proto.CrkdDrumAxisInput.$Shape|null;
          cycle?: proto.CycleInput.$Shape|null;
          toggle?: proto.ToggleInput.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ input?: undefined; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "gpio"; gpio: proto.GPIOInput.$Shape; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "fixed"; gpio?: null; fixed: proto.FixedInput.$Shape; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "mpr121"; gpio?: null; fixed?: null; mpr121: proto.MPR121Input.$Shape; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "midi"; gpio?: null; fixed?: null; mpr121?: null; midi: proto.MidiInput.$Shape; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "mouseAxis"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis: proto.MouseAxisInput.$Shape; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "mouseButton"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton: proto.MouseButtonInput.$Shape; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "wiiAxis"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis: proto.WiiAxisInput.$Shape; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "wiiButton"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton: proto.WiiButtonInput.$Shape; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "key"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key: proto.KeyboardKeyInput.$Shape; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "crkd"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd: proto.CrkdNeckButtonInput.$Shape; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "shortcut"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut: proto.ShortcutInput.$Shape; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "ads1115"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115: proto.ADS1115Input.$Shape; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "accelerometer"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer: proto.AccelerometerInput.$Shape; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "gh5Neck"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck: proto.Gh5NeckButtonInput.$Shape; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "ps2Axis"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis: proto.PS2AxisInput.$Shape; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "ps2Button"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button: proto.PS2ButtonInput.$Shape; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "usbButton"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton: proto.USBButtonInput.$Shape; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "usbAxis"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis: proto.USBAxisInput.$Shape; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "multiplexer"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer: proto.MultiplexerInput.$Shape; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "protarNeckAxis"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis: proto.ProtarNeckAxisInput.$Shape; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "protarNeckButton"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton: proto.ProtarNeckButtonInput.$Shape; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "vtechExpander"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander: proto.VTechGuitarIOExpanderInput.$Shape; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "held"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held: proto.HeldInput.$Shape; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "matrix"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix: proto.MatrixInput.$Shape; crkdDrum?: null; cycle?: null; toggle?: null }|{ input?: "crkdDrum"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum: proto.CrkdDrumAxisInput.$Shape; cycle?: null; toggle?: null }|{ input?: "cycle"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle: proto.CycleInput.$Shape; toggle?: null }|{ input?: "toggle"; gpio?: null; fixed?: null; mpr121?: null; midi?: null; mouseAxis?: null; mouseButton?: null; wiiAxis?: null; wiiButton?: null; key?: null; crkd?: null; shortcut?: null; ads1115?: null; accelerometer?: null; gh5Neck?: null; ps2Axis?: null; ps2Button?: null; usbButton?: null; usbAxis?: null; multiplexer?: null; protarNeckAxis?: null; protarNeckButton?: null; vtechExpander?: null; held?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle: proto.ToggleInput.$Shape })
        );
    }

    /**
     * Properties of an InputActivationTrigger.
     * @deprecated Use proto.InputActivationTrigger.$Properties instead.
     */
    interface IInputActivationTrigger extends proto.InputActivationTrigger.$Properties {
    }

    /** Represents an InputActivationTrigger. */
    class InputActivationTrigger {

        /**
         * Constructs a new InputActivationTrigger.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.InputActivationTrigger.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** InputActivationTrigger input. */
        input: proto.Input.$Properties;

        /** InputActivationTrigger inverted. */
        inverted: boolean;

        /** InputActivationTrigger trigger. */
        trigger: proto.AnalogToDigitalTriggerType;

        /** InputActivationTrigger triggerValue. */
        triggerValue: number;

        /** InputActivationTrigger maxTriggerValue. */
        maxTriggerValue: number;

        /**
         * Creates a new InputActivationTrigger instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InputActivationTrigger instance
         */
        static create(properties: proto.InputActivationTrigger.$Shape): proto.InputActivationTrigger & proto.InputActivationTrigger.$Shape;
        static create(properties?: proto.InputActivationTrigger.$Properties): proto.InputActivationTrigger;

        /**
         * Encodes the specified InputActivationTrigger message. Does not implicitly {@link proto.InputActivationTrigger.verify|verify} messages.
         * @param message InputActivationTrigger message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.InputActivationTrigger.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InputActivationTrigger message, length delimited. Does not implicitly {@link proto.InputActivationTrigger.verify|verify} messages.
         * @param message InputActivationTrigger message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.InputActivationTrigger.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InputActivationTrigger message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.InputActivationTrigger & proto.InputActivationTrigger.$Shape} InputActivationTrigger
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.InputActivationTrigger & proto.InputActivationTrigger.$Shape;

        /**
         * Decodes an InputActivationTrigger message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.InputActivationTrigger & proto.InputActivationTrigger.$Shape} InputActivationTrigger
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.InputActivationTrigger & proto.InputActivationTrigger.$Shape;

        /**
         * Verifies an InputActivationTrigger message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InputActivationTrigger message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InputActivationTrigger
         */
        static fromObject(object: { [k: string]: any }): proto.InputActivationTrigger;

        /**
         * Creates a plain object from an InputActivationTrigger message. Also converts values to other types if specified.
         * @param message InputActivationTrigger
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.InputActivationTrigger, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InputActivationTrigger to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for InputActivationTrigger
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace InputActivationTrigger {

        /** Properties of an InputActivationTrigger. */
        interface $Properties {

            /** InputActivationTrigger input */
            input: proto.Input.$Properties;

            /** InputActivationTrigger inverted */
            inverted?: (boolean|null);

            /** InputActivationTrigger trigger */
            trigger?: (proto.AnalogToDigitalTriggerType|null);

            /** InputActivationTrigger triggerValue */
            triggerValue?: (number|null);

            /** InputActivationTrigger maxTriggerValue */
            maxTriggerValue?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an InputActivationTrigger. */
        type $Shape = {
          input: proto.Input.$Shape;
          inverted?: boolean|null;
          trigger?: proto.AnalogToDigitalTriggerType|null;
          triggerValue?: number|null;
          maxTriggerValue?: number|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of an Output.
     * @deprecated Use proto.Output.$Properties instead.
     */
    interface IOutput extends proto.Output.$Properties {
    }

    /** Represents an Output. */
    class Output {

        /**
         * Constructs a new Output.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Output.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Output gamepadButton. */
        gamepadButton?: (proto.GamepadButtonType|null);

        /** Output gamepadAxis. */
        gamepadAxis?: (proto.GamepadAxisType|null);

        /** Output ghButton. */
        ghButton?: (proto.GuitarHeroGuitarButtonType|null);

        /** Output ghAxis. */
        ghAxis?: (proto.GuitarHeroGuitarAxisType|null);

        /** Output rbButton. */
        rbButton?: (proto.RockBandGuitarButtonType|null);

        /** Output rbAxis. */
        rbAxis?: (proto.RockBandGuitarAxisType|null);

        /** Output ghDrumAxis. */
        ghDrumAxis?: (proto.GuitarHeroDrumsAxisType|null);

        /** Output rbDrumButton. */
        rbDrumButton?: (proto.RockBandDrumsButtonType|null);

        /** Output rbDrumAxis. */
        rbDrumAxis?: (proto.RockBandDrumsAxisType|null);

        /** Output ghlButton. */
        ghlButton?: (proto.GuitarHeroLiveGuitarButtonType|null);

        /** Output ghlAxis. */
        ghlAxis?: (proto.GuitarHeroLiveGuitarAxisType|null);

        /** Output proButton. */
        proButton?: (proto.ProGuitarButtonType|null);

        /** Output proAxis. */
        proAxis?: (proto.ProGuitarAxisType|null);

        /** Output djhButton. */
        djhButton?: (proto.DJHTurntableButtonType|null);

        /** Output djhAxis. */
        djhAxis?: (proto.DJHTurntableAxisType|null);

        /** Output djMaxButton. */
        djMaxButton?: (proto.DJMaxTurntableButtonType|null);

        /** Output djMaxAxis. */
        djMaxAxis?: (proto.DJMaxTurntableAxisType|null);

        /** Output divaAxis. */
        divaAxis?: (proto.ProjectDivaAxisType|null);

        /** Output gfButton. */
        gfButton?: (proto.GuitarFreaksButtonType|null);

        /** Output ghaAxis. */
        ghaAxis?: (proto.GuitarHeroArcadeAxisType|null);

        /** Output ghaButton. */
        ghaButton?: (proto.GuitarHeroArcadeButtonType|null);

        /** Output mouseAxis. */
        mouseAxis?: (proto.MouseAxisType|null);

        /** Output mouseButton. */
        mouseButton?: (proto.MouseButtonType|null);

        /** Output keycode. */
        keycode?: (number|null);

        /** Output proKeySingle. */
        proKeySingle?: (number|null);

        /** Output proKeyMultiple. */
        proKeyMultiple?: (number|null);

        /** Output proKeyboardAxis. */
        proKeyboardAxis?: (proto.ProKeyboardAxisType|null);

        /** Output proKeyboardButton. */
        proKeyboardButton?: (proto.ProKeyboardButtonType|null);

        /** Output mapping. */
        mapping?: ("gamepadButton"|"gamepadAxis"|"ghButton"|"ghAxis"|"rbButton"|"rbAxis"|"ghDrumAxis"|"rbDrumButton"|"rbDrumAxis"|"ghlButton"|"ghlAxis"|"proButton"|"proAxis"|"djhButton"|"djhAxis"|"djMaxButton"|"djMaxAxis"|"divaAxis"|"gfButton"|"ghaAxis"|"ghaButton"|"mouseAxis"|"mouseButton"|"keycode"|"proKeySingle"|"proKeyMultiple"|"proKeyboardAxis"|"proKeyboardButton");

        /**
         * Creates a new Output instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Output instance
         */
        static create(properties: proto.Output.$Shape): proto.Output & proto.Output.$Shape;
        static create(properties?: proto.Output.$Properties): proto.Output;

        /**
         * Encodes the specified Output message. Does not implicitly {@link proto.Output.verify|verify} messages.
         * @param message Output message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.Output.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Output message, length delimited. Does not implicitly {@link proto.Output.verify|verify} messages.
         * @param message Output message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.Output.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.Output & proto.Output.$Shape} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Output & proto.Output.$Shape;

        /**
         * Decodes an Output message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.Output & proto.Output.$Shape} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Output & proto.Output.$Shape;

        /**
         * Verifies an Output message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Output
         */
        static fromObject(object: { [k: string]: any }): proto.Output;

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @param message Output
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Output to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Output
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Output {

        /** Properties of an Output. */
        interface $Properties {

            /** Output gamepadButton */
            gamepadButton?: (proto.GamepadButtonType|null);

            /** Output gamepadAxis */
            gamepadAxis?: (proto.GamepadAxisType|null);

            /** Output ghButton */
            ghButton?: (proto.GuitarHeroGuitarButtonType|null);

            /** Output ghAxis */
            ghAxis?: (proto.GuitarHeroGuitarAxisType|null);

            /** Output rbButton */
            rbButton?: (proto.RockBandGuitarButtonType|null);

            /** Output rbAxis */
            rbAxis?: (proto.RockBandGuitarAxisType|null);

            /** Output ghDrumAxis */
            ghDrumAxis?: (proto.GuitarHeroDrumsAxisType|null);

            /** Output rbDrumButton */
            rbDrumButton?: (proto.RockBandDrumsButtonType|null);

            /** Output rbDrumAxis */
            rbDrumAxis?: (proto.RockBandDrumsAxisType|null);

            /** Output ghlButton */
            ghlButton?: (proto.GuitarHeroLiveGuitarButtonType|null);

            /** Output ghlAxis */
            ghlAxis?: (proto.GuitarHeroLiveGuitarAxisType|null);

            /** Output proButton */
            proButton?: (proto.ProGuitarButtonType|null);

            /** Output proAxis */
            proAxis?: (proto.ProGuitarAxisType|null);

            /** Output djhButton */
            djhButton?: (proto.DJHTurntableButtonType|null);

            /** Output djhAxis */
            djhAxis?: (proto.DJHTurntableAxisType|null);

            /** Output djMaxButton */
            djMaxButton?: (proto.DJMaxTurntableButtonType|null);

            /** Output djMaxAxis */
            djMaxAxis?: (proto.DJMaxTurntableAxisType|null);

            /** Output divaAxis */
            divaAxis?: (proto.ProjectDivaAxisType|null);

            /** Output gfButton */
            gfButton?: (proto.GuitarFreaksButtonType|null);

            /** Output ghaAxis */
            ghaAxis?: (proto.GuitarHeroArcadeAxisType|null);

            /** Output ghaButton */
            ghaButton?: (proto.GuitarHeroArcadeButtonType|null);

            /** Output mouseAxis */
            mouseAxis?: (proto.MouseAxisType|null);

            /** Output mouseButton */
            mouseButton?: (proto.MouseButtonType|null);

            /** Output keycode */
            keycode?: (number|null);

            /** Output proKeySingle */
            proKeySingle?: (number|null);

            /** Output proKeyMultiple */
            proKeyMultiple?: (number|null);

            /** Output proKeyboardAxis */
            proKeyboardAxis?: (proto.ProKeyboardAxisType|null);

            /** Output proKeyboardButton */
            proKeyboardButton?: (proto.ProKeyboardButtonType|null);

            /** Output mapping */
            mapping?: ("gamepadButton"|"gamepadAxis"|"ghButton"|"ghAxis"|"rbButton"|"rbAxis"|"ghDrumAxis"|"rbDrumButton"|"rbDrumAxis"|"ghlButton"|"ghlAxis"|"proButton"|"proAxis"|"djhButton"|"djhAxis"|"djMaxButton"|"djMaxAxis"|"divaAxis"|"gfButton"|"ghaAxis"|"ghaButton"|"mouseAxis"|"mouseButton"|"keycode"|"proKeySingle"|"proKeyMultiple"|"proKeyboardAxis"|"proKeyboardButton");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of an Output. */
        type $Shape = {
          gamepadButton?: proto.GamepadButtonType|null;
          gamepadAxis?: proto.GamepadAxisType|null;
          ghButton?: proto.GuitarHeroGuitarButtonType|null;
          ghAxis?: proto.GuitarHeroGuitarAxisType|null;
          rbButton?: proto.RockBandGuitarButtonType|null;
          rbAxis?: proto.RockBandGuitarAxisType|null;
          ghDrumAxis?: proto.GuitarHeroDrumsAxisType|null;
          rbDrumButton?: proto.RockBandDrumsButtonType|null;
          rbDrumAxis?: proto.RockBandDrumsAxisType|null;
          ghlButton?: proto.GuitarHeroLiveGuitarButtonType|null;
          ghlAxis?: proto.GuitarHeroLiveGuitarAxisType|null;
          proButton?: proto.ProGuitarButtonType|null;
          proAxis?: proto.ProGuitarAxisType|null;
          djhButton?: proto.DJHTurntableButtonType|null;
          djhAxis?: proto.DJHTurntableAxisType|null;
          djMaxButton?: proto.DJMaxTurntableButtonType|null;
          djMaxAxis?: proto.DJMaxTurntableAxisType|null;
          divaAxis?: proto.ProjectDivaAxisType|null;
          gfButton?: proto.GuitarFreaksButtonType|null;
          ghaAxis?: proto.GuitarHeroArcadeAxisType|null;
          ghaButton?: proto.GuitarHeroArcadeButtonType|null;
          mouseAxis?: proto.MouseAxisType|null;
          mouseButton?: proto.MouseButtonType|null;
          keycode?: number|null;
          proKeySingle?: number|null;
          proKeyMultiple?: number|null;
          proKeyboardAxis?: proto.ProKeyboardAxisType|null;
          proKeyboardButton?: proto.ProKeyboardButtonType|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ mapping?: undefined; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "gamepadButton"; gamepadButton: proto.GamepadButtonType; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "gamepadAxis"; gamepadButton?: null; gamepadAxis: proto.GamepadAxisType; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "ghButton"; gamepadButton?: null; gamepadAxis?: null; ghButton: proto.GuitarHeroGuitarButtonType; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "ghAxis"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis: proto.GuitarHeroGuitarAxisType; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "rbButton"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton: proto.RockBandGuitarButtonType; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "rbAxis"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis: proto.RockBandGuitarAxisType; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "ghDrumAxis"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis: proto.GuitarHeroDrumsAxisType; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "rbDrumButton"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton: proto.RockBandDrumsButtonType; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "rbDrumAxis"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis: proto.RockBandDrumsAxisType; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "ghlButton"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton: proto.GuitarHeroLiveGuitarButtonType; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "ghlAxis"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis: proto.GuitarHeroLiveGuitarAxisType; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "proButton"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton: proto.ProGuitarButtonType; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "proAxis"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis: proto.ProGuitarAxisType; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "djhButton"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton: proto.DJHTurntableButtonType; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "djhAxis"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis: proto.DJHTurntableAxisType; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "djMaxButton"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton: proto.DJMaxTurntableButtonType; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "djMaxAxis"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis: proto.DJMaxTurntableAxisType; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "divaAxis"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis: proto.ProjectDivaAxisType; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "gfButton"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton: proto.GuitarFreaksButtonType; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "ghaAxis"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis: proto.GuitarHeroArcadeAxisType; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "ghaButton"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton: proto.GuitarHeroArcadeButtonType; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "mouseAxis"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis: proto.MouseAxisType; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "mouseButton"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton: proto.MouseButtonType; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "keycode"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode: number; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "proKeySingle"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle: number; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "proKeyMultiple"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple: number; proKeyboardAxis?: null; proKeyboardButton?: null }|{ mapping?: "proKeyboardAxis"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis: proto.ProKeyboardAxisType; proKeyboardButton?: null }|{ mapping?: "proKeyboardButton"; gamepadButton?: null; gamepadAxis?: null; ghButton?: null; ghAxis?: null; rbButton?: null; rbAxis?: null; ghDrumAxis?: null; rbDrumButton?: null; rbDrumAxis?: null; ghlButton?: null; ghlAxis?: null; proButton?: null; proAxis?: null; djhButton?: null; djhAxis?: null; djMaxButton?: null; djMaxAxis?: null; divaAxis?: null; gfButton?: null; ghaAxis?: null; ghaButton?: null; mouseAxis?: null; mouseButton?: null; keycode?: null; proKeySingle?: null; proKeyMultiple?: null; proKeyboardAxis?: null; proKeyboardButton: proto.ProKeyboardButtonType })
        );
    }

    /**
     * Properties of a Mapping.
     * @deprecated Use proto.Mapping.$Properties instead.
     */
    interface IMapping extends proto.Mapping.$Properties {
    }

    /** Represents a Mapping. */
    class Mapping {

        /**
         * Constructs a new Mapping.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Mapping.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Mapping mapping. */
        mapping: proto.Output.$Properties;

        /** Mapping input. */
        input: proto.Input.$Properties;

        /** Mapping inverted. */
        inverted: boolean;

        /** Mapping pressureInput. */
        pressureInput?: (proto.Input.$Properties|null);

        /** Mapping trigger. */
        trigger: proto.AnalogToDigitalTriggerType;

        /** Mapping pressed. */
        pressed: number;

        /** Mapping released. */
        released: number;

        /** Mapping min. */
        min: number;

        /** Mapping max. */
        max: number;

        /** Mapping center. */
        center: number;

        /** Mapping deadzone. */
        deadzone: number;

        /** Mapping triggerValue. */
        triggerValue: number;

        /** Mapping debounce. */
        debounce: number;

        /** Mapping maxTriggerValue. */
        maxTriggerValue: number;

        /** Mapping peakBased. */
        peakBased: boolean;

        /**
         * Creates a new Mapping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Mapping instance
         */
        static create(properties: proto.Mapping.$Shape): proto.Mapping & proto.Mapping.$Shape;
        static create(properties?: proto.Mapping.$Properties): proto.Mapping;

        /**
         * Encodes the specified Mapping message. Does not implicitly {@link proto.Mapping.verify|verify} messages.
         * @param message Mapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.Mapping.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Mapping message, length delimited. Does not implicitly {@link proto.Mapping.verify|verify} messages.
         * @param message Mapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.Mapping.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Mapping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.Mapping & proto.Mapping.$Shape} Mapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Mapping & proto.Mapping.$Shape;

        /**
         * Decodes a Mapping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.Mapping & proto.Mapping.$Shape} Mapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Mapping & proto.Mapping.$Shape;

        /**
         * Verifies a Mapping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Mapping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Mapping
         */
        static fromObject(object: { [k: string]: any }): proto.Mapping;

        /**
         * Creates a plain object from a Mapping message. Also converts values to other types if specified.
         * @param message Mapping
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.Mapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Mapping to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Mapping
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Mapping {

        /** Properties of a Mapping. */
        interface $Properties {

            /** Mapping mapping */
            mapping: proto.Output.$Properties;

            /** Mapping input */
            input: proto.Input.$Properties;

            /** Mapping inverted */
            inverted?: (boolean|null);

            /** Mapping pressureInput */
            pressureInput?: (proto.Input.$Properties|null);

            /** Mapping trigger */
            trigger?: (proto.AnalogToDigitalTriggerType|null);

            /** Mapping pressed */
            pressed?: (number|null);

            /** Mapping released */
            released?: (number|null);

            /** Mapping min */
            min?: (number|null);

            /** Mapping max */
            max?: (number|null);

            /** Mapping center */
            center?: (number|null);

            /** Mapping deadzone */
            deadzone?: (number|null);

            /** Mapping triggerValue */
            triggerValue?: (number|null);

            /** Mapping debounce */
            debounce?: (number|null);

            /** Mapping maxTriggerValue */
            maxTriggerValue?: (number|null);

            /** Mapping peakBased */
            peakBased?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Mapping. */
        type $Shape = {
          mapping: proto.Output.$Shape;
          input: proto.Input.$Shape;
          inverted?: boolean|null;
          pressureInput?: proto.Input.$Shape|null;
          trigger?: proto.AnalogToDigitalTriggerType|null;
          pressed?: number|null;
          released?: number|null;
          min?: number|null;
          max?: number|null;
          center?: number|null;
          deadzone?: number|null;
          triggerValue?: number|null;
          debounce?: number|null;
          maxTriggerValue?: number|null;
          peakBased?: boolean|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a UARTDevice.
     * @deprecated Use proto.UARTDevice.$Properties instead.
     */
    interface IUARTDevice extends proto.UARTDevice.$Properties {
    }

    /** Represents a UARTDevice. */
    class UARTDevice {

        /**
         * Constructs a new UARTDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.UARTDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UARTDevice block. */
        block: number;

        /** UARTDevice tx. */
        tx: number;

        /** UARTDevice rx. */
        rx: number;

        /** UARTDevice baudrate. */
        baudrate: number;

        /**
         * Creates a new UARTDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UARTDevice instance
         */
        static create(properties: proto.UARTDevice.$Shape): proto.UARTDevice & proto.UARTDevice.$Shape;
        static create(properties?: proto.UARTDevice.$Properties): proto.UARTDevice;

        /**
         * Encodes the specified UARTDevice message. Does not implicitly {@link proto.UARTDevice.verify|verify} messages.
         * @param message UARTDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.UARTDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UARTDevice message, length delimited. Does not implicitly {@link proto.UARTDevice.verify|verify} messages.
         * @param message UARTDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.UARTDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UARTDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.UARTDevice & proto.UARTDevice.$Shape} UARTDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UARTDevice & proto.UARTDevice.$Shape;

        /**
         * Decodes a UARTDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.UARTDevice & proto.UARTDevice.$Shape} UARTDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UARTDevice & proto.UARTDevice.$Shape;

        /**
         * Verifies a UARTDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UARTDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UARTDevice
         */
        static fromObject(object: { [k: string]: any }): proto.UARTDevice;

        /**
         * Creates a plain object from a UARTDevice message. Also converts values to other types if specified.
         * @param message UARTDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.UARTDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UARTDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UARTDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UARTDevice {

        /** Properties of a UARTDevice. */
        interface $Properties {

            /** UARTDevice block */
            block: number;

            /** UARTDevice tx */
            tx: number;

            /** UARTDevice rx */
            rx: number;

            /** UARTDevice baudrate */
            baudrate: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UARTDevice. */
        type $Shape = proto.UARTDevice.$Properties;
    }

    /**
     * Properties of a I2CDevice.
     * @deprecated Use proto.I2CDevice.$Properties instead.
     */
    interface II2CDevice extends proto.I2CDevice.$Properties {
    }

    /** Represents a I2CDevice. */
    class I2CDevice {

        /**
         * Constructs a new I2CDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.I2CDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** I2CDevice block. */
        block: number;

        /** I2CDevice sda. */
        sda: number;

        /** I2CDevice scl. */
        scl: number;

        /** I2CDevice clock. */
        clock: number;

        /**
         * Creates a new I2CDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns I2CDevice instance
         */
        static create(properties: proto.I2CDevice.$Shape): proto.I2CDevice & proto.I2CDevice.$Shape;
        static create(properties?: proto.I2CDevice.$Properties): proto.I2CDevice;

        /**
         * Encodes the specified I2CDevice message. Does not implicitly {@link proto.I2CDevice.verify|verify} messages.
         * @param message I2CDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.I2CDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified I2CDevice message, length delimited. Does not implicitly {@link proto.I2CDevice.verify|verify} messages.
         * @param message I2CDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.I2CDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a I2CDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.I2CDevice & proto.I2CDevice.$Shape} I2CDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.I2CDevice & proto.I2CDevice.$Shape;

        /**
         * Decodes a I2CDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.I2CDevice & proto.I2CDevice.$Shape} I2CDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.I2CDevice & proto.I2CDevice.$Shape;

        /**
         * Verifies a I2CDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a I2CDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns I2CDevice
         */
        static fromObject(object: { [k: string]: any }): proto.I2CDevice;

        /**
         * Creates a plain object from a I2CDevice message. Also converts values to other types if specified.
         * @param message I2CDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.I2CDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this I2CDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for I2CDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace I2CDevice {

        /** Properties of a I2CDevice. */
        interface $Properties {

            /** I2CDevice block */
            block: number;

            /** I2CDevice sda */
            sda: number;

            /** I2CDevice scl */
            scl: number;

            /** I2CDevice clock */
            clock: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a I2CDevice. */
        type $Shape = proto.I2CDevice.$Properties;
    }

    /**
     * Properties of a SPIDevice.
     * @deprecated Use proto.SPIDevice.$Properties instead.
     */
    interface ISPIDevice extends proto.SPIDevice.$Properties {
    }

    /** Represents a SPIDevice. */
    class SPIDevice {

        /**
         * Constructs a new SPIDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.SPIDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SPIDevice block. */
        block: number;

        /** SPIDevice mosi. */
        mosi: number;

        /** SPIDevice miso. */
        miso: number;

        /** SPIDevice sck. */
        sck: number;

        /** SPIDevice clock. */
        clock: number;

        /**
         * Creates a new SPIDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SPIDevice instance
         */
        static create(properties: proto.SPIDevice.$Shape): proto.SPIDevice & proto.SPIDevice.$Shape;
        static create(properties?: proto.SPIDevice.$Properties): proto.SPIDevice;

        /**
         * Encodes the specified SPIDevice message. Does not implicitly {@link proto.SPIDevice.verify|verify} messages.
         * @param message SPIDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.SPIDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SPIDevice message, length delimited. Does not implicitly {@link proto.SPIDevice.verify|verify} messages.
         * @param message SPIDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.SPIDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SPIDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.SPIDevice & proto.SPIDevice.$Shape} SPIDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SPIDevice & proto.SPIDevice.$Shape;

        /**
         * Decodes a SPIDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.SPIDevice & proto.SPIDevice.$Shape} SPIDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SPIDevice & proto.SPIDevice.$Shape;

        /**
         * Verifies a SPIDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SPIDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SPIDevice
         */
        static fromObject(object: { [k: string]: any }): proto.SPIDevice;

        /**
         * Creates a plain object from a SPIDevice message. Also converts values to other types if specified.
         * @param message SPIDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.SPIDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SPIDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SPIDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SPIDevice {

        /** Properties of a SPIDevice. */
        interface $Properties {

            /** SPIDevice block */
            block: number;

            /** SPIDevice mosi */
            mosi: number;

            /** SPIDevice miso */
            miso: number;

            /** SPIDevice sck */
            sck: number;

            /** SPIDevice clock */
            clock: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SPIDevice. */
        type $Shape = proto.SPIDevice.$Properties;
    }

    /**
     * Properties of a PeripheralDevice.
     * @deprecated Use proto.PeripheralDevice.$Properties instead.
     */
    interface IPeripheralDevice extends proto.PeripheralDevice.$Properties {
    }

    /** Represents a PeripheralDevice. */
    class PeripheralDevice {

        /**
         * Constructs a new PeripheralDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.PeripheralDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PeripheralDevice i2c. */
        i2c: proto.I2CDevice.$Properties;

        /** PeripheralDevice address. */
        address: number;

        /**
         * Creates a new PeripheralDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PeripheralDevice instance
         */
        static create(properties: proto.PeripheralDevice.$Shape): proto.PeripheralDevice & proto.PeripheralDevice.$Shape;
        static create(properties?: proto.PeripheralDevice.$Properties): proto.PeripheralDevice;

        /**
         * Encodes the specified PeripheralDevice message. Does not implicitly {@link proto.PeripheralDevice.verify|verify} messages.
         * @param message PeripheralDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.PeripheralDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PeripheralDevice message, length delimited. Does not implicitly {@link proto.PeripheralDevice.verify|verify} messages.
         * @param message PeripheralDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.PeripheralDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PeripheralDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.PeripheralDevice & proto.PeripheralDevice.$Shape} PeripheralDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PeripheralDevice & proto.PeripheralDevice.$Shape;

        /**
         * Decodes a PeripheralDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.PeripheralDevice & proto.PeripheralDevice.$Shape} PeripheralDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PeripheralDevice & proto.PeripheralDevice.$Shape;

        /**
         * Verifies a PeripheralDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PeripheralDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PeripheralDevice
         */
        static fromObject(object: { [k: string]: any }): proto.PeripheralDevice;

        /**
         * Creates a plain object from a PeripheralDevice message. Also converts values to other types if specified.
         * @param message PeripheralDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.PeripheralDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PeripheralDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PeripheralDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PeripheralDevice {

        /** Properties of a PeripheralDevice. */
        interface $Properties {

            /** PeripheralDevice i2c */
            i2c: proto.I2CDevice.$Properties;

            /** PeripheralDevice address */
            address: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PeripheralDevice. */
        type $Shape = proto.PeripheralDevice.$Properties;
    }

    /**
     * Properties of an AccelerometerDevice.
     * @deprecated Use proto.AccelerometerDevice.$Properties instead.
     */
    interface IAccelerometerDevice extends proto.AccelerometerDevice.$Properties {
    }

    /** Represents an AccelerometerDevice. */
    class AccelerometerDevice {

        /**
         * Constructs a new AccelerometerDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.AccelerometerDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AccelerometerDevice i2c. */
        i2c: proto.I2CDevice.$Properties;

        /**
         * Creates a new AccelerometerDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccelerometerDevice instance
         */
        static create(properties: proto.AccelerometerDevice.$Shape): proto.AccelerometerDevice & proto.AccelerometerDevice.$Shape;
        static create(properties?: proto.AccelerometerDevice.$Properties): proto.AccelerometerDevice;

        /**
         * Encodes the specified AccelerometerDevice message. Does not implicitly {@link proto.AccelerometerDevice.verify|verify} messages.
         * @param message AccelerometerDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.AccelerometerDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccelerometerDevice message, length delimited. Does not implicitly {@link proto.AccelerometerDevice.verify|verify} messages.
         * @param message AccelerometerDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.AccelerometerDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccelerometerDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.AccelerometerDevice & proto.AccelerometerDevice.$Shape} AccelerometerDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AccelerometerDevice & proto.AccelerometerDevice.$Shape;

        /**
         * Decodes an AccelerometerDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.AccelerometerDevice & proto.AccelerometerDevice.$Shape} AccelerometerDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AccelerometerDevice & proto.AccelerometerDevice.$Shape;

        /**
         * Verifies an AccelerometerDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccelerometerDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccelerometerDevice
         */
        static fromObject(object: { [k: string]: any }): proto.AccelerometerDevice;

        /**
         * Creates a plain object from an AccelerometerDevice message. Also converts values to other types if specified.
         * @param message AccelerometerDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.AccelerometerDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccelerometerDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AccelerometerDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AccelerometerDevice {

        /** Properties of an AccelerometerDevice. */
        interface $Properties {

            /** AccelerometerDevice i2c */
            i2c: proto.I2CDevice.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AccelerometerDevice. */
        type $Shape = proto.AccelerometerDevice.$Properties;
    }

    /**
     * Properties of a Max1704xDevice.
     * @deprecated Use proto.Max1704xDevice.$Properties instead.
     */
    interface IMax1704xDevice extends proto.Max1704xDevice.$Properties {
    }

    /** Represents a Max1704xDevice. */
    class Max1704xDevice {

        /**
         * Constructs a new Max1704xDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Max1704xDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Max1704xDevice i2c. */
        i2c: proto.I2CDevice.$Properties;

        /**
         * Creates a new Max1704xDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Max1704xDevice instance
         */
        static create(properties: proto.Max1704xDevice.$Shape): proto.Max1704xDevice & proto.Max1704xDevice.$Shape;
        static create(properties?: proto.Max1704xDevice.$Properties): proto.Max1704xDevice;

        /**
         * Encodes the specified Max1704xDevice message. Does not implicitly {@link proto.Max1704xDevice.verify|verify} messages.
         * @param message Max1704xDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.Max1704xDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Max1704xDevice message, length delimited. Does not implicitly {@link proto.Max1704xDevice.verify|verify} messages.
         * @param message Max1704xDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.Max1704xDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Max1704xDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.Max1704xDevice & proto.Max1704xDevice.$Shape} Max1704xDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Max1704xDevice & proto.Max1704xDevice.$Shape;

        /**
         * Decodes a Max1704xDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.Max1704xDevice & proto.Max1704xDevice.$Shape} Max1704xDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Max1704xDevice & proto.Max1704xDevice.$Shape;

        /**
         * Verifies a Max1704xDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Max1704xDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Max1704xDevice
         */
        static fromObject(object: { [k: string]: any }): proto.Max1704xDevice;

        /**
         * Creates a plain object from a Max1704xDevice message. Also converts values to other types if specified.
         * @param message Max1704xDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.Max1704xDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Max1704xDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Max1704xDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Max1704xDevice {

        /** Properties of a Max1704xDevice. */
        interface $Properties {

            /** Max1704xDevice i2c */
            i2c: proto.I2CDevice.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Max1704xDevice. */
        type $Shape = proto.Max1704xDevice.$Properties;
    }

    /**
     * Properties of a Mpr121Device.
     * @deprecated Use proto.Mpr121Device.$Properties instead.
     */
    interface IMpr121Device extends proto.Mpr121Device.$Properties {
    }

    /** Represents a Mpr121Device. */
    class Mpr121Device {

        /**
         * Constructs a new Mpr121Device.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Mpr121Device.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Mpr121Device i2c. */
        i2c: proto.I2CDevice.$Properties;

        /** Mpr121Device touchpadCount. */
        touchpadCount: number;

        /** Mpr121Device ddrPins. */
        ddrPins: number;

        /** Mpr121Device enablePins. */
        enablePins: number;

        /**
         * Creates a new Mpr121Device instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Mpr121Device instance
         */
        static create(properties: proto.Mpr121Device.$Shape): proto.Mpr121Device & proto.Mpr121Device.$Shape;
        static create(properties?: proto.Mpr121Device.$Properties): proto.Mpr121Device;

        /**
         * Encodes the specified Mpr121Device message. Does not implicitly {@link proto.Mpr121Device.verify|verify} messages.
         * @param message Mpr121Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.Mpr121Device.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Mpr121Device message, length delimited. Does not implicitly {@link proto.Mpr121Device.verify|verify} messages.
         * @param message Mpr121Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.Mpr121Device.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Mpr121Device message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.Mpr121Device & proto.Mpr121Device.$Shape} Mpr121Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Mpr121Device & proto.Mpr121Device.$Shape;

        /**
         * Decodes a Mpr121Device message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.Mpr121Device & proto.Mpr121Device.$Shape} Mpr121Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Mpr121Device & proto.Mpr121Device.$Shape;

        /**
         * Verifies a Mpr121Device message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Mpr121Device message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Mpr121Device
         */
        static fromObject(object: { [k: string]: any }): proto.Mpr121Device;

        /**
         * Creates a plain object from a Mpr121Device message. Also converts values to other types if specified.
         * @param message Mpr121Device
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.Mpr121Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Mpr121Device to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Mpr121Device
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Mpr121Device {

        /** Properties of a Mpr121Device. */
        interface $Properties {

            /** Mpr121Device i2c */
            i2c: proto.I2CDevice.$Properties;

            /** Mpr121Device touchpadCount */
            touchpadCount: number;

            /** Mpr121Device ddrPins */
            ddrPins: number;

            /** Mpr121Device enablePins */
            enablePins: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Mpr121Device. */
        type $Shape = proto.Mpr121Device.$Properties;
    }

    /**
     * Properties of a ADS1115Device.
     * @deprecated Use proto.ADS1115Device.$Properties instead.
     */
    interface IADS1115Device extends proto.ADS1115Device.$Properties {
    }

    /** Represents a ADS1115Device. */
    class ADS1115Device {

        /**
         * Constructs a new ADS1115Device.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ADS1115Device.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ADS1115Device i2c. */
        i2c: proto.I2CDevice.$Properties;

        /** ADS1115Device interrupt. */
        interrupt: number;

        /**
         * Creates a new ADS1115Device instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADS1115Device instance
         */
        static create(properties: proto.ADS1115Device.$Shape): proto.ADS1115Device & proto.ADS1115Device.$Shape;
        static create(properties?: proto.ADS1115Device.$Properties): proto.ADS1115Device;

        /**
         * Encodes the specified ADS1115Device message. Does not implicitly {@link proto.ADS1115Device.verify|verify} messages.
         * @param message ADS1115Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ADS1115Device.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADS1115Device message, length delimited. Does not implicitly {@link proto.ADS1115Device.verify|verify} messages.
         * @param message ADS1115Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ADS1115Device.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADS1115Device message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ADS1115Device & proto.ADS1115Device.$Shape} ADS1115Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ADS1115Device & proto.ADS1115Device.$Shape;

        /**
         * Decodes a ADS1115Device message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ADS1115Device & proto.ADS1115Device.$Shape} ADS1115Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ADS1115Device & proto.ADS1115Device.$Shape;

        /**
         * Verifies a ADS1115Device message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADS1115Device message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADS1115Device
         */
        static fromObject(object: { [k: string]: any }): proto.ADS1115Device;

        /**
         * Creates a plain object from a ADS1115Device message. Also converts values to other types if specified.
         * @param message ADS1115Device
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ADS1115Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADS1115Device to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ADS1115Device
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ADS1115Device {

        /** Properties of a ADS1115Device. */
        interface $Properties {

            /** ADS1115Device i2c */
            i2c: proto.I2CDevice.$Properties;

            /** ADS1115Device interrupt */
            interrupt: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ADS1115Device. */
        type $Shape = proto.ADS1115Device.$Properties;
    }

    /**
     * Properties of a WiiDevice.
     * @deprecated Use proto.WiiDevice.$Properties instead.
     */
    interface IWiiDevice extends proto.WiiDevice.$Properties {
    }

    /** Represents a WiiDevice. */
    class WiiDevice {

        /**
         * Constructs a new WiiDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.WiiDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WiiDevice i2c. */
        i2c: proto.I2CDevice.$Properties;

        /** WiiDevice mappingMode. */
        mappingMode: proto.MappingMode;

        /**
         * Creates a new WiiDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiiDevice instance
         */
        static create(properties: proto.WiiDevice.$Shape): proto.WiiDevice & proto.WiiDevice.$Shape;
        static create(properties?: proto.WiiDevice.$Properties): proto.WiiDevice;

        /**
         * Encodes the specified WiiDevice message. Does not implicitly {@link proto.WiiDevice.verify|verify} messages.
         * @param message WiiDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.WiiDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiiDevice message, length delimited. Does not implicitly {@link proto.WiiDevice.verify|verify} messages.
         * @param message WiiDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.WiiDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiiDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.WiiDevice & proto.WiiDevice.$Shape} WiiDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WiiDevice & proto.WiiDevice.$Shape;

        /**
         * Decodes a WiiDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.WiiDevice & proto.WiiDevice.$Shape} WiiDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WiiDevice & proto.WiiDevice.$Shape;

        /**
         * Verifies a WiiDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiiDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiiDevice
         */
        static fromObject(object: { [k: string]: any }): proto.WiiDevice;

        /**
         * Creates a plain object from a WiiDevice message. Also converts values to other types if specified.
         * @param message WiiDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.WiiDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiiDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WiiDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WiiDevice {

        /** Properties of a WiiDevice. */
        interface $Properties {

            /** WiiDevice i2c */
            i2c: proto.I2CDevice.$Properties;

            /** WiiDevice mappingMode */
            mappingMode: proto.MappingMode;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WiiDevice. */
        type $Shape = proto.WiiDevice.$Properties;
    }

    /**
     * Properties of a CrazyGuitarNeckDevice.
     * @deprecated Use proto.CrazyGuitarNeckDevice.$Properties instead.
     */
    interface ICrazyGuitarNeckDevice extends proto.CrazyGuitarNeckDevice.$Properties {
    }

    /** Represents a CrazyGuitarNeckDevice. */
    class CrazyGuitarNeckDevice {

        /**
         * Constructs a new CrazyGuitarNeckDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.CrazyGuitarNeckDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CrazyGuitarNeckDevice i2c. */
        i2c: proto.I2CDevice.$Properties;

        /**
         * Creates a new CrazyGuitarNeckDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CrazyGuitarNeckDevice instance
         */
        static create(properties: proto.CrazyGuitarNeckDevice.$Shape): proto.CrazyGuitarNeckDevice & proto.CrazyGuitarNeckDevice.$Shape;
        static create(properties?: proto.CrazyGuitarNeckDevice.$Properties): proto.CrazyGuitarNeckDevice;

        /**
         * Encodes the specified CrazyGuitarNeckDevice message. Does not implicitly {@link proto.CrazyGuitarNeckDevice.verify|verify} messages.
         * @param message CrazyGuitarNeckDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.CrazyGuitarNeckDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CrazyGuitarNeckDevice message, length delimited. Does not implicitly {@link proto.CrazyGuitarNeckDevice.verify|verify} messages.
         * @param message CrazyGuitarNeckDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.CrazyGuitarNeckDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CrazyGuitarNeckDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.CrazyGuitarNeckDevice & proto.CrazyGuitarNeckDevice.$Shape} CrazyGuitarNeckDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CrazyGuitarNeckDevice & proto.CrazyGuitarNeckDevice.$Shape;

        /**
         * Decodes a CrazyGuitarNeckDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.CrazyGuitarNeckDevice & proto.CrazyGuitarNeckDevice.$Shape} CrazyGuitarNeckDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CrazyGuitarNeckDevice & proto.CrazyGuitarNeckDevice.$Shape;

        /**
         * Verifies a CrazyGuitarNeckDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CrazyGuitarNeckDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrazyGuitarNeckDevice
         */
        static fromObject(object: { [k: string]: any }): proto.CrazyGuitarNeckDevice;

        /**
         * Creates a plain object from a CrazyGuitarNeckDevice message. Also converts values to other types if specified.
         * @param message CrazyGuitarNeckDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.CrazyGuitarNeckDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrazyGuitarNeckDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CrazyGuitarNeckDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CrazyGuitarNeckDevice {

        /** Properties of a CrazyGuitarNeckDevice. */
        interface $Properties {

            /** CrazyGuitarNeckDevice i2c */
            i2c: proto.I2CDevice.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CrazyGuitarNeckDevice. */
        type $Shape = proto.CrazyGuitarNeckDevice.$Properties;
    }

    /**
     * Properties of a GuitarHero5NeckDevice.
     * @deprecated Use proto.GuitarHero5NeckDevice.$Properties instead.
     */
    interface IGuitarHero5NeckDevice extends proto.GuitarHero5NeckDevice.$Properties {
    }

    /** Represents a GuitarHero5NeckDevice. */
    class GuitarHero5NeckDevice {

        /**
         * Constructs a new GuitarHero5NeckDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.GuitarHero5NeckDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GuitarHero5NeckDevice i2c. */
        i2c: proto.I2CDevice.$Properties;

        /**
         * Creates a new GuitarHero5NeckDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuitarHero5NeckDevice instance
         */
        static create(properties: proto.GuitarHero5NeckDevice.$Shape): proto.GuitarHero5NeckDevice & proto.GuitarHero5NeckDevice.$Shape;
        static create(properties?: proto.GuitarHero5NeckDevice.$Properties): proto.GuitarHero5NeckDevice;

        /**
         * Encodes the specified GuitarHero5NeckDevice message. Does not implicitly {@link proto.GuitarHero5NeckDevice.verify|verify} messages.
         * @param message GuitarHero5NeckDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.GuitarHero5NeckDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuitarHero5NeckDevice message, length delimited. Does not implicitly {@link proto.GuitarHero5NeckDevice.verify|verify} messages.
         * @param message GuitarHero5NeckDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.GuitarHero5NeckDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuitarHero5NeckDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.GuitarHero5NeckDevice & proto.GuitarHero5NeckDevice.$Shape} GuitarHero5NeckDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GuitarHero5NeckDevice & proto.GuitarHero5NeckDevice.$Shape;

        /**
         * Decodes a GuitarHero5NeckDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.GuitarHero5NeckDevice & proto.GuitarHero5NeckDevice.$Shape} GuitarHero5NeckDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GuitarHero5NeckDevice & proto.GuitarHero5NeckDevice.$Shape;

        /**
         * Verifies a GuitarHero5NeckDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuitarHero5NeckDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuitarHero5NeckDevice
         */
        static fromObject(object: { [k: string]: any }): proto.GuitarHero5NeckDevice;

        /**
         * Creates a plain object from a GuitarHero5NeckDevice message. Also converts values to other types if specified.
         * @param message GuitarHero5NeckDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.GuitarHero5NeckDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuitarHero5NeckDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GuitarHero5NeckDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GuitarHero5NeckDevice {

        /** Properties of a GuitarHero5NeckDevice. */
        interface $Properties {

            /** GuitarHero5NeckDevice i2c */
            i2c: proto.I2CDevice.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GuitarHero5NeckDevice. */
        type $Shape = proto.GuitarHero5NeckDevice.$Properties;
    }

    /**
     * Properties of a DJHeroTurntableDevice.
     * @deprecated Use proto.DJHeroTurntableDevice.$Properties instead.
     */
    interface IDJHeroTurntableDevice extends proto.DJHeroTurntableDevice.$Properties {
    }

    /** Represents a DJHeroTurntableDevice. */
    class DJHeroTurntableDevice {

        /**
         * Constructs a new DJHeroTurntableDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.DJHeroTurntableDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DJHeroTurntableDevice i2c. */
        i2c: proto.I2CDevice.$Properties;

        /** DJHeroTurntableDevice left. */
        left: boolean;

        /**
         * Creates a new DJHeroTurntableDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DJHeroTurntableDevice instance
         */
        static create(properties: proto.DJHeroTurntableDevice.$Shape): proto.DJHeroTurntableDevice & proto.DJHeroTurntableDevice.$Shape;
        static create(properties?: proto.DJHeroTurntableDevice.$Properties): proto.DJHeroTurntableDevice;

        /**
         * Encodes the specified DJHeroTurntableDevice message. Does not implicitly {@link proto.DJHeroTurntableDevice.verify|verify} messages.
         * @param message DJHeroTurntableDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.DJHeroTurntableDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DJHeroTurntableDevice message, length delimited. Does not implicitly {@link proto.DJHeroTurntableDevice.verify|verify} messages.
         * @param message DJHeroTurntableDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.DJHeroTurntableDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DJHeroTurntableDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.DJHeroTurntableDevice & proto.DJHeroTurntableDevice.$Shape} DJHeroTurntableDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DJHeroTurntableDevice & proto.DJHeroTurntableDevice.$Shape;

        /**
         * Decodes a DJHeroTurntableDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.DJHeroTurntableDevice & proto.DJHeroTurntableDevice.$Shape} DJHeroTurntableDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DJHeroTurntableDevice & proto.DJHeroTurntableDevice.$Shape;

        /**
         * Verifies a DJHeroTurntableDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DJHeroTurntableDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DJHeroTurntableDevice
         */
        static fromObject(object: { [k: string]: any }): proto.DJHeroTurntableDevice;

        /**
         * Creates a plain object from a DJHeroTurntableDevice message. Also converts values to other types if specified.
         * @param message DJHeroTurntableDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.DJHeroTurntableDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DJHeroTurntableDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DJHeroTurntableDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DJHeroTurntableDevice {

        /** Properties of a DJHeroTurntableDevice. */
        interface $Properties {

            /** DJHeroTurntableDevice i2c */
            i2c: proto.I2CDevice.$Properties;

            /** DJHeroTurntableDevice left */
            left: boolean;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DJHeroTurntableDevice. */
        type $Shape = proto.DJHeroTurntableDevice.$Properties;
    }

    /**
     * Properties of a BandHeroDrumDevice.
     * @deprecated Use proto.BandHeroDrumDevice.$Properties instead.
     */
    interface IBandHeroDrumDevice extends proto.BandHeroDrumDevice.$Properties {
    }

    /** Represents a BandHeroDrumDevice. */
    class BandHeroDrumDevice {

        /**
         * Constructs a new BandHeroDrumDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.BandHeroDrumDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BandHeroDrumDevice i2c. */
        i2c: proto.I2CDevice.$Properties;

        /**
         * Creates a new BandHeroDrumDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BandHeroDrumDevice instance
         */
        static create(properties: proto.BandHeroDrumDevice.$Shape): proto.BandHeroDrumDevice & proto.BandHeroDrumDevice.$Shape;
        static create(properties?: proto.BandHeroDrumDevice.$Properties): proto.BandHeroDrumDevice;

        /**
         * Encodes the specified BandHeroDrumDevice message. Does not implicitly {@link proto.BandHeroDrumDevice.verify|verify} messages.
         * @param message BandHeroDrumDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.BandHeroDrumDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BandHeroDrumDevice message, length delimited. Does not implicitly {@link proto.BandHeroDrumDevice.verify|verify} messages.
         * @param message BandHeroDrumDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.BandHeroDrumDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BandHeroDrumDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.BandHeroDrumDevice & proto.BandHeroDrumDevice.$Shape} BandHeroDrumDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.BandHeroDrumDevice & proto.BandHeroDrumDevice.$Shape;

        /**
         * Decodes a BandHeroDrumDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.BandHeroDrumDevice & proto.BandHeroDrumDevice.$Shape} BandHeroDrumDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.BandHeroDrumDevice & proto.BandHeroDrumDevice.$Shape;

        /**
         * Verifies a BandHeroDrumDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BandHeroDrumDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BandHeroDrumDevice
         */
        static fromObject(object: { [k: string]: any }): proto.BandHeroDrumDevice;

        /**
         * Creates a plain object from a BandHeroDrumDevice message. Also converts values to other types if specified.
         * @param message BandHeroDrumDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.BandHeroDrumDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BandHeroDrumDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BandHeroDrumDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BandHeroDrumDevice {

        /** Properties of a BandHeroDrumDevice. */
        interface $Properties {

            /** BandHeroDrumDevice i2c */
            i2c: proto.I2CDevice.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BandHeroDrumDevice. */
        type $Shape = proto.BandHeroDrumDevice.$Properties;
    }

    /**
     * Properties of a SerialMidiDevice.
     * @deprecated Use proto.SerialMidiDevice.$Properties instead.
     */
    interface ISerialMidiDevice extends proto.SerialMidiDevice.$Properties {
    }

    /** Represents a SerialMidiDevice. */
    class SerialMidiDevice {

        /**
         * Constructs a new SerialMidiDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.SerialMidiDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SerialMidiDevice uart. */
        uart: proto.UARTDevice.$Properties;

        /**
         * Creates a new SerialMidiDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SerialMidiDevice instance
         */
        static create(properties: proto.SerialMidiDevice.$Shape): proto.SerialMidiDevice & proto.SerialMidiDevice.$Shape;
        static create(properties?: proto.SerialMidiDevice.$Properties): proto.SerialMidiDevice;

        /**
         * Encodes the specified SerialMidiDevice message. Does not implicitly {@link proto.SerialMidiDevice.verify|verify} messages.
         * @param message SerialMidiDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.SerialMidiDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SerialMidiDevice message, length delimited. Does not implicitly {@link proto.SerialMidiDevice.verify|verify} messages.
         * @param message SerialMidiDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.SerialMidiDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SerialMidiDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.SerialMidiDevice & proto.SerialMidiDevice.$Shape} SerialMidiDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SerialMidiDevice & proto.SerialMidiDevice.$Shape;

        /**
         * Decodes a SerialMidiDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.SerialMidiDevice & proto.SerialMidiDevice.$Shape} SerialMidiDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SerialMidiDevice & proto.SerialMidiDevice.$Shape;

        /**
         * Verifies a SerialMidiDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SerialMidiDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SerialMidiDevice
         */
        static fromObject(object: { [k: string]: any }): proto.SerialMidiDevice;

        /**
         * Creates a plain object from a SerialMidiDevice message. Also converts values to other types if specified.
         * @param message SerialMidiDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.SerialMidiDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SerialMidiDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SerialMidiDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SerialMidiDevice {

        /** Properties of a SerialMidiDevice. */
        interface $Properties {

            /** SerialMidiDevice uart */
            uart: proto.UARTDevice.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SerialMidiDevice. */
        type $Shape = proto.SerialMidiDevice.$Properties;
    }

    /**
     * Properties of a CrkdNeckDevice.
     * @deprecated Use proto.CrkdNeckDevice.$Properties instead.
     */
    interface ICrkdNeckDevice extends proto.CrkdNeckDevice.$Properties {
    }

    /** Represents a CrkdNeckDevice. */
    class CrkdNeckDevice {

        /**
         * Constructs a new CrkdNeckDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.CrkdNeckDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CrkdNeckDevice uart. */
        uart: proto.UARTDevice.$Properties;

        /**
         * Creates a new CrkdNeckDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CrkdNeckDevice instance
         */
        static create(properties: proto.CrkdNeckDevice.$Shape): proto.CrkdNeckDevice & proto.CrkdNeckDevice.$Shape;
        static create(properties?: proto.CrkdNeckDevice.$Properties): proto.CrkdNeckDevice;

        /**
         * Encodes the specified CrkdNeckDevice message. Does not implicitly {@link proto.CrkdNeckDevice.verify|verify} messages.
         * @param message CrkdNeckDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.CrkdNeckDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CrkdNeckDevice message, length delimited. Does not implicitly {@link proto.CrkdNeckDevice.verify|verify} messages.
         * @param message CrkdNeckDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.CrkdNeckDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CrkdNeckDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.CrkdNeckDevice & proto.CrkdNeckDevice.$Shape} CrkdNeckDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CrkdNeckDevice & proto.CrkdNeckDevice.$Shape;

        /**
         * Decodes a CrkdNeckDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.CrkdNeckDevice & proto.CrkdNeckDevice.$Shape} CrkdNeckDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CrkdNeckDevice & proto.CrkdNeckDevice.$Shape;

        /**
         * Verifies a CrkdNeckDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CrkdNeckDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrkdNeckDevice
         */
        static fromObject(object: { [k: string]: any }): proto.CrkdNeckDevice;

        /**
         * Creates a plain object from a CrkdNeckDevice message. Also converts values to other types if specified.
         * @param message CrkdNeckDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.CrkdNeckDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrkdNeckDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CrkdNeckDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CrkdNeckDevice {

        /** Properties of a CrkdNeckDevice. */
        interface $Properties {

            /** CrkdNeckDevice uart */
            uart: proto.UARTDevice.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CrkdNeckDevice. */
        type $Shape = proto.CrkdNeckDevice.$Properties;
    }

    /**
     * Properties of a CrkdDrumDevice.
     * @deprecated Use proto.CrkdDrumDevice.$Properties instead.
     */
    interface ICrkdDrumDevice extends proto.CrkdDrumDevice.$Properties {
    }

    /** Represents a CrkdDrumDevice. */
    class CrkdDrumDevice {

        /**
         * Constructs a new CrkdDrumDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.CrkdDrumDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CrkdDrumDevice uart. */
        uart: proto.UARTDevice.$Properties;

        /**
         * Creates a new CrkdDrumDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CrkdDrumDevice instance
         */
        static create(properties: proto.CrkdDrumDevice.$Shape): proto.CrkdDrumDevice & proto.CrkdDrumDevice.$Shape;
        static create(properties?: proto.CrkdDrumDevice.$Properties): proto.CrkdDrumDevice;

        /**
         * Encodes the specified CrkdDrumDevice message. Does not implicitly {@link proto.CrkdDrumDevice.verify|verify} messages.
         * @param message CrkdDrumDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.CrkdDrumDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CrkdDrumDevice message, length delimited. Does not implicitly {@link proto.CrkdDrumDevice.verify|verify} messages.
         * @param message CrkdDrumDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.CrkdDrumDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CrkdDrumDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.CrkdDrumDevice & proto.CrkdDrumDevice.$Shape} CrkdDrumDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CrkdDrumDevice & proto.CrkdDrumDevice.$Shape;

        /**
         * Decodes a CrkdDrumDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.CrkdDrumDevice & proto.CrkdDrumDevice.$Shape} CrkdDrumDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CrkdDrumDevice & proto.CrkdDrumDevice.$Shape;

        /**
         * Verifies a CrkdDrumDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CrkdDrumDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrkdDrumDevice
         */
        static fromObject(object: { [k: string]: any }): proto.CrkdDrumDevice;

        /**
         * Creates a plain object from a CrkdDrumDevice message. Also converts values to other types if specified.
         * @param message CrkdDrumDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.CrkdDrumDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrkdDrumDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CrkdDrumDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CrkdDrumDevice {

        /** Properties of a CrkdDrumDevice. */
        interface $Properties {

            /** CrkdDrumDevice uart */
            uart: proto.UARTDevice.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CrkdDrumDevice. */
        type $Shape = proto.CrkdDrumDevice.$Properties;
    }

    /**
     * Properties of a DebugDevice.
     * @deprecated Use proto.DebugDevice.$Properties instead.
     */
    interface IDebugDevice extends proto.DebugDevice.$Properties {
    }

    /** Represents a DebugDevice. */
    class DebugDevice {

        /**
         * Constructs a new DebugDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.DebugDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DebugDevice uart. */
        uart: proto.UARTDevice.$Properties;

        /**
         * Creates a new DebugDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugDevice instance
         */
        static create(properties: proto.DebugDevice.$Shape): proto.DebugDevice & proto.DebugDevice.$Shape;
        static create(properties?: proto.DebugDevice.$Properties): proto.DebugDevice;

        /**
         * Encodes the specified DebugDevice message. Does not implicitly {@link proto.DebugDevice.verify|verify} messages.
         * @param message DebugDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.DebugDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugDevice message, length delimited. Does not implicitly {@link proto.DebugDevice.verify|verify} messages.
         * @param message DebugDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.DebugDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.DebugDevice & proto.DebugDevice.$Shape} DebugDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DebugDevice & proto.DebugDevice.$Shape;

        /**
         * Decodes a DebugDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.DebugDevice & proto.DebugDevice.$Shape} DebugDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DebugDevice & proto.DebugDevice.$Shape;

        /**
         * Verifies a DebugDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugDevice
         */
        static fromObject(object: { [k: string]: any }): proto.DebugDevice;

        /**
         * Creates a plain object from a DebugDevice message. Also converts values to other types if specified.
         * @param message DebugDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.DebugDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DebugDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DebugDevice {

        /** Properties of a DebugDevice. */
        interface $Properties {

            /** DebugDevice uart */
            uart: proto.UARTDevice.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DebugDevice. */
        type $Shape = proto.DebugDevice.$Properties;
    }

    /**
     * Properties of a UsbHostDevice.
     * @deprecated Use proto.UsbHostDevice.$Properties instead.
     */
    interface IUsbHostDevice extends proto.UsbHostDevice.$Properties {
    }

    /** Represents a UsbHostDevice. */
    class UsbHostDevice {

        /**
         * Constructs a new UsbHostDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.UsbHostDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UsbHostDevice firstPin. */
        firstPin: number;

        /** UsbHostDevice enable5v. */
        enable5v: boolean;

        /** UsbHostDevice dmFirst. */
        dmFirst: boolean;

        /** UsbHostDevice mappingMode. */
        mappingMode: proto.MappingMode;

        /**
         * Creates a new UsbHostDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UsbHostDevice instance
         */
        static create(properties: proto.UsbHostDevice.$Shape): proto.UsbHostDevice & proto.UsbHostDevice.$Shape;
        static create(properties?: proto.UsbHostDevice.$Properties): proto.UsbHostDevice;

        /**
         * Encodes the specified UsbHostDevice message. Does not implicitly {@link proto.UsbHostDevice.verify|verify} messages.
         * @param message UsbHostDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.UsbHostDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UsbHostDevice message, length delimited. Does not implicitly {@link proto.UsbHostDevice.verify|verify} messages.
         * @param message UsbHostDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.UsbHostDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UsbHostDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.UsbHostDevice & proto.UsbHostDevice.$Shape} UsbHostDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UsbHostDevice & proto.UsbHostDevice.$Shape;

        /**
         * Decodes a UsbHostDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.UsbHostDevice & proto.UsbHostDevice.$Shape} UsbHostDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UsbHostDevice & proto.UsbHostDevice.$Shape;

        /**
         * Verifies a UsbHostDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UsbHostDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UsbHostDevice
         */
        static fromObject(object: { [k: string]: any }): proto.UsbHostDevice;

        /**
         * Creates a plain object from a UsbHostDevice message. Also converts values to other types if specified.
         * @param message UsbHostDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.UsbHostDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UsbHostDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UsbHostDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UsbHostDevice {

        /** Properties of a UsbHostDevice. */
        interface $Properties {

            /** UsbHostDevice firstPin */
            firstPin: number;

            /** UsbHostDevice enable5v */
            enable5v: boolean;

            /** UsbHostDevice dmFirst */
            dmFirst: boolean;

            /** UsbHostDevice mappingMode */
            mappingMode: proto.MappingMode;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UsbHostDevice. */
        type $Shape = proto.UsbHostDevice.$Properties;
    }

    /**
     * Properties of a BluetoothDevice.
     * @deprecated Use proto.BluetoothDevice.$Properties instead.
     */
    interface IBluetoothDevice extends proto.BluetoothDevice.$Properties {
    }

    /** Represents a BluetoothDevice. */
    class BluetoothDevice {

        /**
         * Constructs a new BluetoothDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.BluetoothDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new BluetoothDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BluetoothDevice instance
         */
        static create(properties: proto.BluetoothDevice.$Shape): proto.BluetoothDevice & proto.BluetoothDevice.$Shape;
        static create(properties?: proto.BluetoothDevice.$Properties): proto.BluetoothDevice;

        /**
         * Encodes the specified BluetoothDevice message. Does not implicitly {@link proto.BluetoothDevice.verify|verify} messages.
         * @param message BluetoothDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.BluetoothDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BluetoothDevice message, length delimited. Does not implicitly {@link proto.BluetoothDevice.verify|verify} messages.
         * @param message BluetoothDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.BluetoothDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BluetoothDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.BluetoothDevice & proto.BluetoothDevice.$Shape} BluetoothDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.BluetoothDevice & proto.BluetoothDevice.$Shape;

        /**
         * Decodes a BluetoothDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.BluetoothDevice & proto.BluetoothDevice.$Shape} BluetoothDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.BluetoothDevice & proto.BluetoothDevice.$Shape;

        /**
         * Verifies a BluetoothDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BluetoothDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BluetoothDevice
         */
        static fromObject(object: { [k: string]: any }): proto.BluetoothDevice;

        /**
         * Creates a plain object from a BluetoothDevice message. Also converts values to other types if specified.
         * @param message BluetoothDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.BluetoothDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BluetoothDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BluetoothDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BluetoothDevice {

        /** Properties of a BluetoothDevice. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BluetoothDevice. */
        type $Shape = proto.BluetoothDevice.$Properties;
    }

    /**
     * Properties of a MultiplexerDevice.
     * @deprecated Use proto.MultiplexerDevice.$Properties instead.
     */
    interface IMultiplexerDevice extends proto.MultiplexerDevice.$Properties {
    }

    /** Represents a MultiplexerDevice. */
    class MultiplexerDevice {

        /**
         * Constructs a new MultiplexerDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MultiplexerDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MultiplexerDevice inputPin. */
        inputPin: number;

        /** MultiplexerDevice sixteenChannel. */
        sixteenChannel: boolean;

        /** MultiplexerDevice s0Pin. */
        s0Pin: number;

        /** MultiplexerDevice s1Pin. */
        s1Pin: number;

        /** MultiplexerDevice s2Pin. */
        s2Pin: number;

        /** MultiplexerDevice s3Pin. */
        s3Pin: number;

        /**
         * Creates a new MultiplexerDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MultiplexerDevice instance
         */
        static create(properties: proto.MultiplexerDevice.$Shape): proto.MultiplexerDevice & proto.MultiplexerDevice.$Shape;
        static create(properties?: proto.MultiplexerDevice.$Properties): proto.MultiplexerDevice;

        /**
         * Encodes the specified MultiplexerDevice message. Does not implicitly {@link proto.MultiplexerDevice.verify|verify} messages.
         * @param message MultiplexerDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MultiplexerDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MultiplexerDevice message, length delimited. Does not implicitly {@link proto.MultiplexerDevice.verify|verify} messages.
         * @param message MultiplexerDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MultiplexerDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MultiplexerDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MultiplexerDevice & proto.MultiplexerDevice.$Shape} MultiplexerDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MultiplexerDevice & proto.MultiplexerDevice.$Shape;

        /**
         * Decodes a MultiplexerDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MultiplexerDevice & proto.MultiplexerDevice.$Shape} MultiplexerDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MultiplexerDevice & proto.MultiplexerDevice.$Shape;

        /**
         * Verifies a MultiplexerDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MultiplexerDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MultiplexerDevice
         */
        static fromObject(object: { [k: string]: any }): proto.MultiplexerDevice;

        /**
         * Creates a plain object from a MultiplexerDevice message. Also converts values to other types if specified.
         * @param message MultiplexerDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MultiplexerDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MultiplexerDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MultiplexerDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MultiplexerDevice {

        /** Properties of a MultiplexerDevice. */
        interface $Properties {

            /** MultiplexerDevice inputPin */
            inputPin: number;

            /** MultiplexerDevice sixteenChannel */
            sixteenChannel: boolean;

            /** MultiplexerDevice s0Pin */
            s0Pin: number;

            /** MultiplexerDevice s1Pin */
            s1Pin: number;

            /** MultiplexerDevice s2Pin */
            s2Pin: number;

            /** MultiplexerDevice s3Pin */
            s3Pin: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MultiplexerDevice. */
        type $Shape = proto.MultiplexerDevice.$Properties;
    }

    /**
     * Properties of a WorldTourDrumDevice.
     * @deprecated Use proto.WorldTourDrumDevice.$Properties instead.
     */
    interface IWorldTourDrumDevice extends proto.WorldTourDrumDevice.$Properties {
    }

    /** Represents a WorldTourDrumDevice. */
    class WorldTourDrumDevice {

        /**
         * Constructs a new WorldTourDrumDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.WorldTourDrumDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WorldTourDrumDevice spi. */
        spi: proto.SPIDevice.$Properties;

        /** WorldTourDrumDevice csPin. */
        csPin: number;

        /**
         * Creates a new WorldTourDrumDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorldTourDrumDevice instance
         */
        static create(properties: proto.WorldTourDrumDevice.$Shape): proto.WorldTourDrumDevice & proto.WorldTourDrumDevice.$Shape;
        static create(properties?: proto.WorldTourDrumDevice.$Properties): proto.WorldTourDrumDevice;

        /**
         * Encodes the specified WorldTourDrumDevice message. Does not implicitly {@link proto.WorldTourDrumDevice.verify|verify} messages.
         * @param message WorldTourDrumDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.WorldTourDrumDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorldTourDrumDevice message, length delimited. Does not implicitly {@link proto.WorldTourDrumDevice.verify|verify} messages.
         * @param message WorldTourDrumDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.WorldTourDrumDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorldTourDrumDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.WorldTourDrumDevice & proto.WorldTourDrumDevice.$Shape} WorldTourDrumDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WorldTourDrumDevice & proto.WorldTourDrumDevice.$Shape;

        /**
         * Decodes a WorldTourDrumDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.WorldTourDrumDevice & proto.WorldTourDrumDevice.$Shape} WorldTourDrumDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WorldTourDrumDevice & proto.WorldTourDrumDevice.$Shape;

        /**
         * Verifies a WorldTourDrumDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorldTourDrumDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorldTourDrumDevice
         */
        static fromObject(object: { [k: string]: any }): proto.WorldTourDrumDevice;

        /**
         * Creates a plain object from a WorldTourDrumDevice message. Also converts values to other types if specified.
         * @param message WorldTourDrumDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.WorldTourDrumDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorldTourDrumDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WorldTourDrumDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WorldTourDrumDevice {

        /** Properties of a WorldTourDrumDevice. */
        interface $Properties {

            /** WorldTourDrumDevice spi */
            spi: proto.SPIDevice.$Properties;

            /** WorldTourDrumDevice csPin */
            csPin: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WorldTourDrumDevice. */
        type $Shape = proto.WorldTourDrumDevice.$Properties;
    }

    /**
     * Properties of a PSXDevice.
     * @deprecated Use proto.PSXDevice.$Properties instead.
     */
    interface IPSXDevice extends proto.PSXDevice.$Properties {
    }

    /** Represents a PSXDevice. */
    class PSXDevice {

        /**
         * Constructs a new PSXDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.PSXDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PSXDevice spi. */
        spi: proto.SPIDevice.$Properties;

        /** PSXDevice attPin. */
        attPin: number;

        /** PSXDevice ackPin. */
        ackPin: number;

        /** PSXDevice mappingMode. */
        mappingMode: proto.MappingMode;

        /**
         * Creates a new PSXDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PSXDevice instance
         */
        static create(properties: proto.PSXDevice.$Shape): proto.PSXDevice & proto.PSXDevice.$Shape;
        static create(properties?: proto.PSXDevice.$Properties): proto.PSXDevice;

        /**
         * Encodes the specified PSXDevice message. Does not implicitly {@link proto.PSXDevice.verify|verify} messages.
         * @param message PSXDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.PSXDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PSXDevice message, length delimited. Does not implicitly {@link proto.PSXDevice.verify|verify} messages.
         * @param message PSXDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.PSXDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PSXDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.PSXDevice & proto.PSXDevice.$Shape} PSXDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PSXDevice & proto.PSXDevice.$Shape;

        /**
         * Decodes a PSXDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.PSXDevice & proto.PSXDevice.$Shape} PSXDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PSXDevice & proto.PSXDevice.$Shape;

        /**
         * Verifies a PSXDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PSXDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PSXDevice
         */
        static fromObject(object: { [k: string]: any }): proto.PSXDevice;

        /**
         * Creates a plain object from a PSXDevice message. Also converts values to other types if specified.
         * @param message PSXDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.PSXDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PSXDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PSXDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PSXDevice {

        /** Properties of a PSXDevice. */
        interface $Properties {

            /** PSXDevice spi */
            spi: proto.SPIDevice.$Properties;

            /** PSXDevice attPin */
            attPin: number;

            /** PSXDevice ackPin */
            ackPin: number;

            /** PSXDevice mappingMode */
            mappingMode: proto.MappingMode;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PSXDevice. */
        type $Shape = proto.PSXDevice.$Properties;
    }

    /**
     * Properties of a ProtarNeckDevice.
     * @deprecated Use proto.ProtarNeckDevice.$Properties instead.
     */
    interface IProtarNeckDevice extends proto.ProtarNeckDevice.$Properties {
    }

    /** Represents a ProtarNeckDevice. */
    class ProtarNeckDevice {

        /**
         * Constructs a new ProtarNeckDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ProtarNeckDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ProtarNeckDevice spi. */
        spi: proto.SPIDevice.$Properties;

        /** ProtarNeckDevice attPin. */
        attPin: number;

        /**
         * Creates a new ProtarNeckDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtarNeckDevice instance
         */
        static create(properties: proto.ProtarNeckDevice.$Shape): proto.ProtarNeckDevice & proto.ProtarNeckDevice.$Shape;
        static create(properties?: proto.ProtarNeckDevice.$Properties): proto.ProtarNeckDevice;

        /**
         * Encodes the specified ProtarNeckDevice message. Does not implicitly {@link proto.ProtarNeckDevice.verify|verify} messages.
         * @param message ProtarNeckDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ProtarNeckDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtarNeckDevice message, length delimited. Does not implicitly {@link proto.ProtarNeckDevice.verify|verify} messages.
         * @param message ProtarNeckDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ProtarNeckDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtarNeckDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ProtarNeckDevice & proto.ProtarNeckDevice.$Shape} ProtarNeckDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ProtarNeckDevice & proto.ProtarNeckDevice.$Shape;

        /**
         * Decodes a ProtarNeckDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ProtarNeckDevice & proto.ProtarNeckDevice.$Shape} ProtarNeckDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ProtarNeckDevice & proto.ProtarNeckDevice.$Shape;

        /**
         * Verifies a ProtarNeckDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtarNeckDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtarNeckDevice
         */
        static fromObject(object: { [k: string]: any }): proto.ProtarNeckDevice;

        /**
         * Creates a plain object from a ProtarNeckDevice message. Also converts values to other types if specified.
         * @param message ProtarNeckDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ProtarNeckDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtarNeckDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ProtarNeckDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ProtarNeckDevice {

        /** Properties of a ProtarNeckDevice. */
        interface $Properties {

            /** ProtarNeckDevice spi */
            spi: proto.SPIDevice.$Properties;

            /** ProtarNeckDevice attPin */
            attPin: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ProtarNeckDevice. */
        type $Shape = proto.ProtarNeckDevice.$Properties;
    }

    /**
     * Properties of a SNESDevice.
     * @deprecated Use proto.SNESDevice.$Properties instead.
     */
    interface ISNESDevice extends proto.SNESDevice.$Properties {
    }

    /** Represents a SNESDevice. */
    class SNESDevice {

        /**
         * Constructs a new SNESDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.SNESDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SNESDevice clockPin. */
        clockPin: number;

        /** SNESDevice latchPin. */
        latchPin: number;

        /** SNESDevice dataPin. */
        dataPin: number;

        /** SNESDevice mappingMode. */
        mappingMode: proto.MappingMode;

        /**
         * Creates a new SNESDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SNESDevice instance
         */
        static create(properties: proto.SNESDevice.$Shape): proto.SNESDevice & proto.SNESDevice.$Shape;
        static create(properties?: proto.SNESDevice.$Properties): proto.SNESDevice;

        /**
         * Encodes the specified SNESDevice message. Does not implicitly {@link proto.SNESDevice.verify|verify} messages.
         * @param message SNESDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.SNESDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SNESDevice message, length delimited. Does not implicitly {@link proto.SNESDevice.verify|verify} messages.
         * @param message SNESDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.SNESDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SNESDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.SNESDevice & proto.SNESDevice.$Shape} SNESDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SNESDevice & proto.SNESDevice.$Shape;

        /**
         * Decodes a SNESDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.SNESDevice & proto.SNESDevice.$Shape} SNESDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SNESDevice & proto.SNESDevice.$Shape;

        /**
         * Verifies a SNESDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SNESDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SNESDevice
         */
        static fromObject(object: { [k: string]: any }): proto.SNESDevice;

        /**
         * Creates a plain object from a SNESDevice message. Also converts values to other types if specified.
         * @param message SNESDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.SNESDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SNESDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SNESDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SNESDevice {

        /** Properties of a SNESDevice. */
        interface $Properties {

            /** SNESDevice clockPin */
            clockPin: number;

            /** SNESDevice latchPin */
            latchPin: number;

            /** SNESDevice dataPin */
            dataPin: number;

            /** SNESDevice mappingMode */
            mappingMode: proto.MappingMode;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SNESDevice. */
        type $Shape = proto.SNESDevice.$Properties;
    }

    /**
     * Properties of a JoybusDevice.
     * @deprecated Use proto.JoybusDevice.$Properties instead.
     */
    interface IJoybusDevice extends proto.JoybusDevice.$Properties {
    }

    /** Represents a JoybusDevice. */
    class JoybusDevice {

        /**
         * Constructs a new JoybusDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.JoybusDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** JoybusDevice dataPin. */
        dataPin: number;

        /** JoybusDevice mappingMode. */
        mappingMode: proto.MappingMode;

        /**
         * Creates a new JoybusDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoybusDevice instance
         */
        static create(properties: proto.JoybusDevice.$Shape): proto.JoybusDevice & proto.JoybusDevice.$Shape;
        static create(properties?: proto.JoybusDevice.$Properties): proto.JoybusDevice;

        /**
         * Encodes the specified JoybusDevice message. Does not implicitly {@link proto.JoybusDevice.verify|verify} messages.
         * @param message JoybusDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.JoybusDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoybusDevice message, length delimited. Does not implicitly {@link proto.JoybusDevice.verify|verify} messages.
         * @param message JoybusDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.JoybusDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoybusDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.JoybusDevice & proto.JoybusDevice.$Shape} JoybusDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.JoybusDevice & proto.JoybusDevice.$Shape;

        /**
         * Decodes a JoybusDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.JoybusDevice & proto.JoybusDevice.$Shape} JoybusDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.JoybusDevice & proto.JoybusDevice.$Shape;

        /**
         * Verifies a JoybusDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoybusDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoybusDevice
         */
        static fromObject(object: { [k: string]: any }): proto.JoybusDevice;

        /**
         * Creates a plain object from a JoybusDevice message. Also converts values to other types if specified.
         * @param message JoybusDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.JoybusDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoybusDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for JoybusDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace JoybusDevice {

        /** Properties of a JoybusDevice. */
        interface $Properties {

            /** JoybusDevice dataPin */
            dataPin: number;

            /** JoybusDevice mappingMode */
            mappingMode: proto.MappingMode;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a JoybusDevice. */
        type $Shape = proto.JoybusDevice.$Properties;
    }

    /**
     * Properties of a WiiEmulationDevice.
     * @deprecated Use proto.WiiEmulationDevice.$Properties instead.
     */
    interface IWiiEmulationDevice extends proto.WiiEmulationDevice.$Properties {
    }

    /** Represents a WiiEmulationDevice. */
    class WiiEmulationDevice {

        /**
         * Constructs a new WiiEmulationDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.WiiEmulationDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WiiEmulationDevice i2c. */
        i2c: proto.I2CDevice.$Properties;

        /**
         * Creates a new WiiEmulationDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiiEmulationDevice instance
         */
        static create(properties: proto.WiiEmulationDevice.$Shape): proto.WiiEmulationDevice & proto.WiiEmulationDevice.$Shape;
        static create(properties?: proto.WiiEmulationDevice.$Properties): proto.WiiEmulationDevice;

        /**
         * Encodes the specified WiiEmulationDevice message. Does not implicitly {@link proto.WiiEmulationDevice.verify|verify} messages.
         * @param message WiiEmulationDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.WiiEmulationDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiiEmulationDevice message, length delimited. Does not implicitly {@link proto.WiiEmulationDevice.verify|verify} messages.
         * @param message WiiEmulationDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.WiiEmulationDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiiEmulationDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.WiiEmulationDevice & proto.WiiEmulationDevice.$Shape} WiiEmulationDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WiiEmulationDevice & proto.WiiEmulationDevice.$Shape;

        /**
         * Decodes a WiiEmulationDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.WiiEmulationDevice & proto.WiiEmulationDevice.$Shape} WiiEmulationDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WiiEmulationDevice & proto.WiiEmulationDevice.$Shape;

        /**
         * Verifies a WiiEmulationDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiiEmulationDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiiEmulationDevice
         */
        static fromObject(object: { [k: string]: any }): proto.WiiEmulationDevice;

        /**
         * Creates a plain object from a WiiEmulationDevice message. Also converts values to other types if specified.
         * @param message WiiEmulationDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.WiiEmulationDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiiEmulationDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WiiEmulationDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WiiEmulationDevice {

        /** Properties of a WiiEmulationDevice. */
        interface $Properties {

            /** WiiEmulationDevice i2c */
            i2c: proto.I2CDevice.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WiiEmulationDevice. */
        type $Shape = proto.WiiEmulationDevice.$Properties;
    }

    /**
     * Properties of a PSXEmulationDevice.
     * @deprecated Use proto.PSXEmulationDevice.$Properties instead.
     */
    interface IPSXEmulationDevice extends proto.PSXEmulationDevice.$Properties {
    }

    /** Represents a PSXEmulationDevice. */
    class PSXEmulationDevice {

        /**
         * Constructs a new PSXEmulationDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.PSXEmulationDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PSXEmulationDevice dataPin. */
        dataPin: number;

        /** PSXEmulationDevice commandPin. */
        commandPin: number;

        /** PSXEmulationDevice attentionPin. */
        attentionPin: number;

        /** PSXEmulationDevice clockPin. */
        clockPin: number;

        /** PSXEmulationDevice acknowledgePin. */
        acknowledgePin: number;

        /**
         * Creates a new PSXEmulationDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PSXEmulationDevice instance
         */
        static create(properties: proto.PSXEmulationDevice.$Shape): proto.PSXEmulationDevice & proto.PSXEmulationDevice.$Shape;
        static create(properties?: proto.PSXEmulationDevice.$Properties): proto.PSXEmulationDevice;

        /**
         * Encodes the specified PSXEmulationDevice message. Does not implicitly {@link proto.PSXEmulationDevice.verify|verify} messages.
         * @param message PSXEmulationDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.PSXEmulationDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PSXEmulationDevice message, length delimited. Does not implicitly {@link proto.PSXEmulationDevice.verify|verify} messages.
         * @param message PSXEmulationDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.PSXEmulationDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PSXEmulationDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.PSXEmulationDevice & proto.PSXEmulationDevice.$Shape} PSXEmulationDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PSXEmulationDevice & proto.PSXEmulationDevice.$Shape;

        /**
         * Decodes a PSXEmulationDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.PSXEmulationDevice & proto.PSXEmulationDevice.$Shape} PSXEmulationDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PSXEmulationDevice & proto.PSXEmulationDevice.$Shape;

        /**
         * Verifies a PSXEmulationDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PSXEmulationDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PSXEmulationDevice
         */
        static fromObject(object: { [k: string]: any }): proto.PSXEmulationDevice;

        /**
         * Creates a plain object from a PSXEmulationDevice message. Also converts values to other types if specified.
         * @param message PSXEmulationDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.PSXEmulationDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PSXEmulationDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PSXEmulationDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PSXEmulationDevice {

        /** Properties of a PSXEmulationDevice. */
        interface $Properties {

            /** PSXEmulationDevice dataPin */
            dataPin: number;

            /** PSXEmulationDevice commandPin */
            commandPin: number;

            /** PSXEmulationDevice attentionPin */
            attentionPin: number;

            /** PSXEmulationDevice clockPin */
            clockPin: number;

            /** PSXEmulationDevice acknowledgePin */
            acknowledgePin: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PSXEmulationDevice. */
        type $Shape = proto.PSXEmulationDevice.$Properties;
    }

    /**
     * Properties of a JoybusEmulationDevice.
     * @deprecated Use proto.JoybusEmulationDevice.$Properties instead.
     */
    interface IJoybusEmulationDevice extends proto.JoybusEmulationDevice.$Properties {
    }

    /** Represents a JoybusEmulationDevice. */
    class JoybusEmulationDevice {

        /**
         * Constructs a new JoybusEmulationDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.JoybusEmulationDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** JoybusEmulationDevice dataPin. */
        dataPin: number;

        /**
         * Creates a new JoybusEmulationDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoybusEmulationDevice instance
         */
        static create(properties: proto.JoybusEmulationDevice.$Shape): proto.JoybusEmulationDevice & proto.JoybusEmulationDevice.$Shape;
        static create(properties?: proto.JoybusEmulationDevice.$Properties): proto.JoybusEmulationDevice;

        /**
         * Encodes the specified JoybusEmulationDevice message. Does not implicitly {@link proto.JoybusEmulationDevice.verify|verify} messages.
         * @param message JoybusEmulationDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.JoybusEmulationDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoybusEmulationDevice message, length delimited. Does not implicitly {@link proto.JoybusEmulationDevice.verify|verify} messages.
         * @param message JoybusEmulationDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.JoybusEmulationDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoybusEmulationDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.JoybusEmulationDevice & proto.JoybusEmulationDevice.$Shape} JoybusEmulationDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.JoybusEmulationDevice & proto.JoybusEmulationDevice.$Shape;

        /**
         * Decodes a JoybusEmulationDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.JoybusEmulationDevice & proto.JoybusEmulationDevice.$Shape} JoybusEmulationDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.JoybusEmulationDevice & proto.JoybusEmulationDevice.$Shape;

        /**
         * Verifies a JoybusEmulationDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoybusEmulationDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoybusEmulationDevice
         */
        static fromObject(object: { [k: string]: any }): proto.JoybusEmulationDevice;

        /**
         * Creates a plain object from a JoybusEmulationDevice message. Also converts values to other types if specified.
         * @param message JoybusEmulationDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.JoybusEmulationDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoybusEmulationDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for JoybusEmulationDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace JoybusEmulationDevice {

        /** Properties of a JoybusEmulationDevice. */
        interface $Properties {

            /** JoybusEmulationDevice dataPin */
            dataPin: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a JoybusEmulationDevice. */
        type $Shape = proto.JoybusEmulationDevice.$Properties;
    }

    /**
     * Properties of an EncoderDevice.
     * @deprecated Use proto.EncoderDevice.$Properties instead.
     */
    interface IEncoderDevice extends proto.EncoderDevice.$Properties {
    }

    /** Represents an EncoderDevice. */
    class EncoderDevice {

        /**
         * Constructs a new EncoderDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.EncoderDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** EncoderDevice dataPin. */
        dataPin: number;

        /**
         * Creates a new EncoderDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncoderDevice instance
         */
        static create(properties: proto.EncoderDevice.$Shape): proto.EncoderDevice & proto.EncoderDevice.$Shape;
        static create(properties?: proto.EncoderDevice.$Properties): proto.EncoderDevice;

        /**
         * Encodes the specified EncoderDevice message. Does not implicitly {@link proto.EncoderDevice.verify|verify} messages.
         * @param message EncoderDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.EncoderDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncoderDevice message, length delimited. Does not implicitly {@link proto.EncoderDevice.verify|verify} messages.
         * @param message EncoderDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.EncoderDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncoderDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.EncoderDevice & proto.EncoderDevice.$Shape} EncoderDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.EncoderDevice & proto.EncoderDevice.$Shape;

        /**
         * Decodes an EncoderDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.EncoderDevice & proto.EncoderDevice.$Shape} EncoderDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.EncoderDevice & proto.EncoderDevice.$Shape;

        /**
         * Verifies an EncoderDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncoderDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncoderDevice
         */
        static fromObject(object: { [k: string]: any }): proto.EncoderDevice;

        /**
         * Creates a plain object from an EncoderDevice message. Also converts values to other types if specified.
         * @param message EncoderDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.EncoderDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncoderDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for EncoderDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace EncoderDevice {

        /** Properties of an EncoderDevice. */
        interface $Properties {

            /** EncoderDevice dataPin */
            dataPin: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an EncoderDevice. */
        type $Shape = proto.EncoderDevice.$Properties;
    }

    /**
     * Properties of a WS2812Device.
     * @deprecated Use proto.WS2812Device.$Properties instead.
     */
    interface IWS2812Device extends proto.WS2812Device.$Properties {
    }

    /** Represents a WS2812Device. */
    class WS2812Device {

        /**
         * Constructs a new WS2812Device.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.WS2812Device.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WS2812Device pin. */
        pin: number;

        /** WS2812Device type. */
        type: proto.WS2812Type;

        /** WS2812Device count. */
        count: number;

        /**
         * Creates a new WS2812Device instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WS2812Device instance
         */
        static create(properties: proto.WS2812Device.$Shape): proto.WS2812Device & proto.WS2812Device.$Shape;
        static create(properties?: proto.WS2812Device.$Properties): proto.WS2812Device;

        /**
         * Encodes the specified WS2812Device message. Does not implicitly {@link proto.WS2812Device.verify|verify} messages.
         * @param message WS2812Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.WS2812Device.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WS2812Device message, length delimited. Does not implicitly {@link proto.WS2812Device.verify|verify} messages.
         * @param message WS2812Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.WS2812Device.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WS2812Device message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.WS2812Device & proto.WS2812Device.$Shape} WS2812Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WS2812Device & proto.WS2812Device.$Shape;

        /**
         * Decodes a WS2812Device message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.WS2812Device & proto.WS2812Device.$Shape} WS2812Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WS2812Device & proto.WS2812Device.$Shape;

        /**
         * Verifies a WS2812Device message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WS2812Device message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WS2812Device
         */
        static fromObject(object: { [k: string]: any }): proto.WS2812Device;

        /**
         * Creates a plain object from a WS2812Device message. Also converts values to other types if specified.
         * @param message WS2812Device
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.WS2812Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WS2812Device to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WS2812Device
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WS2812Device {

        /** Properties of a WS2812Device. */
        interface $Properties {

            /** WS2812Device pin */
            pin: number;

            /** WS2812Device type */
            type: proto.WS2812Type;

            /** WS2812Device count */
            count: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WS2812Device. */
        type $Shape = proto.WS2812Device.$Properties;
    }

    /**
     * Properties of a APA102Device.
     * @deprecated Use proto.APA102Device.$Properties instead.
     */
    interface IAPA102Device extends proto.APA102Device.$Properties {
    }

    /** Represents a APA102Device. */
    class APA102Device {

        /**
         * Constructs a new APA102Device.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.APA102Device.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** APA102Device spi. */
        spi: proto.SPIDevice.$Properties;

        /** APA102Device type. */
        type: proto.APA102Type;

        /** APA102Device count. */
        count: number;

        /**
         * Creates a new APA102Device instance using the specified properties.
         * @param [properties] Properties to set
         * @returns APA102Device instance
         */
        static create(properties: proto.APA102Device.$Shape): proto.APA102Device & proto.APA102Device.$Shape;
        static create(properties?: proto.APA102Device.$Properties): proto.APA102Device;

        /**
         * Encodes the specified APA102Device message. Does not implicitly {@link proto.APA102Device.verify|verify} messages.
         * @param message APA102Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.APA102Device.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified APA102Device message, length delimited. Does not implicitly {@link proto.APA102Device.verify|verify} messages.
         * @param message APA102Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.APA102Device.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a APA102Device message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.APA102Device & proto.APA102Device.$Shape} APA102Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.APA102Device & proto.APA102Device.$Shape;

        /**
         * Decodes a APA102Device message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.APA102Device & proto.APA102Device.$Shape} APA102Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.APA102Device & proto.APA102Device.$Shape;

        /**
         * Verifies a APA102Device message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a APA102Device message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns APA102Device
         */
        static fromObject(object: { [k: string]: any }): proto.APA102Device;

        /**
         * Creates a plain object from a APA102Device message. Also converts values to other types if specified.
         * @param message APA102Device
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.APA102Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this APA102Device to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for APA102Device
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace APA102Device {

        /** Properties of a APA102Device. */
        interface $Properties {

            /** APA102Device spi */
            spi: proto.SPIDevice.$Properties;

            /** APA102Device type */
            type: proto.APA102Type;

            /** APA102Device count */
            count: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a APA102Device. */
        type $Shape = proto.APA102Device.$Properties;
    }

    /**
     * Properties of a VTechGuitarIOExpanderDevice.
     * @deprecated Use proto.VTechGuitarIOExpanderDevice.$Properties instead.
     */
    interface IVTechGuitarIOExpanderDevice extends proto.VTechGuitarIOExpanderDevice.$Properties {
    }

    /** Represents a VTechGuitarIOExpanderDevice. */
    class VTechGuitarIOExpanderDevice {

        /**
         * Constructs a new VTechGuitarIOExpanderDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.VTechGuitarIOExpanderDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VTechGuitarIOExpanderDevice spi. */
        spi: proto.SPIDevice.$Properties;

        /** VTechGuitarIOExpanderDevice attPin. */
        attPin: number;

        /**
         * Creates a new VTechGuitarIOExpanderDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VTechGuitarIOExpanderDevice instance
         */
        static create(properties: proto.VTechGuitarIOExpanderDevice.$Shape): proto.VTechGuitarIOExpanderDevice & proto.VTechGuitarIOExpanderDevice.$Shape;
        static create(properties?: proto.VTechGuitarIOExpanderDevice.$Properties): proto.VTechGuitarIOExpanderDevice;

        /**
         * Encodes the specified VTechGuitarIOExpanderDevice message. Does not implicitly {@link proto.VTechGuitarIOExpanderDevice.verify|verify} messages.
         * @param message VTechGuitarIOExpanderDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.VTechGuitarIOExpanderDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VTechGuitarIOExpanderDevice message, length delimited. Does not implicitly {@link proto.VTechGuitarIOExpanderDevice.verify|verify} messages.
         * @param message VTechGuitarIOExpanderDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.VTechGuitarIOExpanderDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VTechGuitarIOExpanderDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.VTechGuitarIOExpanderDevice & proto.VTechGuitarIOExpanderDevice.$Shape} VTechGuitarIOExpanderDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.VTechGuitarIOExpanderDevice & proto.VTechGuitarIOExpanderDevice.$Shape;

        /**
         * Decodes a VTechGuitarIOExpanderDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.VTechGuitarIOExpanderDevice & proto.VTechGuitarIOExpanderDevice.$Shape} VTechGuitarIOExpanderDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.VTechGuitarIOExpanderDevice & proto.VTechGuitarIOExpanderDevice.$Shape;

        /**
         * Verifies a VTechGuitarIOExpanderDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VTechGuitarIOExpanderDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VTechGuitarIOExpanderDevice
         */
        static fromObject(object: { [k: string]: any }): proto.VTechGuitarIOExpanderDevice;

        /**
         * Creates a plain object from a VTechGuitarIOExpanderDevice message. Also converts values to other types if specified.
         * @param message VTechGuitarIOExpanderDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.VTechGuitarIOExpanderDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VTechGuitarIOExpanderDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VTechGuitarIOExpanderDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VTechGuitarIOExpanderDevice {

        /** Properties of a VTechGuitarIOExpanderDevice. */
        interface $Properties {

            /** VTechGuitarIOExpanderDevice spi */
            spi: proto.SPIDevice.$Properties;

            /** VTechGuitarIOExpanderDevice attPin */
            attPin: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VTechGuitarIOExpanderDevice. */
        type $Shape = proto.VTechGuitarIOExpanderDevice.$Properties;
    }

    /**
     * Properties of a STP16CPCDevice.
     * @deprecated Use proto.STP16CPCDevice.$Properties instead.
     */
    interface ISTP16CPCDevice extends proto.STP16CPCDevice.$Properties {
    }

    /** Represents a STP16CPCDevice. */
    class STP16CPCDevice {

        /**
         * Constructs a new STP16CPCDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.STP16CPCDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** STP16CPCDevice spi. */
        spi: proto.SPIDevice.$Properties;

        /** STP16CPCDevice oe. */
        oe: number;

        /** STP16CPCDevice le. */
        le: number;

        /** STP16CPCDevice count. */
        count: number;

        /**
         * Creates a new STP16CPCDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns STP16CPCDevice instance
         */
        static create(properties: proto.STP16CPCDevice.$Shape): proto.STP16CPCDevice & proto.STP16CPCDevice.$Shape;
        static create(properties?: proto.STP16CPCDevice.$Properties): proto.STP16CPCDevice;

        /**
         * Encodes the specified STP16CPCDevice message. Does not implicitly {@link proto.STP16CPCDevice.verify|verify} messages.
         * @param message STP16CPCDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.STP16CPCDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified STP16CPCDevice message, length delimited. Does not implicitly {@link proto.STP16CPCDevice.verify|verify} messages.
         * @param message STP16CPCDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.STP16CPCDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a STP16CPCDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.STP16CPCDevice & proto.STP16CPCDevice.$Shape} STP16CPCDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.STP16CPCDevice & proto.STP16CPCDevice.$Shape;

        /**
         * Decodes a STP16CPCDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.STP16CPCDevice & proto.STP16CPCDevice.$Shape} STP16CPCDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.STP16CPCDevice & proto.STP16CPCDevice.$Shape;

        /**
         * Verifies a STP16CPCDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a STP16CPCDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns STP16CPCDevice
         */
        static fromObject(object: { [k: string]: any }): proto.STP16CPCDevice;

        /**
         * Creates a plain object from a STP16CPCDevice message. Also converts values to other types if specified.
         * @param message STP16CPCDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.STP16CPCDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this STP16CPCDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for STP16CPCDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace STP16CPCDevice {

        /** Properties of a STP16CPCDevice. */
        interface $Properties {

            /** STP16CPCDevice spi */
            spi: proto.SPIDevice.$Properties;

            /** STP16CPCDevice oe */
            oe: number;

            /** STP16CPCDevice le */
            le: number;

            /** STP16CPCDevice count */
            count: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a STP16CPCDevice. */
        type $Shape = proto.STP16CPCDevice.$Properties;
    }

    /**
     * Properties of a MatrixDevice.
     * @deprecated Use proto.MatrixDevice.$Properties instead.
     */
    interface IMatrixDevice extends proto.MatrixDevice.$Properties {
    }

    /** Represents a MatrixDevice. */
    class MatrixDevice {

        /**
         * Constructs a new MatrixDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MatrixDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MatrixDevice outPins. */
        outPins: number;

        /** MatrixDevice inPins. */
        inPins: number;

        /**
         * Creates a new MatrixDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatrixDevice instance
         */
        static create(properties: proto.MatrixDevice.$Shape): proto.MatrixDevice & proto.MatrixDevice.$Shape;
        static create(properties?: proto.MatrixDevice.$Properties): proto.MatrixDevice;

        /**
         * Encodes the specified MatrixDevice message. Does not implicitly {@link proto.MatrixDevice.verify|verify} messages.
         * @param message MatrixDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MatrixDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatrixDevice message, length delimited. Does not implicitly {@link proto.MatrixDevice.verify|verify} messages.
         * @param message MatrixDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MatrixDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatrixDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MatrixDevice & proto.MatrixDevice.$Shape} MatrixDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MatrixDevice & proto.MatrixDevice.$Shape;

        /**
         * Decodes a MatrixDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MatrixDevice & proto.MatrixDevice.$Shape} MatrixDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MatrixDevice & proto.MatrixDevice.$Shape;

        /**
         * Verifies a MatrixDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatrixDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatrixDevice
         */
        static fromObject(object: { [k: string]: any }): proto.MatrixDevice;

        /**
         * Creates a plain object from a MatrixDevice message. Also converts values to other types if specified.
         * @param message MatrixDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MatrixDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatrixDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MatrixDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MatrixDevice {

        /** Properties of a MatrixDevice. */
        interface $Properties {

            /** MatrixDevice outPins */
            outPins: number;

            /** MatrixDevice inPins */
            inPins: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MatrixDevice. */
        type $Shape = proto.MatrixDevice.$Properties;
    }

    /**
     * Properties of a CycleDevice.
     * @deprecated Use proto.CycleDevice.$Properties instead.
     */
    interface ICycleDevice extends proto.CycleDevice.$Properties {
    }

    /** Represents a CycleDevice. */
    class CycleDevice {

        /**
         * Constructs a new CycleDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.CycleDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CycleDevice type. */
        type: proto.CycleType;

        /** CycleDevice values. */
        values: number[];

        /**
         * Creates a new CycleDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CycleDevice instance
         */
        static create(properties: proto.CycleDevice.$Shape): proto.CycleDevice & proto.CycleDevice.$Shape;
        static create(properties?: proto.CycleDevice.$Properties): proto.CycleDevice;

        /**
         * Encodes the specified CycleDevice message. Does not implicitly {@link proto.CycleDevice.verify|verify} messages.
         * @param message CycleDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.CycleDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CycleDevice message, length delimited. Does not implicitly {@link proto.CycleDevice.verify|verify} messages.
         * @param message CycleDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.CycleDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CycleDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.CycleDevice & proto.CycleDevice.$Shape} CycleDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CycleDevice & proto.CycleDevice.$Shape;

        /**
         * Decodes a CycleDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.CycleDevice & proto.CycleDevice.$Shape} CycleDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CycleDevice & proto.CycleDevice.$Shape;

        /**
         * Verifies a CycleDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CycleDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CycleDevice
         */
        static fromObject(object: { [k: string]: any }): proto.CycleDevice;

        /**
         * Creates a plain object from a CycleDevice message. Also converts values to other types if specified.
         * @param message CycleDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.CycleDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CycleDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CycleDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CycleDevice {

        /** Properties of a CycleDevice. */
        interface $Properties {

            /** CycleDevice type */
            type: proto.CycleType;

            /** CycleDevice values */
            values?: (number[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CycleDevice. */
        type $Shape = proto.CycleDevice.$Properties;
    }

    /**
     * Properties of a ToggleDevice.
     * @deprecated Use proto.ToggleDevice.$Properties instead.
     */
    interface IToggleDevice extends proto.ToggleDevice.$Properties {
    }

    /** Represents a ToggleDevice. */
    class ToggleDevice {

        /**
         * Constructs a new ToggleDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ToggleDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new ToggleDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToggleDevice instance
         */
        static create(properties: proto.ToggleDevice.$Shape): proto.ToggleDevice & proto.ToggleDevice.$Shape;
        static create(properties?: proto.ToggleDevice.$Properties): proto.ToggleDevice;

        /**
         * Encodes the specified ToggleDevice message. Does not implicitly {@link proto.ToggleDevice.verify|verify} messages.
         * @param message ToggleDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ToggleDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToggleDevice message, length delimited. Does not implicitly {@link proto.ToggleDevice.verify|verify} messages.
         * @param message ToggleDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ToggleDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToggleDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ToggleDevice & proto.ToggleDevice.$Shape} ToggleDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ToggleDevice & proto.ToggleDevice.$Shape;

        /**
         * Decodes a ToggleDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ToggleDevice & proto.ToggleDevice.$Shape} ToggleDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ToggleDevice & proto.ToggleDevice.$Shape;

        /**
         * Verifies a ToggleDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToggleDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToggleDevice
         */
        static fromObject(object: { [k: string]: any }): proto.ToggleDevice;

        /**
         * Creates a plain object from a ToggleDevice message. Also converts values to other types if specified.
         * @param message ToggleDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ToggleDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToggleDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ToggleDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ToggleDevice {

        /** Properties of a ToggleDevice. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ToggleDevice. */
        type $Shape = proto.ToggleDevice.$Properties;
    }

    /**
     * Properties of a DMXDevice.
     * @deprecated Use proto.DMXDevice.$Properties instead.
     */
    interface IDMXDevice extends proto.DMXDevice.$Properties {
    }

    /** Represents a DMXDevice. */
    class DMXDevice {

        /**
         * Constructs a new DMXDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.DMXDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DMXDevice pin. */
        pin: number;

        /** DMXDevice channelCount. */
        channelCount: number;

        /**
         * Creates a new DMXDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DMXDevice instance
         */
        static create(properties: proto.DMXDevice.$Shape): proto.DMXDevice & proto.DMXDevice.$Shape;
        static create(properties?: proto.DMXDevice.$Properties): proto.DMXDevice;

        /**
         * Encodes the specified DMXDevice message. Does not implicitly {@link proto.DMXDevice.verify|verify} messages.
         * @param message DMXDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.DMXDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DMXDevice message, length delimited. Does not implicitly {@link proto.DMXDevice.verify|verify} messages.
         * @param message DMXDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.DMXDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DMXDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.DMXDevice & proto.DMXDevice.$Shape} DMXDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DMXDevice & proto.DMXDevice.$Shape;

        /**
         * Decodes a DMXDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.DMXDevice & proto.DMXDevice.$Shape} DMXDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DMXDevice & proto.DMXDevice.$Shape;

        /**
         * Verifies a DMXDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DMXDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DMXDevice
         */
        static fromObject(object: { [k: string]: any }): proto.DMXDevice;

        /**
         * Creates a plain object from a DMXDevice message. Also converts values to other types if specified.
         * @param message DMXDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.DMXDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DMXDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DMXDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DMXDevice {

        /** Properties of a DMXDevice. */
        interface $Properties {

            /** DMXDevice pin */
            pin: number;

            /** DMXDevice channelCount */
            channelCount: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DMXDevice. */
        type $Shape = proto.DMXDevice.$Properties;
    }

    /**
     * Properties of a Device.
     * @deprecated Use proto.Device.$Properties instead.
     */
    interface IDevice extends proto.Device.$Properties {
    }

    /** Represents a Device. */
    class Device {

        /**
         * Constructs a new Device.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Device.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Device deviceid. */
        deviceid: number;

        /** Device accelerometer. */
        accelerometer?: (proto.AccelerometerDevice.$Properties|null);

        /** Device max1704x. */
        max1704x?: (proto.Max1704xDevice.$Properties|null);

        /** Device mpr121. */
        mpr121?: (proto.Mpr121Device.$Properties|null);

        /** Device wii. */
        wii?: (proto.WiiDevice.$Properties|null);

        /** Device crazyGuitarNeck. */
        crazyGuitarNeck?: (proto.CrazyGuitarNeckDevice.$Properties|null);

        /** Device gh5Neck. */
        gh5Neck?: (proto.GuitarHero5NeckDevice.$Properties|null);

        /** Device djhTurntable. */
        djhTurntable?: (proto.DJHeroTurntableDevice.$Properties|null);

        /** Device bhDrum. */
        bhDrum?: (proto.BandHeroDrumDevice.$Properties|null);

        /** Device midiSerial. */
        midiSerial?: (proto.SerialMidiDevice.$Properties|null);

        /** Device usbHost. */
        usbHost?: (proto.UsbHostDevice.$Properties|null);

        /** Device multiplexer. */
        multiplexer?: (proto.MultiplexerDevice.$Properties|null);

        /** Device worldTourDrum. */
        worldTourDrum?: (proto.WorldTourDrumDevice.$Properties|null);

        /** Device psx. */
        psx?: (proto.PSXDevice.$Properties|null);

        /** Device snes. */
        snes?: (proto.SNESDevice.$Properties|null);

        /** Device joybus. */
        joybus?: (proto.JoybusDevice.$Properties|null);

        /** Device wiiEmulation. */
        wiiEmulation?: (proto.WiiEmulationDevice.$Properties|null);

        /** Device psxEmulation. */
        psxEmulation?: (proto.PSXEmulationDevice.$Properties|null);

        /** Device joybusEmulation. */
        joybusEmulation?: (proto.JoybusEmulationDevice.$Properties|null);

        /** Device peripheral. */
        peripheral?: (proto.PeripheralDevice.$Properties|null);

        /** Device crkdNeck. */
        crkdNeck?: (proto.CrkdNeckDevice.$Properties|null);

        /** Device ads1115. */
        ads1115?: (proto.ADS1115Device.$Properties|null);

        /** Device encoder. */
        encoder?: (proto.EncoderDevice.$Properties|null);

        /** Device debug. */
        debug?: (proto.DebugDevice.$Properties|null);

        /** Device ws2812. */
        ws2812?: (proto.WS2812Device.$Properties|null);

        /** Device apa102. */
        apa102?: (proto.APA102Device.$Properties|null);

        /** Device stp16cpc. */
        stp16cpc?: (proto.STP16CPCDevice.$Properties|null);

        /** Device bt. */
        bt?: (proto.BluetoothDevice.$Properties|null);

        /** Device protarNeck. */
        protarNeck?: (proto.ProtarNeckDevice.$Properties|null);

        /** Device vtechExpander. */
        vtechExpander?: (proto.VTechGuitarIOExpanderDevice.$Properties|null);

        /** Device matrix. */
        matrix?: (proto.MatrixDevice.$Properties|null);

        /** Device crkdDrum. */
        crkdDrum?: (proto.CrkdDrumDevice.$Properties|null);

        /** Device cycle. */
        cycle?: (proto.CycleDevice.$Properties|null);

        /** Device toggle. */
        toggle?: (proto.ToggleDevice.$Properties|null);

        /** Device dmx. */
        dmx?: (proto.DMXDevice.$Properties|null);

        /** Device device. */
        device?: ("accelerometer"|"max1704x"|"mpr121"|"wii"|"crazyGuitarNeck"|"gh5Neck"|"djhTurntable"|"bhDrum"|"midiSerial"|"usbHost"|"multiplexer"|"worldTourDrum"|"psx"|"snes"|"joybus"|"wiiEmulation"|"psxEmulation"|"joybusEmulation"|"peripheral"|"crkdNeck"|"ads1115"|"encoder"|"debug"|"ws2812"|"apa102"|"stp16cpc"|"bt"|"protarNeck"|"vtechExpander"|"matrix"|"crkdDrum"|"cycle"|"toggle"|"dmx");

        /**
         * Creates a new Device instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Device instance
         */
        static create(properties: proto.Device.$Shape): proto.Device & proto.Device.$Shape;
        static create(properties?: proto.Device.$Properties): proto.Device;

        /**
         * Encodes the specified Device message. Does not implicitly {@link proto.Device.verify|verify} messages.
         * @param message Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.Device.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Device message, length delimited. Does not implicitly {@link proto.Device.verify|verify} messages.
         * @param message Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.Device.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Device message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.Device & proto.Device.$Shape} Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Device & proto.Device.$Shape;

        /**
         * Decodes a Device message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.Device & proto.Device.$Shape} Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Device & proto.Device.$Shape;

        /**
         * Verifies a Device message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Device message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Device
         */
        static fromObject(object: { [k: string]: any }): proto.Device;

        /**
         * Creates a plain object from a Device message. Also converts values to other types if specified.
         * @param message Device
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Device to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Device
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Device {

        /** Properties of a Device. */
        interface $Properties {

            /** Device deviceid */
            deviceid: number;

            /** Device accelerometer */
            accelerometer?: (proto.AccelerometerDevice.$Properties|null);

            /** Device max1704x */
            max1704x?: (proto.Max1704xDevice.$Properties|null);

            /** Device mpr121 */
            mpr121?: (proto.Mpr121Device.$Properties|null);

            /** Device wii */
            wii?: (proto.WiiDevice.$Properties|null);

            /** Device crazyGuitarNeck */
            crazyGuitarNeck?: (proto.CrazyGuitarNeckDevice.$Properties|null);

            /** Device gh5Neck */
            gh5Neck?: (proto.GuitarHero5NeckDevice.$Properties|null);

            /** Device djhTurntable */
            djhTurntable?: (proto.DJHeroTurntableDevice.$Properties|null);

            /** Device bhDrum */
            bhDrum?: (proto.BandHeroDrumDevice.$Properties|null);

            /** Device midiSerial */
            midiSerial?: (proto.SerialMidiDevice.$Properties|null);

            /** Device usbHost */
            usbHost?: (proto.UsbHostDevice.$Properties|null);

            /** Device multiplexer */
            multiplexer?: (proto.MultiplexerDevice.$Properties|null);

            /** Device worldTourDrum */
            worldTourDrum?: (proto.WorldTourDrumDevice.$Properties|null);

            /** Device psx */
            psx?: (proto.PSXDevice.$Properties|null);

            /** Device snes */
            snes?: (proto.SNESDevice.$Properties|null);

            /** Device joybus */
            joybus?: (proto.JoybusDevice.$Properties|null);

            /** Device wiiEmulation */
            wiiEmulation?: (proto.WiiEmulationDevice.$Properties|null);

            /** Device psxEmulation */
            psxEmulation?: (proto.PSXEmulationDevice.$Properties|null);

            /** Device joybusEmulation */
            joybusEmulation?: (proto.JoybusEmulationDevice.$Properties|null);

            /** Device peripheral */
            peripheral?: (proto.PeripheralDevice.$Properties|null);

            /** Device crkdNeck */
            crkdNeck?: (proto.CrkdNeckDevice.$Properties|null);

            /** Device ads1115 */
            ads1115?: (proto.ADS1115Device.$Properties|null);

            /** Device encoder */
            encoder?: (proto.EncoderDevice.$Properties|null);

            /** Device debug */
            debug?: (proto.DebugDevice.$Properties|null);

            /** Device ws2812 */
            ws2812?: (proto.WS2812Device.$Properties|null);

            /** Device apa102 */
            apa102?: (proto.APA102Device.$Properties|null);

            /** Device stp16cpc */
            stp16cpc?: (proto.STP16CPCDevice.$Properties|null);

            /** Device bt */
            bt?: (proto.BluetoothDevice.$Properties|null);

            /** Device protarNeck */
            protarNeck?: (proto.ProtarNeckDevice.$Properties|null);

            /** Device vtechExpander */
            vtechExpander?: (proto.VTechGuitarIOExpanderDevice.$Properties|null);

            /** Device matrix */
            matrix?: (proto.MatrixDevice.$Properties|null);

            /** Device crkdDrum */
            crkdDrum?: (proto.CrkdDrumDevice.$Properties|null);

            /** Device cycle */
            cycle?: (proto.CycleDevice.$Properties|null);

            /** Device toggle */
            toggle?: (proto.ToggleDevice.$Properties|null);

            /** Device dmx */
            dmx?: (proto.DMXDevice.$Properties|null);

            /** Device device */
            device?: ("accelerometer"|"max1704x"|"mpr121"|"wii"|"crazyGuitarNeck"|"gh5Neck"|"djhTurntable"|"bhDrum"|"midiSerial"|"usbHost"|"multiplexer"|"worldTourDrum"|"psx"|"snes"|"joybus"|"wiiEmulation"|"psxEmulation"|"joybusEmulation"|"peripheral"|"crkdNeck"|"ads1115"|"encoder"|"debug"|"ws2812"|"apa102"|"stp16cpc"|"bt"|"protarNeck"|"vtechExpander"|"matrix"|"crkdDrum"|"cycle"|"toggle"|"dmx");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a Device. */
        type $Shape = {
          deviceid: number;
          accelerometer?: proto.AccelerometerDevice.$Shape|null;
          max1704x?: proto.Max1704xDevice.$Shape|null;
          mpr121?: proto.Mpr121Device.$Shape|null;
          wii?: proto.WiiDevice.$Shape|null;
          crazyGuitarNeck?: proto.CrazyGuitarNeckDevice.$Shape|null;
          gh5Neck?: proto.GuitarHero5NeckDevice.$Shape|null;
          djhTurntable?: proto.DJHeroTurntableDevice.$Shape|null;
          bhDrum?: proto.BandHeroDrumDevice.$Shape|null;
          midiSerial?: proto.SerialMidiDevice.$Shape|null;
          usbHost?: proto.UsbHostDevice.$Shape|null;
          multiplexer?: proto.MultiplexerDevice.$Shape|null;
          worldTourDrum?: proto.WorldTourDrumDevice.$Shape|null;
          psx?: proto.PSXDevice.$Shape|null;
          snes?: proto.SNESDevice.$Shape|null;
          joybus?: proto.JoybusDevice.$Shape|null;
          wiiEmulation?: proto.WiiEmulationDevice.$Shape|null;
          psxEmulation?: proto.PSXEmulationDevice.$Shape|null;
          joybusEmulation?: proto.JoybusEmulationDevice.$Shape|null;
          peripheral?: proto.PeripheralDevice.$Shape|null;
          crkdNeck?: proto.CrkdNeckDevice.$Shape|null;
          ads1115?: proto.ADS1115Device.$Shape|null;
          encoder?: proto.EncoderDevice.$Shape|null;
          debug?: proto.DebugDevice.$Shape|null;
          ws2812?: proto.WS2812Device.$Shape|null;
          apa102?: proto.APA102Device.$Shape|null;
          stp16cpc?: proto.STP16CPCDevice.$Shape|null;
          bt?: proto.BluetoothDevice.$Shape|null;
          protarNeck?: proto.ProtarNeckDevice.$Shape|null;
          vtechExpander?: proto.VTechGuitarIOExpanderDevice.$Shape|null;
          matrix?: proto.MatrixDevice.$Shape|null;
          crkdDrum?: proto.CrkdDrumDevice.$Shape|null;
          cycle?: proto.CycleDevice.$Shape|null;
          toggle?: proto.ToggleDevice.$Shape|null;
          dmx?: proto.DMXDevice.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ device?: undefined; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "accelerometer"; accelerometer: proto.AccelerometerDevice.$Shape; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "max1704x"; accelerometer?: null; max1704x: proto.Max1704xDevice.$Shape; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "mpr121"; accelerometer?: null; max1704x?: null; mpr121: proto.Mpr121Device.$Shape; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "wii"; accelerometer?: null; max1704x?: null; mpr121?: null; wii: proto.WiiDevice.$Shape; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "crazyGuitarNeck"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck: proto.CrazyGuitarNeckDevice.$Shape; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "gh5Neck"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck: proto.GuitarHero5NeckDevice.$Shape; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "djhTurntable"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable: proto.DJHeroTurntableDevice.$Shape; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "bhDrum"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum: proto.BandHeroDrumDevice.$Shape; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "midiSerial"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial: proto.SerialMidiDevice.$Shape; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "usbHost"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost: proto.UsbHostDevice.$Shape; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "multiplexer"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer: proto.MultiplexerDevice.$Shape; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "worldTourDrum"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum: proto.WorldTourDrumDevice.$Shape; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "psx"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx: proto.PSXDevice.$Shape; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "snes"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes: proto.SNESDevice.$Shape; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "joybus"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus: proto.JoybusDevice.$Shape; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "wiiEmulation"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation: proto.WiiEmulationDevice.$Shape; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "psxEmulation"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation: proto.PSXEmulationDevice.$Shape; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "joybusEmulation"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation: proto.JoybusEmulationDevice.$Shape; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "peripheral"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral: proto.PeripheralDevice.$Shape; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "crkdNeck"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck: proto.CrkdNeckDevice.$Shape; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "ads1115"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115: proto.ADS1115Device.$Shape; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "encoder"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder: proto.EncoderDevice.$Shape; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "debug"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug: proto.DebugDevice.$Shape; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "ws2812"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812: proto.WS2812Device.$Shape; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "apa102"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102: proto.APA102Device.$Shape; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "stp16cpc"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc: proto.STP16CPCDevice.$Shape; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "bt"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt: proto.BluetoothDevice.$Shape; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "protarNeck"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck: proto.ProtarNeckDevice.$Shape; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "vtechExpander"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander: proto.VTechGuitarIOExpanderDevice.$Shape; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "matrix"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix: proto.MatrixDevice.$Shape; crkdDrum?: null; cycle?: null; toggle?: null; dmx?: null }|{ device?: "crkdDrum"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum: proto.CrkdDrumDevice.$Shape; cycle?: null; toggle?: null; dmx?: null }|{ device?: "cycle"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle: proto.CycleDevice.$Shape; toggle?: null; dmx?: null }|{ device?: "toggle"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle: proto.ToggleDevice.$Shape; dmx?: null }|{ device?: "dmx"; accelerometer?: null; max1704x?: null; mpr121?: null; wii?: null; crazyGuitarNeck?: null; gh5Neck?: null; djhTurntable?: null; bhDrum?: null; midiSerial?: null; usbHost?: null; multiplexer?: null; worldTourDrum?: null; psx?: null; snes?: null; joybus?: null; wiiEmulation?: null; psxEmulation?: null; joybusEmulation?: null; peripheral?: null; crkdNeck?: null; ads1115?: null; encoder?: null; debug?: null; ws2812?: null; apa102?: null; stp16cpc?: null; bt?: null; protarNeck?: null; vtechExpander?: null; matrix?: null; crkdDrum?: null; cycle?: null; toggle?: null; dmx: proto.DMXDevice.$Shape })
        );
    }

    /**
     * Properties of a CrkdCalibrationData.
     * @deprecated Use proto.CrkdCalibrationData.$Properties instead.
     */
    interface ICrkdCalibrationData extends proto.CrkdCalibrationData.$Properties {
    }

    /** Represents a CrkdCalibrationData. */
    class CrkdCalibrationData {

        /**
         * Constructs a new CrkdCalibrationData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.CrkdCalibrationData.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CrkdCalibrationData redPad. */
        redPad: number;

        /** CrkdCalibrationData yellowPad. */
        yellowPad: number;

        /** CrkdCalibrationData bluePad. */
        bluePad: number;

        /** CrkdCalibrationData greenPad. */
        greenPad: number;

        /** CrkdCalibrationData orangePad. */
        orangePad: number;

        /** CrkdCalibrationData yellowCymbal. */
        yellowCymbal: number;

        /** CrkdCalibrationData blueCymbal. */
        blueCymbal: number;

        /** CrkdCalibrationData greenCymbal. */
        greenCymbal: number;

        /** CrkdCalibrationData kick1. */
        kick1: number;

        /** CrkdCalibrationData kick2. */
        kick2: number;

        /**
         * Creates a new CrkdCalibrationData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CrkdCalibrationData instance
         */
        static create(properties: proto.CrkdCalibrationData.$Shape): proto.CrkdCalibrationData & proto.CrkdCalibrationData.$Shape;
        static create(properties?: proto.CrkdCalibrationData.$Properties): proto.CrkdCalibrationData;

        /**
         * Encodes the specified CrkdCalibrationData message. Does not implicitly {@link proto.CrkdCalibrationData.verify|verify} messages.
         * @param message CrkdCalibrationData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.CrkdCalibrationData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CrkdCalibrationData message, length delimited. Does not implicitly {@link proto.CrkdCalibrationData.verify|verify} messages.
         * @param message CrkdCalibrationData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.CrkdCalibrationData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CrkdCalibrationData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.CrkdCalibrationData & proto.CrkdCalibrationData.$Shape} CrkdCalibrationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CrkdCalibrationData & proto.CrkdCalibrationData.$Shape;

        /**
         * Decodes a CrkdCalibrationData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.CrkdCalibrationData & proto.CrkdCalibrationData.$Shape} CrkdCalibrationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CrkdCalibrationData & proto.CrkdCalibrationData.$Shape;

        /**
         * Verifies a CrkdCalibrationData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CrkdCalibrationData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrkdCalibrationData
         */
        static fromObject(object: { [k: string]: any }): proto.CrkdCalibrationData;

        /**
         * Creates a plain object from a CrkdCalibrationData message. Also converts values to other types if specified.
         * @param message CrkdCalibrationData
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.CrkdCalibrationData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrkdCalibrationData to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CrkdCalibrationData
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CrkdCalibrationData {

        /** Properties of a CrkdCalibrationData. */
        interface $Properties {

            /** CrkdCalibrationData redPad */
            redPad: number;

            /** CrkdCalibrationData yellowPad */
            yellowPad: number;

            /** CrkdCalibrationData bluePad */
            bluePad: number;

            /** CrkdCalibrationData greenPad */
            greenPad: number;

            /** CrkdCalibrationData orangePad */
            orangePad: number;

            /** CrkdCalibrationData yellowCymbal */
            yellowCymbal: number;

            /** CrkdCalibrationData blueCymbal */
            blueCymbal: number;

            /** CrkdCalibrationData greenCymbal */
            greenCymbal: number;

            /** CrkdCalibrationData kick1 */
            kick1: number;

            /** CrkdCalibrationData kick2 */
            kick2: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CrkdCalibrationData. */
        type $Shape = proto.CrkdCalibrationData.$Properties;
    }

    /**
     * Properties of a CrkdCalibrationDataEvent.
     * @deprecated Use proto.CrkdCalibrationDataEvent.$Properties instead.
     */
    interface ICrkdCalibrationDataEvent extends proto.CrkdCalibrationDataEvent.$Properties {
    }

    /** Represents a CrkdCalibrationDataEvent. */
    class CrkdCalibrationDataEvent {

        /**
         * Constructs a new CrkdCalibrationDataEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.CrkdCalibrationDataEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CrkdCalibrationDataEvent id. */
        id: number;

        /** CrkdCalibrationDataEvent type. */
        type: proto.CrkdDrumCalibrationType;

        /** CrkdCalibrationDataEvent data. */
        data: proto.CrkdCalibrationData.$Properties;

        /**
         * Creates a new CrkdCalibrationDataEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CrkdCalibrationDataEvent instance
         */
        static create(properties: proto.CrkdCalibrationDataEvent.$Shape): proto.CrkdCalibrationDataEvent & proto.CrkdCalibrationDataEvent.$Shape;
        static create(properties?: proto.CrkdCalibrationDataEvent.$Properties): proto.CrkdCalibrationDataEvent;

        /**
         * Encodes the specified CrkdCalibrationDataEvent message. Does not implicitly {@link proto.CrkdCalibrationDataEvent.verify|verify} messages.
         * @param message CrkdCalibrationDataEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.CrkdCalibrationDataEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CrkdCalibrationDataEvent message, length delimited. Does not implicitly {@link proto.CrkdCalibrationDataEvent.verify|verify} messages.
         * @param message CrkdCalibrationDataEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.CrkdCalibrationDataEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CrkdCalibrationDataEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.CrkdCalibrationDataEvent & proto.CrkdCalibrationDataEvent.$Shape} CrkdCalibrationDataEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CrkdCalibrationDataEvent & proto.CrkdCalibrationDataEvent.$Shape;

        /**
         * Decodes a CrkdCalibrationDataEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.CrkdCalibrationDataEvent & proto.CrkdCalibrationDataEvent.$Shape} CrkdCalibrationDataEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CrkdCalibrationDataEvent & proto.CrkdCalibrationDataEvent.$Shape;

        /**
         * Verifies a CrkdCalibrationDataEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CrkdCalibrationDataEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrkdCalibrationDataEvent
         */
        static fromObject(object: { [k: string]: any }): proto.CrkdCalibrationDataEvent;

        /**
         * Creates a plain object from a CrkdCalibrationDataEvent message. Also converts values to other types if specified.
         * @param message CrkdCalibrationDataEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.CrkdCalibrationDataEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrkdCalibrationDataEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CrkdCalibrationDataEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CrkdCalibrationDataEvent {

        /** Properties of a CrkdCalibrationDataEvent. */
        interface $Properties {

            /** CrkdCalibrationDataEvent id */
            id: number;

            /** CrkdCalibrationDataEvent type */
            type: proto.CrkdDrumCalibrationType;

            /** CrkdCalibrationDataEvent data */
            data: proto.CrkdCalibrationData.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CrkdCalibrationDataEvent. */
        type $Shape = proto.CrkdCalibrationDataEvent.$Properties;
    }

    /**
     * Properties of a ButtonEvent.
     * @deprecated Use proto.ButtonEvent.$Properties instead.
     */
    interface IButtonEvent extends proto.ButtonEvent.$Properties {
    }

    /** Represents a ButtonEvent. */
    class ButtonEvent {

        /**
         * Constructs a new ButtonEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ButtonEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ButtonEvent id. */
        id: number;

        /** ButtonEvent stateRaw. */
        stateRaw: boolean;

        /** ButtonEvent state. */
        state: boolean;

        /**
         * Creates a new ButtonEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ButtonEvent instance
         */
        static create(properties: proto.ButtonEvent.$Shape): proto.ButtonEvent & proto.ButtonEvent.$Shape;
        static create(properties?: proto.ButtonEvent.$Properties): proto.ButtonEvent;

        /**
         * Encodes the specified ButtonEvent message. Does not implicitly {@link proto.ButtonEvent.verify|verify} messages.
         * @param message ButtonEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ButtonEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ButtonEvent message, length delimited. Does not implicitly {@link proto.ButtonEvent.verify|verify} messages.
         * @param message ButtonEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ButtonEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ButtonEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ButtonEvent & proto.ButtonEvent.$Shape} ButtonEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ButtonEvent & proto.ButtonEvent.$Shape;

        /**
         * Decodes a ButtonEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ButtonEvent & proto.ButtonEvent.$Shape} ButtonEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ButtonEvent & proto.ButtonEvent.$Shape;

        /**
         * Verifies a ButtonEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ButtonEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ButtonEvent
         */
        static fromObject(object: { [k: string]: any }): proto.ButtonEvent;

        /**
         * Creates a plain object from a ButtonEvent message. Also converts values to other types if specified.
         * @param message ButtonEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ButtonEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ButtonEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ButtonEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ButtonEvent {

        /** Properties of a ButtonEvent. */
        interface $Properties {

            /** ButtonEvent id */
            id: number;

            /** ButtonEvent stateRaw */
            stateRaw: boolean;

            /** ButtonEvent state */
            state: boolean;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ButtonEvent. */
        type $Shape = proto.ButtonEvent.$Properties;
    }

    /**
     * Properties of a CycleEvent.
     * @deprecated Use proto.CycleEvent.$Properties instead.
     */
    interface ICycleEvent extends proto.CycleEvent.$Properties {
    }

    /** Represents a CycleEvent. */
    class CycleEvent {

        /**
         * Constructs a new CycleEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.CycleEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CycleEvent id. */
        id: number;

        /** CycleEvent state. */
        state: number;

        /**
         * Creates a new CycleEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CycleEvent instance
         */
        static create(properties: proto.CycleEvent.$Shape): proto.CycleEvent & proto.CycleEvent.$Shape;
        static create(properties?: proto.CycleEvent.$Properties): proto.CycleEvent;

        /**
         * Encodes the specified CycleEvent message. Does not implicitly {@link proto.CycleEvent.verify|verify} messages.
         * @param message CycleEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.CycleEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CycleEvent message, length delimited. Does not implicitly {@link proto.CycleEvent.verify|verify} messages.
         * @param message CycleEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.CycleEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CycleEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.CycleEvent & proto.CycleEvent.$Shape} CycleEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CycleEvent & proto.CycleEvent.$Shape;

        /**
         * Decodes a CycleEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.CycleEvent & proto.CycleEvent.$Shape} CycleEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CycleEvent & proto.CycleEvent.$Shape;

        /**
         * Verifies a CycleEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CycleEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CycleEvent
         */
        static fromObject(object: { [k: string]: any }): proto.CycleEvent;

        /**
         * Creates a plain object from a CycleEvent message. Also converts values to other types if specified.
         * @param message CycleEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.CycleEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CycleEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CycleEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CycleEvent {

        /** Properties of a CycleEvent. */
        interface $Properties {

            /** CycleEvent id */
            id: number;

            /** CycleEvent state */
            state: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CycleEvent. */
        type $Shape = proto.CycleEvent.$Properties;
    }

    /**
     * Properties of a ToggleEvent.
     * @deprecated Use proto.ToggleEvent.$Properties instead.
     */
    interface IToggleEvent extends proto.ToggleEvent.$Properties {
    }

    /** Represents a ToggleEvent. */
    class ToggleEvent {

        /**
         * Constructs a new ToggleEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ToggleEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ToggleEvent id. */
        id: number;

        /** ToggleEvent state. */
        state: boolean;

        /**
         * Creates a new ToggleEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToggleEvent instance
         */
        static create(properties: proto.ToggleEvent.$Shape): proto.ToggleEvent & proto.ToggleEvent.$Shape;
        static create(properties?: proto.ToggleEvent.$Properties): proto.ToggleEvent;

        /**
         * Encodes the specified ToggleEvent message. Does not implicitly {@link proto.ToggleEvent.verify|verify} messages.
         * @param message ToggleEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ToggleEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToggleEvent message, length delimited. Does not implicitly {@link proto.ToggleEvent.verify|verify} messages.
         * @param message ToggleEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ToggleEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToggleEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ToggleEvent & proto.ToggleEvent.$Shape} ToggleEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ToggleEvent & proto.ToggleEvent.$Shape;

        /**
         * Decodes a ToggleEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ToggleEvent & proto.ToggleEvent.$Shape} ToggleEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ToggleEvent & proto.ToggleEvent.$Shape;

        /**
         * Verifies a ToggleEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToggleEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToggleEvent
         */
        static fromObject(object: { [k: string]: any }): proto.ToggleEvent;

        /**
         * Creates a plain object from a ToggleEvent message. Also converts values to other types if specified.
         * @param message ToggleEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ToggleEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToggleEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ToggleEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ToggleEvent {

        /** Properties of a ToggleEvent. */
        interface $Properties {

            /** ToggleEvent id */
            id: number;

            /** ToggleEvent state */
            state: boolean;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ToggleEvent. */
        type $Shape = proto.ToggleEvent.$Properties;
    }

    /**
     * Properties of an AxisEvent.
     * @deprecated Use proto.AxisEvent.$Properties instead.
     */
    interface IAxisEvent extends proto.AxisEvent.$Properties {
    }

    /** Represents an AxisEvent. */
    class AxisEvent {

        /**
         * Constructs a new AxisEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.AxisEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AxisEvent id. */
        id: number;

        /** AxisEvent stateRaw. */
        stateRaw: number;

        /** AxisEvent state. */
        state: number;

        /**
         * Creates a new AxisEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AxisEvent instance
         */
        static create(properties: proto.AxisEvent.$Shape): proto.AxisEvent & proto.AxisEvent.$Shape;
        static create(properties?: proto.AxisEvent.$Properties): proto.AxisEvent;

        /**
         * Encodes the specified AxisEvent message. Does not implicitly {@link proto.AxisEvent.verify|verify} messages.
         * @param message AxisEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.AxisEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AxisEvent message, length delimited. Does not implicitly {@link proto.AxisEvent.verify|verify} messages.
         * @param message AxisEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.AxisEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AxisEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.AxisEvent & proto.AxisEvent.$Shape} AxisEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AxisEvent & proto.AxisEvent.$Shape;

        /**
         * Decodes an AxisEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.AxisEvent & proto.AxisEvent.$Shape} AxisEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AxisEvent & proto.AxisEvent.$Shape;

        /**
         * Verifies an AxisEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AxisEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AxisEvent
         */
        static fromObject(object: { [k: string]: any }): proto.AxisEvent;

        /**
         * Creates a plain object from an AxisEvent message. Also converts values to other types if specified.
         * @param message AxisEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.AxisEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AxisEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AxisEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AxisEvent {

        /** Properties of an AxisEvent. */
        interface $Properties {

            /** AxisEvent id */
            id: number;

            /** AxisEvent stateRaw */
            stateRaw: number;

            /** AxisEvent state */
            state: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AxisEvent. */
        type $Shape = proto.AxisEvent.$Properties;
    }

    /**
     * Properties of a LedEvent.
     * @deprecated Use proto.LedEvent.$Properties instead.
     */
    interface ILedEvent extends proto.LedEvent.$Properties {
    }

    /** Represents a LedEvent. */
    class LedEvent {

        /**
         * Constructs a new LedEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.LedEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LedEvent id. */
        id: number;

        /** LedEvent stateRaw. */
        stateRaw: number;

        /** LedEvent state. */
        state: number;

        /**
         * Creates a new LedEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LedEvent instance
         */
        static create(properties: proto.LedEvent.$Shape): proto.LedEvent & proto.LedEvent.$Shape;
        static create(properties?: proto.LedEvent.$Properties): proto.LedEvent;

        /**
         * Encodes the specified LedEvent message. Does not implicitly {@link proto.LedEvent.verify|verify} messages.
         * @param message LedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.LedEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LedEvent message, length delimited. Does not implicitly {@link proto.LedEvent.verify|verify} messages.
         * @param message LedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.LedEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LedEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.LedEvent & proto.LedEvent.$Shape} LedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LedEvent & proto.LedEvent.$Shape;

        /**
         * Decodes a LedEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.LedEvent & proto.LedEvent.$Shape} LedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LedEvent & proto.LedEvent.$Shape;

        /**
         * Verifies a LedEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LedEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LedEvent
         */
        static fromObject(object: { [k: string]: any }): proto.LedEvent;

        /**
         * Creates a plain object from a LedEvent message. Also converts values to other types if specified.
         * @param message LedEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.LedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LedEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LedEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LedEvent {

        /** Properties of a LedEvent. */
        interface $Properties {

            /** LedEvent id */
            id: number;

            /** LedEvent stateRaw */
            stateRaw: number;

            /** LedEvent state */
            state: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LedEvent. */
        type $Shape = proto.LedEvent.$Properties;
    }

    /**
     * Properties of an ActivationTriggerEvent.
     * @deprecated Use proto.ActivationTriggerEvent.$Properties instead.
     */
    interface IActivationTriggerEvent extends proto.ActivationTriggerEvent.$Properties {
    }

    /** Represents an ActivationTriggerEvent. */
    class ActivationTriggerEvent {

        /**
         * Constructs a new ActivationTriggerEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ActivationTriggerEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ActivationTriggerEvent id. */
        id: number;

        /** ActivationTriggerEvent listId. */
        listId: number;

        /** ActivationTriggerEvent stateRaw. */
        stateRaw: number;

        /** ActivationTriggerEvent state. */
        state: boolean;

        /**
         * Creates a new ActivationTriggerEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivationTriggerEvent instance
         */
        static create(properties: proto.ActivationTriggerEvent.$Shape): proto.ActivationTriggerEvent & proto.ActivationTriggerEvent.$Shape;
        static create(properties?: proto.ActivationTriggerEvent.$Properties): proto.ActivationTriggerEvent;

        /**
         * Encodes the specified ActivationTriggerEvent message. Does not implicitly {@link proto.ActivationTriggerEvent.verify|verify} messages.
         * @param message ActivationTriggerEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ActivationTriggerEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivationTriggerEvent message, length delimited. Does not implicitly {@link proto.ActivationTriggerEvent.verify|verify} messages.
         * @param message ActivationTriggerEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ActivationTriggerEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivationTriggerEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ActivationTriggerEvent & proto.ActivationTriggerEvent.$Shape} ActivationTriggerEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ActivationTriggerEvent & proto.ActivationTriggerEvent.$Shape;

        /**
         * Decodes an ActivationTriggerEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ActivationTriggerEvent & proto.ActivationTriggerEvent.$Shape} ActivationTriggerEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ActivationTriggerEvent & proto.ActivationTriggerEvent.$Shape;

        /**
         * Verifies an ActivationTriggerEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivationTriggerEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivationTriggerEvent
         */
        static fromObject(object: { [k: string]: any }): proto.ActivationTriggerEvent;

        /**
         * Creates a plain object from an ActivationTriggerEvent message. Also converts values to other types if specified.
         * @param message ActivationTriggerEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ActivationTriggerEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivationTriggerEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ActivationTriggerEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ActivationTriggerEvent {

        /** Properties of an ActivationTriggerEvent. */
        interface $Properties {

            /** ActivationTriggerEvent id */
            id: number;

            /** ActivationTriggerEvent listId */
            listId: number;

            /** ActivationTriggerEvent stateRaw */
            stateRaw: number;

            /** ActivationTriggerEvent state */
            state: boolean;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an ActivationTriggerEvent. */
        type $Shape = proto.ActivationTriggerEvent.$Properties;
    }

    /**
     * Properties of a PinDetectionEvent.
     * @deprecated Use proto.PinDetectionEvent.$Properties instead.
     */
    interface IPinDetectionEvent extends proto.PinDetectionEvent.$Properties {
    }

    /** Represents a PinDetectionEvent. */
    class PinDetectionEvent {

        /**
         * Constructs a new PinDetectionEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.PinDetectionEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PinDetectionEvent pin. */
        pin: number;

        /**
         * Creates a new PinDetectionEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PinDetectionEvent instance
         */
        static create(properties: proto.PinDetectionEvent.$Shape): proto.PinDetectionEvent & proto.PinDetectionEvent.$Shape;
        static create(properties?: proto.PinDetectionEvent.$Properties): proto.PinDetectionEvent;

        /**
         * Encodes the specified PinDetectionEvent message. Does not implicitly {@link proto.PinDetectionEvent.verify|verify} messages.
         * @param message PinDetectionEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.PinDetectionEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PinDetectionEvent message, length delimited. Does not implicitly {@link proto.PinDetectionEvent.verify|verify} messages.
         * @param message PinDetectionEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.PinDetectionEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PinDetectionEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.PinDetectionEvent & proto.PinDetectionEvent.$Shape} PinDetectionEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PinDetectionEvent & proto.PinDetectionEvent.$Shape;

        /**
         * Decodes a PinDetectionEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.PinDetectionEvent & proto.PinDetectionEvent.$Shape} PinDetectionEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PinDetectionEvent & proto.PinDetectionEvent.$Shape;

        /**
         * Verifies a PinDetectionEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PinDetectionEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PinDetectionEvent
         */
        static fromObject(object: { [k: string]: any }): proto.PinDetectionEvent;

        /**
         * Creates a plain object from a PinDetectionEvent message. Also converts values to other types if specified.
         * @param message PinDetectionEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.PinDetectionEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PinDetectionEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PinDetectionEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PinDetectionEvent {

        /** Properties of a PinDetectionEvent. */
        interface $Properties {

            /** PinDetectionEvent pin */
            pin: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PinDetectionEvent. */
        type $Shape = proto.PinDetectionEvent.$Properties;
    }

    /**
     * Properties of a MidiDetectionEvent.
     * @deprecated Use proto.MidiDetectionEvent.$Properties instead.
     */
    interface IMidiDetectionEvent extends proto.MidiDetectionEvent.$Properties {
    }

    /** Represents a MidiDetectionEvent. */
    class MidiDetectionEvent {

        /**
         * Constructs a new MidiDetectionEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MidiDetectionEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MidiDetectionEvent note. */
        note: number;

        /**
         * Creates a new MidiDetectionEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MidiDetectionEvent instance
         */
        static create(properties: proto.MidiDetectionEvent.$Shape): proto.MidiDetectionEvent & proto.MidiDetectionEvent.$Shape;
        static create(properties?: proto.MidiDetectionEvent.$Properties): proto.MidiDetectionEvent;

        /**
         * Encodes the specified MidiDetectionEvent message. Does not implicitly {@link proto.MidiDetectionEvent.verify|verify} messages.
         * @param message MidiDetectionEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MidiDetectionEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MidiDetectionEvent message, length delimited. Does not implicitly {@link proto.MidiDetectionEvent.verify|verify} messages.
         * @param message MidiDetectionEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MidiDetectionEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MidiDetectionEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MidiDetectionEvent & proto.MidiDetectionEvent.$Shape} MidiDetectionEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MidiDetectionEvent & proto.MidiDetectionEvent.$Shape;

        /**
         * Decodes a MidiDetectionEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MidiDetectionEvent & proto.MidiDetectionEvent.$Shape} MidiDetectionEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MidiDetectionEvent & proto.MidiDetectionEvent.$Shape;

        /**
         * Verifies a MidiDetectionEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MidiDetectionEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MidiDetectionEvent
         */
        static fromObject(object: { [k: string]: any }): proto.MidiDetectionEvent;

        /**
         * Creates a plain object from a MidiDetectionEvent message. Also converts values to other types if specified.
         * @param message MidiDetectionEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MidiDetectionEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MidiDetectionEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MidiDetectionEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MidiDetectionEvent {

        /** Properties of a MidiDetectionEvent. */
        interface $Properties {

            /** MidiDetectionEvent note */
            note: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MidiDetectionEvent. */
        type $Shape = proto.MidiDetectionEvent.$Properties;
    }

    /**
     * Properties of a DeviceHotplugEvent.
     * @deprecated Use proto.DeviceHotplugEvent.$Properties instead.
     */
    interface IDeviceHotplugEvent extends proto.DeviceHotplugEvent.$Properties {
    }

    /** Represents a DeviceHotplugEvent. */
    class DeviceHotplugEvent {

        /**
         * Constructs a new DeviceHotplugEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.DeviceHotplugEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DeviceHotplugEvent id. */
        id: number;

        /** DeviceHotplugEvent connected. */
        connected: boolean;

        /**
         * Creates a new DeviceHotplugEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceHotplugEvent instance
         */
        static create(properties: proto.DeviceHotplugEvent.$Shape): proto.DeviceHotplugEvent & proto.DeviceHotplugEvent.$Shape;
        static create(properties?: proto.DeviceHotplugEvent.$Properties): proto.DeviceHotplugEvent;

        /**
         * Encodes the specified DeviceHotplugEvent message. Does not implicitly {@link proto.DeviceHotplugEvent.verify|verify} messages.
         * @param message DeviceHotplugEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.DeviceHotplugEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceHotplugEvent message, length delimited. Does not implicitly {@link proto.DeviceHotplugEvent.verify|verify} messages.
         * @param message DeviceHotplugEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.DeviceHotplugEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceHotplugEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.DeviceHotplugEvent & proto.DeviceHotplugEvent.$Shape} DeviceHotplugEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DeviceHotplugEvent & proto.DeviceHotplugEvent.$Shape;

        /**
         * Decodes a DeviceHotplugEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.DeviceHotplugEvent & proto.DeviceHotplugEvent.$Shape} DeviceHotplugEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DeviceHotplugEvent & proto.DeviceHotplugEvent.$Shape;

        /**
         * Verifies a DeviceHotplugEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceHotplugEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceHotplugEvent
         */
        static fromObject(object: { [k: string]: any }): proto.DeviceHotplugEvent;

        /**
         * Creates a plain object from a DeviceHotplugEvent message. Also converts values to other types if specified.
         * @param message DeviceHotplugEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.DeviceHotplugEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceHotplugEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DeviceHotplugEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DeviceHotplugEvent {

        /** Properties of a DeviceHotplugEvent. */
        interface $Properties {

            /** DeviceHotplugEvent id */
            id: number;

            /** DeviceHotplugEvent connected */
            connected: boolean;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DeviceHotplugEvent. */
        type $Shape = proto.DeviceHotplugEvent.$Properties;
    }

    /**
     * Properties of a UsbDeviceHotplugEvent.
     * @deprecated Use proto.UsbDeviceHotplugEvent.$Properties instead.
     */
    interface IUsbDeviceHotplugEvent extends proto.UsbDeviceHotplugEvent.$Properties {
    }

    /** Represents a UsbDeviceHotplugEvent. */
    class UsbDeviceHotplugEvent {

        /**
         * Constructs a new UsbDeviceHotplugEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.UsbDeviceHotplugEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UsbDeviceHotplugEvent id. */
        id: number;

        /** UsbDeviceHotplugEvent subtype. */
        subtype: proto.SubType;

        /** UsbDeviceHotplugEvent port. */
        port: number;

        /** UsbDeviceHotplugEvent interface. */
        interface: number;

        /** UsbDeviceHotplugEvent connected. */
        connected: boolean;

        /** UsbDeviceHotplugEvent name. */
        name: string;

        /**
         * Creates a new UsbDeviceHotplugEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UsbDeviceHotplugEvent instance
         */
        static create(properties: proto.UsbDeviceHotplugEvent.$Shape): proto.UsbDeviceHotplugEvent & proto.UsbDeviceHotplugEvent.$Shape;
        static create(properties?: proto.UsbDeviceHotplugEvent.$Properties): proto.UsbDeviceHotplugEvent;

        /**
         * Encodes the specified UsbDeviceHotplugEvent message. Does not implicitly {@link proto.UsbDeviceHotplugEvent.verify|verify} messages.
         * @param message UsbDeviceHotplugEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.UsbDeviceHotplugEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UsbDeviceHotplugEvent message, length delimited. Does not implicitly {@link proto.UsbDeviceHotplugEvent.verify|verify} messages.
         * @param message UsbDeviceHotplugEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.UsbDeviceHotplugEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UsbDeviceHotplugEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.UsbDeviceHotplugEvent & proto.UsbDeviceHotplugEvent.$Shape} UsbDeviceHotplugEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UsbDeviceHotplugEvent & proto.UsbDeviceHotplugEvent.$Shape;

        /**
         * Decodes a UsbDeviceHotplugEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.UsbDeviceHotplugEvent & proto.UsbDeviceHotplugEvent.$Shape} UsbDeviceHotplugEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UsbDeviceHotplugEvent & proto.UsbDeviceHotplugEvent.$Shape;

        /**
         * Verifies a UsbDeviceHotplugEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UsbDeviceHotplugEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UsbDeviceHotplugEvent
         */
        static fromObject(object: { [k: string]: any }): proto.UsbDeviceHotplugEvent;

        /**
         * Creates a plain object from a UsbDeviceHotplugEvent message. Also converts values to other types if specified.
         * @param message UsbDeviceHotplugEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.UsbDeviceHotplugEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UsbDeviceHotplugEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UsbDeviceHotplugEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UsbDeviceHotplugEvent {

        /** Properties of a UsbDeviceHotplugEvent. */
        interface $Properties {

            /** UsbDeviceHotplugEvent id */
            id: number;

            /** UsbDeviceHotplugEvent subtype */
            subtype: proto.SubType;

            /** UsbDeviceHotplugEvent port */
            port: number;

            /** UsbDeviceHotplugEvent interface */
            "interface": number;

            /** UsbDeviceHotplugEvent connected */
            connected: boolean;

            /** UsbDeviceHotplugEvent name */
            name: string;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UsbDeviceHotplugEvent. */
        type $Shape = proto.UsbDeviceHotplugEvent.$Properties;
    }

    /**
     * Properties of a WiiDeviceHotplugEvent.
     * @deprecated Use proto.WiiDeviceHotplugEvent.$Properties instead.
     */
    interface IWiiDeviceHotplugEvent extends proto.WiiDeviceHotplugEvent.$Properties {
    }

    /** Represents a WiiDeviceHotplugEvent. */
    class WiiDeviceHotplugEvent {

        /**
         * Constructs a new WiiDeviceHotplugEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.WiiDeviceHotplugEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WiiDeviceHotplugEvent id. */
        id: number;

        /** WiiDeviceHotplugEvent extension. */
        extension: proto.WiiExtType;

        /**
         * Creates a new WiiDeviceHotplugEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiiDeviceHotplugEvent instance
         */
        static create(properties: proto.WiiDeviceHotplugEvent.$Shape): proto.WiiDeviceHotplugEvent & proto.WiiDeviceHotplugEvent.$Shape;
        static create(properties?: proto.WiiDeviceHotplugEvent.$Properties): proto.WiiDeviceHotplugEvent;

        /**
         * Encodes the specified WiiDeviceHotplugEvent message. Does not implicitly {@link proto.WiiDeviceHotplugEvent.verify|verify} messages.
         * @param message WiiDeviceHotplugEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.WiiDeviceHotplugEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiiDeviceHotplugEvent message, length delimited. Does not implicitly {@link proto.WiiDeviceHotplugEvent.verify|verify} messages.
         * @param message WiiDeviceHotplugEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.WiiDeviceHotplugEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiiDeviceHotplugEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.WiiDeviceHotplugEvent & proto.WiiDeviceHotplugEvent.$Shape} WiiDeviceHotplugEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WiiDeviceHotplugEvent & proto.WiiDeviceHotplugEvent.$Shape;

        /**
         * Decodes a WiiDeviceHotplugEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.WiiDeviceHotplugEvent & proto.WiiDeviceHotplugEvent.$Shape} WiiDeviceHotplugEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WiiDeviceHotplugEvent & proto.WiiDeviceHotplugEvent.$Shape;

        /**
         * Verifies a WiiDeviceHotplugEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiiDeviceHotplugEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiiDeviceHotplugEvent
         */
        static fromObject(object: { [k: string]: any }): proto.WiiDeviceHotplugEvent;

        /**
         * Creates a plain object from a WiiDeviceHotplugEvent message. Also converts values to other types if specified.
         * @param message WiiDeviceHotplugEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.WiiDeviceHotplugEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiiDeviceHotplugEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WiiDeviceHotplugEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WiiDeviceHotplugEvent {

        /** Properties of a WiiDeviceHotplugEvent. */
        interface $Properties {

            /** WiiDeviceHotplugEvent id */
            id: number;

            /** WiiDeviceHotplugEvent extension */
            extension: proto.WiiExtType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WiiDeviceHotplugEvent. */
        type $Shape = proto.WiiDeviceHotplugEvent.$Properties;
    }

    /**
     * Properties of a PS2DeviceHotplugEvent.
     * @deprecated Use proto.PS2DeviceHotplugEvent.$Properties instead.
     */
    interface IPS2DeviceHotplugEvent extends proto.PS2DeviceHotplugEvent.$Properties {
    }

    /** Represents a PS2DeviceHotplugEvent. */
    class PS2DeviceHotplugEvent {

        /**
         * Constructs a new PS2DeviceHotplugEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.PS2DeviceHotplugEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PS2DeviceHotplugEvent id. */
        id: number;

        /** PS2DeviceHotplugEvent type. */
        type: number;

        /**
         * Creates a new PS2DeviceHotplugEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PS2DeviceHotplugEvent instance
         */
        static create(properties: proto.PS2DeviceHotplugEvent.$Shape): proto.PS2DeviceHotplugEvent & proto.PS2DeviceHotplugEvent.$Shape;
        static create(properties?: proto.PS2DeviceHotplugEvent.$Properties): proto.PS2DeviceHotplugEvent;

        /**
         * Encodes the specified PS2DeviceHotplugEvent message. Does not implicitly {@link proto.PS2DeviceHotplugEvent.verify|verify} messages.
         * @param message PS2DeviceHotplugEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.PS2DeviceHotplugEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PS2DeviceHotplugEvent message, length delimited. Does not implicitly {@link proto.PS2DeviceHotplugEvent.verify|verify} messages.
         * @param message PS2DeviceHotplugEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.PS2DeviceHotplugEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PS2DeviceHotplugEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.PS2DeviceHotplugEvent & proto.PS2DeviceHotplugEvent.$Shape} PS2DeviceHotplugEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PS2DeviceHotplugEvent & proto.PS2DeviceHotplugEvent.$Shape;

        /**
         * Decodes a PS2DeviceHotplugEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.PS2DeviceHotplugEvent & proto.PS2DeviceHotplugEvent.$Shape} PS2DeviceHotplugEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PS2DeviceHotplugEvent & proto.PS2DeviceHotplugEvent.$Shape;

        /**
         * Verifies a PS2DeviceHotplugEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PS2DeviceHotplugEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PS2DeviceHotplugEvent
         */
        static fromObject(object: { [k: string]: any }): proto.PS2DeviceHotplugEvent;

        /**
         * Creates a plain object from a PS2DeviceHotplugEvent message. Also converts values to other types if specified.
         * @param message PS2DeviceHotplugEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.PS2DeviceHotplugEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PS2DeviceHotplugEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PS2DeviceHotplugEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PS2DeviceHotplugEvent {

        /** Properties of a PS2DeviceHotplugEvent. */
        interface $Properties {

            /** PS2DeviceHotplugEvent id */
            id: number;

            /** PS2DeviceHotplugEvent type */
            type: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PS2DeviceHotplugEvent. */
        type $Shape = proto.PS2DeviceHotplugEvent.$Properties;
    }

    /**
     * Properties of a DebugEvent.
     * @deprecated Use proto.DebugEvent.$Properties instead.
     */
    interface IDebugEvent extends proto.DebugEvent.$Properties {
    }

    /** Represents a DebugEvent. */
    class DebugEvent {

        /**
         * Constructs a new DebugEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.DebugEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DebugEvent data. */
        data: Uint8Array;

        /**
         * Creates a new DebugEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugEvent instance
         */
        static create(properties: proto.DebugEvent.$Shape): proto.DebugEvent & proto.DebugEvent.$Shape;
        static create(properties?: proto.DebugEvent.$Properties): proto.DebugEvent;

        /**
         * Encodes the specified DebugEvent message. Does not implicitly {@link proto.DebugEvent.verify|verify} messages.
         * @param message DebugEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.DebugEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugEvent message, length delimited. Does not implicitly {@link proto.DebugEvent.verify|verify} messages.
         * @param message DebugEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.DebugEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.DebugEvent & proto.DebugEvent.$Shape} DebugEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DebugEvent & proto.DebugEvent.$Shape;

        /**
         * Decodes a DebugEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.DebugEvent & proto.DebugEvent.$Shape} DebugEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DebugEvent & proto.DebugEvent.$Shape;

        /**
         * Verifies a DebugEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugEvent
         */
        static fromObject(object: { [k: string]: any }): proto.DebugEvent;

        /**
         * Creates a plain object from a DebugEvent message. Also converts values to other types if specified.
         * @param message DebugEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.DebugEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DebugEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DebugEvent {

        /** Properties of a DebugEvent. */
        interface $Properties {

            /** DebugEvent data */
            data: Uint8Array;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DebugEvent. */
        type $Shape = proto.DebugEvent.$Properties;
    }

    /**
     * Properties of a ConsoleEvent.
     * @deprecated Use proto.ConsoleEvent.$Properties instead.
     */
    interface IConsoleEvent extends proto.ConsoleEvent.$Properties {
    }

    /** Represents a ConsoleEvent. */
    class ConsoleEvent {

        /**
         * Constructs a new ConsoleEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ConsoleEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ConsoleEvent data. */
        data: string;

        /**
         * Creates a new ConsoleEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConsoleEvent instance
         */
        static create(properties: proto.ConsoleEvent.$Shape): proto.ConsoleEvent & proto.ConsoleEvent.$Shape;
        static create(properties?: proto.ConsoleEvent.$Properties): proto.ConsoleEvent;

        /**
         * Encodes the specified ConsoleEvent message. Does not implicitly {@link proto.ConsoleEvent.verify|verify} messages.
         * @param message ConsoleEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ConsoleEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConsoleEvent message, length delimited. Does not implicitly {@link proto.ConsoleEvent.verify|verify} messages.
         * @param message ConsoleEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ConsoleEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConsoleEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ConsoleEvent & proto.ConsoleEvent.$Shape} ConsoleEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ConsoleEvent & proto.ConsoleEvent.$Shape;

        /**
         * Decodes a ConsoleEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ConsoleEvent & proto.ConsoleEvent.$Shape} ConsoleEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ConsoleEvent & proto.ConsoleEvent.$Shape;

        /**
         * Verifies a ConsoleEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConsoleEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConsoleEvent
         */
        static fromObject(object: { [k: string]: any }): proto.ConsoleEvent;

        /**
         * Creates a plain object from a ConsoleEvent message. Also converts values to other types if specified.
         * @param message ConsoleEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ConsoleEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConsoleEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ConsoleEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ConsoleEvent {

        /** Properties of a ConsoleEvent. */
        interface $Properties {

            /** ConsoleEvent data */
            data: string;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ConsoleEvent. */
        type $Shape = proto.ConsoleEvent.$Properties;
    }

    /**
     * Properties of a MidiEvent.
     * @deprecated Use proto.MidiEvent.$Properties instead.
     */
    interface IMidiEvent extends proto.MidiEvent.$Properties {
    }

    /** Represents a MidiEvent. */
    class MidiEvent {

        /**
         * Constructs a new MidiEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.MidiEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MidiEvent data. */
        data: Uint8Array;

        /**
         * Creates a new MidiEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MidiEvent instance
         */
        static create(properties: proto.MidiEvent.$Shape): proto.MidiEvent & proto.MidiEvent.$Shape;
        static create(properties?: proto.MidiEvent.$Properties): proto.MidiEvent;

        /**
         * Encodes the specified MidiEvent message. Does not implicitly {@link proto.MidiEvent.verify|verify} messages.
         * @param message MidiEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.MidiEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MidiEvent message, length delimited. Does not implicitly {@link proto.MidiEvent.verify|verify} messages.
         * @param message MidiEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.MidiEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MidiEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.MidiEvent & proto.MidiEvent.$Shape} MidiEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MidiEvent & proto.MidiEvent.$Shape;

        /**
         * Decodes a MidiEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.MidiEvent & proto.MidiEvent.$Shape} MidiEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MidiEvent & proto.MidiEvent.$Shape;

        /**
         * Verifies a MidiEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MidiEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MidiEvent
         */
        static fromObject(object: { [k: string]: any }): proto.MidiEvent;

        /**
         * Creates a plain object from a MidiEvent message. Also converts values to other types if specified.
         * @param message MidiEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.MidiEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MidiEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MidiEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MidiEvent {

        /** Properties of a MidiEvent. */
        interface $Properties {

            /** MidiEvent data */
            data: Uint8Array;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MidiEvent. */
        type $Shape = proto.MidiEvent.$Properties;
    }

    /**
     * Properties of a ReloadEvent.
     * @deprecated Use proto.ReloadEvent.$Properties instead.
     */
    interface IReloadEvent extends proto.ReloadEvent.$Properties {
    }

    /** Represents a ReloadEvent. */
    class ReloadEvent {

        /**
         * Constructs a new ReloadEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ReloadEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new ReloadEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReloadEvent instance
         */
        static create(properties: proto.ReloadEvent.$Shape): proto.ReloadEvent & proto.ReloadEvent.$Shape;
        static create(properties?: proto.ReloadEvent.$Properties): proto.ReloadEvent;

        /**
         * Encodes the specified ReloadEvent message. Does not implicitly {@link proto.ReloadEvent.verify|verify} messages.
         * @param message ReloadEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ReloadEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReloadEvent message, length delimited. Does not implicitly {@link proto.ReloadEvent.verify|verify} messages.
         * @param message ReloadEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ReloadEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReloadEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ReloadEvent & proto.ReloadEvent.$Shape} ReloadEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ReloadEvent & proto.ReloadEvent.$Shape;

        /**
         * Decodes a ReloadEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ReloadEvent & proto.ReloadEvent.$Shape} ReloadEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ReloadEvent & proto.ReloadEvent.$Shape;

        /**
         * Verifies a ReloadEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReloadEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReloadEvent
         */
        static fromObject(object: { [k: string]: any }): proto.ReloadEvent;

        /**
         * Creates a plain object from a ReloadEvent message. Also converts values to other types if specified.
         * @param message ReloadEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ReloadEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReloadEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ReloadEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReloadEvent {

        /** Properties of a ReloadEvent. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ReloadEvent. */
        type $Shape = proto.ReloadEvent.$Properties;
    }

    /**
     * Properties of an Event.
     * @deprecated Use proto.Event.$Properties instead.
     */
    interface IEvent extends proto.Event.$Properties {
    }

    /** Represents an Event. */
    class Event {

        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Event.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Event button. */
        button?: (proto.ButtonEvent.$Properties|null);

        /** Event axis. */
        axis?: (proto.AxisEvent.$Properties|null);

        /** Event pin. */
        pin?: (proto.PinDetectionEvent.$Properties|null);

        /** Event midi. */
        midi?: (proto.MidiDetectionEvent.$Properties|null);

        /** Event usb. */
        usb?: (proto.UsbDeviceHotplugEvent.$Properties|null);

        /** Event wii. */
        wii?: (proto.WiiDeviceHotplugEvent.$Properties|null);

        /** Event ps2. */
        ps2?: (proto.PS2DeviceHotplugEvent.$Properties|null);

        /** Event device. */
        device?: (proto.DeviceHotplugEvent.$Properties|null);

        /** Event debug. */
        debug?: (proto.DebugEvent.$Properties|null);

        /** Event trigger. */
        trigger?: (proto.ActivationTriggerEvent.$Properties|null);

        /** Event led. */
        led?: (proto.LedEvent.$Properties|null);

        /** Event midiDebug. */
        midiDebug?: (proto.MidiEvent.$Properties|null);

        /** Event console. */
        console?: (proto.ConsoleEvent.$Properties|null);

        /** Event cycle. */
        cycle?: (proto.CycleEvent.$Properties|null);

        /** Event toggle. */
        toggle?: (proto.ToggleEvent.$Properties|null);

        /** Event crkdDrum. */
        crkdDrum?: (proto.CrkdCalibrationDataEvent.$Properties|null);

        /** Event reload. */
        reload?: (proto.ReloadEvent.$Properties|null);

        /** Event event. */
        event?: ("button"|"axis"|"pin"|"midi"|"usb"|"wii"|"ps2"|"device"|"debug"|"trigger"|"led"|"midiDebug"|"console"|"cycle"|"toggle"|"crkdDrum"|"reload");

        /**
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        static create(properties: proto.Event.$Shape): proto.Event & proto.Event.$Shape;
        static create(properties?: proto.Event.$Properties): proto.Event;

        /**
         * Encodes the specified Event message. Does not implicitly {@link proto.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.Event.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link proto.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.Event.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.Event & proto.Event.$Shape} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Event & proto.Event.$Shape;

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.Event & proto.Event.$Shape} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Event & proto.Event.$Shape;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        static fromObject(object: { [k: string]: any }): proto.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Event
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Event {

        /** Properties of an Event. */
        interface $Properties {

            /** Event button */
            button?: (proto.ButtonEvent.$Properties|null);

            /** Event axis */
            axis?: (proto.AxisEvent.$Properties|null);

            /** Event pin */
            pin?: (proto.PinDetectionEvent.$Properties|null);

            /** Event midi */
            midi?: (proto.MidiDetectionEvent.$Properties|null);

            /** Event usb */
            usb?: (proto.UsbDeviceHotplugEvent.$Properties|null);

            /** Event wii */
            wii?: (proto.WiiDeviceHotplugEvent.$Properties|null);

            /** Event ps2 */
            ps2?: (proto.PS2DeviceHotplugEvent.$Properties|null);

            /** Event device */
            device?: (proto.DeviceHotplugEvent.$Properties|null);

            /** Event debug */
            debug?: (proto.DebugEvent.$Properties|null);

            /** Event trigger */
            trigger?: (proto.ActivationTriggerEvent.$Properties|null);

            /** Event led */
            led?: (proto.LedEvent.$Properties|null);

            /** Event midiDebug */
            midiDebug?: (proto.MidiEvent.$Properties|null);

            /** Event console */
            console?: (proto.ConsoleEvent.$Properties|null);

            /** Event cycle */
            cycle?: (proto.CycleEvent.$Properties|null);

            /** Event toggle */
            toggle?: (proto.ToggleEvent.$Properties|null);

            /** Event crkdDrum */
            crkdDrum?: (proto.CrkdCalibrationDataEvent.$Properties|null);

            /** Event reload */
            reload?: (proto.ReloadEvent.$Properties|null);

            /** Event event */
            event?: ("button"|"axis"|"pin"|"midi"|"usb"|"wii"|"ps2"|"device"|"debug"|"trigger"|"led"|"midiDebug"|"console"|"cycle"|"toggle"|"crkdDrum"|"reload");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of an Event. */
        type $Shape = {
          button?: proto.ButtonEvent.$Shape|null;
          axis?: proto.AxisEvent.$Shape|null;
          pin?: proto.PinDetectionEvent.$Shape|null;
          midi?: proto.MidiDetectionEvent.$Shape|null;
          usb?: proto.UsbDeviceHotplugEvent.$Shape|null;
          wii?: proto.WiiDeviceHotplugEvent.$Shape|null;
          ps2?: proto.PS2DeviceHotplugEvent.$Shape|null;
          device?: proto.DeviceHotplugEvent.$Shape|null;
          debug?: proto.DebugEvent.$Shape|null;
          trigger?: proto.ActivationTriggerEvent.$Shape|null;
          led?: proto.LedEvent.$Shape|null;
          midiDebug?: proto.MidiEvent.$Shape|null;
          console?: proto.ConsoleEvent.$Shape|null;
          cycle?: proto.CycleEvent.$Shape|null;
          toggle?: proto.ToggleEvent.$Shape|null;
          crkdDrum?: proto.CrkdCalibrationDataEvent.$Shape|null;
          reload?: proto.ReloadEvent.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ event?: undefined; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "button"; button: proto.ButtonEvent.$Shape; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "axis"; button?: null; axis: proto.AxisEvent.$Shape; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "pin"; button?: null; axis?: null; pin: proto.PinDetectionEvent.$Shape; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "midi"; button?: null; axis?: null; pin?: null; midi: proto.MidiDetectionEvent.$Shape; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "usb"; button?: null; axis?: null; pin?: null; midi?: null; usb: proto.UsbDeviceHotplugEvent.$Shape; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "wii"; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii: proto.WiiDeviceHotplugEvent.$Shape; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "ps2"; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2: proto.PS2DeviceHotplugEvent.$Shape; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "device"; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device: proto.DeviceHotplugEvent.$Shape; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "debug"; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug: proto.DebugEvent.$Shape; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "trigger"; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger: proto.ActivationTriggerEvent.$Shape; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "led"; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led: proto.LedEvent.$Shape; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "midiDebug"; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug: proto.MidiEvent.$Shape; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "console"; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console: proto.ConsoleEvent.$Shape; cycle?: null; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "cycle"; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle: proto.CycleEvent.$Shape; toggle?: null; crkdDrum?: null; reload?: null }|{ event?: "toggle"; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle: proto.ToggleEvent.$Shape; crkdDrum?: null; reload?: null }|{ event?: "crkdDrum"; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum: proto.CrkdCalibrationDataEvent.$Shape; reload?: null }|{ event?: "reload"; button?: null; axis?: null; pin?: null; midi?: null; usb?: null; wii?: null; ps2?: null; device?: null; debug?: null; trigger?: null; led?: null; midiDebug?: null; console?: null; cycle?: null; toggle?: null; crkdDrum?: null; reload: proto.ReloadEvent.$Shape })
        );
    }

    /**
     * Properties of an EventList.
     * @deprecated Use proto.EventList.$Properties instead.
     */
    interface IEventList extends proto.EventList.$Properties {
    }

    /** Represents an EventList. */
    class EventList {

        /**
         * Constructs a new EventList.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.EventList.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** EventList event. */
        event: proto.Event.$Properties[];

        /**
         * Creates a new EventList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventList instance
         */
        static create(properties: proto.EventList.$Shape): proto.EventList & proto.EventList.$Shape;
        static create(properties?: proto.EventList.$Properties): proto.EventList;

        /**
         * Encodes the specified EventList message. Does not implicitly {@link proto.EventList.verify|verify} messages.
         * @param message EventList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.EventList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventList message, length delimited. Does not implicitly {@link proto.EventList.verify|verify} messages.
         * @param message EventList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.EventList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.EventList & proto.EventList.$Shape} EventList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.EventList & proto.EventList.$Shape;

        /**
         * Decodes an EventList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.EventList & proto.EventList.$Shape} EventList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.EventList & proto.EventList.$Shape;

        /**
         * Verifies an EventList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventList
         */
        static fromObject(object: { [k: string]: any }): proto.EventList;

        /**
         * Creates a plain object from an EventList message. Also converts values to other types if specified.
         * @param message EventList
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.EventList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventList to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for EventList
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace EventList {

        /** Properties of an EventList. */
        interface $Properties {

            /** EventList event */
            event?: (proto.Event.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an EventList. */
        type $Shape = {
          event?: proto.Event.$Shape[]|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a SetProfileCommand.
     * @deprecated Use proto.SetProfileCommand.$Properties instead.
     */
    interface ISetProfileCommand extends proto.SetProfileCommand.$Properties {
    }

    /** Represents a SetProfileCommand. */
    class SetProfileCommand {

        /**
         * Constructs a new SetProfileCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.SetProfileCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SetProfileCommand profileId. */
        profileId: number;

        /**
         * Creates a new SetProfileCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetProfileCommand instance
         */
        static create(properties: proto.SetProfileCommand.$Shape): proto.SetProfileCommand & proto.SetProfileCommand.$Shape;
        static create(properties?: proto.SetProfileCommand.$Properties): proto.SetProfileCommand;

        /**
         * Encodes the specified SetProfileCommand message. Does not implicitly {@link proto.SetProfileCommand.verify|verify} messages.
         * @param message SetProfileCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.SetProfileCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetProfileCommand message, length delimited. Does not implicitly {@link proto.SetProfileCommand.verify|verify} messages.
         * @param message SetProfileCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.SetProfileCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetProfileCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.SetProfileCommand & proto.SetProfileCommand.$Shape} SetProfileCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SetProfileCommand & proto.SetProfileCommand.$Shape;

        /**
         * Decodes a SetProfileCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.SetProfileCommand & proto.SetProfileCommand.$Shape} SetProfileCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SetProfileCommand & proto.SetProfileCommand.$Shape;

        /**
         * Verifies a SetProfileCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetProfileCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetProfileCommand
         */
        static fromObject(object: { [k: string]: any }): proto.SetProfileCommand;

        /**
         * Creates a plain object from a SetProfileCommand message. Also converts values to other types if specified.
         * @param message SetProfileCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.SetProfileCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetProfileCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SetProfileCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SetProfileCommand {

        /** Properties of a SetProfileCommand. */
        interface $Properties {

            /** SetProfileCommand profileId */
            profileId: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SetProfileCommand. */
        type $Shape = proto.SetProfileCommand.$Properties;
    }

    /**
     * Properties of a DetectPinCommand.
     * @deprecated Use proto.DetectPinCommand.$Properties instead.
     */
    interface IDetectPinCommand extends proto.DetectPinCommand.$Properties {
    }

    /** Represents a DetectPinCommand. */
    class DetectPinCommand {

        /**
         * Constructs a new DetectPinCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.DetectPinCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DetectPinCommand detectType. */
        detectType: proto.PinDetectType;

        /**
         * Creates a new DetectPinCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DetectPinCommand instance
         */
        static create(properties: proto.DetectPinCommand.$Shape): proto.DetectPinCommand & proto.DetectPinCommand.$Shape;
        static create(properties?: proto.DetectPinCommand.$Properties): proto.DetectPinCommand;

        /**
         * Encodes the specified DetectPinCommand message. Does not implicitly {@link proto.DetectPinCommand.verify|verify} messages.
         * @param message DetectPinCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.DetectPinCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DetectPinCommand message, length delimited. Does not implicitly {@link proto.DetectPinCommand.verify|verify} messages.
         * @param message DetectPinCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.DetectPinCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DetectPinCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.DetectPinCommand & proto.DetectPinCommand.$Shape} DetectPinCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DetectPinCommand & proto.DetectPinCommand.$Shape;

        /**
         * Decodes a DetectPinCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.DetectPinCommand & proto.DetectPinCommand.$Shape} DetectPinCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DetectPinCommand & proto.DetectPinCommand.$Shape;

        /**
         * Verifies a DetectPinCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DetectPinCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DetectPinCommand
         */
        static fromObject(object: { [k: string]: any }): proto.DetectPinCommand;

        /**
         * Creates a plain object from a DetectPinCommand message. Also converts values to other types if specified.
         * @param message DetectPinCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.DetectPinCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DetectPinCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DetectPinCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DetectPinCommand {

        /** Properties of a DetectPinCommand. */
        interface $Properties {

            /** DetectPinCommand detectType */
            detectType: proto.PinDetectType;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DetectPinCommand. */
        type $Shape = proto.DetectPinCommand.$Properties;
    }

    /**
     * Properties of a DetectMidiCommand.
     * @deprecated Use proto.DetectMidiCommand.$Properties instead.
     */
    interface IDetectMidiCommand extends proto.DetectMidiCommand.$Properties {
    }

    /** Represents a DetectMidiCommand. */
    class DetectMidiCommand {

        /**
         * Constructs a new DetectMidiCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.DetectMidiCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new DetectMidiCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DetectMidiCommand instance
         */
        static create(properties: proto.DetectMidiCommand.$Shape): proto.DetectMidiCommand & proto.DetectMidiCommand.$Shape;
        static create(properties?: proto.DetectMidiCommand.$Properties): proto.DetectMidiCommand;

        /**
         * Encodes the specified DetectMidiCommand message. Does not implicitly {@link proto.DetectMidiCommand.verify|verify} messages.
         * @param message DetectMidiCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.DetectMidiCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DetectMidiCommand message, length delimited. Does not implicitly {@link proto.DetectMidiCommand.verify|verify} messages.
         * @param message DetectMidiCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.DetectMidiCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DetectMidiCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.DetectMidiCommand & proto.DetectMidiCommand.$Shape} DetectMidiCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DetectMidiCommand & proto.DetectMidiCommand.$Shape;

        /**
         * Decodes a DetectMidiCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.DetectMidiCommand & proto.DetectMidiCommand.$Shape} DetectMidiCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DetectMidiCommand & proto.DetectMidiCommand.$Shape;

        /**
         * Verifies a DetectMidiCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DetectMidiCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DetectMidiCommand
         */
        static fromObject(object: { [k: string]: any }): proto.DetectMidiCommand;

        /**
         * Creates a plain object from a DetectMidiCommand message. Also converts values to other types if specified.
         * @param message DetectMidiCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.DetectMidiCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DetectMidiCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DetectMidiCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DetectMidiCommand {

        /** Properties of a DetectMidiCommand. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DetectMidiCommand. */
        type $Shape = proto.DetectMidiCommand.$Properties;
    }

    /**
     * Properties of a RebootCommand.
     * @deprecated Use proto.RebootCommand.$Properties instead.
     */
    interface IRebootCommand extends proto.RebootCommand.$Properties {
    }

    /** Represents a RebootCommand. */
    class RebootCommand {

        /**
         * Constructs a new RebootCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.RebootCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new RebootCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RebootCommand instance
         */
        static create(properties: proto.RebootCommand.$Shape): proto.RebootCommand & proto.RebootCommand.$Shape;
        static create(properties?: proto.RebootCommand.$Properties): proto.RebootCommand;

        /**
         * Encodes the specified RebootCommand message. Does not implicitly {@link proto.RebootCommand.verify|verify} messages.
         * @param message RebootCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.RebootCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RebootCommand message, length delimited. Does not implicitly {@link proto.RebootCommand.verify|verify} messages.
         * @param message RebootCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.RebootCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RebootCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.RebootCommand & proto.RebootCommand.$Shape} RebootCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RebootCommand & proto.RebootCommand.$Shape;

        /**
         * Decodes a RebootCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.RebootCommand & proto.RebootCommand.$Shape} RebootCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RebootCommand & proto.RebootCommand.$Shape;

        /**
         * Verifies a RebootCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RebootCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RebootCommand
         */
        static fromObject(object: { [k: string]: any }): proto.RebootCommand;

        /**
         * Creates a plain object from a RebootCommand message. Also converts values to other types if specified.
         * @param message RebootCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.RebootCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RebootCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RebootCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RebootCommand {

        /** Properties of a RebootCommand. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RebootCommand. */
        type $Shape = proto.RebootCommand.$Properties;
    }

    /**
     * Properties of a DisconnectCommand.
     * @deprecated Use proto.DisconnectCommand.$Properties instead.
     */
    interface IDisconnectCommand extends proto.DisconnectCommand.$Properties {
    }

    /** Represents a DisconnectCommand. */
    class DisconnectCommand {

        /**
         * Constructs a new DisconnectCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.DisconnectCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new DisconnectCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisconnectCommand instance
         */
        static create(properties: proto.DisconnectCommand.$Shape): proto.DisconnectCommand & proto.DisconnectCommand.$Shape;
        static create(properties?: proto.DisconnectCommand.$Properties): proto.DisconnectCommand;

        /**
         * Encodes the specified DisconnectCommand message. Does not implicitly {@link proto.DisconnectCommand.verify|verify} messages.
         * @param message DisconnectCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.DisconnectCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisconnectCommand message, length delimited. Does not implicitly {@link proto.DisconnectCommand.verify|verify} messages.
         * @param message DisconnectCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.DisconnectCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisconnectCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.DisconnectCommand & proto.DisconnectCommand.$Shape} DisconnectCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DisconnectCommand & proto.DisconnectCommand.$Shape;

        /**
         * Decodes a DisconnectCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.DisconnectCommand & proto.DisconnectCommand.$Shape} DisconnectCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DisconnectCommand & proto.DisconnectCommand.$Shape;

        /**
         * Verifies a DisconnectCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisconnectCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisconnectCommand
         */
        static fromObject(object: { [k: string]: any }): proto.DisconnectCommand;

        /**
         * Creates a plain object from a DisconnectCommand message. Also converts values to other types if specified.
         * @param message DisconnectCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.DisconnectCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisconnectCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DisconnectCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DisconnectCommand {

        /** Properties of a DisconnectCommand. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DisconnectCommand. */
        type $Shape = proto.DisconnectCommand.$Properties;
    }

    /**
     * Properties of a ScanCommand.
     * @deprecated Use proto.ScanCommand.$Properties instead.
     */
    interface IScanCommand extends proto.ScanCommand.$Properties {
    }

    /** Represents a ScanCommand. */
    class ScanCommand {

        /**
         * Constructs a new ScanCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ScanCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new ScanCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScanCommand instance
         */
        static create(properties: proto.ScanCommand.$Shape): proto.ScanCommand & proto.ScanCommand.$Shape;
        static create(properties?: proto.ScanCommand.$Properties): proto.ScanCommand;

        /**
         * Encodes the specified ScanCommand message. Does not implicitly {@link proto.ScanCommand.verify|verify} messages.
         * @param message ScanCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ScanCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScanCommand message, length delimited. Does not implicitly {@link proto.ScanCommand.verify|verify} messages.
         * @param message ScanCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ScanCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScanCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ScanCommand & proto.ScanCommand.$Shape} ScanCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ScanCommand & proto.ScanCommand.$Shape;

        /**
         * Decodes a ScanCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ScanCommand & proto.ScanCommand.$Shape} ScanCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ScanCommand & proto.ScanCommand.$Shape;

        /**
         * Verifies a ScanCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScanCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScanCommand
         */
        static fromObject(object: { [k: string]: any }): proto.ScanCommand;

        /**
         * Creates a plain object from a ScanCommand message. Also converts values to other types if specified.
         * @param message ScanCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ScanCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScanCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ScanCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ScanCommand {

        /** Properties of a ScanCommand. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ScanCommand. */
        type $Shape = proto.ScanCommand.$Properties;
    }

    /**
     * Properties of a CrkdCalibrationUpdateCommand.
     * @deprecated Use proto.CrkdCalibrationUpdateCommand.$Properties instead.
     */
    interface ICrkdCalibrationUpdateCommand extends proto.CrkdCalibrationUpdateCommand.$Properties {
    }

    /** Represents a CrkdCalibrationUpdateCommand. */
    class CrkdCalibrationUpdateCommand {

        /**
         * Constructs a new CrkdCalibrationUpdateCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.CrkdCalibrationUpdateCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CrkdCalibrationUpdateCommand id. */
        id: number;

        /** CrkdCalibrationUpdateCommand type. */
        type: proto.CrkdDrumCalibrationType;

        /** CrkdCalibrationUpdateCommand axisType. */
        axisType: proto.CrkdDrumAxisType;

        /** CrkdCalibrationUpdateCommand val. */
        val: number;

        /**
         * Creates a new CrkdCalibrationUpdateCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CrkdCalibrationUpdateCommand instance
         */
        static create(properties: proto.CrkdCalibrationUpdateCommand.$Shape): proto.CrkdCalibrationUpdateCommand & proto.CrkdCalibrationUpdateCommand.$Shape;
        static create(properties?: proto.CrkdCalibrationUpdateCommand.$Properties): proto.CrkdCalibrationUpdateCommand;

        /**
         * Encodes the specified CrkdCalibrationUpdateCommand message. Does not implicitly {@link proto.CrkdCalibrationUpdateCommand.verify|verify} messages.
         * @param message CrkdCalibrationUpdateCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.CrkdCalibrationUpdateCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CrkdCalibrationUpdateCommand message, length delimited. Does not implicitly {@link proto.CrkdCalibrationUpdateCommand.verify|verify} messages.
         * @param message CrkdCalibrationUpdateCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.CrkdCalibrationUpdateCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CrkdCalibrationUpdateCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.CrkdCalibrationUpdateCommand & proto.CrkdCalibrationUpdateCommand.$Shape} CrkdCalibrationUpdateCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CrkdCalibrationUpdateCommand & proto.CrkdCalibrationUpdateCommand.$Shape;

        /**
         * Decodes a CrkdCalibrationUpdateCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.CrkdCalibrationUpdateCommand & proto.CrkdCalibrationUpdateCommand.$Shape} CrkdCalibrationUpdateCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CrkdCalibrationUpdateCommand & proto.CrkdCalibrationUpdateCommand.$Shape;

        /**
         * Verifies a CrkdCalibrationUpdateCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CrkdCalibrationUpdateCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrkdCalibrationUpdateCommand
         */
        static fromObject(object: { [k: string]: any }): proto.CrkdCalibrationUpdateCommand;

        /**
         * Creates a plain object from a CrkdCalibrationUpdateCommand message. Also converts values to other types if specified.
         * @param message CrkdCalibrationUpdateCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.CrkdCalibrationUpdateCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrkdCalibrationUpdateCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CrkdCalibrationUpdateCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CrkdCalibrationUpdateCommand {

        /** Properties of a CrkdCalibrationUpdateCommand. */
        interface $Properties {

            /** CrkdCalibrationUpdateCommand id */
            id: number;

            /** CrkdCalibrationUpdateCommand type */
            type: proto.CrkdDrumCalibrationType;

            /** CrkdCalibrationUpdateCommand axisType */
            axisType: proto.CrkdDrumAxisType;

            /** CrkdCalibrationUpdateCommand val */
            val: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CrkdCalibrationUpdateCommand. */
        type $Shape = proto.CrkdCalibrationUpdateCommand.$Properties;
    }

    /**
     * Properties of a Command.
     * @deprecated Use proto.Command.$Properties instead.
     */
    interface ICommand extends proto.Command.$Properties {
    }

    /** Represents a Command. */
    class Command {

        /**
         * Constructs a new Command.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Command.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Command setProfile. */
        setProfile?: (proto.SetProfileCommand.$Properties|null);

        /** Command detectPin. */
        detectPin?: (proto.DetectPinCommand.$Properties|null);

        /** Command reboot. */
        reboot?: (proto.RebootCommand.$Properties|null);

        /** Command crkdDrum. */
        crkdDrum?: (proto.CrkdCalibrationUpdateCommand.$Properties|null);

        /** Command disconnect. */
        disconnect?: (proto.DisconnectCommand.$Properties|null);

        /** Command scan. */
        scan?: (proto.ScanCommand.$Properties|null);

        /** Command command. */
        command?: ("setProfile"|"detectPin"|"reboot"|"crkdDrum"|"disconnect"|"scan");

        /**
         * Creates a new Command instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Command instance
         */
        static create(properties: proto.Command.$Shape): proto.Command & proto.Command.$Shape;
        static create(properties?: proto.Command.$Properties): proto.Command;

        /**
         * Encodes the specified Command message. Does not implicitly {@link proto.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.Command.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link proto.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.Command.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.Command & proto.Command.$Shape} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Command & proto.Command.$Shape;

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.Command & proto.Command.$Shape} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Command & proto.Command.$Shape;

        /**
         * Verifies a Command message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Command
         */
        static fromObject(object: { [k: string]: any }): proto.Command;

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @param message Command
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Command to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Command
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Command {

        /** Properties of a Command. */
        interface $Properties {

            /** Command setProfile */
            setProfile?: (proto.SetProfileCommand.$Properties|null);

            /** Command detectPin */
            detectPin?: (proto.DetectPinCommand.$Properties|null);

            /** Command reboot */
            reboot?: (proto.RebootCommand.$Properties|null);

            /** Command crkdDrum */
            crkdDrum?: (proto.CrkdCalibrationUpdateCommand.$Properties|null);

            /** Command disconnect */
            disconnect?: (proto.DisconnectCommand.$Properties|null);

            /** Command scan */
            scan?: (proto.ScanCommand.$Properties|null);

            /** Command command */
            command?: ("setProfile"|"detectPin"|"reboot"|"crkdDrum"|"disconnect"|"scan");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a Command. */
        type $Shape = {
          setProfile?: proto.SetProfileCommand.$Shape|null;
          detectPin?: proto.DetectPinCommand.$Shape|null;
          reboot?: proto.RebootCommand.$Shape|null;
          crkdDrum?: proto.CrkdCalibrationUpdateCommand.$Shape|null;
          disconnect?: proto.DisconnectCommand.$Shape|null;
          scan?: proto.ScanCommand.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ command?: undefined; setProfile?: null; detectPin?: null; reboot?: null; crkdDrum?: null; disconnect?: null; scan?: null }|{ command?: "setProfile"; setProfile: proto.SetProfileCommand.$Shape; detectPin?: null; reboot?: null; crkdDrum?: null; disconnect?: null; scan?: null }|{ command?: "detectPin"; setProfile?: null; detectPin: proto.DetectPinCommand.$Shape; reboot?: null; crkdDrum?: null; disconnect?: null; scan?: null }|{ command?: "reboot"; setProfile?: null; detectPin?: null; reboot: proto.RebootCommand.$Shape; crkdDrum?: null; disconnect?: null; scan?: null }|{ command?: "crkdDrum"; setProfile?: null; detectPin?: null; reboot?: null; crkdDrum: proto.CrkdCalibrationUpdateCommand.$Shape; disconnect?: null; scan?: null }|{ command?: "disconnect"; setProfile?: null; detectPin?: null; reboot?: null; crkdDrum?: null; disconnect: proto.DisconnectCommand.$Shape; scan?: null }|{ command?: "scan"; setProfile?: null; detectPin?: null; reboot?: null; crkdDrum?: null; disconnect?: null; scan: proto.ScanCommand.$Shape })
        );
    }

    /**
     * Properties of a ProfileOpts.
     * @deprecated Use proto.ProfileOpts.$Properties instead.
     */
    interface IProfileOpts extends proto.ProfileOpts.$Properties {
    }

    /** Represents a ProfileOpts. */
    class ProfileOpts {

        /**
         * Constructs a new ProfileOpts.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ProfileOpts.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ProfileOpts uid. */
        uid: number;

        /** ProfileOpts faceButtonMappingMode. */
        faceButtonMappingMode: proto.FaceButtonMappingMode;

        /** ProfileOpts name. */
        name: string;

        /** ProfileOpts deviceToEmulate. */
        deviceToEmulate: proto.SubType;

        /** ProfileOpts xinputOnWindows. */
        xinputOnWindows: boolean;

        /** ProfileOpts invertYAxisHid. */
        invertYAxisHid: boolean;

        /** ProfileOpts ps4OrPs5Mode. */
        ps4OrPs5Mode: boolean;

        /** ProfileOpts supportsSlider. */
        supportsSlider: boolean;

        /** ProfileOpts cymbalGlitchFix. */
        cymbalGlitchFix: boolean;

        /**
         * Creates a new ProfileOpts instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProfileOpts instance
         */
        static create(properties: proto.ProfileOpts.$Shape): proto.ProfileOpts & proto.ProfileOpts.$Shape;
        static create(properties?: proto.ProfileOpts.$Properties): proto.ProfileOpts;

        /**
         * Encodes the specified ProfileOpts message. Does not implicitly {@link proto.ProfileOpts.verify|verify} messages.
         * @param message ProfileOpts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ProfileOpts.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProfileOpts message, length delimited. Does not implicitly {@link proto.ProfileOpts.verify|verify} messages.
         * @param message ProfileOpts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ProfileOpts.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfileOpts message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ProfileOpts & proto.ProfileOpts.$Shape} ProfileOpts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ProfileOpts & proto.ProfileOpts.$Shape;

        /**
         * Decodes a ProfileOpts message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ProfileOpts & proto.ProfileOpts.$Shape} ProfileOpts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ProfileOpts & proto.ProfileOpts.$Shape;

        /**
         * Verifies a ProfileOpts message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProfileOpts message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProfileOpts
         */
        static fromObject(object: { [k: string]: any }): proto.ProfileOpts;

        /**
         * Creates a plain object from a ProfileOpts message. Also converts values to other types if specified.
         * @param message ProfileOpts
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ProfileOpts, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProfileOpts to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ProfileOpts
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ProfileOpts {

        /** Properties of a ProfileOpts. */
        interface $Properties {

            /** ProfileOpts uid */
            uid: number;

            /** ProfileOpts faceButtonMappingMode */
            faceButtonMappingMode: proto.FaceButtonMappingMode;

            /** ProfileOpts name */
            name: string;

            /** ProfileOpts deviceToEmulate */
            deviceToEmulate: proto.SubType;

            /** ProfileOpts xinputOnWindows */
            xinputOnWindows?: (boolean|null);

            /** ProfileOpts invertYAxisHid */
            invertYAxisHid?: (boolean|null);

            /** ProfileOpts ps4OrPs5Mode */
            ps4OrPs5Mode?: (boolean|null);

            /** ProfileOpts supportsSlider */
            supportsSlider?: (boolean|null);

            /** ProfileOpts cymbalGlitchFix */
            cymbalGlitchFix?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ProfileOpts. */
        type $Shape = proto.ProfileOpts.$Properties;
    }

    /**
     * Properties of a Profile.
     * @deprecated Use proto.Profile.$Properties instead.
     */
    interface IProfile extends proto.Profile.$Properties {
    }

    /** Represents a Profile. */
    class Profile {

        /**
         * Constructs a new Profile.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Profile.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Profile opts. */
        opts: proto.ProfileOpts.$Properties;

        /** Profile assignments. */
        assignments: proto.ProfileAssignment.$Properties[];

        /** Profile mappings. */
        mappings: proto.Mapping.$Properties[];

        /** Profile leds. */
        leds: proto.Led.$Properties[];

        /**
         * Creates a new Profile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Profile instance
         */
        static create(properties: proto.Profile.$Shape): proto.Profile & proto.Profile.$Shape;
        static create(properties?: proto.Profile.$Properties): proto.Profile;

        /**
         * Encodes the specified Profile message. Does not implicitly {@link proto.Profile.verify|verify} messages.
         * @param message Profile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.Profile.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Profile message, length delimited. Does not implicitly {@link proto.Profile.verify|verify} messages.
         * @param message Profile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.Profile.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Profile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.Profile & proto.Profile.$Shape} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Profile & proto.Profile.$Shape;

        /**
         * Decodes a Profile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.Profile & proto.Profile.$Shape} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Profile & proto.Profile.$Shape;

        /**
         * Verifies a Profile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Profile
         */
        static fromObject(object: { [k: string]: any }): proto.Profile;

        /**
         * Creates a plain object from a Profile message. Also converts values to other types if specified.
         * @param message Profile
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.Profile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Profile to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Profile
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Profile {

        /** Properties of a Profile. */
        interface $Properties {

            /** Profile opts */
            opts: proto.ProfileOpts.$Properties;

            /** Profile assignments */
            assignments?: (proto.ProfileAssignment.$Properties[]|null);

            /** Profile mappings */
            mappings?: (proto.Mapping.$Properties[]|null);

            /** Profile leds */
            leds?: (proto.Led.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Profile. */
        type $Shape = {
          opts: proto.ProfileOpts.$Shape;
          assignments?: proto.ProfileAssignment.$Shape[]|null;
          mappings?: proto.Mapping.$Shape[]|null;
          leds?: proto.Led.$Shape[]|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of an InputLedMapping.
     * @deprecated Use proto.InputLedMapping.$Properties instead.
     */
    interface IInputLedMapping extends proto.InputLedMapping.$Properties {
    }

    /** Represents an InputLedMapping. */
    class InputLedMapping {

        /**
         * Constructs a new InputLedMapping.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.InputLedMapping.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** InputLedMapping input. */
        input: proto.Input.$Properties;

        /** InputLedMapping min. */
        min: number;

        /** InputLedMapping max. */
        max: number;

        /** InputLedMapping pattern. */
        pattern: proto.ReactiveRgbPatternType;

        /**
         * Creates a new InputLedMapping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InputLedMapping instance
         */
        static create(properties: proto.InputLedMapping.$Shape): proto.InputLedMapping & proto.InputLedMapping.$Shape;
        static create(properties?: proto.InputLedMapping.$Properties): proto.InputLedMapping;

        /**
         * Encodes the specified InputLedMapping message. Does not implicitly {@link proto.InputLedMapping.verify|verify} messages.
         * @param message InputLedMapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.InputLedMapping.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InputLedMapping message, length delimited. Does not implicitly {@link proto.InputLedMapping.verify|verify} messages.
         * @param message InputLedMapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.InputLedMapping.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InputLedMapping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.InputLedMapping & proto.InputLedMapping.$Shape} InputLedMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.InputLedMapping & proto.InputLedMapping.$Shape;

        /**
         * Decodes an InputLedMapping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.InputLedMapping & proto.InputLedMapping.$Shape} InputLedMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.InputLedMapping & proto.InputLedMapping.$Shape;

        /**
         * Verifies an InputLedMapping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InputLedMapping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InputLedMapping
         */
        static fromObject(object: { [k: string]: any }): proto.InputLedMapping;

        /**
         * Creates a plain object from an InputLedMapping message. Also converts values to other types if specified.
         * @param message InputLedMapping
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.InputLedMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InputLedMapping to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for InputLedMapping
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace InputLedMapping {

        /** Properties of an InputLedMapping. */
        interface $Properties {

            /** InputLedMapping input */
            input: proto.Input.$Properties;

            /** InputLedMapping min */
            min?: (number|null);

            /** InputLedMapping max */
            max?: (number|null);

            /** InputLedMapping pattern */
            pattern?: (proto.ReactiveRgbPatternType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an InputLedMapping. */
        type $Shape = {
          input: proto.Input.$Shape;
          min?: number|null;
          max?: number|null;
          pattern?: proto.ReactiveRgbPatternType|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a PatternLedMapping.
     * @deprecated Use proto.PatternLedMapping.$Properties instead.
     */
    interface IPatternLedMapping extends proto.PatternLedMapping.$Properties {
    }

    /** Represents a PatternLedMapping. */
    class PatternLedMapping {

        /**
         * Constructs a new PatternLedMapping.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.PatternLedMapping.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PatternLedMapping pattern. */
        pattern: proto.RgbPatternType;

        /** PatternLedMapping speed. */
        speed: number;

        /** PatternLedMapping brightness. */
        brightness: number;

        /**
         * Creates a new PatternLedMapping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PatternLedMapping instance
         */
        static create(properties: proto.PatternLedMapping.$Shape): proto.PatternLedMapping & proto.PatternLedMapping.$Shape;
        static create(properties?: proto.PatternLedMapping.$Properties): proto.PatternLedMapping;

        /**
         * Encodes the specified PatternLedMapping message. Does not implicitly {@link proto.PatternLedMapping.verify|verify} messages.
         * @param message PatternLedMapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.PatternLedMapping.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PatternLedMapping message, length delimited. Does not implicitly {@link proto.PatternLedMapping.verify|verify} messages.
         * @param message PatternLedMapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.PatternLedMapping.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PatternLedMapping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.PatternLedMapping & proto.PatternLedMapping.$Shape} PatternLedMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PatternLedMapping & proto.PatternLedMapping.$Shape;

        /**
         * Decodes a PatternLedMapping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.PatternLedMapping & proto.PatternLedMapping.$Shape} PatternLedMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PatternLedMapping & proto.PatternLedMapping.$Shape;

        /**
         * Verifies a PatternLedMapping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PatternLedMapping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PatternLedMapping
         */
        static fromObject(object: { [k: string]: any }): proto.PatternLedMapping;

        /**
         * Creates a plain object from a PatternLedMapping message. Also converts values to other types if specified.
         * @param message PatternLedMapping
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.PatternLedMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PatternLedMapping to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PatternLedMapping
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PatternLedMapping {

        /** Properties of a PatternLedMapping. */
        interface $Properties {

            /** PatternLedMapping pattern */
            pattern: proto.RgbPatternType;

            /** PatternLedMapping speed */
            speed: number;

            /** PatternLedMapping brightness */
            brightness: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PatternLedMapping. */
        type $Shape = proto.PatternLedMapping.$Properties;
    }

    /**
     * Properties of a StaticLedMapping.
     * @deprecated Use proto.StaticLedMapping.$Properties instead.
     */
    interface IStaticLedMapping extends proto.StaticLedMapping.$Properties {
    }

    /** Represents a StaticLedMapping. */
    class StaticLedMapping {

        /**
         * Constructs a new StaticLedMapping.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.StaticLedMapping.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new StaticLedMapping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StaticLedMapping instance
         */
        static create(properties: proto.StaticLedMapping.$Shape): proto.StaticLedMapping & proto.StaticLedMapping.$Shape;
        static create(properties?: proto.StaticLedMapping.$Properties): proto.StaticLedMapping;

        /**
         * Encodes the specified StaticLedMapping message. Does not implicitly {@link proto.StaticLedMapping.verify|verify} messages.
         * @param message StaticLedMapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.StaticLedMapping.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StaticLedMapping message, length delimited. Does not implicitly {@link proto.StaticLedMapping.verify|verify} messages.
         * @param message StaticLedMapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.StaticLedMapping.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StaticLedMapping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.StaticLedMapping & proto.StaticLedMapping.$Shape} StaticLedMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.StaticLedMapping & proto.StaticLedMapping.$Shape;

        /**
         * Decodes a StaticLedMapping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.StaticLedMapping & proto.StaticLedMapping.$Shape} StaticLedMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.StaticLedMapping & proto.StaticLedMapping.$Shape;

        /**
         * Verifies a StaticLedMapping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StaticLedMapping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StaticLedMapping
         */
        static fromObject(object: { [k: string]: any }): proto.StaticLedMapping;

        /**
         * Creates a plain object from a StaticLedMapping message. Also converts values to other types if specified.
         * @param message StaticLedMapping
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.StaticLedMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StaticLedMapping to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for StaticLedMapping
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StaticLedMapping {

        /** Properties of a StaticLedMapping. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StaticLedMapping. */
        type $Shape = proto.StaticLedMapping.$Properties;
    }

    /**
     * Properties of a RGBLedDevice.
     * @deprecated Use proto.RGBLedDevice.$Properties instead.
     */
    interface IRGBLedDevice extends proto.RGBLedDevice.$Properties {
    }

    /** Represents a RGBLedDevice. */
    class RGBLedDevice {

        /**
         * Constructs a new RGBLedDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.RGBLedDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RGBLedDevice deviceId. */
        deviceId: number;

        /** RGBLedDevice startR. */
        startR: number;

        /** RGBLedDevice startG. */
        startG: number;

        /** RGBLedDevice startB. */
        startB: number;

        /** RGBLedDevice startW. */
        startW: number;

        /** RGBLedDevice endR. */
        endR: number;

        /** RGBLedDevice endG. */
        endG: number;

        /** RGBLedDevice endB. */
        endB: number;

        /** RGBLedDevice endW. */
        endW: number;

        /** RGBLedDevice activeLed. */
        activeLed: number[];

        /** RGBLedDevice hasStart. */
        hasStart: boolean;

        /**
         * Creates a new RGBLedDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RGBLedDevice instance
         */
        static create(properties: proto.RGBLedDevice.$Shape): proto.RGBLedDevice & proto.RGBLedDevice.$Shape;
        static create(properties?: proto.RGBLedDevice.$Properties): proto.RGBLedDevice;

        /**
         * Encodes the specified RGBLedDevice message. Does not implicitly {@link proto.RGBLedDevice.verify|verify} messages.
         * @param message RGBLedDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.RGBLedDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RGBLedDevice message, length delimited. Does not implicitly {@link proto.RGBLedDevice.verify|verify} messages.
         * @param message RGBLedDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.RGBLedDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RGBLedDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.RGBLedDevice & proto.RGBLedDevice.$Shape} RGBLedDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RGBLedDevice & proto.RGBLedDevice.$Shape;

        /**
         * Decodes a RGBLedDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.RGBLedDevice & proto.RGBLedDevice.$Shape} RGBLedDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RGBLedDevice & proto.RGBLedDevice.$Shape;

        /**
         * Verifies a RGBLedDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RGBLedDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RGBLedDevice
         */
        static fromObject(object: { [k: string]: any }): proto.RGBLedDevice;

        /**
         * Creates a plain object from a RGBLedDevice message. Also converts values to other types if specified.
         * @param message RGBLedDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.RGBLedDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RGBLedDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RGBLedDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RGBLedDevice {

        /** Properties of a RGBLedDevice. */
        interface $Properties {

            /** RGBLedDevice deviceId */
            deviceId: number;

            /** RGBLedDevice startR */
            startR: number;

            /** RGBLedDevice startG */
            startG: number;

            /** RGBLedDevice startB */
            startB: number;

            /** RGBLedDevice startW */
            startW: number;

            /** RGBLedDevice endR */
            endR: number;

            /** RGBLedDevice endG */
            endG: number;

            /** RGBLedDevice endB */
            endB: number;

            /** RGBLedDevice endW */
            endW: number;

            /** RGBLedDevice activeLed */
            activeLed?: (number[]|null);

            /** RGBLedDevice hasStart */
            hasStart: boolean;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RGBLedDevice. */
        type $Shape = proto.RGBLedDevice.$Properties;
    }

    /**
     * Properties of a DMXLedDevice.
     * @deprecated Use proto.DMXLedDevice.$Properties instead.
     */
    interface IDMXLedDevice extends proto.DMXLedDevice.$Properties {
    }

    /** Represents a DMXLedDevice. */
    class DMXLedDevice {

        /**
         * Constructs a new DMXLedDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.DMXLedDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DMXLedDevice deviceId. */
        deviceId: number;

        /** DMXLedDevice channel. */
        channel: number;

        /**
         * Creates a new DMXLedDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DMXLedDevice instance
         */
        static create(properties: proto.DMXLedDevice.$Shape): proto.DMXLedDevice & proto.DMXLedDevice.$Shape;
        static create(properties?: proto.DMXLedDevice.$Properties): proto.DMXLedDevice;

        /**
         * Encodes the specified DMXLedDevice message. Does not implicitly {@link proto.DMXLedDevice.verify|verify} messages.
         * @param message DMXLedDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.DMXLedDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DMXLedDevice message, length delimited. Does not implicitly {@link proto.DMXLedDevice.verify|verify} messages.
         * @param message DMXLedDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.DMXLedDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DMXLedDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.DMXLedDevice & proto.DMXLedDevice.$Shape} DMXLedDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DMXLedDevice & proto.DMXLedDevice.$Shape;

        /**
         * Decodes a DMXLedDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.DMXLedDevice & proto.DMXLedDevice.$Shape} DMXLedDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DMXLedDevice & proto.DMXLedDevice.$Shape;

        /**
         * Verifies a DMXLedDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DMXLedDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DMXLedDevice
         */
        static fromObject(object: { [k: string]: any }): proto.DMXLedDevice;

        /**
         * Creates a plain object from a DMXLedDevice message. Also converts values to other types if specified.
         * @param message DMXLedDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.DMXLedDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DMXLedDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DMXLedDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DMXLedDevice {

        /** Properties of a DMXLedDevice. */
        interface $Properties {

            /** DMXLedDevice deviceId */
            deviceId: number;

            /** DMXLedDevice channel */
            channel: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DMXLedDevice. */
        type $Shape = proto.DMXLedDevice.$Properties;
    }

    /**
     * Properties of a GpioLedDevice.
     * @deprecated Use proto.GpioLedDevice.$Properties instead.
     */
    interface IGpioLedDevice extends proto.GpioLedDevice.$Properties {
    }

    /** Represents a GpioLedDevice. */
    class GpioLedDevice {

        /**
         * Constructs a new GpioLedDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.GpioLedDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GpioLedDevice pin. */
        pin: number;

        /** GpioLedDevice analog. */
        analog: boolean;

        /**
         * Creates a new GpioLedDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GpioLedDevice instance
         */
        static create(properties: proto.GpioLedDevice.$Shape): proto.GpioLedDevice & proto.GpioLedDevice.$Shape;
        static create(properties?: proto.GpioLedDevice.$Properties): proto.GpioLedDevice;

        /**
         * Encodes the specified GpioLedDevice message. Does not implicitly {@link proto.GpioLedDevice.verify|verify} messages.
         * @param message GpioLedDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.GpioLedDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GpioLedDevice message, length delimited. Does not implicitly {@link proto.GpioLedDevice.verify|verify} messages.
         * @param message GpioLedDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.GpioLedDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GpioLedDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.GpioLedDevice & proto.GpioLedDevice.$Shape} GpioLedDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GpioLedDevice & proto.GpioLedDevice.$Shape;

        /**
         * Decodes a GpioLedDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.GpioLedDevice & proto.GpioLedDevice.$Shape} GpioLedDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GpioLedDevice & proto.GpioLedDevice.$Shape;

        /**
         * Verifies a GpioLedDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GpioLedDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GpioLedDevice
         */
        static fromObject(object: { [k: string]: any }): proto.GpioLedDevice;

        /**
         * Creates a plain object from a GpioLedDevice message. Also converts values to other types if specified.
         * @param message GpioLedDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.GpioLedDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GpioLedDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GpioLedDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GpioLedDevice {

        /** Properties of a GpioLedDevice. */
        interface $Properties {

            /** GpioLedDevice pin */
            pin: number;

            /** GpioLedDevice analog */
            analog: boolean;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GpioLedDevice. */
        type $Shape = proto.GpioLedDevice.$Properties;
    }

    /**
     * Properties of a VTechGuitarIOExpanderLedDevice.
     * @deprecated Use proto.VTechGuitarIOExpanderLedDevice.$Properties instead.
     */
    interface IVTechGuitarIOExpanderLedDevice extends proto.VTechGuitarIOExpanderLedDevice.$Properties {
    }

    /** Represents a VTechGuitarIOExpanderLedDevice. */
    class VTechGuitarIOExpanderLedDevice {

        /**
         * Constructs a new VTechGuitarIOExpanderLedDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.VTechGuitarIOExpanderLedDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VTechGuitarIOExpanderLedDevice deviceId. */
        deviceId: number;

        /** VTechGuitarIOExpanderLedDevice activeLed. */
        activeLed: number;

        /**
         * Creates a new VTechGuitarIOExpanderLedDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VTechGuitarIOExpanderLedDevice instance
         */
        static create(properties: proto.VTechGuitarIOExpanderLedDevice.$Shape): proto.VTechGuitarIOExpanderLedDevice & proto.VTechGuitarIOExpanderLedDevice.$Shape;
        static create(properties?: proto.VTechGuitarIOExpanderLedDevice.$Properties): proto.VTechGuitarIOExpanderLedDevice;

        /**
         * Encodes the specified VTechGuitarIOExpanderLedDevice message. Does not implicitly {@link proto.VTechGuitarIOExpanderLedDevice.verify|verify} messages.
         * @param message VTechGuitarIOExpanderLedDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.VTechGuitarIOExpanderLedDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VTechGuitarIOExpanderLedDevice message, length delimited. Does not implicitly {@link proto.VTechGuitarIOExpanderLedDevice.verify|verify} messages.
         * @param message VTechGuitarIOExpanderLedDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.VTechGuitarIOExpanderLedDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VTechGuitarIOExpanderLedDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.VTechGuitarIOExpanderLedDevice & proto.VTechGuitarIOExpanderLedDevice.$Shape} VTechGuitarIOExpanderLedDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.VTechGuitarIOExpanderLedDevice & proto.VTechGuitarIOExpanderLedDevice.$Shape;

        /**
         * Decodes a VTechGuitarIOExpanderLedDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.VTechGuitarIOExpanderLedDevice & proto.VTechGuitarIOExpanderLedDevice.$Shape} VTechGuitarIOExpanderLedDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.VTechGuitarIOExpanderLedDevice & proto.VTechGuitarIOExpanderLedDevice.$Shape;

        /**
         * Verifies a VTechGuitarIOExpanderLedDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VTechGuitarIOExpanderLedDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VTechGuitarIOExpanderLedDevice
         */
        static fromObject(object: { [k: string]: any }): proto.VTechGuitarIOExpanderLedDevice;

        /**
         * Creates a plain object from a VTechGuitarIOExpanderLedDevice message. Also converts values to other types if specified.
         * @param message VTechGuitarIOExpanderLedDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.VTechGuitarIOExpanderLedDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VTechGuitarIOExpanderLedDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VTechGuitarIOExpanderLedDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VTechGuitarIOExpanderLedDevice {

        /** Properties of a VTechGuitarIOExpanderLedDevice. */
        interface $Properties {

            /** VTechGuitarIOExpanderLedDevice deviceId */
            deviceId: number;

            /** VTechGuitarIOExpanderLedDevice activeLed */
            activeLed: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VTechGuitarIOExpanderLedDevice. */
        type $Shape = proto.VTechGuitarIOExpanderLedDevice.$Properties;
    }

    /**
     * Properties of a STP16CPCLedDevice.
     * @deprecated Use proto.STP16CPCLedDevice.$Properties instead.
     */
    interface ISTP16CPCLedDevice extends proto.STP16CPCLedDevice.$Properties {
    }

    /** Represents a STP16CPCLedDevice. */
    class STP16CPCLedDevice {

        /**
         * Constructs a new STP16CPCLedDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.STP16CPCLedDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** STP16CPCLedDevice deviceId. */
        deviceId: number;

        /** STP16CPCLedDevice activeLed. */
        activeLed: number[];

        /**
         * Creates a new STP16CPCLedDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns STP16CPCLedDevice instance
         */
        static create(properties: proto.STP16CPCLedDevice.$Shape): proto.STP16CPCLedDevice & proto.STP16CPCLedDevice.$Shape;
        static create(properties?: proto.STP16CPCLedDevice.$Properties): proto.STP16CPCLedDevice;

        /**
         * Encodes the specified STP16CPCLedDevice message. Does not implicitly {@link proto.STP16CPCLedDevice.verify|verify} messages.
         * @param message STP16CPCLedDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.STP16CPCLedDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified STP16CPCLedDevice message, length delimited. Does not implicitly {@link proto.STP16CPCLedDevice.verify|verify} messages.
         * @param message STP16CPCLedDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.STP16CPCLedDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a STP16CPCLedDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.STP16CPCLedDevice & proto.STP16CPCLedDevice.$Shape} STP16CPCLedDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.STP16CPCLedDevice & proto.STP16CPCLedDevice.$Shape;

        /**
         * Decodes a STP16CPCLedDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.STP16CPCLedDevice & proto.STP16CPCLedDevice.$Shape} STP16CPCLedDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.STP16CPCLedDevice & proto.STP16CPCLedDevice.$Shape;

        /**
         * Verifies a STP16CPCLedDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a STP16CPCLedDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns STP16CPCLedDevice
         */
        static fromObject(object: { [k: string]: any }): proto.STP16CPCLedDevice;

        /**
         * Creates a plain object from a STP16CPCLedDevice message. Also converts values to other types if specified.
         * @param message STP16CPCLedDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.STP16CPCLedDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this STP16CPCLedDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for STP16CPCLedDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace STP16CPCLedDevice {

        /** Properties of a STP16CPCLedDevice. */
        interface $Properties {

            /** STP16CPCLedDevice deviceId */
            deviceId: number;

            /** STP16CPCLedDevice activeLed */
            activeLed?: (number[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a STP16CPCLedDevice. */
        type $Shape = proto.STP16CPCLedDevice.$Properties;
    }

    /**
     * Properties of a LedDevice.
     * @deprecated Use proto.LedDevice.$Properties instead.
     */
    interface ILedDevice extends proto.LedDevice.$Properties {
    }

    /** Represents a LedDevice. */
    class LedDevice {

        /**
         * Constructs a new LedDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.LedDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LedDevice rgb. */
        rgb?: (proto.RGBLedDevice.$Properties|null);

        /** LedDevice gpio. */
        gpio?: (proto.GpioLedDevice.$Properties|null);

        /** LedDevice stp16. */
        stp16?: (proto.STP16CPCLedDevice.$Properties|null);

        /** LedDevice vtechExpander. */
        vtechExpander?: (proto.VTechGuitarIOExpanderLedDevice.$Properties|null);

        /** LedDevice dmx. */
        dmx?: (proto.DMXLedDevice.$Properties|null);

        /** LedDevice device. */
        device?: ("rgb"|"gpio"|"stp16"|"vtechExpander"|"dmx");

        /**
         * Creates a new LedDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LedDevice instance
         */
        static create(properties: proto.LedDevice.$Shape): proto.LedDevice & proto.LedDevice.$Shape;
        static create(properties?: proto.LedDevice.$Properties): proto.LedDevice;

        /**
         * Encodes the specified LedDevice message. Does not implicitly {@link proto.LedDevice.verify|verify} messages.
         * @param message LedDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.LedDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LedDevice message, length delimited. Does not implicitly {@link proto.LedDevice.verify|verify} messages.
         * @param message LedDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.LedDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LedDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.LedDevice & proto.LedDevice.$Shape} LedDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LedDevice & proto.LedDevice.$Shape;

        /**
         * Decodes a LedDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.LedDevice & proto.LedDevice.$Shape} LedDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LedDevice & proto.LedDevice.$Shape;

        /**
         * Verifies a LedDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LedDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LedDevice
         */
        static fromObject(object: { [k: string]: any }): proto.LedDevice;

        /**
         * Creates a plain object from a LedDevice message. Also converts values to other types if specified.
         * @param message LedDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.LedDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LedDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LedDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LedDevice {

        /** Properties of a LedDevice. */
        interface $Properties {

            /** LedDevice rgb */
            rgb?: (proto.RGBLedDevice.$Properties|null);

            /** LedDevice gpio */
            gpio?: (proto.GpioLedDevice.$Properties|null);

            /** LedDevice stp16 */
            stp16?: (proto.STP16CPCLedDevice.$Properties|null);

            /** LedDevice vtechExpander */
            vtechExpander?: (proto.VTechGuitarIOExpanderLedDevice.$Properties|null);

            /** LedDevice dmx */
            dmx?: (proto.DMXLedDevice.$Properties|null);

            /** LedDevice device */
            device?: ("rgb"|"gpio"|"stp16"|"vtechExpander"|"dmx");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a LedDevice. */
        type $Shape = {
          rgb?: proto.RGBLedDevice.$Shape|null;
          gpio?: proto.GpioLedDevice.$Shape|null;
          stp16?: proto.STP16CPCLedDevice.$Shape|null;
          vtechExpander?: proto.VTechGuitarIOExpanderLedDevice.$Shape|null;
          dmx?: proto.DMXLedDevice.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ device?: undefined; rgb?: null; gpio?: null; stp16?: null; vtechExpander?: null; dmx?: null }|{ device?: "rgb"; rgb: proto.RGBLedDevice.$Shape; gpio?: null; stp16?: null; vtechExpander?: null; dmx?: null }|{ device?: "gpio"; rgb?: null; gpio: proto.GpioLedDevice.$Shape; stp16?: null; vtechExpander?: null; dmx?: null }|{ device?: "stp16"; rgb?: null; gpio?: null; stp16: proto.STP16CPCLedDevice.$Shape; vtechExpander?: null; dmx?: null }|{ device?: "vtechExpander"; rgb?: null; gpio?: null; stp16?: null; vtechExpander: proto.VTechGuitarIOExpanderLedDevice.$Shape; dmx?: null }|{ device?: "dmx"; rgb?: null; gpio?: null; stp16?: null; vtechExpander?: null; dmx: proto.DMXLedDevice.$Shape })
        );
    }

    /**
     * Properties of a LedMapping.
     * @deprecated Use proto.LedMapping.$Properties instead.
     */
    interface ILedMapping extends proto.LedMapping.$Properties {
    }

    /** Represents a LedMapping. */
    class LedMapping {

        /**
         * Constructs a new LedMapping.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.LedMapping.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LedMapping inputMapping. */
        inputMapping?: (proto.InputLedMapping.$Properties|null);

        /** LedMapping patternMapping. */
        patternMapping?: (proto.PatternLedMapping.$Properties|null);

        /** LedMapping staticMapping. */
        staticMapping?: (proto.StaticLedMapping.$Properties|null);

        /** LedMapping led. */
        led?: ("inputMapping"|"patternMapping"|"staticMapping");

        /**
         * Creates a new LedMapping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LedMapping instance
         */
        static create(properties: proto.LedMapping.$Shape): proto.LedMapping & proto.LedMapping.$Shape;
        static create(properties?: proto.LedMapping.$Properties): proto.LedMapping;

        /**
         * Encodes the specified LedMapping message. Does not implicitly {@link proto.LedMapping.verify|verify} messages.
         * @param message LedMapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.LedMapping.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LedMapping message, length delimited. Does not implicitly {@link proto.LedMapping.verify|verify} messages.
         * @param message LedMapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.LedMapping.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LedMapping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.LedMapping & proto.LedMapping.$Shape} LedMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LedMapping & proto.LedMapping.$Shape;

        /**
         * Decodes a LedMapping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.LedMapping & proto.LedMapping.$Shape} LedMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LedMapping & proto.LedMapping.$Shape;

        /**
         * Verifies a LedMapping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LedMapping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LedMapping
         */
        static fromObject(object: { [k: string]: any }): proto.LedMapping;

        /**
         * Creates a plain object from a LedMapping message. Also converts values to other types if specified.
         * @param message LedMapping
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.LedMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LedMapping to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LedMapping
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LedMapping {

        /** Properties of a LedMapping. */
        interface $Properties {

            /** LedMapping inputMapping */
            inputMapping?: (proto.InputLedMapping.$Properties|null);

            /** LedMapping patternMapping */
            patternMapping?: (proto.PatternLedMapping.$Properties|null);

            /** LedMapping staticMapping */
            staticMapping?: (proto.StaticLedMapping.$Properties|null);

            /** LedMapping led */
            led?: ("inputMapping"|"patternMapping"|"staticMapping");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a LedMapping. */
        type $Shape = {
          inputMapping?: proto.InputLedMapping.$Shape|null;
          patternMapping?: proto.PatternLedMapping.$Shape|null;
          staticMapping?: proto.StaticLedMapping.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ led?: undefined; inputMapping?: null; patternMapping?: null; staticMapping?: null }|{ led?: "inputMapping"; inputMapping: proto.InputLedMapping.$Shape; patternMapping?: null; staticMapping?: null }|{ led?: "patternMapping"; inputMapping?: null; patternMapping: proto.PatternLedMapping.$Shape; staticMapping?: null }|{ led?: "staticMapping"; inputMapping?: null; patternMapping?: null; staticMapping: proto.StaticLedMapping.$Shape })
        );
    }

    /**
     * Properties of a Led.
     * @deprecated Use proto.Led.$Properties instead.
     */
    interface ILed extends proto.Led.$Properties {
    }

    /** Represents a Led. */
    class Led {

        /**
         * Constructs a new Led.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Led.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Led device. */
        device: proto.LedDevice.$Properties;

        /** Led mapping. */
        mapping: proto.LedMapping.$Properties;

        /**
         * Creates a new Led instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Led instance
         */
        static create(properties: proto.Led.$Shape): proto.Led & proto.Led.$Shape;
        static create(properties?: proto.Led.$Properties): proto.Led;

        /**
         * Encodes the specified Led message. Does not implicitly {@link proto.Led.verify|verify} messages.
         * @param message Led message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.Led.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Led message, length delimited. Does not implicitly {@link proto.Led.verify|verify} messages.
         * @param message Led message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.Led.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Led message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.Led & proto.Led.$Shape} Led
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Led & proto.Led.$Shape;

        /**
         * Decodes a Led message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.Led & proto.Led.$Shape} Led
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Led & proto.Led.$Shape;

        /**
         * Verifies a Led message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Led message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Led
         */
        static fromObject(object: { [k: string]: any }): proto.Led;

        /**
         * Creates a plain object from a Led message. Also converts values to other types if specified.
         * @param message Led
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.Led, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Led to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Led
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Led {

        /** Properties of a Led. */
        interface $Properties {

            /** Led device */
            device: proto.LedDevice.$Properties;

            /** Led mapping */
            mapping: proto.LedMapping.$Properties;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Led. */
        type $Shape = {
          device: proto.LedDevice.$Shape;
          mapping: proto.LedMapping.$Shape;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a SpecificUsbDevice.
     * @deprecated Use proto.SpecificUsbDevice.$Properties instead.
     */
    interface ISpecificUsbDevice extends proto.SpecificUsbDevice.$Properties {
    }

    /** Represents a SpecificUsbDevice. */
    class SpecificUsbDevice {

        /**
         * Constructs a new SpecificUsbDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.SpecificUsbDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SpecificUsbDevice vid. */
        vid: number;

        /** SpecificUsbDevice pid. */
        pid: number;

        /**
         * Creates a new SpecificUsbDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpecificUsbDevice instance
         */
        static create(properties: proto.SpecificUsbDevice.$Shape): proto.SpecificUsbDevice & proto.SpecificUsbDevice.$Shape;
        static create(properties?: proto.SpecificUsbDevice.$Properties): proto.SpecificUsbDevice;

        /**
         * Encodes the specified SpecificUsbDevice message. Does not implicitly {@link proto.SpecificUsbDevice.verify|verify} messages.
         * @param message SpecificUsbDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.SpecificUsbDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpecificUsbDevice message, length delimited. Does not implicitly {@link proto.SpecificUsbDevice.verify|verify} messages.
         * @param message SpecificUsbDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.SpecificUsbDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpecificUsbDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.SpecificUsbDevice & proto.SpecificUsbDevice.$Shape} SpecificUsbDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SpecificUsbDevice & proto.SpecificUsbDevice.$Shape;

        /**
         * Decodes a SpecificUsbDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.SpecificUsbDevice & proto.SpecificUsbDevice.$Shape} SpecificUsbDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SpecificUsbDevice & proto.SpecificUsbDevice.$Shape;

        /**
         * Verifies a SpecificUsbDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpecificUsbDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpecificUsbDevice
         */
        static fromObject(object: { [k: string]: any }): proto.SpecificUsbDevice;

        /**
         * Creates a plain object from a SpecificUsbDevice message. Also converts values to other types if specified.
         * @param message SpecificUsbDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.SpecificUsbDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpecificUsbDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SpecificUsbDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SpecificUsbDevice {

        /** Properties of a SpecificUsbDevice. */
        interface $Properties {

            /** SpecificUsbDevice vid */
            vid: number;

            /** SpecificUsbDevice pid */
            pid: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SpecificUsbDevice. */
        type $Shape = proto.SpecificUsbDevice.$Properties;
    }

    /**
     * Properties of a UsbDeviceAssignment.
     * @deprecated Use proto.UsbDeviceAssignment.$Properties instead.
     */
    interface IUsbDeviceAssignment extends proto.UsbDeviceAssignment.$Properties {
    }

    /** Represents a UsbDeviceAssignment. */
    class UsbDeviceAssignment {

        /**
         * Constructs a new UsbDeviceAssignment.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.UsbDeviceAssignment.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UsbDeviceAssignment consoleType. */
        consoleType: proto.ConsoleType;

        /** UsbDeviceAssignment forcedType. */
        forcedType: proto.ConsoleMode;

        /**
         * Creates a new UsbDeviceAssignment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UsbDeviceAssignment instance
         */
        static create(properties: proto.UsbDeviceAssignment.$Shape): proto.UsbDeviceAssignment & proto.UsbDeviceAssignment.$Shape;
        static create(properties?: proto.UsbDeviceAssignment.$Properties): proto.UsbDeviceAssignment;

        /**
         * Encodes the specified UsbDeviceAssignment message. Does not implicitly {@link proto.UsbDeviceAssignment.verify|verify} messages.
         * @param message UsbDeviceAssignment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.UsbDeviceAssignment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UsbDeviceAssignment message, length delimited. Does not implicitly {@link proto.UsbDeviceAssignment.verify|verify} messages.
         * @param message UsbDeviceAssignment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.UsbDeviceAssignment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UsbDeviceAssignment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.UsbDeviceAssignment & proto.UsbDeviceAssignment.$Shape} UsbDeviceAssignment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UsbDeviceAssignment & proto.UsbDeviceAssignment.$Shape;

        /**
         * Decodes a UsbDeviceAssignment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.UsbDeviceAssignment & proto.UsbDeviceAssignment.$Shape} UsbDeviceAssignment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UsbDeviceAssignment & proto.UsbDeviceAssignment.$Shape;

        /**
         * Verifies a UsbDeviceAssignment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UsbDeviceAssignment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UsbDeviceAssignment
         */
        static fromObject(object: { [k: string]: any }): proto.UsbDeviceAssignment;

        /**
         * Creates a plain object from a UsbDeviceAssignment message. Also converts values to other types if specified.
         * @param message UsbDeviceAssignment
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.UsbDeviceAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UsbDeviceAssignment to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UsbDeviceAssignment
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UsbDeviceAssignment {

        /** Properties of a UsbDeviceAssignment. */
        interface $Properties {

            /** UsbDeviceAssignment consoleType */
            consoleType?: (proto.ConsoleType|null);

            /** UsbDeviceAssignment forcedType */
            forcedType?: (proto.ConsoleMode|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UsbDeviceAssignment. */
        type $Shape = proto.UsbDeviceAssignment.$Properties;
    }

    /**
     * Properties of a WiimoteAssignment.
     * @deprecated Use proto.WiimoteAssignment.$Properties instead.
     */
    interface IWiimoteAssignment extends proto.WiimoteAssignment.$Properties {
    }

    /** Represents a WiimoteAssignment. */
    class WiimoteAssignment {

        /**
         * Constructs a new WiimoteAssignment.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.WiimoteAssignment.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new WiimoteAssignment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiimoteAssignment instance
         */
        static create(properties: proto.WiimoteAssignment.$Shape): proto.WiimoteAssignment & proto.WiimoteAssignment.$Shape;
        static create(properties?: proto.WiimoteAssignment.$Properties): proto.WiimoteAssignment;

        /**
         * Encodes the specified WiimoteAssignment message. Does not implicitly {@link proto.WiimoteAssignment.verify|verify} messages.
         * @param message WiimoteAssignment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.WiimoteAssignment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiimoteAssignment message, length delimited. Does not implicitly {@link proto.WiimoteAssignment.verify|verify} messages.
         * @param message WiimoteAssignment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.WiimoteAssignment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiimoteAssignment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.WiimoteAssignment & proto.WiimoteAssignment.$Shape} WiimoteAssignment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WiimoteAssignment & proto.WiimoteAssignment.$Shape;

        /**
         * Decodes a WiimoteAssignment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.WiimoteAssignment & proto.WiimoteAssignment.$Shape} WiimoteAssignment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WiimoteAssignment & proto.WiimoteAssignment.$Shape;

        /**
         * Verifies a WiimoteAssignment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiimoteAssignment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiimoteAssignment
         */
        static fromObject(object: { [k: string]: any }): proto.WiimoteAssignment;

        /**
         * Creates a plain object from a WiimoteAssignment message. Also converts values to other types if specified.
         * @param message WiimoteAssignment
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.WiimoteAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiimoteAssignment to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WiimoteAssignment
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WiimoteAssignment {

        /** Properties of a WiimoteAssignment. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WiimoteAssignment. */
        type $Shape = proto.WiimoteAssignment.$Properties;
    }

    /**
     * Properties of a PSXAssignment.
     * @deprecated Use proto.PSXAssignment.$Properties instead.
     */
    interface IPSXAssignment extends proto.PSXAssignment.$Properties {
    }

    /** Represents a PSXAssignment. */
    class PSXAssignment {

        /**
         * Constructs a new PSXAssignment.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.PSXAssignment.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new PSXAssignment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PSXAssignment instance
         */
        static create(properties: proto.PSXAssignment.$Shape): proto.PSXAssignment & proto.PSXAssignment.$Shape;
        static create(properties?: proto.PSXAssignment.$Properties): proto.PSXAssignment;

        /**
         * Encodes the specified PSXAssignment message. Does not implicitly {@link proto.PSXAssignment.verify|verify} messages.
         * @param message PSXAssignment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.PSXAssignment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PSXAssignment message, length delimited. Does not implicitly {@link proto.PSXAssignment.verify|verify} messages.
         * @param message PSXAssignment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.PSXAssignment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PSXAssignment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.PSXAssignment & proto.PSXAssignment.$Shape} PSXAssignment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PSXAssignment & proto.PSXAssignment.$Shape;

        /**
         * Decodes a PSXAssignment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.PSXAssignment & proto.PSXAssignment.$Shape} PSXAssignment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PSXAssignment & proto.PSXAssignment.$Shape;

        /**
         * Verifies a PSXAssignment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PSXAssignment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PSXAssignment
         */
        static fromObject(object: { [k: string]: any }): proto.PSXAssignment;

        /**
         * Creates a plain object from a PSXAssignment message. Also converts values to other types if specified.
         * @param message PSXAssignment
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.PSXAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PSXAssignment to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PSXAssignment
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PSXAssignment {

        /** Properties of a PSXAssignment. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PSXAssignment. */
        type $Shape = proto.PSXAssignment.$Properties;
    }

    /**
     * Properties of a ProfileAssignmentInfo.
     * @deprecated Use proto.ProfileAssignmentInfo.$Properties instead.
     */
    interface IProfileAssignmentInfo extends proto.ProfileAssignmentInfo.$Properties {
    }

    /** Represents a ProfileAssignmentInfo. */
    class ProfileAssignmentInfo {

        /**
         * Constructs a new ProfileAssignmentInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ProfileAssignmentInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ProfileAssignmentInfo consoleType. */
        consoleType?: (proto.UsbDeviceAssignment.$Properties|null);

        /** ProfileAssignmentInfo wiiExt. */
        wiiExt?: (proto.WiiExtType|null);

        /** ProfileAssignmentInfo ps2Cnt. */
        ps2Cnt?: (proto.PS2ControllerType|null);

        /** ProfileAssignmentInfo usbType. */
        usbType?: (proto.SubType|null);

        /** ProfileAssignmentInfo usbDevice. */
        usbDevice?: (proto.SpecificUsbDevice.$Properties|null);

        /** ProfileAssignmentInfo input. */
        input?: (proto.InputActivationTrigger.$Properties|null);

        /** ProfileAssignmentInfo inputAnyTime. */
        inputAnyTime?: (proto.InputActivationTrigger.$Properties|null);

        /** ProfileAssignmentInfo copilotProfile. */
        copilotProfile?: (number|null);

        /** ProfileAssignmentInfo midiChannel. */
        midiChannel?: (number|null);

        /** ProfileAssignmentInfo bluetooth. */
        bluetooth?: (proto.BluetoothMode|null);

        /** ProfileAssignmentInfo wiiEmulation. */
        wiiEmulation?: (proto.WiimoteAssignment.$Properties|null);

        /** ProfileAssignmentInfo ps2Emulation. */
        ps2Emulation?: (proto.PSXAssignment.$Properties|null);

        /** ProfileAssignmentInfo assignment. */
        assignment?: ("consoleType"|"wiiExt"|"ps2Cnt"|"usbType"|"usbDevice"|"input"|"inputAnyTime"|"copilotProfile"|"midiChannel"|"bluetooth"|"wiiEmulation"|"ps2Emulation");

        /**
         * Creates a new ProfileAssignmentInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProfileAssignmentInfo instance
         */
        static create(properties: proto.ProfileAssignmentInfo.$Shape): proto.ProfileAssignmentInfo & proto.ProfileAssignmentInfo.$Shape;
        static create(properties?: proto.ProfileAssignmentInfo.$Properties): proto.ProfileAssignmentInfo;

        /**
         * Encodes the specified ProfileAssignmentInfo message. Does not implicitly {@link proto.ProfileAssignmentInfo.verify|verify} messages.
         * @param message ProfileAssignmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ProfileAssignmentInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProfileAssignmentInfo message, length delimited. Does not implicitly {@link proto.ProfileAssignmentInfo.verify|verify} messages.
         * @param message ProfileAssignmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ProfileAssignmentInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfileAssignmentInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ProfileAssignmentInfo & proto.ProfileAssignmentInfo.$Shape} ProfileAssignmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ProfileAssignmentInfo & proto.ProfileAssignmentInfo.$Shape;

        /**
         * Decodes a ProfileAssignmentInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ProfileAssignmentInfo & proto.ProfileAssignmentInfo.$Shape} ProfileAssignmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ProfileAssignmentInfo & proto.ProfileAssignmentInfo.$Shape;

        /**
         * Verifies a ProfileAssignmentInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProfileAssignmentInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProfileAssignmentInfo
         */
        static fromObject(object: { [k: string]: any }): proto.ProfileAssignmentInfo;

        /**
         * Creates a plain object from a ProfileAssignmentInfo message. Also converts values to other types if specified.
         * @param message ProfileAssignmentInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ProfileAssignmentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProfileAssignmentInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ProfileAssignmentInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ProfileAssignmentInfo {

        /** Properties of a ProfileAssignmentInfo. */
        interface $Properties {

            /** ProfileAssignmentInfo consoleType */
            consoleType?: (proto.UsbDeviceAssignment.$Properties|null);

            /** ProfileAssignmentInfo wiiExt */
            wiiExt?: (proto.WiiExtType|null);

            /** ProfileAssignmentInfo ps2Cnt */
            ps2Cnt?: (proto.PS2ControllerType|null);

            /** ProfileAssignmentInfo usbType */
            usbType?: (proto.SubType|null);

            /** ProfileAssignmentInfo usbDevice */
            usbDevice?: (proto.SpecificUsbDevice.$Properties|null);

            /** ProfileAssignmentInfo input */
            input?: (proto.InputActivationTrigger.$Properties|null);

            /** ProfileAssignmentInfo inputAnyTime */
            inputAnyTime?: (proto.InputActivationTrigger.$Properties|null);

            /** ProfileAssignmentInfo copilotProfile */
            copilotProfile?: (number|null);

            /** ProfileAssignmentInfo midiChannel */
            midiChannel?: (number|null);

            /** ProfileAssignmentInfo bluetooth */
            bluetooth?: (proto.BluetoothMode|null);

            /** ProfileAssignmentInfo wiiEmulation */
            wiiEmulation?: (proto.WiimoteAssignment.$Properties|null);

            /** ProfileAssignmentInfo ps2Emulation */
            ps2Emulation?: (proto.PSXAssignment.$Properties|null);

            /** ProfileAssignmentInfo assignment */
            assignment?: ("consoleType"|"wiiExt"|"ps2Cnt"|"usbType"|"usbDevice"|"input"|"inputAnyTime"|"copilotProfile"|"midiChannel"|"bluetooth"|"wiiEmulation"|"ps2Emulation");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ProfileAssignmentInfo. */
        type $Shape = {
          consoleType?: proto.UsbDeviceAssignment.$Shape|null;
          wiiExt?: proto.WiiExtType|null;
          ps2Cnt?: proto.PS2ControllerType|null;
          usbType?: proto.SubType|null;
          usbDevice?: proto.SpecificUsbDevice.$Shape|null;
          input?: proto.InputActivationTrigger.$Shape|null;
          inputAnyTime?: proto.InputActivationTrigger.$Shape|null;
          copilotProfile?: number|null;
          midiChannel?: number|null;
          bluetooth?: proto.BluetoothMode|null;
          wiiEmulation?: proto.WiimoteAssignment.$Shape|null;
          ps2Emulation?: proto.PSXAssignment.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ assignment?: undefined; consoleType?: null; wiiExt?: null; ps2Cnt?: null; usbType?: null; usbDevice?: null; input?: null; inputAnyTime?: null; copilotProfile?: null; midiChannel?: null; bluetooth?: null; wiiEmulation?: null; ps2Emulation?: null }|{ assignment?: "consoleType"; consoleType: proto.UsbDeviceAssignment.$Shape; wiiExt?: null; ps2Cnt?: null; usbType?: null; usbDevice?: null; input?: null; inputAnyTime?: null; copilotProfile?: null; midiChannel?: null; bluetooth?: null; wiiEmulation?: null; ps2Emulation?: null }|{ assignment?: "wiiExt"; consoleType?: null; wiiExt: proto.WiiExtType; ps2Cnt?: null; usbType?: null; usbDevice?: null; input?: null; inputAnyTime?: null; copilotProfile?: null; midiChannel?: null; bluetooth?: null; wiiEmulation?: null; ps2Emulation?: null }|{ assignment?: "ps2Cnt"; consoleType?: null; wiiExt?: null; ps2Cnt: proto.PS2ControllerType; usbType?: null; usbDevice?: null; input?: null; inputAnyTime?: null; copilotProfile?: null; midiChannel?: null; bluetooth?: null; wiiEmulation?: null; ps2Emulation?: null }|{ assignment?: "usbType"; consoleType?: null; wiiExt?: null; ps2Cnt?: null; usbType: proto.SubType; usbDevice?: null; input?: null; inputAnyTime?: null; copilotProfile?: null; midiChannel?: null; bluetooth?: null; wiiEmulation?: null; ps2Emulation?: null }|{ assignment?: "usbDevice"; consoleType?: null; wiiExt?: null; ps2Cnt?: null; usbType?: null; usbDevice: proto.SpecificUsbDevice.$Shape; input?: null; inputAnyTime?: null; copilotProfile?: null; midiChannel?: null; bluetooth?: null; wiiEmulation?: null; ps2Emulation?: null }|{ assignment?: "input"; consoleType?: null; wiiExt?: null; ps2Cnt?: null; usbType?: null; usbDevice?: null; input: proto.InputActivationTrigger.$Shape; inputAnyTime?: null; copilotProfile?: null; midiChannel?: null; bluetooth?: null; wiiEmulation?: null; ps2Emulation?: null }|{ assignment?: "inputAnyTime"; consoleType?: null; wiiExt?: null; ps2Cnt?: null; usbType?: null; usbDevice?: null; input?: null; inputAnyTime: proto.InputActivationTrigger.$Shape; copilotProfile?: null; midiChannel?: null; bluetooth?: null; wiiEmulation?: null; ps2Emulation?: null }|{ assignment?: "copilotProfile"; consoleType?: null; wiiExt?: null; ps2Cnt?: null; usbType?: null; usbDevice?: null; input?: null; inputAnyTime?: null; copilotProfile: number; midiChannel?: null; bluetooth?: null; wiiEmulation?: null; ps2Emulation?: null }|{ assignment?: "midiChannel"; consoleType?: null; wiiExt?: null; ps2Cnt?: null; usbType?: null; usbDevice?: null; input?: null; inputAnyTime?: null; copilotProfile?: null; midiChannel: number; bluetooth?: null; wiiEmulation?: null; ps2Emulation?: null }|{ assignment?: "bluetooth"; consoleType?: null; wiiExt?: null; ps2Cnt?: null; usbType?: null; usbDevice?: null; input?: null; inputAnyTime?: null; copilotProfile?: null; midiChannel?: null; bluetooth: proto.BluetoothMode; wiiEmulation?: null; ps2Emulation?: null }|{ assignment?: "wiiEmulation"; consoleType?: null; wiiExt?: null; ps2Cnt?: null; usbType?: null; usbDevice?: null; input?: null; inputAnyTime?: null; copilotProfile?: null; midiChannel?: null; bluetooth?: null; wiiEmulation: proto.WiimoteAssignment.$Shape; ps2Emulation?: null }|{ assignment?: "ps2Emulation"; consoleType?: null; wiiExt?: null; ps2Cnt?: null; usbType?: null; usbDevice?: null; input?: null; inputAnyTime?: null; copilotProfile?: null; midiChannel?: null; bluetooth?: null; wiiEmulation?: null; ps2Emulation: proto.PSXAssignment.$Shape })
        );
    }

    /**
     * Properties of a ProfileAssignment.
     * @deprecated Use proto.ProfileAssignment.$Properties instead.
     */
    interface IProfileAssignment extends proto.ProfileAssignment.$Properties {
    }

    /** Represents a ProfileAssignment. */
    class ProfileAssignment {

        /**
         * Constructs a new ProfileAssignment.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ProfileAssignment.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ProfileAssignment assignments. */
        assignments: proto.ProfileAssignmentInfo.$Properties[];

        /**
         * Creates a new ProfileAssignment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProfileAssignment instance
         */
        static create(properties: proto.ProfileAssignment.$Shape): proto.ProfileAssignment & proto.ProfileAssignment.$Shape;
        static create(properties?: proto.ProfileAssignment.$Properties): proto.ProfileAssignment;

        /**
         * Encodes the specified ProfileAssignment message. Does not implicitly {@link proto.ProfileAssignment.verify|verify} messages.
         * @param message ProfileAssignment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ProfileAssignment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProfileAssignment message, length delimited. Does not implicitly {@link proto.ProfileAssignment.verify|verify} messages.
         * @param message ProfileAssignment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ProfileAssignment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfileAssignment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ProfileAssignment & proto.ProfileAssignment.$Shape} ProfileAssignment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ProfileAssignment & proto.ProfileAssignment.$Shape;

        /**
         * Decodes a ProfileAssignment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ProfileAssignment & proto.ProfileAssignment.$Shape} ProfileAssignment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ProfileAssignment & proto.ProfileAssignment.$Shape;

        /**
         * Verifies a ProfileAssignment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProfileAssignment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProfileAssignment
         */
        static fromObject(object: { [k: string]: any }): proto.ProfileAssignment;

        /**
         * Creates a plain object from a ProfileAssignment message. Also converts values to other types if specified.
         * @param message ProfileAssignment
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ProfileAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProfileAssignment to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ProfileAssignment
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ProfileAssignment {

        /** Properties of a ProfileAssignment. */
        interface $Properties {

            /** ProfileAssignment assignments */
            assignments?: (proto.ProfileAssignmentInfo.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ProfileAssignment. */
        type $Shape = {
          assignments?: proto.ProfileAssignmentInfo.$Shape[]|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a GuiDevice.
     * @deprecated Use proto.GuiDevice.$Properties instead.
     */
    interface IGuiDevice extends proto.GuiDevice.$Properties {
    }

    /** Represents a GuiDevice. */
    class GuiDevice {

        /**
         * Constructs a new GuiDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.GuiDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GuiDevice label. */
        label: string;

        /** GuiDevice pin. */
        pin: number;

        /** GuiDevice showToCustomer. */
        showToCustomer: boolean;

        /**
         * Creates a new GuiDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuiDevice instance
         */
        static create(properties: proto.GuiDevice.$Shape): proto.GuiDevice & proto.GuiDevice.$Shape;
        static create(properties?: proto.GuiDevice.$Properties): proto.GuiDevice;

        /**
         * Encodes the specified GuiDevice message. Does not implicitly {@link proto.GuiDevice.verify|verify} messages.
         * @param message GuiDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.GuiDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuiDevice message, length delimited. Does not implicitly {@link proto.GuiDevice.verify|verify} messages.
         * @param message GuiDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.GuiDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuiDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.GuiDevice & proto.GuiDevice.$Shape} GuiDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GuiDevice & proto.GuiDevice.$Shape;

        /**
         * Decodes a GuiDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.GuiDevice & proto.GuiDevice.$Shape} GuiDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GuiDevice & proto.GuiDevice.$Shape;

        /**
         * Verifies a GuiDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuiDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuiDevice
         */
        static fromObject(object: { [k: string]: any }): proto.GuiDevice;

        /**
         * Creates a plain object from a GuiDevice message. Also converts values to other types if specified.
         * @param message GuiDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.GuiDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuiDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GuiDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GuiDevice {

        /** Properties of a GuiDevice. */
        interface $Properties {

            /** GuiDevice label */
            label: string;

            /** GuiDevice pin */
            pin: number;

            /** GuiDevice showToCustomer */
            showToCustomer?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GuiDevice. */
        type $Shape = proto.GuiDevice.$Properties;
    }

    /**
     * Properties of a GuiLed.
     * @deprecated Use proto.GuiLed.$Properties instead.
     */
    interface IGuiLed extends proto.GuiLed.$Properties {
    }

    /** Represents a GuiLed. */
    class GuiLed {

        /**
         * Constructs a new GuiLed.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.GuiLed.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GuiLed label. */
        label: string;

        /** GuiLed deviceid. */
        deviceid: number;

        /** GuiLed activeLed. */
        activeLed: number[];

        /** GuiLed showToCustomer. */
        showToCustomer: boolean;

        /**
         * Creates a new GuiLed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuiLed instance
         */
        static create(properties: proto.GuiLed.$Shape): proto.GuiLed & proto.GuiLed.$Shape;
        static create(properties?: proto.GuiLed.$Properties): proto.GuiLed;

        /**
         * Encodes the specified GuiLed message. Does not implicitly {@link proto.GuiLed.verify|verify} messages.
         * @param message GuiLed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.GuiLed.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuiLed message, length delimited. Does not implicitly {@link proto.GuiLed.verify|verify} messages.
         * @param message GuiLed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.GuiLed.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuiLed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.GuiLed & proto.GuiLed.$Shape} GuiLed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GuiLed & proto.GuiLed.$Shape;

        /**
         * Decodes a GuiLed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.GuiLed & proto.GuiLed.$Shape} GuiLed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GuiLed & proto.GuiLed.$Shape;

        /**
         * Verifies a GuiLed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuiLed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuiLed
         */
        static fromObject(object: { [k: string]: any }): proto.GuiLed;

        /**
         * Creates a plain object from a GuiLed message. Also converts values to other types if specified.
         * @param message GuiLed
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.GuiLed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuiLed to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GuiLed
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GuiLed {

        /** Properties of a GuiLed. */
        interface $Properties {

            /** GuiLed label */
            label: string;

            /** GuiLed deviceid */
            deviceid: number;

            /** GuiLed activeLed */
            activeLed?: (number[]|null);

            /** GuiLed showToCustomer */
            showToCustomer?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GuiLed. */
        type $Shape = proto.GuiLed.$Properties;
    }

    /**
     * Properties of a GuiMultiplexerDevice.
     * @deprecated Use proto.GuiMultiplexerDevice.$Properties instead.
     */
    interface IGuiMultiplexerDevice extends proto.GuiMultiplexerDevice.$Properties {
    }

    /** Represents a GuiMultiplexerDevice. */
    class GuiMultiplexerDevice {

        /**
         * Constructs a new GuiMultiplexerDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.GuiMultiplexerDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GuiMultiplexerDevice label. */
        label: string;

        /** GuiMultiplexerDevice deviceid. */
        deviceid: number;

        /** GuiMultiplexerDevice channel. */
        channel: number;

        /** GuiMultiplexerDevice showToCustomer. */
        showToCustomer: boolean;

        /**
         * Creates a new GuiMultiplexerDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuiMultiplexerDevice instance
         */
        static create(properties: proto.GuiMultiplexerDevice.$Shape): proto.GuiMultiplexerDevice & proto.GuiMultiplexerDevice.$Shape;
        static create(properties?: proto.GuiMultiplexerDevice.$Properties): proto.GuiMultiplexerDevice;

        /**
         * Encodes the specified GuiMultiplexerDevice message. Does not implicitly {@link proto.GuiMultiplexerDevice.verify|verify} messages.
         * @param message GuiMultiplexerDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.GuiMultiplexerDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuiMultiplexerDevice message, length delimited. Does not implicitly {@link proto.GuiMultiplexerDevice.verify|verify} messages.
         * @param message GuiMultiplexerDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.GuiMultiplexerDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuiMultiplexerDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.GuiMultiplexerDevice & proto.GuiMultiplexerDevice.$Shape} GuiMultiplexerDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GuiMultiplexerDevice & proto.GuiMultiplexerDevice.$Shape;

        /**
         * Decodes a GuiMultiplexerDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.GuiMultiplexerDevice & proto.GuiMultiplexerDevice.$Shape} GuiMultiplexerDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GuiMultiplexerDevice & proto.GuiMultiplexerDevice.$Shape;

        /**
         * Verifies a GuiMultiplexerDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuiMultiplexerDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuiMultiplexerDevice
         */
        static fromObject(object: { [k: string]: any }): proto.GuiMultiplexerDevice;

        /**
         * Creates a plain object from a GuiMultiplexerDevice message. Also converts values to other types if specified.
         * @param message GuiMultiplexerDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.GuiMultiplexerDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuiMultiplexerDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GuiMultiplexerDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GuiMultiplexerDevice {

        /** Properties of a GuiMultiplexerDevice. */
        interface $Properties {

            /** GuiMultiplexerDevice label */
            label: string;

            /** GuiMultiplexerDevice deviceid */
            deviceid: number;

            /** GuiMultiplexerDevice channel */
            channel: number;

            /** GuiMultiplexerDevice showToCustomer */
            showToCustomer?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GuiMultiplexerDevice. */
        type $Shape = proto.GuiMultiplexerDevice.$Properties;
    }

    /**
     * Properties of a GuiMatrixDevice.
     * @deprecated Use proto.GuiMatrixDevice.$Properties instead.
     */
    interface IGuiMatrixDevice extends proto.GuiMatrixDevice.$Properties {
    }

    /** Represents a GuiMatrixDevice. */
    class GuiMatrixDevice {

        /**
         * Constructs a new GuiMatrixDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.GuiMatrixDevice.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GuiMatrixDevice label. */
        label: string;

        /** GuiMatrixDevice deviceid. */
        deviceid: number;

        /** GuiMatrixDevice inputPin. */
        inputPin: number;

        /** GuiMatrixDevice outputPin. */
        outputPin: number;

        /** GuiMatrixDevice showToCustomer. */
        showToCustomer: boolean;

        /**
         * Creates a new GuiMatrixDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuiMatrixDevice instance
         */
        static create(properties: proto.GuiMatrixDevice.$Shape): proto.GuiMatrixDevice & proto.GuiMatrixDevice.$Shape;
        static create(properties?: proto.GuiMatrixDevice.$Properties): proto.GuiMatrixDevice;

        /**
         * Encodes the specified GuiMatrixDevice message. Does not implicitly {@link proto.GuiMatrixDevice.verify|verify} messages.
         * @param message GuiMatrixDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.GuiMatrixDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuiMatrixDevice message, length delimited. Does not implicitly {@link proto.GuiMatrixDevice.verify|verify} messages.
         * @param message GuiMatrixDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.GuiMatrixDevice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuiMatrixDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.GuiMatrixDevice & proto.GuiMatrixDevice.$Shape} GuiMatrixDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GuiMatrixDevice & proto.GuiMatrixDevice.$Shape;

        /**
         * Decodes a GuiMatrixDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.GuiMatrixDevice & proto.GuiMatrixDevice.$Shape} GuiMatrixDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GuiMatrixDevice & proto.GuiMatrixDevice.$Shape;

        /**
         * Verifies a GuiMatrixDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuiMatrixDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuiMatrixDevice
         */
        static fromObject(object: { [k: string]: any }): proto.GuiMatrixDevice;

        /**
         * Creates a plain object from a GuiMatrixDevice message. Also converts values to other types if specified.
         * @param message GuiMatrixDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.GuiMatrixDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuiMatrixDevice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GuiMatrixDevice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GuiMatrixDevice {

        /** Properties of a GuiMatrixDevice. */
        interface $Properties {

            /** GuiMatrixDevice label */
            label: string;

            /** GuiMatrixDevice deviceid */
            deviceid: number;

            /** GuiMatrixDevice inputPin */
            inputPin: number;

            /** GuiMatrixDevice outputPin */
            outputPin: number;

            /** GuiMatrixDevice showToCustomer */
            showToCustomer?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GuiMatrixDevice. */
        type $Shape = proto.GuiMatrixDevice.$Properties;
    }

    /**
     * Properties of a SellerConfig.
     * @deprecated Use proto.SellerConfig.$Properties instead.
     */
    interface ISellerConfig extends proto.SellerConfig.$Properties {
    }

    /** Represents a SellerConfig. */
    class SellerConfig {

        /**
         * Constructs a new SellerConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.SellerConfig.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SellerConfig logo. */
        logo: Uint8Array;

        /** SellerConfig name. */
        name: string;

        /**
         * Creates a new SellerConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SellerConfig instance
         */
        static create(properties: proto.SellerConfig.$Shape): proto.SellerConfig & proto.SellerConfig.$Shape;
        static create(properties?: proto.SellerConfig.$Properties): proto.SellerConfig;

        /**
         * Encodes the specified SellerConfig message. Does not implicitly {@link proto.SellerConfig.verify|verify} messages.
         * @param message SellerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.SellerConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SellerConfig message, length delimited. Does not implicitly {@link proto.SellerConfig.verify|verify} messages.
         * @param message SellerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.SellerConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SellerConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.SellerConfig & proto.SellerConfig.$Shape} SellerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SellerConfig & proto.SellerConfig.$Shape;

        /**
         * Decodes a SellerConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.SellerConfig & proto.SellerConfig.$Shape} SellerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SellerConfig & proto.SellerConfig.$Shape;

        /**
         * Verifies a SellerConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SellerConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SellerConfig
         */
        static fromObject(object: { [k: string]: any }): proto.SellerConfig;

        /**
         * Creates a plain object from a SellerConfig message. Also converts values to other types if specified.
         * @param message SellerConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.SellerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SellerConfig to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SellerConfig
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SellerConfig {

        /** Properties of a SellerConfig. */
        interface $Properties {

            /** SellerConfig logo */
            logo: Uint8Array;

            /** SellerConfig name */
            name: string;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SellerConfig. */
        type $Shape = proto.SellerConfig.$Properties;
    }

    /**
     * Properties of a GuiConfig.
     * @deprecated Use proto.GuiConfig.$Properties instead.
     */
    interface IGuiConfig extends proto.GuiConfig.$Properties {
    }

    /** Represents a GuiConfig. */
    class GuiConfig {

        /**
         * Constructs a new GuiConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.GuiConfig.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GuiConfig deviceid. */
        deviceid: number;

        /** GuiConfig label. */
        label?: (proto.GuiDevice.$Properties|null);

        /** GuiConfig seller. */
        seller?: (proto.SellerConfig.$Properties|null);

        /** GuiConfig ledLabel. */
        ledLabel?: (proto.GuiLed.$Properties|null);

        /** GuiConfig multiplexerLabel. */
        multiplexerLabel?: (proto.GuiMultiplexerDevice.$Properties|null);

        /** GuiConfig matrixLabel. */
        matrixLabel?: (proto.GuiMatrixDevice.$Properties|null);

        /** GuiConfig config. */
        config?: ("label"|"seller"|"ledLabel"|"multiplexerLabel"|"matrixLabel");

        /**
         * Creates a new GuiConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuiConfig instance
         */
        static create(properties: proto.GuiConfig.$Shape): proto.GuiConfig & proto.GuiConfig.$Shape;
        static create(properties?: proto.GuiConfig.$Properties): proto.GuiConfig;

        /**
         * Encodes the specified GuiConfig message. Does not implicitly {@link proto.GuiConfig.verify|verify} messages.
         * @param message GuiConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.GuiConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuiConfig message, length delimited. Does not implicitly {@link proto.GuiConfig.verify|verify} messages.
         * @param message GuiConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.GuiConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuiConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.GuiConfig & proto.GuiConfig.$Shape} GuiConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GuiConfig & proto.GuiConfig.$Shape;

        /**
         * Decodes a GuiConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.GuiConfig & proto.GuiConfig.$Shape} GuiConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GuiConfig & proto.GuiConfig.$Shape;

        /**
         * Verifies a GuiConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuiConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuiConfig
         */
        static fromObject(object: { [k: string]: any }): proto.GuiConfig;

        /**
         * Creates a plain object from a GuiConfig message. Also converts values to other types if specified.
         * @param message GuiConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.GuiConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuiConfig to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GuiConfig
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GuiConfig {

        /** Properties of a GuiConfig. */
        interface $Properties {

            /** GuiConfig deviceid */
            deviceid: number;

            /** GuiConfig label */
            label?: (proto.GuiDevice.$Properties|null);

            /** GuiConfig seller */
            seller?: (proto.SellerConfig.$Properties|null);

            /** GuiConfig ledLabel */
            ledLabel?: (proto.GuiLed.$Properties|null);

            /** GuiConfig multiplexerLabel */
            multiplexerLabel?: (proto.GuiMultiplexerDevice.$Properties|null);

            /** GuiConfig matrixLabel */
            matrixLabel?: (proto.GuiMatrixDevice.$Properties|null);

            /** GuiConfig config */
            config?: ("label"|"seller"|"ledLabel"|"multiplexerLabel"|"matrixLabel");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a GuiConfig. */
        type $Shape = {
          deviceid: number;
          label?: proto.GuiDevice.$Shape|null;
          seller?: proto.SellerConfig.$Shape|null;
          ledLabel?: proto.GuiLed.$Shape|null;
          multiplexerLabel?: proto.GuiMultiplexerDevice.$Shape|null;
          matrixLabel?: proto.GuiMatrixDevice.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ config?: undefined; label?: null; seller?: null; ledLabel?: null; multiplexerLabel?: null; matrixLabel?: null }|{ config?: "label"; label: proto.GuiDevice.$Shape; seller?: null; ledLabel?: null; multiplexerLabel?: null; matrixLabel?: null }|{ config?: "seller"; label?: null; seller: proto.SellerConfig.$Shape; ledLabel?: null; multiplexerLabel?: null; matrixLabel?: null }|{ config?: "ledLabel"; label?: null; seller?: null; ledLabel: proto.GuiLed.$Shape; multiplexerLabel?: null; matrixLabel?: null }|{ config?: "multiplexerLabel"; label?: null; seller?: null; ledLabel?: null; multiplexerLabel: proto.GuiMultiplexerDevice.$Shape; matrixLabel?: null }|{ config?: "matrixLabel"; label?: null; seller?: null; ledLabel?: null; multiplexerLabel?: null; matrixLabel: proto.GuiMatrixDevice.$Shape })
        );
    }

    /**
     * Properties of a Config.
     * @deprecated Use proto.Config.$Properties instead.
     */
    interface IConfig extends proto.Config.$Properties {
    }

    /** Represents a Config. */
    class Config {

        /**
         * Constructs a new Config.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Config.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Config devices. */
        devices: proto.Device.$Properties[];

        /** Config profiles. */
        profiles: proto.Profile.$Properties[];

        /** Config guiConfig. */
        guiConfig: proto.GuiConfig.$Properties[];

        /** Config syncCalibrations. */
        syncCalibrations: boolean;

        /**
         * Creates a new Config instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Config instance
         */
        static create(properties: proto.Config.$Shape): proto.Config & proto.Config.$Shape;
        static create(properties?: proto.Config.$Properties): proto.Config;

        /**
         * Encodes the specified Config message. Does not implicitly {@link proto.Config.verify|verify} messages.
         * @param message Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.Config.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Config message, length delimited. Does not implicitly {@link proto.Config.verify|verify} messages.
         * @param message Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.Config.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Config message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.Config & proto.Config.$Shape} Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Config & proto.Config.$Shape;

        /**
         * Decodes a Config message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.Config & proto.Config.$Shape} Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Config & proto.Config.$Shape;

        /**
         * Verifies a Config message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Config message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Config
         */
        static fromObject(object: { [k: string]: any }): proto.Config;

        /**
         * Creates a plain object from a Config message. Also converts values to other types if specified.
         * @param message Config
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Config to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Config
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Config {

        /** Properties of a Config. */
        interface $Properties {

            /** Config devices */
            devices?: (proto.Device.$Properties[]|null);

            /** Config profiles */
            profiles?: (proto.Profile.$Properties[]|null);

            /** Config guiConfig */
            guiConfig?: (proto.GuiConfig.$Properties[]|null);

            /** Config syncCalibrations */
            syncCalibrations?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Config. */
        type $Shape = {
          devices?: proto.Device.$Shape[]|null;
          profiles?: proto.Profile.$Shape[]|null;
          guiConfig?: proto.GuiConfig.$Shape[]|null;
          syncCalibrations?: boolean|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a ConfigInfo.
     * @deprecated Use proto.ConfigInfo.$Properties instead.
     */
    interface IConfigInfo extends proto.ConfigInfo.$Properties {
    }

    /** Represents a ConfigInfo. */
    class ConfigInfo {

        /**
         * Constructs a new ConfigInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ConfigInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ConfigInfo dataSize. */
        dataSize: number;

        /** ConfigInfo dataCrc. */
        dataCrc: number;

        /** ConfigInfo mainSize. */
        mainSize: number;

        /** ConfigInfo auxSize. */
        auxSize: number;

        /** ConfigInfo magic. */
        magic: number;

        /**
         * Creates a new ConfigInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConfigInfo instance
         */
        static create(properties: proto.ConfigInfo.$Shape): proto.ConfigInfo & proto.ConfigInfo.$Shape;
        static create(properties?: proto.ConfigInfo.$Properties): proto.ConfigInfo;

        /**
         * Encodes the specified ConfigInfo message. Does not implicitly {@link proto.ConfigInfo.verify|verify} messages.
         * @param message ConfigInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ConfigInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConfigInfo message, length delimited. Does not implicitly {@link proto.ConfigInfo.verify|verify} messages.
         * @param message ConfigInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ConfigInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConfigInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ConfigInfo & proto.ConfigInfo.$Shape} ConfigInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ConfigInfo & proto.ConfigInfo.$Shape;

        /**
         * Decodes a ConfigInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ConfigInfo & proto.ConfigInfo.$Shape} ConfigInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ConfigInfo & proto.ConfigInfo.$Shape;

        /**
         * Verifies a ConfigInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConfigInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConfigInfo
         */
        static fromObject(object: { [k: string]: any }): proto.ConfigInfo;

        /**
         * Creates a plain object from a ConfigInfo message. Also converts values to other types if specified.
         * @param message ConfigInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ConfigInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConfigInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ConfigInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ConfigInfo {

        /** Properties of a ConfigInfo. */
        interface $Properties {

            /** ConfigInfo dataSize */
            dataSize: number;

            /** ConfigInfo dataCrc */
            dataCrc: number;

            /** ConfigInfo mainSize */
            mainSize: number;

            /** ConfigInfo auxSize */
            auxSize: number;

            /** ConfigInfo magic */
            magic: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ConfigInfo. */
        type $Shape = proto.ConfigInfo.$Properties;
    }

    /**
     * Properties of a GetActiveProfiles.
     * @deprecated Use proto.GetActiveProfiles.$Properties instead.
     */
    interface IGetActiveProfiles extends proto.GetActiveProfiles.$Properties {
    }

    /** Represents a GetActiveProfiles. */
    class GetActiveProfiles {

        /**
         * Constructs a new GetActiveProfiles.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.GetActiveProfiles.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetActiveProfiles profiles. */
        profiles: number[];

        /**
         * Creates a new GetActiveProfiles instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetActiveProfiles instance
         */
        static create(properties: proto.GetActiveProfiles.$Shape): proto.GetActiveProfiles & proto.GetActiveProfiles.$Shape;
        static create(properties?: proto.GetActiveProfiles.$Properties): proto.GetActiveProfiles;

        /**
         * Encodes the specified GetActiveProfiles message. Does not implicitly {@link proto.GetActiveProfiles.verify|verify} messages.
         * @param message GetActiveProfiles message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.GetActiveProfiles.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetActiveProfiles message, length delimited. Does not implicitly {@link proto.GetActiveProfiles.verify|verify} messages.
         * @param message GetActiveProfiles message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.GetActiveProfiles.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetActiveProfiles message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.GetActiveProfiles & proto.GetActiveProfiles.$Shape} GetActiveProfiles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GetActiveProfiles & proto.GetActiveProfiles.$Shape;

        /**
         * Decodes a GetActiveProfiles message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.GetActiveProfiles & proto.GetActiveProfiles.$Shape} GetActiveProfiles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GetActiveProfiles & proto.GetActiveProfiles.$Shape;

        /**
         * Verifies a GetActiveProfiles message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetActiveProfiles message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetActiveProfiles
         */
        static fromObject(object: { [k: string]: any }): proto.GetActiveProfiles;

        /**
         * Creates a plain object from a GetActiveProfiles message. Also converts values to other types if specified.
         * @param message GetActiveProfiles
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.GetActiveProfiles, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetActiveProfiles to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetActiveProfiles
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetActiveProfiles {

        /** Properties of a GetActiveProfiles. */
        interface $Properties {

            /** GetActiveProfiles profiles */
            profiles?: (number[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetActiveProfiles. */
        type $Shape = proto.GetActiveProfiles.$Properties;
    }

    /**
     * Properties of a GetVersion.
     * @deprecated Use proto.GetVersion.$Properties instead.
     */
    interface IGetVersion extends proto.GetVersion.$Properties {
    }

    /** Represents a GetVersion. */
    class GetVersion {

        /**
         * Constructs a new GetVersion.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.GetVersion.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetVersion version. */
        version: string;

        /**
         * Creates a new GetVersion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVersion instance
         */
        static create(properties: proto.GetVersion.$Shape): proto.GetVersion & proto.GetVersion.$Shape;
        static create(properties?: proto.GetVersion.$Properties): proto.GetVersion;

        /**
         * Encodes the specified GetVersion message. Does not implicitly {@link proto.GetVersion.verify|verify} messages.
         * @param message GetVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.GetVersion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVersion message, length delimited. Does not implicitly {@link proto.GetVersion.verify|verify} messages.
         * @param message GetVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.GetVersion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVersion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.GetVersion & proto.GetVersion.$Shape} GetVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GetVersion & proto.GetVersion.$Shape;

        /**
         * Decodes a GetVersion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.GetVersion & proto.GetVersion.$Shape} GetVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GetVersion & proto.GetVersion.$Shape;

        /**
         * Verifies a GetVersion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVersion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVersion
         */
        static fromObject(object: { [k: string]: any }): proto.GetVersion;

        /**
         * Creates a plain object from a GetVersion message. Also converts values to other types if specified.
         * @param message GetVersion
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.GetVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVersion to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetVersion
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetVersion {

        /** Properties of a GetVersion. */
        interface $Properties {

            /** GetVersion version */
            version: string;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetVersion. */
        type $Shape = proto.GetVersion.$Properties;
    }

    /**
     * Properties of a GetType.
     * @deprecated Use proto.GetType.$Properties instead.
     */
    interface IGetType extends proto.GetType.$Properties {
    }

    /** Represents a GetType. */
    class GetType {

        /**
         * Constructs a new GetType.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.GetType.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetType type. */
        type: string;

        /**
         * Creates a new GetType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetType instance
         */
        static create(properties: proto.GetType.$Shape): proto.GetType & proto.GetType.$Shape;
        static create(properties?: proto.GetType.$Properties): proto.GetType;

        /**
         * Encodes the specified GetType message. Does not implicitly {@link proto.GetType.verify|verify} messages.
         * @param message GetType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.GetType.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetType message, length delimited. Does not implicitly {@link proto.GetType.verify|verify} messages.
         * @param message GetType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.GetType.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.GetType & proto.GetType.$Shape} GetType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GetType & proto.GetType.$Shape;

        /**
         * Decodes a GetType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.GetType & proto.GetType.$Shape} GetType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GetType & proto.GetType.$Shape;

        /**
         * Verifies a GetType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetType
         */
        static fromObject(object: { [k: string]: any }): proto.GetType;

        /**
         * Creates a plain object from a GetType message. Also converts values to other types if specified.
         * @param message GetType
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.GetType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetType to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetType
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetType {

        /** Properties of a GetType. */
        interface $Properties {

            /** GetType type */
            type: string;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetType. */
        type $Shape = proto.GetType.$Properties;
    }

    /**
     * Properties of a FirmwareUpdate.
     * @deprecated Use proto.FirmwareUpdate.$Properties instead.
     */
    interface IFirmwareUpdate extends proto.FirmwareUpdate.$Properties {
    }

    /** Represents a FirmwareUpdate. */
    class FirmwareUpdate {

        /**
         * Constructs a new FirmwareUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.FirmwareUpdate.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** FirmwareUpdate firmwareSize. */
        firmwareSize: number;

        /** FirmwareUpdate offset. */
        offset: number;

        /** FirmwareUpdate chunkOffset. */
        chunkOffset: number;

        /** FirmwareUpdate chunkSize. */
        chunkSize: number;

        /**
         * Creates a new FirmwareUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FirmwareUpdate instance
         */
        static create(properties: proto.FirmwareUpdate.$Shape): proto.FirmwareUpdate & proto.FirmwareUpdate.$Shape;
        static create(properties?: proto.FirmwareUpdate.$Properties): proto.FirmwareUpdate;

        /**
         * Encodes the specified FirmwareUpdate message. Does not implicitly {@link proto.FirmwareUpdate.verify|verify} messages.
         * @param message FirmwareUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.FirmwareUpdate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FirmwareUpdate message, length delimited. Does not implicitly {@link proto.FirmwareUpdate.verify|verify} messages.
         * @param message FirmwareUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.FirmwareUpdate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FirmwareUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.FirmwareUpdate & proto.FirmwareUpdate.$Shape} FirmwareUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FirmwareUpdate & proto.FirmwareUpdate.$Shape;

        /**
         * Decodes a FirmwareUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.FirmwareUpdate & proto.FirmwareUpdate.$Shape} FirmwareUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FirmwareUpdate & proto.FirmwareUpdate.$Shape;

        /**
         * Verifies a FirmwareUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FirmwareUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FirmwareUpdate
         */
        static fromObject(object: { [k: string]: any }): proto.FirmwareUpdate;

        /**
         * Creates a plain object from a FirmwareUpdate message. Also converts values to other types if specified.
         * @param message FirmwareUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.FirmwareUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FirmwareUpdate to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for FirmwareUpdate
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace FirmwareUpdate {

        /** Properties of a FirmwareUpdate. */
        interface $Properties {

            /** FirmwareUpdate firmwareSize */
            firmwareSize: number;

            /** FirmwareUpdate offset */
            offset: number;

            /** FirmwareUpdate chunkOffset */
            chunkOffset: number;

            /** FirmwareUpdate chunkSize */
            chunkSize: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a FirmwareUpdate. */
        type $Shape = proto.FirmwareUpdate.$Properties;
    }

    /**
     * Properties of a CyclingInputState.
     * @deprecated Use proto.CyclingInputState.$Properties instead.
     */
    interface ICyclingInputState extends proto.CyclingInputState.$Properties {
    }

    /** Represents a CyclingInputState. */
    class CyclingInputState {

        /**
         * Constructs a new CyclingInputState.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.CyclingInputState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CyclingInputState id. */
        id: number;

        /** CyclingInputState state. */
        state: number;

        /**
         * Creates a new CyclingInputState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CyclingInputState instance
         */
        static create(properties: proto.CyclingInputState.$Shape): proto.CyclingInputState & proto.CyclingInputState.$Shape;
        static create(properties?: proto.CyclingInputState.$Properties): proto.CyclingInputState;

        /**
         * Encodes the specified CyclingInputState message. Does not implicitly {@link proto.CyclingInputState.verify|verify} messages.
         * @param message CyclingInputState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.CyclingInputState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CyclingInputState message, length delimited. Does not implicitly {@link proto.CyclingInputState.verify|verify} messages.
         * @param message CyclingInputState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.CyclingInputState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CyclingInputState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.CyclingInputState & proto.CyclingInputState.$Shape} CyclingInputState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CyclingInputState & proto.CyclingInputState.$Shape;

        /**
         * Decodes a CyclingInputState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.CyclingInputState & proto.CyclingInputState.$Shape} CyclingInputState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CyclingInputState & proto.CyclingInputState.$Shape;

        /**
         * Verifies a CyclingInputState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CyclingInputState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CyclingInputState
         */
        static fromObject(object: { [k: string]: any }): proto.CyclingInputState;

        /**
         * Creates a plain object from a CyclingInputState message. Also converts values to other types if specified.
         * @param message CyclingInputState
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.CyclingInputState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CyclingInputState to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CyclingInputState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CyclingInputState {

        /** Properties of a CyclingInputState. */
        interface $Properties {

            /** CyclingInputState id */
            id: number;

            /** CyclingInputState state */
            state: number;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CyclingInputState. */
        type $Shape = proto.CyclingInputState.$Properties;
    }

    /**
     * Properties of a ToggleInputState.
     * @deprecated Use proto.ToggleInputState.$Properties instead.
     */
    interface IToggleInputState extends proto.ToggleInputState.$Properties {
    }

    /** Represents a ToggleInputState. */
    class ToggleInputState {

        /**
         * Constructs a new ToggleInputState.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ToggleInputState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ToggleInputState id. */
        id: number;

        /** ToggleInputState state. */
        state: boolean;

        /**
         * Creates a new ToggleInputState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToggleInputState instance
         */
        static create(properties: proto.ToggleInputState.$Shape): proto.ToggleInputState & proto.ToggleInputState.$Shape;
        static create(properties?: proto.ToggleInputState.$Properties): proto.ToggleInputState;

        /**
         * Encodes the specified ToggleInputState message. Does not implicitly {@link proto.ToggleInputState.verify|verify} messages.
         * @param message ToggleInputState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.ToggleInputState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToggleInputState message, length delimited. Does not implicitly {@link proto.ToggleInputState.verify|verify} messages.
         * @param message ToggleInputState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.ToggleInputState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToggleInputState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.ToggleInputState & proto.ToggleInputState.$Shape} ToggleInputState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ToggleInputState & proto.ToggleInputState.$Shape;

        /**
         * Decodes a ToggleInputState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.ToggleInputState & proto.ToggleInputState.$Shape} ToggleInputState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ToggleInputState & proto.ToggleInputState.$Shape;

        /**
         * Verifies a ToggleInputState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToggleInputState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToggleInputState
         */
        static fromObject(object: { [k: string]: any }): proto.ToggleInputState;

        /**
         * Creates a plain object from a ToggleInputState message. Also converts values to other types if specified.
         * @param message ToggleInputState
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.ToggleInputState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToggleInputState to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ToggleInputState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ToggleInputState {

        /** Properties of a ToggleInputState. */
        interface $Properties {

            /** ToggleInputState id */
            id: number;

            /** ToggleInputState state */
            state: boolean;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ToggleInputState. */
        type $Shape = proto.ToggleInputState.$Properties;
    }

    /**
     * Properties of a BluetoothPairingState.
     * @deprecated Use proto.BluetoothPairingState.$Properties instead.
     */
    interface IBluetoothPairingState extends proto.BluetoothPairingState.$Properties {
    }

    /** Represents a BluetoothPairingState. */
    class BluetoothPairingState {

        /**
         * Constructs a new BluetoothPairingState.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.BluetoothPairingState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BluetoothPairingState id. */
        id: number;

        /** BluetoothPairingState macAddress. */
        macAddress: Uint8Array;

        /** BluetoothPairingState name. */
        name: string;

        /** BluetoothPairingState ble. */
        ble: boolean;

        /**
         * Creates a new BluetoothPairingState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BluetoothPairingState instance
         */
        static create(properties: proto.BluetoothPairingState.$Shape): proto.BluetoothPairingState & proto.BluetoothPairingState.$Shape;
        static create(properties?: proto.BluetoothPairingState.$Properties): proto.BluetoothPairingState;

        /**
         * Encodes the specified BluetoothPairingState message. Does not implicitly {@link proto.BluetoothPairingState.verify|verify} messages.
         * @param message BluetoothPairingState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.BluetoothPairingState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BluetoothPairingState message, length delimited. Does not implicitly {@link proto.BluetoothPairingState.verify|verify} messages.
         * @param message BluetoothPairingState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.BluetoothPairingState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BluetoothPairingState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.BluetoothPairingState & proto.BluetoothPairingState.$Shape} BluetoothPairingState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.BluetoothPairingState & proto.BluetoothPairingState.$Shape;

        /**
         * Decodes a BluetoothPairingState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.BluetoothPairingState & proto.BluetoothPairingState.$Shape} BluetoothPairingState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.BluetoothPairingState & proto.BluetoothPairingState.$Shape;

        /**
         * Verifies a BluetoothPairingState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BluetoothPairingState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BluetoothPairingState
         */
        static fromObject(object: { [k: string]: any }): proto.BluetoothPairingState;

        /**
         * Creates a plain object from a BluetoothPairingState message. Also converts values to other types if specified.
         * @param message BluetoothPairingState
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.BluetoothPairingState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BluetoothPairingState to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BluetoothPairingState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BluetoothPairingState {

        /** Properties of a BluetoothPairingState. */
        interface $Properties {

            /** BluetoothPairingState id */
            id: number;

            /** BluetoothPairingState macAddress */
            macAddress: Uint8Array;

            /** BluetoothPairingState name */
            name: string;

            /** BluetoothPairingState ble */
            ble: boolean;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BluetoothPairingState. */
        type $Shape = proto.BluetoothPairingState.$Properties;
    }

    /**
     * Properties of an AuxConfigBlock.
     * @deprecated Use proto.AuxConfigBlock.$Properties instead.
     */
    interface IAuxConfigBlock extends proto.AuxConfigBlock.$Properties {
    }

    /** Represents an AuxConfigBlock. */
    class AuxConfigBlock {

        /**
         * Constructs a new AuxConfigBlock.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.AuxConfigBlock.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AuxConfigBlock states. */
        states: proto.CyclingInputState.$Properties[];

        /** AuxConfigBlock toggleStates. */
        toggleStates: proto.ToggleInputState.$Properties[];

        /** AuxConfigBlock bluetoothStates. */
        bluetoothStates: proto.BluetoothPairingState.$Properties[];

        /**
         * Creates a new AuxConfigBlock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuxConfigBlock instance
         */
        static create(properties: proto.AuxConfigBlock.$Shape): proto.AuxConfigBlock & proto.AuxConfigBlock.$Shape;
        static create(properties?: proto.AuxConfigBlock.$Properties): proto.AuxConfigBlock;

        /**
         * Encodes the specified AuxConfigBlock message. Does not implicitly {@link proto.AuxConfigBlock.verify|verify} messages.
         * @param message AuxConfigBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: proto.AuxConfigBlock.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuxConfigBlock message, length delimited. Does not implicitly {@link proto.AuxConfigBlock.verify|verify} messages.
         * @param message AuxConfigBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: proto.AuxConfigBlock.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuxConfigBlock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {proto.AuxConfigBlock & proto.AuxConfigBlock.$Shape} AuxConfigBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AuxConfigBlock & proto.AuxConfigBlock.$Shape;

        /**
         * Decodes an AuxConfigBlock message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {proto.AuxConfigBlock & proto.AuxConfigBlock.$Shape} AuxConfigBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AuxConfigBlock & proto.AuxConfigBlock.$Shape;

        /**
         * Verifies an AuxConfigBlock message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuxConfigBlock message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuxConfigBlock
         */
        static fromObject(object: { [k: string]: any }): proto.AuxConfigBlock;

        /**
         * Creates a plain object from an AuxConfigBlock message. Also converts values to other types if specified.
         * @param message AuxConfigBlock
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: proto.AuxConfigBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuxConfigBlock to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AuxConfigBlock
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AuxConfigBlock {

        /** Properties of an AuxConfigBlock. */
        interface $Properties {

            /** AuxConfigBlock states */
            states?: (proto.CyclingInputState.$Properties[]|null);

            /** AuxConfigBlock toggleStates */
            toggleStates?: (proto.ToggleInputState.$Properties[]|null);

            /** AuxConfigBlock bluetoothStates */
            bluetoothStates?: (proto.BluetoothPairingState.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AuxConfigBlock. */
        type $Shape = proto.AuxConfigBlock.$Properties;
    }
}
