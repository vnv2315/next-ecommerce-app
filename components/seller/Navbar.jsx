import React from 'react';
import { LogOut } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const Navbar = () => {
  const { router } = useAppContext();

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            className="flex items-center gap-3 group"
            onClick={() => router.push("/")}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-200">
              <span className="text-white font-bold text-lg">vnv</span>
            </div>
          </button>

          {/* Logout Button */}
          <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-xl">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;