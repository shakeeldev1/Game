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
    <div className="sticky top-0 z-50 bg-white  shadow-2xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-center">
          <div className="w-full max-w-md">

            {/* Glass Card */}
            <nav className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-xl shadow-lg border border-white/40">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-25 object-contain"
                />
              </Link>

              {/* Actions */}
              <div className="flex items-center gap-4">

                {/* Search */}
                <button
                  aria-label="Search"
                  className="p-2 rounded-full text-orange-500 hover:bg-orange-100 cursor-pointer hover:scale-110 transition"
                >
                  <FaSearch size={18} />
                </button>

                {/* Messages */}
                <Link
                  to="/messages"
                  aria-label="Messages"
                  className="p-2 rounded-full text-orange-500 hover:bg-orange-100 hover:scale-110 transition"
                >
                  <FaEnvelope size={18} />
                </Link>

                {/* Download APK */}
                <a
                  href="https://pakgame.net/Downloads/Pak Game.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download APK"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
                >
                  <FaDownload size={16} />
                  <span className="text-sm">APK</span>
                </a>

              </div>
            </nav>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
