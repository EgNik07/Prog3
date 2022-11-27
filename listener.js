var size_xC = document.getElementById("size_xCount");
var size_yC = document.getElementById("size_yCount");
var gamesC = document.getElementById("games");
var dieC = document.getElementById("dieCount");
var lifeC = document.getElementById("lifeCount");
var mullC = document.getElementById("mullCount");
var moveC = document.getElementById("moveCount");
var girlsC = document.getElementById("girlsCount");
var mansC = document.getElementById("mansCount");
var hunterC = document.getElementById("hunterCount");
var grassC = document.getElementById("grassCount");
var agesC = document.getElementById("agesCount");
var mountsC = document.getElementById("mountsCount");
var daysC = document.getElementById("daysCount");
var weatherC = document.getElementById("weatherCount");

var btn1 = document.getElementById("btn1");

var sofd = 3;



clickCount = 0;
btn1.addEventListener("click", () => {
    btn1.innerText = "clicks:" + clickCount;
    clickCount++;
});

var btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {

socket.emit("restart","restart");

});

var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    socket.emit("fps", FPS_serve-=10);
});
var btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    socket.emit("fps", FPS_serve+=10);
   
  
});

//// delete buttons

var btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {
    
       socket.emit("delete_all" , "delete_all");
        
    
});
var btn6 = document.getElementById("btn6");
btn6.addEventListener("click", () => {
    socket.emit("delete_grasseater","delete_grasseater")
   
   
});
var btn7 = document.getElementById("btn7");
btn7.addEventListener("click", () => {
   
    socket.emit("delete_grass","delete_grass")
});
var btn8 = document.getElementById("btn8");
btn8.addEventListener("click", () => {
    socket.emit("delete_sea","delete_sea")
});
var btn9 = document.getElementById("btn9");
btn9.addEventListener("click", () => {  
    socket.emit("delete_redgrass","delete_redgrass")
         
});
var btn10 = document.getElementById("btn10");
btn10.addEventListener("click", () => {
    socket.emit("delete_hunters","delete_hunters")
});
var btn11 = document.getElementById("btn11");
btn11.addEventListener("click", () => {
    
   
          
});
///
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
    socket.emit("matrix_sizes", [size_x,size_y]);
   
});
var sizeM_x = document.getElementById("sizeM_x");
sizeM_x.addEventListener("click", () => {
    size_x--;
    socket.emit("matrix_sizes", [size_x,size_y]);
   
});
var sizeP_y = document.getElementById("sizeP_y");
sizeP_y.addEventListener("click", () => {
    size_y++;
    socket.emit("matrix_sizes", [size_x,size_y]);
});
var sizeM_y = document.getElementById("sizeM_y");
sizeM_y.addEventListener("click", () => {
    size_y--;
    socket.emit("matrix_sizes", [size_x,size_y]);
   
});


var stopbtn = document.getElementById("stopbtn");
stopbtn.addEventListener("click", () => {
socket.emit("stop", true);
});

var runbtn = document.getElementById("runbtn");
runbtn.addEventListener("click", () => {
    socket.emit("stop", false);
});
// Countsssss

