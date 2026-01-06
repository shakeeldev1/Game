import React from 'react'

export default function GamesSection() {
     const services = [
        {
            name: "Plinko",
            gameimage:
                "https://agstatic.com/games/pragmaticplay/fortune_dragon.jpg",
        },
        {
            name: "Virtual Sports",
            gameimage:
                "https://agstatic.com/games/pgsoft/fortune_tiger.jpg",
        },
        // {
        //     name: "Live Casino",
        //     gameimage:
        //         "https://agstatic.com/games/xprogaming/andar_bahar.jpg",
        // },
        {
            name: "Live Casino",
            gameimage:
                "https://agstatic.com/games/tvbet/lucky_6.jpg",
        },
        {
            name: "Live Casino",
            gameimage:
                "https://agstatic.com/games/xprogaming/teen_patti.jpg",
        },
        {
            name: "Live Casino",
            gameimage:
                "https://agstatic.com/games/tvbet/1_bet.jpg",
        },
        {
            name: "Live Casino",
            gameimage:
                "https://agstatic.com/games/redgenn/aviatrix.jpg",
        },
       
    ];
    return (
        <div>
            <h1 className='text-black text-lg font-bold text-center mb-4'>Popular Games</h1>
            <div className="grid grid-cols-3 gap-3">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-200/20 rounded-xl shadow-lg  text-center hover:shadow-xl cursor-pointer transition shadow-gray-400"
                    >
                        {/* Image */}
                        <img
                            src={item.gameimage}
                            alt={item.name}
                            className="w-full rounded-md h-full mx-auto object-contain"
                        />

                       
                    </div>
                ))}

            </div>
            <div className=" flex items-center justify-center w-full py-3">
                <button className="px-3 py-1 text-xs font-medium rounded-full text-[10px] sm:text-sm cursor-pointer bg-gradient-to-tr from-yellow-400 to-orange-500 text-white hover:opacity-90">
                    See More
                </button>
            </div>
        </div>
    )
}
