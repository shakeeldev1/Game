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
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
          <div className="w-10 h-10 flex items-center justify-center rounded-full 
                          bg-gradient-to-tr from-yellow-400 to-orange-500 text-white text-lg shadow-md">
            📊
          </div>
          <h2 className="text-gray-900 font-semibold capitalize text-lg">
            Promotion Data
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm 
                         hover:shadow-lg transition hover:scale-105"
            >
              <p className="text-2xl font-extrabold bg-clip-text text-transparent 
                            bg-gradient-to-tr from-yellow-400 to-orange-500">
                {item.value}
              </p>
              <p className="text-sm text-gray-500 mt-1 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PromotionData;
