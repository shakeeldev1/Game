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
      <div className="absolute inset-0 bg-[#0f0720]/80 mix-blend-multiply rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-lg font-bold text-center mb-4 flex items-center justify-center gap-2">
          <span className="w-6 h-[2px] bg-gradient-to-r from-transparent to-fuchsia-500"></span>
          JACKPOTS
          <span className="w-6 h-[2px] bg-gradient-to-l from-transparent to-cyan-500"></span>
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {jackpots.map((item) => (
            <div
              key={item.id}
              className="bg-[#1a1033]/60 backdrop-blur-md rounded-xl p-4 text-center border border-white/5 hover:scale-105 transition duration-300 hover:bg-[#1a1033]/80 hover:border-cyan-500/50 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-900/40 group-hover:scale-110 transition-transform">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-7 h-7 object-contain drop-shadow-sm brightness-0 invert"
                />
              </div>

              {/* Name */}
              <h3 className="text-cyan-50 sm:text-sm text-[10px] font-bold tracking-wide group-hover:text-cyan-300 transition-colors">
                {item.name}
              </h3>

              {/* Accent */}
              <div className="mt-2 h-0.5 w-8 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-transparent group-hover:w-12 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
