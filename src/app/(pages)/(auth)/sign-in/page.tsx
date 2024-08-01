"use client";

import React, { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const Page: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reset password logic here
  };

  const closeResetPassword = () => {
    setShowResetPassword(false);
    setResetEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/bg.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Sign In
        </h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <FaEnvelope className="mx-2 text-gray-500" />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none rounded-r-lg"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <FaLock className="mx-2 text-gray-500" />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none rounded-r-lg"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowResetPassword(true)}
            className="text-red-500 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </div>

      {showResetPassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full relative">
            <button
              onClick={closeResetPassword}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
              Reset Password
            </h2>
            <form onSubmit={handleResetPassword}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="resetEmail"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="resetEmail"
                  name="resetEmail"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-lg mt-4 hover:bg-red-600 transition duration-300"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
