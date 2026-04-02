import React from 'react';
import { FiX, FiCheck, FiZap } from 'react-icons/fi';
import '../styles/DashboardPage.css';
import './UpgradeModal.css';

const UpgradeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="upgrade-modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <FiX />
                </button>
                
                <div className="modal-hero">
                    <div className="hero-icon-orbit">
                        <FiZap size={32} />
                    </div>
                    <h2>Unlock Pro Capabilities</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                        Take your productivity into deep space with advanced AI signals.
                    </p>
                </div>

                <div className="feature-list">
                    <div className="feature-item">
                        <FiCheck className="check-icon" />
                        <span>Unlimited AI Agent Queries</span>
                    </div>
                    <div className="feature-item">
                        <FiCheck className="check-icon" />
                        <span>Real-time Team Collaboration</span>
                    </div>
                    <div className="feature-item">
                        <FiCheck className="check-icon" />
                        <span>Advanced Analytics & Reporting</span>
                    </div>
                </div>

                <button 
                    className="cta-upgrade-confirm" 
                    onClick={() => {
                        alert('Orbit Pro Checkout Initialized 🚀');
                        onClose();
                    }}
                >
                    Upgrade Now — $12/mo
                </button>
                <p className="cancel-anytime">Cancel or downgrade at any time.</p>
            </div>
        </div>
    );
};

export default UpgradeModal;