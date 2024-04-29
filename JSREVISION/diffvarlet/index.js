
function fun(){
    var a=10 //functional scope , accessible only inside function
    console.log(b); //undefined
}
fun();
if(true){
    var b=50; //global scope
    let c=10; //block scope
    const d=60 //block scope
    console.log(c);
    
}
console.log(c); //not defined
console.log(d); //not defined




console.log(b);