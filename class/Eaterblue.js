var Main = require("./Main.js")

class Eaterblue extends Main {

    move(matrix) {
        //որոնում է դատարկ տարածքներ
        var emptyCells = this.chooseCell(0,matrix);
        var cօord = emptyCells[Math.floor(Math.random() * emptyCells.length)]; // 4,3

        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];
            var x = cօord[4];
            var x = cօord[3]
            //շարժվում է
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            //նոր կորդինատներ է ստանում
            this.x = x;
            this.y = y;
        }
    }

    eat(matrix) {

        var grassCells = this.chooseCell(1);
        var coord = grassCells[Math.floor(Math.random() * grassCells.length)];

        if (coord) {
            var x = coord[0];
            var y = coord[1];


            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;


            this.multiply++;


            this.energy++;


            for (var i in eatersArr) {
                if (x == eatersArr[i].x && y == eatersArr[i].y) {
                    eatersArr.splice(i, 1);
                }
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if (this.multiply == 5) {
                this.mul(matrix)
                this.multiply = 0;
            }


        } else {
            //եթե չկա հարմար սնունդ 
            this.move(matrix);
            this.energy--;
            if (this.energy <= 0) { //մահանում է, եթե էներգիան 0֊ից ցածր է
                this.die(matrix);
            }
        }
    }

    //mul() բազմանալ
    mul(matrix,eaterblueArr) {
        //փնտրում է դատարկ տարածք
        var emptyCells = this.chooseCell(0);
        var coord = random(emptyCells);

        //եթե կա բազմանում է
        if (coord) {
            var x = coord[0];
            var y = coord[1];
            // this.multiply++;
            //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
            //և տեղադրում է այն խոտակերների զանգվածի մեջ
            var newEater = new Eaterblue(x, y);
            eaterblueArr.push(newEater);

            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 2;
        }
    }

    //die() մահանալ
    die(matrix, eaterblueArr) {
        //Հիմնական մատրիցում իր դիրքում դնում է դատարկություն
        matrix[this.y][this.x] = 0;

        //ջնջում է ինքն իրեն խոտակերների զանգվածից
        for (var i in eaterblueArr) {
            if (this.x == eaterblueArr[i].x && this.y == eaterblueArr[i].y) {
                eaterblueArr.splice(i, 1);
            }
        }
    }


}
module.exports = Eaterblue;