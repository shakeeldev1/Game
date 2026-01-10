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
        <div className="btn-premium rounded-3xl shadow-[0_0_40px_rgba(240,165,0,0.3)] p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-neon-bg)]/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

          <div className="relative z-10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-neon-bg)]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <FaGem className="text-3xl text-[var(--color-neon-bg)]" />
            </div>
            <h1 className="text-4xl font-black text-[var(--color-neon-bg)] drop-shadow-md">About Us</h1>
            <p className="text-[var(--color-neon-bg)]/80 mt-3 font-medium leading-relaxed">
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
          <div key={i} className="glass-card rounded-xl p-4 text-center card-hover-lift">
            <stat.icon className="text-[var(--color-neon-primary)] mx-auto mb-2 text-xl" />
            <p className="text-xl font-black gradient-text">{stat.value}</p>
            <p className="text-[10px] text-[var(--color-neon-text)]/50 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Our Mission */}
      <div className="max-w-lg mx-auto glass-card rounded-2xl p-6 mb-4 card-hover-lift animate-on-scroll group">
        <div className="flex items-start space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <FiTarget className="text-[var(--color-neon-bg)] text-2xl" />
          </div>
          <div className="flex-1">
            <h2 className="font-black text-[var(--color-neon-text)] mb-2 text-xl flex items-center gap-2">
              Our Mission <FaRocket className="text-[var(--color-neon-primary)] text-sm" />
            </h2>
            <p className="text-[var(--color-neon-text)]/70 text-sm leading-relaxed">
              We aim to provide a secure, fun, and rewarding experience for all our users. Our platform combines ease of use with innovative gaming and financial solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="max-w-lg mx-auto glass-card rounded-2xl p-6 mb-4 card-hover-lift animate-on-scroll group">
        <div className="flex items-start space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-neon-accent)] to-[var(--color-neon-primary)] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <FiAward className="text-[var(--color-neon-bg)] text-2xl" />
          </div>
          <div className="flex-1">
            <h2 className="font-black text-[var(--color-neon-text)] mb-2 text-xl flex items-center gap-2">
              Our Vision <FiStar className="text-[var(--color-neon-primary)] text-sm" />
            </h2>
            <p className="text-[var(--color-neon-text)]/70 text-sm leading-relaxed">
              To be the leading platform for gamers and users seeking a secure and rewarding ecosystem that supports growth, fun, and community.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-lg mx-auto gradient-border rounded-2xl p-6 mb-6 animate-on-scroll">
        <h2 className="font-black text-[var(--color-neon-primary)] mb-4 text-lg flex items-center gap-2">
          <FiShield /> Why Choose Us
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: '🔒', title: 'Secure', desc: '100% Safe' },
            { icon: '⚡', title: 'Fast', desc: 'Instant Payouts' },
            { icon: '🎁', title: 'Rewards', desc: 'Daily Bonuses' },
            { icon: '💎', title: 'Premium', desc: 'VIP Benefits' },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-4 text-center card-hover-lift group">
              <div className="text-2xl mb-2 group-hover:scale-125 transition-transform">{item.icon}</div>
              <p className="font-bold text-[var(--color-neon-text)] text-sm">{item.title}</p>
              <p className="text-[10px] text-[var(--color-neon-text)]/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us */}
      <div className="max-w-lg mx-auto glass-card rounded-2xl p-6 mb-6 animate-on-scroll">
        <h2 className="font-black text-[var(--color-neon-text)] mb-4 text-xl flex items-center gap-2">
          <FiMail className="text-[var(--color-neon-primary)]" /> Contact Us
        </h2>
        <ul className="space-y-3">
          {[
            { icon: FiPhone, value: '+1 (123) 456-7890', color: 'from-[var(--color-neon-primary)]' },
            { icon: FiMail, value: 'support@rmusol.com', color: 'from-[var(--color-neon-accent)]' },
            { icon: FiMapPin, value: '123 Gaming Street, GameCity', color: 'from-[var(--color-neon-primary)]' },
          ].map((item, i) => (
            <li key={i} className="flex items-center space-x-4 p-4 bg-[var(--color-neon-primary)]/5 rounded-xl hover:bg-[var(--color-neon-primary)]/10 transition-colors cursor-pointer group">
              <div className={`w-10 h-10 bg-gradient-to-br ${item.color} to-[var(--color-neon-accent)] rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                <item.icon className="text-[var(--color-neon-bg)]" />
              </div>
              <span className="font-medium text-[var(--color-neon-text)]/80 group-hover:text-[var(--color-neon-text)] text-sm">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="max-w-lg mx-auto glass-card rounded-xl p-4 text-center animate-on-scroll">
        <p className="text-[var(--color-neon-text)]/50 text-xs flex items-center justify-center gap-2">
          © 2026 rMUSol <FiHeart className="text-[var(--color-neon-primary)]" /> All rights reserved
        </p>
      </div>

    </div>
  );
};

export default About;
