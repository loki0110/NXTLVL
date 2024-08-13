import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './booking-form.css';

const BookingForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Enter your name" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter your email" />
      </FormGroup>
      <FormGroup>
        <Label for="date">Date</Label>
        <Input type="date" name="date" id="date" />
      </FormGroup>
      <FormGroup>
        <Label for="time">Time</Label>
        <Input type="time" name="time" id="time" />
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  );
};

export default BookingForm;
