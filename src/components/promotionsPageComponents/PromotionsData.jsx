import React from "react";

function PromotionData() {
  const stats = [
    { value: 0, label: "This week" },
    { value: 0, label: "Total commission" },
    { value: 0, label: "Direct subordinate" },
    { value: 0, label: "Total number of subordinates" },
  ];

  return (
    <div className="px-6 my-8">
      <div className="bg-[#1a1033]/80 backdrop-blur-xl rounded-3xl shadow-lg border border-white/5 p-6 space-y-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px]"></div>

        {/* Header */}
        <div className="flex items-center gap-4 border-b border-white/5 pb-5 relative z-10">
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl 
                          bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-2xl shadow-inner border border-white/5">
            📊
          </div>
          <h2 className="text-white font-bold capitalize text-xl tracking-wide">
            Promotion Data
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 relative z-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-[#0f0720]/50 rounded-2xl border border-white/5 shadow-inner 
                         hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <p className="text-2xl font-black bg-clip-text text-transparent 
                            bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm group-hover:from-cyan-300 group-hover:to-blue-400">
                {item.value}
              </p>
              <p className="text-xs text-gray-500 mt-2 font-medium leading-tight group-hover:text-gray-400 transition-colors uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PromotionData;
