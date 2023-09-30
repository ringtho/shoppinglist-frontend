import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ element: Element, loggedIn }) => {
  // const { isAuthenticated } = useSelector((state) => state.auth)
  if (!loggedIn) {
    return <Navigate replace to='/' />
  }
  return <Element />
}

export default ProtectedRoute
