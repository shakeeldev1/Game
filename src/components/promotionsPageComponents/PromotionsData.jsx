import React from "react";
import { FaChartLine, FaUsers, FaWallet, FaTrophy, FaFire } from "react-icons/fa";
import { FiTrendingUp, FiDollarSign, FiUsers, FiBarChart2 } from "react-icons/fi";

function PromotionData() {
  const stats = [
    { value: "Rs 0.00", label: "This week", icon: FiTrendingUp, accent: true },
    { value: "Rs 0.00", label: "Total commission", icon: FiDollarSign, accent: true },
    { value: "0", label: "Direct subordinates", icon: FiUsers },
    { value: "0", label: "Total subordinates", icon: FiBarChart2 },
  ];

  return (
    <div className="px-4 max-w-2xl mx-auto">
      <div className="glass-card rounded-2xl p-5 relative overflow-hidden animate-on-scroll">

        {/* Decorative */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-neon-primary)]/10 rounded-bl-full"></div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="md:w-10 md:h-10  h-8 w-8 bg-gradient-to-br from-[#232529] to-[#1A1C20] rounded-md flex text-[12px] md:text-xs items-center justify-center text-[#f4f4f4] border border-[#CF7500] shadow-lg neon-glow">
              <FaChartLine />
            </div>
            <div>
              <h2 className="text-[var(--color-neon-text)] font-black text-[12px] md:text-lg">
                Promotion Data
              </h2>
              <p className="text-[8px] md:text-[10px] text-[var(--color-neon-text)]/40 uppercase tracking-wider">Real-time stats</p>
            </div>
          </div>
         
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 relative z-10 stagger-children">
          {stats.map((item, index) => (
            <div
              key={index}
              className="glass-card p-4 rounded-xl card-hover-lift group relative overflow-hidden"
            >
              {item.accent && (
                <div className="absolute top-0 right-0 w-12 h-12 bg-[var(--color-neon-primary)]/5 rounded-bl-full"></div>
              )}

              <div className="flex items-center justify-between mb-3">
                <div className='w-7 h-7 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform 
                    md:w-10 md:h-10  h-8 w-8 bg-gradient-to-br from-[#232529] to-[#1A1C20] rounded-md flex text-[12px] md:text-xs items-center justify-center text-[#f4f4f4] border border-[#CF7500] shadow-lg neon-glow'>
                  <item.icon className="text-[10px] md:text-xs" />
                </div>
                {item.accent && <FaFire className="text-[var(--color-neon-primary)] md:text-xs animate-pulse" />}
              </div>

              <div>
                <p className='text-xs font-black tracking-tight truncate text-[var(--color-neon-text)]'>
                  {item.value}
                </p>
                <p className="text-[8px] md:text-xs text-[var(--color-neon-text)]/40 font-bold uppercase tracking-wide truncate mt-0.5">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-5 pt-5 border-t border-[var(--color-neon-accent)]/10 grid grid-cols-2 gap-3">
          <button className="btn-premium py-3 rounded-xl text-[var(--color-neon-bg)] text-xs font-bold flex items-center justify-center gap-2">
            <FaTrophy /> Claim Rewards
          </button>
          <button className="glass-card py-3 rounded-xl text-[var(--color-neon-text)]/60 text-xs font-bold flex items-center justify-center gap-2 hover:text-[var(--color-neon-primary)] hover:border-[var(--color-neon-primary)]/30 transition-all">
            <FaUsers /> View Team
          </button>
        </div>
      </div>
    </div>
  );
}

export default PromotionData;