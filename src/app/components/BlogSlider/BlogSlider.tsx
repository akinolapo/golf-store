"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const blogPosts = [
  {
    id: 1,
    image: "/images/golf2.jpg",
    date: "03/July",
    title: "Master Your Swing: Top Golf Tips for Beginners",
    excerpt: "Learn essential techniques to improve your swing and take your golf game to the next level with our expert tips.",
    link: "/blog/master-your-swing",
  },
  {
    id: 2,
    image: "/images/golf1.jpg",
    date: "15/June",
    title: "The Best Golf Courses to Visit in 2024",
    excerpt: "Discover the top golf destinations for 2024, featuring stunning courses and breathtaking scenery around the globe.",
    link: "/blog/best-golf-courses-2024",
  },
  {
    id: 3,
    image: "/images/golf4.jpg",
    date: "22/May",
    title: "Golf Gear Essentials: What You Need for Your Next Round",
    excerpt: "From clubs to apparel, find out the must-have gear for your next golf round and how to choose the right equipment.",
    link: "/blog/golf-gear-essentials",
  },
  // Add more blog posts as needed
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

const BlogSlider: React.FC = () => {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-4xl font-bold mb-4">Latest Blogs</h2>
      <Slider {...settings}>
        {blogPosts.map((post) => (
          <div key={post.id} className="p-4">
            <div className="relative group">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-60 object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 p-2 bg-red-600 text-white text-xs rounded-br-lg">
                <span className="block text-lg font-bold">{post.date.split('/')[0]}</span>
                <span>{post.date.split('/')[1]}</span>
              </div>
              <div className="p-4 bg-white shadow-lg rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href={post.link} className="flex items-center hover:text-red-600">
                  <span className="mr-2 hover:mr-3">Read More</span>
                  <IoMdArrowDroprightCircle className="text-red-600" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
