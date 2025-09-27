import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import { Heart, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { currency, router } = useAppContext();
    const [isWishlisted, setIsWishlisted] = useState(false);
    
    // Calculate discount percentage
    const originalPrice = product.price || product.offerPrice * 1.3;
    const discountPercentage = Math.round(((originalPrice - product.offerPrice) / originalPrice) * 100);
    
    const handleWishlistClick = (e) => {
        e.stopPropagation();
        setIsWishlisted(!isWishlisted);
    };

    return (
        <div
            onClick={() => { 
                router.push('/product/' + product._id); 
                scrollTo(0, 0);
            }}
            className="group bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
        >
            {/* Product Image Container */}
            <div className="relative aspect-square bg-gray-50">
                
                {/* Discount Badge */}
                {discountPercentage > 0 && (
                    <div className="absolute top-2 left-2 z-10 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                        {discountPercentage}% OFF
                    </div>
                )}
                
                {/* Wishlist Button */}
                <button
                    onClick={handleWishlistClick}
                    className={`absolute top-2 right-2 z-10 p-2 rounded-full ${
                        isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-400 hover:text-red-500'
                    }`}
                >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                
                {/* Product Image */}
                <div className="w-full h-full flex items-center justify-center p-4">
                    <Image
                        src={product.image[0]}
                        alt={product.name}
                        className="object-contain w-full h-full"
                        width={200}
                        height={200}
                    />
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                {/* Product Name */}
                <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                    {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                className={`w-3 h-3 ${
                                    index < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">4.5 (128)</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-lg font-bold text-gray-900">
                            {currency}{product.offerPrice}
                        </span>
                        {originalPrice > product.offerPrice && (
                            <span className="text-sm text-gray-400 line-through ml-2">
                                {currency}{originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;