'use client'
import React, { useEffect, useState } from "react";
import { Package, ExternalLink, Edit3, Trash2, Eye, Search, Filter, Plus } from "lucide-react";
import { assets, productsDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";

const ProductList = () => {
    const { router } = useAppContext();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const fetchSellerProduct = async () => {
        setProducts(productsDummyData);
        setLoading(false);
    };

    useEffect(() => {
        fetchSellerProduct();
    }, []);

    const categories = ['all', ...new Set(products.map(product => product.category))];
    
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    const deleteProduct = (productId) => {
        // Your delete product logic here
        console.log(`Deleting product ${productId}`);
    };

    return (
        <div className="flex-1 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
            <div className="flex-1 p-6 lg:p-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                <Package className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900">Product List</h1>
                        </div>
                        <p className="text-gray-600">Manage all your products in one place</p>
                    </div>

                    <button 
                        onClick={() => router.push('/seller')}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <Plus className="w-5 h-5" />
                        Add New Product
                    </button>
                </div>

                {/* Search and Filter Bar */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-100 outline-none transition-all duration-200"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <Filter className="w-5 h-5 text-gray-500" />
                            <select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-100 outline-none transition-all duration-200"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                        <span>Showing {filteredProducts.length} of {products.length} products</span>
                        <span>Total inventory value: ${products.reduce((sum, p) => sum + p.offerPrice, 0).toLocaleString()}</span>
                    </div>
                </div>

                {loading ? (
                    <Loading />
                ) : (
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                        {filteredProducts.length === 0 ? (
                            <div className="p-16 text-center">
                                <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                                <h3 className="text-2xl font-semibold text-gray-700 mb-4">No Products Found</h3>
                                <p className="text-gray-500 mb-8">
                                    {searchTerm || categoryFilter !== 'all' 
                                        ? 'No products match your search criteria.' 
                                        : 'Start by adding your first product to get started.'
                                    }
                                </p>
                                {!searchTerm && categoryFilter === 'all' && (
                                    <button 
                                        onClick={() => router.push('/seller')}
                                        className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
                                    >
                                        Add Your First Product
                                    </button>
                                )}
                            </div>
                        ) : (
                            <>
                                {/* Desktop Table View */}
                                <div className="hidden lg:block overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                                            <tr>
                                                <th className="text-left px-6 py-4 font-semibold text-gray-700">Product</th>
                                                <th className="text-left px-6 py-4 font-semibold text-gray-700">Category</th>
                                                <th className="text-left px-6 py-4 font-semibold text-gray-700">Price</th>
                                                <th className="text-left px-6 py-4 font-semibold text-gray-700">Status</th>
                                                <th className="text-center px-6 py-4 font-semibold text-gray-700">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {filteredProducts.map((product, index) => (
                                                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-2 flex-shrink-0">
                                                                <Image
                                                                    src={product.image[0]}
                                                                    alt={product.name}
                                                                    className="w-full h-full object-contain"
                                                                    width={64}
                                                                    height={64}
                                                                />
                                                            </div>
                                                            <div className="min-w-0 flex-1">
                                                                <p className="font-semibold text-gray-900 truncate">
                                                                    {product.name}
                                                                </p>
                                                                <p className="text-sm text-gray-600 truncate">
                                                                    ID: #{product._id.slice(-6).toUpperCase()}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">
                                                            {product.category}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div>
                                                            <p className="font-bold text-gray-900">${product.offerPrice}</p>
                                                            {product.price > product.offerPrice && (
                                                                <p className="text-sm text-gray-500 line-through">${product.price}</p>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                                            In Stock
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center justify-center gap-2">
                                                            <button
                                                                onClick={() => router.push(`/product/${product._id}`)}
                                                                className="p-2 text-violet-600 hover:bg-violet-100 rounded-xl transition-colors duration-200"
                                                                title="View Product"
                                                            >
                                                                <Eye className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                className="p-2 text-blue-600 hover:bg-blue-100 rounded-xl transition-colors duration-200"
                                                                title="Edit Product"
                                                            >
                                                                <Edit3 className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={() => deleteProduct(product._id)}
                                                                className="p-2 text-red-600 hover:bg-red-100 rounded-xl transition-colors duration-200"
                                                                title="Delete Product"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Mobile Card View */}
                                <div className="lg:hidden p-6 space-y-4">
                                    {filteredProducts.map((product, index) => (
                                        <div key={index} className="bg-gray-50 rounded-2xl p-4">
                                            <div className="flex items-start gap-4">
                                                <div className="w-20 h-20 bg-white rounded-xl p-2 flex-shrink-0">
                                                    <Image
                                                        src={product.image[0]}
                                                        alt={product.name}
                                                        className="w-full h-full object-contain"
                                                        width={80}
                                                        height={80}
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-gray-900 truncate mb-1">
                                                        {product.name}
                                                    </h3>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded-full">
                                                            {product.category}
                                                        </span>
                                                        <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                                            In Stock
                                                        </span>
                                                    </div>
                                                    <p className="font-bold text-lg text-gray-900">${product.offerPrice}</p>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <button
                                                        onClick={() => router.push(`/product/${product._id}`)}
                                                        className="p-2 text-violet-600 hover:bg-violet-100 rounded-xl transition-colors duration-200"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => deleteProduct(product._id)}
                                                        className="p-2 text-red-600 hover:bg-red-100 rounded-xl transition-colors duration-200"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ProductList;