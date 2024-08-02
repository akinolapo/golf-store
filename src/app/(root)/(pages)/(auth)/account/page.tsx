"use client";

import React, { useState } from "react";
import { FaUser, FaBox, FaHeart, FaPencilAlt, FaSave } from "react-icons/fa";

const Page: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("account");
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const [accountInfo, setAccountInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(123) 456-7890"
  });

  const [addressInfo, setAddressInfo] = useState({
    street: "123 Main Street",
    city: "City",
    state: "State",
    zip: "12345",
    country: "Country"
  });

  const handleAccountEditClick = () => {
    setIsEditingAccount(true);
  };

  const handleAccountSaveClick = () => {
    setIsEditingAccount(false);
  };

  const handleAddressEditClick = () => {
    setIsEditingAddress(true);
  };

  const handleAddressSaveClick = () => {
    setIsEditingAddress(false);
  };

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "account":
        return (
          <div className="lg:flex lg:space-x-8">
            <div className="bg-gray-100 p-4 rounded-lg mb-4 lg:w-1/2 relative">
              <h2 className="text-2xl font-bold mb-4">Account Information</h2>
              <p>
                <strong>Name:</strong>{" "}
                {isEditingAccount ? (
                  <input
                    type="text"
                    name="name"
                    value={accountInfo.name}
                    onChange={handleAccountChange}
                    className="border border-gray-300 p-1 rounded"
                  />
                ) : (
                  accountInfo.name
                )}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {isEditingAccount ? (
                  <input
                    type="email"
                    name="email"
                    value={accountInfo.email}
                    onChange={handleAccountChange}
                    className="border border-gray-300 p-1 rounded"
                  />
                ) : (
                  accountInfo.email
                )}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                {isEditingAccount ? (
                  <input
                    type="text"
                    name="phone"
                    value={accountInfo.phone}
                    onChange={handleAccountChange}
                    className="border border-gray-300 p-1 rounded"
                  />
                ) : (
                  accountInfo.phone
                )}
              </p>
              <button
                className="absolute flex items-center gap-2 first-letter:bottom-4 right-4 text-red-500"
                onClick={isEditingAccount ? handleAccountSaveClick : handleAccountEditClick}
              >
                {isEditingAccount ? <FaSave /> : <FaPencilAlt />}
                {isEditingAccount ? " Save" : " Edit"}
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4 lg:w-1/2 relative">
              <h3 className="text-xl font-bold mb-4">Shipping Address</h3>
              <p>
                <strong>Street:</strong>{" "}
                {isEditingAddress ? (
                  <input
                    type="text"
                    name="street"
                    value={addressInfo.street}
                    onChange={handleAddressChange}
                    className="border border-gray-300 p-1 rounded"
                  />
                ) : (
                  addressInfo.street
                )}
              </p>
              <p>
                <strong>City:</strong>{" "}
                {isEditingAddress ? (
                  <input
                    type="text"
                    name="city"
                    value={addressInfo.city}
                    onChange={handleAddressChange}
                    className="border border-gray-300 p-1 rounded"
                  />
                ) : (
                  addressInfo.city
                )}
              </p>
              <p>
                <strong>State:</strong>{" "}
                {isEditingAddress ? (
                  <input
                    type="text"
                    name="state"
                    value={addressInfo.state}
                    onChange={handleAddressChange}
                    className="border border-gray-300 p-1 rounded"
                  />
                ) : (
                  addressInfo.state
                )}
              </p>
              <p>
                <strong>ZIP Code:</strong>{" "}
                {isEditingAddress ? (
                  <input
                    type="text"
                    name="zip"
                    value={addressInfo.zip}
                    onChange={handleAddressChange}
                    className="border border-gray-300 p-1 rounded"
                  />
                ) : (
                  addressInfo.zip
                )}
              </p>
              <p>
                <strong>Country:</strong>{" "}
                {isEditingAddress ? (
                  <input
                    type="text"
                    name="country"
                    value={addressInfo.country}
                    onChange={handleAddressChange}
                    className="border border-gray-300 p-1 rounded"
                  />
                ) : (
                  addressInfo.country
                )}
              </p>
              <button
                className="absolute flex items-center gap-2 bottom-4 right-4 text-red-500"
                onClick={isEditingAddress ? handleAddressSaveClick : handleAddressEditClick}
              >
                {isEditingAddress ? <FaSave /> : <FaPencilAlt />}
                {isEditingAddress ? " Save" : " Edit"}
              </button>
            </div>
          </div>
        );
      case "orders":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">My Orders</h2>
            <p>You have no orders.</p>
          </div>
        );
      case "wishlist":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">My Wish List</h2>
            <p>Your wish list is empty.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 flex flex-col lg:flex-row">
      <div className="lg:w-1/4 w-full mb-4 lg:mb-0">
        <div className="bg-gray-100 p-4 rounded-lg">
          <div
            className={`p-4 cursor-pointer flex items-center ${
              activeMenu === "account" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveMenu("account")}
          >
            <FaUser className="mr-2" /> My Account
          </div>
          <div
            className={`p-4 cursor-pointer flex items-center ${
              activeMenu === "orders" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveMenu("orders")}
          >
            <FaBox className="mr-2" /> My Orders
          </div>
          <div
            className={`p-4 cursor-pointer flex items-center ${
              activeMenu === "wishlist" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveMenu("wishlist")}
          >
            <FaHeart className="mr-2" /> My Wish List
          </div>
        </div>
      </div>
      <div className="lg:w-3/4 w-full lg:pl-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Page;
