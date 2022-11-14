var express = require("express");
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = 3000;




var grassArr = []; //
var redgrassArr = [];//
var eatersArr = [];
var eaterblueArr = [];//
var eaterredArr = [];
var eaterdarkArr = [];
//var fs = require("fs");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

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

///
app.get("/", function(req, res){


    res.sendFile(path.join(__dirname, '/index.html'));
   

});
var matrix = [];  
matrixCreat(10,10);

var Grass = require("./class/Grass");
var RedGrass = require("./class/RedGrass");
var Eaterblue = require("./class/Eaterblue");
var GrassEater = require("./class/GrassEater");
var Eaterdark = require("./class/Eaterdark");
var Eaterred = require("./class/Eaterred");

function GAME() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }

            else if (matrix[y][x] == 2) {
                var eater = new GrassEater(x, y);
                eatersArr.push(eater);
            }
            else if (matrix[y][x] == 3) {
                var eaterbluE = new Eaterblue(x, y);
                eaterblueArr.push(eaterbluE);

            }
            else if (matrix[y][x] == 4) {
                var eaterred = new Eaterred(x, y);
                eaterredArr.push(eaterred);
            }
            else if (matrix[y][x] == 5) {
                var eaterdark = new Eaterdark(x, y);
                eaterdarkArr.push(eaterdark);
            }
            else if (matrix[y][x] == 6) {
                var redgrass = new RedGrass(x, y);
                redgrassArr.push(redgrass);
            }

        }
    }
    
    data = [matrix,grassArr,redgrassArr,eatersArr,
        eaterblueArr,eaterredArr,eaterdarkArr];
    io.emit("data",data);
    for (var i in grassArr) {
        grassArr[i].mul(matrix,grassArr);
        
    }
    for (var i in redgrassArr) {
        redgrassArr[i].mul(matrix,redgrassArr);
    }

    for (var i in eatersArr) {
        eatersArr[i].eat(matrix,eatersArr,grassArr);
    }
    for (var i in eaterblueArr) {
        eaterblueArr[i].eat(matrix,eaterblueArr);
    }
    for (var i in eaterredArr) {
        eaterredArr[i].eat(matrix,eaterredArr);
    }
    for (var i in eaterdarkArr) {
        eaterdarkArr[i].eat(matrix,eaterdarkArr);
    }
    
    
    //endc = 0;
    
    
}



app.use(express.static('./'));






io.on('connection', function(socket){
    console.log("connect");
    
    io.on('disconnect', (res,req) => {
       res.send('disconnected');
       console.log('disconnected');
    });
    
    
});



server.listen(port, function(){

console.log("Example is running on port "+ port);

});
setInterval(GAME,1000);