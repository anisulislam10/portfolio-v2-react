import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-gradient-to-r from-blue-500  to-[#FF9F5F] pt-7 pb-5'>
        <div className='text-white ml-[420px] mr-[100px]'>
        <ul className='grid grid-cols-5 grid-flow-row text-center font-medium '>
            <li> <NavLink  to="/about" 
          className={({ isActive }) => isActive ? "text-orange-900 " : ""}>Home</NavLink></li>
            <li><NavLink to="/skills" 
          className={({ isActive }) => isActive ? "text-orange-900" : ""}>Skills</NavLink></li>
            <li><NavLink to="/Portfolio" 
          className={({ isActive }) => isActive ? "text-orange-900" : ""}>Portfolio</NavLink> </li>
            <li><NavLink to="/blogs" 
          className={({ isActive }) => isActive ? "text-orange-900" : ""}>Blogs</NavLink></li>
            <li className='bg-blue-500 text-white rounded-md pl-2 pr-2 text-center hover:bg-orange-500 hover:text-white'><NavLink to="/contact" 
          className={({ isActive }) => isActive ? "text-orange-900 hover:text-white" : ""}>Contact me</NavLink></li>

        </ul>
        </div>
    </div>
  )
}

export default Navbar