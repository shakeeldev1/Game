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
      <h2 className="text-lg font-bold text-center mb-4">
        Recent Winnings
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
          <thead className="bg-black text-white text-sm">
            <tr>
              <th className="py-2 px-3 text-left">User</th>
              <th className="py-2 px-3 text-left">Game</th>
              <th className="py-2 px-3 text-right">Received</th>
            </tr>
          </thead>

          <tbody className="bg-white text-sm">
            {winnings.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                {/* User */}
                <td className="py-2 px-3">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.id}***</div>
                </td>

                {/* Game Image */}
                <td className="py-2 px-3">
                  <img
                    src={item.gameimage}
                    alt="game"
                    className="w-14 h-8 object-cover rounded"
                  />
                </td>

                {/* Amount */}
                <td className="py-2 px-3 text-right  text-gray-400">
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
