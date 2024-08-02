"use client";

import React, { useState, useEffect } from "react";
import UpperBanner from "@/app/components/UpperBanner/UpperBanner";
import { FaAngleDown, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page: React.FC = () => {
  const { category } = useParams();
  const productsPerPage = 12;
  const [sortOptionsOpen, setSortOptionsOpen] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("price");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const categoryFilter = Array.isArray(category)
    ? category.map(cat => cat.toLowerCase()).join(', ')
    : category?.toLowerCase() || '';

  const filteredProducts = products.filter((product) => {
    // Handle product.category as a single string or array of strings
    const productCategories = Array.isArray(product.category)
      ? product.category.join(' ').toLowerCase()
      : product.category.toLowerCase();

    const isCategoryMatch = productCategories.includes(categoryFilter);
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" }
  ];

  const title = Array.isArray(category)
    ? category.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).join(", ")
    : category?.charAt(0).toUpperCase() + category?.slice(1);

  return (
    <div>
      <UpperBanner title={title} breadcrumbs={breadcrumbs} />

      <div className="container mx-auto p-4 flex flex-col lg:flex-row">
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="border-1 hover:border-red-500 rounded-lg overflow-hidden shadow-md relative group transition-transform duration-300"
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
                  className="w-full h-[250px] object-cover bg-gray-100 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-4">
                  <div className="text-sm text-gray-600">{product.category}</div>
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
              </Link>
            ))}
          </div>
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
