import React from "react";
import Image from "next/image";
import { IoMdArrowDroprightCircle  } from "react-icons/io";

const categories = [
  {
    image: "/images/cat1.jpg",
    title: "Category 1",
    subtitle: "Explore our collection",
    button: "Shop Now",
  },
  {
    image: "/images/cat2.jpg",
    title: "Category 2",
    subtitle: "Discover new trends",
    button: "Shop Now",
  },
  {
    image: "/images/cat3.jpg",
    title: "Category 3",
    subtitle: "Find your style",
    button: "Shop Now",
  },
];

const MainCategory: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="relative w-full h-[220px]">
            <Image
              src={category.image}
              alt={category.title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center pl-2 md:pl-4 lg:pl-6">
              <p className="text-black text-md md:text-lg lg:text-xl">
                {category.subtitle}
              </p>
              <h3 className="text-black text-xl md:text-2xl lg:text-3xl font-bold mb-8">
                {category.title}
              </h3>
              <a href="#" className="flex items-center uppercase font-semibold text-md text-black pl-2">
                {category.button} <IoMdArrowDroprightCircle  className="ml-2 text-md text-red-600" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCategory;
