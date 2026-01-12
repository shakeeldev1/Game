import React from "react";
import { Link } from "react-router-dom";
import { FaCoins, FaTrophy, FaBolt, FaGem } from "react-icons/fa";

export default function JackPots() {
  const jackpots = [
    {
      id: 1,
      name: "Mega Jackpot",
      img: "https://img.freepik.com/free-vector/jackpot-background-with-flying-golden-coins_1017-23144.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      prize: "₨ 500K",
      color: "from-[#232529] to-[#1A1C20]",
      icon:""
    },
    {
      id: 2,
      name: "Mega Slots",
      img: "https://img.freepik.com/free-psd/3d-rendering-casino-elements_23-2149586706.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      prize: "₨ 250K",
      color: "from-[#232529] to-[#1A1C20]",
    },
    {
      id: 3,
      name: "Scratch Cards",
      img: "https://img.freepik.com/premium-psd/vintage-neon-glow-coupon-code-text-with-neon-mint-green-png-y2k-decorative-sale-post-designs_1142283-254066.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      prize: "₨ 100K",
      color: "from-[#232529] to-[#1A1C20]",
    },
  ];

  return (
    <div className="my-4 mx-2 rounded-2xl bg-gradient-to-br from-[#1a1a24] to-[#0f0f13] border border-[#ffd700]/20 relative overflow-hidden">
      


      {/* Content */}
      <div className="relative z-10 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#232529] to-[#1A1C20] rounded-md border border-[#CF7500] flex items-center justify-center shadow-[0_0_10px_rgba(255,215,0,0.4)]">
              <FaTrophy className="text-[#f4f4f4] text-lg" />
            </div>
            <div>
              <h2 className="md:text-lg text-[11px] font-black text-[#f8f8f8]">JACKPOTS</h2>
              <p className="text-[10px] text-[#F0A500]/50 uppercase tracking-wider">Win Big Today</p>
            </div>
          </div>

          {/* Live indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5  rounded-full border border-[#CF7500]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-br from-[#232529] to-[#1A1C20] "></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f4f4f4]"></span>
            </span>
            <span className="text-[10px] font-bold text-[#f4f4f4] uppercase">Live</span>
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

               

                {/* Icon Container with Glow */}
                <div className="relative  mx-auto  flex items-center justify-center md:mb-1">
                  {/* Animated ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${item.color} shadow-[0_0_5px_rgba(255,215,0,0.4)] group-hover:opacity-60 blur-md transition-opacity`}></div>

                  {/* Main icon circle */}
                  <div className={`relative h-12 w-12 md:h-12 md:w-12 rounded-full bg-gradient-to-tr ${item.color} flex items-center justify-center shadow-[0_0_3px_rgba(255,215,0,0.4)]  group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-8 rounded-[50%] w-8 md:w-6 md:h-6 object-contain drop-shadow-sm"
                    />
                  </div>

            
                 
                </div>

                {/* Prize Amount */}
                <div className="mb-2">
                  <span className={`text-[10px] md:text-xs font-black text-[#f4f4f4]`}>
                    {item.prize}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-[#F0A500] text-[9px] md:text-xs">
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
            <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] rounded-md text-[#f4f4f4] text-xs font-bold text-[10px] md:text-xs uppercase tracking-wider hover:bg-gradient-to-r hover:from-[#ffd700] hover:to-[#ff8c00] hover:text-[#0f0f13] transition-all duration-300 group">
              <FaBolt className="group-hover:animate-pulse" />
              Try Your Luck
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
