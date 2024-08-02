// app/admin/dashboard/page.tsx
'use client';

import { 
  FaUsers, 
  FaChartLine, 
  FaShoppingCart, 
  FaDollarSign, 
  FaStore, 
  FaThumbsUp, 
  FaThumbsDown, 
  FaHourglassHalf, 
  FaStar, 
  FaUndo 
} from 'react-icons/fa';

const Page: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="p-4 bg-blue-500 rounded-full">
            <FaUsers className="text-white text-3xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold text-gray-800">Total Customers</h2>
            <p className="text-xl font-semibold text-gray-700">150</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="p-4 bg-purple-500 rounded-full">
            <FaShoppingCart className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold text-gray-800">Total Orders</h2>
            <p className="text-xl font-semibold text-gray-700">1200</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="p-4 bg-orange-500 rounded-full">
            <FaHourglassHalf className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold text-gray-800">Pending Orders</h2>
            <p className="text-xl font-semibold text-gray-700">5</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="p-4 bg-yellow-500 rounded-full">
            <FaDollarSign className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold text-gray-800">Total Sale</h2>
            <p className="text-xl font-semibold text-gray-700">$50,000</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="p-4 bg-red-500 rounded-full">
            <FaStore className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold text-gray-800">Avg Sales</h2>
            <p className="text-xl font-semibold text-gray-700">$1,000</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="p-4 bg-teal-500 rounded-full">
            <FaUndo className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold text-gray-800">Returned Items</h2>
            <p className="text-xl font-semibold text-gray-700">10</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="p-4 bg-indigo-500 rounded-full">
            <FaThumbsUp className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold text-gray-800">Most Sold Item</h2>
            <p className="text-xl font-semibold text-gray-700">Golf Club A</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="p-4 bg-pink-500 rounded-full">
            <FaThumbsDown className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold text-gray-800">Least Sold Item</h2>
            <p className="text-xl font-semibold text-gray-700">Golf Ball B</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="p-4 bg-green-500 rounded-full">
            <FaStar className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold text-gray-800">Highest Rated Item</h2>
            <p className="text-xl font-semibold text-gray-700">Golf Club C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
