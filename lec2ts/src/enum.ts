type keyinput= "up" | "down" | "left"| "right"
type keyinput2= 0 | 1 | 2 |3;
function game(keypress:keyinput){
    //do something
    if(keypress=="up"){

    }
}

game("up");
game("down");
// game(1);
// game("random string");

enum keyinp2{
    up,
    down,
    left,
    right
}
enum keyinp{
    up ="up", 
    down ="down",
    left="left", 
    right ="right"
}
function game2(keypress:keyinp){
    if(keypress==keyinp.up){
        //do something
    }
}
game2(keyinp.up);//0
game2(keyinp.down);//1
game2(keyinp.up);
console.log(keyinp.left);
