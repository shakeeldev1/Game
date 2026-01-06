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
      color: "from-yellow-400 to-yellow-600",
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
      color: "from-yellow-400 to-yellow-600",
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
      color: "from-yellow-400 to-yellow-600",
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
      color: "from-yellow-400 to-yellow-600",
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
      color: "from-yellow-400 to-yellow-600",
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
      color: "from-yellow-400 to-yellow-600",
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
      color: "from-yellow-400 to-yellow-600",
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
      color: "from-yellow-400 to-yellow-600",
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
      color: "from-yellow-400 to-yellow-600",
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
      color: "from-pink-500 to-rose-500",
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
    <div className="w-full max-w-md mx-auto bg-gradient-to-b from-gray-50 to-white min-h-screen p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Beginner's Guide</h1>
        <p className="text-gray-600">Step-by-step instructions to get started</p>
      </div>

      {/* Guide Sections */}
      <div className="space-y-4">
        {guideSections.map((section) => (
          <div 
            key={section.id} 
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
          >
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-4 flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-800 text-lg">{section.id}. {section.title}</h3>
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
              <div className="p-4 border-t border-gray-100">
                {/* Content Items */}
                <ul className="space-y-2 mb-4">
                  {section.content.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-700">
                      <FiCheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Images Placeholder */}
                {section.hasImages && (
                  <div className="mt-4">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {section.images.map((emoji, index) => (
                        <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center">
                          <span className="text-3xl">{emoji}</span>
                          <p className="text-xs text-gray-500 mt-2">Example {index + 1}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 text-center">
                      Visual guides available in the app
                    </p>
                  </div>
                )}

                {/* Additional Info */}
                {section.id === 4 && (
                  <div className="mt-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-3">
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center space-x-2">
                      <FiBell className="w-4 h-4 text-orange-500" />
                      <span>Commission Structure</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-orange-600 font-bold text-lg">0.6%</div>
                        <div className="text-xs text-gray-600">Level 1 Referral</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-red-600 font-bold text-lg">0.18%</div>
                        <div className="text-xs text-gray-600">Level 2 Referral</div>
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
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
        <h3 className="font-bold text-gray-800 text-xl mb-3">💡 Quick Tips</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-3">
            <div className="text-blue-600 font-bold text-lg">24/7</div>
            <div className="text-sm text-gray-600">Customer Support</div>
          </div>
          <div className="bg-white rounded-xl p-3">
            <div className="text-green-600 font-bold text-lg">Instant</div>
            <div className="text-sm text-gray-600">Withdrawals</div>
          </div>
          <div className="bg-white rounded-xl p-3">
            <div className="text-purple-600 font-bold text-lg">Secure</div>
            <div className="text-sm text-gray-600">Transactions</div>
          </div>
          <div className="bg-white rounded-xl p-3">
            <div className="text-pink-600 font-bold text-lg">Daily</div>
            <div className="text-sm text-gray-600">Bonuses</div>
          </div>
        </div>
      </div>

      {/* Need Help Section */}
      <div className="my-6 text-center">
        <p className="text-gray-600 mb-3">Need more help?</p>
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-200 shadow-md">
          Contact Support Now
        </button>
      </div>
    </div>
  );
};

export default Guide;