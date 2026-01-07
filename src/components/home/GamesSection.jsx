import React from 'react'
import { Link } from 'react-router-dom';

export default function GamesSection() {
    const services = [
        {
            name: "Plinko",
            gameimage: "https://agstatic.com/games/pragmaticplay/fortune_dragon.jpg",
        },
        {
            name: "Virtual Sports",
            gameimage: "https://agstatic.com/games/pgsoft/fortune_tiger.jpg",
        },
        {
            name: "Live Casino",
            gameimage: "https://agstatic.com/games/tvbet/lucky_6.jpg",
        },
        {
            name: "Live Casino",
            gameimage: "https://agstatic.com/games/xprogaming/teen_patti.jpg",
        },
        {
            name: "Live Casino",
            gameimage: "https://agstatic.com/games/tvbet/1_bet.jpg",
        },
        {
            name: "Live Casino",
            gameimage: "https://agstatic.com/games/redgenn/aviatrix.jpg",
        },
    ];

    return (
        <div>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-lg font-bold text-center mb-4 flex items-center justify-center gap-2'>
                <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-cyan-500"></span>
                Popular Games
                <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-purple-500"></span>
            </h1>

            <div className="grid grid-cols-3 gap-3 px-2">
                {services.map((item, index) => (
                    /* Wrap each game card in a Link */
                    <Link
                        to="/more-games"
                        key={index}
                        className="block bg-purple-900/20 rounded-xl shadow-lg border border-white/5 text-center hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:-translate-y-1 cursor-pointer transition-all duration-300 group hover:border-fuchsia-500/40"
                    >
                        {/* Image Container */}
                        <div className="relative overflow-hidden rounded-xl aspect-square">
                            <img
                                src={item.gameimage}
                                alt={item.name}
                                className="w-full h-full mx-auto object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-fuchsia-500/10 transition-colors duration-300"></div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex items-center justify-center w-full py-4">
                <Link to="/more-games">
                    <button className="px-6 py-1.5 text-xs font-bold rounded-full cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400/30 uppercase tracking-wide">
                        See More
                    </button>
                </Link>
            </div>
        </div>
    )
}