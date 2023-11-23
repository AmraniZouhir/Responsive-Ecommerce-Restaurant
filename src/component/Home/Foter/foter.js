import React from 'react';
import './foterStyle.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <a href="#">Register</a>
                <a href="#">Forum</a>
                <a href="#">Affiliate</a>
                <a href="#">FAQ</a>
            </div>
            <div className="footer-icons">
                <FaFacebook className='footer-icon' />
                <FaTwitter className='footer-icon' />
                <FaInstagram className='footer-icon' />
                <FaLinkedin className='footer-icon' />
            </div>
            <div className="footer-copyright">
                &copy; 2023 Your Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
