import HomeSlider from "../components/home/HomeSlider";
import { FaExclamationTriangle, FaFire, FaTrophy, FaStar, FaGem, FaBolt, FaRocket } from "react-icons/fa";
import PopularGame from "../components/home/PopularGame";
import JackPots from "../components/home/JackPots";
import Services from "../components/home/Services";
import PlatFormRecom from "../components/home/PlatFormRecom";
import GamesSection from "../components/home/GamesSection";
import WiningData from "../components/home/WiningData";
import EarningChart from "../components/home/EarningChart";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="p-2 particles-bg relative">
            {/* Animated Background Orbs */}
            <div className="fixed top-20 left-0 w-64 h-64 bg-[#ffd700]/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="fixed bottom-40 right-0 w-48 h-48 bg-[#00d4ff]/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            {/* Hero Slider */}
            <div className="animate-on-scroll">
                <HomeSlider />
            </div>

            {/* Announcement Banner - Premium Glass Effect */}
            <div className="glass-card rounded-2xl my-4 mx-2 p-4 flex items-center card-hover-lift relative overflow-hidden group animate-on-scroll">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/5 via-transparent to-[#ff8c00]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                {/* Modern Icon Badge */}
                <div className="flex-shrink-0 ml-1 relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#ffd700] to-[#ff8c00] rounded-xl flex items-center justify-center text-[#0f0f13] shadow-[0_0_25px_rgba(255,215,0,0.5)] group-hover:shadow-[0_0_35px_rgba(255,215,0,0.7)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaExclamationTriangle size={20} className="animate-pulse" />
                    </div>
                    {/* Ping effect */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff4757] rounded-full animate-ping"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff4757] rounded-full"></div>
                </div>

                {/* Text Content */}
                <div className="ml-4 mr-6 grow relative z-10">
                    <h4 className="text-xs font-black text-[#ffd700] uppercase tracking-widest mb-1 drop-shadow-lg flex items-center gap-2">
                        <FaFire className="animate-pulse text-[#ff8c00]" />
                        Important Announcement
                    </h4>
                    <p className="text-xs font-medium text-[#f8f8f8]/80 leading-snug">
                        Customer service is available <span className="text-[#ffd700] font-bold underline decoration-[#ff8c00] decoration-2 underline-offset-2">only via official channels.</span> Stay safe from scams!
                    </p>
                </div>

                {/* CTA Button */}
                <Link to='/about' className="shrink-0 mr-1 relative z-10 group/btn">
                    <div className="btn-premium px-5 py-2.5 text-xs font-black rounded-xl cursor-pointer text-[#0f0f13] uppercase tracking-wider shine-effect flex items-center gap-2">
                        <FaRocket className="text-sm" />
                        Details
                    </div>
                </Link>
            </div>

            {/* Quick Stats Bar */}
            <div className="mx-2 mb-4 grid grid-cols-3 gap-3 stagger-children">
                <div className="glass-card rounded-xl p-4 text-center card-hover-lift group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                        <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#ffd700]/20 to-[#ff8c00]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaTrophy className="text-[#ffd700] text-lg" />
                        </div>
                        <p className="text-xl font-black gradient-text">150K+</p>
                        <p className="text-[10px] text-[#f8f8f8]/50 uppercase tracking-wider font-bold">Winners</p>
                    </div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center card-hover-lift group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff8c00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                        <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#ff8c00]/20 to-[#ffd700]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaFire className="text-[#ff8c00] text-lg" />
                        </div>
                        <p className="text-xl font-black gradient-text">50+</p>
                        <p className="text-[10px] text-[#f8f8f8]/50 uppercase tracking-wider font-bold">Games</p>
                    </div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center card-hover-lift group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                        <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#ffd700]/20 to-[#ff8c00]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaStar className="text-[#ffd700] text-lg" />
                        </div>
                        <p className="text-xl font-black gradient-text">4.9</p>
                        <p className="text-[10px] text-[#f8f8f8]/50 uppercase tracking-wider font-bold">Rating</p>
                    </div>
                </div>
            </div>

            {/* VIP Banner */}
            <div className="mx-2 mb-4 animate-on-scroll">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a1a24] via-[#2a2a3a] to-[#1a1a24] p-5 border border-[#ffd700]/20 group cursor-pointer hover:border-[#ffd700]/40 transition-all duration-300">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/5 via-[#ff8c00]/10 to-[#ffd700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#ffd700] to-[#ff8c00] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.4)] group-hover:scale-110 transition-transform">
                                <FaGem className="text-2xl text-[#0f0f13]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-[#f8f8f8] flex items-center gap-2">
                                    VIP Rewards
                                    <span className="px-2 py-0.5 bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-[#0f0f13] text-[10px] font-black rounded-full uppercase">New</span>
                                </h3>
                                <p className="text-xs text-[#f8f8f8]/60">Unlock exclusive bonuses & cashback</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBolt className="text-[#ffd700] animate-pulse" />
                            <span className="text-sm font-bold text-[#ffd700]">Join Now</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Game Sections with enhanced styling */}
            <div className="space-y-6 stagger-children">
                <PopularGame />
                <JackPots />
                <Services />
                <PlatFormRecom />
                <GamesSection />
                <WiningData />
                <EarningChart />
            </div>

            {/* Bottom Spacer */}
            <div className="h-24"></div>
        </div>
    )
}
export default Home;
