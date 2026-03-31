import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiSettings, FiSliders, FiCommand, FiLogOut, FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { useOrbitTheme } from '../hooks/useOrbitTheme';
import '../styles/DashboardPage.css';
import './ProfileCard.css';

const ProfileCard = ({ close, onSettingsClick }) => {
    const { theme, setTheme } = useOrbitTheme(); 
    const navigate = useNavigate(); // <-- Initialize hook

    // Helper function to handle opening settings and closing the dropdown
    const handleOpenSettings = () => {
        onSettingsClick(); 
        close(); 
    };

    // Logout Function
    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated'); // Clear auth state
        navigate('/'); // Send user back to Login Page
    };

    return (
        <div className="profile-card-dropdown">
            <div className="profile-header">
                <div className="avatar-large-wrapper">
                    <img src="https://i.pravatar.cc/150?u=alexrivera" alt="Alex" className="avatar-large" />
                    <span className="status-indicator online" />
                </div>
                <div className="header-text">
                    <p className="full-name">Alex Rivera</p>
                    <p className="user-email">alex@mindorbit.io</p>
                </div>
            </div>

            <div className="menu-divider" />

            <nav className="dropdown-nav">
                <button className="dropdown-item"><FiUser /> Profile</button>
                <button className="dropdown-item" onClick={handleOpenSettings}>
                    <FiSettings /> Account Settings
                </button>
                <button className="dropdown-item" onClick={handleOpenSettings}>
                    <FiSliders /> Preferences
                </button>
            </nav>

            <div className="menu-divider" />

            <div className="appearance-section">
                <label>APPEARANCE</label>
                <div className="theme-switcher">
                    <button 
                        className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                        onClick={() => setTheme('light')}
                    >
                        <FiSun /> Light
                    </button>
                    <button 
                        className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                        onClick={() => setTheme('dark')}
                    >
                        <FiMoon /> Dark
                    </button>
                    <button 
                        className={`theme-btn ${theme === 'system' ? 'active' : ''}`}
                        onClick={() => setTheme('system')}
                    >
                        <FiMonitor /> System
                    </button>
                </div>
            </div>

            <div className="menu-divider" />

            <button className="dropdown-item">
                <FiCommand /> Keyboard Shortcuts <span className="kbd">⌘K</span>
            </button>

            {/* Attached handleLogout to the button */}
            <button className="dropdown-item logout-link" onClick={handleLogout}>
                <FiLogOut /> Logout
            </button>
        </div>
    );
};

export default ProfileCard;