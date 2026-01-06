import React from "react";
import {
  FaDice,
  FaChessKnight,
  FaCricket,
  FaGamepad,
  FaDatabase,
  FaBolt,
  FaVideo,
  FaCoins,
  FaCreditCard,
  FaPaypal,
  FaWallet,
} from "react-icons/fa";

function WalletContent() {
  const wallets = [
    { name: "Lottery", amount: "0.00", icon: <FaDice /> },
    { name: "TB_Chess", amount: "0.00", icon: <FaChessKnight /> },
    { name: "Wicket9", amount: "0.00", icon: <FaCricket /> },
    { name: "MG", amount: "0.00", icon: <FaGamepad /> },
    { name: "JDB", amount: "0.00", icon: <FaDatabase /> },
    { name: "SaBa", amount: "0.00", icon: <FaBolt /> },
    { name: "TB", amount: "0.00", icon: <FaWallet /> },
    { name: "EVO_Video", amount: "0.00", icon: <FaVideo /> },
    { name: "JILI", amount: "0.00", icon: <FaCoins /> },
    { name: "Card365", amount: "0.00", icon: <FaCreditCard /> },
    { name: "PP", amount: "0.00", icon: <FaPaypal /> },
  ];

  return (
    <div className="w-full bg-white rounded-xl p-4 md:p-6 shadow-sm">
      
      {/* Section Title */}
      <h2 className="text-lg md:text-xl font-bold text-black mb-4">
        Other Wallets
      </h2>

      {/* Wallet Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {wallets.map((wallet, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-2">
              <span className="text-white text-xl">
                {wallet.icon}
              </span>
            </div>

            {/* Amount */}
            <p className="text-sm md:text-base font-semibold text-black">
              {wallet.amount}
            </p>

            {/* Name */}
            <p className="text-xs md:text-sm text-gray-500 mt-1 text-center">
              {wallet.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WalletContent;
