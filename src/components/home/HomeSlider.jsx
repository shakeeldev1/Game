import { useState, useEffect, useRef } from "react";

const HomeSlider = () => {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  const AUTOPLAY_DELAY = 4000;
  const TRANSITION_TIME = 800;

  const slides = [
    { src: "https://pakgame.net/pak_game/upload/games/66d1af95c8f96_Pakgame youtuber program Banner.png", alt: "Banner" },
    { src: "https://pakgame.net/pak_game/upload/games/670792abdbf8b_Lucky 10.png", alt: "Banner" },
    { src: "https://pakgame.net/pak_game/upload/games/6707945a0334e_Daily Rewards.png", alt: "Banner" },
    { src: "https://pakgame.net/pak_game/upload/games/66d1b5d067591_Daily Rewards.png", alt: "Banner" },
    { src: "https://pakgame.net/pak_game/upload/banners/66604513a361d_fly.png", alt: "Banner" },
    { src: "https://pakgame.net/pak_game/upload/games/66d1b3516bb2f_Mysterious Bonus.png", alt: "Banner" },
    { src: "https://pakgame.net/pak_game/upload/games/66d1b38190f7a_Pakgame youtuber program Banner.png", alt: "Banner" },
    { src: "https://pakgame.net/pak_game/upload/games/66d1b7b6ea522_invite friends to participate .png", alt: "Banner" },
    { src: "https://pakgame.net/pak_game/upload/games/66d1b1737e740_WinGo Win Streak Bouns.png", alt: "Banner" }
  ];

  // Clone for infinite loop
  const clonedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0]
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [slideWidth, setSlideWidth] = useState(0);

  // Responsive width
  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSlideWidth(sliderRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Autoplay (never stops)
  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);
      setCurrentIndex(prev => prev + 1);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, []);

  // Infinite reset logic
  useEffect(() => {
    if (currentIndex === clonedSlides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(1);
      }, TRANSITION_TIME);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(slides.length);
      }, TRANSITION_TIME);
    }
  }, [currentIndex, clonedSlides.length, slides.length]);

  const transformStyle = {
    transform: `translate3d(-${currentIndex * slideWidth}px, 0, 0)`,
    transition: transition ? `transform ${TRANSITION_TIME}ms ease` : "none",
    width: `${clonedSlides.length * slideWidth}px`
  };

  return (
    <div className="slider" ref={sliderRef}>
      <div className="slider-track" ref={trackRef} style={transformStyle}>
        {clonedSlides.map((slide, index) => (
          <div className="slide" key={index} style={{ width: slideWidth }}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .slider {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .slider-track {
          display: flex;
          will-change: transform;
        }

        .slide {
          flex-shrink: 0;
        }

        .slide img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: none;
        }

        /* Responsive tweaks */
        @media (max-width: 768px) {
          .slide img {
            border-radius: 8px;
          }
        }

        @media (max-width: 480px) {
          .slide img {
            border-radius: 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSlider;
