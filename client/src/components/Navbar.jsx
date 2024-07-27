import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useAuth } from '../Store/auth'



const Navbar = () => {
  const {isLoggedIn} = useAuth();
  return (
    <div>
        <div className="nav fixed">
          <label htmlFor="check" className='checkbtn'>&#9776;</label>
          <input type="checkbox"  id='check'/>
          <NavLink to={"/"}><label className='logo cursor-pointer'>deepTeck</label></NavLink>
          <ul>
            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/service">Service</NavLink></li>
            <li> <NavLink to="/about">About</NavLink></li>
            <li> <NavLink to="/contact">Contact</NavLink></li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ) : (
            <>
              <li> <NavLink to="/register">Register</NavLink></li>
              <li> <NavLink to="/login">Login</NavLink></li>
              </>
            )}
           
          </ul>
        </div>
    </div>
  )
}

export default Navbar



{/* <li><a href='/home'>Home</a></li>
<li><a href='/service'>Services</a></li>
<li><a href='/about'>About</a></li>
<li><a href='/contact'>Contact</a></li>
<li><a href='/register'>Register</a></li> */}