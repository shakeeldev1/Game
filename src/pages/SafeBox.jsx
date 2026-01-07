import React from 'react';
import {
  FiShield,
  FiLock,
  FiAlertCircle,
  FiClock,
  FiChevronRight,
  FiTrendingUp,
  FiDollarSign,
  FiPackage
} from 'react-icons/fi';

const SafeBox = () => {
  return (
    <div className="w-full max-w-md mx-auto min-h-screen pt-4 px-4 pb-20">

      {/* Interest Rate Label */}
      <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-xs font-bold py-1.5 px-4 rounded-full inline-block mb-6 shadow-[0_0_15px_rgba(217,70,239,0.4)] tracking-wide border border-fuchsia-400/30">
        Interest rate <span className="text-white">0.10%</span>
      </div>

      {/* Safe Head Section */}
      <div className="relative bg-gradient-to-br from-[#2d1b4e] to-[#1e103f] rounded-3xl shadow-[0_0_30px_rgba(124,58,237,0.3)] overflow-hidden mb-6 border border-purple-500/30">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>

        <div className="relative p-6">
          {/* Security Info */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
              <FiShield className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex items-center space-x-2 text-cyan-100">
              <FiLock className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium tracking-wide">Financial security</span>
            </div>
          </div>

          {/* Balance */}
          <h4 className="text-white text-4xl font-black tracking-tight mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Rs 0.00</h4>

          {/* Estimated Revenue */}
          <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-2.5 backdrop-blur-sm border border-white/5">
            <div className="p-1 bg-green-500/20 rounded-full">
              <FiTrendingUp className="w-3 h-3 text-green-400" />
            </div>
            <h6 className="text-xs text-gray-300">
              24-hour estimated revenue <span className="font-bold text-green-400 ml-1">Rs 0.00</span>
            </h6>
          </div>
        </div>
      </div>

      {/* Safe Content Section */}
      <div className="bg-[#1a1033]/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/5 p-6 mb-6">
        {/* Revenue Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#0f0720]/60 rounded-xl p-4 border border-white/5 hover:border-cyan-500/30 transition-colors group">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-blue-500/20 rounded-lg">
                <FiDollarSign className="w-4 h-4 text-blue-400" />
              </div>
            </div>
            <h6 className="text-xl font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">Rs 0.00</h6>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">Generated revenue</span>
            <label className="text-[10px] text-blue-400 font-bold bg-blue-500/10 px-1.5 py-0.5 rounded">Rate 0.1%</label>
          </div>

          <div className="bg-[#0f0720]/60 rounded-xl p-4 border border-white/5 hover:border-green-500/30 transition-colors group">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-green-500/20 rounded-lg">
                <FiPackage className="w-4 h-4 text-green-400" />
              </div>
            </div>
            <h6 className="text-xl font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">Rs 0.00</h6>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Accumulated</span>
          </div>
        </div>

        {/* Transfer Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="bg-gradient-to-r from-red-600 to-rose-600 text-white py-3.5 rounded-xl font-bold text-sm tracking-wide hover:from-red-500 hover:to-rose-500 transition-all duration-200 shadow-[0_4px_20px_rgba(220,38,38,0.3)] hover:shadow-[0_4px_25px_rgba(220,38,38,0.5)] border border-red-500/30">
            Transfer Out
          </button>
          <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3.5 rounded-xl font-bold text-sm tracking-wide hover:from-emerald-400 hover:to-green-500 transition-all duration-200 shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)] border border-emerald-500/30">
            Transfer In
          </button>
        </div>

        {/* Security Note */}
        <div className="flex items-start space-x-3 bg-fuchsia-500/5 border border-fuchsia-500/10 rounded-xl p-4">
          <FiAlertCircle className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" />
          <span className="text-xs text-gray-400 leading-relaxed">
            Funds are <span className="text-gray-300 font-bold">safe and secure</span>, and can be transferred at any time.
          </span>
        </div>
      </div>

      {/* Historical Records */}
      <div className="bg-[#1a1033]/80 backdrop-blur-xl mb-12 rounded-2xl shadow-lg border border-white/5 p-5 hover:bg-[#1a1033] transition-colors cursor-pointer group">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
              <FiClock className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h6 className="font-bold text-gray-200 group-hover:text-white transition-colors">Historical records</h6>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">View transaction history</p>
            </div>
          </div>
          <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-bold text-sm transition-colors">
            <span>View All</span>
            <div className="bg-blue-500/20 rounded-full p-1">
              <FiChevronRight className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafeBox;
