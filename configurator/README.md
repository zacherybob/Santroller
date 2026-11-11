# Santroller Configurator

A desktop and web-based configuration suite for the **Santroller** rhythm game controller platform.

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, **Electron**, and official **Protobuf.js** bindings compiled directly from the firmware's `.proto` schemas.

---

## Features

- **Profile & Emulation Management**:
  - Emulate Guitar Hero Guitars, Rock Band Guitars & Drums, DJ Hero Turntables, Stage Kits, Keyboards, Fightsticks, and Standard Gamepads.
  - Configure console modes (Xbox 360 XInput, PS3/PS4/PS5, Switch, Original Xbox, PC).
  - Toggles for XInput on Windows, PS4/PS5 authentication mode, GH:WT slider touch bars, and drum cymbal glitch fixes.

- **Hardware & Peripherals**:
  - Add and configure WS2812 addressable RGB LEDs and APA102 DotStar SPI LEDs.
  - Wii Extension port (I2C) & PlayStation 1/2 controller adapters (SPI).
  - Analog multiplexers (74HC4051 / 74HC4067).
  - Key Matrix scanners, MPR121 capacitive touch sensors, USB Host (Pico-PIO-USB), and Serial MIDI DIN UART.

- **Input-to-Output Mappings**:
  - Map any GPIO pin (digital or analog) to instrument buttons and axes.
  - Pin auto-detection command triggers firmware pin sniffing via USB HID.
  - Analog calibration: Min, Max, Center, Deadzone, Peak-based triggers, and Debounce time.

- **LED & Lighting Effects**:
  - Animated Rainbow cycles and color fading breathing animations.
  - Button-reactive / hit-reactive illumination effects with RGB start/end gradient color pickers.
  - Live color gradient preview.

- **Live Telemetry & Diagnostics**:
  - Real-time digital button state indicators and analog gauge bars.
  - Streaming firmware debug console logs (`proto.ConsoleEvent` / `printf` over HID).
  - One-click reboot into `BOOTSEL` / bootloader mode for updating UF2 firmware.

- **Offline Simulator & File Persistence**:
  - Integrated virtual Santroller simulator for testing configurations without physical hardware.
  - Direct import / export of JSON configuration files.
  - Live WebHID / Electron USB communication using native feature reports (`ReportIdConfig`, `ReportIdConfigInfo`, `ReportIdCommand`, `ReportIdKeepalive`).

---

## Development

### 1. Install dependencies:
```bash
cd configurator
npm install
```

### 2. Regenerate Protobuf types (if .proto files change):
```bash
npm run proto:gen
```

### 3. Run development preview:
```bash
npm run dev
```

### 4. Build for production / Electron packaging:
```bash
npm run build
npm run electron:pack
```
