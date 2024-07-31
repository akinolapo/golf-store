"use client";

import React, { useState, useEffect } from "react";
import UpperBanner from "@/app/components/UpperBanner/UpperBanner";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Page: React.FC = () => {
  const [sortOptionsOpen, setSortOptionsOpen] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("price");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((cat) => cat !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const filteredProducts = products.filter((product) => {
    const isCategoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const isPriceMatch =
      parseFloat(product.price.replace("$", "")) >= minPrice &&
      parseFloat(product.price.replace("$", "")) <= maxPrice;
    return isCategoryMatch && isPriceMatch;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "price") {
      return (
        parseFloat(a.price.replace("$", "")) -
        parseFloat(b.price.replace("$", ""))
      );
    }
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "date") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const breadcrumbs = [
    { label: 'Home', href: '/' }
  ];

  return (
    <div>
      <UpperBanner title="Shop" breadcrumbs={breadcrumbs} />

      <div className="container mx-auto p-4 flex flex-col lg:flex-row">
        {/* Filter Section */}
        <div className="flex-shrink-0 lg:w-1/4 p-4">
          <div className="mb-4">
            <button
              onClick={() => setSortOptionsOpen(!sortOptionsOpen)}
              className="bg-red-500 text-white py-2 px-4 rounded flex items-center"
            >
              Sort by
              <FaAngleDown
                className={`ml-2 transition-transform ${
                  sortOptionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {sortOptionsOpen && (
              <div className="mt-2">
                <label
                  htmlFor="sortBy"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sort by:
                </label>
                <select
                  id="sortBy"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="price">Price</option>
                  <option value="name">Name</option>
                  <option value="date">Date</option>
                </select>
              </div>
            )}
          </div>
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2">Category</h3>
            <label className="block custom-checkbox">
              <input
                type="checkbox"
                checked={selectedCategories.length === 0}
                onChange={() => setSelectedCategories([])}
                className="mr-2"
              />
              All Categories
            </label>
            <label className="block custom-checkbox">
              <input
                type="checkbox"
                checked={selectedCategories.includes("BALL")}
                onChange={() => handleCategoryChange("BALL")}
                className="mr-2"
              />
              BALL
            </label>
            <label className="block custom-checkbox">
              <input
                type="checkbox"
                checked={selectedCategories.includes("GLOVE")}
                onChange={() => handleCategoryChange("GLOVE")}
                className="mr-2"
              />
              GLOVE
            </label>
          </div>
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2">Price Range</h3>
            <div className="flex items-center">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(parseFloat(e.target.value))}
                className="w-full mr-2 p-2 border rounded-md"
                placeholder="Min"
              />
              <span className="mx-2">-</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
                className="w-full ml-2 p-2 border rounded-md"
                placeholder="Max"
              />
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow-md relative"
              >
                {product.isNew && (
                  <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1">
                    New
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={250}
                  className="w-full h-[250] object-cover bg-gray-100"
                />
                <div className="p-4">
                  <div className="text-sm text-gray-600">
                    {product.category}
                  </div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <div className="flex justify-start items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < product.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-xl font-bold">
                    {product.discountedPrice ? (
                      <>
                        <span className="line-through text-gray-500">
                          {product.price}
                        </span>
                        <span className="ml-2 text-red-500">
                          {product.discountedPrice}
                        </span>
                      </>
                    ) : (
                      product.price
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            {currentPage > 1 && (
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
            )}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mx-1 ${
                  currentPage === index + 1 ? "bg-red-500 text-white" : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg ml-2"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
