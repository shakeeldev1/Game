import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaPlay, FaStar, FaFire } from "react-icons/fa";

export default function HomeHeroSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      bg: "https://pakgame.net/pak_game/upload/banners/66604513a361d_fly.png",
      game: encodeURI("https://pakgame.net/pak_game/upload/games/66d1b3516bb2f_Mysterious Bonus.png"),
      title: "Plinko",
      subtitle: "Most Popular",
      desc: "Play Plinko and win big! Spin the wheel and collect as many coins as possible to claim your prize!",
      btn: "Play Now",
      badge: "HOT"
    },
    {
      bg: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&auto=format&fit=crop",
      game: encodeURI("https://img.freepik.com/premium-vector/dragon-esport-logo-template_1300-896.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"),
      title: "Dragon's Fortune",
      subtitle: "Legendary",
      desc: "Battle mythical dragons legendary treasures.Collect fire gems for massive bonus multipliers!",
      btn: "Enter Game",
      badge: "NEW"
    },
    {
      bg: "https://images.unsplash.com/photo-1515992854631-13de43ba2341?w=1600&auto=format&fit=crop",
      game: encodeURI("https://img.freepik.com/free-vector/realistic-casino-gambling-dark-banner-play-win-jackpot_1017-52242.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"),
      title: "Royal Poker Club",
      subtitle: "VIP Tables",
      desc: "Join VIP tables with high rollers.Royal flush bonuses and progressive jackpots available!",
      btn: "Join VIP",
      badge: "VIP"
    },
    {
      bg: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1600&auto=format&fit=crop",
      game: encodeURI("https://img.freepik.com/premium-photo/closeup-woman-with-headphones-helmet_1287196-1450.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"),
      title: "Join Aviator",
      subtitle: "Sky High Wins",
      desc: "Join the Aviator game and experience the thrill of the sky. Spin the wheel and win big!",
      btn: "Join Now",
      badge: "TRENDING"
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        handleSlideChange((index + 1) % slides.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [slides.length, isPaused, index]);

  const handleSlideChange = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const slide = slides[index];

  const nextSlide = () => handleSlideChange((index + 1) % slides.length);
  const prevSlide = () => handleSlideChange((index - 1 + slides.length) % slides.length);
  const goToSlide = (i) => handleSlideChange(i);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'HOT': return 'from-[#ffd700] to-[#ff8c00]';
      case 'NEW': return 'from-[#ffd700] to-[#ff8c00]';
      case 'VIP': return 'from-[#ffd700] to-[#ff8c00]';
      case 'TRENDING': return 'from-[#ffd700] to-[#ff8c00]';
      default: return 'from-[#ffd700] to-[#ff8c00]';
    }
  };

  return (
    <div
      className="relative w-full h-[110px] overflow-hidden rounded-md shadow-[0_0_30px_rgba(0,0,0,0.5)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Container */}
      <div
        className="flex  transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slideItem, i) => (
          <div
            key={i}
            className="min-w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${slideItem.game})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f13]/95 via-[#0f0f13]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13]/80 via-transparent to-transparent" />

            <div className="relative z-10 max-w-5xl mx-auto  flex items-center">
              <div className="flex  items-center w-full">

                {/* LEFT – PREMIUM CONTENT CARD */}
                <div className={`relative flex-1 flex justify-start transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}>
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-[#ffd700]/10 blur-3xl rounded-xl animate-pulse" />
                  {/* Glass card */}
                  <div className="relative flex flex-col backdrop-blur-xl bg-gradient-to-br from-[#1a1a24]/90 to-[#0f0f13]/80 border border-[#ffd700]/20 rounded-md px-5 py-2 max-w-[280px] w-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    
                    {/* Badge */}
                    <div className={`absolute top-0 -right-2 px-1 py-1 bg-gradient-to-r ${getBadgeColor(slideItem.badge)} text-[#0f0f13] text-[6px] font-black rounded-3xl shadow-lg flex items-center gap-1`}>
                      <FaFire className="text-[6px]" />
                      {slideItem.badge}
                    </div>

                   

                    {/* Title */}
                    <h1 className="text-[12px]  text-nowrap mt-2 w-full   font-bold text-[#F4F4F4]">
                      {slideItem.title}
                    </h1>

                    {/* Description */}
                    <p className="text-[#F4F4F4] text-[9px] leading-relaxed mb-1">
                      {slideItem.desc}
                    </p>

                    {/* CTA Button */}
                    <Link to={'/more-games'}>
                      <button className=" cursor-pointer bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] rounded text-[#f4f4f4] hover:bg-gradient-to-r hover:from-[#ffd700] hover:to-[#ff8c00] hover:text-[#0f0f13] transition-all duration-300 px-1 text-[8px] py-1 flex items-center gap-2 w-fit">
                        {slideItem.btn}
                      </button>
                    </Link>
                  </div>
                </div>

                {/* RIGHT – GAME IMAGE */}
                <div className={`flex-1 flex justify-end transition-all duration-500 delay-100 ${isTransitioning ? 'opacity-0 translate-x-[20px]' : 'opacity-100 translate-x-0'}`}>
                  <div className="relative">
                    {/* Glow behind image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/30 to-[#ff8c00]/30 rounded-2xl blur-2xl scale-110"></div>
                    
                    <img
                      src={slideItem.game}
                      alt={slideItem.title}
                      className="relative w-[130px]  rounded-md border-2 border-[#ffd700]/30 shadow-[0_0_30px_rgba(255,215,0,0.3)] animate-[float_3s_ease-in-out_infinite]"
                    />
                    
                    
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-3  hidden top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-[#1a1a24]/90 backdrop-blur-md border border-[#ffd700]/30 rounded-xl flex items-center justify-center text-[#ffd700] hover:bg-gradient-to-br hover:from-[#ffd700] hover:to-[#ff8c00] hover:text-[#0f0f13] transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer group"
      >
        <FaChevronLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3  hidden top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-[#1a1a24]/90 backdrop-blur-md border border-[#ffd700]/30 rounded-xl flex items-center justify-center text-[#ffd700] hover:bg-gradient-to-br hover:from-[#ffd700] hover:to-[#ff8c00]  hover:text-[#0f0f13] transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer group"
      >
        <FaChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-0  left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-[#0f0f13]/60 backdrop-blur-md px-3 py-1 rounded-full">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`cursor-pointer rounded-full transition-all duration-300 ${
              i === index
                ? 'w-1 h-1 bg-gradient-to-r from-[#ffd700] to-[#ff8c00] shadow-[0_0_10px_rgba(255,215,0,0.8)]'
                : 'w-1 h-1 bg-[#f8f8f8]/30 hover:bg-[#ffd700]/50'
            }`}
          />
        ))}
      </div>

      

      {/* Floating animation keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
          }
        `}
      </style>
    </div>
  );
}
