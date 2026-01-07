import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Wallet, User, Target } from "lucide-react";

const Footer = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home", icon: Home },
    {
      path: "/promotions",
      label: "Promotion",
      icon: Target,
      isCenter: true,
    },
    { path: "/wallet", label: "Wallet", icon: Wallet },
    { path: "/login", label: "Account", icon: User },
  ];

  return (
    <footer className="sticky bg-white bottom-0 z-50">
      <div className="max-w-md mx-auto ">
        <div className="relative">

          {/* Glass Footer */}
          <div className="flex items-center justify-between px-5 py-2 rounded-2xl
                          bg-white/80 backdrop-blur-xl
                          shadow-xl border border-white/40">

            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-label={item.label}
                  className={`flex flex-col items-center justify-center transition-all duration-200
                    ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-500 hover:text-orange-500"
                    }`}
                >
                  {item.isCenter ? (
                    <div className="flex flex-col items-center -mt-8">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center
                                   bg-gradient-to-tr from-yellow-400 to-orange-500
                                   shadow-lg shadow-orange-300/40
                                   ring-4 ring-white"
                      >
                        <Icon size={22} className="text-white" />
                      </div>
                      <span className="text-xs mt-1 font-semibold text-gray-700">
                        {item.label}
                      </span>
                    </div>
                  ) : (
                    <>
                      <Icon size={22} />
                      <span className="text-xs mt-1 font-medium">
                        {item.label}
                      </span>

                      {/* Active dot */}
                      {isActive && (
                        <span className="mt-1 h-1 w-1 rounded-full bg-orange-500" />
                      )}
                    </>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
