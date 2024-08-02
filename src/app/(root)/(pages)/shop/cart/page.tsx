"use client";

import React from "react";
import { useCart } from "@/app/context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import UpperBanner from "@/app/components/UpperBanner/UpperBanner";

const Page: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  console.log("Cart items:", cartItems); // Debugging line

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price * item.quantity;
    }, 0);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
  ];

  return (
    <>
      <UpperBanner title="Shopping Cart" breadcrumbs={breadcrumbs} />
      <div className="container mx-auto py-8 px-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="overflow-x-auto">
            <div className="hidden lg:block">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200">Item</th>
                    <th className="py-2 px-4 border-b border-gray-200">
                      Price
                    </th>
                    <th className="py-2 px-4 border-b border-gray-200">Qty</th>
                    <th className="py-2 px-4 border-b border-gray-200">
                      Subtotal
                    </th>
                    <th className="py-2 px-4 border-b border-gray-200">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200">
                      <td className="py-4 px-4 flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded mr-4"
                        />
                        <span className="font-bold">{item.name}</span>
                      </td>
                      <td className="py-4 px-4">{item.price}</td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, Number(e.target.value))
                          }
                          className="border-1 border-gray-300 rounded-full text-center px-4 w-24 py-2"
                          min="1"
                        />
                      </td>
                      <td className="py-4 px-4">
                        $
                        {(
                          parseFloat(item.price.replace("$", "")) *
                          item.quantity
                        ).toFixed(2)}
                      </td>
                      <td className="py-4 px-4 text-red-500 cursor-pointer">
                        <FaTrashAlt onClick={() => removeFromCart(item.id)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Grid layout for md and sm screens */}
            <div className="block lg:hidden">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 p-4 rounded-lg flex flex-col"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded mr-4"
                      />
                      <span className="font-bold">{item.name}</span>
                    </div>
                    <div className="mb-2">Price: ${item.price}</div>
                    <div className="mb-2">
                      Qty:
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                        className="border rounded text-center w-16 ml-2"
                        min="1"
                      />
                    </div>
                    <div className="mb-2">
                      Subtotal: $
                      {(
                        parseFloat(item.price.replace("$", "")) * item.quantity
                      ).toFixed(2)}
                    </div>
                    <div className="text-red-500 cursor-pointer mt-auto">
                      <FaTrashAlt onClick={() => removeFromCart(item.id)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
            <div>
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white px-4 py-2 rounded mb-2 lg:mb-0"
              >
                Clear Cart
              </button>
            </div>
            <div className="text-right font-bold">
              Total: ${getTotal().toFixed(2)}
            </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between mt-4 gap-4">
                <Link
                  href="/shop"
                  className="bg-gray-500 text-white px-4 py-2 rounded mb-2text-center"
                >
                  Continue Shopping
                </Link>
              <Link
                href="/shop/cart/checkout"
                className="bg-green-500 text-white px-4 py-2 rounded text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
