var fs = require('fs');
var cheerio = require('cheerio');
var Iconv = require('iconv').Iconv;
var euckr2utf8 = new Iconv('EUC-KR', 'UTF-8');


var xmlgon = fs.readFileSync(__dirname + "\\news_00.xml");
var xmlutf8 = euckr2utf8.convert(xmlgon);

$ = cheerio.load(xmlutf8, {xmlMode: true});

$("item").each(function(i, el) {
    var title = $(this).children("title").text();
    var desc = $(this).children("description").text();
    console.log(title);
    console.log(desc);
    console.log("-------------------------------");
});