import React from 'react';
import './navbar.css';
function Navbar() {
  return (
    <nav style={{ backgroundColor: 'transparent', zIndex: 2 }}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          YourLogo
        </a>
        <ul className="navbar-links hide-on-mobile">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="navbar-auth">
          <button className="navbar-login-btn">Log In</button>
          <button className="navbar-signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
