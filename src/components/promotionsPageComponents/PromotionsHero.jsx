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
        <div className="text-center space-y-2 mb-2 animate-on-scroll">
          <div className="h-10 w-10  mx-auto mb-4  bg-gradient-to-br from-[#232529] to-[#1A1C20] rounded-md flex items-center justify-center shadow-[0_0_40px_rgba(240,165,0,0.4)] ">
            <FaCrown className="text-[12px]  text-[#f4f4f4]" />
          </div>

          <h1 className="text-[14px]  text-[#f4f4f4]">
            Agency{" "}
            <span className="gradient-text">Hub</span>
          </h1>

      
          <p className="text-[#f4f4f4] text-[10px]  max-w-lg mx-auto leading-relaxed">
            Manage your team and monitor your <span className="text-[var(--color-neon-primary)] font-bold">performance</span> in real-time.
          </p>
        </div>

        {/* Data Card */}
        <div className="w-full max-w-3xl mx-auto animate-on-scroll">
          <div className="glass-card rounded-md p-2 relative">

            {/* Tab Switcher */}
            <div className="glass-card p-1.5 rounded-xl mb-2 flex gap-1">
              {['1st Lvl Subordinates', '2nd Lvl Subordinates'].map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 py-[10px] text-sm font-bold text-[10px] rounded-md transition-all ${activeTab === i
                      ? 'btn-premium text-[var(--color-neon-bg)] '
                      : 'text-white hover:text-[var(--color-neon-text)]'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-2 ">
              <StatBox icon={FaUsers} label="Register users" value="1,240" />
              <StatBox icon={FiDollarSign} label="Deposit Number" value="482" accent />
              <StatBox icon={FaTrophy} label="Deposit Amount" value="$12,450" accent />
              <StatBox icon={FaRocket} label="First Deposit" value="89" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function StatBox({ icon: Icon, label, value, accent }) {
  return (
    <div className="glass-card flex flex-col items-center p-2 rounded-md card-hover-lift group relative overflow-hidden">
      {accent && <div className="absolute top-0 right-0 w-10 h-10 bg-[var(--color-neon-primary)]/10 rounded-bl-full"></div>}

      <div className="flex items-center  gap-3 mb-3">
        <div className={`w-8 h-8 rounded-md flex items-center justify-center  bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] text-[#f4f4f4]'} group-hover:scale-110 transition-transform`}>
          <Icon className="text-[12px] text-white" />
        </div>
      </div>

      <h3 className={`text-[10px] text-center text-white mb-1  text-white'}`}>
        {value}
      </h3>
      <p className="text-[8px] text-center text-white">
        {label}
      </p>
    </div>
  );
}

export default Hero;