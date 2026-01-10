import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FaUsers, FaCrown, FaTrophy, FaRocket } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";

function Hero() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="flex flex-col items-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[var(--color-neon-primary)]/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[var(--color-neon-accent)]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl w-full relative z-10">

       

        {/* Header Section */}
        <div className="text-center space-y-5 mb-10 animate-on-scroll">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(240,165,0,0.4)] rotate-3">
            <FaCrown className="text-3xl text-[var(--color-neon-bg)]" />
          </div>

          <h1 className="text-5xl font-black tracking-tight text-[var(--color-neon-text)]">
            Agency{" "}
            <span className="gradient-text">Hub</span>
          </h1>

          <div className="inline-flex items-center px-5 py-2 rounded-full glass-card">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-neon-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-neon-primary)]"></span>
            </span>
            <p className="text-[var(--color-neon-text)]/50 font-bold text-[10px] uppercase tracking-[0.2em]">
              Yesterday's total commission
            </p>
          </div>

          <p className="text-[var(--color-neon-text)]/60 text-lg max-w-lg mx-auto leading-relaxed font-medium">
            Manage your team and monitor your <span className="text-[var(--color-neon-primary)] font-bold">performance</span> in real-time.
          </p>
        </div>

        {/* Data Card */}
        <div className="w-full max-w-3xl mx-auto animate-on-scroll">
          <div className="glass-card rounded-[2rem] p-6 relative">

            {/* Tab Switcher */}
            <div className="glass-card p-1.5 rounded-xl mb-6 flex gap-1">
              {['1st Lvl Subordinates', '2nd Lvl Subordinates'].map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${activeTab === i
                      ? 'btn-premium text-[var(--color-neon-bg)]'
                      : 'text-[var(--color-neon-text)]/50 hover:text-[var(--color-neon-text)]'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 stagger-children">
              <StatBox icon={FaUsers} label="Number of Registers" value="1,240" />
              <StatBox icon={FiDollarSign} label="Deposit Number" value="482" accent />
              <StatBox icon={FaTrophy} label="Deposit Amount" value="$12,450" accent />
              <StatBox icon={FaRocket} label="First Deposit Count" value="89" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function StatBox({ icon: Icon, label, value, accent }) {
  return (
    <div className="glass-card p-5 rounded-2xl card-hover-lift group relative overflow-hidden">
      {accent && <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--color-neon-primary)]/10 rounded-bl-full"></div>}

      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accent ? 'bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] text-[var(--color-neon-bg)]' : 'bg-[var(--color-neon-primary)]/10 text-[var(--color-neon-primary)]'} group-hover:scale-110 transition-transform`}>
          <Icon className="text-lg" />
        </div>
      </div>

      <h3 className={`text-2xl font-black tracking-tight mb-1 ${accent ? 'gradient-text' : 'text-[var(--color-neon-text)]'}`}>
        {value}
      </h3>
      <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-neon-text)]/40 group-hover:text-[var(--color-neon-text)]/60">
        {label}
      </p>
    </div>
  );
}

export default Hero;