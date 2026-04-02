import React from 'react';
import { HiSparkles } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown'; // <-- Import the Markdown renderer
import '../styles/DashboardPage.css';

const ChatMessage = ({ role, content, timestamp }) => {
    const isAI = role === 'ai';

    return (
        <div className={`chat-message-wrapper ${isAI ? 'ai-message' : 'user-message'}`}>
            <div className="chat-avatar">
                {isAI ? (
                    <div className="ai-avatar-icon">
                        <HiSparkles />
                    </div>
                ) : (
                    <img src="https://i.pravatar.cc/150?u=alexrivera" alt="User" />
                )}
            </div>
            
            <div className="chat-content">
                <div className="chat-bubble">
                    {/* Render Markdown for AI, standard text for User */}
                    {isAI ? (
                        <div className="markdown-content">
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </div>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
                <span className="chat-timestamp">{timestamp}</span>
            </div>
        </div>
    );
};

export default ChatMessage;