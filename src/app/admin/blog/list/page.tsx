// app/admin/blogs/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface Blog {
  id: number;
  title: string;
}

const Page: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/blogs.json');
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleDelete = (id: number) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Admin Blog List</h1>
      <div className="space-y-4">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
            <div className="flex-1 mr-4">
              <h2 className="text-lg font-bold text-gray-800">{blog.title}</h2>
            </div>
            <div className="flex space-x-4">
              <button className="text-blue-500 hover:text-blue-700">
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(blog.id)} className="text-red-500 hover:text-red-700">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <nav>
          <ul className="flex space-x-4">
            {[...Array(Math.ceil(blogs.length / blogsPerPage))].map((_, index) => (
              <li
                key={index}
                className={`cursor-pointer py-2 px-4 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Page;
