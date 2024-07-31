import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const UpperBanner: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="bg-gray-100 p-12">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold flex-1">{title}</h1>
        <nav>
          <ol className="flex items-center justify-center mt-2 space-x-2 text-gray-600">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <FaChevronRight />
            </li>
            <li className="font-medium text-red-600">{title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default UpperBanner;
