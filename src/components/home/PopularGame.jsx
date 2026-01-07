import React from "react";
import { Link } from "react-router-dom";

export default function PopularGame() {
  const games = [
    {
      name: "Demanding",
      bgimage: "https://img.freepik.com/premium-photo/gray-textured-wall-background_776894-162478.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      gameicon: "https://img.freepik.com/free-vector/isometric-online-casino-concept-gambling-platform-live-roulette-poker-with-cards-chips-laptop-characters-croupier-3d-vector-illustration_1284-70143.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80", // Ensure this path is correct in your public folder
    },
    {
      name: "Table Games",
      bgimage: "https://img.freepik.com/premium-photo/gray-textured-wall-background_776894-162478.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      gameicon: "https://img.freepik.com/free-vector/classic-roulette-table-casino-room-with-spin-wheel-reel-chips-realistic-illustration_1284-65805.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
    },
    {
      name: " Poker",
      bgimage: "https://img.freepik.com/premium-photo/gray-textured-wall-background_776894-162478.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      gameicon: "https://img.freepik.com/free-vector/casino_24911-45238.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
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
            className="relative block rounded-xl overflow-hidden text-center shadow-[0_0_20px_rgba(6,182,212,0.4)]  border border-purple-500/20 group cursor-pointer hover:border-cyan-400/50 transition-all duration-300"
          >

            {/* Overlay Content - Added pointer-events-none just to be safe */}
            <div className="w-full h-24  flex flex-col items-center justify-center bg-white pointer-events-none">
              <img
                src={game.gameicon}
                alt={game.name}
                className="w-10 h-10 mb-1 rounded-3xl shadow-[0_0_20px_rgba(6,182,212,0.4)] "
              />
              <h1 className="text-black text-xs mt-2 font-bold uppercase tracking-wider drop-shadow-md">
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