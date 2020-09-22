const { app, BrowserWindow, globalShortcut } = require('electron')
const config = require("./config")

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 500,
    height: 450,
    titleBarStyle: 'hidden',
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(config.url)

  //win.webContents.openDevTools()
}

function toggleDevTools() {
  win.webContents.toggleDevTools()
}

function createShortcust() {
  globalShortcut.register("CmdORCtrl+z", toggleDevTools)
}

app.whenReady().then(createWindow).then(createShortcust)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})