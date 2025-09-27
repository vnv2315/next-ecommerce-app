import React, { useState } from "react";
import { Mail, Gift, CheckCircle, Sparkles } from "lucide-react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome to the VNV Family! 🎉
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for subscribing! Check your email for your exclusive 20% discount code.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold">
            <Gift className="w-5 h-5" />
            Discount code sent!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-16 px-4 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-red-200/30 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="space-y-6 mb-10">
          
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
          </div>
          
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
              Subscribe Now & Get 20% Off
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join thousands of tech enthusiasts and be the first to know about exclusive deals, new arrivals, and insider tech tips!
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { icon: "🎁", text: "Exclusive Discounts" },
              { icon: "⚡", text: "Early Access" },
              { icon: "📧", text: "Weekly Tech Tips" },
              { icon: "🔥", text: "Flash Sale Alerts" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md backdrop-blur-sm">
                <span className="text-lg">{benefit.icon}</span>
                <span className="text-gray-700 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20">
            
            {/* Email Input */}
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-4 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-lg rounded-xl focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                required
              />
            </div>
            
            {/* Subscribe Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Get 20% Off</span>
                </div>
              )}
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No spam, unsubscribe anytime</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Join 50,000+ subscribers</span>
            </div>
          </div>
        </form>

        {/* Social Proof */}
        <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
          <p className="text-sm text-gray-500 mb-4">Trusted by tech enthusiasts worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            {/* Placeholder for brand logos or testimonials */}
            <div className="text-2xl">⭐⭐⭐⭐⭐</div>
            <div className="text-sm font-medium text-gray-600">
              4.9/5 from 10,000+ reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;