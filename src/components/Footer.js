import React from 'react'
import Line from './Line'

const Footer = () => {
  return (
    <>
    <div className="footer-main">
        <div className="line2">
            <Line />
        </div>
      <div className="f-top">
      <div className="wallet">
            Wallet
        </div>
      </div>
      <div className="f-bot">
        <nav className='f-links'>
            <a href="">© Wallet 2024</a>
            <a href="">Privacy policy</a>
            <a href="">Cookies policy</a>
            <a href="">Terms of use</a>   
        </nav>
        <div className="f-email">
            <input type="email" placeholder='Email Address' className='f-email-input' />
            <button className='log-in'>Send</button>
        </div>
      </div>
        
    </div>
    </>
  )
}

export default Footer