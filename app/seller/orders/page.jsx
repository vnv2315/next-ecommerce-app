'use client';
import React, { useEffect, useState } from "react";
import { ShoppingBag, Package, Clock, MapPin, Phone, Calendar, CreditCard, User, Eye, CheckCircle, XCircle } from "lucide-react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";

const Orders = () => {
    const { currency } = useAppContext();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    const fetchSellerOrders = async () => {
        setOrders(orderDummyData);
        setLoading(false);
    };

    useEffect(() => {
        fetchSellerOrders();
    }, []);

    const getStatusColor = (status = "Processing") => {
        switch (status.toLowerCase()) {
            case 'delivered':
                return 'bg-green-100 text-green-800';
            case 'shipped':
                return 'bg-blue-100 text-blue-800';
            case 'processing':
                return 'bg-yellow-100 text-yellow-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const updateOrderStatus = (orderId, newStatus) => {
        // Your order status update logic here
        console.log(`Updating order ${orderId} to ${newStatus}`);
    };

    const filteredOrders = orders.filter(order => {
        if (filter === 'all') return true;
        return order.status?.toLowerCase() === filter || 'processing' === filter;
    });

    return (
        <div className="flex-1 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="p-6 lg:p-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                <ShoppingBag className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900">Seller Orders</h1>
                        </div>
                        <p className="text-gray-600">Manage and track all your customer orders</p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex bg-white rounded-2xl p-1 shadow-lg">
                        {['all', 'processing', 'shipped', 'delivered'].map((status) => (
                            <button
                                key={status}
                                onClick={() => setFilter(status)}
                                className={`px-6 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
                                    filter === status
                                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-violet-600 hover:bg-violet-50'
                                }`}
                            >
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <Loading />
                ) : (
                    <div className="space-y-6">
                        {filteredOrders.length === 0 ? (
                            <div className="bg-white rounded-3xl shadow-xl p-16 text-center">
                                <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                                <h3 className="text-2xl font-semibold text-gray-700 mb-4">No Orders Found</h3>
                                <p className="text-gray-500">No orders match the selected filter criteria.</p>
                            </div>
                        ) : (
                            filteredOrders.map((order, index) => (
                                <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-200">
                                    <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-6 text-white">
                                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                                    <Package className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg">Order #{index + 1000}</h3>
                                                    <p className="text-violet-100 text-sm">
                                                        {order.items.length} item{order.items.length > 1 ? 's' : ''} • {new Date(order.date).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right">
                                                    <div className="text-2xl font-bold">{currency}{order.amount}</div>
                                                    <div className="text-violet-100 text-sm">Total Amount</div>
                                                </div>
                                                <div className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor('Processing')}`}>
                                                    Processing
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="grid lg:grid-cols-3 gap-6">
                                            {/* Order Items */}
                                            <div className="lg:col-span-1">
                                                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                    <Package className="w-4 h-4 text-violet-600" />
                                                    Items Ordered
                                                </h4>
                                                <div className="space-y-3">
                                                    {order.items.map((item, itemIndex) => (
                                                        <div key={itemIndex} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                                            <div className="w-12 h-12 bg-white rounded-lg p-2">
                                                                <Image
                                                                    src={assets.box_icon}
                                                                    alt="product"
                                                                    className="w-full h-full object-contain"
                                                                    width={48}
                                                                    height={48}
                                                                />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="font-medium text-gray-900 text-sm truncate">
                                                                    {item.product.name}
                                                                </p>
                                                                <p className="text-xs text-gray-600">
                                                                    Qty: {item.quantity}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Customer Info */}
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                    <User className="w-4 h-4 text-violet-600" />
                                                    Customer Details
                                                </h4>
                                                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
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
                                            </div>

                                            {/* Order Actions */}
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                    <CreditCard className="w-4 h-4 text-violet-600" />
                                                    Order Actions
                                                </h4>
                                                <div className="space-y-3">
                                                    <div className="bg-blue-50 rounded-xl p-4 text-sm">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <Calendar className="w-4 h-4 text-blue-600" />
                                                            <span className="font-medium text-blue-900">Order Info</span>
                                                        </div>
                                                        <div className="space-y-1 text-blue-800">
                                                            <p>Payment: Cash on Delivery</p>
                                                            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                                                            <p>Status: Payment Pending</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <button 
                                                            onClick={() => updateOrderStatus(index, 'shipped')}
                                                            className="flex items-center justify-center gap-2 px-3 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-xl text-sm font-medium transition-colors duration-200"
                                                        >
                                                            <CheckCircle className="w-4 h-4" />
                                                            Ship
                                                        </button>
                                                        <button 
                                                            onClick={() => updateOrderStatus(index, 'cancelled')}
                                                            className="flex items-center justify-center gap-2 px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-xl text-sm font-medium transition-colors duration-200"
                                                        >
                                                            <XCircle className="w-4 h-4" />
                                                            Cancel
                                                        </button>
                                                    </div>
                                                    
                                                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-violet-100 hover:bg-violet-200 text-violet-700 rounded-xl font-medium transition-colors duration-200">
                                                        <Eye className="w-4 h-4" />
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Orders;