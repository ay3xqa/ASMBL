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
        <div className='Footer' ></div>
    </section>
  )
}

export default Footer