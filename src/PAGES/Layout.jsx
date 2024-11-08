import React from 'react'
import NavBar from './NAVBAR/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <section id='main-block'>

    <article className='container'>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </article>

   </section>
  )
}

export default Layout