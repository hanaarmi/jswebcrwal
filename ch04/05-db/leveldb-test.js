var levelup = require('level');
var db = levelup("./testdb");

db.put('Apple', 'red', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    testGet();
});

function testGet() {
    db.get('Apple', function(err, value) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Apple = ' + value);
        
    })
}