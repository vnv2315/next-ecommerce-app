'use client'
import React from "react";
import OrderSummary from "@/components/OrderSummary";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useAppContext } from "@/context/AppContext";
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, Package } from "lucide-react";

const Cart = () => {
  const { products, router, cartItems, addToCart, updateCartQuantity, getCartCount } = useAppContext();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 py-12 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Shopping Cart</h1>
            <p className="text-gray-600 text-lg">{getCartCount()} items ready for checkout</p>
          </div>

          <div className="grid xl:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="space-y-8">
                  {Object.keys(cartItems).length === 0 ? (
                    <div className="text-center py-16">
                      <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h3>
                      <p className="text-gray-500 mb-8">Add some amazing products to get started</p>
                      <button 
                        onClick={() => router.push('/all-products')}
                        className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105"
                      >
                        Start Shopping
                      </button>
                    </div>
                  ) : (
                    Object.keys(cartItems).map((itemId) => {
                      const product = products.find(product => product._id === itemId);

                      if (!product || cartItems[itemId] <= 0) return null;

                      return (
                        <div key={itemId} className="group border-b border-gray-100 last:border-0 pb-8 last:pb-0">
                          <div className="flex flex-col lg:flex-row gap-6">
                            {/* Product Image */}
                            <div className="flex-shrink-0">
                              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 group-hover:shadow-lg transition-all duration-200">
                                <Image
                                  src={product.image[0]}
                                  alt={product.name}
                                  className="w-full h-full object-contain"
                                  width={400}
                                  height={400}
                                />
                              </div>
                            </div>

                            {/* Product Details */}
                            <div className="flex-1 space-y-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                                  <p className="text-2xl font-bold text-violet-600">${product.offerPrice}</p>
                                </div>
                                <button
                                  onClick={() => updateCartQuantity(product._id, 0)}
                                  className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </div>

                              {/* Quantity Controls */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="text-sm font-medium text-gray-600">Quantity:</span>
                                  <div className="flex items-center bg-gray-100 rounded-2xl p-1">
                                    <button 
                                      onClick={() => updateCartQuantity(product._id, cartItems[itemId] - 1)}
                                      className="p-2 hover:bg-white rounded-xl transition-all duration-200"
                                    >
                                      <Minus className="w-4 h-4 text-gray-600" />
                                    </button>
                                    <span className="mx-4 font-semibold text-lg min-w-[2rem] text-center">
                                      {cartItems[itemId]}
                                    </span>
                                    <button 
                                      onClick={() => addToCart(product._id)}
                                      className="p-2 hover:bg-white rounded-xl transition-all duration-200"
                                    >
                                      <Plus className="w-4 h-4 text-gray-600" />
                                    </button>
                                  </div>
                                </div>

                                {/* Subtotal */}
                                <div className="text-right">
                                  <p className="text-sm text-gray-500">Subtotal</p>
                                  <p className="text-xl font-bold text-gray-900">
                                    ${(product.offerPrice * cartItems[itemId]).toFixed(2)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Continue Shopping Button */}
                {Object.keys(cartItems).length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <button 
                      onClick={() => router.push('/all-products')} 
                      className="group flex items-center gap-3 text-violet-600 hover:text-violet-700 font-semibold transition-all duration-200"
                    >
                      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                      Continue Shopping
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="xl:col-span-1">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;