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
    // { path: "/wallet", label: "Wallet", icon: Wallet },
    { path: "/account", label: "Account", icon: User },
  ];

  return (
    <footer className="sticky bottom-0 z-50 w-full px-4 pb-4 pt-0 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        {/* Glass Footer Container */}
        <div className="flex items-center justify-around px-2 py-3 rounded-2xl
                          bg-[#1e103f]/90 backdrop-blur-xl
                          shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 ring-1 ring-white/5">

          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            if (item.isCenter) {
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative -mt-10 group"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center
                                   bg-gradient-to-br from-fuchsia-500 via-purple-600 to-cyan-600
                                   shadow-[0_0_20px_rgba(217,70,239,0.4)]
                                   ring-4 ring-[#1a1033] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300"
                  >
                    <Icon size={28} className="text-white drop-shadow-md" />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-cyan-200 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg">
                    {item.label}
                  </span>
                </Link>
              )
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center w-16 transition-all duration-300
                    ${isActive
                    ? "text-cyan-400 scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                    : "text-slate-400 hover:text-slate-200"
                  }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-[10px] mt-1 font-medium ${isActive ? 'opacity-100 text-cyan-300' : 'opacity-0 translate-y-2'} transition-all duration-300`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
