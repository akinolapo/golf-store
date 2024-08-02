// app/admin/orders/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import { FaEye, FaCheckCircle } from "react-icons/fa";

interface Order {
  id: number;
  item: string;
  price: string;
  date: string;
  email: string;
  location: string;
  status: string;
}

const Page: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all"); // 'all', 'pending', 'completed'
  const ordersPerPage = 10;

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("/orders.json");
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  const handleApprove = (id: number) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: "completed" } : order
    );
    setOrders(updatedOrders);
  };

  // Filter and sort orders
  const filteredOrders = orders.filter((order) => {
    if (filter === "pending") return order.status === "pending";
    if (filter === "completed") return order.status === "completed";
    return true;
  });

  const sortedOrders = filteredOrders.sort((a, b) => {
    if (a.status === "pending" && b.status === "completed") return -1;
    if (a.status === "completed" && b.status === "pending") return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Calculate the indices for the current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Order List</h1>
      <div className="flex justify-between items-center mb-4">
        <div>
          <button
            className={`mr-2 px-4 py-2 rounded ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`mr-2 px-4 py-2 rounded ${
              filter === "pending" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>
          <button
            className={`px-4 py-2 rounded ${
              filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {currentOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-4"
          >
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-800">{order.item}</h2>
              <p className="text-sm text-gray-600">{order.price}</p>
              <p className="text-sm text-gray-600">{order.email}</p>
              <p className="text-sm text-gray-600">{order.location}</p>
              <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
            </div>
            <div className="flex space-x-4">
              {order.status === "pending" ? (
                <button
                  onClick={() => handleApprove(order.id)}
                  className="text-green-500 hover:text-green-700"
                >
                  <FaCheckCircle />
                </button>
              ) : (
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEye />
                </button>
              )}
              <span
                className={`text-sm font-semibold ${
                  order.status === "pending"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <nav>
          <ul className="flex space-x-4">
            {[...Array(Math.ceil(filteredOrders.length / ordersPerPage))].map(
              (_, index) => (
                <li
                  key={index}
                  className={`cursor-pointer bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded ${
                    currentPage === index + 1 ? "font-bold" : ""
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Page;
