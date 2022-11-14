var Main = require("./Main.js")
 class Eaterdark extends Main {
 


    //move() շարժվել
    move(matrix) {
        //որոնում է դատարկ տարածքներ
        var emptyCells = this.chooseCell(0);
        var cօord =emptyCells[Math.floor(Math.random() * emptyCells.length)]; // 4,3

        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];


            //շարժվում է
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 3;

            var eaterdark = new Eaterdark(x, y);
            eaterdarkArr.push(eaterdark);
            
            //նոր կորդինատներ է ստանում
            this.x = x;
            this.y = y;
        }
    }


    //eat()-ուտել
    eat(matrix) {
        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var grassCells = this.chooseCell(1);
        var coord = grassCells[Math.floor(Math.random() * grassCells.length)];

        //եթե կա հարմար սնունդ
        if (coord) {
            var x = coord[0];
            var y = coord[1];

            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            //փոխում է սեփական կորդինատները օբյեկտի մեջ
            this.x = x;
            this.y = y;

            //բազմացման գործակիցը մեծացնում է
            this.multiply++;

            //մեծացնում է էներգիան
            this.energy++;

            // սննդի զանգվածից ջնջում է կերված սնունդը
            for (var i in eaterblueArr) {
                if (x == eaterblueArr[i].x && y == eaterblueArr[i].y) {
                    eaterblueArr.splice(i, 1);
                }
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if (this.multiply == 4) {
                this.mul(matrix)
                this.multiply = 0;
            }


        } else {
            //եթե չկա հարմար սնունդ 
            this.move();
            this.energy--;
            if (this.energy <= 0) { //մահանում է, եթե էներգիան 0֊ից ցածր է
                this.energy++
            }
        }
    }

    mul() {
        
        var emptyCells = this.chooseCell(0);
        var coord = random(emptyCells);

        if (coord) {
            var x = coord[0];
            var y = coord[1];
          
            var newEater = new Eaterred(x, y);
            eatersArr.push(newEater);

           
            matrix[y][x] = 5;
            dieCount++;            
        }
        else {
            this.move()
        }
    }



}
module.exports = Eaterdark;