import React, { useEffect } from "react";
import {
  FaWallet,
  FaMoneyBillWave,
  FaArrowUp,
  FaArrowDown,
  FaHistory,
  FaExchangeAlt,
  FaDice,
  FaChess,
  FaGamepad,
  FaCoins,
  FaFootballBall,
  FaVideo,
  FaTrophy,
  FaCreditCard,
  FaTable
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import BackButton from "../common/BackButton";

function Wallet() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const walletGames = [
    { id: 1, name: "Lottery", balance: "0.00", icon: FaDice, color: "from-[#F0A500] to-[#CF7500]" },
    { id: 2, name: "TB_Chess", balance: "0.00", icon: FaChess, color: "from-[#F0A500] to-[#CF7500]" },
    { id: 3, name: "Wicket9", balance: "0.00", icon: FaFootballBall, color: "from-[#F0A500] to-[#CF7500]" },
    { id: 4, name: "MG", balance: "0.00", icon: FaGamepad, color: "from-[#F0A500] to-[#CF7500]" },
    { id: 5, name: "JDB", balance: "0.00", icon: FaCoins, color: "from-[#F0A500] to-[#CF7500]" },
    { id: 6, name: "SaBa", balance: "0.00", icon: FaFootballBall, color: "from-[#F0A500] to-[#CF7500]" },
    { id: 7, name: "TB", balance: "0.00", icon: FaTable, color: "from-[#F0A500] to-[#CF7500]" },
    { id: 8, name: "EVO_Video", balance: "0.00", icon: FaVideo, color: "from-[#F0A500] to-[#CF7500]" },
    { id: 9, name: "JILI", balance: "0.00", icon: FaTrophy, color: "from-[#F0A500] to-[#CF7500]" },
    { id: 10, name: "Card365", balance: "0.00", icon: FaCreditCard, color: "from-[#F0A500] to-[#CF7500]" },
    { id: 11, name: "PP", balance: "0.00", icon: FaGamepad, color: "from-[#F0A500] to-[#CF7500]" },
    { id: 12, name: "PG", balance: "0.00", icon: FaCoins, color: "from-[#F0A500] to-[#CF7500]" }
  ];

  return (
    <div className="min-h-screen p-4 relative bg-[#0f0f13]">

      <BackButton />
      {/* Header */}
      <div
        className="w-full bg-gradient-to-r from-[#F0A500] to-[#CF7500] rounded-md p-2 flex items-center justify-between mb-2 relative overflow-hidden shadow-[0_0_30px_rgba(240,165,0,0.3)] border border-[#F0A500]/20"

      >
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#CF7500]/20 rounded-full blur-2xl"></div>

        {/* Text */}
        <div className="z-10 relative">
          <h1 className="text-[15px] font-extrabold text-[#0f0f13] tracking-tight drop-shadow-md">
            My Wallet
          </h1>
          <p className="text-[#0f0f13]/80  max-w-md  text-[10px]">
            Manage your balance, deposits, and withdrawals securely.
          </p>
        </div>
      </div>

      {/* deposit history */}
      <div className='absolute top-4 z-10 right-4'>
        <Link to="/wallethistory" className='text-white text-[10px] md:text-sm font-bold underline hover:text-[var(--color-neon-accent)] transition-colors duration-300'>
          Deposit History
        </Link>
      </div>
      {/* Wallet Cards */}
      <div className="grid grid-cols-3  gap-2 mb-2">
        <div className="bg-[#1A1C20] border border-[#CF7500]/50 shadow-lg rounded-xl p-2 flex flex-col items-center hover:scale-[1.02] transition-transform duration-300 group hover:border-[#F0A500]">
          <div className="p-3 rounded-full bg-gradient-to-r from-[#F0A500] to-[#CF7500] mb-3 group-hover:scale-110 transition-transform">
            <FaWallet size={12} className="text-[#0f0f13]" />
          </div>
          <p className=" text-[#F4F4F4] text-center text-[10px]">Total Balance</p>
          <h2 className=" text-[10px] md:text-[12px]  text-[#F0A500] tracking-tight">Rs 0.00</h2>
        </div>

        <div className="bg-[#1A1C20] border border-[#CF7500]/50 shadow-lg rounded-xl p-2 flex flex-col items-center hover:scale-[1.02] transition-transform duration-300 group hover:border-[#F0A500]">
          <div className="p-3 rounded-full bg-gradient-to-r from-[#F0A500] to-[#CF7500] mb-3 group-hover:scale-110 transition-transform">
            <FaMoneyBillWave size={12} className="text-[#0f0f13]" />
          </div>
          <p className=" text-[#F4F4F4] text-center uppercase text-[10px] tracking-wider">Main Wallet</p>
          <h2 className=" text-[10px] md:text-[12px] mt-2 text-[#F0A500] tracking-tight">Rs 0.00</h2>
        </div>

        <div className="bg-[#1A1C20] border border-[#CF7500]/50 shadow-lg rounded-xl p-2 flex flex-col items-center hover:scale-[1.02] transition-transform duration-300 group hover:border-[#F0A500]">
          <div className="p-3 rounded-full bg-gradient-to-r from-[#F0A500] to-[#CF7500] mb-3 group-hover:scale-110 transition-transform">
            <FaMoneyBillWave size={12} className="text-[#0f0f13]" />
          </div>
          <p className=" text-[#F4F4F4] text-center uppercase text-[10px] tracking-wider">3rd Party Wallet</p>
          <h2 className=" text-[10px] md:text-[12px] mt-2 text-[#F0A500] tracking-tight">Rs 0.00</h2>
        </div>
      </div>

      {/* Main Wallet Transfer */}
      <div className="flex justify-center mb-2">
        <button className="bg-gradient-to-r from-[#F0A500] to-[#CF7500] text-[#0f0f13]  px-6 py-2 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(240,165,0,0.4)] hover:scale-105 transition-all flex items-center gap-2 border border-[#F0A500]/30 uppercase tracking-wide text-xs md:text-sm">
          <FaExchangeAlt /> Transfer to Main Wallet
        </button>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-3  gap-2 mb-1">
        <Link to="/deposit">
          <div className="bg-[#1A1C20] border border-[#CF7500]/30 rounded-xl p-4 flex flex-col items-center hover:bg-[#1A1C20]/80 hover:border-[#F0A500]/50 transition-all cursor-pointer group">
            <FaArrowDown size={20} className="text-[#F0A500] mb-2 group-hover:translate-y-1 transition-transform" />
            <p className="font-bold text-[#F4F4F4] group-hover:text-[#F0A500] transition-colors text-sm">Deposit</p>
            <p className="text-[#F4F4F4]/60 text-[8px] text-center mt-1">
              Add money instantly
            </p>
          </div>
        </Link>
        <Link to="/withdraw">
          <div className="bg-[#1A1C20] border border-[#CF7500]/30 rounded-xl p-4 flex flex-col items-center hover:bg-[#1A1C20]/80 hover:border-[#F0A500]/50 transition-all cursor-pointer group">
            <FaArrowUp size={20} className="text-[#F0A500] mb-2 group-hover:-translate-y-1 transition-transform" />
            <p className="font-bold text-[#F4F4F4] group-hover:text-[#F0A500] transition-colors text-sm">Withdraw</p>
            <p className="text-[#F4F4F4]/60 text-[8px] text-center mt-1">Cash out earnings</p>
          </div>
        </Link>
        <Link to='/history'>
          <div className="bg-[#1A1C20] border border-[#CF7500]/30 rounded-xl p-4 flex flex-col items-center hover:bg-[#1A1C20]/80 hover:border-[#F0A500]/50 transition-all cursor-pointer group">
            <FaHistory size={20} className="text-[#F0A500] mb-2 group-hover:rotate-12 transition-transform" />
            <p className="font-bold text-[#F4F4F4] group-hover:text-[#F0A500] transition-colors text-sm">History</p>
            <p className="text-[#F4F4F4]/60 text-[8px] text-center mt-1">View transactions</p>
          </div>
        </Link>
      </div>

      {/* Game Wallets Section */}
      {/* <div className="w-full mx-auto mt-6 mb-6">
        <h2 className="text-[#F4F4F4] text-base md:text-lg font-bold mb-4">Game Wallets</h2>

        <div className="grid grid-cols-3 gap-2.5">
          {walletGames.map((game) => (
            <div
              key={game.id}
              className="bg-[#1A1C20] border border-[#CF7500]/50 rounded-lg p-2.5 flex flex-col items-center gap-2 hover:border-[#F0A500] hover:bg-[#1A1C20]/80 transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${game.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <game.icon className="text-[#0f0f13] text-base md:text-xl" />
              </div>
              <div className="text-center w-full">
                <h5 className="text-[#F4F4F4] font-bold text-[11px] md:text-xs mb-0.5">{game.balance}</h5>
                <p className="text-[#F4F4F4]/70 text-[9px] md:text-[10px]">{game.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Deposit & Withdraw History */}
      <div className="grid grid-cols-2 gap-4 mt-6">

        {/* Deposit History */}
        <div className="bg-[#1A1C20] border border-[#CF7500]/30 rounded-xl p-5 shadow-lg hover:border-[#F0A500]/50 transition-colors">
          <h3 className="font-bold text-[12px] mb-4 text-[#F4F4F4] border-b border-[#CF7500]/30 pb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-gradient-to-b from-[#F0A500] to-[#CF7500] rounded-full"></span>
            Deposit History
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[1, 2, 3].map((item) => (
              <li key={item} className="flex justify-between items-center p-2.5 rounded-lg bg-[#0f0f13]/30 border border-[#CF7500]/20 hover:border-[#F0A500]/40 transition-colors">
                <span className="text-[#F4F4F4]/70 text-[10px]">Deposit #{item}</span>
                <span className="font-bold text-[#F0A500] text-[10px]">Rs 0.00</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Withdraw History */}
        <div className="bg-[#1A1C20] border border-[#CF7500]/30 rounded-xl p-5 shadow-lg hover:border-[#F0A500]/50 transition-colors">
          <h3 className="font-bold text-[12px] mb-4 text-[#F4F4F4] border-b border-[#CF7500]/30 pb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-gradient-to-b from-[#F0A500] to-[#CF7500] rounded-full"></span>
            Withdraw History
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[1, 2, 3].map((item) => (
              <li key={item} className="flex justify-between items-center p-2.5 rounded-lg bg-[#0f0f13]/30 border border-[#CF7500]/20 hover:border-[#F0A500]/40 transition-colors">
                <span className="text-[#F4F4F4]/70 text-[10px]">Withdraw #{item}</span>
                <span className="font-bold text-[#F0A500] text-[10px]">Rs 0.00</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Wallet;
