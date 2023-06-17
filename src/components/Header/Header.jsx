import React from 'react'
import './Header.sass'
import logo from '../../images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { handleCategory } from '../../redux/slices/categorySlice'
import { useNavigate, useLocation } from 'react-router'
import search from '../../images/Group.svg'
import bag from '../../images/bag.svg'
import profile from '../../images/Vector.svg'
import { useRef } from 'react'
import { addRef } from '../../redux/slices/categorySlice'
import { useEffect } from 'react'

const Header = () => {
  const location = useLocation()
  const catRef = useRef()
  const navigate = useNavigate()
  const categoriesOpen = useSelector((state) => state.counter.categoriesOpen)
  const dispatch = useDispatch()
  const handleCatClick = (name) => {
    dispatch(handleCategory([!categoriesOpen, name]))
  }
  useEffect(() => {
    dispatch(addRef(catRef.current))
  }, [])

  return (
    <div className="headerWrap">
      <div className="category">
        <div ref={catRef} className="catWrap">
          <div className="catItem" onClick={() => handleCatClick('MAN')}>
            MAN
          </div>
          <div className="catItem" onClick={() => handleCatClick('WOMAN')}>
            WOMAN
          </div>
          <div className="catItem" onClick={() => handleCatClick('ACCESSORY')}>
            ACCESSORY
          </div>
        </div>
      </div>
      <div onClick={() => navigate('/collection')} className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="userInterface">
        <div className="userWrap">
          <div className="userItem" onClick={() => navigate('/1')}>
            <img src={search} alt="" /> Search
          </div>
          <div className="userItem" onClick={() => navigate('/account')}>
            {' '}
            <img src={profile} alt="" />
            My account
          </div>
          <div className="userItem">
            <img src={bag} alt="" /> Shopping bag
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
