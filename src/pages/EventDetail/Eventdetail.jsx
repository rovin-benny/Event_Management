import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"; // Import useNavigate
import "./EventDetail.css";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = () => {
      const mockEvent = {
        id: id,
        title: "Tech Conference 2023",
        date: "2023-11-15",
        location: "San Francisco, CA",
        description:
          "Join us for a day of insightful talks and networking with industry leaders.",
        price: 99,
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
        category: "Conference",
        organizer: "Tech Events Inc.",
        capacity: 500,
        remainingTickets: 124,
      };

      setTimeout(() => {
        setEvent(mockEvent);
        setLoading(false);
      }, 1000);
    };

    fetchEventDetails();
  }, [id]);

  if (loading) {
    return <div className="loading-spinner">Loading event details...</div>;
  }

  return (
    <div className="event-detail-page">
      {/* Hero Section */}
      <div className="event-hero" style={{ backgroundImage: `url(${event.image})` }}>
        <div className="hero-overlay">
          <div className="container">
            <h1>{event.title}</h1>
            <div className="event-meta">
              <span className="event-category">{event.category}</span>
              <span>📍 {event.location}</span>
              <span>📅 {new Date(event.date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container">
        <div className="event-content">
          <div className="event-main">
            <h2>About This Event</h2>
            <p>{event.description}</p>

            <div className="event-details">
              <h3>Event Details</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">9:00 AM - 6:00 PM</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{event.location}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Organizer</span>
                  <span className="detail-value">{event.organizer}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Capacity</span>
                  <span className="detail-value">{event.capacity} attendees</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Remaining Tickets</span>
                  <span className="detail-value">{event.remainingTickets}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="event-sidebar">
            <div className="ticket-box">
              <h3>Get Tickets</h3>
              <div className="ticket-price">
                <span className="price">${event.price}</span>
                <span className="price-label">per ticket</span>
              </div>
              <div className="ticket-actions">
                {/* Navigate to PurchaseTicket page */}
                <button
                  className="btn-primary"
                  onClick={() => navigate(`/purchase-ticket/${id}`)} // Navigate to PurchaseTicket
                >
                  Purchase Now
                </button>
                <Link to="/events" className="btn-secondary">
                  Browse Other Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;