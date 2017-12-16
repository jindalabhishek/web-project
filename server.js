var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/public/'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
//app.get('/', function(req, res){
//   res.send("Hello world!");
//});

app.listen(8080);
console.log("hi");