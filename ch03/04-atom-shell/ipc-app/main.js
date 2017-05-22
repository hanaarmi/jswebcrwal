var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;

// Run Main Window
var mainWindow = null;
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    app.on('closed', function() {
        mainWindow = null;
    });
});

// Receive synced message
ipc.on('mul-sync', function(event, arg) {
    console.log(arg);
    event.returnValue = arg.a * arg.b;
});

// Receive non-synced message
ipc.on('mul-async', function(event, arg) {
    console.log(arg);
    var returnValue = arg.a * arg.b;
    event.sender.send('mul-async-reply', returnValue);
});