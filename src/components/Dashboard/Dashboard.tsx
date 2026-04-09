import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import PhaseCard from '../PhaseCard/PhaseCard';
import Footer from '../Footer/Footer';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('project-home');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`dashboard-root ${darkMode ? 'dark' : ''}`}>
      <div className="dashboard-layout">
        <Sidebar
          isOpen={sidebarOpen}
          activeNav={activeNav}
          onNavChange={setActiveNav}
        />
        <div className={`dashboard-main ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Header
            onToggleSidebar={toggleSidebar}
            onToggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            userName="John Doe"
            userInitials="JD"
          />
          <main className="dashboard-content">
            <div className="dashboard-page-header">
              <div className="page-header-icon">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1h20M1 9h20M1 17h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="page-header-text">
                <h1 className="page-title">Project Home Page</h1>
                <p className="page-subtitle">
                  Navigate through the four testing phases below to manage your complete Software Testing Life Cycle.
                </p>
              </div>
            </div>

            <div className="phases-grid">
              <PhaseCard
                phase="PHASE 1"
                title="Planning"
                description="Research insights, generate documentation, build work backlogs, and define comprehensive test strategies."
                items={[
                  { name: 'Research & Insights', badge: 'AI-Powered' },
                  { name: 'Tech Document Generator', badge: 'Coming Soon' },
                  { name: 'Work Backlog Generator', badge: 'Available' },
                  { name: 'Test Strategy', badge: 'v2.0' },
                ]}
              />
              <PhaseCard
                phase="PHASE 2"
                title="Design"
                description="Transform concepts into designs, generate test cases and plans, create automation frameworks and scripts."
                items={[
                  { name: 'Concept‑to‑Design Engine', badge: 'Figma MCP' },
                  { name: 'Rapid Prototyping', badge: 'Interactive' },
                  { name: 'Test Case Generation', badge: '4 Cases' },
                  { name: 'Test Plan Generation', badge: '3 Plans' },
                  { name: 'Framework Generation', badge: '3 Frameworks' },
                  { name: 'Script Generation', badge: '0 Scripts' },
                ]}
              />
              <PhaseCard
                phase="PHASE 3"
                title="Engineering"
                description="Generate framework scaffolds, convert designs to code, and rapidly build interactive prototypes."
                items={[
                  { name: 'Framework Scaffold Generator', badge: 'Coming Soon' },
                  { name: 'Design‑to‑Code Engine', badge: 'Figma→Code' },
                ]}
              />
              <PhaseCard
                phase="PHASE 4"
                title="Execution"
                description="Execute functional and non-functional tests, monitor test suites, and track real-time progress."
                items={[
                  { name: 'Functional Test Execution', badge: '96.5% Pass' },
                  { name: 'Quality Test Execution', badge: '89.8% Pass' },
                  { name: 'Test Suite Execution', badge: 'Coming Soon' },
                ]}
              />
              <PhaseCard
                phase="PHASE 5"
                title="Reporting"
                description="Analyze test results, generate insights, track trends, and create comprehensive reports for stakeholders."
                items={[
                  { name: 'Functional Test Reports', badge: 'Analytics' },
                  { name: 'Quality Test Reports', badge: 'Metrics' },
                ]}
              />
            </div>
          </main>
          <Footer />
        </div>
      </div>

      {/* Floating AI Assistant Button */}
      <button className="floating-ai-btn" aria-label="AI Assistant">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="white"/>
        </svg>
        <span className="floating-ai-indicator"></span>
      </button>
    </div>
  );
};

export default Dashboard;