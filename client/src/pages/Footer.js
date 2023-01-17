import React from 'react'
import './CSS/Footer.css';

function Footer() {
  return (
    <section className='Footer'>
        <div className='Contact-container'>
            <h2 className='Contact-header'>
                Early adopters or hardware designers and suppliers?
            </h2>
            <p className='Contact-text'>
                We’d love to meet! Please contact us for early access!
            </p>
            <a  className='Contact-us' href='mailto:ay3xqa@virginia.edu?subject=Inquiring About ASMBL'>Contact Us</a>
        </div>
        <div className='Footer-container'>
          <div>
            © Copyright 2022, All Rights Reserved
          </div>
          <div className='Footer-links'>
            <p>Support</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
    </section>
  )
}

export default Footer