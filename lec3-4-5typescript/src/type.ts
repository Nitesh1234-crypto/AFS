let user={
    name:"nitesh",
    age:22
}
getAge(user);
function getAge(user:User){
    return user.age;
}

type User={
  readonly  name:string,
    age?:number
}
//what are the differences between type and interface in typescript

//union type
type stringornumber= string | number | boolean

function printId(id:stringornumber){
   console.log(id);
}
printId("12");
printId(12);

//intersection
type Employee ={
    name:string,
    age:number
}
interface Manager1{
    name:string,
    dept:string
}

type Employemanager= Employee & Manager1;

let e1={
    name:"nitesh",
    age:22,
    dept:"CSE"
}

// function getdept(e1:Employemanager){
//  console.log(e1.dept)
// }
// getdept(e1);