import React from 'react';
import { FiInfo, FiPhone, FiMail, FiMapPin, FiStar } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      
      {/* Header */}
      <div className="max-w-lg mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-white">About Us</h1>
        <p className="text-yellow-50 mt-2">
          Welcome to rMUSol, your trusted platform for gaming, rewards, and secure transactions.
        </p>
      </div>

      {/* Our Mission */}
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-5 mb-4 hover:shadow-lg transition">
        <div className="flex items-start space-x-3">
          <FiInfo className="text-yellow-500 w-6 h-6 mt-1" />
          <div>
            <h2 className="font-semibold text-gray-800 mb-1">Our Mission</h2>
            <p className="text-gray-600 text-sm">
              We aim to provide a secure, fun, and rewarding experience for all our users. Our platform combines ease of use with innovative gaming and financial solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-5 mb-4 hover:shadow-lg transition">
        <div className="flex items-start space-x-3">
          <FiStar className="text-yellow-500 w-6 h-6 mt-1" />
          <div>
            <h2 className="font-semibold text-gray-800 mb-1">Our Vision</h2>
            <p className="text-gray-600 text-sm">
              To be the leading platform for gamers and users seeking a secure and rewarding ecosystem that supports growth, fun, and community.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-5 mb-6 hover:shadow-lg transition">
        <h2 className="font-semibold text-gray-800 mb-3">Contact Us</h2>
        <ul className="space-y-3 text-gray-600 text-sm">
          <li className="flex items-center space-x-3">
            <FiPhone className="text-yellow-500 w-5 h-5" />
            <span>+1 (123) 456-7890</span>
          </li>
          <li className="flex items-center space-x-3">
            <FiMail className="text-yellow-500 w-5 h-5" />
            <span>support@rmusol.com</span>
          </li>
          <li className="flex items-center space-x-3">
            <FiMapPin className="text-yellow-500 w-5 h-5" />
            <span>123 Gaming Street, GameCity, USA</span>
          </li>
        </ul>
      </div>

      {/* Footer / Disclaimer */}
      <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 text-center text-gray-500 text-xs">
        © 2026 rMUSol. All rights reserved. Your security and privacy are our top priority.
      </div>

    </div>
  );
};

export default About;
