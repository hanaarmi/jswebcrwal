var DELAY = 1000;

var word = "고양이";
var url = "https://www.google.co.kr/search?hl=ko&site=webhp&tbm=isch&q=" +
    encodeURIComponent(word);

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var fs = require('fs');

var win = null;
app.on('ready', function() {
    win = new BrowserWindow({width: 1024, height: 800});
    win.loadURL(url);
    win.webContents.on('did-finish-load', captureFunc);
});

function captureFunc() {
    setTimeout(function() {
        var fname = "cat-" + (new Date()).getTime() + ".png";
        win.capturePage(function(img) {
            fs.writeFileSync(fname, img.toPng());
            app.quit();
        });
    }, DELAY);
}