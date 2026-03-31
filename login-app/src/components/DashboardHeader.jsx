import React, { useState } from 'react';
import { FiBell, FiChevronDown, FiChevronRight, FiUsers } from 'react-icons/fi';
import ProfileCard from './ProfileCard';
import '../styles/DashboardPage.css';

const DashboardHeader = ({ toggleSidebar, currentView, onSettingsClick }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className="dashboard-header">
            <div className="header-left">
                <div className="breadcrumbs">
                    <button className="breadcrumb-team">
                        <div className="team-icon"><FiUsers size={14} /></div>
                        <span>Global Team</span>
                        <FiChevronDown size={16} color="var(--text-muted)" />
                    </button>
                    <span className="breadcrumb-divider"></span>
                    <span className="breadcrumb-item">Dashboard</span>
                    <FiChevronRight size={14} color="var(--text-muted)" />
                    <span className="breadcrumb-item active">Overview</span>
                </div>
            </div>
            
            <div className="header-right">
                <button className="icon-btn notification-btn">
                    <FiBell size={20} />
                    <span className="notification-badge-red"></span>
                </button>
                
                <div className="profile-wrapper">
                    <button 
                        className="profile-trigger"
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                        <img 
                            src="https://i.pravatar.cc/150?u=alexrivera" 
                            alt="Profile" 
                            className="profile-avatar"
                        />
                        <span className="profile-name">Alex Reed</span>
                        <FiChevronDown size={16} />
                    </button>
                    {isProfileOpen && (
                        <ProfileCard 
                            close={() => setIsProfileOpen(false)} 
                            onSettingsClick={onSettingsClick}
                        />
                    )}
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;