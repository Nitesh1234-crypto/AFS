let input= document.getElementById("myinput");
function getData(){
    console.log("getting data");
}
function debounce(){
 var id=null;
return  function inner(){
    if(id){
        clearTimeout(id)
    }
      id=setTimeout(()=>{
            getData(); 
    },1000)
 }
}
input.addEventListener("keypress",debounce());
