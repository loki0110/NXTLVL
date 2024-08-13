import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ServiceBooking.css'; // Import the CSS file

function ServiceBooking() {
  const [startDate, setStartDate] = useState(new Date());
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.body.classList.add('service-booking-background');
    return () => {
      document.body.classList.remove('service-booking-background');
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingData = {
      vehicleNumber,
      name,
      email,
      phone,
      carModel,
      serviceType,
      preferredDate: startDate.toISOString().slice(0, 10) 
    };

    fetch('http://localhost:8080/api/service-booking/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
      setSuccessMessage('Booking successful!');
      setErrorMessage('');
      // Reset form or handle further actions if needed
    })
    .catch((error) => {
      setErrorMessage('An error occurred. Please try again.');
      setSuccessMessage('');
    });
  };

  return (
    <div className="service-booking-container">
      <header className="service-booking-header">
        <h1>Car Service Booking</h1>
        <p>Book your car service with ease</p>
      </header>
      <main className="service-booking-main-content">
        <div className="service-booking-form">
          <h2>Book Your Service</h2>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="vehicle-number">Vehicle Number:</label>
            <input
              type="text"
              id="vehicle-number"
              name="vehicle-number"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
            />

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label htmlFor="car-model">Car Model:</label>
            <input
              type="text"
              id="car-model"
              name="car-model"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              required
            />

            <label htmlFor="service-type">Service Type:</label>
            <select
              id="service-type"
              name="service-type"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            >
              <option value="oil-change">Periodic Maintenance</option>
              <option value="tire-change">Multipoint Check</option>
              <option value="brake-repair">Seasonal Check-up</option>
              <option value="battery-check">Battery Check-Up</option>
              <option value="electronics-diagnosis">Electronics Diagnosis</option>
              <option value="engine-diagnosis">Engine Diagnosis</option>
              <option value="oil-filter-change">Oil and Filter Change</option>
              <option value="brake-repair">Brake Repair and Maintenance</option>
              <option value="safety-check">Safety Features Check</option>
              <option value="headlamp-check">Headlamp Check</option>
              <option value="tyre-services">Tyre Services (All)</option>
              <option value="ac-check">Air Conditioning Check</option>
              <option value="other">Send a mail to Book 2 or more Services.</option>
            </select>

            <label htmlFor="preferred-date">Preferred Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MMMM d, yyyy"
              className="service-date-picker"
              id="preferred-date"
              name="preferred-date"
              required
              showPopperArrow={false}
            />

            <button type="submit" className="service-btn-submit">Book Now</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ServiceBooking;
