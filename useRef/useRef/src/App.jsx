import { useState,useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [incomeTaxt, setIncomeTax]= useState("0")
 const [name,setName] = useState("");
 const inputRef= useRef("");
//  const  Incomeref = useRef(null);
//  useEffect(()=>{
//   console.log(Incomeref.current);
//   setTimeout(()=>{
//     Incomeref.current.innerText="2000"
//   },5000)

//  },[])
function inputChnageHandler(e){
   inputRef.tax= e.target.value
}
function nameChnageHandler(e){
  inputRef.name= e.target.value;
}
function btnClickHandler(){
     setName(inputRef.name);
     setIncomeTax(inputRef.tax);
}

  return (
    <>
        <input onChange={nameChnageHandler} type="text" placeholder='Enter Name' />
       <input onChange={inputChnageHandler} type="text" placeholder='Enter tax calculated' />
      <button onClick={btnClickHandler}>CA</button>
      <h2>{name}</h2>
     <h1>Tax calculated: <span > {incomeTaxt} </span></h1>
    </>
  )
}

export default App
