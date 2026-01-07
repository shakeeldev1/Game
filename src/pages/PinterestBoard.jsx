import React, { useState } from 'react';

const PinterestBoard = () => {
  const [selectedPin, setSelectedPin] = useState(null);

  const pins = [
  { 
    id: 1, 
    title: "an image of a website page with the word earn money on it and icons above", 
    image: "https://i.pinimg.com/236x/c9/f7/b9/c9f7b97bcfb80bb58b48b8ac3e6f8a87.jpg", 
    height: 226.937,
    related: [
      "Game Studio Website",
      "Gaming Website Design Inspiration",
      "Design Gaming Website Graphics",
      "Gaming Website Ui Design",
      "Cryptocurrency Landing Page Design",
      "Web Dashboard",
      "Android Design",
      "Game Gui",
      "Color Design Inspiration"
    ]
  },
  { 
    id: 2, 
    title: "the casino website is displayed on a computer screen", 
    image: "https://i.pinimg.com/236x/ea/fc/5c/eafc5cacbd646b1dcb98bf1fccfcfd1e.jpg", 
    height: 387.672,
    related: [
      "Slot Machine Design",
      "App Banner Design",
      "Gambling Banner",
      "Casino Banner",
      "Casino Banner Design",
      "Casino Website Design",
      "Ui Website",
      "Game Ui Design",
      "Modern Games"
    ]
  },
  { 
    id: 3, 
    title: "Game Store Website, Game Website Design Inspiration, Mobile Game Ui Examples, Space-themed Game Interface, Poker Game Ui Design, Card Ui, Roulette Game, App Interface Design, Portal Game", 
    image: "https://i.pinimg.com/236x/b6/71/a3/b671a356cfd6ae9bedde8792f8a0cdaa.jpg", 
    height: 375.312,
    related: [
      "Game Store Website",
      "Game Website Design Inspiration",
      "Mobile Game Ui Examples",
      "Space-themed Game Interface",
      "Poker Game Ui Design",
      "Card Ui",
      "Roulette Game",
      "App Interface Design",
      "Portal Game"
    ]
  },
  { 
    id: 4, 
    title: "an image of a computer screen showing the game's main menu and other items", 
    image: "https://i.pinimg.com/236x/d6/b3/46/d6b346b7e081740a55c93477a932b721.jpg", 
    height: 226.937,
    related: [
      "Mobile Game Interface",
      "Best Video Game Ui",
      "Video Game Shop Ui",
      "Game Ui Design User Interface",
      "Dashboard App",
      "Game Sites",
      "Dashboard Ui"
    ]
  },
  { 
    id: 5, 
    title: "the space lord slot machine is displayed on a computer screen, with three different symbols", 
    image: "https://i.pinimg.com/236x/e0/bf/81/e0bf81c5973d9c2c56dcadf7ddd22bf5.jpg", 
    height: 226.937,
    related: [
      "Victory Vegas Jackpot",
      "Casino Slot Machine Png",
      "Blue Website",
      "Casino Slot Machine Gif",
      "Free Slots Casino",
      "Jackpot Casino",
      "Website Logo Design",
      "Gaming Banner"
    ]
  },
  { 
    id: 6, 
    title: "the casino game with dices and other items on it's display screen, which includes", 
    image: "https://i.pinimg.com/236x/09/ee/13/09ee135b3885a426ac4cd85eee2191ef.jpg", 
    height: 498.953,
    related: [
      "Bank Dice Game",
      "Lucky Dice Game",
      "Dice Game Icon",
      "Dice Game Design Ideas",
      "Dice Dreams Game",
      "Lottery Game Icon",
      "Dice Dreams Free Rolls",
      "Monopoly Game Interface",
      "Ludo Game Assets Download"
    ]
  },
  { 
    id: 7, 
    title: "Game Leaderboard Results, Coin Master Probability Table, Game Leaderboard, Game Leaderboard Design, Game Achievement Rewards, Game Chest Gui, Game Interface With Coins, Mahjong Online Game Interface, Space Game Gui Pack", 
    image: "https://i.pinimg.com/474x/be/8d/e3/be8de304ba89fd4ff7dad7ef258f999a.jpg", // Image URL would go here
    height: 226.937,
    related: [
      "Game Leaderboard Results",
      "Coin Master Probability Table",
      "Game Leaderboard",
      "Game Leaderboard Design",
      "Game Achievement Rewards",
      "Game Chest Gui",
      "Game Interface With Coins",
      "Mahjong Online Game Interface",
      "Space Game Gui Pack"
    ]
  },
  { 
    id: 8, 
    title: "Online Sports Betting Interface, Online Betting App Interface, Online Betting Website Interface, Online Betting Platform Interface, Online Betting Site Interface, Aviator Online Casino Game Interface, Colorful Casino Game Interface", 
    image: "https://i.pinimg.com/474x/62/14/2d/62142dc7b813c4ae2622ff49e091b9fa.jpg", // Image URL would go here
    height: 387.672,
    related: [
      "Online Sports Betting Interface",
      "Online Betting App Interface",
      "Online Betting Website Interface",
      "Online Betting Platform Interface",
      "Online Betting Site Interface",
      "Aviator Online Casino Game Interface",
      "Colorful Casino Game Interface"
    ]
  },
  { 
    id: 9, 
    title: "Daily Missions In Game Interface, Game Daily Mission Rewards, How To Complete Game Missions, Mobile Game Mission Tracker, Tips For Earning Game Rewards, Video Game Menu Screen, Mobile Game Settings Menu, Mobile Game Menu Design", 
    image: "https://i.pinimg.com/736x/0d/6e/2c/0d6e2cb8d3884958997e72224a7c8e73.jpg", // Image URL would go here
    height: 375.312,
    related: [
      "Daily Missions In Game Interface",
      "Game Daily Mission Rewards",
      "How To Complete Game Missions",
      "Mobile Game Mission Tracker",
      "Tips For Earning Game Rewards",
      "Video Game Menu Screen",
      "Mobile Game Settings Menu",
      "Mobile Game Menu Design"
    ]
  },
  { 
    id: 10, 
    title: "Game Ui Kit, Basketball Game Equipment Guide, Turn Based Game Ui, Basketball App, Super Shot Basketball Arcade Game, Puzzle Game Ui, Basketball Shooting Games, Snake Game, Marble Games", 
    image: "https://i.pinimg.com/474x/bf/cd/41/bfcd419ec424fc41a93ca4d246ca4c91.jpg", // Image URL would go here
    height: 226.937,
    related: [
      "Game Ui Kit",
      "Basketball Game Equipment Guide",
      "Turn Based Game Ui",
      "Basketball App",
      "Super Shot Basketball Arcade Game",
      "Puzzle Game Ui",
      "Basketball Shooting Games",
      "Snake Game",
      "Marble Games"
    ]
  },
  { 
    id: 11, 
    title: "Game Ui, Mobile Game, Game Design, Casino", 
    image: "https://i.pinimg.com/474x/19/48/41/194841655f0a98c3d9be9a802f534e27.jpg", // Image URL would go here
    height: 226.937,
    related: [
      "Game Ui",
      "Mobile Game",
      "Game Design",
      "Casino"
    ]
  },
  { 
    id: 12, 
    title: "Led Board, App Design, Game Art, Board Games", 
    image: "https://i.pinimg.com/474x/a1/1c/32/a11c32801f6558adcb80066e20ddc6c4.jpg", // Image URL would go here
    height: 387.672,
    related: [
      "Led Board",
      "App Design",
      "Game Art",
      "Board Games"
    ]
  },
  
];



  const collaborators = [
    { name: "Taras Chernenko", username: "animissimo", avatar: "https://i.pinimg.com/75x75_RS/ea/b7/e7/eab7e79651f0912e6d42b286142c36d8.jpg" },
    { name: "Zira Zulu", username: "zirazulu", avatar: "https://i.pinimg.com/75x75_RS/ce/9f/ec/ce9fec5e6e4f92327e658e365b8bb8e6.jpg" }
  ];

  // SVG Icons
  const ShareIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.7 5.8 12 .08l-5.7 5.7L7.7 7.2 11 3.9V15h2V3.91l3.3 3.3zM2 18v-5H0v5a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-5h-2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"></path>
    </svg>
  );

  const DotsIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2.5 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m9.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m9.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"></path>
    </svg>
  );

  const CloseIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="m12 13.41 8.3 8.3 1.4-1.42L13.42 12l8.3-8.3-1.42-1.4-8.3 8.28-8.3-8.3L2.3 3.7l8.28 8.3-8.3 8.3 1.42 1.4z"></path>
    </svg>
  );

  const ArrowUpIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="max-w-full mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-[750px] mx-auto pt-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              {/* Board Title */}
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Wellcome To Pak Game</h1>
              
              {/* Board Stats */}
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <span>58 Pins</span>
                <span>·</span>
                <span>1y</span>
              </div>

              {/* Collaborators */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {collaborators.map((collab, index) => (
                    <div 
                      key={collab.username}
                      className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                      style={{ marginLeft: index > 0 ? '-10.67px' : '0px', zIndex: 2 - index }}
                    >
                      <img 
                        src={collab.avatar} 
                        alt={collab.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                <span className="text-gray-600 text-sm">
                  By{" "}
                  <a href={`/${collaborators[0].username}/`} className="font-semibold hover:underline">
                    {collaborators[0].name}
                  </a>{" "}
                  and{" "}
                  <a href={`/${collaborators[1].username}/`} className="font-semibold hover:underline">
                    {collaborators[1].name}
                  </a>
                </span>
              </div>
            </div>

            {/* Share Button */}
            <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
              <ShareIcon />
            </button>
          </div>
        </div>

        {/* Updated Grid: 2 Cards in a Row */}
        <div className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {pins.map((pin) => (
              <div 
                key={pin.id} 
                className="relative group cursor-pointer"
                onClick={() => setSelectedPin(pin)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200">
                  {/* Pin Image Wrapper with fixed height */}
                  <div className="relative" style={{ height: '350px' }}>
                    <img 
                      src={pin.image} 
                      alt={pin.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="absolute top-3 right-3">
                        <button 
                          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPin(pin);
                          }}
                        >
                          <DotsIcon />
                        </button>
                      </div>
                      <div className="absolute top-3 left-3">
                        <button className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors">
                          Save
                        </button>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                          <ArrowUpIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pin Title */}
                  <div className="p-3">
                    <p className="text-sm text-gray-700 line-clamp-2">{pin.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Pin Details */}
        {selectedPin && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">More about this Pin</h2>
                  <button 
                    onClick={() => setSelectedPin(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </div>
                
                {/* Related Interests */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPin.related.map((interest, index) => (
                      <a 
                        key={index}
                        href={`/ideas/${interest.toLowerCase().replace(/\s+/g, '-')}/`}
                        className="px-3 py-2 bg-white rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {interest}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Pin Image */}
                <div className="mb-6">
                  <img 
                    src={selectedPin.image} 
                    alt={selectedPin.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                {/* Pin Description */}
                <p className="text-gray-700">{selectedPin.title}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PinterestBoard;
