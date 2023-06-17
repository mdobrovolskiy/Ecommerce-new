import React from 'react'
import './LoginButton.sass'
const LoginButton = ({ text }) => {
  return (
    <div className="loginButton">
      <button>{text}</button>
    </div>
  )
}

export default LoginButton
