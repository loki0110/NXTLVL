import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import './payment-method.css';

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <h5>Payment Method</h5>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="payment" />{' '}
          Credit Card
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="payment" />{' '}
          PayPal
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="payment" />{' '}
          Bank Transfer
        </Label>
      </FormGroup>
    </div>
  );
};

export default PaymentMethod;
