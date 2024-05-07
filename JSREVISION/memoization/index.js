

// let arr=[];
// console.log(arr[5]);
 function multiplyby5(){
    let arr=[];
    function inner(inp){
        if(arr[inp]!==undefined){
            console.log("memo");
            return console.log(arr[inp])
        }
    //calculate output
        arr[inp]=inp*5;
        console.log("not memo")
        console.log(inp*5)
    }
    return inner;
}



let fun=multiplyby5()
fun(4);
fun(4);

// console.log(arr);