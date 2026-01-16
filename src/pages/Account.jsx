import React from 'react';
import {
  ChevronRight, RefreshCw, Bell, BarChart2, Globe, Settings,
  MessageSquare, HelpCircle, LogOut, DollarSign, CreditCard,
  Shield, Headphones, Wallet, ChevronLeft, Copy, Zap, Crown, Star, Gift
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen particles-bg">
      {/* Dynamic Background */}
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-[var(--color-neon-primary)]/5 to-transparent -z-10" />

      <div className="max-w-lg mx-auto px-4 pt-6">

        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-8 animate-on-scroll">
          <button
            onClick={() => navigate('/')}
            className="glass-card group flex items-center  px-1 py-2 rounded-md card-hover-lift"
          >
            <ChevronLeft size={18} className="text-white group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-neon-text)]">Back</span>
          </button>
        </div>

        {/* Profile Section */}
        <div className="relative mb-8 text-center sm:text-left sm:flex sm:items-center sm:space-x-6 animate-on-scroll">
          <div className="relative inline-block group">
            <div className="w-14 h-14 rounded-md p-[3px] bg-gradient-to-br from-[#232529] to-[#1A1C20] flex items-center justify-center shadow-[0_0_30px_rgba(240,165,0,0.3)]  group-hover:rotate-0 transition-transform duration-500">
              <span className="text-[#f4f4f4] font-black text-md tracking-tighter">SH</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-md shadow-lg flex items-center justify-center neon-glow">
              <Crown size={10} className="text-[var(--color-neon-bg)]" />
            </div>
          </div>

          <div className="mt-4 sm:mt-0 flex-1">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <h1 className="text-[13px] md:text-[14px] font-black text-[var(--color-neon-text)]">rMUSol</h1>
              <span className="md:px-2 px-2 md:py-0.5 bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] text-[var(--color-neon-bg)] text-[7px] md:text-[10px] font-black rounded-md uppercase tracking-widest">Pro</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 mt-1.5">
              <span className="text-[10px] md:text-xs font-bold text-[#f4f4f4] tracking-wider">UID: HQUNXG</span>
              <button className="md:p-1.5 glass-card rounded-lg text-[var(--color-neon-accent)] hover:text-[var(--color-neon-primary)] transition-colors">
                <Copy size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-neon-bg)] to-[#2a2520] p-4 shadow-2xl mb-2 border border-[var(--color-neon-primary)]/20 card-hover-lift animate-on-scroll">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-neon-primary)]/20 rounded-full blur-[50px]" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-neon-accent)]/20 rounded-full blur-[50px]" />

          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <p className=" text-[10px] font-black text-[#f4f4f4] uppercase tracking-[0.2em] mb-1">Available Balance</p>
                <h2 className="text-[10px] md:text-lg font-black text-[var(--color-neon-text)] tracking-tighter gradient-text">Rs 0.00</h2>
              </div>
              <button className="h-8 w-8  rounded-md flex items-center justify-center text-[var(--color-neon-text)] hover:text-[var(--color-neon-primary)] hover:rotate-180 transition-all duration-700">
                <RefreshCw className='text-[4px] ' />
              </button>
            </div>

            <div className="mt-2 mb-2">
              <div className="flex justify-between items-end mb-2">
                <p className="text-[8px] md:text-[10px]  text-[var(--color-neon-text)]/50 uppercase tracking-widest">VIP Level 2</p>
                <p className="text-[8px] md:text-[10px] font-black text-[var(--color-neon-primary)]">75%</p>
              </div>
              <div className="h-1 md:h-2 w-full bg-[var(--color-neon-bg)]/50 rounded-full overflow-hidden">
                <div className="h-full w-[75%] bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-full shadow-[0_0_10px_rgba(240,165,0,0.5)]" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <ActionButton to="/wallet" icon={<Wallet size={12}/>} label="Wallet" />
              <ActionButton to="/deposit" icon={<DollarSign size={12} />} label="Deposit" primary />
              <ActionButton to="/withdraw" icon={<CreditCard size={12} />} label="Withdraw" />
            </div>
          </div>
        </div>

        {/* Safe Vault Promo */}
        {/* <Link to="/safeBox" className="group block mb-8 animate-on-scroll">
          <div className="glass-card rounded-2xl p-5 flex items-center justify-between card-hover-lift">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-md flex items-center justify-center text-[var(--color-neon-bg)] group-hover:scale-110 transition-transform neon-glow">
                <Shield className='text-[10px] md:text-xs' />
              </div>
              <div>
                <h4 className="text-[var(--color-neon-text)] font-black text-[12px] md:text-[14px]">Safe Vault</h4>
                <div className="flex items-center mt-0.5 ">
                  <Zap size={12} className="text-[var(--color-neon-primary)] fill-[var(--color-neon-primary)]" />
                  <p className="text-[10px] text-[var(--color-neon-text)]/50 font-bold uppercase tracking-wider">Daily interest 0.1%</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[var(--color-neon-primary)] text-[10px] font-black">Rs 0.00</p>
              <ChevronRight size={18} className="ml-auto text-[var(--color-neon-accent)] mt-1" />
            </div>
          </div>
        </Link> */}

        {/* Menu Sections */}
        <section className="space-y-2 stagger-children">
          <MenuSection title="Account Activity">
            <MenuItem icon={<Bell />} to="/learn-more" label="Notification" count={15} />
            <MenuItem icon={<BarChart2 />} label="Game Statistics" to="/game-statistics" />
            <MenuItem icon={<Globe />} label="Language" value="English" />
          </MenuSection>

          <MenuSection title="Service Center">
            <MenuItem icon={<Settings />} label="Settings" to="/setting" />
            <MenuItem icon={<MessageSquare />} label="Feedback" to="/feedback" />
            <MenuItem icon={<Headphones />} label="Customer Service" />
            <MenuItem icon={<HelpCircle />} label="Beginner's Guide" to="/guide" />
          </MenuSection>
        </section>

        {/* Logout Button */}
        <button className="w-full mt-2 glass-card text-[var(--color-neon-text)]/60 py-[10px] mb-2 rounded-md  text-xs tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-red-500/10 hover:text-white hover:border-red-500/30 transition-all card-hover-lift uppercase">
          <LogOut size={16} />
          <span>Secure Sign Out</span>
        </button>

      </div>
    </div>
  );
};

/* Helper Components */
const ActionButton = ({ to, icon, label, primary }) => (
  <Link to={to} className="flex flex-col items-center group/btn">
    <div className={`w-6 h-6 rounded-md ${primary ? 'btn-premium neon-glow' : 'glass-card'} flex items-center justify-center group-hover/btn:scale-110 transition-all duration-300`}>
      <span className={primary ? 'text-[var(--color-neon-bg)] text-[6px]' : 'text-[var(--color-neon-text)] text-[6px]'}>{icon}</span>
    </div>
    <p className="text-[8px] text-[#f4f4f4] mt-2 uppercase tracking-widest">{label}</p>
  </Link>
);

const MenuSection = ({ title, children }) => (
  <div>
    <h3 className="text-[10px] font-black text-[#f4f4f4] uppercase tracking-[0.2em]  mb-1">{title}</h3>
    <div className="glass-card rounded-md overflow-hidden">
      <ul className="divide-y divide-[var(--color-neon-accent)]/10">{children}</ul>
    </div>
  </div>
);

const MenuItem = ({ icon, label, to, count, value }) => {
  const Content = (
    <div className="flex  items-center justify-between p-2 hover:bg-[var(--color-neon-primary)]/5 transition-all group cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="w-6 h-6  bg-gradient-to-br from-[#232529] to-[#1A1C20] text-[#f4f4f4] border border-[#CF7500] rounded flex items-center justify-center transition-transform group-hover:scale-110">
          {React.cloneElement(icon, {size:12 })}
        </div>
        <p className="text-[12px] text-[var(--color-neon-text)]/80 group-hover:text-[var(--color-neon-text)]">{label}</p>
      </div>
      <div className="flex items-center space-x-3">
        {count && <span className="bg-[var(--color-neon-primary)] text-[var(--color-neon-bg)] text-[10px] font-black px-2 py-0.5 rounded-full">{count}</span>}
        {value && <span className="text-xs font-black text-[var(--color-neon-text)]/40 uppercase tracking-widest">{value}</span>}
        <ChevronRight size={12} className="text-[var(--color-neon-accent)]/50 group-hover:text-[var(--color-neon-primary)] group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
  return to ? <Link to={to}>{Content}</Link> : Content;
};

export default Account;