function APICALL(){
    //code to get data from database
    console.log("getting data");
}
let input= document.getElementById("myinput");

function debounce(cb,delay){
    let id;
    function inner(){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(()=>{
        cb()
    },delay)
 }
 return inner;
}
// let fun=debounce()
input.addEventListener("keypress",debounce(APICALL,1000))