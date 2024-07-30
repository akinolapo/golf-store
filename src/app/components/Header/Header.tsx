'use client';

import Image from "next/image";
import React, { useState } from "react";
import {
  FaSearch,
  FaRandom,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex items-center">
          <span>Welcome you to Golf store!</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-red-500 flex items-center space-x-1">
            <FaUser />
            <span>My Account</span>
          </a>
        </div>
      </div>

      <div className="bg-white text-black">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-4 lg:hidden">
            <button className="hover:text-red-700" onClick={toggleMenu}>
              <FaBars className="text-3xl" />
            </button>
          </div>
          <div>
            <a href="#">
              <Image src="/glogo.png" width={140} height={32} alt="logo" />
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="font-semibold hover:text-red-700 hover:border-b-2 hover:border-red-500"
            >
              Home
            </a>
            <div className="relative group">
              <a
                href="#"
                className="font-semibold hover:text-red-700 hover:border-b-2 hover:border-red-500"
              >
                <span className="flex items-center">Shop <MdKeyboardArrowDown className="text-gray-400"/></span>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-md w-[820px] left-0 top-full">
                <div className="container mx-auto p-4 pt-8">
                  {/* Section 1: Four Columns */}
                  <div className="col-span-4 grid grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Category 1</h4>
                      <ul>
                        <li><a href="#" className="hover:text-red-700">Item 1</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 2</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 3</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 4</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Category 2</h4>
                      <ul>
                        <li><a href="#" className="hover:text-red-700">Item 1</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 2</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 3</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 4</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Category 3</h4>
                      <ul>
                        <li><a href="#" className="hover:text-red-700">Item 1</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 2</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 3</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 4</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Category 4</h4>
                      <ul>
                        <li><a href="#" className="hover:text-red-700">Item 1</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 2</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 3</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 4</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* Section 2: Two Columns */}
                  <div className="col-span-2 grid grid-cols-2 gap-4 mt-8">
                    <div className="relative">
                      <Image src="/images/golf1.jpg" alt="Image 1" width={400} height={75} className="rounded-md" />
                    </div>
                    <div className="relative">
                      <Image src="/images/golf4.jpg" alt="Image 2" width={400} height={75} className="rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a
                href="#"
                className="font-semibold hover:text-red-700 hover:border-b-2 hover:border-red-500"
              >
                <span className="flex items-center">Accessories <MdKeyboardArrowDown className="text-gray-400"/></span>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-md w-[820px] left-0 top-full">
                {/* Add dropdown items here */}
                <div className="container mx-auto p-4 pt-8">
                  {/* Section 1: Four Columns */}
                  <div className="col-span-4 grid grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Category 1</h4>
                      <ul>
                        <li><a href="#" className="hover:text-red-700">Item 1</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 2</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 3</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 4</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Category 2</h4>
                      <ul>
                        <li><a href="#" className="hover:text-red-700">Item 1</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 2</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 3</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 4</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Category 3</h4>
                      <ul>
                        <li><a href="#" className="hover:text-red-700">Item 1</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 2</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 3</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 4</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Category 4</h4>
                      <ul>
                        <li><a href="#" className="hover:text-red-700">Item 1</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 2</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 3</a></li>
                        <li><a href="#" className="hover:text-red-700">Item 4</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* Section 2: Two Columns */}
                  <div className="col-span-2 grid grid-cols-2 gap-4 mt-8">
                    <div className="relative">
                      <Image src="/images/golf1.jpg" alt="Image 1" width={400} height={75} className="rounded-md" />
                    </div>
                    <div className="relative">
                      <Image src="/images/golf4.jpg" alt="Image 2" width={400} height={75} className="rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="font-semibold hover:text-red-700 hover:border-b-2 hover:border-red-500"
            >
              Specials
            </a>
            <a
              href="#"
              className="font-semibold hover:text-red-700 hover:border-b-2 hover:border-red-500"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="font-semibold hover:text-red-700 hover:border-b-2 hover:border-red-500"
            >
              About Us
            </a>
            <div className="relative group">
              <a
                href="#"
                className="relative font-semibold hover:text-red-700 hover:border-b-2 hover:border-red-500"
              >
                Blog
                <span className="absolute -top-3 left-4 text-xs text-white bg-red-500 px-2 rounded-full">
                  Hot
                </span>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-md">
                {/* Add dropdown items here */}
              </div>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hover:text-red-700 hidden md:inline">
              <FaSearch className="text-2xl" />
            </button>
            <button className="hover:text-red-700 hidden md:inline">
              <FaRandom className="text-2xl" />
            </button>
            <button className="hover:text-red-700 hidden md:inline">
              <FaHeart className="text-2xl" />
            </button>
            <div className="relative">
              <button className="hover:text-red-700">
                <FaShoppingCart className="text-3xl" />
                <span className="absolute top-0 right-0 text-xs text-white bg-red-500 px-1 rounded-full">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Menu */}
       {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-white w-3/4 h-full shadow-lg py-4 relative">
            <button className="absolute top-0 -right-10 text-white bg-black p-2" onClick={closeMenu}>
              <FaTimes className="text-2xl" />
            </button>
            {/* Menu items go here */}
            <nav className="flex flex-col">
              <a href="#" className="text-black border-b-2 p-4 hover:text-red-700">Home</a>
              <a href="#" className="text-black border-b-2 p-4 hover:text-red-700"><span className="flex items-center justify-between">Shop <MdKeyboardArrowDown className="text-gray-400 text-2xl"/></span></a>
              <a href="#" className="text-black border-b-2 p-4 hover:text-red-700"><span className="flex items-center justify-between">Accessories <MdKeyboardArrowDown className="text-gray-400 text-2xl"/></span></a>
              <a href="#" className="text-black border-b-2 p-4 hover:text-red-700">Specials</a>
              <a href="#" className="text-black border-b-2 p-4 hover:text-red-700">Contact Us</a>
              <a href="#" className="text-black border-b-2 p-4 hover:text-red-700">About Us</a>
              <a href="#" className="text-black border-b-2 p-4 hover:text-red-700">Blog</a>
            </nav>
          </div>
          <div className="bg-black bg-opacity-50 w-1/4 h-full" onClick={closeMenu}></div>
        </div>
      )}
    </header>
  );
};

export default Header;
