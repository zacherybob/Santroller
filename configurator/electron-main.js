const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Crucial Chromium flags for WebHID permissions and controller collection access
app.commandLine.appendSwitch('disable-hid-blocklist');
app.commandLine.appendSwitch('enable-experimental-web-platform-features');

let HID;
try {
  HID = require('node-hid');
  console.log('node-hid loaded successfully');
} catch (e) {
  console.warn('node-hid not available, falling back to WebHID only:', e.message);
}

// Active device handle map for node-hid
const openDevices = new Map();

function setupNodeHidIpc(win) {
  ipcMain.handle('node-hid-status', async () => {
    return { available: !!HID };
  });

  ipcMain.handle('node-hid-list', async () => {
    if (!HID) return [];
    try {
      const all = HID.devices();
      return all;
    } catch (e) {
      console.error('node-hid list error:', e);
      return [];
    }
  });

  ipcMain.handle('node-hid-open', async (event, devicePath) => {
    if (!HID) throw new Error('Native HID not supported on this platform');
    try {
      if (openDevices.has(devicePath)) {
        try { openDevices.get(devicePath).close(); } catch {}
      }
      const dev = new HID.HID(devicePath);
      openDevices.set(devicePath, dev);

      dev.on('data', (data) => {
        if (!win.isDestroyed()) {
          win.webContents.send('node-hid-data', {
            path: devicePath,
            data: Array.from(data)
          });
        }
      });

      dev.on('error', (err) => {
        console.error('node-hid device error:', err);
      });

      return true;
    } catch (e) {
      console.error('node-hid open failed:', e);
      throw e;
    }
  });

  ipcMain.handle('node-hid-close', async (event, devicePath) => {
    if (openDevices.has(devicePath)) {
      try {
        openDevices.get(devicePath).close();
      } catch {}
      openDevices.delete(devicePath);
    }
    return true;
  });

  ipcMain.handle('node-hid-send-feature-report', async (event, { path: devicePath, data }) => {
    const dev = openDevices.get(devicePath);
    if (!dev) throw new Error('Device not open');
    return dev.sendFeatureReport(Buffer.from(data));
  });

  ipcMain.handle('node-hid-receive-feature-report', async (event, { path: devicePath, reportId, length }) => {
    const dev = openDevices.get(devicePath);
    if (!dev) throw new Error('Device not open');
    const buf = dev.getFeatureReport(reportId, length || 64);
    return Array.from(buf);
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 850,
    minWidth: 960,
    minHeight: 680,
    backgroundColor: '#0e111a',
    title: 'Santroller Configurator',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  setupNodeHidIpc(win);

  const ses = win.webContents.session;

  // Grant WebHID permissions
  ses.setPermissionCheckHandler(() => true);
  ses.setDevicePermissionHandler(() => true);

  // WebHID automatic & manual device selection
  ses.on('select-hid-device', (event, details, callback) => {
    event.preventDefault();

    if (details.deviceList && details.deviceList.length > 0) {
      const santrollerDevice = details.deviceList.find(d => 
        (d.vendorId === 0x1209) ||
        (d.vendorId === 0x2e8a) || // Raspberry Pi Pico
        (d.vendorId === 0x046d) ||
        (d.vendorId === 0x12ba) ||
        (d.vendorId === 0x045e) ||
        (d.collections && d.collections.some(c => c.usagePage === 0xFF00 || c.usagePage === 65280)) ||
        (d.productName && /santroller|rp2040|pico|guitar|drum|controller/i.test(d.productName))
      );

      if (santrollerDevice) {
        callback(santrollerDevice.deviceId);
        return;
      }
    }
    // Never pick an unknown device (e.g. mouse/keyboard) blindly
    callback('');
  });

  const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

  if (isDev && process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(__dirname, 'dist/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  for (const dev of openDevices.values()) {
    try { dev.close(); } catch {}
  }
  openDevices.clear();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
