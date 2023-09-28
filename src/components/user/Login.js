import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../layout/Loader";
// import { useAlert } from "react-alert";
import "../../App.css";
// import usericon from "../../../public/images/person.png";
// import emailicon from "../../../public/images/email.png";
// import passwordicon from "../../../public/images/password.png";
import { login, clearErrors } from "../../actions/userActions";

const Login = ({ history, location }) => {
  const [action, setAction] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (isAuthenticated) {
      history.push(redirect);
    }
    if (error) {
      //   alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div className="container">
      <form className="shadow-lg" onSubmit={submitHandler}>
        {/* <h1 className="mb-3">Login</h1> */}
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="form-group">
          <label htmlFor="email_field">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password_field">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link to="/password/forgot" className="float-right mb-4">
          Forgot Password?
        </Link>

        <button id="login_button" type="submit" className="btn btn-block py-3">
          LOGIN
        </button>

        <Link to="/register" className="float-right mt-3">
          New User?
        </Link>
      </form>
    </div>
    // <div className="container">
    //   <form onSubmit={submitHandler}>
    //     <div className="header">
    //       <div className="text">{action}</div>
    //       <div className="underline"></div>
    //     </div>
    //     <div className="inputs">
    //       {action === "Login" ? (
    //         <div></div>
    //       ) : (
    //         <div className="input">
    //           <img src={usericon} alt="" />
    //           <input type="name" className="form-control" placeholder="Name" />
    //         </div>
    //       )}

    //       <div className="input">
    //         <img src={emailicon} alt="" />
    //         <input
    //           type="email"
    //           className="form-control"
    //           placeholder="Email"
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //       <div className="input">
    //         <img src={passwordicon} alt="" />
    //         <input type="password" placeholder="Password" />
    //       </div>
    //     </div>
    //     {action === "Sign Up" ? (
    //       <div></div>
    //     ) : (
    //       <div className="forgot-password">
    //         Lost Password ? <span>Click Here</span>
    //       </div>
    //     )}

    //     <div className="submit-container">
    //       <div
    //         className={action === "Login" ? "submit gray" : "submit"}
    //         onClick={() => setAction("Sign Up")}
    //       >
    //         Sign Up
    //       </div>
    //       <div
    //         className={action === "Sign Up" ? "submit gray" : "submit"}
    //         onClick={() => setAction("Login")}
    //       >
    //         Login
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
};

export default Login;
