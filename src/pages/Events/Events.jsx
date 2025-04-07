import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Events.css";

const Events = () => {
  const location = useLocation();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: "",
    date: "",
    price: "",
    search: "",
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newFilters = {
      category: searchParams.get("category") || "",
      date: searchParams.get("date") || "",
      price: searchParams.get("price") || "",
      search: searchParams.get("search") || "",
    };
    setFilters(newFilters);
    fetchEvents(newFilters);
  }, [location.search]);

  const fetchEvents = (newFilters) => {
    setLoading(true);
    const mockEvents = [
      {
        id: 1,
        title: "Tech Conference 2023",
        date: "2023-11-15",
        time: "09:00 AM - 06:00 PM",
        location: "San Francisco, CA",
        price: 99,
        category: "Conference",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      },
      {
        id: 2,
        title: "Jazz Night Under the Stars",
        date: "2023-12-05",
        time: "07:00 PM - 11:00 PM",
        location: "New York, NY",
        price: 45,
        category: "Music",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop",
      },
      {
        id: 3,
        title: "Food Festival",
        date: "2023-11-25",
        time: "11:00 AM - 08:00 PM",
        location: "Chicago, IL",
        price: 25,
        category: "Food",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      },
      {
        id: 4,
        title: "Marathon Run",
        date: "2023-12-10",
        time: "06:00 AM - 02:00 PM",
        location: "Boston, MA",
        price: 75,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=800&h=600&fit=crop",
      },
    ];

    let filteredEvents = [...mockEvents];
    if (newFilters.category) {
      filteredEvents = filteredEvents.filter(
        (event) => event.category === newFilters.category
      );
    }
    if (newFilters.search) {
      filteredEvents = filteredEvents.filter((event) =>
        event.title.toLowerCase().includes(newFilters.search.toLowerCase())
      );
    }
    if (newFilters.date) {
      filteredEvents = filteredEvents.filter(
        (event) => event.date === newFilters.date
      );
    }
    if (newFilters.price) {
      filteredEvents = filteredEvents.filter(
        (event) => event.price <= parseInt(newFilters.price)
      );
    }
    setEvents(filteredEvents);
    setLoading(false);
  };

  const handleApplyFilters = () => {
    const queryParams = new URLSearchParams(filters);
    window.history.pushState({}, '', `${location.pathname}?${queryParams}`);
    fetchEvents(filters);
  };

  return (
    <div className="events-page">
      <div className="events-header">
        <h1>Upcoming Events</h1>
        <p>Find events that match your interests</p>
      </div>
      <div className="events-container">
        <div className="events-sidebar">
          <h3>Filters</h3>
          <div className="filter-group">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search events..."
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
          </div>
          <div className="filter-group">
            <label>Category</label>
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
            >
              <option value="">All Categories</option>
              <option value="Music">Music</option>
              <option value="Sports">Sports</option>
              <option value="Food">Food</option>
              <option value="Arts">Arts</option>
              <option value="Conference">Conference</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Date</label>
            <input
              type="date"
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            />
          </div>
          <div className="filter-group">
            <label>Max Price ($)</label>
            <input
              type="range"
              min="0"
              max="200"
              value={filters.price || 200}
              onChange={(e) =>
                setFilters({ ...filters, price: e.target.value })
              }
            />
            <span>${filters.price || 200}</span>
          </div>
          <button className="apply-filters" onClick={handleApplyFilters}>
            Apply Filters
          </button>
          <Link
            to="/events"
            className="clear-filters"
            onClick={() =>
              setFilters({ category: "", date: "", price: "", search: "" })
            }
          >
            Clear All Filters
          </Link>
        </div>
        <div className="events-list">
          {loading ? (
            <div className="loading-spinner">Loading events...</div>
          ) : events.length > 0 ? (
            <div className="events-grid">
              {events.map((event) => (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className="event-card"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-image"
                  />
                  <div className="event-overlay">
                    <h3>{event.title}</h3>
                    <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                    <p>⏰ {event.time}</p>
                    <p>📍 {event.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-events">
              <h3>No events found matching your criteria</h3>
              <p>Try adjusting your filters or search term</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;