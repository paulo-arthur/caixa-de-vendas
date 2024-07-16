const {app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    autoHideMenuBar: true,
    icon: 'build.ico',
    webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
}
  })

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
})

try {
  require('electron-reloader')(module, {ignore: [regex_to_config_json]})
  //require('electron-reloader')(module)
} catch (_) {}
