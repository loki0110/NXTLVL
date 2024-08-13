import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Payment.module.css';
import axios from 'axios';

const Payment = () => {
  const [address, setAddress] = useState({
    customerName: '',
    street: '',
    city: '',
    state: '',
    postalCode: ''
  });
  const [product, setProduct] = useState({
    productName: '',
    price: '',
    discount: '',
    qty: '',
    productNumber: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (Object.keys(product).includes(name)) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value
      }));
    } else {
      setAddress((prevAddress) => ({
        ...prevAddress,
        [name]: value
      }));
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const validateForm = () => {
    const fieldsToCheck = {
      ...address,
      ...product,
      paymentMethod,
    };

    for (const field in fieldsToCheck) {
      if (!fieldsToCheck[field]) {
        setError(`Please fill in the ${field} field.`);
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const paymentData = {
      ...address,
      ...product,
      paymentMethod
    };

    try {
      const response = await axios.post('http://localhost:8080/api/payments/create', paymentData);
      console.log('Payment created:', response.data);
      navigate('/final');
    } catch (error) {
      console.error('Error creating payment:', error);
      // Handle error
    }
  };

  return (
    <div className={styles.pageBackground}>
      <div className={styles.formContainer}>
        <header className={styles.header}>
          <h1>Checkout</h1>
        </header>

        {error && <div className={styles.error}>{error}</div>}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <h2 className={styles.addressHeading}>Product Details</h2>
            <div className={styles.card}>
              {['productName', 'price', 'discount', 'qty', 'productNumber'].map((field) => (
                <div className={styles.inputBox} key={field}>
                  <label className={styles.label} htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={product[field]}
                    onChange={handleChange}
                    placeholder={`Your ${field}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className={styles.addressHeading}>Customer Details</h2>
            <div className={styles.card}>
              {['customerName', 'street', 'city', 'state', 'postalCode'].map((field) => (
                <div className={styles.inputBox} key={field}>
                  <label className={styles.label} htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={address[field]}
                    onChange={handleChange}
                    placeholder={`Your ${field}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <fieldset>
            <legend>Payment Method</legend>
            <div className={styles.formRadios}>
              {['visa', 'paypal', 'mastercard'].map((method) => (
                <div className={styles.formRadio} key={method}>
                  <label htmlFor={method}>
                    <svg className={styles.icon}>
                      <use xlinkHref={`#icon-${method}`} />
                    </svg>
                    {method.charAt(0).toUpperCase() + method.slice(1)} Payment
                  </label>
                  <input
                    id={method}
                    name="payment-method"
                    type="radio"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={handlePaymentMethodChange}
                  />
                </div>
              ))}
            </div>
          </fieldset>

          <div>
            <button type="submit" className={`${styles.button} ${styles.buttonFull}`}>
              <svg className={styles.icon}>
                <use xlinkHref="#icon-shopping-bag" />
              </svg>
              Buy Now
            </button>
          </div>
        </form>

        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <symbol id="icon-shopping-bag" viewBox="0 0 24 24">
            <path d="M6 2l-.01 3H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.89 2 1.99 2h16.02c1.1 0 1.99-.9 1.99-2V7c0-1.1-.89-2-1.99-2h-1.99L18 2H6zm4 2h4v3h-4V4zm6 3V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4v13h16V7h-4z" />
          </symbol>
          <symbol id="icon-visa" viewBox="0 0 24 24">
            <path d="M2 4h20v16H2z" fill="#f5f5f5" />
            <path d="M5 8h2l1 8H6z" fill="#1a1f71" />
            <path d="M8 8h3v1h-1l-1 4v1h2v1H8zm5 0h2l1 5h1l2-5h2l-3 8h-3z" fill="#f79e1b" />
          </symbol>
          <symbol id="icon-paypal" viewBox="0 0 24 24">
            <path d="M6 2l-.01 3H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.89 2 1.99 2h16.02c1.1 0 1.99-.9 1.99-2V7c0-1.1-.89-2-1.99-2h-1.99L18 2H6zm4 2h4v3h-4V4zm6 3V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4v13h16V7h-4z" />
          </symbol>
          <symbol id="icon-mastercard" viewBox="0 0 24 24">
            <circle cx="8" cy="12" r="6" fill="#eb001b" />
            <circle cx="16" cy="12" r="6" fill="#f79e1b" />
          </symbol>
        </svg>
      </div>
    </div>
  );
};

export default Payment;
