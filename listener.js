var btn1 = document.getElementById("btn1");
clickCount = 0;

btn1.addEventListener("click", () => {
    btn1.innerText = "clicks:" + clickCount;
    clickCount++;
});
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    grassArr = [];
    redgrassArr = [];
    eatersArr = [];
    eaterblueArr = [];
    eaterredArr = [];
    eaterdarkArr = [];
    
    matrixCreat(size_x,size_y);
    setup();
    draw();
});
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    FPS--;
    setup();
    draw();
});
var btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    FPS++;
    setup();
});
var btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {
     grassArr = [];
     redgrassArr = [];
     eatersArr = [];
     eaterblueArr = [];
     eaterredArr = [];
     eaterdarkArr = [];
    for(i =0; i<matrix.length;i++){
        
       
        for(c=0; c<matrix[0].length; c++){
            //if(matrix[i][c]==4){
                matrix[i][c]=0;
            //};
        }
       
        
    }
});
var btn6 = document.getElementById("btn6");
btn6.addEventListener("click", () => {
    eatersArr = [];
   
   for(i =0; i<matrix.length;i++){
       
      
       for(c=0; c<matrix[0].length; c++){
           if(matrix[i][c]==2){
               matrix[i][c]=0;
           };
       }
    }
});
var btn7 = document.getElementById("btn7");
btn7.addEventListener("click", () => {
   
    eaterdarkArr = [];
    eaterblueArr = [];

   for(i =0; i<matrix.length;i++){
       
      
       for(c=0; c<matrix[0].length; c++){
           if(matrix[i][c]==3){
               matrix[i][c]=0;
           };
       }
    }
});
var btn8 = document.getElementById("btn8");
btn8.addEventListener("click", () => {
    
    eaterredArr = [];
    
   for(i =0; i<matrix.length;i++){
       
      
       for(c=0; c<matrix[0].length; c++){
           if(matrix[i][c]==4){
               matrix[i][c]=0;
           };
           }   
         }
});
var btn9 = document.getElementById("btn9");
btn9.addEventListener("click", () => {  
    redgrassArr = [];
   for(i =0; i<matrix.length;i++){
       
      
       for(c=0; c<matrix[0].length; c++){
           if(matrix[i][c]==6){
               matrix[i][c]=0;
           };
           }   
         }
});
var btn10 = document.getElementById("btn10");
btn10.addEventListener("click", () => {
    grassArr = [];
   for(i =0; i<matrix.length;i++){
       
      
       for(c=0; c<matrix[0].length; c++){
           if(matrix[i][c]==1){
               matrix[i][c]=0;
           };
           }   
         }
});
var btn11 = document.getElementById("btn10");
btn11.addEventListener("click", () => {
    
    eaterdarkArr = [];
    
   for(i =0; i<matrix.length;i++){
       
      
       for(c=0; c<matrix[0].length; c++){
           if(matrix[i][c]==5){
               matrix[i][c]=0;
           };
           }   
         }
});
var sideP = document.getElementById("sideP");
sideP.addEventListener("click", () => {
    side++;
    setup();
    draw();
   
});
var sideM = document.getElementById("sideM");
sideM.addEventListener("click", () => {
    side--;
    setup();
    draw();
   
});
var sizeP_x = document.getElementById("sizeP_x");
sizeP_x.addEventListener("click", () => {
    size_x++;
    grassArr = []; //
     redgrassArr = [];//
     eatersArr = [];
     eaterblueArr = [];//
     eaterredArr = [];
     eaterdarkArr = [];
    matrixCreat(size_x,size_y);
    setup();
    draw();
    console.log( size_x);
   
});
var sizeM_x = document.getElementById("sizeM_x");
sizeM_x.addEventListener("click", () => {
    size_x--;
    grassArr = []; //
     redgrassArr = [];//
     eatersArr = [];
     eaterblueArr = [];//
     eaterredArr = [];
     eaterdarkArr = [];
    matrixCreat(size_x,size_y);
    setup();
    draw();
   
});
var sizeP_y = document.getElementById("sizeP_y");
sizeP_y.addEventListener("click", () => {
    size_y++;
     grassArr = []; //
     redgrassArr = [];//
     eatersArr = [];
     eaterblueArr = [];//
     eaterredArr = [];
     eaterdarkArr = [];
    matrixCreat(size_x,size_y);
    setup();
    draw();
   
});
var sizeM_y = document.getElementById("sizeM_y");
sizeM_y.addEventListener("click", () => {
    size_y--;
    grassArr = []; //
    redgrassArr = [];//
    eatersArr = [];
    eaterblueArr = [];//
    eaterredArr = [];
    eaterdarkArr = [];
    matrixCreat(size_x,size_y);
    setup();
    draw();
   
});

// Countsssss
var gamesC = document.getElementById("games");
var dieC = document.getElementById("dieCount");
var lifeC = document.getElementById("lifeCount");
var mullC = document.getElementById("mullCount");
var moveC = document.getElementById("moveCount");
