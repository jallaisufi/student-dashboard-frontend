import React from 'react';
import {useNavigate} from 'react-router-dom'

function MenuPage() {
  const navigate = useNavigate()
  return (
    <div className="app">
      <h1>Application Management</h1>
      <div className="button-container">
        <div style={{ width: '30%' }}>
        <button className="primary-button" onClick={() => navigate("/new-application")}>Send Application</button>
        <button className="primary-button" onClick={() => navigate("/applications")}>View Applications</button>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
