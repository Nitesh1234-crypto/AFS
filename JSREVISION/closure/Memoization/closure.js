
// function outer(){
//     var a=10;
//     var b=20;
//     function inner(){
//         a++;
//         b++;
//         console.log("inner");
//         //data fetching code;
//     }

//    return inner;
    
// }


// let f1=outer();

// //api event
// inputSearch.addEvent("Change",f1);

//you can call this function anytime at anyplace;




//memo
function memo(){
    let obj={};
    function multiplyby5(inp){
        console.log(obj)
        if(obj.inp){
            console.log("memo");
           return console.log(obj.inp);
        }
        let res=5*inp; //expensive operation
        console.log("not memo");
        console.log(res);
        obj[inp]=res;
    }
   return multiplyby5;
}

let f1=memo();
f1(4);
f1(4);
f1(5);
f1(5);




