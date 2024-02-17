
// function greet(user:User){
//     console.log("hello"+user.name);
// }

// let user={
//     name:"nitesh",
//     age:22
// }
// greet(user);
// function getAge(user:User){
//     return user.age;
// }

// interface User{
//   readonly  name:string,
//     age?:number
// }


interface Person{
    name?:string,
    age:number,
    greet:()=>void
}
// class Employee implements Person{
//     name:string;
//     age:number
//  constructor(a:string,b:number){
//     this.name=a,
//     this.age=b
//  }
//  greet(){
//     console.log("hello"+this.name);
//  }
    
// }
class Manager implements Person{
    name:string;
    age:number
 constructor(a:string,b:number){
    this.name=a,
    this.age=b
 }
 greet(){
console.log("hello"+ this.name);
 }
 
}

// let em1=new Employee("Tushar",23);

// em1.greet();

interface People extends Person{
    adress:string
}
class Peopl implements People{
    name:string;
    age:number;
    adress: string;
    constructor(a:string,b:number,c:string){
        this.name=a;
        this.age=b;
        this.adress=c

    }
    greet(){
        console.log("hello"+ this.name);
         }
}
let p1={
    name:"nitesh",
    age:22,
    adress:"delhi",
    greet:function(){
        console.log("hello"+this.name);
    }
}

function some(people:People){
    console.log(people.name)
}
some(p1);