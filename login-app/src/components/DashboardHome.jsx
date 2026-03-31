import React from 'react';
import { FiChevronRight, FiFile, FiCreditCard, FiSend } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import '../styles/DashboardPage.css';
import './DashboardHome.css';

const DashboardHome = ({ greeting, userName }) => {
  return (
    <div className="dashboard-home">

      {/* ── Hero ── */}
      <header className="home-hero">
        <h1 className="greeting-text">{greeting}, {userName}</h1>
        <p className="date-text">Today is Monday, October 24, 2023</p>
      </header>

      {/* ── Metric Boxes ── */}
      <section className="metrics-row">
        <div className="metric-box">
          <span className="metric-label">WEEKLY PRODUCTIVITY</span>
          <div className="metric-data">
            <span className="metric-number">84%</span>
            <span className="metric-trend positive">↑ +12%</span>
          </div>
        </div>
        <div className="metric-box">
          <span className="metric-label">AI CREDITS USED</span>
          <div className="metric-data">
            <span className="metric-number">1,240</span>
            <span className="metric-subtext">of 2,500</span>
          </div>
        </div>
        <div className="metric-box">
          <span className="metric-label">ACTIVE TASKS</span>
          <div className="metric-data">
            <span className="metric-number">18</span>
            <span className="metric-badge warning">3 DUE TODAY</span>
          </div>
        </div>
        <div className="metric-box">
          <span className="metric-label">TEAM VELOCITY</span>
          <div className="metric-data">
            <span className="metric-number">42 pts</span>
            <span className="metric-subtext">+5</span>
          </div>
        </div>
      </section>

      {/* ── Two-Column Grid ── */}
      <div className="dashboard-grid-layout">

        {/* LEFT COLUMN */}
        <div className="main-col">

          {/* Recent Projects */}
          <section className="projects-section">
            <div className="section-header-flex">
              <h2 className="section-title">Recent Projects</h2>
              <a href="#" className="view-all-link">View all <FiChevronRight /></a>
            </div>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-icon bg-blue-light text-blue"><FiSend size={24} /></div>
                <h3>Project Aurora</h3>
                <p>Internal branding overhaul</p>
                <div className="progress-bar-container">
                  <div className="progress-fill bg-blue" style={{ width: '75%' }}></div>
                </div>
                <div className="project-meta">
                  <span>75% COMPLETE</span>
                  <span>UPDATED 2H AGO</span>
                </div>
              </div>
              <div className="project-card">
                <div className="project-icon bg-purple-light text-purple"><FiCreditCard size={24} /></div>
                <h3>Financial Dashboard</h3>
                <p>Real-time revenue tracking</p>
                <div className="progress-bar-container">
                  <div className="progress-fill bg-purple" style={{ width: '50%' }}></div>
                </div>
                <div className="project-meta">
                  <span>50% COMPLETE</span>
                  <span>UPDATED 5H AGO</span>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Milestones */}
          <section className="milestones-section">
            <h2 className="section-title">Upcoming Milestones</h2>
            <div className="milestones-row">

              <div className="milestone-card">
                <div className="milestone-indicator bg-green"></div>
                <div className="milestone-info">
                  <h4>Social Campaign Assets</h4>
                  <p>📁 Creative Team</p>
                </div>
                <div className="milestone-meta">
                  <div className="milestone-assignees">
                    <span className="assignee-avatar" style={{ background: '#16a34a' }}>JS</span>
                    <span className="assignee-avatar" style={{ background: '#7c3aed' }}>AK</span>
                  </div>
                  <div className="milestone-date">📅 Sep 15</div>
                </div>
                <a href="#" className="view-all-link text-small">
                  View All <FiChevronRight />
                </a>
              </div>

              <div className="milestone-card">
                <div className="milestone-indicator bg-blue"></div>
                <div className="milestone-info">
                  <h4>Platform Updates</h4>
                  <p>{'</>'} Dev Ops</p>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="side-col">

          {/* AI Suggestions */}
          <section className="ai-suggestions-section">
            <h2 className="section-title">
              <HiSparkles className="sparkle-icon-title" /> AI Suggestions
            </h2>

            {/* Card 1 — Featured (blue tint in light / dark card in dark) */}
            <div className="suggestion-card featured">
              <h4>Summarize Project Aurora</h4>
              <p>You have 12 new updates from the design team this morning.</p>
              {/* btn-generate = outlined in light, solid in dark */}
              <button className="btn-generate">Generate Summary</button>
            </div>

            {/* Card 2 — Outline */}
            <div className="suggestion-card outline">
              <h4>Fix 3 Overdue Tasks</h4>
              <p>Priority tasks in "Security Audit" are past their deadline.</p>
              {/* btn-reschedule = solid dark in light, outlined in dark */}
              <button className="btn-reschedule">Reschedule Now</button>
            </div>
          </section>

          {/* Team Activity */}
          <section className="team-activity-section">
            <h2 className="section-title">Team Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-avatar bg-dark-green">
                  <FiFile color="white" />
                </div>
                <div className="activity-content">
                  <p>
                    <strong>Sarah K.</strong> uploaded{' '}
                    <span className="text-blue">Concept_Design_v2.fig</span> to Project Aurora.
                  </p>
                  <span className="activity-time">12 minutes ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-avatar bg-light-purple">MI</div>
                <div className="activity-content">
                  <p>
                    <strong>Mike I.</strong> completed task{' '}
                    <em>"API Documentation Review"</em>
                  </p>
                  <span className="activity-time">1 hour ago</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default DashboardHome;