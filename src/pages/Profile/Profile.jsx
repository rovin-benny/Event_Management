import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Web Developer and Event Enthusiast",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, San Francisco, CA"
  });

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log("Profile updated:", user);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <h1>My Profile</h1>
          {!isEditing ? (
            <button 
              className="btn-edit"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          ) : (
            <button 
              className="btn-cancel"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          )}
        </div>

        <div className="profile-content">
          <div className="profile-sidebar">
            <div className="profile-avatar">
              <div className="avatar-placeholder">
                {user.name.split(' ').map(name => name[0]).join('')}
              </div>
              {isEditing && (
                <button className="btn-change-avatar">
                  Change Photo
                </button>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label>Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p className="profile-info">{user.name}</p>
              )}
            </div>

            <div className="form-group">
              <label>Email Address</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p className="profile-info">{user.email}</p>
              )}
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                />
              ) : (
                <p className="profile-info">{user.phone}</p>
              )}
            </div>

            <div className="form-group">
              <label>Address</label>
              {isEditing ? (
                <textarea
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                />
              ) : (
                <p className="profile-info">{user.address}</p>
              )}
            </div>

            <div className="form-group">
              <label>Bio</label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleChange}
                />
              ) : (
                <p className="profile-info">{user.bio}</p>
              )}
            </div>

            {isEditing && (
              <div className="form-actions">
                <button type="submit" className="btn-primary">
                  Save Changes
                </button>
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={() => navigate('/dashboard')}
                >
                  Back to Dashboard
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;