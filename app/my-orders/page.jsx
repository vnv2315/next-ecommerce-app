'use client';
import React, { useEffect, useState } from "react";
import { ShoppingBag, Package, Clock, MapPin, Phone, Calendar, CreditCard, User } from "lucide-react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

const MyOrders = () => {
    const { currency } = useAppContext();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        setOrders(orderDummyData);
        setLoading(false);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const getStatusColor = (status = "Processing") => {
        switch (status.toLowerCase()) {
            case 'delivered':
                return 'bg-green-100 text-green-800';
            case 'shipping':
                return 'bg-blue-100 text-blue-800';
            case 'processing':
                return 'bg-yellow-100 text-yellow-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                <div className="container mx-auto px-6 py-12 max-w-6xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Orders</h1>
                        <p className="text-gray-600 text-lg">Track and manage your order history</p>
                    </div>

                    {loading ? (
                        <Loading />
                    ) : (
                        <div className="space-y-6">
                            {orders.length === 0 ? (
                                <div className="bg-white rounded-3xl shadow-xl p-16 text-center">
                                    <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">No Orders Yet</h3>
                                    <p className="text-gray-500 mb-8">You haven't placed any orders yet. Start shopping to see your orders here!</p>
                                    <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-200">
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                orders.map((order, index) => (
                                    <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-200">
                                        <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-6 text-white">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    <Package className="w-6 h-6" />
                                                    <div>
                                                        <h3 className="font-semibold text-lg">Order #{index + 1}</h3>
                                                        <p className="text-violet-100 text-sm">
                                                            {order.items.length} item{order.items.length > 1 ? 's' : ''}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-2xl font-bold">{currency}{order.amount}</div>
                                                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor('Processing')}`}>
                                                        <Clock className="w-3 h-3 mr-1" />
                                                        Processing
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {/* Order Items */}
                                                <div className="md:col-span-2">
                                                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                        <Package className="w-4 h-4 text-violet-600" />
                                                        Order Items
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {order.items.map((item, itemIndex) => (
                                                            <div key={itemIndex} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                                                                <div className="w-16 h-16 bg-white rounded-lg p-2">
                                                                    <Image
                                                                        src={assets.box_icon}
                                                                        alt="product"
                                                                        className="w-full h-full object-contain"
                                                                        width={64}
                                                                        height={64}
                                                                    />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <h5 className="font-medium text-gray-900">
                                                                        {item.product.name}
                                                                    </h5>
                                                                    <p className="text-sm text-gray-600">
                                                                        Quantity: {item.quantity}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Delivery Info */}
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                        <MapPin className="w-4 h-4 text-violet-600" />
                                                        Delivery Details
                                                    </h4>
                                                    <div className="space-y-3">
                                                        <div className="p-4 bg-gray-50 rounded-xl space-y-2">
                                                            <div className="flex items-start gap-2">
                                                                <User className="w-4 h-4 text-gray-500 mt-0.5" />
                                                                <div>
                                                                    <p className="font-medium text-gray-900">
                                                                        {order.address.fullName}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-2">
                                                                <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                                                                <div className="text-sm text-gray-600">
                                                                    <p>{order.address.area}</p>
                                                                    <p>{order.address.city}, {order.address.state}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Phone className="w-4 h-4 text-gray-500" />
                                                                <span className="text-sm text-gray-600">
                                                                    {order.address.phoneNumber}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Order Info */}
                                                        <div className="p-4 bg-blue-50 rounded-xl space-y-2 text-sm">
                                                            <div className="flex items-center gap-2">
                                                                <CreditCard className="w-4 h-4 text-blue-600" />
                                                                <span className="text-blue-800 font-medium">Cash on Delivery</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Calendar className="w-4 h-4 text-blue-600" />
                                                                <span className="text-blue-800">
                                                                    {new Date(order.date).toLocaleDateString('en-US', { 
                                                                        year: 'numeric', 
                                                                        month: 'long', 
                                                                        day: 'numeric' 
                                                                    })}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Clock className="w-4 h-4 text-blue-600" />
                                                                <span className="text-blue-800">Payment Pending</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
                                                <button className="flex-1 px-6 py-3 bg-violet-100 text-violet-700 rounded-xl font-medium hover:bg-violet-200 transition-colors duration-200">
                                                    Track Order
                                                </button>
                                                <button className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:border-gray-300 transition-colors duration-200">
                                                    Contact Seller
                                                </button>
                                                <button className="flex-1 px-6 py-3 border-2 border-red-200 text-red-600 rounded-xl font-medium hover:border-red-300 transition-colors duration-200">
                                                    Cancel Order
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyOrders;