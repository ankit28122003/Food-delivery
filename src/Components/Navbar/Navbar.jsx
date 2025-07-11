import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className="logo" />
            <div className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={`navbar-link ${menu === "home" ? "active" : ""}`}>Home</Link>

                <ScrollLink
                    to="explore-menu"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setMenu("menu")}
                    className={`navbar-link ${menu === "menu" ? "active" : ""}`}
                >
                    Menu
                </ScrollLink>

                <ScrollLink
                    to="app-download"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setMenu("mobile-app")}
                    className={`navbar-link ${menu === "mobile-app" ? "active" : ""}`}
                >
                    Mobile App
                </ScrollLink>

                <ScrollLink
                    to="footer"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setMenu("contact-us")}
                    className={`navbar-link ${menu === "contact-us" ? "active" : ""}`}
                >
                    Contact Us
                </ScrollLink>
            </div>


            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>

        </div>
    )
}

export default Navbar
