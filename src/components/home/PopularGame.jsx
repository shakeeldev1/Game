import React from "react";

export default function PopularGame() {
  const games = [
    {
      name: "Popular",
      bgimage:
        "https://img.freepik.com/premium-photo/gray-textured-wall-background_776894-162478.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      gameicon:
        "/HomePic/trophy.png",
    },
    {
      name: "Table Games",
      bgimage:
        "https://img.freepik.com/premium-photo/gray-textured-wall-background_776894-162478.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      gameicon:
        "https://pakgame.net/pak_game/upload/games/675179753ad3b_66d8374c13ed3_CasinoImage1.png",
    },
    {
      name: "Video Poker",
      bgimage:
       "https://img.freepik.com/premium-photo/gray-textured-wall-background_776894-162478.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      gameicon:
        "https://pakgame.net/pak_game/upload/games/675179db23560_66d7c088c5644_gamecategory_20240205190916gswx%20(1).png",
    },
  ];

  return (
    <div className="p-2">
      <div className="grid grid-cols-3 gap-3">
        {games.map((game, index) => (
          <div
            key={index}
            className="relative rounded-md overflow-hidden text-center"
          >
            {/* Background Image */}
            <img
              src={game.bgimage}
              alt={game.name}
              className="w-full h-24 object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
              <img
                src={game.gameicon}
                alt={game.name}
                className="w-10 h-10 mb-1"
              />
              <h1 className="text-white text-sm font-semibold">
                {game.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
