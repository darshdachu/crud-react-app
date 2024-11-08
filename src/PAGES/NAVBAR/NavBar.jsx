import React from 'react'
import Logo from './Logo'
import Menu from './Menu'


const NavBar = () => {
  return (
    <section id='navbar'>
        <article className='nav-container'>
            <Logo></Logo>
            <Menu></Menu>
        </article>
    </section>
  )
}

export default NavBar