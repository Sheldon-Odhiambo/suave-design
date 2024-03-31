import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/slogo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={`navbar-container ${showNav ? 'open' : ''}`}>
      <div className='menubar-container'>
        <div className='logo-container'>
          <img src={logo} alt='' />
        </div>

        <div className='burger' onClick={() => setShowNav(!showNav)}>
          <i className={`fa-solid ${showNav ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        <nav className={showNav ? 'open' : ''}>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/service'>Services</NavLink>
          <NavLink to='/faqs'>Faqs</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
