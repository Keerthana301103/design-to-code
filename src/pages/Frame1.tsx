import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import DashboardContent from '../components/DashboardContent';

const Frame1: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          activePage={activePage}
          onNavigate={setActivePage}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content area */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <TopBar
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
            darkMode={darkMode}
            onDarkModeToggle={() => setDarkMode(!darkMode)}
            sidebarOpen={sidebarOpen}
          />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            <DashboardContent activePage={activePage} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Frame1;