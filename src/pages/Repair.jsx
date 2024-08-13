// Services.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCarBattery, faTemperatureArrowUp, faCarRear, faCircleDot, faLightbulb, faTools, faWheelchairAlt, faCarBurst } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link component
import './Repair.css';

const Repair = () => {
    return (
        <div className="image-background">

        <div className="repair-container">
            <header className="repair-header">
                <h1 className='heading'>Car Repair And Maintenance</h1>
            </header>
            <title className="car"><h3><b>Car Inspections And Checks</b></h3></title>
            <section className="repair-content">
                <div className="repair-card">
                    <FontAwesomeIcon icon={faCar} className="repair-icon"/>
                    <h2 className='title'>CAR PERIODIC MAINTENANCE</h2>
                    <p className='para'>"Maintain your car and increase its performance with regular servicing from Bosch Car Service."</p>
                    <Link to="/booking" className='bt'>BOOK NOW</Link>
                </div>
                <div className="repair-card">
                    <FontAwesomeIcon icon={faCar} className="repair-icon" />
                    <h2 className='title'>CAR MULTIPOINT CHECK</h2>
                    <p className='para'>"When you feel your car is overused, or you are planning a long road trip, our stem-to-stern check points will ensure to identify any damage or faults."</p>
                    <Link to="/booking" className='bt'>BOOK NOW</Link>
                </div>
                <div className="repair-card">
                    <FontAwesomeIcon icon={faCar} className="repair-icon" />
                    <h2 className='title'>CAR SEASONAL CHECK-UP</h2>
                    <p className='para'>"Bosch Car Service recommends giving your vehicle a thorough vehicle check-up at the changing of the seasons."</p>
                    <Link to="/booking" className='bt'>BOOK NOW</Link>
                </div>
            </section>
            <br />
            <br />
            <title className="car"><h3><b>Car Electronic Services</b></h3></title>
            <section className="repair-content">
                <div className="repair-card">
                    <FontAwesomeIcon icon={faCarBattery} className="repair-icon"/>
                    <h2 className='title'>CAR BATTERY CHECK</h2>
                    <p className='para'>"A simple battery check from Bosch Car Service will help you avoid the inconvenience of a dead battery."</p>
                    <Link to="/booking" className='bt'>BOOK NOW</Link>
                </div>
                
                <div className="repair-card">
                    <FontAwesomeIcon icon={faCarBattery} className="repair-icon" />
                    <h2 className='title'>CAR ELECTRONIC DIAGNOSIS</h2>
                    <p className='para'>"Bosch Car Service is able to provide the full spectrum of electrical and electronic service, from diagnosing and repairing problems with the computerized system on your vehicle."</p>
                    <Link to="/booking" className='bt'>BOOK NOW</Link>
                </div>
            </section>
            <br />
            <br />
            <title className="car"><h3><b>Car Engine Service</b></h3></title>
            <section className="repair-content">
                <div className="repair-card">
                    <FontAwesomeIcon icon={faCarRear} className="repair-icon"/>
                    <h2 className='title'>ENGINE AND CAR DIAGNOSTIC CHECK</h2>
                    <p className='para'>"A computerized car diagnostic check from Bosch Car Service will give you a true picture of how your vehicle is running."</p>
                    <Link to="/booking" className='bt'>BOOK NOW</Link>
                </div>
                <div className="repair-card">
                    <FontAwesomeIcon icon={faCarRear} className="repair-icon"/>
                    <h2 className='title'>OIL AND FILTER CHANGE</h2>
                    <p className='para'>"An oil and filter change might seem like a routine service, but requesting it from Bosch Car Service has some major advantages."</p>
                    <Link to="/booking" className='bt'>BOOK NOW</Link>
                </div>
            </section>
            <br />
            <br />
            <title className="car"><h3><b>Car Brake Service</b></h3></title>
            <section className="repair-content">
                <div className="repair-card">
                    <FontAwesomeIcon icon={faCircleDot} className="repair-icon" />
                    <h2 className='title'>BRAKE REPAIR & MAINTENANCE</h2>
                    <p className='para'>"Brake repair and maintenance at a Bosch Car Service workshop is guaranteed to ensure safety."</p>
                    <Link to="/booking" className='bt'>BOOK NOW</Link>
                </div>
                <div className="repair-card">
                    <FontAwesomeIcon icon={faCircleDot} className="repair-icon" />
                    <h2 className='title'>SAFETY FEATURES CHECK</h2>
                    <p className='para'>"You can trust the specialists at Bosch Car Service to diagnose and repair problems with any electronic safety system in your vehicle."</p>
                    <Link to="/booking" className='bt'>BOOK NOW</Link>
                </div>
            </section>
            <br />
            <br />
            <title className="car"><h3><b>Car Headlight Bulb Check</b></h3></title>
            <section className="repair-content">
                <div className="repair-card">
                    <FontAwesomeIcon icon={faLightbulb} className="repair-icon"/>
                    <h2 className='title'>CAR HEADLIGHT BULB CHECK</h2>
                    <p className='para'>"Trusting your light service requirements to Bosch Car Service has some important benefits."</p>
                    <Link to="/booking" className='bt'>BOOK NOW</Link>
                </div>
            </section>
            <br />
            <br />
            
            <br />
            <br />
            <title className="car"><h3><b>Car Tyre Service</b></h3></title>
            <section className="repair-content">
                <div className="repair-card">
                    <FontAwesomeIcon icon={faCarBurst} className="repair-icon"/>
                    <h2 className='title'>CAR TYRE SERVICE</h2>
                    <p className='para'>"When you ask Bosch Car Service to replace your tyres, we provide a lot of extra value."</p>
                    <Link to="/booking" className='bt'>BOOK NOW</Link>
                </div>
            </section>
            <br />
            <br />
            <title className="car"><h3><b>Car Air Conditioning Service</b></h3></title>
            <section className="repair-content">
                <div className="repair-card">
                    <FontAwesomeIcon icon={faTemperatureArrowUp} className="repair-icon"/>
                    <h2 className='title'>CAR AIR CONDITIONING SERVICE</h2>
                    <p className='para'>"The Bosch Car Service experts will be pleased to service your car air conditioning system to ensure a pleasant temperature while you are on the move."</p>
                    <Link to="/booking" className='bt'>BOOK NOW</Link>
                </div>
            </section>
        </div>
        </div>
    );
}

export default Repair;
