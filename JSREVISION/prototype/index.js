// let obj={
//     a:"10"
// }
// console.log(obj)

function Person(fname,lname,age){
       this.fname=fname,
       this.lname=lname,
       this.age=age
}
Person.prototype.fullname=function(){
    console.log(this.fname+" "+this.lname)
}

let p1 = new Person("nitesh","Singh",22);
let p2=new Person("fsdfs","fsggdfgdf",35);
console.log(p1);
console.log(p2);

// let p1proto=p1.__proto__; //p1 prototype

// console.log(p1proto.__proto__.__proto__);

Object.prototype.abc=12;

let obj={}

console.log(obj.abc)
let str= new String();
console.log(str);

let str1="abc";
console.log(str1);
console.log(str1.toUpperCase());

let num = new Number();
console.log(num);
let num1=56;
console.log(typeof num1.toLocaleString());
//