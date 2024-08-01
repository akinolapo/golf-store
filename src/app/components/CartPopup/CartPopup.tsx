"use client";

import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface CartPopupProps {
  onClose: () => void;
}

const CartPopup: React.FC<CartPopupProps> = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleViewCart = () => {
    window.location.href = '/shop/cart'; // Navigate to the cart page
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border shadow-lg p-4 rounded-lg">
      <div className="flex items-center">
        <FaShoppingCart className="text-green-500 mr-2" />
        <span>Item added to cart!</span>
      </div>
      <div className="mt-2 flex space-x-2">
        <button
          onClick={handleViewCart}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          View Cart
        </button>
        <button
          onClick={onClose}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartPopup;
