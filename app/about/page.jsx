import React from 'react';
import Link from "next/link";
import { Shield, Truck, Heart, Users, Award, Globe, Target, Zap } from 'lucide-react';

const AboutUsPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best experience for our customers."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We maintain the highest standards in product quality and service delivery."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously evolving our platform with cutting-edge technology and features."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with reliable shipping and localized support."
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "1M+", label: "Products Sold" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Customer Support" }
  ];

  const team = [
    {
      name: "Vishnu N V",
      role: "Chief Executive Officer",
      description: "15+ years of experience in e-commerce and technology leadership.",
      avatar: "VNV"
    },
    {
      name: "Sidharth N V",
      role: "Chief Technology Officer",
      description: "Expert in full-stack development and cloud infrastructure.",
      avatar: "SNV"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      description: "Dedicated to ensuring exceptional customer experiences.",
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "Head of Operations",
      description: "Streamlining operations for efficient order fulfillment.",
      avatar: "DK"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About VNV
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about creating exceptional e-commerce experiences that connect people with the products they love, powered by modern technology and genuine care.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2023, VNV began with a simple vision: to create an e-commerce platform that truly puts customers first. We noticed that many online shopping experiences were becoming increasingly impersonal and complicated.
                </p>
                <p>
                  Our team of passionate developers and designers came together to build something different. Using modern technologies like Next.js, MongoDB, and cloud-based infrastructure, we created a platform that's not just functional, but delightful to use.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers worldwide, offering a seamless shopping experience backed by reliable technology and genuine human support.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="text-center">
                <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To democratize e-commerce by providing businesses and entrepreneurs with powerful, accessible tools to build their online presence and connect with customers globally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from product development to customer support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-lg text-gray-600">
                Numbers that showcase our commitment to excellence and growth.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind VNV who make everything possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{member.avatar}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Powered by Modern Technology</h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Our platform is built using cutting-edge technologies to ensure reliability, scalability, and exceptional performance.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Next.js", desc: "React Framework" },
                { name: "MongoDB", desc: "Database" },
                { name: "Clerk", desc: "Authentication" },
                { name: "Inngest", desc: "Background Jobs" },
                { name: "Cloudinary", desc: "Image Storage" },
                { name: "Vercel", desc: "Deployment" }
              ].map((tech, index) => (
                <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 text-center backdrop-blur-sm">
                  <div className="font-bold mb-1">{tech.name}</div>
                  <div className="text-sm opacity-80">{tech.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose VNV?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've designed our platform with features that matter most to modern businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Fast & Reliable Shipping",
                description: "Quick processing and reliable delivery partners ensure your products reach customers on time."
              },
              {
                icon: Shield,
                title: "Secure Transactions",
                description: "Enterprise-grade security with encrypted payments and secure data handling."
              },
              {
                icon: Users,
                title: "24/7 Customer Support",
                description: "Our dedicated support team is always ready to help with any questions or concerns."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="max-w-2xl mx-auto">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of satisfied customers who trust VNV for their online shopping needs. Experience the difference that modern technology and genuine care can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href='/' className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Start Shopping
                </Link>
                <Link href='/contact' className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;