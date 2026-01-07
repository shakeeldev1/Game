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

            <div className="bg-gradient-to-r from-fuchsia-900/40 to-purple-900/40 border border-fuchsia-500/30 rounded-2xl my-4 mx-2 p-3 flex items-center shadow-[0_0_15px_rgba(217,70,239,0.15)] backdrop-blur-md">
                <div className="p-2 bg-fuchsia-500/10 rounded-full text-fuchsia-400 shadow-inner shrink-0 border border-fuchsia-500/20">
                    <IoAlertCircleOutline size={24} />
                </div>
                <div className="mx-3 text-xs font-medium text-fuchsia-100/90 leading-snug grow drop-shadow-sm">
                    Attention ALL Members! Customer service is currently available only via official channels.
                </div>
                <Link to='/learn-more'>
                    <div className="px-3 py-1.5 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 rounded-full cursor-pointer text-[10px] font-bold text-white shadow-lg shadow-fuchsia-900/40 transition-all shrink-0 border border-fuchsia-400/30 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)]">
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