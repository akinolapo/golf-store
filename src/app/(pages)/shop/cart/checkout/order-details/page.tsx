"use client";

import React, { useEffect, useState } from "react";
import UpperBanner from "@/app/components/UpperBanner/UpperBanner";

const Page: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    const storedOrderDetails = localStorage.getItem("orderDetails");
    console.log("Stored Order Details:", storedOrderDetails);

    if (storedOrderDetails) {
      setOrderDetails(JSON.parse(storedOrderDetails));
      // Clear order details from localStorage to avoid displaying previous orders
      localStorage.removeItem("orderDetails");
    }
  }, []);

  if (!orderDetails) {
    return (
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold">No Order Found</h2>
      </div>
    );
  }

  const { cartItems, shippingDetails, total } = orderDetails;

  const breadcrumbs = [
    { label: "Cart", href: "/cart" },
    { label: "Checkout", href: "/cart/checkout" },
  ];

  return (
    <>
      <UpperBanner title="Order Summary" breadcrumbs={breadcrumbs} />
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="border border-gray-200 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
          <p>Email: {shippingDetails.email}</p>
          <p>Name: {shippingDetails.firstName} {shippingDetails.lastName}</p>
          <p>Address: {shippingDetails.streetAddress}, {shippingDetails.city}, {shippingDetails.state}, {shippingDetails.zip}, {shippingDetails.country}</p>
          <p>Phone: {shippingDetails.phoneNumber}</p>
        </div>

        <div className="border border-gray-200 p-4 rounded-lg shadow-lg mt-4">
          <h3 className="text-lg font-semibold mb-2">Order Items</h3>
          {cartItems.map((item: any) => (
            <div key={item.id} className="border-b border-gray-200 pb-4 mb-4 flex">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <div className="font-bold text-xl">{item.name}</div>
                <div className="mt-2 text-lg font-semibold">Qty: {item.quantity}</div>
                <div className="mt-2 text-lg font-semibold">Price: {item.price}</div>
                <div className="mt-2 text-lg font-semibold">
                  Subtotal: ${(
                    parseFloat(item.price.replace("$", "")) * item.quantity
                  ).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
          <div className="font-bold text-lg mt-4">
            Order Total: ${total}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
