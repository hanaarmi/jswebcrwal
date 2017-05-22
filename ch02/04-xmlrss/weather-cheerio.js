var RSS = "http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=4159058500";

var client = require('cheerio-httpcli');

client.fetch(RSS, function(err, $, rsp) {
    if (err) { console.log(err); return; }
    // nth-child : css selector, select the (n)th element under same parent of defined element
    $("body:nth-child(2) > data").each(function(idx) {
        var hour = $(this).find('hour').text();
        var temp = $(this).find('temp').text();
        var wfKor = $(this).find('wfKor').text();
        var wdKor = $(this).find('wdKor').text();
        console.log("hour:" + hour + " = " + temp + " " + wfKor + " " + wdKor);
    });
});