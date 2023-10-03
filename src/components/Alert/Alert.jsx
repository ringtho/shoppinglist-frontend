import React from 'react'
import './Alert.scss'
import { useNavigate } from 'react-router-dom'

const Alert = ({ message, variant, setShowAlert }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    setShowAlert(false)
    navigate('/')
  }

  return (
    <div className={`alert ${variant? variant : ''}`}>
      <p>{message}</p>
      <div onClick={handleClick}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  )
}

export default Alert
