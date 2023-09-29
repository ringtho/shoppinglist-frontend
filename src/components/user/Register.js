import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { register } from "../../actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api";
import axios from "axios";

const Register = ({ history }) => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const { first_name, last_name, email, password } = user;
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    // Handle errors using Redux actions
    if (error) {
      // You can dispatch an action to clear errors if needed.
    }
  }, [dispatch, isAuthenticated, error, history]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await register(user)
      console.log(res)
      navigate('/')
    } catch (error) {
      console.log(error)
    }

    // Dispatch the registration action with the user data
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth_container">
      <form className="shadow-lg" onSubmit={submitHandler}>
        <h2 className="mb-3">Shopping List Register</h2>

        <div className="form-group">
          <label htmlFor="first_name_field">First Name</label>
          <input
            type="text"
            id="first_name_field"
            className="form-control"
            name="first_name"
            value={first_name}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="last_name_field">Last Name</label>
          <input
            type="text"
            id="last_name_field"
            className="form-control"
            name="last_name"
            value={last_name}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email_field">Email</label>
          <input
            type="email"
            id="email_field"
            className="form-control"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password_field">Password</label>
          <input
            type="password"
            id="password_field"
            className="form-control"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <button
          id="register_button"
          type="submit"
          className="btn btn-block py-3"
          disabled={loading ? true : false}
        >
          REGISTER
        </button>
        <Link to="/" className="float-right mt-3">
          Already a member? Login
        </Link>
      </form>
    </div>
  )
};

export default Register;
