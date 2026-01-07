import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
    const services = [
        {
            name: "Plinko",
            gameimage:
                "https://pakgame.net/pak_game/upload/games/678d517118a67_image-removebg-preview%20(5).png",
        },
        {
            name: "Virtual Sports",
            gameimage:
                "https://pakgame.net/pak_game/upload/games/678d5db9c5056_image-removebg-preview%20(9).png",
        },
        {
            name: "Live Casino",
            gameimage:
                "https://pakgame.net/pak_game/upload/games/678d5e24799ed_image-removebg-preview%20(10).png",
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
                        className="block bg-[#1e103f]/40 rounded-xl shadow-lg p-4 text-center hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:-translate-y-1 cursor-pointer transition border border-white/5 hover:border-fuchsia-500/30 group"
                    >
                        {/* Image */}
                        <img
                            src={item.gameimage}
                            alt={item.name}
                            className="w-16 h-16 mx-auto mb-3 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                        />

                        {/* Name */}
                        <h3 className="text-[10px] sm:text-sm font-bold text-gray-300 group-hover:text-fuchsia-300 transition-colors">
                            {item.name}
                        </h3>
                    </Link>
                ))}
            </div>

            <div className="flex items-center justify-center w-full py-4">
                <Link to="/categories">
                    <button className="px-6 py-1.5 text-xs font-bold rounded-full cursor-pointer bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white hover:from-fuchsia-500 hover:to-purple-500 transform hover:scale-105 transition-all shadow-[0_0_15px_rgba(217,70,239,0.4)] border border-fuchsia-400/30 uppercase tracking-wide">
                        See More
                    </button>
                </Link>
            </div>
        </div>
    );
}