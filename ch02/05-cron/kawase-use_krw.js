var API = "http://api.aoikujira.com/kawase/get.php?code=USD&format=json";

var request = require('request');
var fs = require('fs');

request(API, function(err, rsp, body) {
    if (err || rsp.statusCode != 200) { console.log(err); return; }
    //console.log(body);
    
    var r = JSON.parse(body);
    var krw = r.KRW;
    //console.log(krw);

    var t = new Date();
    var fname = "USDtoKR-" + t.getFullYear() + "-" + (t.getMonth() + 1) +
        t.getDay() + ".txt";
    var txt = "1usd=" + krw + "krw";
    console.log(txt);
    fs.writeFile(fname, txt);
});