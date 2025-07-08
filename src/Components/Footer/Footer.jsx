import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quasi officia quae dolor vero est officiis ex laborum deserunt, sed quam architecto temporibus dolorem laudantium quisquam veniam quidem similique eos.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch </h2>
                    <ul>
                        <li>9748124534</li>
                        <li>ankitchourasia2812@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">Copyright 2024 Tomato.com . All rights reserved</div>

        </div>
    )
}

export default Footer
