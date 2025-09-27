import React from 'react';
import Link from 'next/link';
import { Plus, FileText, ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const pathname = usePathname();
  
  const menuItems = [
    { name: 'Add Product', path: '/seller', icon: Plus },
    { name: 'Product List', path: '/seller/product-list', icon: FileText },
    { name: 'Orders', path: '/seller/orders', icon: ShoppingCart },
  ];

  return (
    <div className="w-16 md:w-64 bg-white border-r border-gray-200 min-h-screen shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="hidden md:block">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Dashboard
          </h3>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="p-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link href={item.path} key={item.name} passHref>
              <div
                className={`w-full flex items-center gap-3 p-3 mb-2 rounded-xl transition-all duration-200 group cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-50 hover:text-orange-600"
                }`}
              >
                <Icon 
                  className={`w-5 h-5 ${
                    isActive 
                      ? "text-white" 
                      : "text-gray-500 group-hover:text-orange-600"
                  }`} 
                />
                <span className="hidden md:block text-sm font-medium">
                  {item.name}
                </span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full opacity-80 hidden md:block"></div>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default SideBar;