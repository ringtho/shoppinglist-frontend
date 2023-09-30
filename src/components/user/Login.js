import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { login } from "../../reducers/authSlice";
import { loginData } from "../../api";
import Alert from "../Alert/Alert";
import './Login.scss'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useDispatch(); 
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const res = await loginData({email, password});
      console.log(res)
      const token = res.data.token
      localStorage.setItem('token', token)
      dispatch(login(token))
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

  console.log(isSubmitting)

  return (
    <div className="auth_container">
      <form className="shadow-lg" onSubmit={submitHandler}>
        <h2>Shopping List Login</h2>
        {error && showAlert && (
          <Alert
            message={error.data.detail}
            variant="danger"
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
          {isSubmitting? 'LOGGING IN' : 'LOGIN'}
        </button>

        <Link to="/register" className="float-right mt-3">
          New User?
        </Link>
      </form>
    </div>
  )
}

export default Login
