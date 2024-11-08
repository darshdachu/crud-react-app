import React from 'react'
import {  NavLink } from 'react-router-dom'


const SidebarMenu = () => {
  return (
    <ul>
        <li>
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>HOME</NavLink>
        </li>
        <li>
        <NavLink to="/create-course" className={({isActive}) => isActive ? "active" : ""}>CREATE COURSE</NavLink>
        </li>
    </ul>
  )
}

export default SidebarMenu