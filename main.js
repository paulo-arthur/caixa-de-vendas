const {app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
}
  })

  win.loadFile('index.html');
  win.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
})

try {
  require('electron-reloader')(module, {ignore: [regex_to_config_json]})
  //require('electron-reloader')(module)
} catch (_) {}
