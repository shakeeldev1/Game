import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomeHeroSlider() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      bg: "https://pakgame.net/pak_game/upload/banners/66604513a361d_fly.png",
      game: encodeURI("https://pakgame.net/pak_game/upload/games/66d1b3516bb2f_Mysterious Bonus.png"),
      title: "Plinko",
      desc: "Play Plinko and win big! Spin the wheel and collect as many coins as possible to claim your prize!",
      btn: "Play Now"
    },
    {
      bg: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&auto=format&fit=crop",
      game: encodeURI("https://img.freepik.com/premium-vector/dragon-esport-logo-template_1300-896.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"),
      title: "Dragon's Fortune",
      desc: "Battle mythical dragons for legendary treasures. Collect fire gems for massive bonus multipliers!",
      btn: "Enter Game"
    },
    {
      bg: "https://images.unsplash.com/photo-1515992854631-13de43ba2341?w=1600&auto=format&fit=crop",
      game: encodeURI("https://img.freepik.com/free-vector/realistic-casino-gambling-dark-banner-play-win-jackpot_1017-52242.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"),
      title: "Royal Poker Club",
      desc: "Join exclusive VIP tables with high rollers. Royal flush bonuses and progressive jackpots available!",
      btn: "Join VIP"
    },
    {
      bg: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1600&auto=format&fit=crop",
      game: encodeURI("https://img.freepik.com/premium-photo/closeup-woman-with-headphones-helmet_1287196-1450.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"),
      title: "Join Aviator",
      desc: "Join the Aviator game and experience the thrill of the sky. Spin the wheel and win big!",
      btn: "Join Now"
    },

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <div
      className="relative w-full h-[200px] sm:h-[240px] md:h-[300px] bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${slide.game})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center">
        <div className="gap-6 items-center w-full">

          {/* LEFT – PREMIUM CONTENT CARD */}
          <div className="relative flex justify-center md:justify-start">

            {/* glow */}
            <div className="absolute -inset-4 bg-cyan-500/20 blur-2xl rounded-xl" />

            {/* glass card */}
            <div className="relative flex items-center gap-3 flex-col  backdrop-blur bg-gradient-to-r from-cyan-500/10 to-blue-600/10  border border-blue-400/20 rounded-xl px-4 py-3 sm:px-6 sm:py-5 max-w-sm w-full shadow-2xl">

              {/* accent line */}
              {/* <span className="block w-10 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-2" /> */}

              <h1 className="text-[18px] sm:text-lg md:text-xl font-bold tracking-wide text-white">
                {slide.title}
              </h1>

              <p className="text-gray-200 text-center text-[12px] sm:text-sm mt-1 leading-relaxed">
                {slide.desc}
              </p>

              <Link to={'/more-games'}>
                <button className="mt-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all text-white text-xs sm:text-sm px-4 py-2 rounded-md font-semibold shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-105">
                  Enter Game
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT – GAME IMAGE */}
          {/* <div className="flex justify-center md:justify-end">
            <img
              src={slide.game}
              alt={slide.title}
              className="w-[160px] sm:w-[220px] md:w-[280px] drop-shadow-2xl animate-[float_3s_ease-in-out_infinite]"
            />
          </div> */}

        </div>
      </div>

      {/* floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
}
