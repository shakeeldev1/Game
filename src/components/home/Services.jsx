import React from "react";
import { Link } from "react-router-dom";
import { FaGamepad, FaPlay, FaArrowRight, FaStar, FaUsers } from "react-icons/fa";

export default function Services() {
    const services = [
        {
            name: "Plinko",
            gameimage: "/HomePic/plinko.png",
            players: "5.2K",
            rating: "4.9",
            color: "from-[#F0A500] to-[#CF7500]",
        },
        {
            name: "Virtual Sports",
            gameimage: "https://thixpro.com/game-image/virtual-game2.jpg",
            players: "3.8K",
            rating: "4.7",
            color: "from-[#F0A500] to-[#CF7500]",
        },
        {
            name: "Live Casino",
            gameimage: "https://www.gammastack.com/wp-content/uploads/2024/09/white-label-casino-game-development_img.png",
            players: "8.1K",
            rating: "4.8",
            color: "from-[#F0A500] to-[#CF7500]",
        },
    ];

    return (
        <div className="px-3 py-2 bg-[#1A1C20]">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 md:w-10 md:h-10  rounded-md border border-[#CF7500] flex items-center justify-center shadow-[0_0_15px_rgba(240,165,0,0.3)]">
                        <FaGamepad className="text-[#f4f4f4] text-xs md:text-lg" />
                    </div>
                    <div>
                        <h1 className="text-[12px] md:text-lg font-black text-[#f4f4f4]">Game Categories</h1>
                        <p className="text-[10px] text-[#F0A500]/50 uppercase tracking-wider">Choose Your Game</p>
                    </div>
                </div>
            </div>

            {/* Game Cards */}
            <div className="grid grid-cols-3 gap-3">
                {services.map((item, index) => (
                    <Link
                        to="/categories"
                        key={index}
                        className="block group"
                    >
                        <div className="relative bg-gradient-to-br from-[#1A1C20] to-[#151719] backdrop-blur-md rounded-md overflow-hidden border border-[#CF7500]/20 hover:border-[#F0A500]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(240,165,0,0.15)]">
                            
                            {/* Image Container */}
                            <div className="relative h-20 overflow-hidden">
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C20] via-transparent to-transparent z-10"></div>
                                
                                <img
                                    src={item.gameimage}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                
                                
                                
                                {/* Rating badge */}
                                <div className="absolute top-2 right-2 z-20 flex items-center gap-1 px-2 py-0.5 bg-[#1A1C20]/80 backdrop-blur-sm rounded-md border border-[#CF7500]/30">
                                    <FaStar className="text-[#F0A500] text-[8px]" />
                                    <span className="text-[10px] font-bold text-[#F4F4F4]">{item.rating}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-3 text-center">
                                {/* Name */}
                                <h3 className="text-[9px] md:text-[10px]  font-bold text-[#F4F4F4] group-hover:text-[#F0A500] transition-colors uppercase tracking-wide mb-1">
                                    {item.name}
                                </h3>
                                
                                {/* Players */}
                                <div className="flex items-center justify-center gap-1 text-[10px] text-[#F4F4F4]/50">
                                    <FaUsers className="text-[#F0A500]" />
                                    <span>{item.players}</span>
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* See More Button */}
            <div className="flex items-center justify-center w-full py-4">
                <Link to="/categories">
                    <button className="group relative overflow-hidden px-2 flex gap-2 items-center py-3 rounded-md bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] rounded-md text-[#f4f4f4] text-xs font-bold text-[10px] md:text-xs uppercase tracking-wider hover:bg-gradient-to-r hover:from-[#ffd700] hover:to-[#ff8c00] hover:text-[#0f0f13] transition-all duration-300">
                        {/* Shine effect */}
                        <div className="absolute inset-0  from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        
                        <span className="relative text-[10px] md:text-xs z-10">See All Categories</span>
                        <FaArrowRight className="relative z-10 text-[10px] md:text-xs  group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
            </div>
        </div>
    );
}
