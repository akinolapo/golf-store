// app/admin/products/page.tsx

"use client";

import { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface Product {
  id: number;
  image: string;
  category: string;
  name: string;
  rating: number;
  price: string;
  discountedPrice?: string;
  date: string;
}

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/products.json");
      const data: Product[] = await response.json();
      const sortedProducts = data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setProducts(sortedProducts);
    };

    fetchProducts();
  }, []);

  const handleCategoryFilter = (category: string | null) => {
    setCategoryFilter(category);
    setCurrentPage(1);
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = categoryFilter
    ? products.filter((product) => product.category === categoryFilter)
    : products;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Product List</h1>
      <div className="mb-4">
        <button
          onClick={() => handleCategoryFilter(null)}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          All
        </button>
        <button
          onClick={() => handleCategoryFilter("BALL")}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Balls
        </button>
        <button
          onClick={() => handleCategoryFilter("GLOVE")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Glove
        </button>
      </div>
      <div>
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg flex items-center mb-4 flex-wrap"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover mr-4 rounded-full"
            />
            <div className="flex-1 min-w-[150px]">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-700">{product.category}</p>
            </div>
            <div className="flex items-center space-x-4 mt-2 ">
              <button className="p-2 bg-blue-500 text-white rounded flex items-center text-xs">
                <FaEdit className="mr-1" /> Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="p-2 bg-red-500 text-white rounded flex items-center text-xs"
              >
                <FaTrashAlt className="mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {Array.from(
          { length: Math.ceil(filteredProducts.length / productsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Page;
