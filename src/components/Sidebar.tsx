import React from 'react';
import {
  LayoutDashboard,
  BarChart2,
  Users,
  ShoppingCart,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
  X,
  Zap,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
}

interface SidebarProps {
  isOpen: boolean;
  activePage: string;
  onNavigate: (page: string) => void;
  onClose: () => void;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: 'analytics', label: 'Analytics', icon: <BarChart2 size={20} /> },
  { id: 'users', label: 'Users', icon: <Users size={20} />, badge: 12 },
  { id: 'orders', label: 'Orders', icon: <ShoppingCart size={20} />, badge: 3 },
  { id: 'reports', label: 'Reports', icon: <FileText size={20} /> },
];

const bottomNavItems: NavItem[] = [
  { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  { id: 'help', label: 'Help & Support', icon: <HelpCircle size={20} /> },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activePage, onNavigate, onClose }) => {
  return (
    <aside
      className={`
        fixed lg:static inset-y-0 left-0 z-30
        flex flex-col
        w-64 min-h-screen
        bg-white dark:bg-gray-800
        border-r border-gray-200 dark:border-gray-700
        shadow-xl lg:shadow-none
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
    >
      {/* Logo / Brand */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
            <Zap size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
              DashFlow
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Pro Dashboard</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="mb-6">
          <p className="px-3 mb-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            Main Menu
          </p>
          <ul className="space-y-1">
            {mainNavItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2.5 rounded-xl
                    text-sm font-medium transition-all duration-200 group
                    ${
                      activePage === item.id
                        ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/60 hover:text-gray-900 dark:hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`
                        transition-colors duration-200
                        ${
                          activePage === item.id
                            ? 'text-indigo-600 dark:text-indigo-400'
                            : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                        }
                      `}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                  {item.badge && (
                    <span
                      className={`
                        text-xs font-semibold px-2 py-0.5 rounded-full
                        ${
                          activePage === item.id
                            ? 'bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                        }
                      `}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="px-3 mb-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            Support
          </p>
          <ul className="space-y-1">
            {bottomNavItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                    text-sm font-medium transition-all duration-200 group
                    ${
                      activePage === item.id
                        ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/60 hover:text-gray-900 dark:hover:text-white'
                    }
                  `}
                >
                  <span
                    className={`
                      transition-colors duration-200
                      ${
                        activePage === item.id
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                      }
                    `}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* User Profile */}
      <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/60 transition-colors cursor-pointer group">
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center text-white text-sm font-bold shadow-sm">
              JD
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
              Jane Doe
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              jane@dashflow.io
            </p>
          </div>
          <LogOut
            size={16}
            className="text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 flex-shrink-0 transition-colors"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;