import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
    const services = [
        {
            name: "Plinko",
            gameimage:
                "/HomePic/plinko.png",
        },
        {
            name: "Virtual Sports",
            gameimage:
                "https://thixpro.com/game-image/virtual-game2.jpg",
        },
        {
            name: "Live Casino",
            gameimage:
                "https://www.gammastack.com/wp-content/uploads/2024/09/white-label-casino-game-development_img.png",
        },
    ];

    return (
        <div className="px-3 ">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-lg font-bold text-center mb-4 flex items-center justify-center gap-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-cyan-500"></span>
                Games Categories
                <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-fuchsia-500"></span>
            </h1>

            <div className="grid grid-cols-3 gap-3">
                {services.map((item, index) => (
                    /* Wrap each card in a Link to make the whole area clickable */
                    <Link 
                        to="/categories" 
                        key={index} 
                        className="block bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:-translate-y-1 cursor-pointer transition border border-white/5 hover:border-fuchsia-500/30 group"
                    >
                        {/* Image */}
                        <img
                            src={item.gameimage}
                            alt={item.name}
                            className="w-16 h-16 mx-auto mb-3 object-contain rounded-[50%] drop-shadow-md group-hover:scale-110 bg-contain transition-transform duration-300"
                        />

                        {/* Name */}
                        <h3 className="text-[12px] text-nowrap sm:text-sm font-bold text-black group-hover:text-fuchsia-300 transition-colors">
                            {item.name}
                        </h3>
                    </Link>
                ))}
            </div>

            <div className="flex items-center justify-center w-full py-4">
                <Link to="/categories">
                    <button className="px-6 py-1.5 text-xs font-bold rounded-full cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400/30 uppercase tracking-wide">
                        See More
                    </button>
                </Link>
            </div>
        </div>
    );
}