'use client'
import { Package, Grid3X3, Filter } from 'lucide-react';
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {
    const { products } = useAppContext();

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                <div className="container mx-auto px-6 py-12 max-w-7xl">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <Package className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
                        <p className="text-gray-600 text-lg">Discover our complete collection of amazing products</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full mx-auto mt-4"></div>
                    </div>

                    {/* Filter Bar */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <Grid3X3 className="w-5 h-5 text-violet-600" />
                                <span className="text-gray-700 font-medium">
                                    Showing {products.length} products
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Filter className="w-5 h-5 text-gray-500" />
                                <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-100 outline-none transition-all duration-200">
                                    <option>Sort by: Featured</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest First</option>
                                    <option>Most Popular</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="bg-white rounded-3xl shadow-xl p-8">
                        {products.length === 0 ? (
                            <div className="text-center py-16">
                                <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                                <h3 className="text-2xl font-semibold text-gray-700 mb-4">No Products Found</h3>
                                <p className="text-gray-500">We're working on adding more amazing products for you!</p>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                    {products.map((product, index) => (
                                        <div key={index} className="group">
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>

                                {/* Load More Button */}
                                <div className="text-center mt-12">
                                    <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                        Load More Products
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        {[
                            { label: 'Total Products', value: products.length, color: 'from-blue-500 to-blue-600' },
                            { label: 'Categories', value: '8+', color: 'from-green-500 to-green-600' },
                            { label: 'Happy Customers', value: '10K+', color: 'from-purple-500 to-purple-600' },
                            { label: 'Orders Delivered', value: '25K+', color: 'from-orange-500 to-orange-600' }
                        ].map((stat, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                                    <Package className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-gray-600 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllProducts;