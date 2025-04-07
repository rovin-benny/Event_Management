import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />
        <div className="event-overlay">
          <h3>{event.title}</h3>
          <p>${event.price}</p>
        </div>
      </div>
      <div className="event-details">
        <h3>{event.title}</h3>
        <div className="event-meta">
          <div className="meta-item">
            {event.metaDetails.map((detail, index) => (
              <div key={index}>
                <span>{detail.icon}</span>
                <span>{detail.text}</span>
              </div>
            ))}
          </div>
        </div>
        <Link to={`/events/${event.id}`} className="event-button">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;