dieCount = 0;
lifeCount = 0;
mullCount =0;
moveCount = 0;
maleCount =0;
gerlCount =0;
grassCount =0;
hunterCount =0;
class Main{
    constructor(x, y,hp) {
        this.x = x;
        this.y = y;
        this.multiply = 1;
    
        this.directions = [];
        mullCount++;
        lifeCount++;
        this.age = 0;
        this.hp = hp;
    
    }
    updateCoordinates() {
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
    }
    chooseCell(character, matrix ) {
        this.updateCoordinates();
        var found = [];
        if(matrix != undefined){
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x <  matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
    }
        return found;
    }

    
    
}
module.exports = Main;