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
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        
        {/* User Top Section */}
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkI8KFHCpG5Sn2hffa6Bteb33YYrKLodkIlSdtueqKOw&s"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4 flex flex-col">
            <a
              href="/"
              className="flex items-center text-gray-700 font-semibold hover:text-blue-500 hover:underline transition"
            >
              Change Avatar
              <FiArrowRight className="ml-2 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Nickname */}
        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3 mb-3 shadow hover:bg-gray-100 transition cursor-pointer">
          <div className="flex items-center space-x-3">
            <FiUser className="text-gray-500 w-5 h-5" />
            <span className="font-semibold text-gray-800">rMUSol</span>
          </div>
          <FiArrowRight className="text-gray-400 w-5 h-5" />
        </div>

        {/* R-Code */}
        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3 mb-3 shadow hover:bg-gray-100 transition cursor-pointer">
          <div className="flex items-center space-x-3">
            <FiSettings className="text-gray-500 w-5 h-5" />
            <span className="font-semibold text-gray-800">HQUNXG</span>
          </div>
          <FiArrowRight className="text-gray-400 w-5 h-5" />
        </div>

        {/* Security Information Section */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-3 text-gray-800">Security Information</h2>

          {/* Login Password */}
          <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3 mb-2 shadow hover:bg-gray-100 transition">
            <div className="flex items-center space-x-3">
              <FiLock className="text-yellow-500 w-5 h-5" />
              <span className="text-gray-800 font-medium">Login Password</span>
            </div>
            <a href="/ChangePassword" className="flex items-center text-yellow-500 font-medium hover:underline">
              Edit <FiArrowRight className="ml-1" />
            </a>
          </div>

          {/* Bind Mailbox */}
          <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3 mb-2 shadow hover:bg-gray-100 transition">
            <div className="flex items-center space-x-3">
              <FiMail className="text-yellow-500 w-5 h-5" />
              <span className="text-gray-800 font-medium">Bind Mailbox</span>
            </div>
            <button className="flex items-center text-yellow-500 font-medium hover:underline">
              Bind <FiArrowRight className="ml-1" />
            </button>
          </div>

          {/* Update Profile */}
          <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3 mb-2 shadow hover:bg-gray-100 transition">
            <div className="flex items-center space-x-3">
              <FiUser className="text-yellow-500 w-5 h-5" />
              <span className="text-gray-800 font-medium">Update Your Profile</span>
            </div>
            <a href="/UpdateDetails" className="flex items-center text-yellow-500 font-medium hover:underline">
              Edit <FiArrowRight className="ml-1" />
            </a>
          </div>

          {/* Google Verification */}
          <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3 mb-2 shadow hover:bg-gray-100 transition">
            <div className="flex items-center space-x-3">
              <FiCheckCircle className="text-yellow-500 w-5 h-5" />
              <span className="text-gray-800 font-medium">Google Verification</span>
            </div>
            <button className="flex items-center text-gray-500 font-medium hover:text-gray-700 transition">
              Unopened <FiArrowRight className="ml-1" />
            </button>
          </div>

          {/* Updated Version */}
          <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3 shadow hover:bg-gray-100 transition">
            <div className="flex items-center space-x-3">
              <FiSettings className="text-yellow-500 w-5 h-5" />
              <span className="text-gray-800 font-medium">Updated Version</span>
            </div>
            <span className="flex items-center text-gray-500 font-medium">
              1.0.9 <FiArrowRight className="ml-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
