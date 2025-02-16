import React from 'react'
import './NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom'
const NavBar = () => {
  const navigation= useNavigate()
  return (
    <header>
        <h1>GREEN TECH</h1>
        <nav>
            <ul>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/about">ABOUT</NavLink></li>
            <li><NavLink to="/service">SERVICE</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
            
            </ul>
        </nav>
        <div>
            <button onClick={()=>{navigation("/contact")}}>GET STARTED</button>
        </div>
    </header>
  )
}

export default NavBar