import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Audio } from 'react-loader-spinner'


function App() {
 const [selectedId,setSelectedId] = useState("1");


  return (
    <>
    <button onClick={()=>{setSelectedId("1")} }>Task1</button>
    <button onClick={()=>{setSelectedId("2")}}>Task2</button>
    <button onClick={()=>{setSelectedId("3")}}>Task3</button>
    <Todo id={selectedId} />
    
    </>
  )
}
function Todo({id}){
  const [todo,setTodo] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
 
  //https://jsonplaceholder.typicode.com/todos/1
  useEffect(()=>{
    async function fetchTodo(){
      setIsLoading(true);
      try {
        setTimeout(async()=>{
          let response=await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
          setTodo(response.data);
          setIsLoading(false)
        },1000)
      
      } catch (error) {
         console.log(error.message)
      }
     
    }
    fetchTodo();
  },[id])

  return(
    <>
    {isLoading? <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>: <h1>{todo.title}</h1> }
    
    </>
  )
}

export default App
