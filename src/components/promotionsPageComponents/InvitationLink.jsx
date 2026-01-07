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
    { icon: <FaSitemap />, label: "Subordinate data", color: "text-cyan-400" },
    { icon: <FaCoins />, label: "Commission details", color: "text-fuchsia-400" },
    { icon: <FaBook />, label: "Invitation rules", color: "text-purple-400" },
    { icon: <FaHeadset />, label: "Agent line customer service", color: "text-green-400" },
    { icon: <FaMoneyBillWave />, label: "Rebate ratio", color: "text-yellow-400" },
  ];

  return (
    <>
      {/* Invitation Button */}
      <div className="flex items-center justify-center py-8">
        <button className="uppercase py-3 px-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full text-white font-bold cursor-pointer hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-cyan-400/30 tracking-wider">
          Invitation Link
        </button>
      </div>

      <div className="px-6 space-y-6 pb-24">
        {/* Referral Link Card */}
        <div className="bg-[#1a1033]/80 backdrop-blur-xl rounded-3xl shadow-lg border border-white/10 p-5 flex items-center justify-between group hover:border-cyan-500/30 transition-colors">
          <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:text-cyan-300 transition-colors">
            <FiLink className="text-2xl" />
          </div>

          <Link className="text-gray-300 font-medium hover:text-white transition-colors flex-1 text-center">
            Open Referral Link
          </Link>

          <div className="p-3 relative bg-white/5 rounded-full hover:bg-cyan-500/20 cursor-pointer transition-colors group/copy">
            <FiCopy className="text-xl text-gray-400 group-hover/copy:text-cyan-400 transition-colors" />
            <p className="absolute bg-black/90 text-white text-[10px] hidden group-hover/copy:block -left-8 py-1 -top-8 px-2 rounded whitespace-nowrap border border-white/20">
              Copy Link
            </p>
          </div>
        </div>

        {/* Items List */}
        <div className="bg-[#1a1033]/80 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden border border-white/10">
          <div className="divide-y divide-white/5">
            {items.map((item, index) => (
              <ClickableLink key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Clickable Item Component
function ClickableLink({ item }) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-white/5 cursor-pointer transition-all group border-l-2 border-transparent hover:border-cyan-500">
      <div className="flex items-center gap-4">
        <div className={`text-xl p-2.5 rounded-xl bg-white/5 border border-white/5 ${item.color} group-hover:scale-110 transition-transform shadow-inner`}>
          {item.icon}
        </div>
        <p className="text-gray-300 font-medium group-hover:text-white transition-colors">{item.label}</p>
      </div>

      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-cyan-500/20 transition-colors">
        <FaArrowRight className="text-gray-500 group-hover:text-cyan-400 transition-colors text-xs" />
      </div>
    </div>
  );
}

export default InvitationLink;
