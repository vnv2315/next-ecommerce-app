import React from "react";
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              {/* You can replace this with your actual logo */}
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">vnv</span>
              </div>
              {/* If you have assets.logo, uncomment the line below and remove the div above */}
              {/* <Image className="w-10 h-10" src={assets.logo} alt="logo" /> */}
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>
            <p className="text-sm text-gray-600 text-center">
              Copyright 2025 © vnv.dev - All Rights Reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors duration-200 shadow-sm hover:shadow-md group"
            >
              <Facebook className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors duration-200 shadow-sm hover:shadow-md group"
            >
              <Twitter className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors duration-200" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pink-50 transition-colors duration-200 shadow-sm hover:shadow-md group"
            >
              <Instagram className="w-4 h-4 text-gray-600 group-hover:text-pink-600 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;