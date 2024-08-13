import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { name, price, stock, category } = product;

  return (
    <Card className={styles.productCard}>
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>Price: ${price}</CardText>
        <CardText>Stock: {stock}</CardText>
        <CardText>Category: {category}</CardText>
        <Button color="primary" className={styles.actionButton}>View</Button>
        <Button color="warning" className={styles.actionButton}>Modify</Button>
        <Button color="danger" className={styles.actionButton}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
