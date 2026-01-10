import React from "react";
import {
  FiUser, FiLock, FiMail, FiSettings, FiCheckCircle, FiArrowRight,
  FiCamera, FiEdit2, FiShield, FiSmartphone
} from "react-icons/fi";
import { FaGem, FaCrown, FaUserCog } from "react-icons/fa";

const Setting = () => {
  return (
    <div className="min-h-screen py-10 px-4 particles-bg">
      <div className="w-full max-w-md mx-auto">

        {/* Header */}
        <div className="text-center mb-8 animate-on-scroll">
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(240,165,0,0.4)] rotate-3">
            <FaUserCog className="text-2xl text-[var(--color-neon-bg)]" />
          </div>
          <h1 className="text-2xl font-black gradient-text">Settings</h1>
          <p className="text-[var(--color-neon-text)]/50 text-sm mt-1">Manage your account</p>
        </div>

        {/* Profile Card */}
        <div className="glass-card rounded-3xl p-6 mb-6 relative overflow-hidden animate-on-scroll">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-neon-primary)]/10 rounded-full blur-[60px]"></div>

          {/* User Section */}
          <div className="flex items-center mb-6 relative z-10">
            <div className="relative group">
              <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-[var(--color-neon-primary)]/50 shadow-[0_0_20px_rgba(240,165,0,0.3)] group-hover:shadow-[0_0_30px_rgba(240,165,0,0.5)] transition-all">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkI8KFHCpG5Sn2hffa6Bteb33YYrKLodkIlSdtueqKOw&s"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-full flex items-center justify-center shadow-lg neon-glow">
                <FiCamera className="text-[var(--color-neon-bg)] text-sm" />
              </button>
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-black text-[var(--color-neon-text)]">rMUSol</h2>
                <FaCrown className="text-[var(--color-neon-primary)]" />
              </div>
              <a
                href="/"
                className="text-sm font-bold text-[var(--color-neon-primary)] hover:text-[var(--color-neon-accent)] transition-colors flex items-center gap-1"
              >
                Change Avatar <FiEdit2 className="text-xs" />
              </a>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 gap-3 relative z-10">
            <div className="glass-card rounded-xl p-4 card-hover-lift group">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-[var(--color-neon-primary)]/20 rounded-lg flex items-center justify-center">
                  <FiUser className="text-[var(--color-neon-primary)]" />
                </div>
              </div>
              <p className="font-bold text-[var(--color-neon-text)] text-sm">rMUSol</p>
              <p className="text-[10px] text-[var(--color-neon-text)]/50 uppercase tracking-wider">Username</p>
            </div>

            <div className="glass-card rounded-xl p-4 card-hover-lift group">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-[var(--color-neon-accent)]/20 rounded-lg flex items-center justify-center">
                  <FiSettings className="text-[var(--color-neon-accent)]" />
                </div>
              </div>
              <p className="font-bold text-[var(--color-neon-text)] text-sm">HQUNXG</p>
              <p className="text-[10px] text-[var(--color-neon-text)]/50 uppercase tracking-wider">User ID</p>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="animate-on-scroll">
          <h2 className="text-xs font-black mb-4 text-[var(--color-neon-text)]/40 uppercase tracking-[0.2em] pl-4 flex items-center gap-2">
            <FiShield className="text-[var(--color-neon-primary)]" /> Security Settings
          </h2>

          <div className="glass-card rounded-2xl overflow-hidden stagger-children">
            {[
              { icon: FiLock, label: "Login Password", action: "Edit", href: "/ChangePassword", color: "text-[var(--color-neon-primary)]", bg: "bg-[var(--color-neon-primary)]/10" },
              { icon: FiMail, label: "Bind Email", action: "Bind", color: "text-[var(--color-neon-accent)]", bg: "bg-[var(--color-neon-accent)]/10" },
              { icon: FiUser, label: "Update Profile", action: "Edit", href: "/UpdateDetails", color: "text-[var(--color-neon-primary)]", bg: "bg-[var(--color-neon-primary)]/10" },
              { icon: FiCheckCircle, label: "Google 2FA", action: "Setup", disabled: true, color: "text-[var(--color-neon-text)]/30", bg: "bg-[var(--color-neon-text)]/5" },
              { icon: FiSmartphone, label: "App Version", value: "1.0.9", color: "text-[var(--color-neon-primary)]", bg: "bg-[var(--color-neon-primary)]/10" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-4 hover:bg-[var(--color-neon-primary)]/5 transition-colors group cursor-pointer border-b border-[var(--color-neon-accent)]/10 last:border-0">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className={`${item.color}`} size={18} />
                  </div>
                  <span className="text-[var(--color-neon-text)]/80 font-medium group-hover:text-[var(--color-neon-text)] transition-colors">{item.label}</span>
                </div>
                {item.value ? (
                  <span className="text-sm font-bold text-[var(--color-neon-primary)] flex items-center gap-1">
                    <FaGem className="text-xs" /> {item.value}
                  </span>
                ) : item.href ? (
                  <a href={item.href} className="text-sm font-bold text-[var(--color-neon-primary)] hover:text-[var(--color-neon-accent)] transition-colors flex items-center gap-1">
                    {item.action} <FiArrowRight />
                  </a>
                ) : (
                  <button disabled={item.disabled} className={`text-sm font-bold flex items-center gap-1 ${item.disabled ? 'text-[var(--color-neon-text)]/30 cursor-not-allowed' : 'text-[var(--color-neon-primary)] hover:text-[var(--color-neon-accent)]'} transition-colors`}>
                    {item.action} <FiArrowRight />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 animate-on-scroll">
          <button className="w-full glass-card text-red-400/70 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30 transition-all flex items-center justify-center gap-2">
            <FiLock /> Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
