
import "./Home.css";

function Home() {
  return (
  <section className="hero">
      <div className="overlay">
        <h1>Plan Your Dream Event with Us</h1>
        <p>Seamless planning for unforgettable moments</p>
        <button className="cta">Explore Events</button>
      </div>
    </section>
  );
}
import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col md={8} lg={6}>
          <Card className="shadow text-center p-4">
            <Card.Body>
              <Card.Title className="fw-bold fs-3">Welcome to Event Management</Card.Title>
              <Card.Text className="text-muted">
                Manage your events seamlessly and efficiently.
              </Card.Text>
              <Button variant="primary">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


export default Home;
