import React from 'react';
import { FiMoreHorizontal, FiMessageSquare, FiPaperclip } from 'react-icons/fi';
import '../styles/DashboardPage.css';
import './RoadmapView.css';
const KanbanCard = ({ title, tag, tagColor, comments, attachments }) => (
    <div className="kanban-card">
        <div className="card-labels">
            <span className="card-tag" style={{ background: `${tagColor}20`, color: tagColor }}>
                {tag}
            </span>
            <button className="icon-btn-small"><FiMoreHorizontal /></button>
        </div>
        <h4 className="kanban-card-title">{title}</h4>
        <div className="kanban-card-footer">
            <div className="card-metrics">
                {comments > 0 && <span><FiMessageSquare /> {comments}</span>}
                {attachments > 0 && <span><FiPaperclip /> {attachments}</span>}
            </div>
            <img src="https://i.pravatar.cc/150?u=alexrivera" alt="Assignee" className="card-assignee" />
        </div>
    </div>
);

const RoadmapView = () => {
    return (
        <div className="roadmap-view">
            <header className="view-header">
                <div>
                    <h2>Product Roadmap</h2>
                    <p>Track high-level features and sprint goals.</p>
                </div>
                <button className="new-task-btn">+ New Initiative</button>
            </header>

            <div className="kanban-board">
                {/* Column 1 */}
                <div className="kanban-column">
                    <div className="column-header">
                        <h3>Backlog</h3>
                        <span className="task-count">3</span>
                    </div>
                    <div className="column-cards">
                        <KanbanCard title="User Authentication Flow" tag="Security" tagColor="#f59e0b" comments={4} attachments={2} />
                        <KanbanCard title="Dark Mode Toggle V2" tag="Design" tagColor="#8b5cf6" comments={1} attachments={0} />
                        <KanbanCard title="Database Migration" tag="Backend" tagColor="#3b82f6" comments={8} attachments={1} />
                    </div>
                </div>

                {/* Column 2 */}
                <div className="kanban-column">
                    <div className="column-header">
                        <h3>In Orbit (Progress)</h3>
                        <span className="task-count">2</span>
                    </div>
                    <div className="column-cards">
                        <KanbanCard title="AI Chat Memory" tag="Feature" tagColor="#10b981" comments={12} attachments={4} />
                        <KanbanCard title="Billing & Upgrade Modal" tag="Frontend" tagColor="#ec4899" comments={3} attachments={0} />
                    </div>
                </div>

                {/* Column 3 */}
                <div className="kanban-column">
                    <div className="column-header">
                        <h3>Review</h3>
                        <span className="task-count">1</span>
                    </div>
                    <div className="column-cards">
                        <KanbanCard title="Sidebar Navigation Fix" tag="Bug" tagColor="#ef4444" comments={5} attachments={1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadmapView;