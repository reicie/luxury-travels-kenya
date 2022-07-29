import React, {useState} from 'react';
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {HiOutlineMenu} from 'react-icons/hi';
import {AiOutlineClose } from 'react-icons/ai';
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube} from 'react-icons/fa';
import {Link} from 'react-scroll';

import './navbar-styles.css'

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)
    return (
        <div name="home" className={nav ? 'navbar navbar-bg': 'navbar'}>
            <div className={nav ? 'logo dark': 'logo'}>
                <h2>BEACHES.</h2>
            </div>
            {/* nav menu */}
            <ul className="nav-menu">
                <Link to="home" smooth={true} duration={500}><li>Home</li></Link>
                <Link to="destinations" smooth={true} duration={500}><li>Destinations</li></Link>
                <Link to="book" smooth={true} duration={500}><li>Travel</li></Link>
                <Link to="book" smooth={true} duration={500}><li>Book</li></Link>
                <Link to="views" smooth={true} duration={500}><li>Views</li></Link>
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {nav ? (<AiOutlineClose className="icon dark" />): (<HiOutlineMenu className="icon" />)}
            </div>
            <div className={nav ? 'mobile-menu active': 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link to="home" smooth={true} duration={500}><li>Home</li></Link>
                    <Link to="destinations" smooth={true} duration={500}><li>Destinations</li></Link>
                    <Link to="book" smooth={true} duration={500}><li>Travel</li></Link>
                    <Link to="book" smooth={true} duration={500}><li>Book</li></Link>
                    <Link to="views" smooth={true} duration={500}><li>Views</li></Link>
                </ul>
                <div className="mobile-menu-button">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaPinterest className="icon" />
                        <FaTwitter className="icon" />
                        <FaYoutube className="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

