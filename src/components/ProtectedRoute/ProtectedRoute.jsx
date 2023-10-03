import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return <Navigate replace to='/' state={{alert: 'Authentication is Required'}} />
  }
  return children
}

export default ProtectedRoute
