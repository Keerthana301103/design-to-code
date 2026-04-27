import React, { useState } from 'react';
import { MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  avatar: string;
  product: string;
  amount: string;
  status: 'completed' | 'pending' | 'processing' | 'cancelled';
  date: string;
}

const orders: Order[] = [
  {
    id: '#1042',
    customer: 'Alex Johnson',
    avatar: 'AJ',
    product: 'Pro Plan Subscription',
    amount: '$299.00',
    status: 'completed',
    date: 'Apr 1, 2026',
  },
  {
    id: '#1041',
    customer: 'Sarah Williams',
    avatar: 'SW',
    product: 'Enterprise License',
    amount: '$1,299.00',
    status: 'processing',
    date: 'Mar 31, 2026',
  },
  {
    id: '#1040',
    customer: 'Michael Chen',
    avatar: 'MC',
    product: 'Starter Pack',
    amount: '$49.00',
    status: 'pending',
    date: 'Mar 30, 2026',
  },
  {
    id: '#1039',
    customer: 'Emily Davis',
    avatar: 'ED',
    product: 'Pro Plan Subscription',
    amount: '$299.00',
    status: 'completed',
    date: 'Mar 29, 2026',
  },
  {
    id: '#1038',
    customer: 'Robert Kim',
    avatar: 'RK',
    product: 'Add-on Package',
    amount: '$79.00',
    status: 'cancelled',
    date: 'Mar 28, 2026',
  },
  {
    id: '#1037',
    customer: 'Lisa Thompson',
    avatar: 'LT',
    product: 'Enterprise License',
    amount: '$1,299.00',
    status: 'completed',
    date: 'Mar 27, 2026',
  },
];

const statusConfig = {
  completed: {
    label: 'Completed',
    className: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
  },
  pending: {
    label: 'Pending',
    className: 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
  },
  processing: {
    label: 'Processing',
    className: 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  },
  cancelled: {
    label: 'Cancelled',
    className: 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400',
  },
};

const avatarColors = [
  'bg-indigo-400',
  'bg-pink-400',
  'bg-emerald-400',
  'bg-orange-400',
  'bg-purple-400',
  'bg-teal-400',
];

const RecentOrders: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const paginatedOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Recent Orders
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {orders.length} total orders
          </p>
        </div>
        <button className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
          View all
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700/50">
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Order
              </th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Customer
              </th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                Product
              </th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                Date
              </th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {paginatedOrders.map((order, index) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
              >
                <td className="px-5 py-3.5">
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {order.id}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-full ${
                        avatarColors[index % avatarColors.length]
                      } flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                    >
                      {order.avatar}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      {order.customer}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3.5 hidden md:table-cell">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {order.product}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {order.amount}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${
                      statusConfig[order.status].className
                    }`}
                  >
                    {statusConfig[order.status].label}
                  </span>
                </td>
                <td className="px-5 py-3.5 hidden lg:table-cell">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {order.date}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <button className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Showing {(currentPage - 1) * itemsPerPage + 1}–
          {Math.min(currentPage * itemsPerPage, orders.length)} of {orders.length}
        </p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-7 h-7 text-xs font-medium rounded-lg transition-colors ${
                currentPage === page
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;