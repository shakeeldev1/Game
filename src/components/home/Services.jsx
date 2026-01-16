import React from "react";
import { Link } from "react-router-dom";
import { FaGamepad, FaPlay, FaArrowRight, FaStar, FaUsers } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { PiShareNetworkFill } from "react-icons/pi";
import { MdLiveTv } from "react-icons/md";
import { GiCard7Spades, GiCirclingFish } from "react-icons/gi";
import { BsFire } from "react-icons/bs";
import { IoIosFootball } from "react-icons/io";
import { FaCircleDollarToSlot } from "react-icons/fa6";
export default function Services() {
    const services = [
        {
            name: "Hot",
            gameimage: <BsFire />,
            players: "5.2K",
            rating: "4.9",
            color: "from-[#F0A500] to-[#CF7500]",
        },
        {
            name: "Slot",
            gameimage: <FaCircleDollarToSlot />,
            players: "3.8K",
            rating: "4.7",
            color: "from-[#F0A500] to-[#CF7500]",
        },
        {
            name: "Cards",
            gameimage: <GiCard7Spades />,
            players: "5.2K",
            rating: "4.9",
            color: "from-[#F0A500] to-[#CF7500]",
        },
        {
            name: "Fishing",
            gameimage: <GiCirclingFish />,
            players: "3.8K",
            rating: "4.7",
            color: "from-[#F0A500] to-[#CF7500]",
        },
        {
            name: "Live",
            gameimage: <MdLiveTv />,
            players: "8.1K",
            rating: "4.8",
            color: "from-[#F0A500] to-[#CF7500]",
        },
        {
            name: "Sports",
            gameimage: <IoIosFootball />,
            players: "5.2K",
            rating: "4.9",
            color: "from-[#F0A500] to-[#CF7500]",
        },
        {
            name: "Blockchain",
            gameimage: <PiShareNetworkFill />,
            players: "3.8K",
            rating: "4.7",
            color: "from-[#F0A500] to-[#CF7500]",
        },
        {
            name: "Favorites",
            gameimage: <IoStar />,
            players: "8.1K",
            rating: "4.8",
            color: "from-[#F0A500] to-[#CF7500]",
        },
    ];

    return (
        <div className="px-3 py-1 bg-[#1A1C20]">
            {/* Section Header */}
            <div className="flex items-center mb-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded border border-[#CF7500] flex items-center justify-center shadow-[0_0_15px_rgba(240,165,0,0.3)]">
                        <FaGamepad className="text-[#f4f4f4] text-xs md:text-lg" />
                    </div>
                    <div>
                        <h1 className="text-[10px]  font-black text-[#f4f4f4]">Game Categories</h1>
                        <p className="text-[8px] text-[#F0A500]/50  tracking-wider">Choose Your Game</p>
                    </div>
                </div>
            </div>

            {/* Game Cards */}
            <div className="grid grid-cols-4 gap-1">
                {services.map((item, index) => (
                    <Link
                        to="/categories"
                        key={index}
                        className="block group"
                    >
                        <div className="relative bg-gradient-to-br from-[#1A1C20] to-[#151719] backdrop-blur-md rounded-md overflow-hidden border border-[#CF7500]/20 hover:border-[#F0A500]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(240,165,0,0.15)]">

                            {/* Image Container */}
                            {/* <div className="relative h-20 overflow-hidden">
                       
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C20] via-transparent to-transparent z-10"></div>
                                
                                <img
                                    src={item.gameimage}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                
                            
                                <div className="absolute top-2 right-2 z-20 flex items-center gap-1 px-2 py-0.5 bg-[#1A1C20]/80 backdrop-blur-sm rounded-md border border-[#CF7500]/30">
                                    <FaStar className="text-[#F0A500] text-[8px]" />
                                    <span className="text-[10px] font-bold text-[#F4F4F4]">{item.rating}</span>
                                </div>
                            </div> */}

                            {/* Content */}
                            <div className=" p-2 flex flex-col justify-center items-center">
                                {/* Name */}
                                <h3 className="text-[10px] items-center text-nowrap   font-bold text-[#F4F4F4] group-hover:text-[#F0A500] transition-colors uppercase tracking-wide mb-1">
                                    {item.gameimage}
                                </h3>
                                <span className="flex items-center justify-center gap-1 text-[8px] text-[#F4F4F4]">{item.name}</span>

                            </div>

                            {/* Bottom accent */}
                            <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* See More Button */}
            <div className="flex items-center justify-center w-full py-2">
                <Link to="/categories">
                    <button className="group relative overflow-hidden px-2 flex gap-1 items-center py-2 rounded-md bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] rounded-md text-[#f4f4f4] text-xs font-bold text-[8px]  uppercase tracking-wider hover:bg-gradient-to-r hover:from-[#ffd700] hover:to-[#ff8c00] hover:text-[#0f0f13] transition-all duration-300">
                        {/* Shine effect */}
                        <div className="absolute inset-0  from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                        <span className="relative text-[8px]  z-10">See All Categories</span>
                        <FaArrowRight className="relative z-10 text-[8px] group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
            </div>
        </div>
    );
}
