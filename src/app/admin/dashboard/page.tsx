'use client';

const Page: React.FC = () => {
  return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Number of Customers</h2>
            <p className="text-2xl">150</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Visits Per Day</h2>
            <p className="text-2xl">300</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Number of Orders Over Time</h2>
            <p className="text-2xl">1200</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Total Sale Amount</h2>
            <p className="text-2xl">$50,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Sales Per Day</h2>
            <p className="text-2xl">$1,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Most Sold Item</h2>
            <p className="text-2xl">Golf Club A</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Least Sold Item</h2>
            <p className="text-2xl">Golf Ball B</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Orders Pending Approval</h2>
            <p className="text-2xl">5</p>
          </div>
        </div>
      </div>
  );
};

export default Page;
