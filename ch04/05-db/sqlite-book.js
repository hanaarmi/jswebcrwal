var DB_PATH = __dirname + "\\jpub.sqlite";

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database(DB_PATH);

var BASE_URL = "http://jpub.tistory.com/category/" + encodeURIComponent("제이펍의 도서");
var PAGE_NUM = 7;

var client = require('cheerio-httpcli');
var fs = require('fs');
var urlType = require('url');

var booklist = [];

scrape(1);

function scrape(page) {
    if (page > PAGE_NUM) {
        dbinsert();
        return;
    }

    var VISIT_URL = BASE_URL + "?page=" + page;

    client.fetch(VISIT_URL, function(err, $, rsp) {
        if (err) {
            console.log(err);
            return;
        }
        var tr = $("#searchList > ol > li > span.list > a");
        if (!tr) {
            console.log("page parse error");
            return;
        }

        for (var i=0; i<tr.length; i++) {
            var book = tr.eq(i).text();
            //console.log(book);
            booklist.push(book);
        }
        scrape(page+1);
    });
}

function dbinsert() {
    db.serialize(function() {
        db.run("CREATE TABLE IF NOT EXISTS book(" +
            "id INTEGER PRIMARY KEY, " +
            "token TEXT)"
        );

        var ins_stmt = db.prepare(
            "INSERT INTO book (token) " +
            "VALUES(?)"
        );

        booklist.forEach(function(value, index, array) {
            var words = value.split(" ");
            for (var i in words) {
                ins_stmt.run(words[i]);
            }
        });

        ins_stmt.finalize();

        console.log("analysis result");
        db.each("SELECT token, COUNT(token) as cnt FROM book GROUP BY token having cnt > 3 ORDER BY cnt DESC",
            function(err, row) {
                console.log(row.cnt + ":" + row.token);
            }
        );
    });
};