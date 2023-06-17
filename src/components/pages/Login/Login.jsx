import React from 'react'
import './Login.sass'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import { useState } from 'react'
import LoginItem from '../../LoginItem/LoginItem'
import RegisterItem from '../../RegisterItem/RegisterItem'
const Login = () => {
  const [currSection, setCurrentSection] = useState('login')
  const [keepSigned, setKeepSigned] = useState(false)
  const handleSection = (section) => {
    setCurrentSection(section)
  }
  const handleSigned = () => {
    setKeepSigned(!keepSigned)
  }
  return (
    <div className="container">
      <Header />
      <div className="form">
        <div className="chooseList">
          <div
            className={`chooseLogin ${
              currSection === 'login' ? 'activeLogin' : ''
            }`}
            onClick={() => handleSection('login')}
          >
            Login
          </div>
          <div
            className={`chooseLogin ${
              currSection === 'reg' ? 'activeLogin' : ''
            }`}
            onClick={() => handleSection('reg')}
          >
            Registration
          </div>
        </div>
        {currSection === 'login' ? (
          <LoginItem handleSigned={handleSigned} keepSigned={keepSigned} />
        ) : (
          <RegisterItem />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Login
