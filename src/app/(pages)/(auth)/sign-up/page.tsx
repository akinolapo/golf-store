"use client";

import React, { useState } from "react";
import { FaLock, FaEnvelope, FaUser, FaPhone } from "react-icons/fa";
import Link from "next/link"; // Assuming you're using next/link for navigation

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign-Up:", { email, firstName, lastName, phoneNumber, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/bg.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                First Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FaUser className="mx-2 text-gray-500" />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 focus:outline-none rounded-r-lg"
                  required
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FaUser className="mx-2 text-gray-500" />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 focus:outline-none rounded-r-lg"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
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
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FaPhone className="mx-2 text-gray-500" />
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-3 py-2 focus:outline-none rounded-r-lg"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
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
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FaLock className="mx-2 text-gray-500" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 focus:outline-none rounded-r-lg"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/sign-in" className="text-yellow-700 hover:underline">
              Have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
