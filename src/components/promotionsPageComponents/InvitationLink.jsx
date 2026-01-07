import React from "react";
import {
  FaCoins,
  FaBook,
  FaHeadset,
  FaMoneyBillWave,
  FaSitemap,
  FaChevronRight,
} from "react-icons/fa";
import { FiLink, FiCopy } from "react-icons/fi";
import { Link } from "react-router-dom";

function InvitationLink() {
  const items = [
    { icon: <FaSitemap />, label: "Subordinate data", color: "text-cyan-600", bg: "bg-cyan-50" },
    { icon: <FaCoins />, label: "Commission details", color: "text-fuchsia-600", bg: "bg-fuchsia-50" },
    { icon: <FaBook />, label: "Invitation rules", color: "text-purple-600", bg: "bg-purple-50" },
    { icon: <FaHeadset />, label: "Customer service", color: "text-emerald-600", bg: "bg-emerald-50" },
    { icon: <FaMoneyBillWave />, label: "Rebate ratio", color: "text-amber-600", bg: "bg-amber-50" },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Primary Action Button */}
      <div className="flex items-center justify-center py-10">
        <button className="uppercase py-4 px-10 bg-slate-900 hover:bg-fuchsia-600 text-white text-xs font-black rounded-2xl cursor-pointer transition-all shadow-xl shadow-slate-200 hover:shadow-fuchsia-200 tracking-[0.2em] active:scale-95">
          Invitation Link
        </button>
      </div>

      <div className="px-6 space-y-4 pb-24">
        {/* Referral Link Card */}
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 p-4 flex items-center gap-4 group transition-all">
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-fuchsia-50 group-hover:text-fuchsia-600 transition-colors">
            <FiLink className="text-xl" />
          </div>

          <div className="flex-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Referral Link</p>
            <Link className="text-slate-700 font-bold hover:text-fuchsia-600 transition-colors block truncate pr-4">
              https://agencyhub.com/ref/8291...
            </Link>
          </div>

          <button className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-all active:scale-90 relative group/copy">
            <FiCopy className="text-lg" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/copy:opacity-100 transition-opacity pointer-events-none">
              Copy
            </span>
          </button>
        </div>

        {/* Navigation List */}
        <div className="bg-white rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden">
          <div className="divide-y divide-slate-50">
            {items.map((item, index) => (
              <ClickableLink key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ClickableLink({ item }) {
  return (
    <div className="flex items-center justify-between p-5 hover:bg-slate-50/80 cursor-pointer transition-all group">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center text-lg transition-transform group-hover:scale-110`}>
          {item.icon}
        </div>
        <p className="text-slate-700 font-bold text-sm tracking-tight group-hover:text-slate-900 transition-colors">
          {item.label}
        </p>
      </div>

      <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 group-hover:text-fuchsia-500 group-hover:translate-x-1 transition-all">
        <FaChevronRight className="text-xs" />
      </div>
    </div>
  );
}

export default InvitationLink;