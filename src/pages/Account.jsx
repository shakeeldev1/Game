import React from 'react';
import {
  ChevronRight,
  RefreshCw,
  ExternalLink,
  Bell,
  BarChart2,
  Globe,
  Settings,
  MessageSquare,
  HelpCircle,
  Info,
  LogOut,
  DollarSign,
  CreditCard,
  Shield,
  Headphones, // Replaces Headset
  Wallet,
  MessageCircle, // Replaces Whatsapp
  User // Default user icon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className="min-h-screen p-4 pb-24 bg-slate-50">

      {/* User Profile Card */}
      <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="p-6 relative">
          <div className="flex items-center space-x-4 relative z-10">
            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center shadow-md">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <span className="text-white font-bold text-lg">SH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h6 className="text-slate-800 font-bold text-xl tracking-wide">rMUSol</h6>
                <div className="bg-cyan-100 p-1 rounded-full border border-cyan-200">
                  <span className="text-cyan-600 text-xs font-bold">✓</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-2">
                <div className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-medium">UID: HQUNXG</span>
                </div>
                <button className="text-slate-400 hover:text-slate-600 transition">
                  <ExternalLink size={14} />
                </button>
                <a href="#" className="text-green-500 hover:text-green-600 transition">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="mt-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-5 shadow-lg shadow-blue-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Wallet size={100} className="text-white" />
            </div>

            <p className="text-xs font-bold text-blue-100 uppercase tracking-wider relative z-10">Total Balance</p>
            <div className="flex items-center justify-between mt-2 relative z-10">
              <h5 className="text-white text-3xl font-black tracking-tight">Rs 0.00</h5>
              <button className="text-blue-100 hover:text-white hover:rotate-180 transition-all duration-500 bg-white/20 p-2 rounded-full backdrop-blur-sm">
                <RefreshCw size={18} />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-3 mt-6 relative z-10">
              <Link to="/wallet" className="flex flex-col items-center group/btn">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/btn:bg-white/30 transition-colors">
                  <Wallet size={16} className="text-white" />
                </div>
                <p className="text-[10px] text-white mt-2 font-bold opacity-90">Wallet</p>
              </Link>

              <Link to="/deposit" className="flex flex-col items-center group/btn">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/btn:bg-white/30 transition-colors">
                  <DollarSign size={18} className="text-white" />
                </div>
                <p className="text-[10px] text-white mt-2 font-bold opacity-90">Deposit</p>
              </Link>

              <Link to="/withdraw" className="flex flex-col items-center group/btn">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/btn:bg-white/30 transition-colors">
                  <CreditCard size={16} className="text-white" />
                </div>
                <p className="text-[10px] text-white mt-2 font-bold opacity-90">Withdraw</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Safe Card */}
      <Link to="/safeBox" className="max-w-lg mx-auto mt-4 block group">
        <div className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center justify-between hover:border-purple-200 hover:shadow-md transition-all shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center border border-purple-100">
              <Shield size={24} className="text-purple-600" />
            </div>
            <div>
              <h4 className="text-slate-800 font-bold group-hover:text-purple-600 transition-colors">Safe Vault</h4>
              <p className="text-[10px] text-slate-500 mt-0.5 font-medium uppercase tracking-wide">
                Daily Interest 0.1% + VIP Bonus
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <h5 className="text-purple-600 font-bold">Rs 0.00</h5>
            <ChevronRight className="text-slate-300 group-hover:text-purple-400 transition-colors" size={20} />
          </div>
        </div>
      </Link>

      {/* User Options */}
      <div className="max-w-lg mx-auto mt-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <ul className="divide-y divide-slate-50">
            {/* Notification */}
            <li className="flex items-center justify-between p-4 hover:bg-slate-50 cursor-pointer transition group">
              <div className="flex items-center space-x-4">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
                  <Bell size={18} />
                </div>
                <p className="text-sm font-semibold text-slate-700">Notification</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">15</span>
                <ChevronRight className="text-slate-300" size={16} />
              </div>
            </li>

            {/* Game Statistics */}
            <Link to="/game-statistics">
              <li className="flex items-center justify-between p-4 hover:bg-slate-50 cursor-pointer transition group">
                <div className="flex items-center space-x-4">
                  <div className="w-9 h-9 bg-purple-50 rounded-lg flex items-center justify-center text-purple-500">
                    <BarChart2 size={18} />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Game statistics</p>
                </div>
                <ChevronRight className="text-slate-300" size={16} />
              </li>
            </Link>

            {/* Language */}
            <li className="flex items-center justify-between p-4 hover:bg-slate-50 cursor-pointer transition group">
              <div className="flex items-center space-x-4">
                <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center text-green-500">
                  <Globe size={18} />
                </div>
                <p className="text-sm font-semibold text-slate-700">Language</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-xs text-slate-500 font-bold uppercase">English</p>
                <ChevronRight className="text-slate-300" size={16} />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Service Center */}
      <div className="max-w-lg mx-auto mt-6">
        <h4 className="text-xs font-bold text-slate-400 mb-3 ml-2 uppercase tracking-wider">Service Center</h4>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <ul className="divide-y divide-slate-50">
            <Link to="/setting" className="flex items-center space-x-4 p-4 hover:bg-slate-50 transition group">
              <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center">
                <Settings className="text-slate-500" size={18} />
              </div>
              <p className="text-sm font-semibold text-slate-700 flex-1">Settings</p>
              <ChevronRight className="text-slate-300" size={16} />
            </Link>

            <Link to="/feedback" className="flex items-center space-x-4 p-4 hover:bg-slate-50 transition group">
              <div className="w-9 h-9 bg-fuchsia-50 rounded-lg flex items-center justify-center">
                <MessageSquare className="text-fuchsia-500" size={18} />
              </div>
              <p className="text-sm font-semibold text-slate-700 flex-1">Feedback</p>
              <ChevronRight className="text-slate-300" size={16} />
            </Link>

            <Link to="/" className="flex items-center space-x-4 p-4 hover:bg-slate-50 transition group">
              <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center">
                <Headphones className="text-green-500" size={18} />
              </div>
              <p className="text-sm font-semibold text-slate-700 flex-1">24/7 Customer Service</p>
              <ChevronRight className="text-slate-300" size={16} />
            </Link>

            <Link to="/guide" className="flex items-center space-x-4 p-4 hover:bg-slate-50 transition group">
              <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center">
                <HelpCircle className="text-orange-500" size={18} />
              </div>
              <p className="text-sm font-semibold text-slate-700 flex-1">Beginner's Guide</p>
              <ChevronRight className="text-slate-300" size={16} />
            </Link>

            <Link to="/about" className="flex items-center space-x-4 p-4 hover:bg-slate-50 transition group">
              <div className="w-9 h-9 bg-cyan-50 rounded-lg flex items-center justify-center">
                <Info className="text-cyan-500" size={18} />
              </div>
              <p className="text-sm font-semibold text-slate-700 flex-1">About Us</p>
              <ChevronRight className="text-slate-300" size={16} />
            </Link>
          </ul>
        </div>
      </div>

      {/* Log Out Button */}
      <div className="max-w-lg mx-auto mt-8 mb-4">
        <Link to="/">
          <button className="w-full bg-white border border-red-100 text-red-500 py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center space-x-2 hover:bg-red-50 hover:border-red-200 transition-all shadow-sm">
            <LogOut size={18} />
            <span>LOG OUT</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Account;
