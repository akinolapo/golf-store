"use client";

import React, { useState, useEffect } from "react";
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
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    // Fetch products from the JSON file
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts =
    selectedCategory === "SHOP"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const settings = {
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
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
