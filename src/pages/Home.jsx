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
            <div className="glass-card rounded-md my-4 mx-2 p-2 flex items-center card-hover-lift relative overflow-hidden group animate-on-scroll">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/5 via-transparent to-[#ff8c00]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                {/* Modern Icon Badge */}
                <div className="flex-shrink-0 ml-1 relative">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#232529] to-[#1A1C20] rounded flex items-center justify-center text-[#F4F4F4] shadow-[0_0_5px_rgba(255,215,0,0.5)] group-hover:shadow-[0_0_35px_rgba(255,215,0,0.7)] border-[#CF7500] border transition-all duration-300 group-hover:scale-110">
                        <FaExclamationTriangle  className="text-[8px]  animate-pulse" />
                    </div>
                  
                </div>

                {/* Text Content */}
                <div className="ml-4 mr-6 grow relative z-10">
                    <h4 className="text-[10px] font-black text-[#F4F4F4] drop-shadow-lg flex items-center gap-2">
                    
                        Important Announcement
                    </h4>
                    <p className=" text-[8px]  text-[#f8f8f8]/80 ">
                        Customer service is available <span className="text-[#F4F4F4] font-bold underline decoration-[#ff8c00] decoration-2 underline-offset-2">only via official channels.</span> 
                        Stay safe from scams!
                    </p>
                </div>

                {/* CTA Button */}
                <Link to='/about' className="shrink-0 mr-1 relative z-10 group/btn">
                    <div className="btn-premium px-2 py-1 text-[10px]  rounded-md cursor-pointer text-[#0f0f13]   shine-effect flex items-center gap-1">
                        <FaRocket  className="text-[8px] " />
                        Details
                    </div>
                </Link>
            </div>

            {/* Game Sections with enhanced styling */}
            <div className="space-y-1 stagger-children">
                <PlatFormRecom />
                {/* <PopularGame /> */}
                {/* <JackPots /> */}
                {/* add icon and text  */}
                <Services />
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
