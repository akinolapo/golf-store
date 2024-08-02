// app/admin/products/add/page.tsx

'use client';

import React, { useState } from 'react';

const AddProduct: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [category, setCategory] = useState('');
  const [featured, setFeatured] = useState(false);
  const [description, setDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [productImages, setProductImages] = useState<File[]>([]);

  const handleFeaturedImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFeaturedImage(e.target.files[0]);
    }
  };

  const handleProductImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProductImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price,
      discountedPrice,
      category,
      featured,
      description,
      featuredImage,
      productImages,
      date: new Date().toISOString().split('T')[0], // Get the current date in YYYY-MM-DD format
    };

    console.log('Product added:', newProduct);

    // Clear form fields after submission
    setName('');
    setPrice('');
    setDiscountedPrice('');
    setCategory('');
    setFeatured(false);
    setDescription('');
    setFeaturedImage(null);
    setProductImages([]);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Discounted Price</label>
          <input
            type="text"
            value={discountedPrice}
            onChange={(e) => setDiscountedPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select a category</option>
            <option value="BALL">Ball</option>
            <option value="CLUB">Glove</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={featured}
            onChange={() => setFeatured(!featured)}
            className="mr-2"
          />
          <label className="text-gray-700">Set as Featured Product</label>
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Featured Image</label>
          <input
            type="file"
            onChange={handleFeaturedImageChange}
            className="w-full p-2 border border-gray-300 rounded"
            accept="image/*"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Product Images</label>
          <input
            type="file"
            onChange={handleProductImagesChange}
            className="w-full p-2 border border-gray-300 rounded"
            accept="image/*"
            multiple
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Publish Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
