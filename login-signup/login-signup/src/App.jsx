import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
 

  return (
    <>
      <Login />
      <Signup />
    </>
  )
}

function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  console.log(email,password);
 async function loginHandler(e){
  e.preventDefault();
    let response=await axios.post('http://localhost:3000/login', {
     email: email,
      password: password
    })
    console.log(response.data);
  }
  
   return(
    <>
     <form onSubmit={loginHandler}>
      <input type="email" name="username" id=""  placeholder='Enter username' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" name='password' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} />
      <button>Login</button>
     </form>
    </>
   )
}
function Signup(){
return(
  <>
  </>
)
}

export default App
