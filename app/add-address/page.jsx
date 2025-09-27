'use client'
import { User, Phone, MapPin, Building2, Navigation, Save } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { assets } from "@/assets/assets";

const AddAddress = () => {
    const [address, setAddress] = useState({
        fullName: '',
        phoneNumber: '',
        pincode: '',
        area: '',
        city: '',
        state: '',
    });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // Your form submission logic here
    };

    const inputFields = [
        { 
            key: 'fullName', 
            placeholder: 'Full Name', 
            icon: User, 
            type: 'text' 
        },
        { 
            key: 'phoneNumber', 
            placeholder: 'Phone Number', 
            icon: Phone, 
            type: 'tel' 
        },
        { 
            key: 'pincode', 
            placeholder: 'Pin Code', 
            icon: Navigation, 
            type: 'text' 
        }
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                <div className="container mx-auto px-6 py-12 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Form Section */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    Add Shipping Address
                                </h1>
                                <p className="text-gray-600">Enter your delivery details below</p>
                            </div>

                            <form onSubmit={onSubmitHandler} className="space-y-6">
                                {/* Single Input Fields */}
                                {inputFields.map(({ key, placeholder, icon: Icon, type }) => (
                                    <div key={key} className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <Icon className="w-4 h-4 text-orange-600" />
                                            {placeholder}
                                        </label>
                                        <input
                                            className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:bg-white transition-all duration-200 outline-none text-gray-700"
                                            type={type}
                                            placeholder={`Enter ${placeholder.toLowerCase()}`}
                                            onChange={(e) => setAddress({ ...address, [key]: e.target.value })}
                                            value={address[key]}
                                            required
                                        />
                                    </div>
                                ))}

                                {/* Address Textarea */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Building2 className="w-4 h-4 text-orange-600" />
                                        Address (Area and Street)
                                    </label>
                                    <textarea
                                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:bg-white transition-all duration-200 outline-none text-gray-700 resize-none"
                                        rows={4}
                                        placeholder="Enter your complete address including area and street"
                                        onChange={(e) => setAddress({ ...address, area: e.target.value })}
                                        value={address.area}
                                        required
                                    />
                                </div>

                                {/* City and State Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <Building2 className="w-4 h-4 text-orange-600" />
                                            City/District/Town
                                        </label>
                                        <input
                                            className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:bg-white transition-all duration-200 outline-none text-gray-700"
                                            type="text"
                                            placeholder="Enter city"
                                            onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                            value={address.city}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <MapPin className="w-4 h-4 text-orange-600" />
                                            State
                                        </label>
                                        <input
                                            className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:bg-white transition-all duration-200 outline-none text-gray-700"
                                            type="text"
                                            placeholder="Enter state"
                                            onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                            value={address.state}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                                >
                                    <Save className="w-5 h-5" />
                                    Save Address
                                </button>
                            </form>
                        </div>

                        {/* Image Section */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
                                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                    {assets?.my_location_image ? (
                                        <Image
                                            src={assets.my_location_image}
                                            alt="Location illustration"
                                            className="w-full h-auto max-w-md"
                                            width={400}
                                            height={400}
                                        />
                                    ) : (
                                        <div className="w-96 h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                                            <MapPin className="w-24 h-24 text-orange-500" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddAddress;