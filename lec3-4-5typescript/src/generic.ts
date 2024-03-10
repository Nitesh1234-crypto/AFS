type def = string | number;
function getfirstelement(arg: def[]){
    return arg[0];
 }
// function getfirstelement(arg: number[] | string[]){
//    return arg[0];
// }

let res =getfirstelement(["nitesh","singh"])
// res.toLowerCase();

// res.toLowerCase(); // error res is not of type string

function identity<T>(arg:T){
     return arg
}
function identity2<T>(arg:T[]){
    return arg
}
let output= identity<string>("hello");
let output2=identity<number>(12);

let output3=identity2<string>(["nitesh","singh"]);