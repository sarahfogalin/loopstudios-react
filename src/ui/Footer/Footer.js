import React from 'react';

// styles
import './Footer.css'

// images
import logo from '../../images/logo.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';

import { MAX_MOBILE_SCREEN } from '../../App';

const Footer = ({ dimensions }) => {
    const isDesktop = dimensions.width > MAX_MOBILE_SCREEN ? true : false;

    const socialMedia = (<div className={`social-media-icons ${isDesktop ? '' : 'center'}`}>
        <img src={facebook} className='social-media-icon' alt='facebook' />
        <img src={twitter} className='social-media-icon' alt='twitter' />
        <img src={pinterest} className='social-media-icon' alt='pinterest' />
        <img src={instagram} className='social-media-icon' alt='instagram' />
    </div>)

    const copyright = <span className={`copyright ${isDesktop ? '' : 'center'}`}>© 2021 Loopstudios. All rights reserved.</span>;

    return (
        <div className={`footer ${isDesktop ? '' : 'flex-center'}`}>
            <div className='flex-space-between'>
                <img src={logo} alt='logo' className={`footer-logo ${isDesktop ? '' : 'center'}`} />
                {isDesktop && socialMedia}
            </div>
            <div className={`${isDesktop ? 'flex-space-between' : ''}`}>
                <div className="footer-buttons">
                    <button className='footer-button'>About</button>
                    <button className='footer-button'>Careers</button>
                    <button className='footer-button'>Events</button>
                    <button className='footer-button'>Products</button>
                    <button className='footer-button'>Support</button>
                </div>
                {isDesktop && copyright}
            </div>
            {!isDesktop && (<div className='center'>
                {socialMedia}
                {copyright}
            </div>)
            }
        </div>
    );
}

export default Footer;