// Modules to control application life and create native browser window
const Sentry = require('@sentry/electron');
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url');
const logger = require('electron-log')
const fs = require('fs');

Sentry.init({dsn: 'https://{replaceiwithownid}@sentry.io/{replacewithownid}'});
 
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  setupLogger()
  // myUndefinedFunction();
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: false,
      preload: __dirname + '/src/preload.js'
  }
  })

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3000')
  // mainWindow.loadURL(`file://${__dirname}/public/index.html`)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

function setupLogger() {
  // Write to this file, must be set before first logging
  logger.transports.file.file = __dirname + '/log.log';

  // fs.createWriteStream options, must be set before first logging
  logger.transports.file.streamConfig = {flags: 'w'};
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

app.on('certificate-error', function(event, webContents, url, error, 
  certificate, callback) {
      event.preventDefault();
      callback(true);
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Event handler for asynchronous incoming messages
ipcMain.on('logger-info', async (event, arg) => {
  console.log(event, arg)
  await logger.warn(arg)
  // Event emitter for sending asynchronous messages
  event.sender.send('logged-success')
})