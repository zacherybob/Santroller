const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 650,
    backgroundColor: '#0e111a',
    title: 'Santroller Configurator',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Enable WebHID permissions in Electron
  win.webContents.session.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
    if (permission === 'hid') {
      return true;
    }
    return true;
  });

  win.webContents.session.setDevicePermissionHandler((details) => {
    if (details.deviceType === 'hid') {
      return true;
    }
    return true;
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
