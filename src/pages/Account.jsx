import React from 'react';
import {
  ChevronRight,
  RefreshCw,
  Bell,
  BarChart2,
  Globe,
  Settings,
  MessageSquare,
  HelpCircle,
  Info,
  LogOut,
  DollarSign,
  CreditCard,
  Shield,
  Headphones,
  Wallet,
  ChevronLeft, // Added for back button
  Copy,
  Zap,
  Crown
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 font-sans">
      {/* Dynamic Background Accents */}
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-cyan-50/50 to-transparent -z-10" />
      
      <div className="max-w-lg mx-auto px-4 pt-6">
        
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <ChevronLeft size={18} className="text-slate-600 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-700">Home</span>
          </button>
          
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Profile <span className="text-slate-300 mx-1">/</span> <span className="text-cyan-600">Settings</span>
          </div>
        </div>

        {/* 1. Enhanced Profile Section */}
        <div className="relative mb-8 text-center sm:text-left sm:flex sm:items-center sm:space-x-6">
          <div className="relative inline-block group">
            <div className="w-24 h-24 rounded-[2rem] p-[3px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-fuchsia-500 shadow-xl shadow-blue-200/50 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-[1.8rem] bg-slate-900 flex items-center justify-center overflow-hidden border-4 border-white">
                <span className="text-white font-black text-2xl tracking-tighter">SH</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-xl shadow-lg flex items-center justify-center border border-slate-100">
              <Crown size={16} className="text-amber-500" />
            </div>
          </div>

          <div className="mt-4 sm:mt-0 flex-1">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">rMUSol</h1>
              <span className="px-2 py-0.5 bg-cyan-500 text-white text-[10px] font-black rounded-lg uppercase tracking-widest shadow-sm shadow-cyan-200">Pro</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 mt-1.5">
              <span className="text-xs font-bold text-slate-400 tracking-wider">UID: HQUNXG</span>
              <button className="p-1.5 hover:bg-white rounded-lg transition-colors text-slate-300 hover:text-cyan-500 border border-transparent hover:border-slate-100">
                <Copy size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Premium Balance Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 shadow-2xl shadow-blue-900/20 mb-6">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-[50px]" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[50px]" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-1">Available Balance</p>
                <h2 className="text-4xl font-black text-white tracking-tighter">Rs 0.00</h2>
              </div>
              <button className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:rotate-180 transition-all duration-700 backdrop-blur-md border border-white/10">
                <RefreshCw size={18} />
              </button>
            </div>

            <div className="mt-8 mb-8">
              <div className="flex justify-between items-end mb-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">VIP Level 2 Progress</p>
                <p className="text-[10px] font-black text-white">75%</p>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[75%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <ActionButton to="/safeBox" icon={<Wallet size={20}/>} label="Wallet" />
              <ActionButton to="/deposit" icon={<DollarSign size={20}/>} label="Deposit" color="bg-cyan-500" />
              <ActionButton to="/withdraw" icon={<CreditCard size={20}/>} label="Withdraw" />
            </div>
          </div>
        </div>

        {/* 3. Safe Vault Promo */}
        <Link to="/safeBox" className="group relative block mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative bg-white rounded-3xl p-5 border border-slate-100 flex items-center justify-between hover:border-fuchsia-200 transition-all shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-fuchsia-50 rounded-2xl flex items-center justify-center text-fuchsia-600 group-hover:scale-110 transition-transform">
                <Shield size={28} />
              </div>
              <div>
                <h4 className="text-slate-900 font-black text-base tracking-tight">Safe Vault</h4>
                <div className="flex items-center mt-0.5 space-x-2">
                  <Zap size={12} className="text-amber-500 fill-amber-500" />
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Daily Interest 0.1%</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-fuchsia-600 font-black">Rs 0.00</p>
              <ChevronRight size={18} className="ml-auto text-slate-300 mt-1" />
            </div>
          </div>
        </Link>

        {/* 4. Settings & Menu Sections */}
        <section className="space-y-6">
          <MenuSection title="Account Activity">
            <MenuItem icon={<Bell />} label="Notification" count={15} color="text-blue-500" bg="bg-blue-50" />
            <MenuItem icon={<BarChart2 />} label="Game Statistics" to="/game-statistics" color="text-purple-500" bg="bg-purple-50" />
            <MenuItem icon={<Globe />} label="Language" value="English" color="text-emerald-500" bg="bg-emerald-50" />
          </MenuSection>

          <MenuSection title="Service Center">
            <MenuItem icon={<Settings />} label="Settings" to="/setting" color="text-slate-500" bg="bg-slate-100" />
            <MenuItem icon={<MessageSquare />} label="Feedback" to="/feedback" color="text-fuchsia-500" bg="bg-fuchsia-50" />
            <MenuItem icon={<Headphones />} label="Customer Service" color="text-cyan-500" bg="bg-cyan-50" />
            <MenuItem icon={<HelpCircle />} label="Beginner's Guide" color="text-orange-500" bg="bg-orange-50" />
          </MenuSection>
        </section>

        {/* 5. Enhanced Logout */}
        <button className="w-full mt-10 mb-6 bg-white border-2 border-slate-100 text-slate-400 py-4 rounded-2xl font-black text-xs tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all active:scale-95 shadow-sm uppercase">
          <LogOut size={16} />
          <span>Secure Sign Out</span>
        </button>

      </div>
    </div>
  );
};

/* --- Helper Components (Same as before) --- */
const ActionButton = ({ to, icon, label, color = "bg-white/10" }) => (
  <Link to={to} className="flex flex-col items-center group/btn">
    <div className={`w-14 h-14 rounded-2xl ${color} backdrop-blur-md flex items-center justify-center border border-white/10 group-hover/btn:scale-110 transition-all duration-300 shadow-lg`}>
      <span className="text-white">{icon}</span>
    </div>
    <p className="text-[10px] text-white mt-3 font-black uppercase tracking-widest opacity-80">{label}</p>
  </Link>
);

const MenuSection = ({ title, children }) => (
  <div>
    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-3">{title}</h3>
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
      <ul className="divide-y divide-slate-50">{children}</ul>
    </div>
  </div>
);

const MenuItem = ({ icon, label, to, count, value, color, bg }) => {
  const Content = (
    <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-all group cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className={`w-10 h-10 ${bg} ${color} rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}>
          {React.cloneElement(icon, { size: 18 })}
        </div>
        <p className="text-sm font-bold text-slate-700 tracking-tight">{label}</p>
      </div>
      <div className="flex items-center space-x-3">
        {count && <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">{count}</span>}
        {value && <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{value}</span>}
        <ChevronRight size={16} className="text-slate-200 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
  return to ? <Link to={to}>{Content}</Link> : Content;
};

export default Account;