import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Navbar.scss'

const Navbar = ({ setIsViewUserActive, userInitials, user }) => {
  return (
    <nav className="home__nav">
      <h3 className="nav__title">Shopping List</h3>
      <div>
        {user
          ? (<div
              className='user-circle'
              onClick={() => setIsViewUserActive(prev => !prev)}
              >
              <h3>{userInitials}</h3>
           </div>)
          : <Link to="/">Login</Link>
        }
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  setIsViewUserActive: PropTypes.func,
  userInitials: PropTypes.string,
  user: PropTypes.string
}

export default Navbar
