import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, loggedIn }) => {
  if (!loggedIn) {
    return <Navigate replace to='/' />
  }
  return children
}

export default ProtectedRoute
