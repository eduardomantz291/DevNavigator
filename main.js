const { app, BrowserWindow, globalShortcut } = require('electron')
const URL = "http://localhost:3000/"

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 1080,
    height: 660,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(URL)

  //win.webContents.openDevTools()
}

function toggleDevTools() {
  win.webContents.toggleDevTools()
}

function createShortcust() {
  globalShortcut.register("CmdORCtrl+y", toggleDevTools)
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
