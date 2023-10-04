import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Alert.scss'

const Alert = ({ message, variant, setShowAlert }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    setShowAlert(false)
    navigate('/')
  }

  return (
    <div className={`alert ${variant || ''}`}>
      <p>{message}</p>
      <div onClick={handleClick}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.string,
  setShowAlert: PropTypes.func
}

export default Alert
