import React, { useState } from 'react';

const GameStatistics = () => {
  const [activeTab, setActiveTab] = useState('alltime');

  const tabs = [
    { id: 'today', label: 'Today' },
    { id: 'yesterday', label: 'Yesterday' },
    { id: 'thisweek', label: 'This week' },
    { id: 'thismonth', label: 'This month' },
    { id: 'alltime', label: 'All Time' }
  ];

  return (
    <div className="w-full max-w-md mx-auto min-h-screen p-4 pb-20">

      {/* Tab Navigation */}
      <div className="bg-[#1a1033]/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/5 p-2 mb-6">
        <div className="flex overflow-x-auto space-x-2 pb-2 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-[#1a1033]/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/5 p-6 mb-6 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl"></div>

        <div className="space-y-6 relative z-10">
          {/* Total Bet */}
          <div className="pb-4 border-b border-white/5 ml-2">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Total bet</p>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg border border-white/10">
                <span className="text-white font-bold text-xl">₹</span>
              </div>
              <h5 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-sm">Rs 0</h5>
            </div>
          </div>

          {/* Total Win */}
          <div className="pb-4 border-b border-white/5 ml-2">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Total Win</p>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg border border-white/10">
                <span className="text-white font-bold text-xl">₹</span>
              </div>
              <h5 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-sm">Rs 0</h5>
            </div>
          </div>

          {/* Win Percentage */}
          <div className="ml-2">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Win Percentage</p>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg border border-white/10">
                <span className="text-white font-bold text-xl">%</span>
              </div>
              <h5 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-sm">0%</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Betting Stats Section */}
      <div className="bg-[#1a1033]/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/5 p-6">
        <h5 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-cyan-500 rounded-full"></span>
          Betting Stats per Game
        </h5>

        <div className="bg-[#0f0720]/60 rounded-xl p-8 text-center border border-white/5">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center border border-white/5">
            <span className="text-4xl">📊</span>
          </div>
          <p className="text-gray-300 font-medium">No betting data available</p>
          <p className="text-xs text-gray-600 mt-2 uppercase tracking-wider">Start playing to see your stats</p>
        </div>

        {/* Suggested Actions */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white py-3 cursor-pointer rounded-xl font-bold text-sm tracking-wide hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-200 shadow-[0_0_20px_rgba(217,70,239,0.3)] border border-fuchsia-500/30">
            Explore Games
          </button>
          <button className="bg-transparent border border-white/10 text-gray-300 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-white/5 hover:text-white hover:border-white/30 transition-all duration-200 cursor-pointer">
            View All Games
          </button>
        </div>
      </div>

      {/* Quick Stats Summary */}
      <div className="mt-6 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/20 rounded-2xl p-5 backdrop-blur-sm">
        <h6 className="font-bold text-cyan-400 mb-4 text-xs uppercase tracking-widest">Quick Summary</h6>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#0f0720]/80 rounded-xl p-3 text-center border border-cyan-500/10">
            <div className="text-cyan-400 font-black text-xl">0</div>
            <div className="text-[10px] text-gray-500 font-bold uppercase mt-1">Games Played</div>
          </div>
          <div className="bg-[#0f0720]/80 rounded-xl p-3 text-center border border-cyan-500/10">
            <div className="text-fuchsia-400 font-black text-xl">0</div>
            <div className="text-[10px] text-gray-500 font-bold uppercase mt-1">Wins</div>
          </div>
          <div className="bg-[#0f0720]/80 rounded-xl p-3 text-center border border-cyan-500/10">
            <div className="text-yellow-400 font-black text-xl">0%</div>
            <div className="text-[10px] text-gray-500 font-bold uppercase mt-1">Win Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStatistics;
