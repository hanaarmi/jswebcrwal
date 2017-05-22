var client = require('cheerio-httpcli');
var urlType = require('url');

var url = "http://ko.wikipedia.org/wiki/" + encodeURIComponent("강아지");
var param = {};

client.fetch(url, param, function(err, $, res) {
    if (err) { console.log("error"); return; }

    $("img").each(function(idx) {
        var src = urlType.resolve(url, $(this).attr('src'));
        console.log(src);
    })
})