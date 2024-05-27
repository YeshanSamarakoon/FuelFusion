import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to={'/'} className={({isActive})=> isActive? "active-link" : ""}>Home</NavLink>
      <NavLink to={'/Sports'} className={({isActive})=> isActive? "active-link" : ""}>Sports</NavLink>
      <NavLink to={'/Relaxation'} className={({isActive})=> isActive? "active-link" : ""}>Relaxation</NavLink>
      <NavLink to={'/Natural energy'} className={({isActive})=> isActive? "active-link" : ""}>Natural energy</NavLink>
      
    </nav>
  
  )
}

export default Navbar
 