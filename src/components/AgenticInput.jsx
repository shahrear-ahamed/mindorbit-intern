import React, { useState } from 'react';
import { FiSend, FiCommand } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import '../styles/DashboardPage.css';
import './AgenticInput.css';

const AgenticInput = ({ onQuerySubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onQuerySubmit(query); 
      setQuery(''); 
    }
  };

  return (
    <div className="agentic-input-wrapper">
      <form className="agentic-input-container" onSubmit={handleSubmit}>
        <div className="input-prefix">
          <HiSparkles className="sparkle-icon" />
        </div>
        
        <input 
          type="text" 
          placeholder="Ask MindOrbit AI anything..." 
          className="ai-input-field"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="input-suffix">
          <div className="kbd-shortcut">
            <FiCommand size={12} /> K
          </div>
          <button 
            type="submit" 
            className="send-btn" 
            disabled={!query.trim()}
            style={{ opacity: query.trim() ? 1 : 0.5 }}
          >
            <FiSend size={18} />
          </button>
        </div>
      </form>
      <p className="ai-disclaimer">
        AI can make mistakes. Before doing anything, review the answer.
      </p>
    </div>
  );
};

export default AgenticInput;