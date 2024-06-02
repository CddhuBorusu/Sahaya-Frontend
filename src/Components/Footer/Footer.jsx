import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
        </div>
        <div className="footer-icons-container">
        </div>
        <div className="footer-icons-container">
        </div>
      </div>
    </div>
  )
}

export default Footer