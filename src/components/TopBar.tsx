import React, { useState } from 'react';
import { Menu, Bell, Search, Sun, Moon, ChevronDown } from 'lucide-react';

interface TopBarProps {
  onMenuToggle: () => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
  sidebarOpen: boolean;
}

const TopBar: React.FC<TopBarProps> = ({
  onMenuToggle,
  darkMode,
  onDarkModeToggle,
}) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-4 md:px-6 py-3.5 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      {/* Left side */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>

        {/* Search */}
        <div
          className={`
            hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200
            ${
              searchFocused
                ? 'border-indigo-400 dark:border-indigo-500 bg-white dark:bg-gray-700 shadow-sm ring-2 ring-indigo-100 dark:ring-indigo-900/40'
                : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50'
            }
          `}
        >
          <Search size={16} className="text-gray-400 dark:text-gray-500 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search anything..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="bg-transparent text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none w-48 md:w-64"
          />
          <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-600 rounded border border-gray-200 dark:border-gray-500">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Dark mode toggle */}
        <button
          onClick={onDarkModeToggle}
          className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="relative p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
          </button>

          {notifOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setNotifOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 z-20 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Notifications
                  </h3>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">
                    Mark all read
                  </span>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-700 max-h-72 overflow-y-auto">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm ${n.color}`}
                      >
                        {n.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800 dark:text-gray-200 leading-snug">
                          {n.message}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                          {n.time}
                        </p>
                      </div>
                      {n.unread && (
                        <span className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0 mt-1.5"></span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-700 text-center">
                  <button className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                    View all notifications
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* User avatar */}
        <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            JD
          </div>
          <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-200">
            Jane Doe
          </span>
          <ChevronDown size={14} className="hidden md:block text-gray-400 dark:text-gray-500" />
        </button>
      </div>
    </header>
  );
};

const notifications = [
  {
    id: 1,
    avatar: '🛒',
    color: 'bg-blue-100 dark:bg-blue-900/40',
    message: 'New order #1042 received from Alex Johnson',
    time: '2 minutes ago',
    unread: true,
  },
  {
    id: 2,
    avatar: '👤',
    color: 'bg-green-100 dark:bg-green-900/40',
    message: '12 new users registered today',
    time: '1 hour ago',
    unread: true,
  },
  {
    id: 3,
    avatar: '📊',
    color: 'bg-purple-100 dark:bg-purple-900/40',
    message: 'Monthly report is ready to download',
    time: '3 hours ago',
    unread: false,
  },
  {
    id: 4,
    avatar: '⚠️',
    color: 'bg-yellow-100 dark:bg-yellow-900/40',
    message: 'Server CPU usage exceeded 80%',
    time: 'Yesterday',
    unread: false,
  },
];

export default TopBar;