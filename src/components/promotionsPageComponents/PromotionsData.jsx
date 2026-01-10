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
    <div className="px-4 my-6 max-w-2xl mx-auto">
      <div className="glass-card rounded-2xl p-5 relative overflow-hidden animate-on-scroll">

        {/* Decorative */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-neon-primary)]/10 rounded-bl-full"></div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-xl flex items-center justify-center text-[var(--color-neon-bg)] shadow-lg neon-glow">
              <FaChartLine size={20} />
            </div>
            <div>
              <h2 className="text-[var(--color-neon-text)] font-black text-lg">
                Promotion Data
              </h2>
              <p className="text-[10px] text-[var(--color-neon-text)]/40 uppercase tracking-wider">Real-time stats</p>
            </div>
          </div>
          <div className="px-3 py-1 bg-green-500/20 rounded-lg border border-green-500/30 flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-green-400 uppercase">Live</span>
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
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${item.accent
                    ? 'bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] text-[var(--color-neon-bg)]'
                    : 'bg-[var(--color-neon-primary)]/10 text-[var(--color-neon-primary)]'
                  }`}>
                  <item.icon className="text-lg" />
                </div>
                {item.accent && <FaFire className="text-[var(--color-neon-primary)] text-xs animate-pulse" />}
              </div>

              <div>
                <p className={`text-xl font-black tracking-tight truncate ${item.accent ? 'gradient-text' : 'text-[var(--color-neon-text)]'}`}>
                  {item.value}
                </p>
                <p className="text-[10px] text-[var(--color-neon-text)]/40 font-bold uppercase tracking-wide truncate mt-0.5">
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