var parseString = require('xml2js').parseString;

var xml = "<fruits shop = 'AAA'>" +
    "<item price = '140'>Banana</item>" +
    "<item price = '200'>Apple</item>" +
    "</fruits>";

parseString(xml, function (err, res) {
    //console.log(JSON.stringify(res));

    var shop = res.fruits.$.shop;
    console.log("shop=" + shop);

    var items = res.fruits.item;
    for (var i in items) {
        var item = items[i];
        console.log("-- name=" + item._);
        console.log("   price=" + item.$.price);
    }
});