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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for login goes here
    navigate('/account');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-[#f8fafc] overflow-hidden font-sans">
      
      {/* Soft Background Accents */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-cyan-100/40 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-fuchsia-100/40 rounded-full blur-[100px]"></div>

      {/* Form container */}
      <div className="relative w-full max-w-sm">
        <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white overflow-hidden">
          
          {/* Header */}
          <div className="relative p-8 pb-4">
            <button
              onClick={() => navigate(-1)}
              className="absolute left-6 top-8 p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-900 transition-all border border-slate-100 shadow-sm active:scale-90"
            >
              <FaArrowLeft size={14} />
            </button>

            <h2 className="text-center text-3xl font-black tracking-tight text-slate-900">
              Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-600">Back</span>
            </h2>
            <p className="mt-2 text-center text-sm font-medium text-slate-400">
              Please enter your details to sign in
            </p>
          </div>

          {/* Form */}
          <div className="p-8 pt-2 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Phone Number
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaPhoneAlt className="text-slate-300 group-focus-within:text-cyan-500 transition-colors" size={14} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 text-slate-900 placeholder-slate-300 rounded-2xl border border-slate-100 focus:border-cyan-500/50 focus:bg-white focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none font-medium"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Secure Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaLock className="text-slate-300 group-focus-within:text-fuchsia-500 transition-colors" size={14} />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="w-full pl-11 pr-12 py-3.5 bg-slate-50/50 text-slate-900 placeholder-slate-300 rounded-2xl border border-slate-100 focus:border-fuchsia-500/50 focus:bg-white focus:ring-4 focus:ring-fuchsia-500/5 transition-all outline-none font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 transition-colors p-1"
                  >
                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 cursor-pointer rounded-lg border-slate-200 text-cyan-500 focus:ring-cyan-500/20 transition-all accent-cyan-500"
                  />
                  <span>Remember me</span>
                </label>

                <Link to="/forgot-password" className="text-xs font-bold text-cyan-600 hover:text-cyan-700 transition-colors">
                  Forgot Password?
                </Link>
              </div>

              {/* Refined Login Button */}
              <button
                type="submit"
                disabled={!formData.phone || !formData.password}
                className="w-full py-4 mt-2 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_8px_20px_-6px_rgba(6,182,212,0.5)] hover:shadow-[0_12px_25px_-5px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed"
              >
                Log In
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100"></div>
                </div>
                <div className="relative flex justify-center text-[10px] font-bold uppercase">
                  <span className="bg-white px-3 text-slate-300">or</span>
                </div>
              </div>

              <Link to="/register" className="block">
                <button
                  type="button"
                  className="w-full py-4 rounded-2xl border-2 border-slate-100 text-slate-900 font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95 shadow-sm"
                >
                  Create Account
                </button>
              </Link>
            </form>

            <div className="text-center pt-2">
              <Link
                to="/customer-service"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-fuchsia-600 transition-colors"
              >
                <FaHeadset />
                Support Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;