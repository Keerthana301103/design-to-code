import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Eye } from 'lucide-react';

interface StatCard {
  id: string;
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  sparkline: number[];
}

const stats: StatCard[] = [
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: '$48,295',
    change: 12.5,
    changeLabel: 'vs last month',
    icon: <DollarSign size={20} />,
    iconBg: 'bg-indigo-50 dark:bg-indigo-900/40',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    sparkline: [30, 45, 35, 60, 55, 70, 65, 80, 75, 90, 85, 95],
  },
  {
    id: 'users',
    title: 'Active Users',
    value: '12,847',
    change: 8.2,
    changeLabel: 'vs last month',
    icon: <Users size={20} />,
    iconBg: 'bg-emerald-50 dark:bg-emerald-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    sparkline: [50, 40, 60, 55, 70, 65, 75, 70, 80, 75, 85, 90],
  },
  {
    id: 'orders',
    title: 'Total Orders',
    value: '3,642',
    change: -2.4,
    changeLabel: 'vs last month',
    icon: <ShoppingCart size={20} />,
    iconBg: 'bg-orange-50 dark:bg-orange-900/40',
    iconColor: 'text-orange-600 dark:text-orange-400',
    sparkline: [70, 65, 75, 60, 55, 65, 60, 55, 50, 60, 55, 58],
  },
  {
    id: 'pageviews',
    title: 'Page Views',
    value: '284,910',
    change: 18.7,
    changeLabel: 'vs last month',
    icon: <Eye size={20} />,
    iconBg: 'bg-purple-50 dark:bg-purple-900/40',
    iconColor: 'text-purple-600 dark:text-purple-400',
    sparkline: [20, 35, 30, 50, 45, 60, 55, 70, 65, 80, 85, 95],
  },
];

const MiniSparkline: React.FC<{ data: number[]; positive: boolean }> = ({ data, positive }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 80;
  const height = 32;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={positive ? '#6366f1' : '#f97316'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  );
};

const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
            <div className={`p-2.5 rounded-xl ${stat.iconBg}`}>
              <span className={stat.iconColor}>{stat.icon}</span>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex items-center gap-1.5">
              {stat.change >= 0 ? (
                <TrendingUp size={14} className="text-emerald-500" />
              ) : (
                <TrendingDown size={14} className="text-red-500" />
              )}
              <span
                className={`text-sm font-semibold ${
                  stat.change >= 0
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {stat.change >= 0 ? '+' : ''}
                {stat.change}%
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {stat.changeLabel}
              </span>
            </div>
            <MiniSparkline data={stat.sparkline} positive={stat.change >= 0} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;