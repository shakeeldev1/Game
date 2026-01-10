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
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] text-lg font-bold text-center mb-4 flex items-center justify-center gap-2 animate-pulse'>
                <span className="w-8 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-neon-primary)] to-transparent rounded-full"></span>
                Popular Games
                <span className="w-8 h-[2px] bg-gradient-to-l from-transparent via-[var(--color-neon-accent)] to-transparent rounded-full"></span>
            </h1>

            <div className="grid grid-cols-3 gap-3 px-2">
                {services.map((item, index) => (
                    /* Wrap each game card in a Link */
                    <Link
                        to="/more-games"
                        key={index}
                        className="block bg-[var(--color-neon-bg)]/80 rounded-xl shadow-lg border border-[var(--color-neon-accent)]/20 text-center hover:shadow-[0_0_20px_rgba(240,165,0,0.3)] hover:-translate-y-1 cursor-pointer transition-all duration-300 group hover:border-[var(--color-neon-primary)]/50"
                    >
                        {/* Image Container */}
                        <div className="relative overflow-hidden rounded-xl aspect-square">
                            <img
                                src={item.gameimage}
                                alt={item.name}
                                className="w-full h-full mx-auto object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--color-neon-primary)]/10 transition-colors duration-300"></div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex items-center justify-center w-full py-4">
                <Link to="/more-games">
                    <button className="px-6 py-1.5 text-xs font-bold rounded-full cursor-pointer bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] text-[var(--color-neon-bg)] hover:from-[var(--color-neon-accent)] hover:to-[var(--color-neon-primary)] transform hover:scale-105 transition-all shadow-[0_0_20px_rgba(240,165,0,0.4)] border border-[var(--color-neon-primary)]/30 uppercase tracking-wide">
                        See More
                    </button>
                </Link>
            </div>
        </div>
    )
}