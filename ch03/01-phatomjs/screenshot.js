var TARGET_URL = "http://jpub.tistory.com";

var casper = require('casper').create();

casper.start();

casper.open(TARGET_URL);

casper.then(function() {
    casper.capture("screenshot.png");
});

casper.run();