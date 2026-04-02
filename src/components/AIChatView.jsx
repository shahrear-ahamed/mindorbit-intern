import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import '../styles/DashboardPage.css';
import './AIChatView.css';

const AIChatView = ({ chatHistory, isTyping }) => {
    const chatEndRef = useRef(null);

    // Auto-scroll to the bottom when messages change
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory, isTyping]);

    return (
        <div className="ai-chat-view">
            <header className="chat-header">
                <h2>MindOrbit Assistant</h2>
                <p>Analyzing signals from your connected spaces...</p>
            </header>

            <div className="chat-history-container">
                {chatHistory.map(msg => (
                    <ChatMessage 
                        key={msg.id} 
                        role={msg.role} 
                        content={msg.content} 
                        timestamp={msg.timestamp} 
                    />
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                    <div className="chat-message-wrapper ai-message typing-indicator-wrapper">
                         <div className="chat-avatar">
                            <div className="ai-avatar-icon">✨</div>
                        </div>
                        <div className="chat-content">
                            <div className="chat-bubble typing-bubble">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Invisible div to scroll to */}
                <div ref={chatEndRef} className="chat-bottom-spacer"></div>
            </div>
        </div>
    );
};

export default AIChatView;