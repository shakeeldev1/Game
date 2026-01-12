import React, { useState } from "react";
import {
  FaCoins, FaBook, FaHeadset, FaMoneyBillWave, FaSitemap,
  FaChevronRight, FaShare, FaCheck, FaGem, FaGift
} from "react-icons/fa";
import { FiLink, FiCopy, FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";

function InvitationLink() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://pakgame.net/ref/HQUNXG");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const items = [
    { icon: <FaSitemap />, label: "Subordinate data", desc: "View team stats" },
    { icon: <FaCoins />, label: "Commission details", desc: "Track earnings" },
    { icon: <FaBook />, label: "Invitation rules", desc: "Learn & earn" },
    { icon: <FaHeadset />, label: "Customer service", desc: "24/7 support" },
    { icon: <FaMoneyBillWave />, label: "Rebate ratio", desc: "Up to 0.6%" },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4">

      {/* Primary Action Button */}
      <div className="flex items-center justify-center py-8 animate-on-scroll">
        <button className=" uppercase py-4 px-10 rounded-md glass-card text-[var(--color-neon-text)]  text-xs  tracking-[0.2em] hover:bg-[var(--color-neon-primary)]/10 hover:border-[var(--color-neon-primary)]/30 transition-all active:scale-95  flex items-center justify-center gap-2">
          <FaGift className="text-lg" /> Share & Earn
        </button>
      </div>

      {/* Earnings Banner */}
      <div className="border border-[#CF7500] rounded-md p-4 mb-6 flex items-center justify-between animate-on-scroll">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6  md:w-8 md:h-8  bg-gradient-to-br from-[#232529] to-[#1A1C20] rounded-md flex items-center justify-center border border-[#CF7500]">
            <FaGem className="text-xs text-[#f4f4f4]" />
          </div>
          <div>
            <p className="text-[var(--color-neon-text)] text-[10px] md:text-xs">Earn Commission</p>
            <p className=" text-[var(--color-neon-text)]/50  text-[8px] md:text-xs">Up to 0.6% on referrals</p>
          </div>
        </div>
        <div className="text-right">
          <p className=" text-[10px] md:text-xs font-black gradient-text">Rs 0</p>
          <p className=" text-[10px] md:text-xs text-[var(--color-neon-text)]/40 uppercase">Earned</p>
        </div>
      </div>

      <div className="space-y-4 pb-8">
        {/* Referral Link Card */}
        <div className="glass-card rounded-2xl p-5 card-hover-lift animate-on-scroll">
          <div className="flex items-center gap-4">
            <div className="h-6 w-6  md:w-8 md:h-8 border border-[#CF7500] rounded-md  bg-gradient-to-br from-[#232529] to-[#1A1C20] flex items-center justify-center text-[var(--color-neon-bg)] shadow-lg">
              <FiLink className="text-xs text-[#f4f4f4]" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[10px] md:text-xs font-bold text-[#f4f4f4] uppercase tracking-widest mb-1">Your Referral Link</p>
              <p className="text-[var(--color-neon-text)] text-[8px] md:text-xs ">
                https://pakgame.net/ref/HQUNXG
              </p>
            </div>

            <button
              onClick={handleCopy}
              className={`p-3 rounded-md  h-6 w-8  md:w-8 md:h-8 transition-all active:scale-90 ${copied
                  ? 'bg-green-500/20 text-green-400'
                  : 'glass-card text-[#f4f4f4] hover:text-[var(--color-neon-primary)]'
                }`}
            >
              {copied ? <FaCheck className="text-xs -mt-3 mr-3" /> : <FiCopy className="text-xs -mt-1 mr-7" />}
            </button>
          </div>

          {/* Share Buttons */}
          <div className="flex gap-2 mt-4 pt-4 border-t border-[#CF7500]">
            <button className="flex-1 py-2 glass-card rounded-md text-[var(--color-neon-text)]/60 text-[10px] md:text-xs  flex items-center justify-center gap-2 hover:text-[var(--color-neon-primary)] hover:border-[var(--color-neon-primary)]/30 transition-all">
              <FiShare2 /> Share
            </button>
            <button onClick={handleCopy} className="flex-1 py-2 btn-premium rounded-md text-[var(--color-neon-bg)] text-[10px] md:text-xs font-bold flex items-center justify-center gap-2">
              <FiCopy /> Copy Link
            </button>
          </div>
        </div>

        {/* Navigation List */}
        <div className="glass-card rounded-2xl overflow-hidden animate-on-scroll stagger-children">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 hover:bg-[var(--color-neon-primary)]/5 cursor-pointer transition-all group border-b border-[var(--color-neon-accent)]/10 last:border-0"
            >
              <div className="flex items-center gap-4">
                <div className="h-8 w-8  md:w-10 md:h-10 rounded-md  bg-gradient-to-br from-[#232529] to-[#1A1C20] text-[#f4f4f4] border border-[#CF7500] flex items-center justify-center md:text-lg text-xs group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[var(--color-neon-text)] font-bold md:text-xs text-[10px] md:text-md group-hover:text-[var(--color-neon-primary)] transition-colors">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-[var(--color-neon-text)]/40">{item.desc}</p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-[var(--color-neon-accent)] group-hover:text-[var(--color-neon-primary)] group-hover:translate-x-1 transition-all">
                <FaChevronRight className="text-xs" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InvitationLink;