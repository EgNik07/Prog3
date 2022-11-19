var side = 10;


var end = 10;
var old = 0;
var endc = 0;

var games = 0;
var FPS = 1;
var socket = io.connect("http://localhost:3000/");
var matrix;
var dataTrue;
var grassArr = []; //
var redgrassArr = [];//
var eatersArr = [];
var eaterblueArr = [];//
var eaterredArr = [];
var eaterdarkArr = [];
socket.on("data", function(data){
    // for(i=0;i<data.length;i--){
    //     console.log(data[i]);
    // }
   
    
    
    matrix=data[0];
    //console.log(matrix);
    dataTrue =true;
    grassArr = data[1]; //
    redgrassArr = data[2];//
    eatersArr = data[3];
    eaterblueArr = data[4];//
    eaterredArr = data[5];
    eaterdarkArr = data[6];
    //console.log(data[3]);
    info = data[7];
    games = info[0];
    dieCount = info[1];
    lifeCount = info[2];
    mullCount = info[3];
    moveCount = info[4];
    maleCount = info[5];
    gerlCount = info[6];
    grassCount = info[7];
    gamesC.innerText = "games:" + games;
    dieC.innerText = "dieCount:" + dieCount;
    lifeC.innerText = "lifeCount:" + lifeCount;
    mullC.innerText = "mullCount:" + mullCount;
    moveC.innerText = "moveCount:" + moveCount;
    girlsC.innerText = "Girls:" + gerlCount;
    mansC.innerText = "Mans:" + maleCount;
    setup();
    draw();
});





function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function createMob(){
    console.log(MouseEvent);
}

function setup() {
    if(dataTrue){
    games++;
    noStroke();
    frameRate(FPS);
   
    var myCanvas = createCanvas(matrix[0].length * side, matrix.length * side); //կանվասի չափերը դնել մատրիցի չափերին համապատասխան
    myCanvas.parent("myCanvas");
    myCanvas.mouseClicked(createMob);
    background('#acacac');
    
}
    
    
}

function draw() {
    if(dataTrue){
        //console.log(dataTrue);
        dataTrue =false;
    background('#acacac');
    lifeCount=0;
    
        //console.log(matrix);
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            lifeCount++;
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);

            }
            else if (matrix[i][j] == 3) {
                fill("blue");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 2) {
              
            
                 //console.log(lg);
                for(var k=0; k < eatersArr.length;k++){
            if(eatersArr[k].x == j && eatersArr[k].y == i){
                    if(eatersArr[k].age <=12){
                        fill("red");
                    }
                    else if(eatersArr[k].age <=18){
                        fill("##fae715");
                    }
                    else{
                        fill("yellow");
                    }
                }
            }
                rect(j * side, i * side, side, side);
            
        }
            else if (matrix[i][j] == 0) {
                lifeCount--;
                fill('grey');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill('red');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill('613a3a');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 6) {
                fill('#FA9D15');
                rect(j * side, i * side, side, side);
            }
        }
    }
    ///
  
    dataTrue =false;
}
}
    // //console.log(dieCount +"_"+dieCount+"_"+mullCount+"_"+games+"_"+moveCount);
  
   
    // newc =dieCount+dieCount+mullCount+moveCount;
    // if(old == newc){
    //     endc++;
    //     if(end == endc){
    //         dieCount = 0;
    //         lifeCount = 0;
    //         mullCount =0;
    //         moveCount = 0;
    //         // matrixCreat(size_x,size_y);
    //         // setup();
    //         // draw();
    //     }
    // }
    // else{
    //     old = dieCount+dieCount+mullCount+moveCount;
    // }
    
    
    
//}
