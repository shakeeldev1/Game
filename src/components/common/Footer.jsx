import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home", icon: "🏠" },
    // { path: '/activity', label: 'Activity', icon: '📊' },
    { path: "/promotions", label: "Promotion", icon: "🎯", isCenter: true },
    { path: "/wallet", label: "Wallet", icon: "💰" },
    { path: "/account", label: "Account", icon: "👤" },
  ];

  return (
    <div className=" sticky bottom-0 z-1000 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="flex justify-between items-center px-6 py-3">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex flex-col items-center justify-center ${
                      isActive ? "text-[#f95c5c]" : "text-gray-500"
                    }`}
                  >
                    {item.isCenter ? (
                      <div className="flex flex-col items-center justify-center -mt-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#f95c5c] to-[#ff7b7b] flex items-center justify-center shadow-lg">
                          <span className="text-xl text-white">
                            {item.icon}
                          </span>
                        </div>
                        <span className="text-xs mt-1 font-medium">
                          {item.label}
                        </span>
                      </div>
                    ) : (
                      <>
                        <span className="text-2xl mb-1">{item.icon}</span>
                        <span className="text-xs font-medium">
                          {item.label}
                        </span>
                      </>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
