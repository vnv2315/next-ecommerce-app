import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Experience Pure Sound",
      subtitle: "Your Perfect Headphones Await!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy Now",
      buttonText2: "Find More",
      imgSrc: assets.header_headphone_image,
      gradient: "from-purple-600 via-pink-500 to-red-500",
      bgGradient: "from-purple-50 via-pink-50 to-red-50"
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here",
      subtitle: "Discover PlayStation 5 Today!",
      offer: "Hurry up only few left!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: assets.header_playstation_image,
      gradient: "from-blue-600 via-indigo-500 to-purple-500",
      bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
    },
    {
      id: 3,
      title: "Power Meets Elegance",
      subtitle: "Apple MacBook Pro is Here for You!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: assets.header_macbook_image,
      gradient: "from-emerald-600 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-50 via-teal-50 to-cyan-50"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentData = sliderData[currentSlide];

  return (
    <div className="relative w-full mt-6 rounded-2xl overflow-hidden shadow-2xl">
      
      {/* Main Slider Container */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-br ${slide.bgGradient} py-12 lg:py-16 px-6 lg:px-20 min-w-full relative overflow-hidden`}
            >
              
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/30 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/20 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
              
              {/* Content Section */}
              <div className="lg:flex-1 lg:pr-12 mt-8 lg:mt-0 z-10">
                <div className="space-y-4 lg:space-y-6">
                  
                  {/* Offer Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
                    {slide.offer}
                  </div>
                  
                  {/* Title */}
                  <div className="space-y-2">
                    <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl lg:text-2xl font-medium text-gray-700 max-w-lg">
                      {slide.subtitle}
                    </p>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href='/all-products' className={`group px-8 py-4 bg-gradient-to-r ${slide.gradient} text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg`}>
                      <span className="flex items-center gap-2">
                        {slide.buttonText1}
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </Link>
                    
                    <Link href='/all-products' className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-gray-200 hover:border-gray-300 rounded-full font-semibold text-gray-700 hover:text-gray-900 transition-all duration-300 text-lg">
                      {slide.buttonText2}
                      <Image 
                        className="group-hover:translate-x-1 transition-transform w-5 h-5" 
                        src={assets.arrow_icon} 
                        alt="arrow_icon" 
                      />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Image Section */}
              <div className="lg:flex-1 flex items-center justify-center z-10">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-20 blur-3xl rounded-full transform scale-150`}></div>
                  <Image
                    className="relative z-10 w-64 lg:w-80 xl:w-96 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    src={slide.imgSrc}
                    alt={`${slide.title} product`}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          onClick={nextSlide}
          className="p-3 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
        </button>
      </div>

      {/* Play/Pause Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={togglePlayPause}
          className="p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-gray-700" />
          ) : (
            <Play className="w-5 h-5 text-gray-700 ml-0.5" />
          )}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-300 ${
                currentSlide === index 
                  ? `w-8 h-3 bg-gradient-to-r ${currentData.gradient} rounded-full` 
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
        <div 
          className={`h-full bg-gradient-to-r ${currentData.gradient} transition-all duration-100 ease-linear`}
          style={{
            width: isPlaying ? '100%' : '0%',
            animation: isPlaying ? 'progress 4s linear infinite' : 'none'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default HeaderSlider;