import React from 'react';
import { Row, Col } from 'reactstrap';
import ProductCard from './ProductCard';
import styles from './ProductOverview.module.css';

const ProductOverview = ({ products }) => {
  return (
    <Row className={styles.productOverview}>
      {products.map(product => (
        <Col sm="6" md="4" lg="3" key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductOverview;
