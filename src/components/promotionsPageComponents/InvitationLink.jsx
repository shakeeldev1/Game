import React from "react";
import {
  FaHandHoldingDollar,
  FaBook,
  FaHeadset,
  FaSackDollar,
  FaArrowRight,
  FaSitemap,
} from "react-icons/fa6";
import { FiLink, FiCopy } from "react-icons/fi";
import { Link } from "react-router-dom";

function InvitationLink() {
  const items = [
    { icon: <FaSitemap />, label: "Subordinate data" },
    { icon: <FaHandHoldingDollar />, label: "Commission details" },
    { icon: <FaBook />, label: "Invitation rules" },
    { icon: <FaHeadset />, label: "Agent line customer service" },
    { icon: <FaSackDollar />, label: "Rebate ratio" },
  ];

  return (
    <>
      {/* Invitation Button */}
      <div className="flex items-center justify-center py-12">
        <button className="uppercase py-3 px-6 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full text-white font-bold cursor-pointer hover:scale-105 transition-transform">
          Invitation Link
        </button>
      </div>

      <div className="px-6 space-y-4">
        {/* Referral Link Card */}
        <div className="bg-white flex items-center justify-between shadow-lg border border-gray-100 p-4 mb-10 rounded-xl">
          <FiLink className="text-xl text-orange-500" />

          <Link className="hover:text-orange-400 font-medium">
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
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          {items.map((item, index) => (
            <ClickAbleLink key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

// Clickable Item Component
function ClickAbleLink({ item }) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer transition-colors group">
      <div className="flex items-center gap-4">
        <div className="text-2xl text-orange-500 bg-orange-50 p-2 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
          {item.icon}
        </div>
        <p className="text-gray-800 font-medium">{item.label}</p>
      </div>

      <FaArrowRight className="text-gray-300 group-hover:text-orange-500 transition-colors" />
    </div>
  );
}

export default InvitationLink;
