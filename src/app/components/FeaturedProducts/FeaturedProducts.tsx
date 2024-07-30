'use client';

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const categories = ["SHOP", "BALL", "GLOVE"];
const products = [
  {
    id: 1,
    image: "/images/ball1.png",
    category: "BALL",
    name: "Product 1",
    rating: 4,
    price: "$99.99",
  },
  {
    id: 2,
    image: "/images/glove1.png",
    category: "GLOVE",
    name: "Product 2",
    rating: 5,
    price: "$79.99",
    discountedPrice: "$59.99",
  },

  {
    id: 3,
    image: "/images/ball2.png",
    category: "BALL",
    name: "Product 3",
    rating: 3,
    price: "$49.99",
    discountedPrice: "$39.99",
  },
  {
    id: 4,
    image: "/images/ball4.png",
    category: "BALL",
    name: "Product 4",
    rating: 4,
    price: "$89.99",
  },
  {
    id: 5,
    image: "/images/glove2.png",
    category: "GLOVE",
    name: "Product 5",
    rating: 5,
    price: "$69.99",
    isNew: true,
  },
  {
    id: 6,
    image: "/images/glove3.png",
    category: "GLOVE",
    name: "Product 6",
    rating: 5,
    price: "$49.99",
  },
  // Add more products as needed
];

const FeaturedProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("SHOP");

  const filteredProducts =
    selectedCategory === "SHOP"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    speed: 500,
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-4xl font-bold mb-4">Featured Products</h2>
      <p className="text-center text-lg mb-6">
        Add new products to weekly line up
      </p>
      <Slider {...settings}>
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-3">
            <div className="flex border border-gray-300 hover:border-red-500 relative group">
              <div className="w-1/2">
                <Image src={product.image} alt={product.name} width={150} height={150} className="flex mx-auto" />
              </div>
              <div className="w-1/2 p-4 flex flex-col justify-center">
                <p className="text-gray-500">{product.category}</p>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex justify-start items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < product.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xl font-bold">
                  {product.discountedPrice ? (
                    <>
                      <span className="line-through text-gray-500">{product.price}</span>{" "}
                      <span className="text-red-500">{product.discountedPrice}</span>
                    </>
                  ) : (
                    product.price
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
    >
      <FaArrowRight />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
    >
      <FaArrowLeft />
    </button>
  );
};

export default FeaturedProducts;
