var Main = require("./Main.js")
 class Eaterred extends Main {
  


    //move() շարժվել
    move(matrix) {
        //որոնում է դատարկ տարածքներ
        var emptyCells = this.chooseCell(0,matrix);
        var cօord = emptyCells[Math.floor(Math.random() * emptyCells.length)]; // 4,3

        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];


            //շարժվում է
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 1;

            //նոր կորդինատներ է ստանում
            this.x = x;
            this.y = y;
        }
    }


    //eat()-ուտել
    eat(matrix,eaterredArr,eaterblueArr) {
        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var grassCells = this.chooseCell(1,matrix);
        var coord = grassCells[Math.floor(Math.random() * grassCells.length)];

        //եթե կա հարմար սնունդ
        if (coord) {
            var x = coord[0];
            var y = coord[1];

            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            //փոխում է սեփական կորդինատները օբյեկտի մեջ
            this.x = x;
            this.y = y;


            this.multiply++;


            this.energy++;

        
            for (var i in eaterblueArr) {
                if (x == eaterblueArr[i].x && y == eaterblueArr[i].y) {
                    eaterblueArr.splice(i, 0);
                }
            }

         
            if (this.multiply == 10) {
                this.mul(matrix,eaterredArr)
                this.multiply = 0;
            }


        } else {
            //եթե չկա հարմար սնունդ 
            this.move(matrix);
            this.energy--;
            if (this.energy <= 0) { //մահանում է, եթե էներգիան 0֊ից ցածր է
                this.energy++
            }
        }
    }

    //mul() բազմանալ
    mul(matrix, eaterredArr) {
        //փնտրում է դատարկ տարածք
        var emptyCells = this.chooseCell(0,matrix);
        var coord = emptyCells[Math.floor(Math.random() * emptyCells.length)];


        if (coord) {
            var x = coord[0];
            var y = coord[1];

            var newEater = new Eaterred(x, y);
            eaterredArr.push(newEater);

            matrix[y][x] = 2;
        }
        else {
            this.move()
        }
    }



}
module.exports = Eaterred;