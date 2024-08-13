import React, { useState } from 'react';
import axios from 'axios';
import styles from './RentalForm.module.css';

const RentalForm = () => {
  const [formData, setFormData] = useState({
    pickUpLocation: '',
    dropOffLocation: '',
    carType: '',
    pickUpDate: '',
    pickUpTime: '',
    dropOffDate: '',
    dropOffTime: '',
    rentalDuration: '',
    driverAge: '',
    insurance: '',
    message: '',
    fullName: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/rental/create', formData);
      console.log('Form submitted:', response.data);
      // Optionally, clear form or show success message
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, show error message
    }
  };

  const handleReset = () => {
    setFormData({
      pickUpLocation: '',
      dropOffLocation: '',
      carType: '',
      pickUpDate: '',
      pickUpTime: '',
      dropOffDate: '',
      dropOffTime: '',
      rentalDuration: '',
      driverAge: '',
      insurance: '',
      message: '',
      fullName: '',
      phone: '',
      email: ''
    });
  };

  return (
    <div className={styles.bookingForm}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.subHeading}>Car Rental Details</h2>
        <div className={styles.mainFlex}>
          <div className={`${styles.field} ${styles.text1}`}>
            <input
              type="text"
              name="pickUpLocation"
              placeholder="Pick-Up Location"
              value={formData.pickUpLocation}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={`${styles.field} ${styles.text2}`}>
            <input
              type="text"
              name="dropOffLocation"
              placeholder="Drop-Off Location"
              value={formData.dropOffLocation}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        <div className={styles.mainFlex}>
          <div className={`${styles.field} ${styles.text1}`}>
            <select name="carType" value={formData.carType} onChange={handleChange} className={styles.formControl} required>
              <option value="">Select Car</option>
              <option value="Toyota Camry">Toyota Camry</option>
              <option value="BMW 520 d">BMW 520 d</option>
              <option value="Nissan Magnite">Nissan Magnite</option>
              <option value="Honda City">Honda City</option>
              <option value="Mercedes Benz C Class">Mercedes Benz C-Class</option>
              <option value="Ford Endeavour">Ford Endeavour</option>
              <option value="Tata Harrier">Tata Harrier</option>
              <option value="Maruti Dzire">Maruti Dzire</option>
              <option value="Innova Hycross">Innova Hycross</option>
            </select>
          </div>
          <div className={`${styles.field} ${styles.text2}`}>
            <input
              type="text"
              name="rentalDuration"
              placeholder="Rental Duration (in days)"
              value={formData.rentalDuration}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        <div className={styles.mainFlex}>
          <div className={`${styles.field} ${styles.text1}`}>
            <input
              type="text"
              name="pickUpDate"
              placeholder="Pick-Up Date"
              value={formData.pickUpDate}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={`${styles.field} ${styles.text2}`}>
            <input
              type="text"
              name="pickUpTime"
              placeholder="Pick-Up Time"
              value={formData.pickUpTime}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        <div className={styles.mainFlex}>
          <div className={`${styles.field} ${styles.text1}`}>
            <input
              type="text"
              name="dropOffDate"
              placeholder="Drop-Off Date"
              value={formData.dropOffDate}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={`${styles.field} ${styles.text2}`}>
            <input
              type="text"
              name="dropOffTime"
              placeholder="Drop-Off Time"
              value={formData.dropOffTime}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        <div className={styles.mainFlex}>
          <div className={`${styles.field} ${styles.text1}`}>
            <input
              type="text"
              name="driverAge"
              placeholder="Customer Age"
              value={formData.driverAge}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={`${styles.field} ${styles.text2}`}>
            <select name="insurance" value={formData.insurance} onChange={handleChange} className={styles.formControl} required>
              <option value="">Insurance</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className={`${styles.field} ${styles.text}`}>
          <textarea
            name="message"
            placeholder="Additional Notes..."
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
          />
        </div>

        <h3 className={styles.subHeading}>Personal Details</h3>
        <div className={styles.mainFlex}>
          <div className={`${styles.field} ${styles.text1}`}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={`${styles.field} ${styles.text2}`}>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>
        <div className={`${styles.field} ${styles.text} ${styles.emailField}`}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.clear}></div>
        <input type="submit" value="Reserve Now" className={styles.submitButton} />
        <input type="reset" value="Clear Form" className={styles.resetButton} onClick={handleReset} />
        <div className={styles.clear}></div>
      </form>
    </div>
  );
};

export default RentalForm;
