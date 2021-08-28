import React, { useState, useEffect } from 'react';

//styles
import './App.css';

import Header from './ui/Header/Header';
import About from './ui/About/About';
import Creations from './ui/Creations/Creations';
import Footer from './ui/Footer/Footer';

import Menu from './ui/Menu/Menu'

export const MAX_MOBILE_SCREEN = 768;


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  const isDesktop = dimensions.width > MAX_MOBILE_SCREEN ? true : false;

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div>
      {!isDesktop && <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />}
      <Header dimensions={dimensions} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className="spacer" />
      <About dimensions={dimensions} />
      <div className="spacer" />
      <Creations dimensions={dimensions} />
      <div className="spacer" />
      <Footer dimensions={dimensions} />
    </div>
  );
}

export default App;
