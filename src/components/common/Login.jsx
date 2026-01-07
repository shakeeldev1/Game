import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaHeadset,
} from 'react-icons/fa';

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

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-600/20 rounded-full blur-[100px]"></div>

      {/* Form container */}
      <div className="relative w-full max-w-sm">
        <div className="backdrop-blur-xl bg-[#1a1033]/80 border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/5">

          {/* Header */}
          <div className="relative p-8 bg-gradient-to-b from-white/5 to-transparent">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-4 top-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all border border-white/5"
            >
              <FaArrowLeft />
            </button>

            <h2 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 drop-shadow-sm">
              Welcome Back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Sign in to continue your journey
            </p>
          </div>

          {/* Form */}
          <div className="p-6 pt-2 space-y-5">
            <form className="space-y-5">

              {/* Phone */}
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                  Phone Number
                </label>
                <div className="relative mt-1.5 group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaPhoneAlt className="text-cyan-500/70 group-focus-within:text-cyan-400 transition-colors" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full pl-11 pr-4 py-3.5 bg-[#0f0720]/50 text-white placeholder-gray-500 rounded-xl border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                  Password
                </label>
                <div className="relative mt-1.5 group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaLock className="text-fuchsia-500/70 group-focus-within:text-fuchsia-400 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="w-full pl-11 pr-12 py-3.5 bg-[#0f0720]/50 text-white placeholder-gray-500 rounded-xl border border-white/10 focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors p-1"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between mt-2">
                <label className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 cursor-pointer transition-colors">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/20 bg-white/5 checked:border-cyan-500 checked:bg-cyan-500 transition-all"
                    />
                    <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 14" fill="none">
                      <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Remember me</span>
                </label>

                <Link to="/forgot" className="text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="button"
                onClick={() => navigate('/account')}
                disabled={!formData.phone || !formData.password}
                className="w-full py-3.5 mt-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transform hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none border border-cyan-400/20"
              >
                LOG IN
              </button>

              {/* Register */}
              <div className="relative text-center">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/10"></div>
                <span className="relative bg-[#180e29] px-2 text-xs text-gray-500 uppercase">OR</span>
              </div>

              <Link to="/register" className="block">
                <button
                  type="button"
                  className="w-full py-3.5 rounded-xl border border-fuchsia-500/30 text-fuchsia-400 font-bold hover:bg-fuchsia-500/10 hover:border-fuchsia-400 hover:text-fuchsia-300 transition-all shadow-[0_0_15px_rgba(217,70,239,0.1)] hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]"
                >
                  CREATE ACCOUNT
                </button>
              </Link>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <Link
                to="/customer-service"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-cyan-500/20 transition-colors">
                  <FaHeadset className="group-hover:text-cyan-400 transition-colors" />
                </div>
                Contact Customer Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
