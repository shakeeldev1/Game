import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaBullhorn,
  FaWallet,
  FaUser,
} from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home', icon: FaHome },
    {
      path: '/agency',
      label: 'Promotion',
      icon: FaBullhorn,
      isCenter: true,
    },
    { path: '/wallet', label: 'Wallet', icon: FaWallet },
    { path: '/login', label: 'Account', icon: FaUser },
  ];

  return (
    <div className="sticky bg-white bottom-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 pb-3">
        <div className="flex justify-center">
          <div className="w-full max-w-md relative">

            {/* Glass Footer */}
            <div className="flex justify-between items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-xl shadow-lg border border-white/40">

              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex flex-col items-center flex-1"
                  >
                    {item.isCenter ? (
                      <div className="-mt-10 flex flex-col items-center">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition ${
                            isActive
                              ? 'bg-gradient-to-tr from-yellow-400 to-orange-500 scale-105'
                              : 'bg-gradient-to-tr from-yellow-300 to-orange-400'
                          }`}
                        >
                          <Icon className="text-white text-xl" />
                        </div>
                        <span
                          className={`mt-1 text-xs font-semibold ${
                            isActive ? 'text-orange-500' : 'text-gray-500'
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                    ) : (
                      <>
                        <Icon
                          className={`text-xl mb-1 transition ${
                            isActive
                              ? 'text-orange-500 scale-110'
                              : 'text-gray-400'
                          }`}
                        />
                        <span
                          className={`text-xs font-medium ${
                            isActive ? 'text-orange-500' : 'text-gray-500'
                          }`}
                        >
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
