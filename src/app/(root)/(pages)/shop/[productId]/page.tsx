"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaStar, FaShoppingCart, FaHeart, FaRandom } from "react-icons/fa";
import UpperBanner from "@/app/components/UpperBanner/UpperBanner";
import { useCart } from "@/app/context/CartContext";
import CartPopup from "@/app/components/CartPopup/CartPopup";

interface Product {
  id: number;
  image: string;
  category: string;
  name: string;
  description: string;
  rating: number;
  price: string;
  discountedPrice?: string;
  isNew?: boolean;
}

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const Page: React.FC<ProductPageProps> = ({ params }) => {
  const { productId } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data: Product[] = await response.json();
        const numericProductId = Number(productId);
        const foundProduct = data.find(
          (item: Product) => item.id === numericProductId
        );
        if (foundProduct) {
          setProduct(foundProduct);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      const item = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.discountedPrice || product.price,
        quantity,
      };
      console.log('Adding to cart:', item);
      addToCart(item);
      setShowPopup(true);
    } else {
      console.error('Product is not defined');
    }
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
  ];

  return (
    <div>
      <UpperBanner title={product.name} breadcrumbs={breadcrumbs} />
      <div className="container mx-auto py-8 my-4 justify-center flex flex-col md:flex-row shadow-lg px-4 rounded-lg border items-center">
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="max-w-full h-auto rounded-md bg-gray-200"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-2">{product.category}</p>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`${
                  i < product.rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="text-2xl font-bold mb-2">
            {product.discountedPrice ? (
              <>
                <span className="line-through text-gray-500 mr-2">
                  {product.price}
                </span>
                <span className="text-red-500">{product.discountedPrice}</span>
              </>
            ) : (
              <span>{product.price}</span>
            )}
          </div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border-1 border-gray-300 rounded-full text-center px-4 w-32 py-2 mr-2"
              min="1"
            />
            <button
              onClick={handleAddToCart}
              className="bg-red-500 text-white px-8 hover:bg-gray-500 py-2 rounded-full flex items-center"
            >
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="bg-gray-200 text-gray-700 hover:text-red-600 px-4 py-2 rounded flex items-center">
              <FaHeart className="mr-2" /> Add to Wishlist
            </button>
            <button className="bg-gray-200 text-gray-700 hover:text-red-600 px-4 py-2 rounded flex items-center">
              <FaRandom className="mr-2" /> Compare
            </button>
          </div>
        </div>
      </div>
      {showPopup && <CartPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Page;
