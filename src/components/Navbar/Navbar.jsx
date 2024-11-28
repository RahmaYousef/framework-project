import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   <nav className="bg-primary-100 shadow-sm py-10">
    <div className="container flex justify-between gap-12">
<div className="ml-3">
<NavLink to="/" className="font-semibold text-white text-3xl">START FRAMEWORK</NavLink>
</div>
<ul className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 mr-3">
      <li>
        <NavLink to="/about" className={({isActive})=>{
          return`relative before:absolute hover:before:w-full before:w-0 before:h-0.5 text-xl text-white before:bg-white before:left-0 before:bottom-0 ${isActive ? " font-semibold bg-primary-400 rounded-md p-1" :""}`
        }}>ABOUT</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" className={({isActive})=>{
          return`relative before:absolute hover:before:w-full before:w-0 before:h-0.5 text-xl text-white before:bg-white before:left-0 before:bottom-0 ${isActive ? " font-semibold bg-primary-400 rounded-md p-1" :""}`
        }}>Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/contact"className={({isActive})=>{
          return`relative before:absolute hover:before:w-full before:w-0 before:h-0.5 text-white text-xl before:bg-white before:left-0 before:bottom-0 ${isActive ? " font-semibold bg-primary-400 rounded-md p-1" :""}`
        }}>Contact</NavLink>
      </li>

      
    </ul>
    </div>
   </nav>
   </>
  )
}
