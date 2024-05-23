import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Ruler.css";
import logo from '../assets/slogo.png';

const Ruler = () => {
  return (
    <div className="ruler-container">
      <hr className="ruler__hr" />
      <div className="ruler">
        <div className="ruler__logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="ruler__nav">
          <ul>
            <li><Link to="/house">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="ruler__bottom">
          <p>&copy; 2024 Suave Design</p>
          <p className="ruler__location">Location: Your Shop Address</p>
        </div>
      </div>
    </div>
  );
}

export default Ruler;
