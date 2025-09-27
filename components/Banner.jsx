import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 my-16 rounded-2xl overflow-hidden shadow-xl">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
      
      {/* Left Audio Device */}
      <div className="relative transform hover:scale-105 transition-transform duration-500 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
        <Image
          className="max-w-56 relative z-10 drop-shadow-2xl"
          src={assets.jbl_soundbox_image}
          alt="jbl_soundbox_image"
        />
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 px-4 md:px-0 z-10">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent max-w-[320px] leading-tight">
            Level Up Your Gaming Experience
          </h2>
          <p className="max-w-[380px] text-lg font-medium text-gray-600 leading-relaxed">
            From immersive sound to precise controls—everything you need to dominate the game
          </p>
        </div>
        
        <button className="group relative flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10">Buy Now</span>
          <Image 
            className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
            src={assets.arrow_icon_white} 
            alt="arrow_icon_white" 
          />
        </button>
      </div>

      {/* Right Gaming Controller - Desktop */}
      <div className="hidden md:block relative transform hover:scale-105 transition-transform duration-500 z-10">
        <div className="absolute inset-0 bg-gradient-to-l from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
        <Image
          className="max-w-80 relative z-10 drop-shadow-2xl"
          src={assets.md_controller_image}
          alt="md_controller_image"
        />
      </div>

      {/* Right Gaming Controller - Mobile */}
      <div className="md:hidden relative transform hover:scale-105 transition-transform duration-500 z-10 mt-6">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
        <Image
          className="relative z-10 drop-shadow-2xl"
          src={assets.sm_controller_image}
          alt="sm_controller_image"
        />
      </div>
    </div>
  );
};

export default Banner;