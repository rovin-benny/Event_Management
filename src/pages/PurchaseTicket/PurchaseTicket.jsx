import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PurchaseTicket.css";

const PurchaseTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: 1,
    paymentMethod: "credit-card",
    billingAddress: "",
  });

  // State for remaining tickets
  const [remainingTickets, setRemainingTickets] = useState(124); // Example value

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle ticket purchase submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || formData.tickets <= 0) {
      alert("Please fill out all required fields.");
      return;
    }

    if (formData.tickets > remainingTickets) {
      alert("Not enough tickets available.");
      return;
    }

    // Simulate ticket purchase
    alert(`Thank you, ${formData.name}! Your ${formData.tickets} ticket(s) have been purchased.`);

    // Update remaining tickets
    setRemainingTickets((prev) => prev - formData.tickets);

    // Reset form
    setFormData({
      name: "",
      email: "",
      tickets: 1,
      paymentMethod: "credit-card",
      billingAddress: "",
    });

    // Navigate to thank you page or event list
    navigate("/thank-you");
  };

  return (
    <div className="purchase-ticket-page">
      <h1>Purchase Tickets</h1>
      <p>Event ID: {id}</p>

      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tickets">Number of Tickets</label>
          <input
            type="number"
            id="tickets"
            name="tickets"
            min="1"
            max={remainingTickets}
            value={formData.tickets}
            onChange={handleChange}
            required
          />
          <small>{remainingTickets} tickets remaining</small>
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="billingAddress">Billing Address</label>
          <textarea
            id="billingAddress"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-primary">
          Purchase Tickets
        </button>
      </form>
    </div>
  );
};

export default PurchaseTicket;