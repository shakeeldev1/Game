import React from 'react';
import {
  FiShield, FiLock, FiAlertCircle, FiClock, FiChevronRight,
  FiTrendingUp, FiDollarSign, FiPackage, FiStar, FiZap
} from 'react-icons/fi';
import { FaArrowLeft, FaGem, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SafeBox = () => {
  return (
    <div className="w-full max-w-md mx-auto min-h-screen pt-4 px-4 pb-20 particles-bg">
      <Link to='/account'>
        <button

          className="flex items-center px-2 gap-1 py-2 bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] rounded-md text-[#f4f4f4] text-xs font-bold text-[10px] md:text-xs uppercase tracking-wider hover:bg-gradient-to-r hover:from-[#ffd700] hover:to-[#ff8c00] ml-3 hover:text-[#0f0f13] transition-all duration-300  mb-2"
        >
          <FaArrowLeft className='text-[10px] md:text-xs' />
          Back
        </button>
      </Link>

      {/* Interest Rate Badge */}
      <div className="flex justify-center mb-6 animate-on-scroll">
        <div className="btn-premium text-[var(--color-neon-bg)] text-sm font-bold px-2 py-1 md:py-2 md:px-6 rounded-full neon-glow flex items-center gap-2">
          <FiZap className="animate-pulse" />
          <span className='text-[10px] md:text-xs'>Daily Interest <span className="font-black">0.10%</span></span>
          <FiZap className="animate-pulse" />
        </div>
      </div>

      {/* Safe Head Section */}
      <div className="relative overflow-hidden mb-6 animate-on-scroll">
        <div className="glass-card rounded-3xl p-6 relative card-hover-lift">
          {/* Animated Background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-neon-primary)]/20 rounded-full blur-[50px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--color-neon-accent)]/20 rounded-full blur-[40px] animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="relative z-10">
            {/* Icon & Security Label */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:h-11 md:w-11bg-gradient-to-br from-[#232529] to-[#1A1C20] rounded-md flex items-center justify-center shadow-lg neon-glow">
                  <FaShieldAlt className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-[var(--color-neon-text)] text-[13px] font-semibold">Safe Vault</p>
                  <p className="text-[10px] text-[var(--color-neon-text)]/50 flex items-center gap-1">
                    <FiLock className="text-[var(--color-neon-primary)]" /> Financial security guaranteed
                  </p>
                </div>
              </div>
              <FaGem className="text-[var(--color-neon-primary)] text-2xl animate-pulse" />
            </div>

            {/* Balance Display */}
            <div className="text-center mb-6">
              <p className="text-xs text-[var(--color-neon-text)]/50 uppercase tracking-widest mb-1">Total Balance</p>
              <h4 className="text-xs font-black gradient-text tracking-tight">Rs 0.00</h4>
            </div>

            {/* Estimated Revenue */}
            <div className="border border-[#CF7500] rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="md:w-10 h-8 w-8 md:h-10 bg-[var(--color-neon-primary)]rounded-lg flex items-center justify-center">
                  <FiTrendingUp className="text-[var(--color-neon-primary)]" />
                </div>
                <div>
                  <p className="text-[10px] text-[var(--color-neon-text)]/50 uppercase tracking-wider">24h Revenue</p>
                  <p className="font-bold text-[var(--color-neon-text)]">Rs 0.00</p>
                </div>
              </div>
              <FaRocket className="text-[var(--color-neon-primary)] animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6 stagger-children">
        <div className="glass-card rounded-xl p-5 card-hover-lift group">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-[var(--color-neon-primary)]/20 rounded-lg flex items-center justify-center">
              <FiDollarSign className="text-[var(--color-neon-primary)]" />
            </div>
            <span className="text-[10px] text-[var(--color-neon-primary)] font-bold bg-[var(--color-neon-primary)]/10 px-2 py-0.5 rounded">0.1%</span>
          </div>
          <h6 className="text-[10px] md:text-[12px] font-black text-[var(--color-neon-text)]  group-hover:scale-105 transition-transform origin-left">Rs 0.00</h6>
          <span className="text-[8px] text-[#F0A500] uppercase tracking-wider font-bold">Generated</span>
        </div>

        <div className="glass-card rounded-xl p-5 card-hover-lift group">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-[var(--color-neon-accent)]/20 rounded-lg flex items-center justify-center">
              <FiPackage className="text-[var(--color-neon-accent)]" />
            </div>
            <FiStar className="text-[var(--color-neon-primary)] text-xs" />
          </div>
          <h6 className="text-[10px] md:text-[12px] font-black text-[var(--color-neon-text)]  group-hover:scale-105 transition-transform origin-left">Rs 0.00</h6>
          <span className="text-[8px] text-[#F0A500] uppercase tracking-wider font-bold">Accumulated</span>
        </div>
      </div>

      {/* Transfer Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-6 animate-on-scroll">
        <button className="glass-card text-[var(--color-neon-text)] py-4 rounded-md font-bold text-sm  hover:bg-[var(--color-neon-accent)]/20 hover:border-[var(--color-neon-accent)]/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer card-hover-lift">
          <FiTrendingUp className="rotate-180" /> Transfer Out
        </button>
        <button className="btn-premium text-[var(--color-neon-bg)] py-4 rounded-xl font-bold text-sm  neon-glow flex items-center justify-center gap-2 cursor-pointer">
          <FiTrendingUp /> Transfer In
        </button>
      </div>

      {/* Security Note */}
      <div className="glass-card rounded-xl p-4 mb-6 animate-on-scroll">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-lg flex items-center justify-center flex-shrink-0">
            <FiAlertCircle className="text-black" />
          </div>
          <div>
            <p className="font-bold text-[12px] text-[var(--color-neon-text)] text-sm mb-1">Your funds are protected</p>
            <p className="text-[10px] text-[var(--color-neon-text)]/60 leading-relaxed">
              Funds are <span className="text-[var(--color-neon-primary)] font-bold">safe and secure</span>, and can be transferred at any time with no lock-up period.
            </p>
          </div>
        </div>
      </div>

      {/* Historical Records */}
      <div className="glass-card rounded-2xl p-5 mb-12 card-hover-lift animate-on-scroll group cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FiClock className="text-[var(--color-neon-bg)] text-xl" />
            </div>
            <div>
              <h6 className="font-bold text-[12px] text-[var(--color-neon-text)]">Transaction History</h6>
              <p className="text-[10px] text-[var(--color-neon-text)]/50 ">View all records</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[var(--color-neon-primary)] font-bold text-sm">
            <span>View</span>
            <div className="w-6 h-6 bg-[var(--color-neon-primary)]/20 rounded-full flex items-center justify-center group-hover:bg-[var(--color-neon-primary)]/30 transition-colors">
              <FiChevronRight className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeBox;
