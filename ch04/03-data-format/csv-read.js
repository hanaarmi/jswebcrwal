var fs = require('fs');
var CSV = require('comma-separated-values');
var Iconv = require('iconv').Iconv;

var iconv = new Iconv('EUC-KR', 'UTF-8');
var buf = fs.readFileSync(__dirname + "\\test.csv");
var txt = iconv.convert(buf).toString('UTF-8');

var csv = new CSV(txt, {header:true});
var records = csv.parse();

records.shift();

for (var i=0; i<records.length; i++) {
    var item = records[i];
    
    // object when header of csv is true
    console.log(item);

    // array when header of csv is false
    // var name = item[0];
    // var price = item[1];
    // var memo = item[2];
    // console.log(name, price, memo);
}