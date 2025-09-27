import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.girl_with_headphone_image,
    title: "Unparalleled Sound",
    description: "Experience crystal-clear audio with premium headphones that deliver studio-quality sound.",
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image,
    title: "Stay Connected",
    description: "Compact and stylish earphones designed for every occasion and lifestyle.",
    color: "from-blue-600 to-cyan-600"
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: "Power in Every Pixel",
    description: "Shop the latest laptops engineered for work, gaming, and creative excellence.",
    color: "from-emerald-600 to-teal-600"
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-20 px-4 md:px-8 lg:px-16">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Discover our handpicked selection of premium tech products designed to elevate your digital experience
          </p>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mt-6 rounded-full"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {products.map(({ id, image, title, description, color }) => (
          <div 
            key={id} 
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <Image
                src={image}
                alt={title}
                className="group-hover:scale-110 transition-transform duration-700 w-full h-80 lg:h-96 object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-2xl lg:text-3xl mb-3 leading-tight">
                  {title}
                </h3>
                <p className="text-sm lg:text-base text-gray-200 leading-relaxed mb-6 max-w-xs opacity-90">
                  {description}
                </p>
                
                {/* CTA Button */}
                <button className={`group/btn inline-flex items-center gap-2 bg-gradient-to-r ${color} px-6 py-3 rounded-full font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                  <span>Shop Now</span>
                  <Image 
                    className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
                    src={assets.redirect_icon} 
                    alt="Shop Now" 
                  />
                </button>
              </div>
            </div>

            {/* Decorative Element */}
            <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${color} rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500`}></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to upgrade your tech game?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Browse our complete collection of premium electronics and find the perfect match for your needs
        </p>
        <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          View All Products
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeaturedProduct;