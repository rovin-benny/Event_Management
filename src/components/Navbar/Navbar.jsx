import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaTicketAlt, FaUserCircle, FaSearch, FaBell } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/events?search=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Eventify</span>
          <FaCalendarAlt className="logo-icon" />
        </Link>

        <div className="navbar-search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>

        <div className="navbar-links">
          <Link to="/events" className="nav-link">
            <FaCalendarAlt /> Events
          </Link>
          <Link to="/bookings" className="nav-link">
            <FaTicketAlt /> My Tickets
          </Link>

          {isLoggedIn ? (
            <div className="navbar-user">
              <FaBell className="notification-icon" />
              <div className="user-dropdown">
                <FaUserCircle className="user-icon" />
                <div className="dropdown-content">
                  <Link to="/profile">Profile</Link>
                  <Link to="/dashboard">Dashboard</Link>
                  <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="navbar-auth">
              <Link to="/signin" className="auth-link login">
                Login
              </Link>
              <Link to="/signup" className="auth-link signup">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;