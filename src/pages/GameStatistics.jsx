import React, { useState } from 'react';
import { FaGamepad, FaTrophy, FaChartLine, FaFire, FaMedal, FaStar } from 'react-icons/fa';
import { FiTrendingUp, FiPercent, FiDollarSign } from 'react-icons/fi';

const GameStatistics = () => {
  const [activeTab, setActiveTab] = useState('alltime');

  const tabs = [
    { id: 'today', label: 'Today', icon: '🔥' },
    { id: 'yesterday', label: 'Yesterday', icon: '📅' },
    { id: 'thisweek', label: 'Week', icon: '📊' },
    { id: 'thismonth', label: 'Month', icon: '📈' },
    { id: 'alltime', label: 'All Time', icon: '🏆' }
  ];

  const stats = [
    { label: 'Total Bet', value: 'Rs 0', icon: FiDollarSign, color: 'from-[var(--color-neon-primary)] to-[var(--color-neon-accent)]' },
    { label: 'Total Win', value: 'Rs 0', icon: FaTrophy, color: 'from-[var(--color-neon-accent)] to-[var(--color-neon-primary)]' },
    { label: 'Win Rate', value: '0%', icon: FiPercent, color: 'from-[var(--color-neon-primary)] to-[var(--color-neon-accent)]' },
  ];

  return (
    <div className="w-full max-w-md mx-auto min-h-screen p-4 pb-20 particles-bg">

      {/* Header */}
      <div className="text-center mb-6 animate-on-scroll">
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(240,165,0,0.4)] rotate-3">
          <FaChartLine className="text-2xl text-[var(--color-neon-bg)]" />
        </div>
        <h1 className="text-2xl font-black gradient-text">Game Statistics</h1>
        <p className="text-[var(--color-neon-text)]/50 text-sm mt-1">Track your gaming journey</p>
      </div>

      {/* Tab Navigation - Pill Style */}
      <div className="glass-card rounded-2xl p-2 mb-6 animate-on-scroll">
        <div className="flex overflow-x-auto gap-1 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-max px-4 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 flex items-center justify-center gap-1.5 ${activeTab === tab.id
                  ? 'btn-premium text-[var(--color-neon-bg)] neon-glow'
                  : 'text-[var(--color-neon-text)]/50 hover:text-[var(--color-neon-text)] hover:bg-[var(--color-neon-primary)]/10'
                }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="space-y-4 mb-6 stagger-children">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-5 card-hover-lift relative overflow-hidden group"
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>

            <div className="relative z-10 flex items-center gap-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <stat.icon className="text-2xl text-[var(--color-neon-bg)]" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-[var(--color-neon-text)]/50 uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-black gradient-text">{stat.value}</p>
              </div>
              <FiTrendingUp className="text-[var(--color-neon-primary)] text-xl opacity-50" />
            </div>
          </div>
        ))}
      </div>

      {/* Betting Stats Section */}
      <div className="glass-card rounded-2xl p-6 mb-6 animate-on-scroll">
        <h5 className="font-bold text-[var(--color-neon-text)] text-lg mb-4 flex items-center gap-2">
          <FaGamepad className="text-[var(--color-neon-primary)]" />
          Game Performance
        </h5>

        <div className="bg-[var(--color-neon-bg)]/60 rounded-xl p-8 text-center border border-[var(--color-neon-accent)]/10">
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[var(--color-neon-primary)]/20 to-[var(--color-neon-accent)]/20 rounded-full flex items-center justify-center border-2 border-dashed border-[var(--color-neon-primary)]/30 animate-pulse">
            <FaFire className="text-4xl text-[var(--color-neon-primary)]" />
          </div>
          <p className="text-[var(--color-neon-text)]/80 font-bold text-lg mb-1">Start Playing!</p>
          <p className="text-xs text-[var(--color-neon-text)]/50">Your stats will appear here</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="btn-premium text-[var(--color-neon-bg)] py-3.5 rounded-xl font-bold text-sm tracking-wide neon-glow flex items-center justify-center gap-2">
            <FaGamepad /> Explore
          </button>
          <button className="glass-card text-[var(--color-neon-text)] py-3.5 rounded-xl font-bold text-sm tracking-wide hover:border-[var(--color-neon-primary)]/50 flex items-center justify-center gap-2 transition-all">
            <FaStar /> All Games
          </button>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="gradient-border rounded-2xl p-5 animate-on-scroll">
        <h6 className="font-bold text-[var(--color-neon-primary)] mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
          <FaMedal /> Quick Summary
        </h6>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: '0', label: 'Played', color: 'text-[var(--color-neon-primary)]' },
            { value: '0', label: 'Wins', color: 'text-[var(--color-neon-accent)]' },
            { value: '0%', label: 'Rate', color: 'text-[var(--color-neon-primary)]' },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-3 text-center card-hover-lift">
              <div className={`${item.color} font-black text-2xl`}>{item.value}</div>
              <div className="text-[10px] text-[var(--color-neon-text)]/50 uppercase mt-1 font-bold">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameStatistics;
