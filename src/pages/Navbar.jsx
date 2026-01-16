import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaEnvelope,
  FaDownload,
  FaBell,
  FaCrown,
} from 'react-icons/fa';
import { FiX, FiMenu } from 'react-icons/fi';
import logo from '../assets/logo.jpeg';
// import BackButton from '../components/common/BackButton';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-40 w-full transition-all duration-500 ${isScrolled ? 'shadow-[0_4px_30px_rgba(240,165,0,0.15)]' : ''}`}>
      {/* Animated Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0A500] to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0A500] via-[#CF7500] to-[#F0A500] animate-[shimmer_3s_infinite] opacity-60"></div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#1A1C20]/98 backdrop-blur-2xl' : 'bg-[#1A1C20]/95 backdrop-blur-xl'}`}>
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            
            {/* Logo with Premium Glow Effect */}
            <div className="flex items-center gap-2">
              {location.pathname !== '/'}
              <Link to="/" className="flex items-center gap-2 group relative">
              {/* Outer glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#F0A500]/20 via-[#CF7500]/20 to-[#F0A500]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Logo container */}
              <div className="relative flex items-center gap-2">
                <div className="relative rounded border border-[#CF7500]">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-8 rounded w-auto object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                  
                </div>
              </div>
            </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              
              {/* Search Button with Animation */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                aria-label="Search"
                className="relative w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500]/40 text-[#F4F4F4] hover:text-white transition-all duration-300 group overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F0A500] to-[#CF7500] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {showSearch ? (
                  <FiX size={12} className="relative z-10 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <FaSearch size={12} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                )}
                
               
              </button>

              {/* Messages Button with Notification Badge */}
              <Link
                to="/learn-more"
                aria-label="Notifications"
                className="relative w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500]/20 text-[#F4F4F4] hover:text-white transition-all duration-300 group overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F0A500] to-[#CF7500] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <FaBell size={12} className="relative z-10 group-hover:scale-110 group-hover:animate-[shake_2.5s_ease-in-out] transition-transform duration-300" />
                
               
              </Link>

              {/* Download APK - Premium Pill Button */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download APK"
                className="relative overflow-hidden flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-br from-[#232529] to-[#1A1C20] text-[#F4F4F4] text-xs hover:border-[#CF7500] font-black border border-[#CF7500]/20   hover:scale-100 transition-all duration-300 group uppercase "
              >
               

                <FaDownload size={12} className="relative z-10 group-hover:translate-y-0.5 transition-transform duration-300" />
                <span className="relative z-10">APP</span>
              </a>
            </div>
          </div>

          {/* Expandable Search Bar */}
          <div className={`overflow-hidden transition-all duration-500 ease-out ${showSearch ? 'max-h-20 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search games, promotions..."
                className="w-full px-4 py-2 text-sm pl-12 bg-[#232529] border border-[#CF7500]/20 rounded-md text-[#F4F4F4] placeholder-[#F4F4F4]/40 focus:outline-none focus:border-[#F0A500]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] transition-all duration-300"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F4F4F4]" size={12} />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-gradient-to-br from-[#232529] to-[#1A1C20] text-[#F4F4F4] border 
              border-[#CF7500] text-xs font-semibold rounded-md hover:shadow-[0_0_15px_rgba(240,165,0,0.4)] transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
