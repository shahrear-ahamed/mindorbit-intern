import React, { useState, useMemo } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeader from '../components/DashboardHeader';
import DashboardHome from '../components/DashboardHome';
import AIChatView from '../components/AIChatView';
import RoadmapView from '../components/RoadmapView';
import InboxView from '../components/InboxView';
import TodayView from '../components/TodayView'; // <-- NEW: Imported TodayView
import AgenticInput from '../components/AgenticInput';
import UpgradeModal from '../components/UpgradeModal';
import SettingsModal from '../components/SettingsModal';
import { useOrbitTheme } from '../hooks/useOrbitTheme';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeView, setActiveView] = useState('Dashboard');
    
    // Modal States
    const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    // Chat State
    const [chatHistory, setChatHistory] = useState([
        {
            id: 1,
            role: 'ai',
            content: 'Hello Alex! I am synced with your workspace. What would you like to explore today?',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [isAITyping, setIsAITyping] = useState(false);

    useOrbitTheme();

    const greeting = useMemo(() => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning";
        if (hour < 18) return "Good afternoon";
        return "Good evening";
    }, []);

    const handleQuerySubmit = (query) => {
        setActiveView('Chat');
        const newUserMsg = {
            id: Date.now(),
            role: 'user',
            content: query,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatHistory(prev => [...prev, newUserMsg]);

        setIsAITyping(true);
        setTimeout(() => {
            const newAIMsg = {
                id: Date.now() + 1,
                role: 'ai',
                content: `I've analyzed your request regarding **"${query}"**.\n\nHere are the key insights from your connected spaces:\n* **Status:** All signals are nominal.\n* **Action Item:** Review the new API routes.\n\nHere is a quick snippet to get you started:\n\`\`\`javascript\nconsole.log('MindOrbit AI successfully integrated!');\n\`\`\`\nLet me know if you need anything else!`,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setChatHistory(prev => [...prev, newAIMsg]);
            setIsAITyping(false);
        }, 1500);
    };

    return (
        <div className={`dashboard-shell ${isCollapsed ? 'collapsed' : ''}`}>
            <DashboardSidebar
                isCollapsed={isCollapsed}
                toggleSidebar={() => setIsCollapsed(!isCollapsed)}
                activeView={activeView}
                setActiveView={setActiveView}
                onUpgradeClick={() => setIsUpgradeOpen(true)}
            />

            <main className="main-stage">
                <DashboardHeader
                    toggleSidebar={() => setIsCollapsed(!isCollapsed)}
                    currentView={activeView === 'Chat' ? 'MindOrbit AI' : activeView}
                    onSettingsClick={() => setIsSettingsOpen(true)} 
                />

                <section className="content-viewport">
                    {/* View Router Logic */}
                    {activeView === 'Dashboard' ? (
                        <DashboardHome greeting={greeting} userName="Alex" />
                    ) : activeView === 'Chat' ? (
                        <AIChatView chatHistory={chatHistory} isTyping={isAITyping} />
                    ) : activeView === 'Roadmap' ? (
                        <RoadmapView />
                    ) : activeView === 'Inbox' ? (
                        <InboxView />
                    ) : activeView === 'Today' ? ( // <-- NEW: Route for Today View
                        <TodayView />
                    ) : (
                        <div className="view-placeholder" style={{ textAlign: 'center', marginTop: '10vh' }}>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{activeView}</h1>
                            <p style={{ color: 'var(--text-muted)' }}>This module is currently in orbit. Stay tuned.</p>
                        </div>
                    )}
                </section>

                <AgenticInput onQuerySubmit={handleQuerySubmit} />
            </main>

            {/* Overlays */}
            <UpgradeModal 
                isOpen={isUpgradeOpen} 
                onClose={() => setIsUpgradeOpen(false)} 
            />
            <SettingsModal 
                isOpen={isSettingsOpen} 
                onClose={() => setIsSettingsOpen(false)} 
            />
        </div>
    );
};

export default DashboardPage;