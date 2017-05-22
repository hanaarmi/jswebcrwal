//var casper = require('casper').create({verbose:true, logLevel:"debug"});
var casper = require('casper').create();

var url = "http://www.slrclub.com/";
var id = "hanaarmi";
var password = "";

casper.start();

casper.open(url);

// casper.then(function() {
//     // casper.fill("#login",
//     // {
//     //     user_id: id,
//     //     password: password
//     // }, true);
//     // this.evaluate(function() {
//     //     document.getElementById("user_id").value = "hanaarmi";
//     //     document.getElementById("password").value = "wjdrhs79";
//     //     document.getElementById("login-process").children[0].click();
//     // });
    
//     this.evaluate(function() {
//         //document.getElementById("login-process").children[0].click();
//         document.querySelector("input.user-id").value = "hanaarmi";
//         document.querySelector("input.password").value = "wjdrhs79";
//         document.querySelector("button.rug.bt_login").click();
//         document.getElementById("login").submit();
//     });
  
// });

// casper.then(function() {
//     this.capture("login.jpg", {
//         top:0, left:0, width:1024, height:768
//     });
// });

casper.then(function() {
    var getDocument = function() {
        return document.querySelector("#art-part > ul.list.best_article.show > li:nth-child(1) > span.c_sbj > span.sbj > a").innerText;
        //return document.querySelector("#art-part").innerHTML;
    };
    console.log(this.evaluate(getDocument));
});

casper.run();