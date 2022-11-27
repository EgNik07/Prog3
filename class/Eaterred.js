var Main = require("./Main.js");
class Eaterred extends Main  {
    

    constructor(x, y,gender,hp) {
        super(x,y,hp);
        this.energy = 50;
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


    getMull(character,matrix,eatersredArr) {

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x <  matrix[0].length && y >= 0 && y < matrix.length) {
             for(var b =0; b<eatersredArr.length;b++){
               //console.log(eatersArr[b].x+":"+eatersArr[b].y);
                if(eatersredArr[b].x == this.x-1 || eatersredArr[b].x == this.x || eatersredArr[b].x == this.x+1 &&
                    eatersredArr[b].y == this.x-1  || eatersredArr[b].y == this.x ||eatersredArr[b].y == this.x+1 &&
                    this.gender!=  eatersredArr[b].gender &&
                    eatersredArr[b].age >=18){
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


    move(matrix,eaterredArr) {
        //որոնում է դատարկ տարածքներ
        var emptyCells = this.chooseCell(0,matrix);
        var cօord = emptyCells[Math.floor(Math.random() * emptyCells.length)]; // 4,3

        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];
            var x = cօord[4];
            var x = cօord[3]
            //շարժվում է
            matrix[y][x] =6;
            matrix[this.y][this.x] = 0;

            //նոր կորդինատներ է ստանում
            this.x = x;
            this.y = y;
            moveCount++;
        }
        var emptyCells = this.chooseCell(1,matrix);
        var cօord = emptyCells[Math.floor(Math.random() * emptyCells.length)]; // 4,3
        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];
            var x = cօord[4];
            var x = cօord[3]
            //շարժվում է
            matrix[y][x] =6;
            matrix[this.y][this.x] = 0;

            //նոր կորդինատներ է ստանում
            this.x = x;
            this.y = y;
            moveCount++;
        }
        if(this.age >=Math.floor(Math.random() * 100)+18){
            this.die(matrix,eaterredArr);
        }
    }


    //eat()-ուտել
    eat(matrix,eaterredArr,grassArr) {
      
        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var grassCells = this.chooseCell(5,matrix);
        var coord = grassCells[Math.floor(Math.random() * grassCells.length)];

        this.age++;
       
        //եթե կա հարմար սնունդ
        if (coord) {
            var x = coord[0];
            var y = coord[1];

            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 6;
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

          
            if (this.multiply >= 10 && this.getMull(2,matrix,eaterredArr) == true) {

                this.mul(matrix,eaterredArr);
                this.multiply = 1;
            }
        }


        }
         
        
        
            grassCells = this.chooseCell(5,matrix);
        coord = grassCells[Math.floor(Math.random() * grassCells.length)];

            if(coord) {
            var x = coord[0];
            var y = coord[1];

            for(var i in eaterredArr){
                if(eaterredArr[i].x ==x && eaterredArr[i].y==y){
                    eaterredArr.splice(i,1);
                }
            }
            
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
          if (this.gender == 0){

          
            if (this.multiply >= 10 && this.getMull(2,matrix,eaterredArr) == true) {

                this.mul(matrix,eaterredArr);
                this.multiply = 1;
            }
          
        }


        
        else {
            //եթե չկա հարմար սնունդ 
            this.move(matrix,eaterredArr);
            this.energy--;
            if (this.energy <= 0) { //մահանում է, եթե էներգիան 0֊ից ցածր է
                this.die(matrix,eaterredArr);
            }
        }
        this.move(matrix,eaterredArr);
        if(this.age >=  Math.floor(Math.random() * 20 +18)){

        }
    }

    

    //mul() բազմանալ
    mul(matrix,eaterredArr) {
        lifeCount++;
        //console.log("mul0");
        //փնտրում է դատարկ տարածք
        var emptyCells = this.chooseCell(0, matrix);
        var coord = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        //եթե կա բազմանում է
        if (coord) {
            var x = coord[0];
            var y = coord[1];
           
            var newEater = new Eaterred(x, y,Math.floor(Math.random() * 2));
            eaterredArr.push(newEater);

            matrix[y][x] = 6;
        
        }
       
        if (this.age >= Math.floor(Math.random() * 100 +18) ){ //մահանում է, եթե էներգիան 0֊ից ցածր է
            this.die(matrix,eaterredArr);
        }
    }

    //die() մահանալ
    die(matrix,eatersredArr) {
        matrix[this.y][this.x] = 0;
        dieCount++;
        //ջնջում է ինքն իրեն խոտակերների զանգվածից
        for (var i in eatersredArr) {
            if (this.x == eatersredArr[i].x && this.y == eatersredArr[i].y) {
                if(this.gender == 1){
                    maleCount--;
                }
                else{
                    gerlCount--;
                }
                lifeCount--;
                eatersredArr.splice(i, 1);
                
            }
        }
    
    }

}
module.exports = Eaterred;