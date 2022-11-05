var grassArr = []; //խոտերի զանգված
var eatersArr = []; //խոտակերների զանգված
var eaterblueArr = [];
var eaterredArr = [];
var eaterdarkArr = [];
var side = 28;
var matrix = [
    [5, 5, 5, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 0, 1, 0, 1, 0, 0],
    [0, 0, 2, 5, 5, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 0, 0],
    [0, 1, 3, 0, 1, 5, 1, 0, 3, 0, 0, 0, 4, 2, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 2, 0, 1, 1, 0, 4, 0, 0, 1, 4, 4, 1, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 0, 0],
    [0, 2, 0, 0, 0, 0, 4, 4, 4, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 2, 0, 1, 3, 2, 4, 4, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 2, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 4, 4, 2, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 1],
    [0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 2, 0, 1, 0, 1, 0, 0],
    [0, 2, 0, 0, 2, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 1, 2, 0, 0, 2, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 2, 0, 0],
    [3, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 0, 1, 0, 1, 0, 0],
    [0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 3, 0, 0, 4, 4, 2, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 2, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 2, 0, 1, 0, 2, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 2, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 0, 2, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 1],
    [0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 1, 0, 0, 2, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 2, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 2, 0, 1, 0, 1, 0, 0],
    [0, 2, 0, 0, 2, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 1, 2, 0, 0, 2, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 2, 0, 0]
]

function setup() {
    noStroke();
    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side); //կանվասի չափերը դնել մատրիցի չափերին համապատասխան
    background('#acacac');

    //մատրիցի վրա կրկնակի ցիկլը լցնում է խոտերի, խոտակերների զանգվածները օբյեկտներով 
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

        }
    }
}

function draw() {
    //գծում է աշխարհը
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
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill('red');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill('613a3a')
                rect(j * side, i * side, side, side);
            }
        }
    }
    //խոտը բազմանում է
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    //խոտակերը ուտում է խոտ
    for (var i in eatersArr) {
        eatersArr[i].eat();
    }
    // console.log(eaterblueArr, "eaterblueArr")
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