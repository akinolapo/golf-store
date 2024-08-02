'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const AddBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [publishDate, setPublishDate] = useState(new Date().toISOString());

  const handlePublish = () => {
    const newBlogPost = {
      id: uuidv4(),
      title,
      content,
      date: publishDate,
    };

    // Add your logic to save the new blog post (e.g., API call)
    console.log('New blog post:', newBlogPost);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Add New Blog Post</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Content
        </label>
        <ReactQuill
          id="content"
          value={content}
          onChange={setContent}
          modules={{
            toolbar: [
              [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
              [{size: []}],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image'],
              ['clean']
            ],
          }}
          formats={[
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
          ]}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-full"
        />
      </div>
      <button
        onClick={handlePublish}
        className="bg-blue-500 hover:bg-blue-700 mt-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Publish Blog Post
      </button>
    </div>
  );
};

export default AddBlog;
