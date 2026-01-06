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
    <div className="relative py-5 min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 via-white to-orange-50 px-4">

      {/* Subtle blurred shapes for depth */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-15"></div>

      {/* Form container */}
      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-3xl shadow-lg overflow-hidden">

          {/* Header */}
          <div className="relative p-6 bg-gradient-to-tr from-yellow-400 to-orange-500 text-white">
            <button
              onClick={() => navigate(-1)}
              className="absolute left-4 top-4 p-2 rounded-full hover:bg-white/20 transition"
            >
              <FaArrowLeft />
            </button>

            <h2 className="text-center text-3xl font-bold tracking-wide">
              Welcome Back
            </h2>
            <p className="mt-2 text-center text-sm opacity-90">
              Sign in to continue your journey
            </p>
          </div>

          {/* Form */}
          <div className="p-6">
            <form className="space-y-5">

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="relative mt-1">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="text-orange-500 focus:ring-orange-500"
                  />
                  Remember me
                </label>

                <Link to="/forgot" className="text-sm text-orange-500 hover:underline">
                  Forgot?
                </Link>
              </div>

              {/* Login Button */}
              <Link to="/account">
                <button
                  disabled={!formData.phone || !formData.password}
                  className="w-full py-2 mb-3 cursor-pointer rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition disabled:opacity-50"
                >
                  Log In
                </button>
              </Link>

              {/* Register */}
              <Link to="/register">
                <button
                  type="button"
                  className="w-full py-2 rounded-xl border border-orange-500 text-orange-500 cursor-pointer font-semibold hover:bg-orange-50 transition"
                >
                  Create New Account
                </button>
              </Link>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t text-center">
              <Link
                to="/customer-service"
                className="inline-flex items-center gap-2 text-sm text-orange-500 hover:underline"
              >
                <FaHeadset />
                Need help? Contact support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
