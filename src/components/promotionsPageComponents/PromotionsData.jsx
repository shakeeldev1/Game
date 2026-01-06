import React from "react";

function PromotionData() {
  const stats = [
    { value: 0, label: "This week" },
    { value: 0, label: "Total commission" },
    { value: 0, label: "Direct subordinate" },
    { value: 0, label: "Total number of subordinates in the team" },
  ];

  return (
    <div className="px-6 my-10">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-lg">
            📊
          </div>
          <h2 className="text-gray-800 font-semibold capitalize">
            promotion data
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-orange-500">{item.value}</p>
              <p className="text-sm text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PromotionData;
