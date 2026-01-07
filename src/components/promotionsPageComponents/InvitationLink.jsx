import React from "react";
import {
  FaCoins,
  FaBook,
  FaHeadset,
  FaMoneyBillWave,
  FaSitemap,
  FaArrowRight,
} from "react-icons/fa";
import { FiLink, FiCopy } from "react-icons/fi";
import { Link } from "react-router-dom";

function InvitationLink() {
  const items = [
    { icon: <FaSitemap />, label: "Subordinate data" },
    { icon: <FaCoins />, label: "Commission details" },
    { icon: <FaBook />, label: "Invitation rules" },
    { icon: <FaHeadset />, label: "Agent line customer service" },
    { icon: <FaMoneyBillWave />, label: "Rebate ratio" },
  ];

  return (
    <>
      {/* Invitation Button */}
      <div className="flex items-center justify-center py-12">
        <button className="uppercase py-3 px-6 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full text-white font-bold cursor-pointer hover:scale-105 transition-transform shadow-lg">
          Invitation Link
        </button>
      </div>

      <div className="px-6 space-y-6">
        {/* Referral Link Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 flex items-center justify-between">
          <FiLink className="text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-orange-500" />

          <Link className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
            Open Referral Link
          </Link>

          <div className="p-2 relative hover:bg-gray-100 rounded-full group">
            <FiCopy className="text-xl cursor-pointer text-gray-600" />
            <p className="absolute bg-black text-white text-[10px] hidden group-hover:block -left-8 py-1 -top-8 px-2 rounded">
              Copy Link
            </p>
          </div>
        </div>

        {/* Items List */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {items.map((item, index) => (
            <ClickableLink key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

// Clickable Item Component
function ClickableLink({ item }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer transition-all group">
      <div className="flex items-center gap-4">
        <div className="text-2xl text-white bg-gradient-to-tr from-yellow-400 to-orange-500 
                        bg-gray-50 p-2 rounded-lg group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:to-orange-500 
                        group-hover:text-white transition-all shadow-sm">
          {item.icon}
        </div>
        <p className="text-gray-800 font-medium">{item.label}</p>
      </div>

      <FaArrowRight className="text-gray-800 group-hover:text-gray-500 group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:to-orange-500 transition-all" />
    </div>
  );
}

export default InvitationLink;
