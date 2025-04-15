import React from 'react';
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function UserAccountPage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate(); // Use the useNavigate hook

  if (!user) {
    return <Navigate to={'/login'} replace />;
  }

  const handleLogout = () => {
    // Logic to logout (e.g., clear user session)
    navigate('/login'); // Redirect to logout page
  };

  const handleChangePassword = () => {
    navigate('/forgotpassword'); // Redirect to forgot password page
  };

  return (
    <div className="user-account-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f8f9fa', margin: 0, padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#212529', marginBottom: '10px' }}>Welcome, {user.name}!</h1>
      <div className="user-options" style={{ gap: '10px', display: 'flex', flexDirection: 'column' }}>
        <button style={{ padding: '10px 20px', fontSize: '1rem', margin: '5px', cursor: 'pointer', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px' }} onClick={handleChangePassword}>Change Password</button>
        <button style={{ padding: '10px 20px', fontSize: '1rem', margin: '5px', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}