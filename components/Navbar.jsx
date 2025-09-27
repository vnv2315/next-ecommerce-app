"use client"
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton, useUser } from "@clerk/nextjs";
import { Menu, X, Settings } from "lucide-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user: contextUser, isSignedIn: contextSignedIn } = useUser(); // Use Clerk's user state directly
  const { isSeller, router } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Debug: Log the user states
  console.log("Context User:", contextUser);
  console.log("Is Signed In:", contextSignedIn);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-products", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <h1
                className="cursor-pointer font-bold text-2xl md:text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                onClick={() => router.push("/")}
              >
                vnv
              </h1>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center space-x-4">
              
              {/* Search Button */}
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200">
                <Image
                  src={assets.search_icon}
                  alt="search icon"
                  width={20}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </button>

              {/* Seller Dashboard Button */}
              {isSeller && (
                <button
                  onClick={() => router.push("/seller")}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 border border-purple-200 rounded-full hover:bg-purple-100 hover:border-purple-300 transition-all duration-200"
                >
                  <Settings size={16} />
                  Seller Dashboard
                </button>
              )}

              {/* User Authentication */}
              {contextSignedIn ? (
                <div className="flex items-center">
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <button 
                  onClick={openSignIn} 
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Image
                    src={assets.user_icon}
                    alt="user icon"
                    width={16}
                    height={16}
                    className="filter brightness-0 invert"
                  />
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile Seller Button */}
              {isSeller && (
                <button
                  onClick={() => router.push("/seller")}
                  className="p-2 text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200"
                >
                  <Settings size={18} />
                </button>
              )}
              
              {/* Mobile User Button */}
              {contextSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <button 
                  onClick={openSignIn} 
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
                >
                  <Image
                    src={assets.user_icon}
                    alt="user icon"
                    width={18}
                    height={18}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </button>
              )}

              {/* Hamburger Menu */}
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Search */}
            <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200">
              <Image
                src={assets.search_icon}
                alt="search icon"
                width={18}
                height={18}
                className="opacity-70"
              />
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;