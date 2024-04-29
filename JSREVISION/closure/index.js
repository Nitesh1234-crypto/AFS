function outer(){
    let a=10;
    let b=20;
    function inner(){
        a++;
        b++;
        console.log(a);
        console.log(b);
    }
    return inner;
}
let f1=outer();
f1();
let f2=outer();
f2();
