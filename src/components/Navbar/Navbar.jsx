import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = ({ setIsViewUserActive, userInitials, user }) => {

  return (
    <nav className="home__nav">
      <h3 className="nav__title">Shopping List</h3>
      <div>
        {user ? 
        (<div 
          className='user-circle'
          onClick={() => setIsViewUserActive(prev => !prev)}
          >
          <h3>{userInitials}</h3>
        </div> )  :
        <Link to="/">Login</Link>
        }
      </div>
    </nav>
  )
}

export default Navbar
