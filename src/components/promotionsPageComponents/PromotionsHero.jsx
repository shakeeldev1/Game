import React from "react";

function Hero() {
  return (
    <section className="bg-[#1a1033]/80 backdrop-blur-xl min-h-[25rem] flex flex-col items-center justify-center p-6 border-b border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px]"></div>

      <div className="max-w-4xl w-full space-y-10 relative z-10">

        {/* Top Content */}
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-extrabold tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Agency{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 font-black">
              Hub
            </span>
          </h1>

          <div className="inline-block p-[1px] rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.3)]">
            <div className="bg-[#0f0720] px-5 py-2 rounded-lg backdrop-blur-sm">
              <p className="text-cyan-400 font-bold text-sm tracking-wide">
                Yesterday’s total commission
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
            Upgrade your agency level today to increase your commission volume
            and unlock <span className="text-fuchsia-400 font-semibold">premium rewards</span>.
          </p>
        </div>

        {/* Data Card */}
        <div className="w-full">
          <div className="bg-[#1e103f]/60 backdrop-blur-md rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] p-6 border border-white/10 relative overflow-hidden">

            {/* Tabs Header */}
            <div className="flex border-b border-white/10 mb-6">
              <div className="flex-1 text-center pb-3 border-b-2 border-cyan-500 text-cyan-400 font-bold tracking-wide">
                1st Lvl Subordinates
              </div>
              <div className="flex-1 text-center pb-3 text-gray-500 hover:text-fuchsia-400 cursor-pointer transition-colors duration-300">
                2nd Lvl Subordinates
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2 text-center">
              <StatBox label="Number of Registers" value="0" color="text-white" />
              <StatBox label="Deposit Number" value="0" color="text-cyan-400" />
              <StatBox label="Deposit Amount" value="0" color="text-fuchsia-400" />
              <StatBox label="First Deposit Count" value="0" color="text-white" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Stats Box Component
function StatBox({ label, value, color }) {
  return (
    <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition duration-300 group">
      <h3 className={`text-2xl font-bold ${color} group-hover:scale-105 transition-transform drop-shadow-sm`}>{value}</h3>
      <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1 font-medium group-hover:text-gray-300">
        {label}
      </p>
    </div>
  );
}

export default Hero;
