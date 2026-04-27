import React, { useState } from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const revenueData = [28000, 35000, 31000, 42000, 38000, 51000, 47000, 58000, 54000, 63000, 59000, 72000];
const expenseData = [18000, 22000, 20000, 25000, 23000, 30000, 28000, 33000, 31000, 36000, 34000, 40000];

const RevenueChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'revenue' | 'expense' | 'profit'>('revenue');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const maxValue = Math.max(...revenueData);
  const chartHeight = 200;

  const getBarHeight = (value: number) => (value / maxValue) * chartHeight;

  const formatValue = (v: number) => `$${(v / 1000).toFixed(0)}k`;

  const activeData = activeTab === 'revenue' ? revenueData : activeTab === 'expense' ? expenseData : revenueData.map((r, i) => r - expenseData[i]);

  const totalRevenue = revenueData.reduce((a, b) => a + b, 0);
  const totalExpense = expenseData.reduce((a, b) => a + b, 0);
  const totalProfit = totalRevenue - totalExpense;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Revenue Overview
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Financial performance this year
          </p>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
          {(['revenue', 'expense', 'profit'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg capitalize transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="text-center p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
          <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-1">Revenue</p>
          <p className="text-sm font-bold text-indigo-700 dark:text-indigo-300">
            ${(totalRevenue / 1000).toFixed(0)}k
          </p>
        </div>
        <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/30 rounded-xl">
          <p className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-1">Expense</p>
          <p className="text-sm font-bold text-orange-700 dark:text-orange-300">
            ${(totalExpense / 1000).toFixed(0)}k
          </p>
        </div>
        <div className="text-center p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl">
          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mb-1">Profit</p>
          <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
            ${(totalProfit / 1000).toFixed(0)}k
          </p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between">
          {[maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, 0].map((v, i) => (
            <span key={i} className="text-xs text-gray-400 dark:text-gray-500 w-8 text-right">
              {formatValue(v)}
            </span>
          ))}
        </div>

        {/* Chart area */}
        <div className="ml-10">
          {/* Grid lines */}
          <div className="relative" style={{ height: chartHeight }}>
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
              <div
                key={i}
                className="absolute w-full border-t border-gray-100 dark:border-gray-700"
                style={{ bottom: `${ratio * 100}%` }}
              />
            ))}

            {/* Bars */}
            <div className="absolute inset-0 flex items-end gap-1 md:gap-2">
              {activeData.map((value, index) => {
                const height = (Math.abs(value) / maxValue) * chartHeight;
                const isHovered = hoveredIndex === index;
                const barColor =
                  activeTab === 'revenue'
                    ? isHovered
                      ? 'bg-indigo-600'
                      : 'bg-indigo-400 dark:bg-indigo-500'
                    : activeTab === 'expense'
                    ? isHovered
                      ? 'bg-orange-600'
                      : 'bg-orange-400 dark:bg-orange-500'
                    : isHovered
                    ? 'bg-emerald-600'
                    : 'bg-emerald-400 dark:bg-emerald-500';

                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center group cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Tooltip */}
                    {isHovered && (
                      <div className="absolute bottom-full mb-2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap z-10 pointer-events-none shadow-lg">
                        {months[index]}: {formatValue(value)}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                      </div>
                    )}
                    <div
                      className={`w-full rounded-t-lg transition-all duration-200 ${barColor}`}
                      style={{ height: `${height}px` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* X-axis labels */}
          <div className="flex gap-1 md:gap-2 mt-2">
            {months.map((month, index) => (
              <div key={index} className="flex-1 text-center">
                <span
                  className={`text-xs transition-colors ${
                    hoveredIndex === index
                      ? 'text-gray-900 dark:text-white font-medium'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                >
                  {month.slice(0, 1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;