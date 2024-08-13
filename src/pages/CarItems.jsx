import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "../pages/car-items.module.css";
import Navbar from '../pages/Navbar';
// import BookingForm from "../pages/BookingForm";
// import PaymentMethod from "../pages/PaymentMethod";

const CarItems = (props) => {
  const { imgUrl, model, carName, automatic, speed, price, rating, description, gps, seatType, brand } = props.item;

  useEffect(() => {
    document.body.classList.add(styles.carItemsBackground);
    return () => {
      document.body.classList.remove(styles.carItemsBackground);
    };
  }, []);

  return (
    <section className={styles.carItemsSection}>
        <Navbar/><br/><br/><br/><br/><br/>
      <Container>
        <Row>
          <Col lg="6">
            <img src={imgUrl} alt="" className="w-100" />
          </Col>
          <Col lg="6">
            <div className={styles.carInfo}>
              <h2 className={styles.sectionTitle}>{carName}</h2>
              <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                <h6 className={`${styles.rentPrice} fw-bold fs-4`}>Rs.{price}.00 / Day</h6>
                <span className="d-flex align-items-center gap-2">
                  <span style={{ color: "#f9a826" }}>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                  </span>
                  ({rating} ratings)
                </span>
              </div>
              <p className={styles.sectionDescription}>{description}</p>
              <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                <span className={`d-flex align-items-center gap-1 ${styles.sectionDescription}`}>
                  <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i> {model}
                </span>
                <span className={`d-flex align-items-center gap-1 ${styles.sectionDescription}`}>
                  <i className="ri-settings-2-line" style={{ color: "#f9a826" }}></i> {automatic}
                </span>
                <span className={`d-flex align-items-center gap-1 ${styles.sectionDescription}`}>
                  <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i> {speed}
                </span>
              </div>
              <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                <span className={`d-flex align-items-center gap-1 ${styles.sectionDescription}`}>
                  <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i> {gps}
                </span>
                <span className={`d-flex align-items-center gap-1 ${styles.sectionDescription}`}>
                  <i className="ri-wheelchair-line" style={{ color: "#f9a826" }}></i> {seatType}
                </span>
                <span className={`d-flex align-items-center gap-1 ${styles.sectionDescription}`}>
                  <i className="ri-building-2-line" style={{ color: "#f9a826" }}></i> {brand}
                </span>
              </div>
            </div>
          </Col>
          <Col lg="7" className="mt-5">
            {/* <div className={`${styles.bookingInfo} mt-5`}>
              <h5 className="mb-4 fw-bold">Booking Information</h5>
              <BookingForm />
            </div> */}
            {/* <PaymentMethod /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarItems;
