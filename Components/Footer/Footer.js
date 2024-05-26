import React from 'react'
import './Footer.css'
import {images} from '../../Components/Assets/Assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <h2 className='font-bold font-size text-2xl'>MU <span className='text-red-600'>Events</span></h2>
                <p>The ultimate MU event manager.</p>
                <div className='footer-social-icons'>
                    <img src={images.facebook_icon} alt=' '/>
                    <img src={images.twitter_icon} alt=' '/>
                    <img src={images.linkedin_icon} alt=' '/>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2 className='font-bold text-lg'>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Address</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2 className='font-bold text-lg'>Get In Touch</h2>
                <ul>
                    <li>+01678973411</li>
                    <li>metroUniEvents@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 © MuEvents.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
