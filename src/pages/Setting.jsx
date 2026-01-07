import React from "react";
import {
  FiUser,
  FiLock,
  FiMail,
  FiSettings,
  FiCheckCircle,
  FiArrowRight
} from "react-icons/fi";

const Setting = () => {
  return (
    <div className="min-h-screen items-start py-10 px-4">
      <div className="w-full max-w-md mx-auto bg-[#1a1033]/80 backdrop-blur-xl border border-white/5 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] p-6 relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-[60px]"></div>

        {/* User Top Section */}
        <div className="flex items-center mb-8 relative z-10">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkI8KFHCpG5Sn2hffa6Bteb33YYrKLodkIlSdtueqKOw&s"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4 flex flex-col">
            <a
              href="/"
              className="flex items-center text-white font-bold text-lg hover:text-cyan-400 transition-colors group"
            >
              Change Avatar
              <div className="ml-2 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                <FiArrowRight className="text-gray-400 group-hover:text-cyan-400 text-xs" />
              </div>
            </a>
          </div>
        </div>

        {/* Nickname & ID Cards */}
        <div className="space-y-3 mb-8 relative z-10">
          <div className="flex justify-between items-center bg-[#0f0720]/50 border border-white/5 rounded-xl p-4 hover:border-cyan-500/30 transition-colors group cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <FiUser className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-200 group-hover:text-white transition-colors">rMUSol</span>
            </div>
            <FiArrowRight className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
          </div>

          <div className="flex justify-between items-center bg-[#0f0720]/50 border border-white/5 rounded-xl p-4 hover:border-cyan-500/30 transition-colors group cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                <FiSettings className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-200 group-hover:text-white transition-colors">HQUNXG</span>
            </div>
            <FiArrowRight className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
          </div>
        </div>

        {/* Security Information Section */}
        <div className="relative z-10">
          <h2 className="text-sm font-bold mb-4 text-gray-500 uppercase tracking-widest pl-1">Security Information</h2>

          <div className="space-y-3">
            {/* Login Password */}
            <div className="flex justify-between items-center bg-[#0f0720]/50 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
                  <FiLock className="w-5 h-5" />
                </div>
                <span className="text-gray-300 font-medium">Login Password</span>
              </div>
              <a href="/ChangePassword" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                Edit <FiArrowRight className="ml-1" />
              </a>
            </div>

            {/* Bind Mailbox */}
            <div className="flex justify-between items-center bg-[#0f0720]/50 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
                  <FiMail className="w-5 h-5" />
                </div>
                <span className="text-gray-300 font-medium">Bind Mailbox</span>
              </div>
              <button className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                Bind <FiArrowRight className="ml-1" />
              </button>
            </div>

            {/* Update Profile */}
            <div className="flex justify-between items-center bg-[#0f0720]/50 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                  <FiUser className="w-5 h-5" />
                </div>
                <span className="text-gray-300 font-medium">Update Profile</span>
              </div>
              <a href="/UpdateDetails" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                Edit <FiArrowRight className="ml-1" />
              </a>
            </div>

            {/* Google Verification */}
            <div className="flex justify-between items-center bg-[#0f0720]/50 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <FiCheckCircle className="w-5 h-5" />
                </div>
                <span className="text-gray-300 font-medium">Google Verification</span>
              </div>
              <button className="text-sm font-medium text-gray-500 flex items-center cursor-not-allowed">
                Unopened <FiArrowRight className="ml-1" />
              </button>
            </div>

            {/* Updated Version */}
            <div className="flex justify-between items-center bg-[#0f0720]/50 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-500/10 rounded-lg text-gray-400">
                  <FiSettings className="w-5 h-5" />
                </div>
                <span className="text-gray-300 font-medium">Version</span>
              </div>
              <span className="text-sm font-bold text-fuchsia-400 flex items-center">
                1.0.9
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
