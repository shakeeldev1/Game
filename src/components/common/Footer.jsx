import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Wallet, User, Target, Sparkles } from "lucide-react";

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
    { path: "/login", label: "Account", icon: User },
  ];

  return (
    <footer className="sticky bottom-0 z-50 w-full px-4 pb-4 pt-0 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        {/* Glass Footer Container */}
        <div className="relative flex items-center justify-around px-3 py-3 rounded-2xl
                          bg-gradient-to-b from-[#232529]/95 to-[#1A1C20]/98 backdrop-blur-2xl
                          shadow-[0_-10px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(240,165,0,0.1)]
                          border border-[#CF7500]/20
                          before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-[#F0A500]/5 before:via-transparent before:to-[#CF7500]/5 before:pointer-events-none">

          {/* Top glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#F0A500]/50 to-transparent"></div>

          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            if (item.isCenter) {
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative -mt-8 group"
                >
                  {/* Outer glow ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#F0A500] via-[#CF7500] to-[#F0A500] rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 animate-pulse"></div>
                  
                  {/* Main button */}
                  <div className="relative w-16 h-16 rounded-full flex items-center justify-center
                                     bg-gradient-to-br from-[#F0A500] via-[#CF7500] to-[#F0A500]
                                     shadow-[0_0_30px_rgba(240,165,0,0.5),inset_0_2px_10px_rgba(255,255,255,0.3)]
                                     ring-4 ring-[#1A1C20]
                                     group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(240,165,0,0.7)]
                                     transition-all duration-300 overflow-hidden">
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    {/* Sparkle effects */}
                    <Sparkles className="absolute top-1 right-1 w-3 h-3 text-white/60 animate-pulse" />
                    
                    <Icon size={26} className="text-[#1A1C20] drop-shadow-md relative z-10" strokeWidth={2.5} />
                  </div>
                  
                  {/* Label */}
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#F0A500] bg-[#1A1C20]/90 px-3 py-1 rounded-full backdrop-blur-md border border-[#CF7500]/20 shadow-lg whitespace-nowrap uppercase tracking-wider">
                    {item.label}
                  </span>
                </Link>
              )
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex flex-col items-center justify-center w-16 py-2 transition-all duration-300 group
                    ${isActive
                    ? "text-[#F0A500]"
                    : "text-[#F4F4F4]/60 hover:text-[#F0A500]"
                  }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-[#F0A500] to-[#CF7500] rounded-full shadow-[0_0_10px_rgba(240,165,0,0.5)]"></div>
                )}
                
                {/* Icon container */}
                <div className={`relative p-2 rounded-xl transition-all duration-300 ${isActive ? 'bg-[#F0A500]/10' : 'group-hover:bg-[#F0A500]/5'}`}>
                  <Icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={`transition-all duration-300 ${isActive ? 'drop-shadow-[0_0_8px_rgba(240,165,0,0.5)] scale-110' : 'group-hover:scale-110'}`}
                  />
                  
                  {/* Glow effect on active */}
                  {isActive && (
                    <div className="absolute inset-0 bg-[#F0A500]/20 rounded-xl blur-md -z-10"></div>
                  )}
                </div>
                
                {/* Label */}
                <span className={`text-[10px] mt-1 font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'opacity-100 text-[#CF7500]'
                    : 'opacity-0 translate-y-2 group-hover:opacity-70 group-hover:translate-y-0'
                }`}>
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
