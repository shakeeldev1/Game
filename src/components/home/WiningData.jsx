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
    <div className="px-3">
      <h2 className="text-[12px] md:text-lg font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r text-white  from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] flex items-center justify-center gap-2 ">
        <span className="w-8 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-neon-primary)] to-transparent rounded-full"></span>
        Recent Winnings
        <span className="w-8 h-[2px] bg-gradient-to-l from-transparent via-[var(--color-neon-accent)] to-transparent rounded-full"></span>
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden shadow-[0_0_20px_rgba(240,165,0,0.2)] border border-[var(--color-neon-accent)]/30">
          <thead className="bg-[var(--color-neon-bg)] text-[var(--color-neon-primary)] text-sm uppercase tracking-wider border-b border-[var(--color-neon-accent)]/50">
            <tr>
              <th className="py-3 px-3 text-[10px] md:text-xs text-left">User</th>
              <th className="py-3 px-3 text-[10px] md:text-xs text-left">Game</th>
              <th className="py-3 px-3 text-[10px] md:text-xs text-right">Received</th>
            </tr>
          </thead>

          <tbody className="bg-[var(--color-neon-bg)]/50 text-sm backdrop-blur-sm divide-y divide-[var(--color-neon-accent)]/20">
            {winnings.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-[var(--color-neon-primary)]/10 transition-colors group"
              >
                {/* User */}
                <td className="py-3 px-3">
                  <div className="font-semibold text-[10px] md:text-xs text-[var(--color-neon-text)] group-hover:text-[var(--color-neon-primary)]">{item.name}</div>
                  <div className="text-[10px] md:text-xs text-[var(--color-neon-accent)] group-hover:text-[var(--color-neon-primary)]">{item.id}***</div>
                </td>

                {/* Game Image */}
                <td className="py-3 px-3">
                  <img
                    src={item.gameimage}
                    alt="game"
                    className="w-10 md:w-14 md:h-8 object-cover rounded border border-[var(--color-neon-accent)]/50 shadow-sm"
                  />
                </td>

                {/* Amount */}
                <td className="py-3 px-3 text-right text-[10px] md:text-xs  font-bold text-transparent text-white drop-shadow-sm">
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
