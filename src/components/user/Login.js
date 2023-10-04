import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { loginData } from '../../api'
import Alert from '../Alert/Alert'
import './Login.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [alert, setAlert] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const submitHandler = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await loginData({ email, password })
      const token = res.data
      window.localStorage.setItem('token', JSON.stringify(token))
      navigate('/home')
    } catch (error) {
      setShowAlert(true)
      setError(error.response)
      setEmail('')
      setPassword('')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const alert = location?.state?.alert
    if (alert) {
      setAlert(alert)
      setError(alert)
      setShowAlert(true)
    }

    const timer = setTimeout(() => {
      if (alert || error) {
        setShowAlert(false)
        navigate('/')
      }
    }, 10000)

    return function () {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="auth_container">
      <form className="shadow-lg" onSubmit={submitHandler}>
        <h2>Shopping List Login</h2>
        {error && !alert && showAlert && (
          <Alert
            message={error?.data?.detail}
            variant="danger"
            setShowAlert={setShowAlert}
            setError={setError}
          />
        )}
        {alert && showAlert && (
          <Alert
            message={error}
            variant="info"
            setShowAlert={setShowAlert}
            setError={setError}
          />
        )}
        <div className="form-group">
          <label htmlFor="email_field">Email</label>
          <input
            type="email"
            className="form-input"
            id="email_field"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="eg John@gmail.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password_field">Password</label>
          <input
            type="password"
            className="form-input"
            id="password_field"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
          />
        </div>
        <button
          id="login_button"
          type="submit"
          className="button btn btn-block py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'LOGGING IN' : 'LOGIN'}
        </button>

        <Link to="/register" className="float-right mt-3">
          New User?
        </Link>
      </form>
    </div>
  )
}

export default Login
