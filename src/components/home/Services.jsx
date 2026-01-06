import React from "react";

export default function Services() {
    const services = [
        {
            name: "Plinko",
            gameimage:
                "https://pakgame.net/pak_game/upload/games/678d517118a67_image-removebg-preview%20(5).png",
        },
        {
            name: "Virtual Sports",
            gameimage:
                "https://pakgame.net/pak_game/upload/games/678d5db9c5056_image-removebg-preview%20(9).png",
        },
        {
            name: "Live Casino",
            gameimage:
                "https://pakgame.net/pak_game/upload/games/678d5e24799ed_image-removebg-preview%20(10).png",
        },
    ];

    return (
        <div className="px-3 ">
            <h1 className="text-black text-lg font-bold text-center mb-4">
                Games Categories
            </h1>

            <div className="grid grid-cols-3 gap-3">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-200/20 rounded-xl shadow-lg p-4 text-center hover:shadow-xl cursor-pointer transition"
                    >
                        {/* Image */}
                        <img
                            src={item.gameimage}
                            alt={item.name}
                            className="w-16 h-16 mx-auto mb-3 object-contain"
                        />

                        {/* Name */}
                        <h3 className="text-[10px] sm:text-sm font-semibold ">
                            {item.name}
                        </h3>

                        {/* Button */}
                    </div>
                ))}

            </div>
            <div className=" flex items-center justify-center w-full py-3">
                <button className="px-3 py-1 text-xs font-medium rounded-full text-[10px] sm:text-sm cursor-pointer bg-gradient-to-tr from-yellow-400 to-orange-500 text-white hover:opacity-90">
                    See More
                </button>
            </div>
        </div>
    );
}
