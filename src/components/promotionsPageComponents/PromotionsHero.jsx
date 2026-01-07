import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50 text-gray-900 min-h-[32rem] flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-12">

        {/* Top Content */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tighter">
            Agency{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-400 to-orange-500">
              Hub
            </span>
          </h1>

          <div className="inline-block bg-gradient-to-tr from-yellow-400 to-orange-500 p-0.5 rounded-lg">
            <div className="bg-white px-5 py-2 rounded-lg">
              <p className="text-orange-500 font-medium text-sm">
                Yesterday’s total commission
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Upgrade your agency level today to increase your commission volume
            and unlock premium rewards.
          </p>
        </div>

        {/* Data Card */}
        <div className="w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">

            {/* Tabs Header */}
            <div className="flex border-b border-gray-200 mb-6">
              <div className="flex-1 text-center pb-3 border-b-2 border-gradient-to-tr from-yellow-400 to-orange-500 text-transparent bg-clip-text font-bold">
                1st Lvl Subordinates
              </div>
              <div className="flex-1 text-center pb-3 text-gray-400 hover:text-yellow-500 cursor-pointer transition">
                2nd Lvl Subordinates
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2 text-center">
              <StatBox label="Number of Registers" value="0" color="text-gray-900" />
              <StatBox label="Deposit Number" value="0" color="text-yellow-400" />
              <StatBox label="Deposit Amount" value="0" color="text-orange-500" />
              <StatBox label="First Deposit Count" value="0" color="text-gray-900" />
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
    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <h3 className={`text-2xl font-bold ${color}`}>{value}</h3>
      <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
        {label}
      </p>
    </div>
  );
}

export default Hero;
