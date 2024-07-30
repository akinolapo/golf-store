'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "/images/hero1.jpg",
    title: "Slide 1 Title",
    subtitle: "This is the subtitle for slide 1.",
    button: "Learn More",
  },
  {
    image: "/images/hero2.jpg",
    title: "Slide 2 Title",
    subtitle: "This is the subtitle for slide 2.",
    button: "Discover More",
  },
  {
    image: "/images/hero3.jpg",
    title: "Slide 3 Title",
    subtitle: "This is the subtitle for slide 3.",
    button: "Get Started",
  },
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

const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings} className="w-full h-[500px]">
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[500px]">
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="w-full h-[500px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center pl-8 md:pl-16 lg:pl-24">
              <h2 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-black text-lg md:text-xl lg:text-2xl mb-4">
                {slide.subtitle}
              </p>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-max">
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
