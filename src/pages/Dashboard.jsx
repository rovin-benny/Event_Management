import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center">Dashboard</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Total Events</Card.Title>
              <Card.Text>25 Upcoming Events</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Registered Users</Card.Title>
              <Card.Text>100+ Active Users</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Revenue</Card.Title>
              <Card.Text>$10,000 This Month</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
