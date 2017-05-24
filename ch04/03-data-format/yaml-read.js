var yaml = require('js-yaml');
var fs = require('fs');

var txt = fs.readFileSync(__dirname + "\\test.yml", "utf-8");
var obj = yaml.safeLoad(txt);

for (var i in obj.items) {
    var item = obj.items[i];
    console.log(item.name, item.price);
}