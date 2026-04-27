import React from 'react';
import StatsGrid from './StatsGrid';
import RevenueChart from './RevenueChart';
import RecentOrders from './RecentOrders';
import TopProducts from './TopProducts';
import ActivityFeed from './ActivityFeed';

interface DashboardContentProps {
  activePage: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ activePage }) => {
  const pageTitle: Record<string, string> = {
    dashboard: 'Dashboard Overview',
    analytics: 'Analytics',
    users: 'User Management',
    orders: 'Orders',
    reports: 'Reports',
    settings: 'Settings',
    help: 'Help & Support',
  };

  const pageSubtitle: Record<string, string> = {
    dashboard: "Welcome back, Jane! Here's what's happening today.",
    analytics: 'Deep dive into your performance metrics.',
    users: 'Manage and monitor your user base.',
    orders: 'Track and manage all orders.',
    reports: 'Generate and download reports.',
    settings: 'Configure your dashboard preferences.',
    help: 'Find answers and get support.',
  };

  if (activePage !== 'dashboard') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-20 h-20 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
          <span className="text-3xl">🚧</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {pageTitle[activePage] || 'Page'}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-sm">
          This section is under construction. Navigate to Dashboard to see the full experience.
        </p>
        <div className="mt-4 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-sm text-indigo-600 dark:text-indigo-400 font-medium">
          Coming Soon
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {pageTitle[activePage]}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            {pageSubtitle[activePage]}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select className="text-sm px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-700 cursor-pointer">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>This year</option>
          </select>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-indigo-200 dark:shadow-none">
            Export
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <StatsGrid />

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <TopProducts />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RecentOrders />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;