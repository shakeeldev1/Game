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
            <div className="animate-on-scroll font-sans">
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
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-[#232529] to-[#1A1C20] rounded-md flex items-center justify-center text-[#F4F4F4] shadow-[0_0_5px_rgba(255,215,0,0.5)] group-hover:shadow-[0_0_35px_rgba(255,215,0,0.7)] border-[#CF7500] border transition-all duration-300 group-hover:scale-110">
                        <FaExclamationTriangle  className="text-[12px] md:text-xl animate-pulse" />
                    </div>
                  
                </div>

                {/* Text Content */}
                <div className="ml-4 mr-6 grow relative z-10">
                    <h4 className="text-[10.9px] md:text-xs font-black text-[#F4F4F4] drop-shadow-lg flex items-center gap-2">
                        {/* <FaFire className="animate-pulse text-[#ff8c00]" /> */}
                        Important Announcement
                    </h4>
                    <p className=" text-[10px]  text- md:text-xs font-medium text-[#f8f8f8]/80 ">
                        Customer service is available <span className="text-[#F4F4F4] font-bold underline decoration-[#ff8c00] decoration-2 underline-offset-2">only via official channels.</span> 
                        Stay safe from scams!
                    </p>
                </div>

                {/* CTA Button */}
                <Link to='/about' className="shrink-0 mr-1 relative z-10 group/btn">
                    <div className="btn-premium px-2 py-2 text-[10px] md:text-xs font-black rounded-md cursor-pointer text-[#0f0f13]   shine-effect flex items-center gap-2">
                        <FaRocket  className="text-[10px] md:text-sm" />
                        Details
                    </div>
                </Link>
            </div>

            {/* Quick Stats Bar */}
            <div className="mx-2 mb-4 grid grid-cols-3 gap-3 stagger-children">
                <div className="glass-card rounded-xl p-4 text-center card-hover-lift group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10"> 
                        <div className="w-8 h-8 border-[#CF7500] shadow-[0_0_5px_rgba(255,215,0,0.5)] border md:w-10 md:h-10 mx-auto mb-2 bg-gradient-to-br from-[#232529] to-[#1A1C20]  rounded-md flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaTrophy className="text-[#F4F4F4] text-[10px] md:text-lg" />
                        </div>
                        <p className="text-[12px] font-semibold md:text-[15px]">150K+</p>
                        <p className="text-[10px] text-[#f8f8f8]/50 uppercase tracking-wider ">Winners</p>
                    </div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center card-hover-lift group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff8c00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                        <div className="w-8 h-8 border-[#CF7500] shadow-[0_0_5px_rgba(255,215,0,0.5)] border md:w-10 md:h-10 mx-auto mb-2 bg-gradient-to-br from-[#232529] to-[#1A1C20]  rounded-md flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaFire className="text-[#F4F4F4] text-[10px] md:text-lg" />
                        </div>
                        <p className="text-[12px] font-semibold md:text-[15px]">50+</p>
                        <p className="text-[10px] text-[#f8f8f8]/50 uppercase tracking-wider font-bold">Games</p>
                    </div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center card-hover-lift group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                        <div className="w-8 h-8 border-[#CF7500] shadow-[0_0_5px_rgba(255,215,0,0.5)] border md:w-10 md:h-10 mx-auto mb-2 bg-gradient-to-br from-[#232529] to-[#1A1C20]  rounded-md flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaStar className="text-[#F4F4F4] text-[10px] md:text-lg" />
                        </div>
                        <p className="text-[12px] font-semibold md:text-[15px]">4.9</p>
                        <p className="text-[10px] text-[#f8f8f8]/50 uppercase tracking-wider font-bold">Rating</p>
                    </div>
                </div>
            </div>

            {/* VIP Banner */}
            <div className="mx-2 mb-4 animate-on-scroll">
                <div className="relative overflow-hidden rounded-2xl bg-[#1A1C20] p-5 border border-[#ffd700]/20 group cursor-pointer hover:border-[#ffd700]/40 transition-all duration-300">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/5 via-[#ff8c00]/10 to-[#ffd700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="h-8 w-8 md:w-10 md:h-10 bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] rounded-md flex items-center justify-center shadow-[0_0_10px_rgba(255,215,0,0.4)] group-hover:scale-110 transition-transform">
                                <FaGem className="text-[12px] md:text-xl text-[#f4f4f4]" />
                            </div>
                            <div>
                                <h3 className="text-[12px] md:text-xs font-black text-[#f4f4f4] flex items-center gap-2">
                                    VIP Rewards
                                    <span className="px-2 py-0.5 bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-[#0f0f13] md:text-[10px] text-[8px]  rounded-md ">New</span>
                                </h3>
                                <p className="text-[10px] md:text-xs md:mt-1 text-[#F0A500]/60">Unlock exclusive bonuses & cashback</p>
                            </div>
                        </div>
                        <div className="flex items-center  rounded-md  p-1">
                            <FaBolt className="text-[#f4f4f4] animate-pulse" />
                            <span className="text-[10px] md:text-xs font-semibold text-[#f4f4f4]">Join Now</span>
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
            {/* <div className="h-24"></div> */}
        </div>
    )
}
export default Home;
