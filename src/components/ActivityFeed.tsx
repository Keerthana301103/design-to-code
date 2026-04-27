import React from 'react';
import { UserPlus, ShoppingCart, AlertCircle, CheckCircle, Star, RefreshCw } from 'lucide-react';

interface Activity {
  id: string;
  type: 'user' | 'order' | 'alert' | 'success' | 'review' | 'update';
  message: string;
  detail: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'user',
    message: 'New user registered',
    detail: 'Marcus Lee joined the platform',
    time: '2m ago',
  },
  {
    id: '2',
    type: 'order',
    message: 'Order completed',
    detail: '#1042 — $299.00 received',
    time: '15m ago',
  },
  {
    id: '3',
    type: 'success',
    message: 'Payment processed',
    detail: 'Enterprise invoice #INV-089',
    time: '1h ago',
  },
  {
    id: '4',
    type: 'alert',
    message: 'High CPU usage',
    detail: 'Server load at 82% — monitoring',
    time: '2h ago',
  },
  {
    id: '5',
    type: 'review',
    message: 'New 5-star review',
    detail: '"Excellent product!" — Sarah W.',
    time: '3h ago',
  },
  {
    id: '6',
    type: 'update',
    message: 'System updated',
    detail: 'Dashboard v2.4.1 deployed',
    time: '5h ago',
  },
  {
    id: '7',
    type: 'user',
    message: 'User upgraded plan',
    detail: 'Emily D. → Enterprise',
    time: '6h ago',
  },
];

const activityConfig = {
  user: {
    icon: <UserPlus size={14} />,
    bg: 'bg-indigo-100 dark:bg-indigo-900/40',
    color: 'text-indigo-600 dark:text-indigo-400',
  },
  order: {
    icon: <ShoppingCart size={14} />,
    bg: 'bg-blue-100 dark:bg-blue-900/40',
    color: 'text-blue-600 dark:text-blue-400',
  },
  alert: {
    icon: <AlertCircle size={14} />,
    bg: 'bg-yellow-100 dark:bg-yellow-900/40',
    color: 'text-yellow-600 dark:text-yellow-400',
  },
  success: {
    icon: <CheckCircle size={14} />,
    bg: 'bg-emerald-100 dark:bg-emerald-900/40',
    color: 'text-emerald-600 dark:text-emerald-400',
  },
  review: {
    icon: <Star size={14} />,
    bg: 'bg-orange-100 dark:bg-orange-900/40',
    color: 'text-orange-600 dark:text-orange-400',
  },
  update: {
    icon: <RefreshCw size={14} />,
    bg: 'bg-purple-100 dark:bg-purple-900/40',
    color: 'text-purple-600 dark:text-purple-400',
  },
};

const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm h-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Activity Feed
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Real-time updates
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Live</span>
        </div>
      </div>

      <div className="space-y-1 overflow-y-auto max-h-80">
        {activities.map((activity, index) => {
          const config = activityConfig[activity.type];
          return (
            <div key={activity.id} className="relative">
              {/* Timeline line */}
              {index < activities.length - 1 && (
                <div className="absolute left-4 top-8 bottom-0 w-px bg-gray-100 dark:bg-gray-700" />
              )}

              <div className="flex items-start gap-3 py-2 px-1 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors cursor-pointer">
                <div
                  className={`w-8 h-8 rounded-full ${config.bg} ${config.color} flex items-center justify-center flex-shrink-0 z-10`}
                >
                  {config.icon}
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-tight">
                    {activity.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                    {activity.detail}
                  </p>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0 pt-0.5">
                  {activity.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 text-center">
        <button className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
          Load more activity
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;