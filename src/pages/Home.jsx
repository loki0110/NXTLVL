import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import logo from "./logo bg removed (2).png"; // Make sure to place your logo.png in the src folder
import Footer from '../pages/Footer';

function Home() {
  return (
    <div className="Home">
      <header className="header">
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
            <li>
              <Link to="/Aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
           
          </ul>
        </nav>
        <div className="content">
          <div className="container">
            <h1>Car Repairs and Rental Club</h1>
            <p>Visit us for your car service and to rent cars !</p>
            <Link to="/Login" className="highlight" >
              Book Appointment
            </Link>
          </div>
        </div>
      </header>
      <Footer />
      
    </div>
  );
}

export default Home;
