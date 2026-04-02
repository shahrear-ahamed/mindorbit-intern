import React, { useState } from 'react';
import { FiStar, FiArchive, FiTrash2, FiMoreVertical, FiClock } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import '../styles/DashboardPage.css';
import './InboxView.css';

const MOCK_MESSAGES = [
    {
        id: 1,
        sender: 'MindOrbit AI',
        subject: 'Weekly Signal Digest & Insights',
        preview: 'Here is your weekly summary of workspace activity...',
        time: '10:30 AM',
        isUnread: true,
        isAI: true,
        body: 'Hello Alex!\n\nHere is your weekly summary of workspace activity. Productivity was up 15% this week. The "Design System" space saw the most activity, with 12 new components added.\n\nAction Items:\n- Review 3 open pull requests.\n- Approve the Q4 roadmap draft.\n\nStay productive!'
    },
    {
        id: 2,
        sender: 'Sarah Jenkins',
        subject: 'Re: Q4 Roadmap Draft',
        preview: 'I just left some comments on the draft. Looks good overall!',
        time: 'Yesterday',
        isUnread: false,
        isAI: false,
        body: 'Hey Alex,\n\nI just left some comments on the draft. Looks good overall, but I think we need to push the Billing Modal update to Sprint 4 to give the backend team more time.\n\nLet me know what you think.\n\nBest,\nSarah'
    },
    {
        id: 3,
        sender: 'System Alert',
        subject: 'Database Backup Completed',
        preview: 'Your scheduled database backup finished successfully.',
        time: 'Oct 12',
        isUnread: false,
        isAI: false,
        body: 'Automated Alert:\n\nYour scheduled database backup (ID: #88921) finished successfully at 02:00 UTC. \n\nSize: 4.2GB\nStatus: Nominal.'
    }
];

const InboxView = () => {
    const [selectedMsgId, setSelectedMsgId] = useState(1);

    const activeMsg = MOCK_MESSAGES.find(m => m.id === selectedMsgId);

    return (
        <div className="inbox-view-container">
            {/* Left Sidebar: Message List */}
            <div className="inbox-list-pane">
                <div className="inbox-list-header">
                    <h3>Inbox</h3>
                    <span className="inbox-badge">1 Unread</span>
                </div>
                <div className="inbox-scroll-area">
                    {MOCK_MESSAGES.map(msg => (
                        <div 
                            key={msg.id} 
                            className={`inbox-item ${selectedMsgId === msg.id ? 'active' : ''} ${msg.isUnread ? 'unread' : ''}`}
                            onClick={() => setSelectedMsgId(msg.id)}
                        >
                            <div className="inbox-item-header">
                                <span className="sender-name">
                                    {msg.isAI && <HiSparkles className="ai-badge-icon" />}
                                    {msg.sender}
                                </span>
                                <span className="msg-time">{msg.time}</span>
                            </div>
                            <h4 className="msg-subject">{msg.subject}</h4>
                            <p className="msg-preview">{msg.preview}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Pane: Message Content */}
            <div className="inbox-content-pane">
                {activeMsg ? (
                    <>
                        <div className="msg-detail-header">
                            <div className="msg-detail-title-row">
                                <h2>{activeMsg.subject}</h2>
                                <div className="msg-actions">
                                    <button className="icon-btn-small" title="Star"><FiStar /></button>
                                    <button className="icon-btn-small" title="Archive"><FiArchive /></button>
                                    <button className="icon-btn-small" title="Delete"><FiTrash2 /></button>
                                    <button className="icon-btn-small"><FiMoreVertical /></button>
                                </div>
                            </div>
                            <div className="msg-sender-info">
                                <div className="sender-avatar">
                                    {activeMsg.isAI ? <HiSparkles /> : activeMsg.sender.charAt(0)}
                                </div>
                                <div className="sender-details">
                                    <p className="sender-name-large">{activeMsg.sender}</p>
                                    <p className="sender-email">to me • {activeMsg.time}</p>
                                </div>
                            </div>
                        </div>
                        <div className="msg-detail-body">
                            {/* Simple mapping for line breaks */}
                            {activeMsg.body.split('\n').map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="empty-inbox-state">
                        <FiClock size={48} />
                        <h3>No message selected</h3>
                        <p>Select a message from the list to read it here.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InboxView;