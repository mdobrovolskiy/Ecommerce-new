import React from 'react'
import './Footer.sass'
const Footer = () => {
  return (
    <div className="footerWrap">
      <div className="footerItem">
        <div className="mainItem">HELP</div>
        <p>Frequently asked questions</p>
        <p>Contact</p>
        <p>How to purchase</p>
        <p>Payment</p>
      </div>
      <div className="footerItem">
        <div className="mainItem">FOLLOW US</div>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Pinterest</p>
      </div>
      <div className="footerItem">
        <div className="mainItem">COMPANY</div>
        <p>History of the brand</p>
        <p>Policy</p>
        <p>Work with Us</p>
      </div>
    </div>
  )
}

export default Footer
