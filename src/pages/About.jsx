import React from 'react';
import { FiInfo, FiPhone, FiMail, FiMapPin, FiStar } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen p-4 pb-20">

      {/* Header */}
      <div className="max-w-lg mx-auto bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl shadow-[0_0_30px_rgba(6,182,212,0.3)] p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <h1 className="text-4xl font-black text-white drop-shadow-md">About Us</h1>
        <p className="text-cyan-100 mt-3 font-medium text-lg leading-relaxed">
          Welcome to rMUSol, your trusted platform for gaming, rewards, and secure transactions.
        </p>
      </div>

      {/* Our Mission */}
      <div className="max-w-lg mx-auto bg-[#1a1033]/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-lg p-6 mb-6 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:border-purple-500/30 transition-all duration-300 group">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors">
            <FiInfo className="text-purple-400 w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-white mb-2 text-xl">Our Mission</h2>
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              We aim to provide a secure, fun, and rewarding experience for all our users. Our platform combines ease of use with innovative gaming and financial solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="max-w-lg mx-auto bg-[#1a1033]/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-lg p-6 mb-6 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:border-cyan-500/30 transition-all duration-300 group">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30 transition-colors">
            <FiStar className="text-cyan-400 w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-white mb-2 text-xl">Our Vision</h2>
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              To be the leading platform for gamers and users seeking a secure and rewarding ecosystem that supports growth, fun, and community.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="max-w-lg mx-auto bg-[#1a1033]/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="font-bold text-white mb-4 text-xl">Contact Us</h2>
        <ul className="space-y-4 text-gray-300 text-sm">
          <li className="flex items-center space-x-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
            <FiPhone className="text-green-400 w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-mono group-hover:text-white transition-colors">+1 (123) 456-7890</span>
          </li>
          <li className="flex items-center space-x-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
            <FiMail className="text-yellow-400 w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-mono group-hover:text-white transition-colors">support@rmusol.com</span>
          </li>
          <li className="flex items-center space-x-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
            <FiMapPin className="text-red-400 w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-white transition-colors">123 Gaming Street, GameCity, USA</span>
          </li>
        </ul>
      </div>

      {/* Footer / Disclaimer */}
      <div className="max-w-lg mx-auto bg-[#0f0720]/80 backdrop-blur-sm rounded-xl p-4 text-center text-gray-600 text-xs border border-white/5">
        © 2026 rMUSol. All rights reserved. Your security and privacy are our top priority.
      </div>

    </div>
  );
};

export default About;
