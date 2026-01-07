import React from "react";

export default function WiningData() {
  const winnings = [
    {
      id: "PG10231",
      name: "Asad",
      gameimage: "https://agstatic.com/games/spribe/aviator.jpg",
      amount: "₨ 25,000",
    },
    {
      id: "PG10232",
      name: "Ali",
      gameimage: "https://agstatic.com/games/pgsoft/fortune_tiger.jpg",
      amount: "₨ 12,800",
    },
    {
      id: "PG10233",
      name: "Usman",
      gameimage: "https://agstatic.com/games/spribe/mines.jpg",
      amount: "₨ 18,450",
    },
    {
      id: "PG10234",
      name: "Ahmed",
      gameimage: "https://agstatic.com/games/jdb/dragon_tiger_joker_bonus.jpg",
      amount: "₨ 30,200",
    },
  ];

  return (
    <div className="px-3 py-4">
      <h2 className="text-lg font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 flex items-center justify-center gap-2">
        <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-cyan-500"></span>
        Recent Winnings
        <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-fuchsia-500"></span>
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)]">
          <thead className="bg-[#1e103f] text-cyan-400 text-sm uppercase tracking-wider border-b border-fuchsia-500/30">
            <tr>
              <th className="py-3 px-3 text-left">User</th>
              <th className="py-3 px-3 text-left">Game</th>
              <th className="py-3 px-3 text-right">Received</th>
            </tr>
          </thead>

          <tbody className="bg-[#1a1033]/50 text-sm backdrop-blur-sm divide-y divide-purple-500/10">
            {winnings.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-fuchsia-500/10 transition-colors group"
              >
                {/* User */}
                <td className="py-3 px-3">
                  <div className="font-semibold text-gray-200 group-hover:text-white">{item.name}</div>
                  <div className="text-xs text-purple-400 group-hover:text-purple-300">{item.id}***</div>
                </td>

                {/* Game Image */}
                <td className="py-3 px-3">
                  <img
                    src={item.gameimage}
                    alt="game"
                    className="w-14 h-8 object-cover rounded border border-purple-500/30 shadow-sm"
                  />
                </td>

                {/* Amount */}
                <td className="py-3 px-3 text-right font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 drop-shadow-sm">
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
