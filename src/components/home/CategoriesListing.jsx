import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../common/BackButton";

const categories = [
  { name: "Popular", img: "https://pakgame.net/pak_game/upload/games/675179ad30d25_66d7bfc72cdb0_gamecategory_20240205190631mwlx.png" },
  { name: "Table games", img: "https://pakgame.net/pak_game/upload/games/675179753ad3b_66d8374c13ed3_CasinoImage1.png" },
  { name: "Video Poker", img: "https://pakgame.net/pak_game/upload/games/675179db23560_66d7c088c5644_gamecategory_20240205190916gswx (1).png" },
  { name: "Jackpots", img: "https://pakgame.net/pak_game/upload/games/6751794e4f3ae_66d8394c33f06_file (1).png" },
  { name: "Slots", img: "https://pakgame.net/pak_game/upload/games/675d0255d8364_slote.png" },
  { name: "Scratch Cards", img: "https://pakgame.net/pak_game/upload/games/67517959db414_66d83a057788b_file (2).png" },
  { name: "Plinko", img: "https://pakgame.net/pak_game/upload/games/678d517118a67_image-removebg-preview (5).png" },
  { name: "New", img: "https://pakgame.net/pak_game/upload/games/675179863fd18_New Games.png" },
  { name: "Live Casino", img: "https://pakgame.net/pak_game/upload/games/678d5e24799ed_image-removebg-preview (10).png" },
  { name: "Virtual Sports", img: "https://pakgame.net/pak_game/upload/games/678d5db9c5056_image-removebg-preview (9).png" },
  { name: "Baccarat", img: "https://pakgame.net/pak_game/upload/games/678d5d2e2296b_image-removebg-preview (8).png" },
  { name: "Roulette", img: "https://pakgame.net/pak_game/upload/games/678816242b0e6_image-removebg-preview (3).png" },
  { name: "Crash Game", img: "https://pakgame.net/pak_game/upload/games/6751793136b0c_original.png" },
  { name: "HTML5", img: "https://pakgame.net/pak_game/upload/games/678818d5cb3da_image-removebg-preview (4).png" },
  { name: "BlackJacks", img: "https://pakgame.net/pak_game/upload/games/678d5c5e05d8c_image-removebg-preview (7).png" },
];

export default function CategoriesListing() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Back Button */}
      <div className="mb-6">
        <BackButton />
      </div>

      <h4 className="text-2xl font-bold mb-8 text-white">Categories Listing</h4>

      <div className="grid grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/50 backdrop-blur-md rounded-2xl px-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
          >
            <div className="w-24 h-24 rounded-xl overflow-hidden mb-3">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h6 className="text-center text-gray-800 font-semibold">{category.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
