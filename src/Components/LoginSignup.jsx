/* eslint-enable */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react";
import { userLogin } from "../auth/authActions";
import "./LoginSignup.css";
import usericon from "../components/Assets/person.png";
import emailicon from "../components/Assets/email.png";
import passwordicon from "../components/Assets/password.png";
import { useActionData } from "react-router-dom";
import authSlice from "../reducers/authSlice";

const LOGIN_URL = "/auth";
const LoginSignup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [action, setAction] = useState("Sign Up");
  useEffect(() => {
    dispatch(authSlice.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(() => ({ ...inputs, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(authSlice.login(username, password, from));
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(submitted)}>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={usericon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src={emailicon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={passwordicon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password ? <span>Click Here</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup
