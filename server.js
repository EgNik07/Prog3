var express = require("express");
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = 3000;

var FPS = 500;

var matrix_sizeX =50;
var matrix_sizeY =50;

var grassArr = []; //
var redgrassArr = [];//
var eatersArr = [];
var eaterblueArr = [];//
var eaterredArr = [];
var eaterdarkArr = [];

var oldMaximum = 10;
var global_gamesCount = 0;
var gamesCount = 0;
var oldCount;
//var fs = require("fs");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function matrixCreat(x =matrix_sizeX,y=matrix_sizeY){
    
    grassArr = []; //
    redgrassArr = [];//
    eatersArr = [];
    eaterblueArr = [];//
    eaterredArr = [];
    eaterdarkArr = [];
    matrix = []; 
    for(i =0; i<y;i++){
        
        arr = [];
        for(c=0; c<=x; c++){
            arr.push(getRandomInt(3));
        }
        matrix.push(arr);
        
    }
    gamesCount++;
    
}

///
app.get("/", function(req, res){


    res.sendFile(path.join(__dirname, '/index.html'));
   

});
var matrix = [];  


var Grass = require("./class/Grass");
var RedGrass = require("./class/RedGrass");
var Eaterblue = require("./class/Eaterblue");
var GrassEater = require("./class/GrassEater");
var Eaterdark = require("./class/Eaterdark");
var Eaterred = require("./class/Eaterred");
var startGame = true;
var oldCountMax =0;
function GAME() {
    //console.log(eatersArr);
    console.log(gamesCount+":"+dieCount,lifeCount,mullCount,moveCount+": Male "+maleCount+" Gerl:"+gerlCount +" Grass:"+grassCount);
    if( oldCount ==dieCount+lifeCount+mullCount+moveCount){
        oldCountMax++;
        if(oldCountMax==oldMaximum){
            startGame =true;
            oldCountMax =0;
            oldCount =0;
        }
        

    }
    else{
        oldCount =dieCount+lifeCount+mullCount+moveCount;
    }
    io.on("restart", function(dt){
        startGame=true;
        console.log(dt);
    });
    if(startGame){
    matrixCreat();
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }

            else if (matrix[y][x] == 2) {
                if( Math.floor(Math.random() * 2)==1){
                    var eater = new GrassEater(x, y,1);
                }
                else{
                    var eater = new GrassEater(x, y,0);
                }
                
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
    startGame = false;
}
    data = [matrix,grassArr,redgrassArr,eatersArr,
        eaterblueArr,eaterredArr,eaterdarkArr];
    io.emit("data",data);
if(matrix != undefined){
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
}
    
    
    //endc = 0;
    
    
}



app.use(express.static('./'));






io.on('connection', function(socket){
    console.log("connect");
    setInterval(GAME,FPS);
    io.on('disconnect', (res,req) => {
       res.send('disconnected');
       console.log('disconnected');
    });
    
    
});



server.listen(port, function(){

console.log("Example is running on port "+ port);

});

