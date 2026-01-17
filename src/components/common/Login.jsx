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
    <div className="relative  py-5 flex items-center justify-center px-4 overflow-hidden particles-bg">

      {/* Animated Background Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[var(--color-neon-primary)]/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[var(--color-neon-accent)]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <button
        onClick={() => navigate('/')}
        className="absolute left-5 top-6 p-2.5 z-100 rounded-md  bg-gradient-to-br from-[#232529] to-[#1A1C20] shadow-[0_0_10px_rgba(255,215,0,0.4)] hover:text-[var(--color-neon-primary)] text-white transition-all active:scale-90"
      >
        <FaArrowLeft size={14} />
      </button>
      {/* Form container */}
      <div className="relative w-full max-w-sm animate-on-scroll">
        <div className="glass-card rounded-md p-2 relative overflow-hidden">

          {/* Decorative corner glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--color-neon-primary)]/20 to-transparent rounded-bl-full"></div>

          {/* Header */}
          <div className="relative mb-2">
            <div className="text-center pt-2">
              <div className="h-10 w-10  mx-auto mb-2  bg-gradient-to-br from-[#232529] to-[#1A1C20] rounded-md flex items-center justify-center shadow-[0_0_30px_rgba(240,165,0,0.4)] ">
                <FaGamepad size={17} className=" text-[#f4f4f4]" />
              </div>
              <h2 className="text-[14px] md:text-lg font-black text-[var(--color-neon-text)]">
                Welcome <span className="gradient-text">Back</span>
              </h2>
              <p className=" text-xs md:text-sm font-medium text-[#F0A500]/40">
                Sign in to continue playing
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#f4f4f4] uppercase tracking-widest ml-1">
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
                  className="w-full text-xs  pl-11 pr-4 py-2 md:py-3 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-md border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] transition-all outline-none font-medium"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#f4f4f4] uppercase tracking-widest ml-1">
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
                  className="w-full text-xs  pl-11 pr-4 py-2 md:py-3 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-md border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] transition-all outline-none font-medium"
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
                  className="h-3 w-3 md:h-4 md:w-4 cursor-pointer rounded border-[var(--color-neon-accent)]/30 accent-[var(--color-neon-primary)]"
                />
                <span className='text-white text-xs'>Remember me</span>
              </label>

              <Link to="/forgot-password" className="text-xs  text-[#F0A500] hover:text-[var(--color-neon-accent)] transition-colors">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={!formData.phone || !formData.password}
              className="w-full py-[10px] mt-2 bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] rounded-md text-[#f4f4f4] text-xs font-bold text-[10px] md:text-xs uppercase tracking-wider hover:bg-gradient-to-r hover:from-[#ffd700] hover:to-[#ff8c00] hover:text-[#0f0f13] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <FiZap /> Sign In
            </button>

            <div className="relative ">
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
                className="w-full py-[10px] rounded-md glass-card text-[var(--color-neon-text)]  text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-neon-primary)]/10 hover:border-[var(--color-neon-primary)]/30 transition-all active:scale-95  flex items-center justify-center gap-2"
              >
                <FaCrown className="text-[var(--color-neon-primary)]" /> Create Account
              </button>
            </Link>
          </form>

          {/* Footer */}
          <div className="text-center pt-2">
            <Link
              to="/customer-service"
              className="inline-flex items-center gap-2 text-[10px] font-bold text-[var(--color-neon-text)]/40 hover:text-[var(--color-neon-primary)] transition-colors"
            >
              <FaHeadset /> 24/7 Support
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-2 flex justify-center gap-4">
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