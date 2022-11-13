var grassArr = []; //
var redgrassArr = [];//
var eatersArr = [];
var eaterblueArr = [];//
var eaterredArr = [];
var eaterdarkArr = [];
var side = 6;
var size_x = 200;
var size_y = 100;
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
matrixCreat(size_x,size_y);
var FPS = 1;

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
    noStroke();
    frameRate(FPS);
    var myCanvas = createCanvas(matrix[0].length * side, matrix.length * side); //կանվասի չափերը դնել մատրիցի չափերին համապատասխան
    myCanvas.parent("myCanvas");
    myCanvas.mouseClicked(createMob);
    background('#acacac');

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
}

function draw() {
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill("blue");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 0) {
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
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in redgrassArr) {
        redgrassArr[i].mul();
    }

    for (var i in eatersArr) {
        eatersArr[i].eat();
    }
    for (var i in eaterblueArr) {
        eaterblueArr[i].eat();
    }
    for (var i in eaterredArr) {
        eaterredArr[i].eat();
    }
    for (var i in eaterdarkArr) {
        eaterdarkArr[i].eat();
    }
}
