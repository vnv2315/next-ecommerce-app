import React, { useEffect, useState } from "react";
import { ChevronDown, Plus, MapPin, Tag, Package, CreditCard, ShoppingBag } from 'lucide-react';
import { addressDummyData } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";

const OrderSummary = () => {
  const { currency, router, getCartCount, getCartAmount } = useAppContext();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [userAddresses, setUserAddresses] = useState([]);

  const fetchUserAddresses = async () => {
    setUserAddresses(addressDummyData);
  };

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  const createOrder = async () => {
    // Your order creation logic here
  };

  useEffect(() => {
    fetchUserAddresses();
  }, []);

  const cartAmount = getCartAmount();
  const tax = Math.floor(cartAmount * 0.02);
  const total = cartAmount + tax;

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
        <div className="flex items-center gap-3">
          <ShoppingBag className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Order Summary</h2>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Address Selection */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <MapPin className="w-4 h-4" />
            Delivery Address
          </label>
          <div className="relative">
            <button
              className="w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-xl border border-gray-200 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-gray-700 text-sm">
                {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}`
                  : "Select delivery address"}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-2 z-20 py-2 max-h-48 overflow-y-auto">
                {userAddresses.map((address, index) => (
                  <button
                    key={index}
                    className="w-full px-4 py-3 hover:bg-gray-50 transition-colors duration-150 text-left text-sm text-gray-700"
                    onClick={() => handleAddressSelect(address)}
                  >
                    {address.fullName}, {address.area}, {address.city}, {address.state}
                  </button>
                ))}
                <button
                  onClick={() => router.push("/add-address")}
                  className="w-full px-4 py-3 hover:bg-orange-50 transition-colors duration-150 text-orange-600 text-sm flex items-center gap-2 justify-center font-medium"
                >
                  <Plus className="w-4 h-4" />
                  Add New Address
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Promo Code */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Tag className="w-4 h-4" />
            Promo Code
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 focus:bg-white transition-all duration-200 text-sm"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-xl">
              Apply
            </button>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-sm text-gray-600">
              <Package className="w-4 h-4" />
              Items ({getCartCount()})
            </span>
            <span className="text-sm font-medium text-gray-900">{currency}{cartAmount.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Shipping Fee</span>
            <span className="text-sm font-medium text-green-600">Free</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Tax (2%)</span>
            <span className="text-sm font-medium text-gray-900">{currency}{tax}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-base font-semibold text-gray-900">Total</span>
              <span className="text-lg font-bold text-gray-900">{currency}{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <button 
          onClick={createOrder} 
          className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex items-center justify-center gap-2">
            <CreditCard className="w-5 h-5" />
            Place Order
          </div>
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;