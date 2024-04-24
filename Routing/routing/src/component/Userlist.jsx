import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Userlist = () => {

  return (
    <div>
      <ul>
        <li>User1 <Link to="1">View</Link></li>
        <li>User2 <Link to="2">View</Link></li>
        <li>User3 <Link to="3">View</Link></li>
        <li>User4 <Link to="4">View</Link></li>
        <li>User5 <Link to="5">View</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Userlist
