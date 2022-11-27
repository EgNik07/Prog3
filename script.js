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

var size_x =50;
var size_y = 50;
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
    hunterCount = info[8];
    size_x= info[9];
    size_y= info[10];
    weather = data[8];
    FPS_serve = data[9];
    days = weather[0];
    mounts = weather[1];
    ages = weather[2];
    summer = weather[3];
    autumn = weather[4];
    winter = weather[5];
    spring = weather[6];
    
    gamesC.innerText = "games:" + games;
    agesC.innerText = "age:" + ages +"/";
    mountsC.innerText = "mounts:" + mounts+"/";
    size_xC.innerText = size_x;
    size_yC.innerText = size_y;
    if (days > 9){
        daysC.innerText = "days:" + days +"||";
    }
    else{
        daysC.innerText = "days:" + days+ "| |";
    }
   
    if(summer){
        weatherC.innerText = " weather: summer" ;
    }
    else if (autumn){
        weatherC.innerText = " weather: autumn" ;
    }
    else if (winter){
        weatherC.innerText = " weather: winter" ;
    }
    else if (spring){
        weatherC.innerText = " weather: spring" ;
    }
    dieC.innerText = "dieCount:" + dieCount;
    lifeC.innerText = "lifeCount:" + lifeCount;
    mullC.innerText = "mullCount:" + mullCount;
    moveC.innerText = "moveCount:" + moveCount;
    girlsC.innerText = "Girls:" + gerlCount;
    mansC.innerText = "Mans:" + maleCount;
    grassC.innerText = "Grass:" + grassCount;
    hunterC.innerText = "Hunters:" + hunterCount;
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
// function createMob(){
//     socket.emit("click", )
// }

function setup() {
    if(dataTrue){
    games++;
    noStroke();
    frameRate(FPS);
   
    var myCanvas = createCanvas(matrix[0].length * side, matrix.length * side); //կանվասի չափերը դնել մատրիցի չափերին համապատասխան
    myCanvas.parent("myCanvas");
   
    background('#acacac');
    
}
    

   
}

myCanvas.addEventListener('click', function(event) {
    var mouseD= true;
    var mouseDcount =100;
    while(mouseDcount){
        mouseDcount++;
        if (mouseDcount >100){
            mouseDcount=0;
        
    var canvasXY =myCanvas.getBoundingClientRect();
    var x = parseInt( event.clientX/side) - 1 - parseInt(canvasXY.left/side);
    var y = parseInt( event.clientY/side) - 1 -parseInt(canvasXY.top/side);
    
    // console.log(x+":"+y,canvasXY);
    socket.emit("clickCoord", [x,y,sofd])
}
}}) 
myCanvas.addEventListener('mouseup', function(event) {
    mouseDcount = 0;
    mouseD =false;
})

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
             if (matrix[i][j] == 0) {
                lifeCount--;
                fill('grey');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill("brown");
                rect(j * side, i * side, side, side);
                }
            else if (matrix[i][j] == 1) {
                if(winter){
                    fill(125, 188, 208);
                }
                else if(summer){
                    fill("green");
                }
                else if (autumn){
                    fill(243, 204, 126);
                }
                else if(spring){
                    fill(152, 204, 126);
                }
                
                rect(j * side, i * side, side, side);

            }
           
            else if (matrix[i][j] == 2) { 

                for(var k=0; k < eatersArr.length;k++){
                    if(eatersArr[k].x == j && eatersArr[k].y == i){
                            var red = 180+eatersArr[k].age;
                            if(red >255)red =0;
                            fill(255, red, 0);  
                        }
                    }
                        rect(j * side, i * side, side, side);
                    
                    }
            
           
            else if (matrix[i][j] == 4) {
                fill('blue');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill('red');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 6) {
                fill(255,0,255);
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
