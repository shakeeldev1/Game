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
            <div className="bg-[#E2E3E5] rounded-md my-2 p-2 justify-around flex items-center">
                <IoAlertCircleOutline color="#dc2626" size={35} />
                <div className=" p-2 text-[10px] text-center md:text-sm w-[80%]">
                    Attention ALL Members! Customer service is currently available only via official channels.
                </div>
                <Link to='/learn-more'><div className=" px-2 py-2 bg-gradient-to-tr from-[#5b0b43] via-[#8f8fa8] via-[#467b33] rounded-lg cursor-pointer text-[10px] sm:text-sm text-nowrap text-white">
                    Learn more
                </div></Link>
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