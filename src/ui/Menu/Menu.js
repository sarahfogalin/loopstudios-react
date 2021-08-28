import React from "react";

import "./Menu.css";

import logo from "../../images/logo.svg";
import close from "../../images/icon-close.svg";

const Menu = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div className={`nav-menu ${isMenuOpen ? "nav-menu-display" : ""}`}>
      <div className="nav">
        <div className="flex-space-between nav-spacing">
          <img src={logo} alt="logo" />
          <img
            src={close}
            alt="close-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <div className="nav-menu-buttons">
          <button className="nav-menu-button">ABOUT</button>
          <button className="nav-menu-button">CAREERS</button>
          <button className="nav-menu-button">EVENTS</button>
          <button className="nav-menu-button">PRODUCTS</button>
          <button className="nav-menu-button">SUPPORT</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
