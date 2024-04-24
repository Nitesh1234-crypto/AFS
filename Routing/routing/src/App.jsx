import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes,Link, useNavigate } from 'react-router-dom'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import User from './component/User'
import Userlist from './component/Userlist'
import Profile from './component/Profile'

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<User />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/userlist'  >
          <Route index  element={<Userlist />} />
          <Route path=':id' element={<Profile />} />
        </Route>


      </Routes>
    </>
  )
}

function Header(){
  let navigate=useNavigate();
  return(
    <>
    <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/userlist">Userlist</Link></li>
          {/* <li><button onClick={()=>{
               navigate("/")  
          }}>Home</button></li>
          <li><button onClick={()=>{
                 navigate("/dashboard")
          }}>dashboard</button></li> */}
        </ul>
      </nav>
    </>
  )
}

export default App
