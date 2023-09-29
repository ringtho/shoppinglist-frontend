import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/authActions";
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './Login.scss'
import { loginData } from "../../api";

const Login = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwtToken, setJwtToken] = useState(null)
  

  // Use Redux for isAuthenticated and error
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch(); 

  const navigate = useNavigate()

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(()=> {
    const jwtCookie = Cookies.get('jwt')
    setJwtToken(jwtCookie)
    console.log(jwtCookie)
  },[])

  useEffect(() => {
    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [isAuthenticated, history]);


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await loginData({email, password});
      localStorage.setItem('shoppingToken', res.data.token)
      navigate('/')
      // navigate('/')
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <div className="container">
      <form className="shadow-lg" onSubmit={submitHandler}>
        <h2>Shopping List Login</h2>
        <div className="form-group">
          <label htmlFor="email_field">Email</label>
          <input
            type="email"
            className="form-input"
            id="email_field"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
        </div>

        {/* Display error if there's an authentication error */}
        {error && <div className="error-message">{error}</div>}

        <button id="login_button" type="submit" className="button btn btn-block py-3">
          LOGIN
        </button>

        <Link to="/register" className="float-right mt-3">
          New User?
        </Link>
      </form>
    </div>

    
  );
};

export default Login;
