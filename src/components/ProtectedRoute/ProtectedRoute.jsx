import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children }) => {
  const token = window.localStorage.getItem('token')
  if (!token) {
    return <Navigate
      replace to='/'
      state={{ alert: 'Authentication is Required' }}
    />
  }
  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.object
}

export default ProtectedRoute
