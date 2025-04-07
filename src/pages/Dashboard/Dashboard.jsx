import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const revenueData = [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 2000 },
    { name: "Apr", revenue: 2780 },
    { name: "May", revenue: 1890 },
    { name: "Jun", revenue: 2390 },
    { name: "Jul", revenue: 3490 },
  ];

  const eventTypeData = [
    { name: "Music", value: 35 },
    { name: "Sports", value: 25 },
    { name: "Food", value: 20 },
    { name: "Conference", value: 15 },
    { name: "Arts", value: 5 },
  ];

  const COLORS = ["#6e8efb", "#a777e3", "#4fd1c5", "#f687b3", "#f6ad55"];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Event Dashboard</h1>
        <p className="dashboard-subtitle">Overview of your event management</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Events</h3>
          <p className="stat-value">128</p>
          <p className="stat-change positive">+12% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Registered Users</h3>
          <p className="stat-value">2,450</p>
          <p className="stat-change positive">+8% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-value">$24,580</p>
          <p className="stat-change positive">+15% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Ticket Sales</h3>
          <p className="stat-value">1,245</p>
          <p className="stat-change negative">-3% from last month</p>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Monthly Revenue</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="name" stroke="#6c757d" />
                <YAxis stroke="#6c757d" />
                <Tooltip 
                  contentStyle={{
                    background: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="revenue" 
                  fill="#6e8efb" 
                  name="Revenue ($)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="chart-card">
          <h3>Event Types Distribution</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={eventTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {eventTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    background: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="recent-events">
        <h3>Recent Events</h3>
        <table className="events-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Tickets Sold</th>
              <th>Revenue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tech Conference 2023</td>
              <td>2023-11-15</td>
              <td>San Francisco</td>
              <td>320</td>
              <td>$31,680</td>
              <td>
                <span className="status active">Active</span>
              </td>
            </tr>
            <tr>
              <td>Jazz Night</td>
              <td>2023-12-05</td>
              <td>New York</td>
              <td>180</td>
              <td>$8,100</td>
              <td>
                <span className="status upcoming">Upcoming</span>
              </td>
            </tr>
            <tr>
              <td>Food Festival</td>
              <td>2023-10-28</td>
              <td>Chicago</td>
              <td>450</td>
              <td>$11,250</td>
              <td>
                <span className="status completed">Completed</span>
              </td>
            </tr>
            <tr>
              <td>Art Exhibition</td>
              <td>2023-11-20</td>
              <td>Los Angeles</td>
              <td>120</td>
              <td>$1,800</td>
              <td>
                <span className="status active">Active</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;