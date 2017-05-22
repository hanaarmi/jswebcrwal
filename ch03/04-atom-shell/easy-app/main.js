var url = "https://ko.wikipedia.org";

var electron = require('electron');
var app = electron.app;
var BrowseWindow = electron.BrowserWindow;

app.on('ready', function() {
    win = new BrowseWindow({
        width: 800,
        height: 600
    });
    win.loadURL(url);
})