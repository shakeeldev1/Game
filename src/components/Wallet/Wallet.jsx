import React, { useEffect } from "react";
import {
  FaWallet,
  FaMoneyBillWave,
  FaArrowUp,
  FaArrowDown,
  FaHistory,
  FaExchangeAlt,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

function Wallet() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8 pb-24">

      {/* Header */}
      <div
        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 md:p-8 flex items-center justify-between mb-8 relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.4)] border border-cyan-400/30"
        data-aos="fade-down"
      >
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>

        {/* Text */}
        <div className="z-10 relative">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
            My Wallet
          </h1>
          <p className="text-cyan-100 mt-2 max-w-md font-medium">
            Manage your balance, deposits, and withdrawals securely.
          </p>
        </div>
      </div>


      {/* Wallet Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="bg-[#1a1033]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl p-6 flex flex-col items-center hover:scale-[1.03] transition-transform duration-300 group hover:border-cyan-500/30">
          <div className="p-4 rounded-full bg-cyan-500/10 mb-4 group-hover:bg-cyan-500/20 transition-colors">
            <FaWallet size={30} className="text-cyan-400" />
          </div>
          <p className="font-bold text-gray-400 text-center uppercase text-xs tracking-wider">Total Balance</p>
          <h2 className="font-black text-2xl md:text-3xl mt-2 text-white tracking-tight drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Rs 0.00</h2>
        </div>

        <div className="bg-[#1a1033]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl p-6 flex flex-col items-center hover:scale-[1.03] transition-transform duration-300 group hover:border-blue-500/30">
          <div className="p-4 rounded-full bg-blue-500/10 mb-4 group-hover:bg-blue-500/20 transition-colors">
            <FaMoneyBillWave size={30} className="text-blue-400" />
          </div>
          <p className="font-bold text-gray-400 text-center uppercase text-xs tracking-wider">Main Wallet</p>
          <h2 className="font-black text-2xl md:text-3xl mt-2 text-white tracking-tight">Rs 0.00</h2>
        </div>

        <div className="bg-[#1a1033]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl p-6 flex flex-col items-center hover:scale-[1.03] transition-transform duration-300 group hover:border-fuchsia-500/30">
          <div className="p-4 rounded-full bg-fuchsia-500/10 mb-4 group-hover:bg-fuchsia-500/20 transition-colors">
            <FaMoneyBillWave size={30} className="text-fuchsia-400" />
          </div>
          <p className="font-bold text-gray-400 text-center uppercase text-xs tracking-wider">3rd Party Wallet</p>
          <h2 className="font-black text-2xl md:text-3xl mt-2 text-white tracking-tight">Rs 0.00</h2>
        </div>
      </div>

      {/* Main Wallet Transfer */}
      <div className="flex justify-center mb-8">
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:scale-105 transition-all flex items-center gap-3 border border-blue-400/30 uppercase tracking-wide text-sm">
          <FaExchangeAlt /> Transfer to Main Wallet
        </button>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="bg-[#1e103f]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-5 flex flex-col items-center hover:bg-[#1e103f] transition-colors cursor-pointer group">
          <FaArrowDown size={24} className="text-green-400 mb-2 group-hover:translate-y-1 transition-transform" />
          <p className="font-bold text-gray-200 group-hover:text-white transition-colors">Deposit</p>
          <p className="text-gray-500 text-xs text-center mt-1">
            Add money instantly
          </p>
        </div>
        <div className="bg-[#1e103f]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-5 flex flex-col items-center hover:bg-[#1e103f] transition-colors cursor-pointer group">
          <FaArrowUp size={24} className="text-red-400 mb-2 group-hover:-translate-y-1 transition-transform" />
          <p className="font-bold text-gray-200 group-hover:text-white transition-colors">Withdraw</p>
          <p className="text-gray-500 text-xs text-center mt-1">Cash out earnings</p>
        </div>
        <div className="bg-[#1e103f]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-5 flex flex-col items-center hover:bg-[#1e103f] transition-colors cursor-pointer group">
          <FaHistory size={24} className="text-orange-400 mb-2 group-hover:rotate-12 transition-transform" />
          <p className="font-bold text-gray-200 group-hover:text-white transition-colors">History</p>
          <p className="text-gray-500 text-xs text-center mt-1">View transactions</p>
        </div>
      </div>

      {/* Deposit & Withdraw History */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        {/* Deposit History */}
        <div className="bg-[#1a1033]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-lg hover:border-green-500/20 transition-colors">
          <h3 className="font-bold text-lg mb-4 text-white border-b border-white/10 pb-3 flex items-center gap-2">
            <span className="w-2 h-8 bg-green-500 rounded-full"></span>
            Deposit History
          </h3>
          <ul className="space-y-3 text-sm">
            {[1, 2, 3].map((item) => (
              <li key={item} className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-gray-400">Deposit #{item}</span>
                <span className="font-bold text-green-400">Rs 0.00</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Withdraw History */}
        <div className="bg-[#1a1033]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-lg hover:border-red-500/20 transition-colors">
          <h3 className="font-bold text-lg mb-4 text-white border-b border-white/10 pb-3 flex items-center gap-2">
            <span className="w-2 h-8 bg-red-500 rounded-full"></span>
            Withdraw History
          </h3>
          <ul className="space-y-3 text-sm">
            {[1, 2, 3].map((item) => (
              <li key={item} className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-gray-400">Withdraw #{item}</span>
                <span className="font-bold text-red-400">Rs 0.00</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Wallet;
