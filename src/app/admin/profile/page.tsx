'use client'

import React, { useState } from 'react';

const Page: React.FC = () => {
  const [adminData, setAdminData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890'
  });

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Implement the password change logic here
      alert('Password changed successfully');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Admin Profile</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-medium mb-4">Admin Information</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-gray-600 mb-2">Name</label>
            <p className="bg-gray-100 p-3 rounded border border-gray-300">{adminData.name}</p>
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Email Address</label>
            <p className="bg-gray-100 p-3 rounded border border-gray-300">{adminData.email}</p>
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Phone Number</label>
            <p className="bg-gray-100 p-3 rounded border border-gray-300">{adminData.phone}</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-medium mb-4">Change Password</h2>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label htmlFor="new-password" className="block text-gray-600 mb-2">New Password</label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-gray-600 mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
