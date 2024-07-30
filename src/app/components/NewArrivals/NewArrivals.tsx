"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaShoppingCart,
  FaHeart,
  FaRandom,
  FaSearch,
  FaStar,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
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
    isNew: true,
  },
  {
    id: 2,
    image: "/images/glove1.png",
    category: "GLOVE",
    name: "Product 2",
    rating: 5,
    price: "$79.99",
    isNew: false,
  },
  {
    id: 3,
    image: "/images/ball2.png",
    category: "BALL",
    name: "Product 3",
    rating: 3,
    price: "$49.99",
    isNew: true,
  },
  {
    id: 4,
    image: "/images/ball4.png",
    category: "BALL",
    name: "Product 4",
    rating: 4,
    price: "$89.99",
    isNew: false,
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
    isNew: true,
  },
  {
    id: 7,
    image: "/images/glove4.png",
    category: "GLOVE",
    name: "Product 7",
    rating: 5,
    price: "$59.99",
    isNew: true,
  },
  {
    id: 8,
    image: "/images/ball5.png",
    category: "BALL",
    name: "Product 8",
    rating: 5,
    price: "$49.99",
    isNew: false,
  },
  {
    id: 9,
    image: "/images/ball6.png",
    category: "BALL",
    name: "Product 9",
    rating: 5,
    price: "$29.99",
    isNew: true,
  },

  {
    id: 10,
    image: "/images/ball6.png",
    category: "BALL",
    name: "Product 1",
    rating: 5,
    price: "$29.99",
    isNew: true,
  },
  // Add more products as needed
];

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

const NewArrivals: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("SHOP");

  const filteredProducts =
    selectedCategory === "SHOP"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const settings = {
    // className: "center",
    // centerMode: true,
    // slidesPerRow: 2,
    infinite: false,
    slidesToShow: 5,
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
          slidesToShow: 4,
          slidesPerRow: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-4xl font-bold mb-4">New Arrivals</h2>
      <p className="text-center text-lg mb-6">
        Add new products to weekly line up
      </p>
      <div className="flex justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 ${
              selectedCategory === category
                ? "text-white bg-red-500"
                : "text-gray-500 bg-white"
            } rounded-full border border-gray-300 hover:bg-red-500 hover:text-white`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <Slider {...settings}>
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-3">
            <div className="border border-gray-300 hover:border-red-500 relative group">
              {product.isNew && (
                <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1">
                  New
                </span>
              )}
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="flex mx-auto"
              />
              <div className="p-4 text-center">
                <p className="text-gray-500">{product.category}</p>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex justify-center items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < product.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xl font-bold">{product.price}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="bg-white p-2 rounded-full">
                  <FaShoppingCart />
                </button>
                <button className="bg-white p-2 rounded-full">
                  <FaHeart />
                </button>
                <button className="bg-white p-2 rounded-full">
                  <FaRandom />
                </button>
                <button className="bg-white p-2 rounded-full">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
