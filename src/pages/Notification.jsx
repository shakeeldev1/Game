import React from "react"
import { FaBell, FaShieldAlt, FaInfoCircle, FaExclamationTriangle, FaClock, FaCheckCircle } from "react-icons/fa";
import { FiAlertTriangle, FiShield, FiInfo, FiBell } from "react-icons/fi";

const notifications = [
  {
    id: 1,
    title: "Withdrawal Reminder",
    description: "Before requesting a withdrawal, please confirm that your wallet verification is complete. Ensure the ID card and account number provided are correct and valid.",
    date: "2024-05-01",
    icon: FiAlertTriangle,
    type: "warning",
    isNew: true
  },
  {
    id: 2,
    title: "Official Website Notice",
    description: "Always access our platform using the official link: https://pakgame.net. Never share personal information with third parties.",
    date: "2023-08-28",
    icon: FiShield,
    type: "security"
  },
  {
    id: 3,
    title: "Safe Recharge Guidelines",
    description: "All official recharge methods are available only through the Recharge section on the PAKGame website.",
    date: "2023-05-05",
    icon: FiInfo,
    type: "info"
  },
  {
    id: 4,
    title: "Authorized Customer Support",
    description: "PAKGame customer support is available only via LiveChat, Discord, and our official app or website.",
    date: "2023-05-05",
    icon: FiShield,
    type: "security"
  },
  {
    id: 5,
    title: "Website Security Information",
    description: "PAKGame uses advanced security standards including encryption and authentication.",
    date: "2023-05-05",
    icon: FiShield,
    type: "security"
  },
  {
    id: 6,
    title: "Account Protection Tips",
    description: "Keep your account safe by using a strong password and enabling two-factor authentication (2FA).",
    date: "2023-05-05",
    icon: FiShield,
    type: "security"
  },
];

export default function Notification() {
  return (
    <div className="min-h-screen p-4 pb-24 particles-bg">
      {/* Header */}
      <div className="text-center mb-8 animate-on-scroll">
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(240,165,0,0.4)] rotate-3">
          <FiBell className="text-2xl text-[var(--color-neon-bg)]" />
        </div>
        <h1 className="text-2xl font-black gradient-text">Notifications</h1>
        <p className="text-[var(--color-neon-text)]/50 text-sm mt-1">{notifications.length} updates</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar animate-on-scroll">
        {['All', 'Security', 'Info', 'Warnings'].map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${i === 0 ? 'btn-premium text-[var(--color-neon-bg)]' : 'glass-card text-[var(--color-neon-text)]/60 hover:text-[var(--color-neon-text)]'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4 stagger-children">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="glass-card rounded-2xl p-5 card-hover-lift relative overflow-hidden group"
          >
            {/* New Badge */}
            {item.isNew && (
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] text-[var(--color-neon-bg)] text-[10px] font-black rounded-full animate-pulse">
                NEW
              </div>
            )}

            <div className="flex gap-4">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.type === 'warning' ? 'bg-[var(--color-neon-primary)]/20' :
                  item.type === 'security' ? 'bg-[var(--color-neon-accent)]/20' :
                    'bg-[var(--color-neon-primary)]/20'
                } group-hover:scale-110 transition-transform`}>
                <item.icon className={`text-xl ${item.type === 'warning' ? 'text-[var(--color-neon-primary)]' :
                    item.type === 'security' ? 'text-[var(--color-neon-accent)]' :
                      'text-[var(--color-neon-primary)]'
                  }`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-[var(--color-neon-text)] group-hover:text-[var(--color-neon-primary)] transition-colors">{item.title}</h3>
                </div>
                <p className="text-sm text-[var(--color-neon-text)]/60 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <FaClock className="text-[var(--color-neon-accent)] text-xs" />
                  <span className="text-[10px] text-[var(--color-neon-text)]/40 font-bold">{item.date}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${item.type === 'warning' ? 'bg-[var(--color-neon-primary)]/10 text-[var(--color-neon-primary)]' :
                      item.type === 'security' ? 'bg-[var(--color-neon-accent)]/10 text-[var(--color-neon-accent)]' :
                        'bg-[var(--color-neon-primary)]/10 text-[var(--color-neon-primary)]'
                    }`}>
                    {item.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Read indicator line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* Mark All Read Button */}
      <div className="mt-8 text-center animate-on-scroll">
        <button className="glass-card text-[var(--color-neon-text)]/60 px-6 py-3 rounded-xl font-bold text-sm hover:text-[var(--color-neon-primary)] hover:border-[var(--color-neon-primary)]/30 transition-all flex items-center gap-2 mx-auto">
          <FaCheckCircle /> Mark All as Read
        </button>
      </div>
    </div>
  );
}
