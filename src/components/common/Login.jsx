import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft, FaPhoneAlt, FaLock, FaEye, FaEyeSlash,
  FaHeadset, FaGamepad, FaGem, FaCrown, FaStar
} from 'react-icons/fa';
import { FiZap, FiShield } from 'react-icons/fi';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden particles-bg">

      {/* Animated Background Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[var(--color-neon-primary)]/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[var(--color-neon-accent)]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Form container */}
      <div className="relative w-full max-w-sm animate-on-scroll">
        <div className="glass-card rounded-[2.5rem] p-8 relative overflow-hidden">

          {/* Decorative corner glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--color-neon-primary)]/20 to-transparent rounded-bl-full"></div>

          {/* Header */}
          <div className="relative mb-8">
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 top-0 p-2.5 rounded-xl glass-card text-[var(--color-neon-text)]/60 hover:text-[var(--color-neon-primary)] transition-all active:scale-90"
            >
              <FaArrowLeft size={14} />
            </button>

            <div className="text-center pt-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(240,165,0,0.4)] rotate-3">
                <FaGamepad className="text-2xl text-[var(--color-neon-bg)]" />
              </div>
              <h2 className="text-3xl font-black text-[var(--color-neon-text)]">
                Welcome <span className="gradient-text">Back</span>
              </h2>
              <p className="mt-2 text-sm font-medium text-[var(--color-neon-text)]/50">
                Sign in to continue playing
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[var(--color-neon-text)]/50 uppercase tracking-widest ml-1">
                Phone Number
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaPhoneAlt className="text-[var(--color-neon-accent)] group-focus-within:text-[var(--color-neon-primary)] transition-colors" size={14} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full pl-11 pr-4 py-4 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-xl border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] transition-all outline-none font-medium"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[var(--color-neon-text)]/50 uppercase tracking-widest ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-[var(--color-neon-accent)] group-focus-within:text-[var(--color-neon-primary)] transition-colors" size={14} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full pl-11 pr-12 py-4 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-xl border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] transition-all outline-none font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-neon-text)]/30 hover:text-[var(--color-neon-primary)] transition-colors p-1"
                >
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs font-bold text-[var(--color-neon-text)]/50 hover:text-[var(--color-neon-text)] cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 cursor-pointer rounded border-[var(--color-neon-accent)]/30 accent-[var(--color-neon-primary)]"
                />
                <span>Remember me</span>
              </label>

              <Link to="/forgot-password" className="text-xs font-bold text-[var(--color-neon-primary)] hover:text-[var(--color-neon-accent)] transition-colors">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={!formData.phone || !formData.password}
              className="w-full py-4 mt-2 btn-premium text-[var(--color-neon-bg)] font-black text-xs uppercase tracking-[0.2em] rounded-xl cursor-pointer neon-glow disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <FiZap /> Sign In
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--color-neon-accent)]/20"></div>
              </div>
              <div className="relative flex justify-center text-[10px] font-bold uppercase">
                <span className="px-3 text-[var(--color-neon-text)]/30 bg-[var(--color-neon-bg)]">or</span>
              </div>
            </div>

            <Link to="/register" className="block">
              <button
                type="button"
                className="w-full py-4 rounded-xl glass-card text-[var(--color-neon-text)] font-black text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-neon-primary)]/10 hover:border-[var(--color-neon-primary)]/30 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <FaCrown className="text-[var(--color-neon-primary)]" /> Create Account
              </button>
            </Link>
          </form>

          {/* Footer */}
          <div className="text-center pt-6">
            <Link
              to="/customer-service"
              className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-neon-text)]/40 hover:text-[var(--color-neon-primary)] transition-colors"
            >
              <FaHeadset /> 24/7 Support
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 flex justify-center gap-4">
            {[
              { icon: FiShield, label: 'Secure' },
              { icon: FaGem, label: 'Premium' },
              { icon: FaStar, label: 'Trusted' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-1 text-[10px] text-[var(--color-neon-text)]/30">
                <badge.icon className="text-[var(--color-neon-primary)]" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;