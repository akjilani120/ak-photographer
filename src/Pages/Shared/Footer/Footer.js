import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='container footer-head'>
                <div className="footer-item">
                    <h2 className='footer-list-title'>About Me</h2>
                    <p>Hi I am Ak Jilani a proffesonal a photographer, traveler and bloggger</p>
                </div>
                <div className="footer-item">
                <h2 className='footer-list-title'>Contact</h2>
                <p>40 New York</p>
                <p>NY 1000, Us</p>                
                <p>+18000 111 222</p>
                <p>akjilani@gmail.con</p>
                </div>
                <div className="footer-item">
                <h2 className='footer-list-title'>Quick Links</h2>
                 <ul className='footer-order-list'>
                     <li>Home</li>
                     <li>About</li>
                     <li>Blogs</li>
                     <li>Contact</li>
                 </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;