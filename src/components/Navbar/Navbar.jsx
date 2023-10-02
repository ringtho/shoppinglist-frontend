import React from 'react'
import './Navbar.scss'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../reducers/authSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutApp = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <nav className='home__nav'>
        <h3>Shopping List</h3>
        <p className='logout' onClick={logoutApp}>LogOut</p>
    </nav>
  )
}

export default Navbar
