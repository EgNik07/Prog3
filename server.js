var express = require("express");
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = 3000;



//var fs = require("fs");

app.get("/", function(req, res){


    res.sendFile(path.join(__dirname, '/index.html'));
   

});



app.use(express.static('./'));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var matrix = [];  
function matrixCreat(x,y){
    matrix = [];  
    for(i =0; i<y;i++){
        
        arr = [];
        for(c=0; c<=x; c++){
            arr.push(getRandomInt(7));
        }
        matrix.push(arr);
        
    }
    
}




io.on('connection', function(socket){
    console.log("connect");
    matrixCreat(10,10);
    io.on('disconnect', () => {
        // Выводи 'disconnected'
        console.log('disconnected');
    });
    
    io.emit("data",matrix)
});



server.listen(port, function(){

console.log("Example is running on port "+ port);

});