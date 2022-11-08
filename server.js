var express = require("express");
var path = require('path');

var app = express();


app.get("/", function(req, res){

    res.sendFile(path.join(__dirname, '/index.html'));
   

});


//app.use(express.static('express'));

app.listen(3000, function(){

console.log("Example is running on port 3000");

});