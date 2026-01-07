import React from "react";
import { IoAlertCircleOutline, IoChevronBack } from "react-icons/io5";

function Hero() {
  return (
    <section className="bg-[#f8fafc] min-h-screen flex flex-col items-center p-6 relative overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-cyan-100/40 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-fuchsia-100/40 rounded-full blur-[100px]"></div>

      <div className="max-w-4xl w-full relative z-10">
        
        {/* Top Navigation - Back Button & Path */}
        <div className="flex items-center justify-between mb-10">
          <button 
            onClick={() => window.history.back()}
            className="px-2 py-1.5 text-xs font-bold rounded-full cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400/30 uppercase tracking-wide text-nowrap flex items-center" 
          >
            <IoChevronBack className="text-slate-50 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm font-bold text-slate-50">Back</span>
          </button>
          
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <span>Home</span>
            <span className="text-slate-300">/</span>
            <span className="text-fuchsia-500">Agency Center</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center space-y-5 mb-12">
          <h1 className="text-6xl font-black tracking-tight text-slate-900">
            Agency{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-600">
              Hub
            </span>
          </h1>

          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">
              Yesterday’s total commission
            </p>
          </div>

          <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed font-medium">
            Manage your subordinates and monitor your <span className="text-slate-900 font-bold">performance metrics</span> in real-time.
          </p>
        </div>

        {/* Data Card */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] p-8 border border-slate-50 relative">
            
            {/* Tab Switcher */}
            <div className="flex bg-slate-50 p-1.5 rounded-2xl mb-8 border border-slate-100">
              <button className="flex-1 py-3 text-sm font-bold rounded-xl bg-white shadow-sm text-slate-900 transition-all">
                1st Lvl Subordinates
              </button>
              <button className="flex-1 py-3 text-sm font-bold text-slate-400 hover:text-slate-600 transition-all">
                2nd Lvl Subordinates
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <StatBox label="Number of Registers" value="1,240" color="text-slate-900" />
              <StatBox label="Deposit Number" value="482" color="text-cyan-600" />
              <StatBox label="Deposit Amount" value="$12,450" color="text-fuchsia-600" />
              <StatBox label="First Deposit Count" value="89" color="text-slate-900" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function StatBox({ label, value, color }) {
  return (
    <div className="p-6 bg-slate-50/50 border border-slate-100 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-[1.02] group">
      <h3 className={`text-3xl font-black ${color} tracking-tight mb-1`}>
        {value}
      </h3>
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-500">
        {label}
      </p>
    </div>
  );
}

export default Hero;