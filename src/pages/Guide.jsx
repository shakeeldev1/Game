import React, { useState } from 'react';
import {
  FiUserPlus,
  FiDollarSign,
  FiCreditCard,
  FiGift,
  FiLock,
  FiUsers,
  FiKey,
  FiDownload,
  FiInfo,
  FiChevronDown,
  FiChevronUp,
  FiCheckCircle,
  FiPercent,
  FiShield,
  FiBell
} from 'react-icons/fi';

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
      id: 1,
      title: "How to Register",
      icon: FiUserPlus,
      color: "from-cyan-400 to-blue-500",
      content: [
        "Fill Your Phone Number",
        "Set Your Own Password (6 letters)",
        "Confirm The Password",
        "Fill Your Recommendation Code",
        "Click 'I Have Read And Agree'",
        "Click Register"
      ],
      hasImages: false
    },
    {
      id: 2,
      title: "How to Recharge",
      icon: FiDollarSign,
      color: "from-green-400 to-emerald-600",
      content: [
        "Click Wallet Icon",
        "Click The Recharge Button",
        "We have multiple payment methods:",
        "• BANK TRANSFER",
        "• E-WALLET"
      ],
      hasImages: true,
      images: ["📱", "💰"]
    },
    {
      id: 3,
      title: "How to Withdraw",
      icon: FiCreditCard,
      color: "from-red-400 to-rose-600",
      content: [
        "Click Wallet Icon",
        "Click Withdraw Button",
        "Enter withdraw amount",
        "Make sure your total bet until zero",
        "Select your bank account or add new",
        "Input amount you want to withdraw",
        "Input your login password"
      ],
      hasImages: true,
      images: ["💳", "🏦"]
    },
    {
      id: 4,
      title: "Promotion",
      icon: FiPercent,
      color: "from-purple-400 to-fuchsia-600",
      content: [
        "If you have referral members using your link:",
        "• Minimum commission of 0.6% (level 1)",
        "• Minimum commission of 0.18% (level 2)",
        "Commission added daily at 00:30 AM",
        "Additional bonus based on accumulated transactions"
      ],
      hasImages: true,
      images: ["🎯", "📈"]
    },
    {
      id: 5,
      title: "Account Security",
      icon: FiShield,
      color: "from-yellow-400 to-orange-500",
      content: [
        "Go to My Profile",
        "Click Settings Icon",
        "Click Login Password",
        "Re-enter your current password",
        "Enter strongest new password",
        "Confirm your new password",
        "Click Save Changes"
      ],
      hasImages: true,
      images: ["🔐", "✅"]
    },
    {
      id: 6,
      title: "Invitation Bonus",
      icon: FiUsers,
      color: "from-pink-400 to-rose-500",
      content: [
        "Meet the 'Invitation Bonus' requirements",
        "Click the 'Invitation Bonus' section",
        "Claim your bonus directly",
        "Bonuses available based on referral activity"
      ],
      hasImages: true,
      images: ["🎁", "👥"]
    },
    {
      id: 7,
      title: "Forgot Password",
      icon: FiKey,
      color: "from-gray-400 to-gray-600",
      content: [
        "If you forget your login password",
        "Please contact Customer Service immediately",
        "Our 24/7 support team will assist you"
      ],
      hasImages: false
    },
    {
      id: 8,
      title: "App Download",
      icon: FiDownload,
      color: "from-blue-400 to-indigo-600",
      content: [
        "Click top right corner download icon",
        "Download the app for easy access",
        "Available on multiple platforms",
        "Enhanced mobile experience"
      ],
      hasImages: false
    },
    {
      id: 9,
      title: "About",
      icon: FiInfo,
      color: "from-teal-400 to-cyan-600",
      content: [
        "Click About for more details",
        "Privacy Policy information",
        "Risk Disclosure Agreement",
        "Terms and conditions"
      ],
      hasImages: true,
      images: ["📄", "⚖️"]
    },
    {
      id: 10,
      title: "Gift",
      icon: FiGift,
      color: "from-fuchsia-400 to-purple-600",
      content: [
        "Click Gift Exchange",
        "Input the unique redemption code",
        "Click Receive to claim",
        "Instant money transfer to wallet"
      ],
      hasImages: true,
      images: ["🎁", "🎉"]
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto min-h-screen p-4 pb-24">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Beginner's Guide</h1>
        <p className="text-gray-400 text-sm">Step-by-step instructions to get started</p>
      </div>

      {/* Guide Sections */}
      <div className="space-y-4">
        {guideSections.map((section) => (
          <div
            key={section.id}
            className="bg-[#1a1033]/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-white/10 group"
          >
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-200 group-hover:text-white text-lg transition-colors">{section.id}. {section.title}</h3>
                </div>
              </div>
              {expandedSections[section.id] ? (
                <FiChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <FiChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {/* Expandable Content */}
            {expandedSections[section.id] && (
              <div className="p-4 border-t border-white/5 bg-[#0f0720]/30 animate-in fade-in slide-in-from-top-2 duration-300">
                {/* Content Items */}
                <ul className="space-y-3 mb-4">
                  {section.content.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 text-gray-300 text-sm">
                      <FiCheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Images Placeholder */}
                {section.hasImages && (
                  <div className="mt-4">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {section.images.map((emoji, index) => (
                        <div key={index} className="bg-white/5 border border-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                          <span className="text-3xl drop-shadow-md filter">{emoji}</span>
                          <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-wider">Example {index + 1}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Info */}
                {section.id === 4 && (
                  <div className="mt-4 bg-gradient-to-r from-purple-900/40 to-fuchsia-900/40 border border-fuchsia-500/20 rounded-xl p-4">
                    <h4 className="font-bold text-fuchsia-300 mb-3 flex items-center space-x-2 text-sm uppercase tracking-wide">
                      <FiBell className="w-4 h-4" />
                      <span>Commission Structure</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#0f0720]/80 rounded-lg p-3 text-center border border-fuchsia-500/10">
                        <div className="text-fuchsia-400 font-bold text-lg">0.6%</div>
                        <div className="text-[10px] text-gray-500 uppercase mt-1">Level 1</div>
                      </div>
                      <div className="bg-[#0f0720]/80 rounded-lg p-3 text-center border border-fuchsia-500/10">
                        <div className="text-purple-400 font-bold text-lg">0.18%</div>
                        <div className="text-[10px] text-gray-500 uppercase mt-1">Level 2</div>
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
      <div className="mt-8 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="font-bold text-cyan-400 text-lg mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-cyan-500 rounded-full"></span>
          Quick Tips
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1a1033]/80 border border-white/5 rounded-xl p-4 hover:border-cyan-500/30 transition-colors">
            <div className="text-cyan-400 font-black text-xl">24/7</div>
            <div className="text-xs text-gray-400 mt-1">Customer Support</div>
          </div>
          <div className="bg-[#1a1033]/80 border border-white/5 rounded-xl p-4 hover:border-green-500/30 transition-colors">
            <div className="text-green-400 font-black text-xl">Instant</div>
            <div className="text-xs text-gray-400 mt-1">Withdrawals</div>
          </div>
          <div className="bg-[#1a1033]/80 border border-white/5 rounded-xl p-4 hover:border-purple-500/30 transition-colors">
            <div className="text-purple-400 font-black text-xl">Secure</div>
            <div className="text-xs text-gray-400 mt-1">Transactions</div>
          </div>
          <div className="bg-[#1a1033]/80 border border-white/5 rounded-xl p-4 hover:border-pink-500/30 transition-colors">
            <div className="text-pink-400 font-black text-xl">Daily</div>
            <div className="text-xs text-gray-400 mt-1">Bonuses</div>
          </div>
        </div>
      </div>

      {/* Need Help Section */}
      <div className="my-8 text-center">
        <p className="text-gray-400 mb-4 text-sm">Need more help?</p>
        <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3.5 rounded-xl font-bold tracking-wide cursor-pointer hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400/20 w-full sm:w-auto">
          Contact Support Now
        </button>
      </div>
    </div>
  );
};

export default Guide;