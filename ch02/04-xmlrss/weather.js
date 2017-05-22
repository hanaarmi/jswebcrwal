var RSS = "http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=4159058500";

var parseString = require('xml2js').parseString;
var request = require('request');

request(RSS, function(err, rsp, body) {
    if (!err && rsp.statusCode == 200) {
        analyzeRSS(body);
    }
});

function analyzeRSS(xml) {
    parseString(xml, function(err, res) {
        if (err) { console.log(err); return; }

        //console.log(JSON.stringify(res));
        var datas = res.rss.channel[0].item[0].description[0].body[0].data;
 
        for (var i in datas) {
            var data = datas[i];
            console.log("hour:" + data.hour + " = " + data.temp + " " + data.wfKor + " " + data.wdKor);
        }
    });
};