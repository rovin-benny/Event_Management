import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEvent.css';

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    price: '',
    image: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event created:', eventData);
    // Here you would typically send the data to your backend
    navigate('/dashboard');
  };

  return (
    <div className="create-event-page">
      <div className="create-event-container">
        <h2>Create New Event</h2>
        <form onSubmit={handleSubmit} className="event-form">
          <div className="form-group">
            <label>Event Name</label>
            <input 
              type="text" 
              name="title"
              placeholder="Enter event name" 
              value={eventData.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea 
              name="description"
              placeholder="Enter event description"
              value={eventData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input 
                type="date" 
                name="date"
                value={eventData.date}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Time</label>
              <input 
                type="time" 
                name="time"
                value={eventData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Location</label>
              <input 
                type="text" 
                name="location"
                placeholder="Enter location" 
                value={eventData.location}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Category</label>
              <select 
                name="category"
                value={eventData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="Music">Music</option>
                <option value="Sports">Sports</option>
                <option value="Food">Food</option>
                <option value="Arts">Arts</option>
                <option value="Conference">Conference</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Price ($)</label>
              <input 
                type="number" 
                name="price"
                placeholder="Enter ticket price" 
                value={eventData.price}
                onChange={handleChange}
                min="0"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Event Image URL</label>
              <input 
                type="url" 
                name="image"
                placeholder="Enter image URL" 
                value={eventData.image}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn-primary">Create Event</button>
            <button type="button" className="btn-secondary" onClick={() => navigate('/dashboard')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;