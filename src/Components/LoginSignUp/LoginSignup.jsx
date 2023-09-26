/* eslint-enable */
import React from 'react'
// import  LoginSignup from'./Components/LoginSignup'
import usericon from '../Assets/person.png'
import emailicon from '../Assets/email.png'
import passwordicon from '../Assets/password.png'

const LoginSignup = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>SignUp</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={usericon} alt='' />
          <input type='text' />
        </div>
        <div className='input'>
          <img src={emailicon} alt='' />
          <input type='email' />
        </div>
        <div className='input'>
          <img src={passwordicon} alt='' />
          <input type='password' />
        </div>
      </div>
      <div className='forgot-password'>
        LostPassword?<span>ClickHere</span>
      </div>
      <div className='submit-container'>
        <div className='submit'>SignUp</div>
        <div className='submit'>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
