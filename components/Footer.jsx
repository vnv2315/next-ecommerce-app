import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Shop", href: "/all-products" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="font-bold text-4xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent cursor-pointer hover:from-purple-300 hover:to-blue-300 transition-all duration-300">
                vnv
              </h1>
              <p className="text-gray-400 mt-4 text-lg">
                Your premium destination for cutting-edge technology
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Discover the latest in premium electronics, from immersive audio experiences to powerful gaming peripherals. We curate only the finest tech products to elevate your digital lifestyle.
            </p>
            
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"></span>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"></span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1-234-567-890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>contact@vnv.dev</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <span>123 Tech Street<br />Innovation City, IC 12345</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-lg transform hover:scale-110 transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright {currentYear} © vnv.dev - All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;