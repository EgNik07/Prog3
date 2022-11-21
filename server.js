var express = require("express");
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const fs = require("fs");
var port = 3000;

var FPS = 300;

var matrix_sizeX =50;
var matrix_sizeY =50;

var grassArr = []; //
var redgrassArr = [];//
var eatersArr = [];
var eaterblueArr = [];//
var eaterredArr = [];
var eaterdarkArr = [];
var hunterArr = [];

var oldMaximum = 10;
var global_gamesCount = 0;
var gamesCount = 0;
var oldCount;

var hpConts = 1.0;

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
    hunterArr=[];
    matrix = []; 
    for(i =0; i<y;i++){
        
        arr = [];
        for(c=0; c<=x; c++){
            var gt =getRandomInt(4)- getRandomInt(4);
            if(gt <0){
                var gt = 0;
            }
            

            arr.push(gt );
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

var GrassEater = require("./class/GrassEater");
var Grass = require("./class/Grass");
var Hunter = require("./class/Hunter")
var RedGrass = require("./class/RedGrass");
var Eaterblue = require("./class/Eaterblue");

var Eaterdark = require("./class/Eaterdark");
var Eaterred = require("./class/Eaterred");
var startGame = true;
var oldCountMax =0;

var ages = 0;
var days = 0;
var mounts = 6;
var summer = true;
var winter = false;
var autumn = false;
var spring =  false;
function GAME() {
    days++;
    if(days >=30){
        mounts ++;
        days = 0;
    }
   
    if(mounts ==3 ){
        winter = false;
        spring = true;
        
    }
    else if(mounts ==6 ){
        spring = false;
        summer = true;
    }
    else if(mounts ==9){
        summer = false
        autumn = true;
      
    }
    else if(mounts ==12 ){
        winter = true;
        autumn = false;
        
    }
    else if (mounts >12){
        ages++;
        mounts =0;
    }
   
    //console.log(eatersArr);
    //console.log(gamesCount+":"+dieCount,lifeCount,mullCount,moveCount+": Male "+maleCount+" Gerl:"+gerlCount +" Grass:"+grassCount);
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
    
    if(startGame){

        // var  str = fs.readFileSync('data/data.txt', 'utf8');
        // global_gamesCount = parseInt(str.split('\n')[0],10)+1;
        
        // //fs.appendFile("data/data.txt","hi");
        // var now = new Date();
        // fs.writeFileSync("data/data.txt",global_gamesCount+
        // "\n/////\n"+now +"\n"
        // +"time finish game:"+ ages+"/"+mounts+"/"+days
        // + fs.readFileSync("data/data.txt", "utf8"));
        // fs.writeFileSync("data/games/game_"+global_gamesCount+".txt",
        // "\n/////\n"+now +"\n"
        // +"time finish game:"+ ages+"/"+mounts+"/"+days
        // +"\nMullCount:"+mullCount);
        days =0;
        ages =0; 
        mounts = 6;
        dieCount = 0;
        lifeCount = 0;
        mullCount =0;
        moveCount = 0;
        maleCount =0;
        gerlCount =0;
        grassCount =0;
        matrixCreat();
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }
            else if (matrix[y][x] == 3) {
                
                var hunter = new Hunter(x, y,Math.floor(Math.random() * 2)==1,15*hpConts);
                hunterArr.push(hunter);
                }
    
            else if (matrix[y][x] == 2) {

            var eater = new GrassEater(x, y, Math.floor(Math.random() * 2)==1,10*hpConts);
            eatersArr.push(eater);
            }
            
        }
    }
    startGame = false;
}   
    weather =[days, mounts, ages, summer, autumn, winter, spring];
    info = [gamesCount,dieCount,lifeCount,mullCount,moveCount,maleCount,gerlCount,grassCount];
    data = [matrix,grassArr,redgrassArr,eatersArr,
        eaterblueArr,eaterredArr,eaterdarkArr,info,weather];
    io.emit("data",data);
if(matrix != undefined){
    for (var i in grassArr) {
        grassArr[i].mul(matrix,grassArr);
        
    }
    for (var i in redgrassArr) {
        
        redgrassArr[i].mul(matrix,redgrassArr);
    }
    for (var i in hunterArr) {
        hunterArr[i].eat(matrix,hunterArr,eatersArr);
    }
    for (var i in eatersArr) {
        
        eatersArr[i].eat(matrix,eatersArr,grassArr);
    }
   
    
   
}
    

    //endc = 0;
    
    
}



app.use(express.static('./'));






io.on('connection', function(socket){
    //console.log("connect");
    
   
    socket.on("restart", function(dt){
        if(days > 5 ){
        startGame=true;
        console.log(dt);
        
        }
    });
    socket.on("clickCoord" ,function(clickCoord){
       
        var sofd = clickCoord[2];
        var oldX = clickCoord[0]-2;
        var oldY = clickCoord[1]-2;
        //console.log(sofd)
        if(sofd ==1){
            var x = clickCoord[0];
            var y = clickCoord[1];
        }
        else if(sofd ==2){
            var x = clickCoord[0]-1;
            var y = clickCoord[1]-1;
        }
        else{
            var x = clickCoord[0]+2;
            var y = clickCoord[1]+2;
        }
        if(x<0)x =0;
        if(y<0)y=0;
        if(x>matrix_sizeX)x=matrix_sizeX;
        if(y>matrix_sizeY)y=matrix_sizeY;
        //console.log(matrix[y][x]);
        
        
        
    

        
        //for (var f =0; f<sofd;f++){
            for(oldY; oldY<=y ;oldY++){
                if(matrix[y][x] == 1){
            
                  for(oldX; oldX<=x;oldX++){
                     for(i in grassArr){
                        if(grassArr[i].x == oldX && grassArr[i].y ==oldY){
                        grassArr.splice(i, 1);
                        matrix[oldY][oldX] = 0;
                        ///console.log("///"+matrix[Y][X]);
                        }
                    
                    }///
                    
                    console.log(oldX)
                    
                    }  
                    oldX=0;
            }  
        
        
    }
        
    
    
    }///
//}

    );

    setInterval(GAME,FPS);
    
    
    
});



server.listen(port, function(){

console.log("Example is running on port "+ port);

});

