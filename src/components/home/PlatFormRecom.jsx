import React, { useEffect, useRef, useState } from "react";
import { PiCaretCircleLeftFill } from "react-icons/pi";
import { PiCaretCircleRightFill } from "react-icons/pi";
export default function PlatFormRecom() {
    const popular = [
        "https://agstatic.com/games/spribe/aviator.jpg",
        "https://agstatic.com/games/redgenn/aviatrix.jpg",
        "https://agstatic.com/games/pgsoft/fortune_tiger.jpg",
        "https://agstatic.com/games/jdb/dragon_tiger_joker_bonus.jpg",
        "https://agstatic.com/games/conceptgaming/multi_hand_bj.jpg",
        "https://agstatic.com/games/spribe/mines.jpg",
    ];

    const sliderRef = useRef(null);
    const [pause, setPause] = useState(false);

    // Auto slide
    useEffect(() => {
        if (pause) return;

        const interval = setInterval(() => {
            sliderRef.current.scrollBy({
                left: 200,
                behavior: "smooth",
            });

            // Reset when reach end
            if (
                sliderRef.current.scrollLeft +
                sliderRef.current.offsetWidth >=
                sliderRef.current.scrollWidth
            ) {
                sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [pause]);

    const slideLeft = () => {
        sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const slideRight = () => {
        sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <div className="px-3 py-4 relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
                <h1 className="text-black text-lg font-bold">
                    Platform Recommendation
                </h1>

                {/* Controls */}
                <div className="flex gap-2">
                    <button
                    >
                        <PiCaretCircleLeftFill onClick={slideLeft}
                            className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 text-white text-sm" />
                    </button>
                    <button

                    >
                        <PiCaretCircleRightFill onClick={slideRight}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 text-white text-sm" />
                    </button>
                </div>
            </div>

            {/* Slider */}
            <div
                ref={sliderRef}
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                className="flex gap-3 overflow-y-hidden overflow-x-scroll scrollbar-hide"
            >
                {popular.map((img, index) => (
                    <div
                        key={index}
                        className="min-w-[120px] overflow-hidden rounded-xl p-[2px] bg-gradient-to-r from-yellow-500  to-orange-500 hover:scale-105 transition"
                    >
                        <img
                            src={img}
                            alt="game"
                            className="rounded-xl w-full h-[100px] object-cover bg-white"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
