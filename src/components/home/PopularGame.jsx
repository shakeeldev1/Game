import React from "react";
import { Link } from "react-router-dom";

export default function PopularGame() {
  const games = [
    {
      name: "Popular",
      bgimage: "https://img.freepik.com/premium-photo/gray-textured-wall-background_776894-162478.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      gameicon: "/HomePic/trophy.png", // Ensure this path is correct in your public folder
    },
    {
      name: "Table Games",
      bgimage: "https://img.freepik.com/premium-photo/gray-textured-wall-background_776894-162478.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      gameicon: "https://pakgame.net/pak_game/upload/games/675179753ad3b_66d8374c13ed3_CasinoImage1.png",
    },
    {
      name: "Video Poker",
      bgimage: "https://img.freepik.com/premium-photo/gray-textured-wall-background_776894-162478.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      gameicon: "https://pakgame.net/pak_game/upload/games/675179db23560_66d7c088c5644_gamecategory_20240205190916gswx%20(1).png",
    },
  ];

  return (
    <div className="p-2">
      <div className="grid grid-cols-3 gap-3">
        {games.map((game, index) => (
          /* The Link now wraps the entire container */
          <Link
            to="/more-games"
            key={index}
            className="relative block rounded-xl overflow-hidden text-center shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-purple-500/20 group cursor-pointer hover:border-cyan-400/50 transition-all duration-300"
          >
            {/* Background Image */}
            <img
              src={game.bgimage}
              alt={game.name}
              className="w-full h-24 object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />

            {/* Overlay Content - Added pointer-events-none just to be safe */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#0f0720]/90 via-[#0f0720]/40 to-transparent pointer-events-none">
              <img
                src={game.gameicon}
                alt={game.name}
                className="w-10 h-10 mb-1 drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]"
              />
              <h1 className="text-cyan-50 text-xs font-bold uppercase tracking-wider drop-shadow-md">
                {game.name}
              </h1>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors duration-300"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}