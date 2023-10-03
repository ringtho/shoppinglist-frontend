import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import Login from './components/user/Login'
import Register from './components/user/Register'
import Home from './components/Home/Home'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "./reducers/authSlice"


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect (() => {
    const token = localStorage.getItem('token')
    setLoggedIn(true)
    dispatch(login(token))
  },[]) 

  return (
    <Router>
      <main className="container content">
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </Router>
  )
  
}

export default App;
