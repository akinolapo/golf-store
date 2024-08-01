'use client';
import React from 'react';
import { useCart } from '@/app/context/CartContext';

const Page: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  console.log('Cart items:', cartItems); // Debugging line

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <div className="w-1/3">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              </div>
              <div className="w-1/3">
                <p className="font-bold">{item.name}</p>
                <p>{item.price}</p>
              </div>
              <div className="w-1/3 flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="border rounded text-center w-16 mr-2"
                  min="1"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold">
            Total: ${getTotal().toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
