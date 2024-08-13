import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './contactstyle.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while sending message');
    }
  };

  return (
    <div className="contact-background">
      <Container className="contact-container">
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row>
          <Col lg="6" className="contact-info mb-5">
            <h3>Get in Touch</h3>
            <address>
              <strong>Email:</strong> <a href="mailto:your-email@example.com">nxtlvlautomotives.com</a>
              <br />
              <br />
              <strong>Phone:</strong> +91 8428270008
            </address>
          </Col>
          <Col lg="6">
            <form className="contact-form" onSubmit={handleSubmit}>
              <Row>
                <Col lg="12" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="12" className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="12" className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </Col>
              </Row>
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn-submit" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
