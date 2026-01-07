import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaEnvelope,
  FaDownload,
} from 'react-icons/fa';
import logo from '../assets/logo.png';


function Navbar() {
  return (
    <div className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

      <div className="bg-[#1a1033]/90 backdrop-blur-xl shadow-lg">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo with Glow */}
            <Link to="/pinterest-board" className="flex items-center gap-2 group relative">
              <div className="absolute -inset-2 bg-purple-500/20  blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={logo}
                alt="Logo"
                className="h-9 w-auto object-contain brightness-0 invert drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] relative z-10"
              />
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Search - Glass Button */}
              <button
                aria-label="Search"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-cyan-400 hover:text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] group"
              >
                <FaSearch size={16} className="group-hover:scale-110 transition-transform" />
              </button>

              {/* Messages - Glass Button */}
              <Link
                to="/messages"
                aria-label="Messages"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-fuchsia-400 hover:text-white hover:bg-fuchsia-500 hover:border-fuchsia-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(217,70,239,0.6)] group"
              >
                <FaEnvelope size={18} className="group-hover:scale-110 transition-transform" />
                {/* Notification Dot */}
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(239,68,68,0.8)]"></span>
              </Link>

              {/* Download APK - Premium Pill */}
              <a
                href="https://pakgame.net/Downloads/Pak Game.apk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download APK"
                className="relative overflow-hidden flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 border border-cyan-400/30 group"
              >
                {/* Sheen Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>

                <FaDownload size={12} className="relative z-10 group-hover:translate-y-0.5 transition-transform duration-300" />
                <span className="relative z-10 tracking-wider">APP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
