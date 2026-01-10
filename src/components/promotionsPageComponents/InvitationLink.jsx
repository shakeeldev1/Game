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
        <button className="btn-premium uppercase py-4 px-10 text-[var(--color-neon-bg)] text-xs font-black rounded-xl cursor-pointer neon-glow tracking-[0.2em] flex items-center gap-3">
          <FaGift className="text-lg" /> Share & Earn
        </button>
      </div>

      {/* Earnings Banner */}
      <div className="gradient-border rounded-2xl p-4 mb-6 flex items-center justify-between animate-on-scroll">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-xl flex items-center justify-center neon-glow">
            <FaGem className="text-xl text-[var(--color-neon-bg)]" />
          </div>
          <div>
            <p className="text-[var(--color-neon-text)] font-bold">Earn Commission</p>
            <p className="text-[10px] text-[var(--color-neon-text)]/50">Up to 0.6% on referrals</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black gradient-text">Rs 0</p>
          <p className="text-[10px] text-[var(--color-neon-text)]/40 uppercase">Earned</p>
        </div>
      </div>

      <div className="space-y-4 pb-8">
        {/* Referral Link Card */}
        <div className="glass-card rounded-2xl p-5 card-hover-lift animate-on-scroll">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] flex items-center justify-center text-[var(--color-neon-bg)] shadow-lg">
              <FiLink className="text-2xl" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-[var(--color-neon-text)]/40 uppercase tracking-widest mb-1">Your Referral Link</p>
              <p className="text-[var(--color-neon-text)] font-bold truncate">
                https://pakgame.net/ref/HQUNXG
              </p>
            </div>

            <button
              onClick={handleCopy}
              className={`p-3 rounded-xl transition-all active:scale-90 ${copied
                  ? 'bg-green-500/20 text-green-400'
                  : 'glass-card text-[var(--color-neon-accent)] hover:text-[var(--color-neon-primary)]'
                }`}
            >
              {copied ? <FaCheck className="text-lg" /> : <FiCopy className="text-lg" />}
            </button>
          </div>

          {/* Share Buttons */}
          <div className="flex gap-2 mt-4 pt-4 border-t border-[var(--color-neon-accent)]/10">
            <button className="flex-1 py-2 glass-card rounded-lg text-[var(--color-neon-text)]/60 text-xs font-bold flex items-center justify-center gap-2 hover:text-[var(--color-neon-primary)] hover:border-[var(--color-neon-primary)]/30 transition-all">
              <FiShare2 /> Share
            </button>
            <button onClick={handleCopy} className="flex-1 py-2 btn-premium rounded-lg text-[var(--color-neon-bg)] text-xs font-bold flex items-center justify-center gap-2">
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
                <div className="w-11 h-11 rounded-xl bg-[var(--color-neon-primary)]/10 text-[var(--color-neon-primary)] flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[var(--color-neon-text)] font-bold text-sm group-hover:text-[var(--color-neon-primary)] transition-colors">
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