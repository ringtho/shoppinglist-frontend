import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api";
import Alert from "../Alert/Alert";

const Register = () => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()
  const { first_name, last_name, email, password } = user;

  const submitHandler = async (e) => {
    setIsSubmitting(true)
    e.preventDefault();
    try {
      await register(user)
      navigate('/', { replace:true })
    } catch (error) {
      setShowAlert(true)
      setError(error.response.status)
      setUser({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
      })
    } finally {
      setIsSubmitting(false)
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth_container">
      <form className="shadow-lg" onSubmit={submitHandler}>
        <h2 className="mb-3">Shopping List Register</h2>
        {error === 500 && showAlert && (
          <Alert
            message="Account with this email address already exists"
            variant="danger"
            setShowAlert={setShowAlert}
          />
        )}
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
            placeholder="eg John"
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
            placeholder="eg Doe"
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
            placeholder="eg John@gmail.com"
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
            placeholder="*******"
          />
        </div>
        <button
          id="register_button"
          type="submit"
          className="btn btn-block py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'REGISTERING' : 'REGISTER'}
        </button>
        <Link to="/" className="float-right mt-3">
          Already a member? Login
        </Link>
      </form>
    </div>
  )
};

export default Register;
