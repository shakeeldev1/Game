import React from "react";

function Hero() {
  return (
    <section className="bg-black text-white min-h-125 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Left Side: Content */}
        <div className="text-center space-y-8 pb-10">
          <h1 className="text-5xl font-extrabold uppercase tracking-tighter">
            Agency{" "}
            <span className="text-orange-500 underline decoration-yellow-400">
              Hub
            </span>
          </h1>
          <div className="bg-linear-to-r from-orange-600 to-yellow-500 p-0.5 rounded-lg inline-block">
            <div className="bg-black px-4 py-2 rounded-lg">
              <p className="text-yellow-400 font-medium">
                Yesterday’s total commission
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-lg">
            Upgrade your agency level today to increase your commission volume
            and unlock premium rewards.
          </p>
        </div>

        {/* Right Side: Data Card (Inspired by Image) */}
        <div className="bg-white rounded-3xl p-1 shadow-[0_20px_50px_rgba(255,165,0,0.2)] overflow-hidden">
          <div className="bg-black rounded-[calc(1.5rem-1px)] p-6 border border-gray-800">
            {/* Tabs Header */}
            <div className="flex border-b border-gray-800 mb-6">
              <div className="flex-1 text-center pb-3 border-b-2 border-orange-500 text-orange-500 font-bold">
                1st Lvl Subordinates
              </div>
              <div className="flex-1 text-center pb-3 text-gray-500 hover:text-yellow-400 cursor-pointer transition">
                2nd Lvl Subordinates
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid  gap-4 text-center">
              <StatBox
                label="Number of Registers"
                value="0"
                color="text-white"
              />
              <StatBox
                label="Deposit Number"
                value="0"
                color="text-yellow-400"
              />
              <StatBox
                label="Deposit Amount"
                value="0"
                color="text-orange-500"
              />
              <StatBox
                label="First Deposit Count"
                value="0"
                color="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Chota component stats display karne ke liye
function StatBox({ label, value, color }) {
  return (
    <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
      <h3 className={`text-2xl font-black ${color}`}>{value}</h3>
      <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">
        {label}
      </p>
    </div>
  );
}

export default Hero;
