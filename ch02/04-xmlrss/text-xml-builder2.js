var xml2js = require('xml2js');
var parseString = xml2js.parseString;
var Builder = xml2js.Builder;

var xml = "<fruits shop = 'AAA'>" +
    "<item price = '140'>Banana</item>" +
    "<item price = '200'>Apple</item>" +
    "</fruits>";

// translated by gon manually from variable xml
var json = {"fruits":{$:{"shop":"AAA"},"item":[{"$":{"price":"140"},"_":"Banana"},{"$":{"price":"200"},"_":"Apple"}]}};


parseString(xml, function(err, res) {
    console.log(JSON.stringify(res));

    var xml = new Builder().buildObject(res);
    console.log(xml);
    var xmlFromJson = new Builder().buildObject(json);
    console.log(xmlFromJson);
})