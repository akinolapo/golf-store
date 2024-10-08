"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import UpperBanner from "@/app/components/UpperBanner/UpperBanner";
import { useRouter } from 'next/navigation';

type FormState = {
  email: string;
  firstName: string;
  lastName: string;
  streetAddress: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  phoneNumber: string;
};

const initialFormState: FormState = {
  email: "",
  firstName: "",
  lastName: "",
  streetAddress: "",
  country: "",
  state: "",
  city: "",
  zip: "",
  phoneNumber: "",
};

const Page: React.FC = () => {
  const { cartItems, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState<FormState>(initialFormState);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderDetails = {
      cartItems,
      shippingDetails: form,
      total: getTotal().toFixed(2),
    };

    console.log("Order Details to Store:", orderDetails);

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    setOrderDetails(orderDetails);
    setOrderPlaced(true);
    clearCart();
    router.push('/shop/cart/checkout/order-details'); // Use router.push to navigate to the order summary page
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price * item.quantity;
    }, 0);
  };

  const breadcrumbs = [
    { label: "Shop", href: "/shop" },
    { label: "Cart", href: "/shop/cart" },
  ];

  if (orderPlaced) {
    return (
      <>
        <UpperBanner title="Order Summary" breadcrumbs={breadcrumbs} />
        <div className="container mx-auto py-8 px-4">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="border border-gray-200 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
            <p>Email: {orderDetails.shippingDetails.email}</p>
            <p>Name: {orderDetails.shippingDetails.firstName} {orderDetails.shippingDetails.lastName}</p>
            <p>Address: {orderDetails.shippingDetails.streetAddress}, {orderDetails.shippingDetails.city}, {orderDetails.shippingDetails.state}, {orderDetails.shippingDetails.zip}, {orderDetails.shippingDetails.country}</p>
            <p>Phone: {orderDetails.shippingDetails.phoneNumber}</p>
          </div>

          <div className="border border-gray-200 p-4 rounded-lg shadow-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">Order Items</h3>
            {orderDetails.cartItems.map((item: any) => (
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
              Order Total: ${orderDetails.total}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <UpperBanner title="Checkout" breadcrumbs={breadcrumbs} />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="border border-gray-200 p-4 rounded-lg shadow-lg">
                <div className="mb-4">
                  <span className="text-lg">
                    {cartItems.length} Item{cartItems.length > 1 ? "s" : ""} in
                    Cart
                  </span>
                </div>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 pb-4 mb-4 flex"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                    <div className="flex-1">
                      <div className="font-bold text-xl">{item.name}</div>
                      <div className="mt-2 flex items-center">
                        <span className="mr-2">Qty:</span>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, Number(e.target.value))
                          }
                          className="border border-gray-300 px-2 py-1 rounded w-16 text-center"
                          min="1"
                        />
                      </div>
                      <div className="mt-2 text-lg font-semibold">
                        Price: {item.price}
                      </div>
                      <div className="mt-2 text-lg font-semibold">
                        Subtotal: $
                        {(
                          parseFloat(item.price.replace("$", "")) *
                          item.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="font-bold text-lg mt-4">
                  Cart Subtotal: ${getTotal().toFixed(2)}
                </div>
                <div className="font-bold text-lg mt-2">
                  Order Total: ${getTotal().toFixed(2)}
                </div>
              </div>
            )}
          </div>

          {/* Shipping Address Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
            <form onSubmit={handlePlaceOrder}>
              {/* Form fields */}
              {Object.keys(form).map((key) => (
                <div className="mb-4" key={key}>
                  <label className="block mb-2 text-lg">
                    {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                  </label>
                  <input
                    type={key === "email" ? "email" : "text"}
                    name={key}
                    value={form[key as keyof FormState]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                    required
                  />
                </div>
              ))}
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
