import React from 'react'
import SidebarMenu from './SIDEBARMENU/SidebarMenu'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <section id='course-container'>
        <article>
            <aside className='sidebar'>
            <SidebarMenu></SidebarMenu>
            </aside>
            <aside className='content-wrapper'>

              <div className='content-inner'>
              <Outlet></Outlet>
              </div>
            
            </aside>
        </article>
    </section>
  )
}

export default Home