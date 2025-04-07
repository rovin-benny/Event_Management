import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import EventDetail from "./pages/EventDetail/EventDetail";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import PurchaseTicket from "./pages/PurchaseTicket/PurchaseTicket"; // Import PurchaseTicket
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Authenticated Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-event" element={<CreateEvent />} />

          {/* New Route for Ticket Purchase */}
          <Route path="/purchase-ticket/:id" element={<PurchaseTicket />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;