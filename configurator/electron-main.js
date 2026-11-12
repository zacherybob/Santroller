const { app, BrowserWindow, session } = require('electron');
const path = require('path');

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

  const ses = win.webContents.session;

  // 1. Grant WebHID permissions
  ses.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
    return true;
  });

  ses.setDevicePermissionHandler((details) => {
    return true;
  });

  // 2. Critical for Electron WebHID: automatically select the device when requested
  // or return the matched Santroller device when navigator.hid.requestDevice() is called
  ses.on('select-hid-device', (event, details, callback) => {
    event.preventDefault();

    if (details.deviceList && details.deviceList.length > 0) {
      // Find Santroller or Pi Pico device by VID/PID or usagePage
      const santrollerDevice = details.deviceList.find(d => 
        (d.vendorId === 0x1209 && (d.productId === 0x2882 || d.productId === 0x2883)) ||
        d.vendorId === 0x046d ||
        d.collections?.some(c => c.usagePage === 0xFF00 || c.usagePage === 65280) ||
        (d.productName && d.productName.toLowerCase().includes('santroller'))
      );

      if (santrollerDevice) {
        callback(santrollerDevice.deviceId);
      } else {
        // Fall back to first available device in list
        callback(details.deviceList[0].deviceId);
      }
    } else {
      callback('');
    }
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
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
