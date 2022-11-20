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
        //console.log(hunterCount);
        //որոնում է դատարկ տարածքներ
        var emptyCells = this.chooseCell(0,matrix);
        var cօord = emptyCells[Math.floor(Math.random() * emptyCells.length)]; // 4,3

        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];
            var x = cօord[4];
            var x = cօord[3];
            //շարժվում է
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            //նոր կորդինատներ է ստանում
            this.x = x;
            this.y = y;
            moveCount++;
        }
        emptyCells = this.chooseCell(1,matrix);
        var cօord = emptyCells[Math.floor(Math.random() * emptyCells.length)]; // 4,3

        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];
            var x = cօord[4];
            var x = cօord[3]
            //շարժվում է
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            //նոր կորդինատներ է ստանում
            this.x = x;
            this.y = y;
            moveCount++;
        }
        
    }


    //eat()-ուտել
    eat(matrix,hunterArr,eatersArr) {
        // if(x!=undefined){
        //     for(var g=0; g<= eatersArr.length; g++){
        //         if(eatersArr.length != 0 && undefined !=eatersArr[g].x && eatersArr[g].x ==x && eatersArr[g].y == y&& eatersArr[g].hp>0){
        //             eatersArr[g].hp -=5;
        //             console.log(eatersArr[g].hp);
        //            if(eatersArr[g].hp<=0){
        //             matrix[y][x] = 3;
        //             matrix[this.y][this.x] = 0;

        //             this.x = x;
        //     this.y = y;

        //     this.multiply+= Math.floor(Math.random() * 10);
        //     //console.log(this.energy);
         
        //     this.energy++;
        //     for (var i in eatersArr) {
        //         if (x == eatersArr[i].x && y == eatersArr[i].y) {
        //             if(eatersArr[i].gender == 1){
        //                 maleCount--;
        //             }
        //             else{
        //                 gerlCount--;
        //             }
        //             eatersArr.splice(i, 1);
        //             lifeCount--;
                    
        //         }

        //            }

        //         }

        //     }
            

            
            
        //     }
        // }
        var eatersCells = this.chooseCell(2,matrix);
        var coord = eatersCells[Math.floor(Math.random() * eatersCells.length)];

        this.age++;
       
        //եթե կա հարմար սնունդ
        if (coord) {
            var x = coord[0];
            var y = coord[1];
        
                    matrix[y][x] = 3;
                    matrix[this.y][this.x] = 0;

                    this.x = x;
            this.y = y;

            this.multiply+= Math.floor(Math.random() * 10);
            //console.log(this.energy);
         
            this.energy++;
            for (var i in eatersArr) {
                if (x == eatersArr[i].x && y == eatersArr[i].y) {
                    if(eatersArr[i].gender == 1){
                        maleCount--;
                    }
                    else{
                        gerlCount--;
                    }
                    eatersArr.splice(i, 1);
                    lifeCount--;
                    
                }

                   }

                }

            
        

          
            //console.log(this.energy);
         
          
            

            //եթե պատրաստ է բազմացմանը, բազմանում է 
          if (this.gender == 0){

          
            if (this.multiply >= 10 && this.getMull(2,matrix,hunterArr) == true) {

                this.mul(matrix,hunterArr);
                this.multiply = 1;
            }
        }


        

        else {
            //եթե չկա հարմար սնունդ 
            this.move(matrix,hunterArr);
            this.energy--;
            // if (this.energy <= 0) { //մահանում է, եթե էներգիան 0֊ից ցածր է
            //     this.die(matrix,hunterArr);
            // }
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
            // this.multiply++;
            //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
            //և տեղադրում է այն խոտակերների զանգվածի մեջ
            var newhunter = new Hunter(x, y,Math.floor(Math.random() * 2));
            hunterArr.push(newhunter);

            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 3;
        
        }
        var emptyCells = this.chooseCell(1, matrix);
        var coord = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        //եթե կա բազմանում է
        if (coord) {
            var x = coord[0];
            var y = coord[1];
            // this.multiply++;
            //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
            //և տեղադրում է այն խոտակերների զանգվածի մեջ
            var newhunter = new Hunter(x, y,Math.floor(Math.random() * 2,10));
            hunterArr.push(newhunter);

           
            matrix[y][x] = 3;
        
        }
       
       
    }

    //die() մահանալ
    die(matrix,hunterArr) {
        matrix[this.y][this.x] = 0;
        dieCount++;
        console.log("hunter is die");
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