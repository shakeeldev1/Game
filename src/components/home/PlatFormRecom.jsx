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
        <div className="px-3  relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
                <h1 className="text-[#f4f4f4] text-[12px]  font-bold flex items-center gap-2">
                    <span className="w-1 h-3 bg-[var(--color-neon-primary)] rounded-md shadow-[0_0_10px_rgba(240,165,0,0.8)]"></span>
                    Recommendation
                </h1>

                {/* Controls */}
                <div className="flex gap-1">
                    <button
                        className="group"
                    >
                        <PiCaretCircleLeftFill onClick={slideLeft}
                            className="h-5 w-5 rounded-full bg-[var(--color-neon-bg)]/80 text-[#f4f4f4] hover:text-[var(--color-neon-bg)] hover:bg-[var(--color-neon-primary)] transition-all shadow-[0_0_10px_rgba(240,165,0,0.3)] border border-[var(--color-neon-accent)]/30" />
                    </button>
                    <button
                        className="group"
                    >
                        <PiCaretCircleRightFill onClick={slideRight}
                            className="h-5 w-5  rounded-full bg-[var(--color-neon-bg)]/80 text-[#f4f4f4] hover:text-[var(--color-neon-bg)] hover:bg-[var(--color-neon-primary)] transition-all shadow-[0_0_10px_rgba(240,165,0,0.3)] border border-[var(--color-neon-accent)]/30" />
                    </button>
                </div>
            </div>

            {/* Slider */}
            <div
                ref={sliderRef}
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                className="flex gap-1  overflow-x-scroll"
            >
                {popular.map((img, index) => (
                    <div
                        key={index}
                        className="min-w-[100px] overflow-hidden rounded-md p-[2px] bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] hover:scale-80 transition-all duration-300 shadow-[0_0_20px_rgba(240,165,0,0.2)] group"
                    >
                        <img
                            src={img}
                            alt="game"
                            className="rounded-md w-full  object-cover bg-[var(--color-neon-bg)] opacity-90 group-hover:opacity-100 transition-all duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
