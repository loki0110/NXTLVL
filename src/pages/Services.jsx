import React from 'react';
import './Services.css';
import NavbarServices from '../pages/NavbarServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTools, faCarOn } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="services-container">
            <NavbarServices/>
            <section className="services-content">
                <div className="service-card">
                    <FontAwesomeIcon icon={faCar} className="service-icon"/>
                    <h2 className='title'>CAR RENTAL SERVICE</h2>
                    <p className='para'>"Experience hassle-free travel with our reliable car rental service, offering a wide range of vehicles to suit every need and budget."</p>
                    <Link to='/rental' className='futuristic-button'>Visit Service</Link>
                </div>
                <div className="service-card">
                    <FontAwesomeIcon icon={faTools} className="service-icon" />
                    <h2 className='title'>CAR REPAIR SERVICES</h2>
                    <p className='para'>"Expert car repair service with quick turnaround times. Quality parts and skilled technicians ensure your vehicle is road-ready."</p>
                    <Link to='/Repair' className='futuristic-button'>Visit Service</Link>
                </div>
                <div className="service-card">
                    <FontAwesomeIcon icon={faCarOn} className="service-icon" />
                    <h2 className='title'>CAR ACCESSORIES SERVICE</h2>
                    <p className='para'>"Enhance your driving experience with our premium car accessories. Start from GPS, we have everything to personalise your vehicle."</p>
                    <Link to='/landing' className='futuristic-button'>Visit Service</Link>
                </div>
            </section>
        </div>
    );
}

export default Services;
