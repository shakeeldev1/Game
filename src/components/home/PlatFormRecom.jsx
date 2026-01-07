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
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-lg font-bold flex items-center gap-2">
                    <span className="w-1 h-4 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                    Recommendation
                </h1>

                {/* Controls */}
                <div className="flex gap-2">
                    <button
                        className="group"
                    >
                        <PiCaretCircleLeftFill onClick={slideLeft}
                            className="w-7 h-7 rounded-full bg-[#1e103f] text-cyan-500 hover:text-white hover:bg-cyan-600 transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
                    </button>
                    <button
                        className="group"
                    >
                        <PiCaretCircleRightFill onClick={slideRight}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-[#1e103f] text-cyan-500 hover:text-white hover:bg-cyan-600 transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
                    </button>
                </div>
            </div>

            {/* Slider */}
            <div
                ref={sliderRef}
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                className="flex gap-3 overflow-y-hidden overflow-x-scroll scrollbar-hide py-2"
            >
                {popular.map((img, index) => (
                    <div
                        key={index}
                        className="min-w-[120px] overflow-hidden rounded-xl p-[1px] bg-gradient-to-br from-cyan-500 to-purple-600 hover:scale-105 transition shadow-lg shadow-black/30 group"
                    >
                        <img
                            src={img}
                            alt="game"
                            className="rounded-[10px] w-full h-[100px] object-cover bg-black/40 opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
