import React from 'react';
import { 
  FiShield, 
  FiLock, 
  FiAlertCircle, 
  FiCreditCard,
  FiClock,       // replaced FiHistory
  FiChevronRight,
  FiTrendingUp,
  FiDollarSign,
  FiPackage
} from 'react-icons/fi';

const SafeBox = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-b from-blue-50 to-white min-h-screen pt-3 px-4">
      
      {/* Interest Rate Label */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-semibold py-1 px-4 rounded-full inline-block mb-4">
        Interest rate 0.10%
      </div>

      {/* Safe Head Section */}
      <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-xl overflow-hidden mb-6">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-blue-300"></div>
        
        <div className="relative p-6">
          {/* Security Info */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <FiShield className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center space-x-2 text-white">
              <FiLock className="w-4 h-4" />
              <span className="text-sm font-medium">Financial security</span>
            </div>
          </div>

          {/* Balance */}
          <h4 className="text-white text-3xl font-bold mb-2">Rs0.00</h4>
          
          {/* Estimated Revenue */}
          <div className="flex items-center space-x-2 text-blue-100">
            <FiTrendingUp className="w-4 h-4" />
            <h6 className="text-sm">
              24-hour estimated revenue <span className="font-semibold">Rs0.00</span>
            </h6>
          </div>
        </div>
      </div>

      {/* Safe Content Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        {/* Revenue Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <FiDollarSign className="w-5 h-5 text-blue-600" />
              <h6 className="text-2xl font-bold text-gray-800">Rs0.00</h6>
            </div>
            <span className="text-sm text-gray-600 block mb-1">Generated revenue</span>
            <label className="text-xs text-blue-500 font-medium">My interest rate 0.1%</label>
          </div>
          
          <div className="bg-green-50 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <FiPackage className="w-5 h-5 text-green-600" />
              <h6 className="text-2xl font-bold text-gray-800">Rs0.00</h6>
            </div>
            <span className="text-sm text-gray-600">Accumulated revenue</span>
          </div>
        </div>

        {/* Transfer Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md">
            Transfer Out
          </button>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md">
            Transfer In
          </button>
        </div>

        {/* Security Note */}
        <div className="flex items-center space-x-2 bg-red-50 border border-red-200 rounded-xl p-4">
          <FiAlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <span className="text-sm text-gray-700">
            Funds are safe and secure, and can be transferred at any time
          </span>
        </div>
      </div>

      {/* Historical Records */}
      <div className="bg-white mb-12 rounded-2xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <FiClock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h6 className="font-bold text-gray-800">Historical records</h6>
              <p className="text-xs text-gray-500">View all your transaction history</p>
            </div>
          </div>
          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium">
            <span>All history</span>
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafeBox;
