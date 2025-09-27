import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";
import { TrendingUp, Zap, ArrowRight } from "lucide-react";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  return (
    <div className="flex flex-col items-center pt-20 px-4 md:px-8 lg:px-16">
      
      {/* Section Header */}
      <div className="w-full max-w-7xl mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Title Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Popular Products
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover our most loved products, handpicked by thousands of satisfied customers worldwide
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{products?.length || 0}+</div>
              <div className="text-sm text-gray-500">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4.8★</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">10k+</div>
              <div className="text-sm text-gray-500">Reviews</div>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-8"></div>
      </div>

      {/* Products Grid */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
          {products?.map((product, index) => (
            <div 
              key={index}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {(!products || products.length === 0) && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Products Found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We're working hard to bring you amazing products. Check back soon!
            </p>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="w-full max-w-4xl mt-16 p-8 bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 rounded-2xl border border-orange-100">
        <div className="text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Ready to explore more amazing products?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our complete collection and discover exclusive deals on premium electronics, gaming gear, and cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => { router.push('/all-products') }} 
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>New arrivals added weekly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories Preview */}
      <div className="w-full max-w-7xl mt-20">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Shop by Category
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Audio", icon: "🎧", color: "from-purple-400 to-pink-400" },
            { name: "Gaming", icon: "🎮", color: "from-blue-400 to-indigo-400" },
            { name: "Laptops", icon: "💻", color: "from-green-400 to-emerald-400" },
            { name: "Accessories", icon: "📱", color: "from-orange-400 to-red-400" }
          ].map((category, index) => (
            <div 
              key={index}
              className={`group p-6 bg-gradient-to-br ${category.color} rounded-xl text-white text-center cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <div className="font-semibold">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;