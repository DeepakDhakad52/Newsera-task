import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
            <li><Link to={'/careers'}>Carrers</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
