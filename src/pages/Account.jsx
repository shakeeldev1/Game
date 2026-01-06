import React from 'react';
import { 
  FiChevronRight, 
  FiRefreshCw, 
  FiExternalLink,
  FiBell,
  FiGift,
  FiBarChart2,
  FiGlobe,
  FiSettings,
  FiMessageSquare,
  FiHelpCircle,
  FiInfo,
  FiLogOut,
  FiDollarSign,
  FiCreditCard,
  FiShield,
  FiStar
} from 'react-icons/fi';
import { FaWhatsapp, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Account = () => { 
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      
      {/* User Profile Card */}
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-yellow-400 to-orange-500">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-white">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">RM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h6 className="text-white font-semibold text-xl">rMUSol</h6>
                <span className="text-yellow-50">✓</span>
              </div>
              <div className="flex items-center space-x-3 mt-1">
                <a 
                  href="/register?referral=HQUNXG" 
                  className="text-xs text-blue-50 hover:text-white transition"
                >
                  RLink | HQUNXG
                </a>
                <button className="text-white hover:text-blue-200 transition">
                  <FiExternalLink size={14} />
                </button>
                <a href="#" className="text-green-400 hover:text-green-300 transition">
                  <FaWhatsapp size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-inner">
            <p className="text-sm text-blue-100">Total Balance</p>
            <div className="flex items-center justify-between mt-1">
              <h5 className="text-white text-2xl font-bold">Rs 0.00</h5>
              <button className="text-white hover:text-blue-200 transition">
                <FiRefreshCw size={18} />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <Link to="/wallet" className="flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow hover:shadow-lg transition">
                  <FaWallet size={20} className="text-yellow-500" />
                </div>
                <p className="text-xs text-white mt-1 font-medium">Wallet</p>
              </Link>

              <Link to="/deposit" className="flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow hover:shadow-lg transition">
                  <FiDollarSign size={20} className="text-yellow-500" />
                </div>
                <p className="text-xs text-white mt-1 font-medium">Deposit</p>
              </Link>

              <Link to="/withdraw" className="flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow hover:shadow-lg transition">
                  <FiCreditCard size={20} className="text-yellow-500" />
                </div>
                <p className="text-xs text-white mt-1 font-medium">Withdraw</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Safe Card */}
      <Link to="/safeBox" className="max-w-lg mx-auto mt-4 block">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg transition">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <FiShield size={24} className="text-white" />
            </div>
            <div>
              <h4 className="text-white font-bold">Safe</h4>
              <p className="text-sm text-blue-100 mt-1">
                Daily interest 0.1% + VIP extra income, calculated every 1 minute
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <h5 className="text-white font-bold">Rs0.00</h5>
            <FiChevronRight className="text-white" size={20} />
          </div>
        </div>
      </Link>

      {/* User Options */}
      <div className="max-w-lg mx-auto mt-6">
        <div className="bg-white rounded-xl shadow-md p-4">
          <ul className="space-y-2">
            {/* Notification */}
            <li className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <FiBell className="text-white" size={18} />
                </div>
                <p className="font-medium">Notification</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">15</span>
                <FiChevronRight className="text-gray-400" size={16} />
              </div>
            </li>

            {/* Game Statistics */}
            <Link to="/game-statistics">
              <li className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <FiBarChart2 className="text-white" size={18} />
                  </div>
                  <p className="font-medium">Game statistics</p>
                </div>
                <FiChevronRight className="text-gray-400" size={16} />
              </li>
            </Link>

            {/* Language */}
            <li className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <FiGlobe className="text-white" size={18} />
                </div>
                <p className="font-medium">Language</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500">English</p>
                <FiChevronRight className="text-gray-400" size={16} />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Service Center */}
      <div className="max-w-lg mx-auto mt-6">
        <div className="bg-white rounded-xl shadow-md p-4">
          <h4 className="font-bold text-lg mb-4">Service Center</h4>
          <ul className="space-y-3">
            <Link to="/setting" className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <FiSettings className="text-gray-600" size={18} />
              </div>
              <p className="font-medium">Settings</p>
            </Link>

            <Link to="/feedback" className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <FiMessageSquare className="text-purple-600" size={18} />
              </div>
              <p className="font-medium">Feedback</p>
            </Link>

            <Link to="/" className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <FiMessageSquare className="text-green-600" size={18} />
              </div>
              <p className="font-medium">24/7 Customer Service</p>
            </Link>

            <Link to="/guide" className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <FiHelpCircle className="text-orange-600" size={18} />
              </div>
              <p className="font-medium">Beginner's Guide</p>
            </Link>

            <Link to="/about" className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition">
              <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                <FiInfo className="text-cyan-600" size={18} />
              </div>
              <p className="font-medium">About Us</p>
            </Link>
          </ul>
        </div>
      </div>

      {/* Log Out Button */}
      <div className="max-w-lg mx-auto mt-6">
       <Link to="/">
         <button className="w-full bg-white cursor-pointer border-2 border-red-200 text-red-600 py-3 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-red-50 transition-colors">
          <FiLogOut size={18} />
          <span>Log out</span>
        </button>
       </Link>
      </div>
    </div>
  );
};

export default Account;
