import React from 'react';
import { FiCheckCircle, FiClock, FiZap, FiTrendingUp, FiMoreVertical, FiCalendar } from 'react-icons/fi';
import '../styles/DashboardPage.css';
import './TodayView.css';

const MetricCard = ({ title, value, trend, icon: Icon, colorClass }) => (
    <div className="metric-card">
        <div className="metric-card-header">
            <h4 className="metric-title">{title}</h4>
            <div className={`metric-icon-wrapper ${colorClass}`}>
                <Icon />
            </div>
        </div>
        <div className="metric-card-body">
            <h2 className="metric-value">{value}</h2>
            <span className="metric-trend positive">
                <FiTrendingUp /> {trend}
            </span>
        </div>
    </div>
);

const TodayView = () => {
    return (
        <div className="today-view-container fadeIn">
            <header className="view-header">
                <div>
                    <h2>Today's Overview</h2>
                    <p>Here is what's happening in your workspace right now.</p>
                </div>
                <button className="settings-outline-btn" style={{ margin: 0 }}>
                    <FiCalendar style={{ marginRight: '8px' }} /> Oct 24, 2026
                </button>
            </header>

            {/* Top Metrics Grid */}
            <div className="metrics-grid">
                <MetricCard title="Tasks Completed"   value="24"  trend="+12% vs yesterday"    icon={FiCheckCircle} colorClass="bg-blue" />
                <MetricCard title="Time Saved (AI)"   value="4.2h" trend="+8% vs yesterday"    icon={FiClock}       colorClass="bg-purple" />
                <MetricCard title="Active Agents"     value="3"   trend="All systems nominal"   icon={FiZap}         colorClass="bg-green" />
                <MetricCard title="Productivity Score" value="92" trend="+5 pts this week"      icon={FiTrendingUp}  colorClass="bg-orange" />
            </div>

            {/* Main Content Split */}
            <div className="today-content-split">

                {/* Left — Activity Chart */}
                <div className="activity-panel panel-card">
                    <div className="panel-header">
                        <h3>Workspace Activity</h3>
                        <button className="icon-btn-small"><FiMoreVertical /></button>
                    </div>
                    <div className="mock-chart-container">
                        <div className="chart-bar-group"><div className="chart-bar" style={{ height: '40%' }}></div><span>8am</span></div>
                        <div className="chart-bar-group"><div className="chart-bar" style={{ height: '70%' }}></div><span>10am</span></div>
                        <div className="chart-bar-group"><div className="chart-bar" style={{ height: '100%', background: 'var(--accent-blue)' }}></div><span>12pm</span></div>
                        <div className="chart-bar-group"><div className="chart-bar" style={{ height: '80%' }}></div><span>2pm</span></div>
                        <div className="chart-bar-group"><div className="chart-bar" style={{ height: '50%' }}></div><span>4pm</span></div>
                        <div className="chart-bar-group"><div className="chart-bar" style={{ height: '30%' }}></div><span>6pm</span></div>
                    </div>
                </div>

                {/* Right — Agenda */}
                <div className="agenda-panel panel-card">
                    <div className="panel-header">
                        <h3>Daily Agenda</h3>
                        <span className="task-count">3 Remaining</span>
                    </div>
                    <div className="agenda-list">
                        <div className="agenda-item">
                            <div className="agenda-time">10:00 AM</div>
                            <div className="agenda-details">
                                <h4>Sync with Design Team</h4>
                                <p>Review updated component library.</p>
                            </div>
                        </div>
                        <div className="agenda-item">
                            <div className="agenda-time">01:30 PM</div>
                            <div className="agenda-details">
                                <h4>Q4 Roadmap Review</h4>
                                <p>Finalize milestones with stakeholders.</p>
                            </div>
                        </div>
                        <div className="agenda-item">
                            <div className="agenda-time">04:00 PM</div>
                            <div className="agenda-details">
                                <h4>Deploy AI Memory Module</h4>
                                <p>Push updates to staging environment.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TodayView;