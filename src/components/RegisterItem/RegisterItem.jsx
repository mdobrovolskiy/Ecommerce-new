import React from 'react'
import './RegisterItem.sass'
import LoginButton from '../LoginButton/LoginButton'
const RegisterItem = () => {
  return (
    <div className="registerMain">
      <div className="firstName">
        <div className="nameItem">FIRST NAME</div>
        <div className="nameInput">
          <input type="text" placeholder="Your first name" />
        </div>
      </div>
      <div className="firstName">
        <div className="nameItem">SECOND NAME</div>
        <div className="nameInput">
          <input type="text" placeholder="Your second name" />
        </div>
      </div>
      <div className="firstName">
        <div className="nameItem">EMAIL ADDRESS</div>
        <div className="nameInput">
          <input type="text" placeholder="Email" />
        </div>
      </div>
      <div className="firstName">
        <div className="nameItem">PASSWORD</div>
        <div className="nameInput">
          <input type="text" placeholder="Password" />
        </div>
        <div className="nameInput">
          <input type="text" placeholder="Confirm password" />
        </div>
        <div className="registerWrap">
          <LoginButton text="REGISTER" />
        </div>
      </div>
    </div>
  )
}

export default RegisterItem
