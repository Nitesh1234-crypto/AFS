function fun(){
    var a=10;
    let b=20;
    function inner(){
        // let a=50;
        a++;
        b++;
        console.log(a,b);
    }
   return inner;
}

let f1=fun();
console.log(f1);
f1();
f1();

let f2= fun();
f2();
f2()