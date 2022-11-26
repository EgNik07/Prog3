class RedGrass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ];
        mullCount++;
        
        lifeCount++;

    }
    chooseCell(character,matrix) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    
    mul(matrix,redgrassArr,summer,winter,spring,autumn) {
        if(redgrassArr.length <150){
                this.multiply++;
                var multiplyMax=1;

                if(summer)multiplyMax =20;
                if(winter)multiplyMax =30;
                if(spring)multiplyMax =50;
                if(autumn)multiplyMax =10;

                if (this.multiply >= multiplyMax) {
                    
                    var emptyCells = this.chooseCell(1,matrix);
                    var coord = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                    if (coord) {
                        var x = coord[0];
                        var y = coord[1];

                        //ավելացնում է նոր խոտ խոտերի զանգվածում
                        var newredGrass = new RedGrass(x, y);
                        redgrassArr.push(newredGrass);

                        //ավելացնում է նոր խոտ մատրիցում
                        matrix[y][x] = 5;
                        this.multiply = 0;
                        //console.log('sdfsdf');
                    }
                }
        }
        else{
            var emptyCells = this.chooseCell(5,matrix);
                    var coord = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                    if (coord) {
                        var x = coord[0];
                        var y = coord[1];

                        //ավելացնում է նոր խոտ խոտերի զանգվածում
                        for(i in redgrassArr){
                            if(redgrassArr[i].x == x&& redgrassArr[i].y == y){
                                matrix[y][x] = 0;
                                redgrassArr.splice(i,1);

                            }
                        }

                        //ավելացնում է նոր խոտ մատրիցում
                        
                        this.multiply = 0;
                        //console.log('sdfsdf');
                    }
            
        }
        }
}

module.exports = RedGrass;