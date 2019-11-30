// const {ipcRenderer} = require('electron').remote
export function logError(logVal = ''){
    logVal = logVal instanceof Error ? logVal.stack : JSON.stringify(logVal)
    window.ipcRenderer.send('logger-info', logVal)
}

// Async message handler
window.ipcRenderer.on('logged-success', (event, arg) => {
    console.log('successfully logged')
 })