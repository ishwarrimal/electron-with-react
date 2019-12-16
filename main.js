// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, Menu, dialog } = require("electron");
const path = require("path");
const url = require("url");
const logger = require("electron-log");
const fs = require("fs");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const isMac = process.platform === "darwin";

const template = [
  // { role: 'appMenu' }
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            { role: "about" },
            { type: "separator" },
            { role: "services" },
            { type: "separator" },
            { role: "hide" },
            { role: "hideothers" },
            { role: "unhide" },
            { type: "separator" },
            { role: "quit" }
          ]
        }
      ]
    : []),
  // { role: 'fileMenu' }
  {
    label: "File",
    submenu: [isMac ? { role: "close" } : { role: "quit" }]
  },
  // { role: 'editMenu' }
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      ...(isMac
        ? [
            { role: "pasteAndMatchStyle" },
            { role: "delete" },
            { role: "selectAll" },
            { type: "separator" },
            {
              label: "Speech",
              submenu: [{ role: "startspeaking" }, { role: "stopspeaking" }]
            }
          ]
        : [{ role: "delete" }, { type: "separator" }, { role: "selectAll" }])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "forcereload" },
      { role: "toggledevtools" },
      { type: "separator" },
      { role: "resetzoom" },
      { role: "zoomin" },
      { role: "zoomout" },
      { type: "separator" },
      { role: "togglefullscreen" }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: "Window",
    submenu: [
      { role: "minimize" },
      { role: "zoom" },
      ...(isMac
        ? [
            { type: "separator" },
            { role: "front" },
            { type: "separator" },
            { role: "window" }
          ]
        : [{ role: "close" }])
    ]
  },
  {
    role: "help",
    submenu: [
      {
        label: "Learn More",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal("https://electronjs.org");
        }
      }
    ]
  },
  {
    label: "About",
    submenu: [{ label: "Version:  " + app.getVersion() }]
  },
  {
    label: "About Me",
    submenu: [
      {
        label: "About me",
        click: () => {
          dialog.showMessageBox({
            title: "Hello there",
            message:
              "Hi, I am Ishwar Rimal aka theHumbleBeing. I am a software engineer with more love towards front end especially JavaScript. Feel free to reach me at ishwar.rimal@gmail.com for any doubt.",
            icon:
              "/Users/ishwarrimal/Documents/learn/github/electron-with-react/tongueout.jpg"
          });
        }
      },
      { type: "separator" },
      {
        label: "Twitter: @theHumbleBeing",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal("https://twitter.com/theHumbleBeing");
        }
      },
      {
        label: "Linkedin: ishwar-rimal-319647b3",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal(
            "https://www.linkedin.com/in/ishwar-rimal-319647b3/"
          );
        }
      },
      {
        label: "Medium: @ishwar.rimal",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal("https://medium.com/@ishwar.rimal");
        }
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

function createWindow() {
  // Create the browser window.
  setupLogger();
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: false,
      preload: __dirname + "/src/preload.js"
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000");
  // mainWindow.loadURL(`file://${__dirname}/public/index.html`)

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

function setupLogger() {
  // Write to this file, must be set before first logging
  logger.transports.file.file = __dirname + "/log.log";

  // fs.createWriteStream options, must be set before first logging
  logger.transports.file.streamConfig = { flags: "w" };
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});

app.on("certificate-error", function(
  event,
  webContents,
  url,
  error,
  certificate,
  callback
) {
  event.preventDefault();
  callback(true);
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Event handler for asynchronous incoming messages
ipcMain.on("logger-info", async (event, arg) => {
  console.log(event, arg);
  await logger.warn(arg);
  // Event emitter for sending asynchronous messages
  event.sender.send("logged-success");
});
