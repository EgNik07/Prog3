var Main = require("./Main.js");
class Hunter extends Main  {
    

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
    hunterCount++;
    }


    getMull(character,matrix,hunterArr) {

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x <  matrix[0].length && y >= 0 && y < matrix.length) {
             for(var b =0; b<hunterArr.length;b++){
               //console.log(eatersArr[b].x+":"+eatersArr[b].y);
                if(hunterArr[b].x == this.x-1 || hunterArr[b].x == this.x || hunterArr[b].x == this.x+1 &&
                    hunterArr[b].y == this.x-1  || hunterArr[b].y == this.x ||hunterArr[b].y == this.x+1 &&
                    this.gender!=  hunterArr[b].gender &&
                    hunterArr[b].age >=18){
                    //console.log(eatersArr[b].gender);
                    return true;
                    hunterCount++;
                }
                else{
                    return false;
                }
             }
                  
                
            }
        }
       
    }


    move(matrix,hunterArr) {
        //որոնում է դատարկ տարածքներ
        var emptyCells = this.chooseCell(1,matrix);
        var cօord = emptyCells[Math.floor(Math.random() * emptyCells.length)]; // 4,3

        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];
            
          
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 1;

            
            this.x = x;
            this.y = y;
            moveCount++;
        }
        emptyCells = this.chooseCell(0,matrix);
        cօord = emptyCells[Math.floor(Math.random() * emptyCells.length)]; // 4,3

        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];
           
          
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            
            this.x = x;
            this.y = y;
            moveCount++;
        }
        if(this.age >=Math.floor(Math.random() * 100)+18){
            this.die(matrix,hunterArr);
        }
    }



    //eat()-ուտել
    eat(matrix,hunterArr,eatersArr) {
        var eaterCell = this.chooseCell(2,matrix);
        var coord = eaterCell[Math.floor(Math.random() * eaterCell.length)];

        this.age++;
       
      
        if (coord) {
            var x = coord[0];
            var y = coord[1];

            for(var t in eatersArr){
                if(eatersArr[t].x == x && eatersArr[t].y ==y){
                    eatersArr[t].hp-=4;
                    
                    if(eatersArr[t].hp<=0){
                        //console.log(eatersArr[t].hp)
                       

                    
                    this.multiply+= Math.floor(Math.random() * 10);
                
                    this.energy++;
                    for (var i in eatersArr) {
                        if (x == eatersArr[i].x && y == eatersArr[i].y) {
                            eatersArr.splice(i, 1);
                            lifeCount--;
                            
                        }
                    }
                    matrix[y][x] = 3;
                    matrix[this.y][this.x] = 2;
                    this.x = x;
                    this.y = y;
                }
            }
            
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
          if (this.gender == 0){

          
            if (this.multiply >= 10 && this.getMull(2,matrix,hunterArr) == true) {

                this.mul(matrix,hunterArr);
                this.multiply = 1;
            }
            else{
              
                this.move(matrix,eatersArr);
                console.log("move")
            }
        }


        } 
        else {
           
            
            this.energy--;
            if (this.energy <= 0) { //մահանում է, եթե էներգիան 0֊ից ցածր է
                this.die(matrix,eatersArr);
            }
        }
        
    }
    

    //mul() բազմանալ
    mul(matrix,hunterArr) {
        lifeCount++;
        //console.log("mul0");
        //փնտրում է դատարկ տարածք
        var emptyCells = this.chooseCell(0, matrix);
        var coord = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        //եթե կա բազմանում է
        if (coord) {
            var x = coord[0];
            var y = coord[1];
           
            var hunter = new Hunter(x, y,Math.floor(Math.random() * 2));
            hunterArr.push(hunter);

            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 3;
        
        }
        var emptyCells = this.chooseCell(1, matrix);
        var coord = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        //եթե կա բազմանում է
        if (coord) {
            var x = coord[0];
            var y = coord[1];
           
            var hunter = new Hunter(x, y,Math.floor(Math.random() * 2));
            hunterArr.push(hunter);

            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 3;
        
        }
       
        if (this.age >= Math.floor(Math.random() * 100 +18) ){ //մահանում է, եթե էներգիան 0֊ից ցածր է
            this.die(matrix,hunterArr);
        }
    }

    //die() մահանալ
    die(matrix,hunterArr) {
        matrix[this.y][this.x] = 0;
        dieCount++;
        //console.log(hunterCount);
        //ջնջում է ինքն իրեն խոտակերների զանգվածից
        for (var i in hunterArr) {
            if (this.x == hunterArr[i].x && this.y == hunterArr[i].y) {
                if(this.gender == 1){
                    maleCount--;
                }
                else{
                    gerlCount--;
                }
                lifeCount--;
                hunterArr.splice(i, 1);
                
            }
        }
    
    }

}
module.exports = Hunter;