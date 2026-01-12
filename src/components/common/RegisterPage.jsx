import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft, FaPhoneAlt, FaLock, FaEye, FaEyeSlash,
  FaEnvelope, FaUser, FaRocket, FaGem, FaGift, FaCrown
} from 'react-icons/fa';
import { FiCheckCircle, FiZap, FiShield } from 'react-icons/fi';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering:", formData);
    navigate('/account');
  };

  const passwordStrength = formData.password.length >= 8 ? 'Strong' : formData.password.length >= 4 ? 'Medium' : 'Weak';
  const strengthColor = passwordStrength === 'Strong' ? 'text-green-400' : passwordStrength === 'Medium' ? 'text-[var(--color-neon-primary)]' : 'text-red-400';

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-6 overflow-hidden particles-bg">

      {/* Animated Background Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[var(--color-neon-primary)]/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[var(--color-neon-accent)]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <button
        onClick={() => navigate('/')}
        className="absolute left-5 top-6 p-2.5 z-100 rounded-md  bg-gradient-to-br from-[#232529] to-[#1A1C20] shadow-[0_0_10px_rgba(255,215,0,0.4)] hover:text-[var(--color-neon-primary)] transition-all active:scale-90"
      >
        <FaArrowLeft size={14} />
      </button>
      <div className="relative w-full max-w-md animate-on-scroll">
        <div className="glass-card rounded-md p-8 relative overflow-hidden">

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-neon-primary)]/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[var(--color-neon-accent)]/10 to-transparent rounded-tr-full"></div>

          {/* Header */}
          <div className="relative mb-6">


            <div className="text-center pt-4">
              <div className="h-10 w-10 md:w-12  mx-auto md:h-12 bg-gradient-to-br from-[#232529] to-[#1A1C20] rounded-md flex items-center justify-center shadow-[0_0_30px_rgba(240,165,0,0.4)] ">
                <FaCrown className="text-[12px] md:text-lg text-[#f4f4f4]" />
              </div>
              <h2 className="text-[14px] md:text-lg mt-4 font-black text-[var(--color-neon-text)]">
                Join <span className="gradient-text">Now</span>
              </h2>
              <p className="text-xs md:text-sm font-medium text-[#F0A500]/40">
                Create your premium account
              </p>
            </div>
          </div>

          {/* Benefits Banner */}
          <div className="border border-[#CF7500] rounded-md p-3 mb-6  flex items-center justify-around">
            {[
              { icon: FaGift, label: 'Bonus' },
              { icon: FiShield, label: 'Secure' },
              { icon: FaGem, label: 'VIP' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="text-[#f4f4f4] mx-auto mb-1" />
                <p className="text-[10px] text-[#CF7500] font-bold">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <form onSubmit={handleRegister} className="space-y-4 stagger-children">

            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#f4f4f] uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaUser className="text-[var(--color-neon-accent)] group-focus-within:text-[var(--color-neon-primary)] transition-colors" size={13} />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full text-xs  pl-11 pr-4 py-2 md:py-3 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-md border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] transition-all outline-none font-medium"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#f4f4f] uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope className="text-[var(--color-neon-accent)] group-focus-within:text-[var(--color-neon-primary)] transition-colors" size={13} />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full text-xs  pl-11 pr-4 py-2 md:py-3 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-md border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] transition-all outline-none font-medium"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#f4f4f] uppercase tracking-widest ml-1">Phone Number</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaPhoneAlt className="text-[var(--color-neon-accent)] group-focus-within:text-[var(--color-neon-primary)] transition-colors" size={13} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 0000000"
                  className="w-full text-xs  pl-11 pr-4 py-2 md:py-3 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-md border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] transition-all outline-none font-medium"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-[#f4f4f] uppercase tracking-widest ml-1">Password</label>
                {formData.password && (
                  <span className={`text-[10px] font-bold ${strengthColor}`}>{passwordStrength}</span>
                )}
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-[var(--color-neon-accent)] group-focus-within:text-[var(--color-neon-primary)] transition-colors" size={13} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full text-xs  pl-11 pr-4 py-2 md:py-3 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-md border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] transition-all outline-none font-medium"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-neon-text)]/30 hover:text-[var(--color-neon-primary)] p-1 transition-colors">
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#f4f4f] uppercase tracking-widest ml-1">Confirm Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-[var(--color-neon-accent)] group-focus-within:text-[var(--color-neon-primary)] transition-colors" size={13} />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full text-xs  pl-11 pr-4 py-2 md:py-3 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-md border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] transition-all outline-none font-medium"
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-neon-text)]/30 hover:text-[var(--color-neon-primary)] p-1">
                  {showConfirmPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-[10px] text-red-400 ml-1">Passwords don't match</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.phone || !formData.password || formData.password !== formData.confirmPassword}
              className="w-full py-4 rounded-md glass-card text-[var(--color-neon-text)]  text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-neon-primary)]/10 hover:border-[var(--color-neon-primary)]/30 transition-all active:scale-95  flex items-center justify-center gap-2"
            >
              <FaRocket /> Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="pt-6 text-center">
            <p className="text-xs  text-[var(--color-neon-text)]/40 uppercase tracking-widest">
              Already have an account?
              <Link to="/login" className="text-[var(--color-neon-primary)] hover:text-[var(--color-neon-accent)] ml-2 font-black transition-colors">Log In</Link>
            </p>
          </div>

          {/* Terms */}
          <p className="mt-4 text-[10px] text-center text-[var(--color-neon-text)]/30">
            By signing up, you agree to our <span className="text-[var(--color-neon-primary)]">Terms</span> & <span className="text-[var(--color-neon-primary)]">Privacy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;