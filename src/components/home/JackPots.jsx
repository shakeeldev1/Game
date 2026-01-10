import React from "react";
import { Link } from "react-router-dom";
import { FaCoins, FaTrophy, FaBolt, FaGem } from "react-icons/fa";

export default function JackPots() {
  const jackpots = [
    {
      id: 1,
      name: "Mega Jackpot",
      img: "https://pakgame.net/pak_game/upload/games/6751794e4f3ae_66d8394c33f06_file%20(1).png",
      prize: "₨ 500K",
      color: "from-[#ffd700] to-[#ff8c00]",
    },
    {
      id: 2,
      name: "Mega Slots",
      img: "https://pakgame.net/pak_game/upload/games/675d0255d8364_slote.png",
      prize: "₨ 250K",
      color: "from-[#00d4ff] to-[#00ff88]",
    },
    {
      id: 3,
      name: "Scratch Cards",
      img: "https://pakgame.net/pak_game/upload/games/67517959db414_66d83a057788b_file%20(2).png",
      prize: "₨ 100K",
      color: "from-[#a855f7] to-[#ec4899]",
    },
  ];

  return (
    <div className="my-4 mx-2 rounded-2xl bg-gradient-to-br from-[#1a1a24] to-[#0f0f13] border border-[#ffd700]/20 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffd700]/10 rounded-full blur-[60px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ff8c00]/10 rounded-full blur-[40px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Sparkle decorations */}
      <div className="absolute top-4 left-8 w-1 h-1 bg-[#ffd700] rounded-full animate-ping"></div>
      <div className="absolute top-12 right-12 w-1 h-1 bg-[#00d4ff] rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-8 left-1/2 w-1 h-1 bg-[#ff8c00] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ffd700] to-[#ff8c00] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.4)]">
              <FaTrophy className="text-[#0f0f13] text-lg" />
            </div>
            <div>
              <h2 className="text-lg font-black gradient-text">JACKPOTS</h2>
              <p className="text-[10px] text-[#f8f8f8]/50 uppercase tracking-wider">Win Big Today</p>
            </div>
          </div>
          
          {/* Live indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#ff4757]/20 rounded-full border border-[#ff4757]/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4757] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4757]"></span>
            </span>
            <span className="text-[10px] font-bold text-[#ff4757] uppercase">Live</span>
          </div>
        </div>

        {/* Jackpot Cards */}
        <div className="grid grid-cols-3 gap-3">
          {jackpots.map((item, index) => (
            <Link
              to="/more-games"
              key={item.id}
              className="group cursor-pointer block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-gradient-to-br from-[#1a1a24]/80 to-[#0f0f13]/60 backdrop-blur-md rounded-2xl p-4 text-center border border-[#ffd700]/10 hover:border-[#ffd700]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] overflow-hidden">
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/5 to-[#ff8c00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon Container with Glow */}
                <div className="relative w-14 h-14 mx-auto mb-3">
                  {/* Animated ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${item.color} opacity-30 group-hover:opacity-60 blur-md transition-opacity`}></div>
                  
                  {/* Main icon circle */}
                  <div className={`relative w-full h-full rounded-full bg-gradient-to-tr ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-8 h-8 object-contain drop-shadow-sm brightness-0 invert"
                    />
                  </div>
                  
                  {/* Ping effect */}
                  <div className={`absolute inset-0 rounded-full border-2 border-[#ffd700]/30 animate-ping opacity-0 group-hover:opacity-100`}></div>
                </div>

                {/* Prize Amount */}
                <div className="mb-2">
                  <span className={`text-lg font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.prize}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-[#f8f8f8] text-[11px] font-bold tracking-wider group-hover:text-[#ffd700] transition-colors uppercase">
                  {item.name}
                </h3>

                {/* Animated Accent Line */}
                <div className="mt-3 h-1 w-8 mx-auto rounded-full bg-gradient-to-r from-[#ffd700] to-[#ff8c00] group-hover:w-12 transition-all duration-300 shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>

                {/* Sparkle Effect on hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaGem className="text-[#ffd700] text-xs animate-pulse" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 text-center">
          <Link to="/more-games">
            <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#ffd700]/10 to-[#ff8c00]/10 border border-[#ffd700]/30 rounded-xl text-[#ffd700] text-xs font-bold uppercase tracking-wider hover:bg-gradient-to-r hover:from-[#ffd700] hover:to-[#ff8c00] hover:text-[#0f0f13] transition-all duration-300 group">
              <FaBolt className="group-hover:animate-pulse" />
              Try Your Luck
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
