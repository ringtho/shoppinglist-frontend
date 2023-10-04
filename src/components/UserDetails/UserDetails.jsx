import React from 'react'
import './UserDetails.scss'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserDetails = ({ user }) => {
  const navigate = useNavigate()
  const logoutApp = () => {
    window.localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="userdetails__wrapper">
      <div className="userdetails__container">
        <h3 className="account__title">ACCOUNT</h3>
        <div className="user__wrapper">
          <div className="avatar">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <p className="profile__name">{user}</p>
        </div>
        <div className="user__controls">
          <div className="controls" onClick={logoutApp}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <p>Log out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

UserDetails.propTypes = {
  user: PropTypes.string
}

export default UserDetails
