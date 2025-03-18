import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaClipboardList, FaUser } from "react-icons/fa";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid className="nav-container">

        {/* Left - Title Instead of Logo */}
        <Navbar.Brand as={Link} to="/" className="nav-title">
          Event Management
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Center - Navigation Links + Profile Dropdown */}
        <Navbar.Collapse id="navbarNav" className="justify-content-center">
          <Nav className="mx-auto">  
            <Nav.Link as={Link} to="/" className="nav-item">
              <FaHome className="icon" /> Home
            </Nav.Link>

            <NavDropdown title={<><FaCalendarAlt className="icon" /> Events</>} id="events-dropdown">
              <NavDropdown.Item as={Link} to="/events">All Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/upcoming-events">Upcoming Events</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/bookings" className="nav-item">
              <FaClipboardList className="icon" /> Bookings
            </Nav.Link>

            {/* Profile Dropdown (Centered) */}
            <NavDropdown title={<><FaUser className="icon" /> Profile</>} id="profile-dropdown" className="profile-dropdown">
              <NavDropdown.Item as={Link} to="/profile">View Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ml-auto">
          <Nav.Link as={Link} to="/signup" className="btn btn-primary">Login/Sign Up</Nav.Link>
</Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
