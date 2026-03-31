import React from 'react';
import { FiZap } from 'react-icons/fi';
import '../styles/DashboardPage.css';

const UpgradeCard = () => {
  return (
    <div className="upgrade-card">
      <div className="upgrade-icon">
        <FiZap size={18} />
      </div>
      <div className="upgrade-content">
        <p className="upgrade-title">Upgrade to Pro</p>
        <p className="upgrade-desc">Get advanced AI signals</p>
      </div>
    </div>
  );
};

export default UpgradeCard;