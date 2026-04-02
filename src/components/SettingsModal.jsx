import React, { useState } from 'react';
import { FiX, FiUser, FiBell, FiShield, FiMonitor } from 'react-icons/fi';
import { useUser } from '../hooks/useUser';
import '../styles/DashboardPage.css';
import './SettingsModal.css';

const SettingsModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('Account');
    const { name, email } = useUser();

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="settings-modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}><FiX /></button>
                
                <div className="settings-layout">
                    {/* Settings Sidebar */}
                    <aside className="settings-sidebar">
                        <h3>Settings</h3>
                        <nav className="settings-nav">
                            <button className={activeTab === 'Account' ? 'active' : ''} onClick={() => setActiveTab('Account')}>
                                <FiUser /> Account
                            </button>
                            <button className={activeTab === 'Appearance' ? 'active' : ''} onClick={() => setActiveTab('Appearance')}>
                                <FiMonitor /> Appearance
                            </button>
                            <button className={activeTab === 'Notifications' ? 'active' : ''} onClick={() => setActiveTab('Notifications')}>
                                <FiBell /> Notifications
                            </button>
                            <button className={activeTab === 'Security' ? 'active' : ''} onClick={() => setActiveTab('Security')}>
                                <FiShield /> Security
                            </button>
                        </nav>
                    </aside>

                    {/* Settings Content Area */}
                    <main className="settings-body">
                        {activeTab === 'Account' && (
                            <div className="settings-section fadeIn">
                                <h2>Account Profile</h2>
                                <p className="settings-desc">Update your personal information and email.</p>
                                
                                <div className="settings-form-group">
                                    <label>Full Name</label>
                                    <input type="text" defaultValue={name} className="settings-input" />
                                </div>
                                <div className="settings-form-group">
                                    <label>Email Address</label>
                                    <input type="email" defaultValue={email} className="settings-input" />
                                </div>
                                <button className="settings-save-btn">Save Changes</button>
                            </div>
                        )}

                        {activeTab === 'Appearance' && (
                            <div className="settings-section fadeIn">
                                <h2>Appearance</h2>
                                <p className="settings-desc">Customize how MindOrbit looks on your device.</p>
                                <div className="settings-form-group">
                                    <p>Theme preference is currently managed via your Profile Dropdown menu.</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Notifications' && (
                            <div className="settings-section fadeIn">
                                <h2>Notifications</h2>
                                <p className="settings-desc">Choose what alerts you want to receive.</p>
                                <div className="settings-toggle-group">
                                    <label>AI Signal Alerts</label>
                                    <input type="checkbox" defaultChecked />
                                </div>
                                <div className="settings-toggle-group">
                                    <label>Weekly Digest</label>
                                    <input type="checkbox" defaultChecked />
                                </div>
                            </div>
                        )}

                        {activeTab === 'Security' && (
                            <div className="settings-section fadeIn">
                                <h2>Security</h2>
                                <p className="settings-desc">Manage your password and 2FA settings.</p>
                                <button className="settings-outline-btn">Change Password</button>
                                <button className="settings-outline-btn">Enable Two-Factor Auth</button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;