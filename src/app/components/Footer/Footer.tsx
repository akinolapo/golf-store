import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-6 py-8 flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <Image src="/glogo.png" width={140} height={32} alt="logo" />
          <p className="mt-2">
          Drive Your Game Forward with Our Top Golf Gear!<br></br>
          And get exclusive offer that is top notch
          </p>
          <div className="mt-4">
            <p className="font-semibold">NEED HELP?</p>
            <p>(+800) 345 678, (+800) 123 456</p>
          </div>
          <div className="mt-4 flex space-x-3">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Information</h3>
              <ul className="mt-2">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Delivery Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Customer Service</h3>
              <ul className="mt-2">
                <li>
                  <a href="#" className="hover:underline">
                    Site Map
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Wish List
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Gift Certificates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Affiliate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Specials
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3">
          <h3 className="font-semibold">Join Our Newsletter</h3>
          <p className="mt-2">Sign Up for Exclusive Offers and Updates</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email letter"
              className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-900">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 text-center py-4">
        <p className="text-sm">&copy; 2024 GolfStore. All rights reserved</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Image
            src="/payment.png"
            alt="Payment method"
            width={300}
            height={150}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
