import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from '../logo bg removed (2).png';

function Navbar() {
  return (
    <nav className="container nav">
    <div className="logo">
      <img src={logo} alt="NXT LVL" />
      {/* <span>NXT LVL</span> */}
    </div>
    <ul>
      <li>
        <Link to="/" className="selected">
          Home
        </Link>
      </li>
  
      {/* <li>
        <Link to="/Panel">Panel</Link>
      </li> */}

      <li>
        <Link to="/AboutUs">About Us</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>
      
    </ul>
  </nav>
    
  );
}

export default Navbar;