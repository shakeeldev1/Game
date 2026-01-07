import React from "react";
import { IoBarChartOutline, IoTrendingUpOutline, IoPeopleOutline, IoWalletOutline } from "react-icons/io5";

function PromotionData() {
  const stats = [
    { value: "0.00", label: "This week", icon: <IoTrendingUpOutline />, color: "text-cyan-600", bg: "bg-cyan-50" },
    { value: "0.00", label: "Total commission", icon: <IoWalletOutline />, color: "text-fuchsia-600", bg: "bg-fuchsia-50" },
    { value: "0", label: "Direct sub", icon: <IoPeopleOutline />, color: "text-blue-600", bg: "bg-blue-50" },
    { value: "0", label: "Total sub", icon: <IoBarChartOutline />, color: "text-slate-900", bg: "bg-slate-100" },
  ];

  return (
    <div className="px-4 my-6">
      <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 p-5 relative overflow-hidden">
        
        {/* Header - Compact for mobile */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-700 border border-slate-100">
              <IoBarChartOutline size={20} />
            </div>
            <h2 className="text-slate-900 font-bold text-lg tracking-tight">
              Promotion Data
            </h2>
          </div>
          <div className="hidden xs:block px-2 py-1 bg-green-50 rounded-md border border-green-100">
            <span className="text-[9px] font-bold text-green-600 uppercase tracking-tight">Live</span>
          </div>
        </div>

        {/* Stats Grid - Responsive logic to prevent wrapping */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-8 h-8 ${item.bg} ${item.color} rounded-lg flex items-center justify-center text-lg`}>
                  {item.icon}
                </div>
              </div>
              
              <div>
                <p className={`text-xl xs:text-2xl font-black ${item.color} tracking-tight truncate`}>
                  {item.value}
                </p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide truncate mt-0.5">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PromotionData;