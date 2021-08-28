import React from 'react';

// styles
import './Header.css';

// images
import desktopHero from '../../images/desktop/image-hero.jpg';
import mobileHero from '../../images/mobile/image-hero.jpg';
import logo from '../../images/logo.svg';
import menu from '../../images/icon-hamburger.svg';
import { MAX_MOBILE_SCREEN } from '../../App';

const Header = ({ dimensions, setIsMenuOpen, isMenuOpen }) => {
  const isDesktop = dimensions.width > MAX_MOBILE_SCREEN ? true : false;

  return (
    <div className="flex-center">
      <img src={isDesktop ? desktopHero : mobileHero} className="hero-image" alt="hero" />
      <div className="nav">
        <div className="flex-space-between nav-spacing">
          <img src={logo} alt="logo" className='logo' />
          {!isDesktop && <img src={menu} alt="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)} />}
          {isDesktop && (
            <div className='header-nav-menu'>
              <button className='header-nav-button'>About</button>
              <button className='header-nav-button'>Careers</button>
              <button className='header-nav-button'>Events</button>
              <button className='header-nav-button'>Products</button>
              <button className='header-nav-button'>Support</button>
            </div>
          )}
        </div>
      </div>
      <h1 className="slogan">
        IMMERSIVE<br />EXPERIENCES<br />THAT {!isDesktop && <br />}DELIVER
      </h1>
    </div>
  );
}

export default Header;