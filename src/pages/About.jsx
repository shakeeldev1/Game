import React from 'react';
import { FiInfo, FiPhone, FiMail, FiMapPin, FiStar, FiHeart, FiShield, FiAward, FiTarget } from 'react-icons/fi';
import { FaRocket, FaGem, FaUsers, FaTrophy } from 'react-icons/fa';
import BackButton from '../components/common/BackButton';

const About = () => {
  return (
    <div className="min-h-screen p-4 pb-20 particles-bg">
      <BackButton />

      {/* Hero Header */}
      <div className="max-w-lg mx-auto relative mb-8 animate-on-scroll">
        <div className=" rounded-3xl shadow-[0_0_40px_rgba(240,165,0,0.3)] p-3 md:p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-neon-bg)]/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

          <div className="relative z-10 text-center">
            <div className="h-10 w-10 md:w-12 md:h-12 mx-auto mb-4 bg-gradient-to-br from-[#232529] to-[#1A1C20]  rounded-md flex items-center justify-center backdrop-blur-sm">
              <FaGem className="text-[12px] md:text-xs text-[#f4f4f4]" />
            </div>
            <h1 className="text-[12px] md:text-xs font-black text-white drop-shadow-md">About Us</h1>
            <p className="text-[#F0A500] text-[10px] md:text-xs mt-2 leading-relaxed drop-shadow-sm">
              Your trusted platform for gaming, rewards, and secure transactions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="max-w-lg mx-auto grid grid-cols-3 gap-3 mb-6 stagger-children">
        {[
          { icon: FaUsers, value: '50K+', label: 'Users' },
          { icon: FaTrophy, value: '1M+', label: 'Wins' },
          { icon: FiStar, value: '4.9', label: 'Rating' },
        ].map((stat, i) => (
          <div key={i} className="glass-card rounded-md p-2 text-center card-hover-lift">
            <stat.icon className="text-white mx-auto mb-2 text-[14px] md:text-xs" />
            <p className="text-xl font-black gradient-text text-[12px] md:text-xs">{stat.value}</p>
            <p className="text-[10px] text-[var(--color-neon-text)]/50 text-[12px] md:text-xs uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Our Mission */}
      <div className="max-w-lg mx-auto glass-card rounded-2xl p-6 mb-4 card-hover-lift animate-on-scroll group">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#232529] to-[#1A1C20] shadow-[0_10px_10px_rgba(255,215,0,0.4)] rounded-xl flex items-center justify-center  group-hover:scale-110 transition-transform">
            <FiTarget className="text-white text-[12px] md:text-xs" />
          </div>
          <div className="flex-1">
            <h2 className="font-black text-[var(--color-neon-text)] mb-2 text-[12px] md:text-lg flex items-center gap-2">
              Our Mission <FaRocket className="text-[#F0A500] text-sm" />
            </h2>
            <p className="text-[#F0A500]/60 text-xs leading-relaxed">
              We aim to provide a secure, fun, and rewarding experience for all our users. Our platform combines ease of use with innovative gaming and financial solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="max-w-lg mx-auto glass-card rounded-2xl p-6 mb-4 card-hover-lift animate-on-scroll group">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#232529] to-[#1A1C20] shadow-[0_10px_10px_rgba(255,215,0,0.4)] rounded-xl flex items-center justify-center  group-hover:scale-110 transition-transform">
            <FiAward className="text-white text-[12px] md:text-xs" />
          </div>
          <div className="flex-1">
            <h2 className="font-black text-[var(--color-neon-text)] mb-2 text-[12px] md:text-lg flex items-center gap-2">
              Our Vision <FiStar className="text-[#F0A500] text-sm" />
            </h2>
            <p className="text-[#F0A500]/60 text-xs leading-relaxed">
              To be the leading platform for gamers and users seeking a secure and rewarding ecosystem that supports growth, fun, and community.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-lg mx-auto gradient-border rounded-2xl p-6 mb-6 animate-on-scroll">
        <h2 className="font-black text-[#f3f3f3] mb-4 text-[12px] md:text-lg flex items-center gap-2">
          <FiShield /> Why Choose Us
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: '🔒', title: 'Secure', desc: '100% Safe' },
            { icon: '⚡', title: 'Fast', desc: 'Instant Payouts' },
            { icon: '🎁', title: 'Rewards', desc: 'Daily Bonuses' },
            { icon: '💎', title: 'Premium', desc: 'VIP Benefits' },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-xl md:p-3 p-2 text-center card-hover-lift group">
              <div className="text-[12px] md:text-lg mb-2 group-hover:scale-125 transition-transform">{item.icon}</div>
              <p className="font-bold text-[var(--color-neon-text)] text-[9px] md:text-xs">{item.title}</p>
              <p className="text-[10px] text-[#F0A500]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us */}
      <div className="max-w-lg mx-auto glass-card rounded-2xl p-6 mb-6 animate-on-scroll">
        <h2 className="font-black text-[var(--color-neon-text)] mb-4 text-[12px] text-lg flex items-center gap-2">
          <FiMail className="text-[#F0A500]" /> Contact Us
        </h2>
        <ul className="space-y-3">
          {[
            { icon: FiPhone, value: '+1 (123) 456-7890', color: 'from-[#232529] to-[#1A1C20]' },
            { icon: FiMail, value: 'support@rmusol.com', color: 'from-[#232529] to-[#1A1C20]' },
            { icon: FiMapPin, value: '123 Gaming Street, GameCity', color: 'from-[#232529] to-[#1A1C20]' },
          ].map((item, i) => (
            <li key={i} className="flex items-center space-x-4 p-4 bg-[var(--color-neon-primary)]/5 rounded-xl hover:bg-[var(--color-neon-primary)]/10 transition-colors cursor-pointer group">
              <div className={`h-8 w-8 md:w-10 md:h-10 border border-[#CF7500] bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                <item.icon className="text-[#f4f4f4]" />
              </div>
              <span className="font-medium text-[var(--color-neon-text)]/80 group-hover:text-[var(--color-neon-text)] text-xs md:text-sm">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      

    </div>
  );
};

export default About;
