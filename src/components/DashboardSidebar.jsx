import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiGrid, FiMessageSquare, FiZap,
  FiVideo, FiUsers, FiLayers, FiTarget,
  FiCheckSquare, FiCpu, FiFolder, FiBarChart2,
  FiSettings, FiHelpCircle, FiLogOut
} from 'react-icons/fi';
import { IoRocketSharp } from 'react-icons/io5';
import UpgradeCard from './UpgradeCard';
import '../styles/DashboardPage.css';

const NavItem = ({ icon: Icon, label, active, onClick, collapsed }) => (
  <button 
    className={`nav-item ${active ? 'active' : ''}`} 
    onClick={onClick}
    title={collapsed ? label : ''}
  >
    <Icon size={18} />
    {!collapsed && <span>{label}</span>}
  </button>
);

const DashboardSidebar = ({ isCollapsed, activeView, setActiveView, toggleSidebar }) => {
  const navigate = useNavigate();

  const mainNav = [
    { id: 'Dashboard', icon: FiGrid },
    { id: 'AI Chat', icon: FiMessageSquare },
    { id: 'Idea Hub', icon: FiZap },
  ];

  const spacesNav = [
    { id: 'Team Chat', icon: FiMessageSquare },
    { id: 'Meeting', icon: FiVideo },
    { id: 'Teams', icon: FiUsers },
    { id: 'Projects', icon: FiLayers },
    { id: 'Milestones', icon: FiTarget },
    { id: 'Tasks', icon: FiCheckSquare },
    { id: 'AI / Tools', icon: FiCpu },
    { id: 'Files', icon: FiFolder },
    { id: 'Analytics', icon: FiBarChart2 },
    { id: 'Settings', icon: FiSettings },
  ];

  const handleLogout = () => {
      localStorage.removeItem('isAuthenticated');
      navigate('/');
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-box">
          <IoRocketSharp className="rocket-logo" size={24} />
        </div>
        {!isCollapsed && <span className="brand-name">MindOrbit <span className="pro-badge">PRO</span></span>}
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          {!isCollapsed && <label className="section-label">MAIN</label>}
          {mainNav.map(item => (
            <NavItem 
              key={item.id}
              icon={item.icon}
              label={item.id}
              active={activeView === item.id}
              onClick={() => setActiveView(item.id)}
              collapsed={isCollapsed}
            />
          ))}
        </div>

        <div className="nav-section">
          {!isCollapsed && <label className="section-label">SPACE</label>}
          {spacesNav.map(item => (
            <NavItem 
              key={item.id}
              icon={item.icon}
              label={item.id}
              active={activeView === item.id}
              onClick={() => setActiveView(item.id)}
              collapsed={isCollapsed}
            />
          ))}
        </div>
      </nav>

      <div className="sidebar-footer">
        {!isCollapsed && <UpgradeCard />}
        
        <button className="nav-item support-btn" style={{marginTop: '8px'}}>
          <FiHelpCircle size={18} />
          {!isCollapsed && <span>Support</span>}
        </button>

        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut size={18} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;