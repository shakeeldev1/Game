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
    <div className="w-full max-w-md mx-auto bg-gradient-to-b from-white to-white min-h-screen p-4">
      
      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-sm p-2 mb-6">
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-yellow-700 hover:bg-yellow-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="space-y-6">
          {/* Total Bet */}
          <div className="pb-4 border-b border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Total bet</p>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">₹</span>
              </div>
              <h5 className="text-3xl font-bold text-gray-800">Rs 0</h5>
            </div>
          </div>

          {/* Total Win */}
          <div className="pb-4 border-b border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Total win</p>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">₹</span>
              </div>
              <h5 className="text-3xl font-bold text-gray-800">Rs 0</h5>
            </div>
          </div>

          {/* Win Percentage */}
          <div>
            <p className="text-sm text-gray-500 mb-1">Win Percentage</p>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">%</span>
              </div>
              <h5 className="text-3xl font-bold text-gray-800">0%</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Betting Stats Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h5 className="font-bold text-gray-800 text-lg mb-3">Betting Stats per Game</h5>
        
        <div className="bg-yellow-50 rounded-xl p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-yellow-200 rounded-full flex items-center justify-center">
            <span className="text-yellow-400 text-2xl">📊</span>
          </div>
          <p className="text-gray-500">No betting data available</p>
          <p className="text-sm text-gray-400 mt-2">Start playing to see your stats</p>
        </div>

        {/* Suggested Actions */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 cursor-pointer rounded-xl font-medium hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-sm">
            Explore Games
          </button>
          <button className="bg-gradient-to-r cursor-pointer from-yellow-100 to-yellow-200 text-yellow-700 py-2 rounded-xl font-medium hover:from-yellow-200 hover:to-yellow-300 transition-all duration-200 shadow-sm">
            View All Games
          </button>
        </div>
      </div>

      {/* Quick Stats Summary */}
      <div className="mt-6 bg-gradient-to-r from-yellow-200 to-orange-100 rounded-2xl p-4">
        <h6 className="font-medium text-gray-700 mb-3">Quick Summary</h6>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-yellow-600 font-bold text-lg">0</div>
            <div className="text-xs text-gray-500">Games Played</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-orange-600 font-bold text-lg">0</div>
            <div className="text-xs text-gray-500">Wins</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-yellow-700 font-bold text-lg">0%</div>
            <div className="text-xs text-gray-500">Win Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStatistics;
