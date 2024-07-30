import React from "react";
import Image from "next/image";

const Promotion: React.FC = () => {
  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <Image 
        src="/images/banner1.jpg" // Replace with your image path
        alt="Promotion Banner"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col justify-center pl-8 md:pl-16 lg:pl-24 w-2/3">
        <h2 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
          Limited Time Offer!
        </h2>
        <p className="text-black text-lg md:text-xl lg:text-2xl mb-4">
          Get 50% off on all products. Hurry, while stocks last!
        </p>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-1/2">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Promotion;
