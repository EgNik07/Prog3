class RedGrass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 12;
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
    chooseCell(character) {
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


    //mul() բազմացում
    mul() {
        this.multiply++;
        if (this.multiply >= 0) {
            //հետազոտում է շրջապատը, որոնում դատարկ տարածքներ
            var emptyCells = this.chooseCell(2);
            var coord = random(emptyCells);
            if (coord) {
                var x = coord[0];
                var y = coord[1];

                //ավելացնում է նոր խոտ խոտերի զանգվածում
                var newRedGrass = new RedGrass(x, y);
                redgrassArr.push(newRedGrass);

                //ավելացնում է նոր խոտ մատրիցում
                matrix[y][x] = 6;
                this.multiply = 10;
            }
        }
    }
}