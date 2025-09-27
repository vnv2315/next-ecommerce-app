"use client"
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";
import React from "react";
import { Star, ShoppingCart, Zap, Heart, Shield, Truck, RotateCcw, Award } from "lucide-react";

const Product = () => {
    const { id } = useParams();
    const { products, router, addToCart } = useAppContext()
    const [mainImage, setMainImage] = useState(null);
    const [productData, setProductData] = useState(null);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const fetchProductData = async () => {
        const product = products.find(product => product._id === id);
        setProductData(product);
    }

    useEffect(() => {
        fetchProductData();
    }, [id, products.length])

    const features = [
        { icon: Shield, text: "2 Year Warranty" },
        { icon: Truck, text: "Free Delivery" },
        { icon: RotateCcw, text: "30 Day Return" },
        { icon: Award, text: "Premium Quality" }
    ];

    return productData ? (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                <div className="container mx-auto px-6 py-12 max-w-7xl">
                    {/* Product Details Section */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
                        <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
                            {/* Image Gallery */}
                            <div className="space-y-6">
                                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 aspect-square overflow-hidden group">
                                    <Image
                                        src={mainImage || productData.image[0]}
                                        alt={productData.name}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        width={600}
                                        height={600}
                                    />
                                    <button 
                                        onClick={() => setIsWishlisted(!isWishlisted)}
                                        className={`absolute top-6 right-6 p-3 rounded-2xl transition-all duration-200 ${
                                            isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
                                        }`}
                                    >
                                        <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                                    </button>
                                </div>

                                {/* Thumbnail Gallery */}
                                <div className="grid grid-cols-4 gap-4">
                                    {productData.image.map((image, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setMainImage(image)}
                                            className={`cursor-pointer rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-4 aspect-square transition-all duration-200 hover:shadow-lg ${
                                                mainImage === image || (!mainImage && index === 0) 
                                                    ? 'ring-4 ring-violet-500 shadow-lg' 
                                                    : ''
                                            }`}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${productData.name} view ${index + 1}`}
                                                className="w-full h-full object-contain"
                                                width={150}
                                                height={150}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="space-y-8">
                                <div>
                                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                        {productData.name}
                                    </h1>
                                    
                                    {/* Rating */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    className={`w-5 h-5 ${
                                                        i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                    }`} 
                                                />
                                            ))}
                                        </div>
                                        <span className="text-gray-600 font-medium">(4.5)</span>
                                        <span className="text-sm text-gray-500">• 127 reviews</span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-4 mb-8">
                                        <span className="text-4xl font-bold text-violet-600">
                                            ${productData.offerPrice}
                                        </span>
                                        <span className="text-2xl text-gray-400 line-through">
                                            ${productData.price}
                                        </span>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                                            {Math.round(((productData.price - productData.offerPrice) / productData.price) * 100)}% OFF
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {productData.description}
                                    </p>
                                </div>

                                {/* Product Details Table */}
                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="flex justify-between py-2 border-b border-gray-200">
                                            <span className="text-gray-600 font-medium">Brand</span>
                                            <span className="text-gray-900">Generic</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-200">
                                            <span className="text-gray-600 font-medium">Color</span>
                                            <span className="text-gray-900">Multi</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-200">
                                            <span className="text-gray-600 font-medium">Category</span>
                                            <span className="text-gray-900">{productData.category}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-200">
                                            <span className="text-gray-600 font-medium">In Stock</span>
                                            <span className="text-green-600 font-semibold">Available</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 bg-violet-50 rounded-xl">
                                            <feature.icon className="w-5 h-5 text-violet-600" />
                                            <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-4">
                                    <button 
                                        onClick={() => addToCart(productData._id)} 
                                        className="flex items-center justify-center gap-3 py-4 px-6 bg-white border-2 border-violet-600 text-violet-600 rounded-2xl font-semibold hover:bg-violet-50 transition-all duration-200"
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        Add to Cart
                                    </button>
                                    <button 
                                        onClick={() => { addToCart(productData._id); router.push('/cart') }} 
                                        className="flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105"
                                    >
                                        <Zap className="w-5 h-5" />
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Products Section */}
                    <div className="text-center mb-12">
                        <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Award className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
                        <p className="text-gray-600 text-lg">Discover more amazing products you might love</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {products.slice(0, 5).map((product, index) => 
                                <ProductCard key={index} product={product} />
                            )}
                        </div>
                        
                        <div className="text-center mt-8">
                            <button 
                                onClick={() => router.push('/all-products')}
                                className="px-8 py-3 border-2 border-violet-200 text-violet-600 rounded-2xl font-semibold hover:bg-violet-50 transition-all duration-200"
                            >
                                See More Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    ) : <Loading />
};

export default Product;