import React from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  revenue: number;
  units: number;
  growth: number;
  color: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Enterprise License',
    category: 'Software',
    revenue: 48200,
    units: 37,
    growth: 24,
    color: 'bg-indigo-500',
  },
  {
    id: '2',
    name: 'Pro Plan',
    category: 'Subscription',
    revenue: 32100,
    units: 107,
    growth: 18,
    color: 'bg-purple-500',
  },
  {
    id: '3',
    name: 'Starter Pack',
    category: 'One-time',
    revenue: 18400,
    units: 375,
    growth: 12,
    color: 'bg-pink-500',
  },
  {
    id: '4',
    name: 'Add-on Package',
    category: 'Add-on',
    revenue: 9800,
    units: 124,
    growth: -5,
    color: 'bg-orange-500',
  },
];

const maxRevenue = Math.max(...products.map((p) => p.revenue));

const TopProducts: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm h-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Top Products
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            By revenue this month
          </p>
        </div>
        <button className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
          See all
        </button>
      </div>

      {/* Donut Chart Placeholder */}
      <div className="flex items-center justify-center mb-5">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {products.map((product, index) => {
              const total = products.reduce((a, b) => a + b.revenue, 0);
              const percentage = product.revenue / total;
              const circumference = 2 * Math.PI * 35;
              const strokeDasharray = circumference * percentage;
              const offset = products
                .slice(0, index)
                .reduce((a, b) => a + (b.revenue / total) * circumference, 0);

              const colorMap: Record<string, string> = {
                'bg-indigo-500': '#6366f1',
                'bg-purple-500': '#a855f7',
                'bg-pink-500': '#ec4899',
                'bg-orange-500': '#f97316',
              };

              return (
                <circle
                  key={product.id}
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke={colorMap[product.color]}
                  strokeWidth="12"
                  strokeDasharray={`${strokeDasharray} ${circumference - strokeDasharray}`}
                  strokeDashoffset={-offset}
                  strokeLinecap="butt"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-lg font-bold text-gray-900 dark:text-white">$108k</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Total</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.id} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${product.color} flex-shrink-0`} />
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-tight">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{product.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  ${(product.revenue / 1000).toFixed(1)}k
                </p>
                <p
                  className={`text-xs font-medium ${
                    product.growth >= 0
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-red-600 dark:text-red-400'
                  }`}
                >
                  {product.growth >= 0 ? '+' : ''}
                  {product.growth}%
                </p>
              </div>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full ${product.color} transition-all duration-500`}
                style={{ width: `${(product.revenue / maxRevenue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;