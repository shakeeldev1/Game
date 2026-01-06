import React, { useEffect } from "react";
import {
  FaWallet,
  FaMoneyBillWave,
  FaArrowUp,
  FaArrowDown,
  FaHistory,
  FaExchangeAlt,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

function Wallet() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      {/* Header */}
  <div
  className="w-full bg-[#FF8100] rounded-xl p-6 md:p-8 flex items-center justify-between mb-6 relative overflow-hidden"
  data-aos="fade-down"
>
  {/* Text */}
  <div className="z-10">
    <h1 className="text-2xl md:text-3xl font-bold text-black">
      Wallet
    </h1>
    <p className="text-black mt-1 md:mt-2 max-w-md">
      Manage your balance, deposits, and withdrawals
    </p>
  </div>

  {/* Image */}
 
</div>


      {/* Wallet Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaWallet size={30} className="text-[#FF8100] mb-2" />
          <p className="font-semibold text-black text-center">Total Balance</p>
          <h2 className="font-bold text-xl md:text-2xl mt-1">Rs0.00</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaMoneyBillWave size={30} className="text-[#1591FB] mb-2" />
          <p className="font-semibold text-black text-center">Main Wallet</p>
          <h2 className="font-bold text-xl md:text-2xl mt-1">Rs0.00</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaMoneyBillWave size={30} className="text-[#EA50B7] mb-2" />
          <p className="font-semibold text-black text-center">3rd Party Wallet</p>
          <h2 className="font-bold text-xl md:text-2xl mt-1">Rs0.00</h2>
        </div>
      </div>

      {/* Main Wallet Transfer */}
      <div className="flex justify-center mb-6">
        <button className="bg-[#1591FB] cursor-pointer text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#0f78d6] transition-colors flex items-center gap-2">
          <FaExchangeAlt /> Main Wallet Transfer
        </button>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaArrowDown size={25} className="text-[#EA50B7] mb-1" />
          <p className="font-semibold text-black cursor-pointer">Deposit</p>
          <p className="text-gray-500 text-sm text-center">
            Add money to your wallet
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaArrowUp size={25} className="text-[#1591FB] mb-1" />
          <p className="font-semibold text-black cursor-pointer">Withdraw</p>
          <p className="text-gray-500 text-sm text-center">Withdraw from wallet</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaHistory size={25} className="text-[#FF8100] mb-1" />
          <p className="font-semibold text-black cursor-pointer">History</p>
          <p className="text-gray-500 text-sm text-center">Check your transactions</p>
        </div>
      </div>

      {/* Deposit & Withdraw History */}
   <div className="grid grid-cols-1 gap-6 mt-6">

  {/* Image Section */}
 

  {/* Cards Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* Deposit History */}
    <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all duration-300">
      <h3 className="font-bold text-lg mb-3 text-black border-b pb-2">
        Deposit History
      </h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li className="flex justify-between">
          <span>Deposit #1</span>
          <span className="font-semibold">Rs0.00</span>
        </li>
        <li className="flex justify-between">
          <span>Deposit #2</span>
          <span className="font-semibold">Rs0.00</span>
        </li>
        <li className="flex justify-between">
          <span>Deposit #3</span>
          <span className="font-semibold">Rs0.00</span>
        </li>
      </ul>
    </div>

    {/* Withdraw History */}
    <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all duration-300">
      <h3 className="font-bold text-lg mb-3 text-black border-b pb-2">
        Withdraw History
      </h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li className="flex justify-between">
          <span>Withdraw #1</span>
          <span className="font-semibold">Rs0.00</span>
        </li>
        <li className="flex justify-between">
          <span>Withdraw #2</span>
          <span className="font-semibold">Rs0.00</span>
        </li>
        <li className="flex justify-between">
          <span>Withdraw #3</span>
          <span className="font-semibold">Rs0.00</span>
        </li>
      </ul>
    </div>

  </div>
</div>

    </div>
  );
}

export default Wallet;
