import HomeSlider from "../components/home/HomeSlider";
import { IoAlertCircleOutline } from "react-icons/io5";
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
        <div className="p-2">
            <HomeSlider />
            {/* alert section*/}

            <div className="bg-white border border-gray-100 rounded-2xl my-4 mx-2 p-2 flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
  {/* Soft Icon Circle */}
  <div className="flex-shrink-0 ml-1">
    <div className="w-10 h-10 bg-fuchsia-50 rounded-full flex items-center justify-center text-fuchsia-500">
      <IoAlertCircleOutline size={22} />
    </div>
  </div>

  {/* Text - Clean & Professional */}
  <div className="ml-4 mr-6 grow">
    <h4 className="text-[11px] font-bold text-nowrap text-[#2F2747] uppercase tracking-widest mb-0.5">Announcement</h4>
    <p className="text-sm font-medium text-gray-600 leading-snug">
      Customer service is currently available <span className="text-gray-900 font-semibold">only via official channels.</span>
    </p>
  </div>

  {/* Modern Outlined Button */}
  <Link to='/about' className="shrink-0 mr-1">
    <div className="px-6 py-1.5 text-xs font-bold rounded-full cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400/30 uppercase tracking-wide">
      Details
    </div>
  </Link>
</div>
            <PopularGame />
            <JackPots />
            <Services />
            <PlatFormRecom />
            <GamesSection />
            <WiningData />
            <EarningChart />
        </div>
    )
}
export default Home;