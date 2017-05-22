var casper = require('casper').create({verbose: true, logLevel: "debug"});

var url = "http://www.slrclub.com/";
var id = "hanaarmi";
var pw = "wjdrhs79";

casper.start();

casper.open(url);

casper.then(function() {
    this.evaluate(function() {
        document.querySelector("input.user-id").value = id;
        document.querySelector("input.password").value = pw;
        document.querySelector("button.rug.bt_login").click();
        document.getElementById("login").submit();
    });
});