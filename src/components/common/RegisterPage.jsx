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
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden particles-bg">

      {/* Animated Background Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[var(--color-neon-primary)]/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[var(--color-neon-accent)]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative w-full max-w-md animate-on-scroll">
        <div className="glass-card rounded-[2.5rem] p-8 relative overflow-hidden">

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-neon-primary)]/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[var(--color-neon-accent)]/10 to-transparent rounded-tr-full"></div>

          {/* Header */}
          <div className="relative mb-6">
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 top-0 p-2.5 rounded-xl glass-card text-[var(--color-neon-text)]/60 hover:text-[var(--color-neon-primary)] transition-all active:scale-90"
            >
              <FaArrowLeft size={14} />
            </button>

            <div className="text-center pt-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(240,165,0,0.4)] -rotate-3">
                <FaCrown className="text-2xl text-[var(--color-neon-bg)]" />
              </div>
              <h2 className="text-3xl font-black text-[var(--color-neon-text)]">
                Join <span className="gradient-text">Now</span>
              </h2>
              <p className="mt-2 text-sm font-medium text-[var(--color-neon-text)]/50">
                Create your premium account
              </p>
            </div>
          </div>

          {/* Benefits Banner */}
          <div className="gradient-border rounded-xl p-3 mb-6 flex items-center justify-around">
            {[
              { icon: FaGift, label: 'Bonus' },
              { icon: FiShield, label: 'Secure' },
              { icon: FaGem, label: 'VIP' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="text-[var(--color-neon-primary)] mx-auto mb-1" />
                <p className="text-[10px] text-[var(--color-neon-text)]/50 font-bold">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <form onSubmit={handleRegister} className="space-y-4 stagger-children">

            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[var(--color-neon-text)]/50 uppercase tracking-widest ml-1">Full Name</label>
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
                  className="w-full pl-11 pr-4 py-3.5 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-xl border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_15px_rgba(240,165,0,0.2)] transition-all outline-none font-medium text-sm"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[var(--color-neon-text)]/50 uppercase tracking-widest ml-1">Email Address</label>
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
                  className="w-full pl-11 pr-4 py-3.5 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-xl border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_15px_rgba(240,165,0,0.2)] transition-all outline-none font-medium text-sm"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[var(--color-neon-text)]/50 uppercase tracking-widest ml-1">Phone Number</label>
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
                  className="w-full pl-11 pr-4 py-3.5 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-xl border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_15px_rgba(240,165,0,0.2)] transition-all outline-none font-medium text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black text-[var(--color-neon-text)]/50 uppercase tracking-widest ml-1">Password</label>
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
                  className="w-full pl-11 pr-12 py-3.5 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-xl border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_15px_rgba(240,165,0,0.2)] transition-all outline-none font-medium text-sm"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-neon-text)]/30 hover:text-[var(--color-neon-primary)] p-1 transition-colors">
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[var(--color-neon-text)]/50 uppercase tracking-widest ml-1">Confirm Password</label>
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
                  className="w-full pl-11 pr-12 py-3.5 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-xl border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_15px_rgba(240,165,0,0.2)] transition-all outline-none font-medium text-sm"
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-neon-text)]/30 hover:text-[var(--color-neon-primary)] p-1 transition-colors">
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
              className="w-full py-4 mt-4 btn-premium text-[var(--color-neon-bg)] font-black text-[11px] uppercase tracking-[0.2em] rounded-xl cursor-pointer neon-glow disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <FaRocket /> Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="pt-6 text-center">
            <p className="text-xs font-bold text-[var(--color-neon-text)]/40 uppercase tracking-widest">
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