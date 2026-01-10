import React from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaFire, FaStar, FaUsers } from "react-icons/fa";

export default function PopularGame() {
  const games = [
    {
      name: "Demanding",
      bgimage: "https://img.freepik.com/premium-photo/gray-textured-wall-background_776894-162478.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      gameicon: "https://img.freepik.com/free-vector/isometric-online-casino-concept-gambling-platform-live-roulette-poker-with-cards-chips-laptop-characters-croupier-3d-vector-illustration_1284-70143.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
      badge: "HOT",
      players: "2.5K",
    },
    {
      name: "Table Games",
      bgimage: "https://img.freepik.com/premium-photo/gray-textured-wall-background_776894-162478.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      gameicon: "https://img.freepik.com/free-vector/classic-roulette-table-casino-room-with-spin-wheel-reel-chips-realistic-illustration_1284-65805.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
      badge: "NEW",
      players: "1.8K",
    },
    {
      name: "Poker",
      bgimage: "https://img.freepik.com/premium-photo/gray-textured-wall-background_776894-162478.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      gameicon: "https://img.freepik.com/free-vector/casino_24911-45238.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
      badge: "VIP",
      players: "3.2K",
    },
  ];

  const getBadgeStyle = (badge) => {
    switch (badge) {
      case 'HOT': return 'from-[#ff4757] to-[#ff6b81]';
      case 'NEW': return 'from-[#00d4ff] to-[#00ff88]';
      case 'VIP': return 'from-[#ffd700] to-[#ff8c00]';
      default: return 'from-[#ffd700] to-[#ff8c00]';
    }
  };

  return (
    <div className="p-2">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-lg font-black text-[#f8f8f8] flex items-center gap-2">
          <div className="w-1 h-5 bg-gradient-to-b from-[#ffd700] to-[#ff8c00] rounded-full"></div>
          Quick Play
        </h2>
        <Link to="/categories" className="text-xs font-bold text-[#ffd700] hover:text-[#ff8c00] transition-colors flex items-center gap-1">
          View All
          <span className="text-lg">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {games.map((game, index) => (
          <Link
            to="/more-games"
            key={index}
            className="relative block rounded-2xl overflow-hidden text-center group cursor-pointer"
          >
            {/* Card Background with Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/20 to-[#ff8c00]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-[#1a1a24] to-[#0f0f13] border border-[#ffd700]/10 group-hover:border-[#ffd700]/40 rounded-2xl p-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
              
              {/* Badge */}
              <div className={`absolute -top-1 -right-1 px-2 py-0.5 bg-gradient-to-r ${getBadgeStyle(game.badge)} text-[#0f0f13] text-[8px] font-black rounded-full shadow-lg z-10`}>
                {game.badge}
              </div>

              {/* Icon Container */}
              <div className="relative w-14 h-14 mx-auto mb-3">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/30 to-[#ff8c00]/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <img
                  src={game.gameicon}
                  alt={game.name}
                  className="relative w-full h-full rounded-xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-[#ffd700]/20"
                />
                
                {/* Play overlay */}
                <div className="absolute inset-0 bg-[#0f0f13]/60 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaPlay className="text-[#ffd700] text-sm" />
                </div>
              </div>

              {/* Game Name */}
              <h3 className="text-[#f8f8f8] text-xs font-bold uppercase tracking-wider group-hover:text-[#ffd700] transition-colors mb-2">
                {game.name}
              </h3>

              {/* Players count */}
              <div className="flex items-center justify-center gap-1 text-[10px] text-[#f8f8f8]/50">
                <FaUsers className="text-[#ffd700]" />
                <span>{game.players} playing</span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#ffd700] to-[#ff8c00] group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
