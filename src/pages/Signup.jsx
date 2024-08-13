import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'; // Ensure this file exists and has styles
import NavbarSignup from '../pages/NavbarSignup';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required.";
    if (!formData.lastName) formErrors.lastName = "Last name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "A valid email address is required.";
    if (!formData.password) formErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = "Passwords do not match.";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8080/users/register', {
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          password: formData.password
        });
        console.log(response.data);
        navigate('/services'); // Redirect after successful signup
      } catch (error) {
        console.error('There was an error!', error);
        if (error.response && error.response.data) {
          setErrors({ ...errors, serverError: error.response.data });
        }
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <div className="signup-wrapper">
        <NavbarSignup />
        <div className="Signup-box">
          <h2>SIGNUP</h2>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label>First Name</label>
              {errors.firstName && <div className="error-text">{errors.firstName}</div>}
            </div>
            <div className="user-box">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label>Last Name</label>
              {errors.lastName && <div className="error-text">{errors.lastName}</div>}
            </div>
            <div className="user-box">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Email Address</label>
              {errors.email && <div className="error-text">{errors.email}</div>}
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label>Create a password</label>
              {errors.password && <div className="error-text">{errors.password}</div>}
            </div>
            <div className="user-box">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <label>Confirm your password</label>
              {errors.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}
            </div>
            {errors.serverError && <div className="error-text">{errors.serverError}</div>}
            <button type="submit" className="submit-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
