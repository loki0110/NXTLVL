import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Navbar from '../pages/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset errors
    setErrors({});

    // Validation
    const newErrors = {};
    if (!email) newErrors.email = 'Email address is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle successful validation (e.g., make API call)
    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        email,
        password,
      });
      console.log('Login successful', response.data);

      // Check for specific email and password
      const specificEmail = 'areyouprobro90@gmail.com';
      const specificPassword = 'Lokesh0122';

      if (email === specificEmail && password === specificPassword) {
        navigate('/Panel');
      } else {
        navigate('/services');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setErrors({ api: 'Invalid email or password' });
    }
  };

  return (
    <div className="login-wrapper">
      <Navbar />     
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input 
              type="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <label>Email address</label>
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="user-box">
            <input 
              type="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <label>Password</label>
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          {errors.api && <p className="error-text">{errors.api}</p>}
          <button type="submit" className="submit-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            LOG IN
          </button>
        </form>
        <div className="additional-links">
          {/* <Link to="/forgot" className="futuristic-button forgot-password">Forgot Password?</Link> */}
          <Link to="/Signup" className="futuristic-button sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
