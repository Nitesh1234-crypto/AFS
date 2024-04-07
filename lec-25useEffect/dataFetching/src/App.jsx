import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  api_path=https://jsonplaceholder.typicode.com/posts
  const [posts,setPosts]= useState(null);
useEffect(()=>{
 async function fetchData(){
  let response= await fetch("https://jsonplaceholder.typicode.com/posts");
 let data=await response.json()
  console.log(data);
  setPosts(data);
  }
  fetchData();
},[]);

  return (
    <>
     <h1>Data</h1>
     <div className="container">
      {posts && posts.map((post)=>{
        return (
          <ul>
          <Onepost key={post.id} title={post.title}></Onepost>
          </ul>
        )
      })}
     </div>
    </>
  )
}
function Onepost(props){
  return(
    <>
   
      <li>{props.title} </li>
  
    </>
  )
}

export default App
