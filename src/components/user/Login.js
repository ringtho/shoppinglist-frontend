import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";

const Login = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Use Redux for isAuthenticated and error
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch(); 

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [isAuthenticated, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="container">
      <form className="shadow-lg" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email_field">Email</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password_field">Password</label>
          <input
            type="password"
            className="form-input"
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
