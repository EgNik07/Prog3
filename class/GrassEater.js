var Main = require("./Main.js");
class GrassEater extends Main  {
    //move() շարժվել
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


    //eat()-ուտել
    eat(matrix,eatersArr,grassArr) {
      
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

            //բազմացման գործակիցը մեծացնում է
            this.multiply++;

            //մեծացնում է էներգիան
            this.energy++;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if (this.multiply == 3) {
                this.mul(matrix,eatersArr);
                this.multiply = 1;
            }


        } else {
            //եթե չկա հարմար սնունդ 
            this.move(matrix);
            this.energy--;
            if (this.energy <= 0) { //մահանում է, եթե էներգիան 0֊ից ցածր է
                this.die();
            }
        }
    }
    

    //mul() բազմանալ
    mul(matrix,eatersArr) {
        //փնտրում է դատարկ տարածք
        var emptyCells = this.chooseCell(0, matrix);
        var coord = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        //եթե կա բազմանում է
        if (coord) {
            var x = coord[0];
            var y = coord[1];
            // this.multiply++;
            //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
            //և տեղադրում է այն խոտակերների զանգվածի մեջ
            var newEater = new GrassEater(x, y);
            eatersArr.push(newEater);

            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 2;
        }
        else {
            this.die(matrix)
        }
    }

    //die() մահանալ
    die(matrix) {
        if(matrix != undefined){
        matrix[this.y][this.x] = 0;

        //ջնջում է ինքն իրեն խոտակերների զանգվածից
        for (var i in eatersArr) {
            if (this.x == eatersArr[i].x && this.y == eatersArr[i].y) {
                eatersArr.splice(i, 1);
            }
        }
    }
    }

}
module.exports = GrassEater;