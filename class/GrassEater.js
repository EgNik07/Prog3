var Main = require("./Main.js");
class GrassEater extends Main  {
    

    constructor(x, y,gender,hp) {
        super(x,y,hp);
        this.energy = 5;
        if(gender ==1 ){
        this.gender = 1;
        //console.log(gender);
        maleCount++;
    }
    else{
        this.gender = 0;
        gerlCount++;
    }
    
    }


    getMull(character,matrix,eatersArr) {

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x <  matrix[0].length && y >= 0 && y < matrix.length) {
             for(var b =0; b<eatersArr.length;b++){
               //console.log(eatersArr[b].x+":"+eatersArr[b].y);
                if(eatersArr[b].x == this.x-1 || eatersArr[b].x == this.x || eatersArr[b].x == this.x+1 &&
                    eatersArr[b].y == this.x-1  || eatersArr[b].y == this.x ||eatersArr[b].y == this.x+1 &&
                    this.gender!=  eatersArr[b].gender &&
                    eatersArr[b].age >=18){
                    //console.log(eatersArr[b].gender);
                    return true;
                }
                else{
                    return false;
                }
             }
                  
                
            }
        }
       
    }


    move(matrix,eatersArr) {
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
            moveCount++;
        }
        if(this.age >=Math.floor(Math.random() * 100)+18){
            this.die(matrix,eatersArr);
        }
    }


    //eat()-ուտել
    eat(matrix,eatersArr,grassArr) {
      
        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var grassCells = this.chooseCell(1,matrix);
        var coord = grassCells[Math.floor(Math.random() * grassCells.length)];

        this.age++;
       
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
            this.multiply+= Math.floor(Math.random() * 10);
            //console.log(this.multiply);
            //մեծացնում է էներգիան
            this.energy++;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    lifeCount--;
                    grassCount--;
                }
            
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
          if (this.gender == 0){

          
            if (this.multiply >= 10 && this.getMull(2,matrix,eatersArr) == true) {

                this.mul(matrix,eatersArr);
                this.multiply = 1;
            }
        }


        }
         
        
        
            grassCells = this.chooseCell(5,matrix);
        coord = grassCells[Math.floor(Math.random() * grassCells.length)];

            if(coord) {
            var x = coord[0];
            var y = coord[1];

            for(var i in eatersArr){
                if(eatersArr[i].x ==x && eatersArr[i].y==y){
                    eatersArr.splice(i,1);
                }
            }
            
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
          if (this.gender == 0){

          
            if (this.multiply >= 10 && this.getMull(2,matrix,eatersArr) == true) {

                this.mul(matrix,eatersArr);
                this.multiply = 1;
            }
        }


        
        else {
            //եթե չկա հարմար սնունդ 
            this.move(matrix,eatersArr);
            this.energy--;
            if (this.energy <= 0) { //մահանում է, եթե էներգիան 0֊ից ցածր է
                this.die(matrix,eatersArr);
            }
        }
        if(this.age >=  Math.floor(Math.random() * 20 +18)){

        }
    }

    

    //mul() բազմանալ
    mul(matrix,eatersArr) {
        lifeCount++;
        //console.log("mul0");
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
            var newEater = new GrassEater(x, y,Math.floor(Math.random() * 2));
            eatersArr.push(newEater);

            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 2;
        
        }
       
        if (this.age >= Math.floor(Math.random() * 100 +18) ){ //մահանում է, եթե էներգիան 0֊ից ցածր է
            this.die(matrix,eatersArr);
        }
    }

    //die() մահանալ
    die(matrix,eatersArr) {
        matrix[this.y][this.x] = 0;
        dieCount++;
        //ջնջում է ինքն իրեն խոտակերների զանգվածից
        for (var i in eatersArr) {
            if (this.x == eatersArr[i].x && this.y == eatersArr[i].y) {
                if(this.gender == 1){
                    maleCount--;
                }
                else{
                    gerlCount--;
                }
                lifeCount--;
                eatersArr.splice(i, 1);
                
            }
        }
    
    }

}
module.exports = GrassEater;