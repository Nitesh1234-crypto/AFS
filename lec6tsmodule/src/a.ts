export let num:number =10;

export function isLegal(age:number){
    if(age>18) return true;
    return false;
}
// isLegal(20);

function getName(name:string){
    console.log(name);
}

export default getName;