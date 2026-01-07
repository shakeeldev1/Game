import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaUser,
} from 'react-icons/fa';

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
    // Logic for registration
    console.log("Registering:", formData);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-[#f8fafc] overflow-hidden font-sans">
      
      {/* Background Soft Blurs */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-cyan-100/40 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-fuchsia-100/40 rounded-full blur-[100px]"></div>

      <div className="relative w-full max-w-md my-10">
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
              Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-600">Account</span>
            </h2>
            <p className="mt-2 text-center text-sm font-medium text-slate-400">
              Enter your details to get started
            </p>
          </div>

          {/* Form Section */}
          <div className="p-8 pt-2 space-y-6">
            <form onSubmit={handleRegister} className="space-y-4">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaUser className="text-slate-300 group-focus-within:text-cyan-500 transition-colors" size={13} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50/50 text-slate-900 rounded-2xl border border-slate-100 focus:border-cyan-500/50 focus:bg-white focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none font-medium text-sm"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaEnvelope className="text-slate-300 group-focus-within:text-cyan-500 transition-colors" size={13} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50/50 text-slate-900 rounded-2xl border border-slate-100 focus:border-cyan-500/50 focus:bg-white focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none font-medium text-sm"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaPhoneAlt className="text-slate-300 group-focus-within:text-cyan-500 transition-colors" size={13} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50/50 text-slate-900 rounded-2xl border border-slate-100 focus:border-cyan-500/50 focus:bg-white focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none font-medium text-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaLock className="text-slate-300 group-focus-within:text-fuchsia-500 transition-colors" size={13} />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3 bg-slate-50/50 text-slate-900 rounded-2xl border border-slate-100 focus:border-fuchsia-500/50 focus:bg-white focus:ring-4 focus:ring-fuchsia-500/5 transition-all outline-none font-medium text-sm"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 p-1">
                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Confirm Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaLock className="text-slate-300 group-focus-within:text-fuchsia-500 transition-colors" size={13} />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    required
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3 bg-slate-50/50 text-slate-900 rounded-2xl border border-slate-100 focus:border-fuchsia-500/50 focus:bg-white focus:ring-4 focus:ring-fuchsia-500/5 transition-all outline-none font-medium text-sm"
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 p-1">
                    {showConfirmPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                  </button>
                </div>
              </div>

              {/* Gradient Submit Button */}
              <button
                type="submit"
                className="w-full py-4 mt-4 text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_8px_20px_-6px_rgba(6,182,212,0.5)] hover:shadow-[0_12px_25px_-5px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 border-b-2 border-blue-700/30"
              >
                Sign Up Now
              </button>
            </form>

            {/* Footer */}
            <div className="pt-2 text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Already have an account? 
                <Link to="/login" className="text-cyan-600 hover:text-cyan-700 ml-2 font-black transition-colors">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;