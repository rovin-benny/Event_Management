import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import "./Home.css";

const Home = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "Tech Conference 2023",
      date: "2023-11-15",
      time: "09:00 AM - 06:00 PM",
      location: "Moscone Center, San Francisco, CA",
      price: 299,
      category: "Conference",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      organizer: "Tech Events Inc.",
      description:
        "Join us for the biggest tech conference of the year featuring keynote speakers from top Silicon Valley companies. Learn about the latest trends in AI, blockchain, and cloud computing.",
      highlights: [
        "Keynote by Google's CTO",
        "Workshops on machine learning",
        "Networking with industry leaders",
        "Startup pitch competition",
      ],
      capacity: 1000,
      remainingTickets: 247,
      tags: ["Technology", "Networking", "Workshops"],
    },
    {
      id: 2,
      title: "Jazz Night Under the Stars",
      date: "2023-12-05",
      time: "07:00 PM - 11:00 PM",
      location: "Central Park, New York, NY",
      price: 85,
      category: "Music",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
      organizer: "NYC Music Society",
      description:
        "An unforgettable evening of smooth jazz under the stars featuring Grammy-winning artists. Bring your blankets and enjoy the music with NYC's skyline as your backdrop.",
      highlights: [
        "Performance by Wynton Marsalis",
        "Food trucks with gourmet options",
        "VIP lounge with premium seating",
        "Open bar available",
      ],
      capacity: 500,
      remainingTickets: 89,
      tags: ["Live Music", "Outdoor", "Night Event"],
    },
    {
      id: 3,
      title: "International Food Festival",
      date: "2023-11-25",
      time: "11:00 AM - 08:00 PM",
      location: "Grant Park, Chicago, IL",
      price: 35,
      category: "Food",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      organizer: "Global Cuisine Association",
      description:
        "Experience flavors from around the world at Chicago's premier food festival. Over 50 vendors offering authentic dishes from every continent.",
      highlights: [
        "Cooking demonstrations by celebrity chefs",
        "Wine and beer tasting",
        "Kids cooking workshops",
        "Cultural performances",
      ],
      capacity: 2000,
      remainingTickets: 432,
      tags: ["Gourmet", "Family-Friendly", "Cultural"],
    },
    {
      id: 4,
      title: "Marathon Challenge",
      date: "2023-12-10",
      time: "06:00 AM - 02:00 PM",
      location: "Boston Commons, Boston, MA",
      price: 120,
      category: "Sports",
      image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781",
      organizer: "Boston Athletic Association",
      description:
        "Test your endurance in this annual marathon through Boston's historic streets. Certified course with professional timing and medical support.",
      highlights: [
        "Qualifier for Boston Marathon",
        "Post-race celebration",
        "Professional photography",
        "Finisher medals for all",
      ],
      capacity: 5000,
      remainingTickets: 1245,
      tags: ["Running", "Fitness", "Competition"],
    },
  ];

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      title: "Discover Amazing Events",
      description: "Find and book tickets for the best events in your city",
    },
    {
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      title: "Create Unforgettable Experiences",
      description: "From concerts to workshops, we have something for everyone",
    },
    {
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
      title: "Connect With Your Community",
      description: "Meet new people who share your interests",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const eventCategories = [
    { name: "Music", icon: "🎵", count: 128 },
    { name: "Sports", icon: "⚽", count: 76 },
    { name: "Food & Drink", icon: "🍔", count: 94 },
    { name: "Arts & Theater", icon: "🎭", count: 53 },
    { name: "Conference", icon: "💼", count: 42 },
    { name: "Community", icon: "👥", count: 67 },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Event Organizer",
      text:
        "This platform has transformed how we manage our events. Ticket sales have increased by 40% since we started using Eventify!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Music Festival Attendee",
      text:
        "Found the perfect jazz festival through Eventify. The booking process was seamless and the event was even better than expected!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Food Blogger",
      text:
        "As someone who attends multiple food events monthly, Eventify has become my go-to platform for discovering new experiences.",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Events Created" },
    { value: "500K+", label: "Happy Attendees" },
    { value: "200+", label: "Cities Worldwide" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <div className="hero-buttons">
                <Link to="/events" className="hero-btn hero-btn-primary">
                  <span className="btn-shine"></span>
                  Explore Events
                </Link>
                <Link to="/create-event" className="hero-btn hero-btn-secondary">
                  <span className="btn-shine"></span>
                  Create Event
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Events */}
      <section className="featured-events">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Events</h2>
            <p className="section-subtitle">Discover the hottest events happening near you</p>
          </div>
          <div className="events-grid">
            {featuredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={{
                  ...event,
                  metaDetails: [
                    { icon: "⏰", text: event.time },
                    { icon: "📍", text: event.location },
                    {
                      icon: "🎟️",
                      text: `${event.remainingTickets} tickets left`,
                    },
                  ],
                }}
              />
            ))}
          </div>
          <div className="view-all">
            <Link to="/events" className="hero-btn hero-btn-primary">
              <span className="btn-shine"></span>
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="event-categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Browse By Category</h2>
            <p className="section-subtitle">Find events that match your interests</p>
          </div>
          <div className="categories-grid">
            {eventCategories.map((category) => (
              <div key={category.name} className="category-card">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
                <p>{category.count} events</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What People Say</h2>
            <p className="section-subtitle">Hear from our community</p>
          </div>
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial ${index === activeTestimonial ? "active" : ""}`}
                onMouseEnter={() => setActiveTestimonial(index)}
              >
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="avatar"
                    />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p className="role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeTestimonial ? "active" : ""}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Create Your Own Event?</h2>
          <p>Join thousands of organizers who trust Eventify for their events</p>
          <div className="cta-buttons">
            <Link to="/create-event" className="hero-btn hero-btn-primary">
              <span className="btn-shine"></span>
              Get Started
            </Link>
            <Link to="/contact" className="hero-btn hero-btn-secondary">
              <span className="btn-shine"></span>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;