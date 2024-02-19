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

let output= identity<string>("hello");