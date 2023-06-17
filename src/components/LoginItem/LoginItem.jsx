import React from 'react'
import LoginButton from '../LoginButton/LoginButton'

const LoginItem = ({ handleSigned, keepSigned }) => {
  return (
    <>
      <div className="pleaseAction">
        <p>Please enter your account details to log in</p>
      </div>
      <div className="inputs">
        <div className="emailInput">
          <input type="text" placeholder="E-mail" />
        </div>
        <div>
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div className="check">
        <div
          onClick={() => handleSigned()}
          className={`checkCircle ${keepSigned ? 'activeSign' : ''}`}
        ></div>
        <div className="checkSign">Keep me signed in</div>
      </div>
      <div className="loginAction">
        <LoginButton text="LOG IN" />
      </div>
    </>
  )
}

export default LoginItem
