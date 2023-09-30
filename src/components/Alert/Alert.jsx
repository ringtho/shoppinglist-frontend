import React from 'react'
import './Alert.scss'

const Alert = ({ message, variant, setShowAlert }) => {
  
  const handleClick = () => {
    setShowAlert(false)
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
