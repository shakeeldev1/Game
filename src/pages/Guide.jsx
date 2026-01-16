import React, { useState } from 'react';
import {
  FiUserPlus, FiDollarSign, FiCreditCard, FiGift, FiLock, FiUsers,
  FiKey, FiDownload, FiInfo, FiChevronDown, FiChevronUp, FiCheckCircle,
  FiPercent, FiShield, FiBell, FiHelpCircle
} from 'react-icons/fi';
import { FaRocket, FaGem, FaBook, FaLightbulb, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Guide = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const guideSections = [
    {
      id: 1, title: "How to Register", icon: FiUserPlus, emoji: "📝",
      content: ["Fill Your Phone Number", "Set Your Own Password (6 letters)", "Confirm The Password", "Fill Your Recommendation Code", "Click 'I Have Read And Agree'", "Click Register"]
    },
    {
      id: 2, title: "How to Recharge", icon: FiDollarSign, emoji: "💰",
      content: ["Click Wallet Icon", "Click The Recharge Button", "We have multiple payment methods:", "• BANK TRANSFER", "• E-WALLET"]
    },
    {
      id: 3, title: "How to Withdraw", icon: FiCreditCard, emoji: "💳",
      content: ["Click Wallet Icon", "Click Withdraw Button", "Enter withdraw amount", "Make sure your total bet until zero", "Select your bank account or add new", "Input amount you want to withdraw", "Input your login password"]
    },
    {
      id: 4, title: "Promotion", icon: FiPercent, emoji: "🎯",
      content: ["If you have referral members using your link:", "• Minimum commission of 0.6% (level 1)", "• Minimum commission of 0.18% (level 2)", "Commission added daily at 00:30 AM", "Additional bonus based on accumulated transactions"]
    },
    {
      id: 5, title: "Account Security", icon: FiShield, emoji: "🔐",
      content: ["Go to My Profile", "Click Settings Icon", "Click Login Password", "Re-enter your current password", "Enter strongest new password", "Confirm your new password", "Click Save Changes"]
    },
    {
      id: 6, title: "Invitation Bonus", icon: FiUsers, emoji: "🎁",
      content: ["Meet the 'Invitation Bonus' requirements", "Click the 'Invitation Bonus' section", "Claim your bonus directly", "Bonuses available based on referral activity"]
    },
    {
      id: 7, title: "Forgot Password", icon: FiKey, emoji: "🔑",
      content: ["If you forget your login password", "Please contact Customer Service immediately", "Our 24/7 support team will assist you"]
    },
    {
      id: 8, title: "App Download", icon: FiDownload, emoji: "📲",
      content: ["Click top right corner download icon", "Download the app for easy access", "Available on multiple platforms", "Enhanced mobile experience"]
    },
    {
      id: 9, title: "About", icon: FiInfo, emoji: "ℹ️",
      content: ["Click About for more details", "Privacy Policy information", "Risk Disclosure Agreement", "Terms and conditions"]
    },
    {
      id: 10, title: "Gift", icon: FiGift, emoji: "🎉",
      content: ["Click Gift Exchange", "Input the unique redemption code", "Click Receive to claim", "Instant money transfer to wallet"]
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto min-h-screen p-4 pb-2 particles-bg">
      {/* Header */}
      <Link to="/account">
        <button
          className="flex items-center gap-2  px-2 py-2 bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] rounded-md text-[#f4f4f4] text-xs font-bold text-[10px]  uppercase tracking-wider hover:bg-gradient-to-r hover:from-[#ffd700] hover:to-[#ff8c00] ml-3 hover:text-[#0f0f13] transition-all duration-300  mb-2"
        >
          <FaArrowLeft className='text-[10px] ' />
          Back
        </button>
      </Link>
      <div className="text-center mb-2 animate-on-scroll">
        <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#232529] to-[#1A1C20] rounded-md flex items-center justify-center shadow-[0_0_40px_rgba(240,165,0,0.4)]  transition-transform duration-500">
          <FaBook className="text-[13px] text-[#f4f4f4]" />
        </div>
        <h1 className="text-[13px] font-black gradient-text mb-2">Beginner's Guide</h1>
        <p className="text-[var(--color-neon-text)]/60 text-[10px] flex items-center justify-center gap-2">
          <FaLightbulb className="text-[var(--color-neon-primary)]" />
          Step-by-step instructions to get started
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="glass-card rounded-md p-2 mb-2 animate-on-scroll">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[12px] text-[#f4f4f4] uppercase tracking-wider">Your Progress</span>
          <span className="text-xs text-[var(--color-neon-primary)]">0/{guideSections.length}</span>
        </div>
        <div className="h-2 bg-[var(--color-neon-bg)]/50 rounded-full overflow-hidden">
          <div className="h-full w-0 bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-full transition-all duration-500"></div>
        </div>
      </div>

      {/* Guide Sections */}
      <div className="space-y-2 stagger-children">
        {guideSections.map((section, index) => (
          <div
            key={section.id}
            className="glass-card rounded-md overflow-hidden card-hover-lift"
          >
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-2 flex items-center justify-between hover:bg-[var(--color-neon-primary)]/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-[13px]">{section.emoji}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 md:h-4 md:w-4 w-3 h-3 bg-[var(--color-neon-bg)] rounded-full flex items-center justify-center text-[10px] font-bold text-[var(--color-neon-primary)] border border-[var(--color-neon-primary)]/30">
                    {section.id}
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-[12px] text-[var(--color-neon-text)] group-hover:text-[var(--color-neon-primary)] transition-colors">{section.title}</h3>
                  <p className="text-[9px] text-[var(--color-neon-text)]/40 uppercase tracking-wider">{section.content.length} steps</p>
                </div>
              </div>
              <div className={`w-4 h-4 rounded-full bg-[var(--color-neon-primary)]/10 flex items-center justify-center transition-transform duration-300 ${expandedSections[section.id] ? 'rotate-180' : ''}`}>
                <FiChevronDown className="text-[9px] text-[var(--color-neon-primary)]" />
              </div>
            </button>

            {/* Expandable Content */}
            {expandedSections[section.id] && (
              <div className="px-4 pb-4 border-t border-[var(--color-neon-accent)]/10 pt-4 bg-[var(--color-neon-bg)]/30 animate-on-scroll">
                <ul className="space-y-2">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[var(--color-neon-text)]/80 text-sm group">
                      <div className="w-3 h-3 rounded-full bg-[var(--color-neon-primary)]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[var(--color-neon-primary)]/30 transition-colors">
                        <FiCheckCircle className="w-3 h-3 text-[var(--color-neon-primary)]" />
                      </div>
                      <span className="text-[12px] group-hover:text-[var(--color-neon-text)] transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                {section.id === 4 && (
                  <div className="mt-4 gradient-border rounded-xl p-4">
                    <h4 className="font-bold text-[var(--color-neon-primary)] mb-3 flex items-center gap-2 text-sm">
                      <FiBell /> Commission Structure
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="glass-card rounded-lg p-3 text-center">
                        <div className="text-[var(--color-neon-primary)] font-black text-lg">0.6%</div>
                        <div className="text-[10px] text-[var(--color-neon-text)]/50 uppercase">Level 1</div>
                      </div>
                      <div className="glass-card rounded-lg p-3 text-center">
                        <div className="text-[var(--color-neon-accent)] font-black text-lg">0.18%</div>
                        <div className="text-[10px] text-[var(--color-neon-text)]/50 uppercase">Level 2</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="mt-2 gradient-border rounded-md p-2 animate-on-scroll">
        <h3 className="font-bold text-[var(--color-neon-primary)] text-[12px] mb-2 flex items-center gap-2">
          <FaRocket /> Quick Features
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: '⏰', title: '24/7', desc: 'Support' },
            { icon: '⚡', title: 'Instant', desc: 'Withdrawals' },
            { icon: '🔒', title: 'Secure', desc: 'Transactions' },
            { icon: '🎁', title: 'Daily', desc: 'Bonuses' },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-md p-2 text-center card-hover-lift">
              <div className="text-[12px] mb-1">{item.icon}</div>
              <div className="text-[var(--color-neon-primary)] font-black md:text-[12px] text-[10px]">{item.title}</div>
              <div className="text-[10px] text-[var(--color-neon-text)]/50">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Button */}
      <div className="my-2 text-center animate-on-scroll">
        <p className="text-[var(--color-neon-text)]/60 mb-4 text-sm flex items-center justify-center gap-2">
          <FiHelpCircle /> Need more help?
        </p>
        <button className=" text-[#f4f4f4] px-8 py-2 rounded-md tracking-wide neon-glow w-full flex items-center justify-center gap-2">
          <FaGem /> Contact Support
        </button>
      </div>
    </div>
  );
};

export default Guide;