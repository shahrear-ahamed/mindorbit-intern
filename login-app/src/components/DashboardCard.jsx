import React from 'react';
import '../styles/DashboardPage.css';

const DashboardCard = ({ title, status, icon, accent }) => {
  return (
    <div className="dashboard-card">
      <div 
        className="card-icon-wrapper" 
        style={{ backgroundColor: `${accent}15`, color: accent }}
      >
        {icon}
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <span 
          className="card-status" 
          style={{ borderColor: `${accent}40`, color: accent }}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default DashboardCard;