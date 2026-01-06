import React from "react";

export default function JackPots() {
  const jackpots = [
    {
      id: 1,
      name: "Mega Jackpot",
      img: "https://pakgame.net/pak_game/upload/games/6751794e4f3ae_66d8394c33f06_file%20(1).png",
    },
    {
      id: 2,
      name: "Mega Slots",
      img: "https://pakgame.net/pak_game/upload/games/675d0255d8364_slote.png",
    },
    {
      id: 3,
      name: "Scratch Cards",
      img: "https://pakgame.net/pak_game/upload/games/67517959db414_66d83a057788b_file%20(2).png",
    },
  ];

  return (
    <div
      className="my-4 px-3 py-3 rounded-lg bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/elegant-abstract-geometric-background-with-modern-black-white-overlapping-layers-shadows_1321417-6807.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-white text-lg font-bold text-center mb-4">
          JACKPOTS
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {jackpots.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:scale-105 transition"
            >
              {/* Icon */}
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="text-white sm:text-sm text-[10px] font-semibold">
                {item.name}
              </h3>

              {/* Accent */}
              <div className="mt-2 h-1 w-10 mx-auto rounded-full bg-gradient-to-r from-yellow-300 to-orange-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
