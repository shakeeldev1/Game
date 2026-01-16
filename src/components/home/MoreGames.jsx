import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../common/BackButton";

// Mock data
const mockGames = [
  {
    id: "1",
    name: "Super Sugar Pop - Hold & Win",
    imageUrl:
      "https://agstatic.com/games/betsoft/super_sugar_pop_hold_and_win.jpg",
    provider: "betsoft",
  },
  {
    id: "2",
    name: "A Big Catch - Hold & Win",
    imageUrl: "https://agstatic.com/games/betsoft/a_big_catch_hold_and_win.jpg",
    provider: "betsoft",
  },
  {
    id: "3",
    name: "Coins Of Ra - Hold & Win",
    imageUrl: "https://agstatic.com/games/betsoft/coins_of_ra_hold_and_win.jpg",
    provider: "betsoft",
  },
  {
    id: "4",
    name: "Tigers Luck - Hold & Win",
    imageUrl: "https://agstatic.com/games/betsoft/tigers_luck_hold_and_win.jpg",
    provider: "betsoft",
  },
  {
    id: "5",
    name: "Take the Vault - Hold & Win",
    imageUrl: "https://agstatic.com/games/betsoft/take_the_vault.jpg",
    provider: "betsoft",
  },
  {
    id: "6",
    name: "Plinko Rush",
    imageUrl: "https://agstatic.com/games/betsoft/plinko_rush.jpg",
    provider: "betsoft",
  },
  {
    id: "7",
    name: "Rockstar: World Tour - Hold & Win",
    imageUrl: "https://agstatic.com/games/betsoft/rock_star_world_tour.jpg",
    provider: "betsoft",
  },
  {
    id: "8",
    name: "Tycoons: Billionaire Bucks",
    imageUrl:
      "https://agstatic.com/games/betsoft/tycoons_billionaire_bucks.jpg",
    provider: "betsoft",
  },
  {
    id: "9",
    name: "Enchanted: Forest Of Fortune",
    imageUrl:
      "https://agstatic.com/games/betsoft/enchanted_forest_of_fortune.jpg",
    provider: "betsoft",
  },
  {
    id: "10",
    name: "Triple Lucky 8's",
    imageUrl: "https://agstatic.com/games/betsoft/triple_lucky_8s.jpg",
    provider: "betsoft",
  },
  {
    id: "11",
    name: "Rise of Triton",
    imageUrl: "https://agstatic.com/games/betsoft/rise_of_triton.jpg",
    provider: "betsoft",
  },
  {
    id: "12",
    name: "Super Golden Dragon Inferno",
    imageUrl:
      "https://agstatic.com/games/betsoft/super_golden_dragon_inferno.jpg",
    provider: "betsoft",
  },
  {
    id: "13",
    name: "72 Fortunes",
    imageUrl: "https://agstatic.com/games/betsoft/72_fortunes.jpg",
    provider: "betsoft",
  },
  {
    id: "14",
    name: "April Fury and the Chamber of Scarabs",
    imageUrl:
      "https://agstatic.com/games/betsoft/april_fury_and_the_chamber_of_scarabs_hold_and_win.jpg",
    provider: "betsoft",
  },
  {
    id: "15",
    name: "Wish Granted",
    imageUrl: "https://agstatic.com/games/betsoft/wish_granted.jpg",
    provider: "betsoft",
  },
  {
    id: "16",
    name: "Pho Sho™",
    imageUrl: "https://agstatic.com/games/betsoft/pho_sho.jpg",
    provider: "betsoft",
  },
  {
    id: "17",
    name: "Hot Lucky 7's",
    imageUrl: "https://agstatic.com/games/betsoft/hot_lucky_7s.jpg",
    provider: "betsoft",
  },
  {
    id: "18",
    name: "Triple Cash or Crash",
    imageUrl: "https://agstatic.com/games/betsoft/triple_cash_or_crash.jpg",
    provider: "betsoft",
  },
  {
    id: "19",
    name: "Mr Vegas 2: Big Money Tower",
    imageUrl:
      "https://agstatic.com/games/betsoft/mr_vegas_2_big_money_tower.jpg",
    provider: "betsoft",
  },
  {
    id: "20",
    name: "Hearts Desire NJP",
    imageUrl: "https://agstatic.com/games/betsoft/hearts_desire_njp.jpg",
    provider: "betsoft",
  },
  {
    id: "21",
    name: "Bounding Luck",
    imageUrl: "https://agstatic.com/games/betsoft/bounding_luck.jpg",
    provider: "betsoft",
  },
  {
    id: "22",
    name: "Sleighin' It NJP",
    imageUrl: "https://agstatic.com/games/betsoft/sleighin_it_njp.jpg",
    provider: "betsoft",
  },
  {
    id: "23",
    name: "Golden Dragon Inferno",
    imageUrl: "https://agstatic.com/games/betsoft/golden_dragon_inferno.jpg",
    provider: "betsoft",
  },
  {
    id: "24",
    name: "Trinity Reels",
    imageUrl: "https://agstatic.com/games/betsoft/trinity_reels.jpg",
    provider: "betsoft",
  },
  {
    id: "25",
    name: "Rags to Witches NJP",
    imageUrl: "https://agstatic.com/games/betsoft/rags_to_witches_njp.jpg",
    provider: "betsoft",
  },
  {
    id: "26",
    name: "Captain's Quest: Treasure Island",
    imageUrl:
      "https://agstatic.com/games/betsoft/captains_quest_treasure_island.jpg",
    provider: "betsoft",
  },
  {
    id: "27",
    name: "Winds of Wealth",
    imageUrl: "https://agstatic.com/games/betsoft/winds_of_wealth.jpg",
    provider: "betsoft",
  },
  {
    id: "28",
    name: "Wilds Of Fortune",
    imageUrl: "https://agstatic.com/games/betsoft/wilds_of_fortune.jpg",
    provider: "betsoft",
  },
  {
    id: "29",
    name: "Book of Helios",
    imageUrl: "https://agstatic.com/games/betsoft/book_of_helios.jpg",
    provider: "betsoft",
  },
  {
    id: "30",
    name: "Gemini Joker",
    imageUrl: "https://agstatic.com/games/betsoft/gemini_joker.jpg",
    provider: "betsoft",
  },
  {
    id: "31",
    name: "Kensei Blades",
    imageUrl: "https://agstatic.com/games/betsoft/kensei_blades.jpg",
    provider: "betsoft",
  },
  {
    id: "32",
    name: "Alkemor's Elements",
    imageUrl: "https://agstatic.com/games/betsoft/alkemors_elements.jpg",
    provider: "betsoft",
  },
  {
    id: "33",
    name: "Primal Wilderness",
    imageUrl: "https://agstatic.com/games/betsoft/primal_wildness_.jpg",
    provider: "betsoft",
  },
  {
    id: "34",
    name: "Lost Mystery Chests",
    imageUrl: "https://agstatic.com/games/betsoft/lost_mystery_chests.jpg",
    provider: "betsoft",
  },
  {
    id: "35",
    name: "Gold Tiger Ascent",
    imageUrl: "https://agstatic.com/games/betsoft/gold_tiger_ascent.jpg",
    provider: "betsoft",
  },
  {
    id: "36",
    name: "Triple Juicy Drops",
    imageUrl: "https://agstatic.com/games/betsoft/triple_juicy_drops.jpg",
    provider: "betsoft",
  },
  {
    id: "37",
    name: "Take The Kingdom",
    imageUrl: "https://agstatic.com/games/betsoft/take_the_kingdom.jpg",
    provider: "betsoft",
  },
  {
    id: "38",
    name: "Thai Blossoms",
    imageUrl: "https://agstatic.com/games/betsoft/thai_blossoms.jpg",
    provider: "betsoft",
  },
  {
    id: "39",
    name: "Stay Frosty",
    imageUrl: "https://agstatic.com/games/betsoft/stay_frosty.jpg",
    provider: "betsoft",
  },
  {
    id: "40",
    name: "Return to Paris",
    imageUrl: "https://agstatic.com/games/betsoft/return_to_paris.jpg",
    provider: "betsoft",
  },
  {
    id: "41",
    name: "Tower Of Fortuna",
    imageUrl: "https://agstatic.com/games/betsoft/tower_of_fortuna.jpg",
    provider: "betsoft",
  },
  {
    id: "42",
    name: "7 Fortune Frenzy",
    imageUrl: "https://agstatic.com/games/betsoft/7_fortune_frenzy.jpg",
    provider: "betsoft",
  },
  {
    id: "43",
    name: "88 Frenzy Fortune",
    imageUrl: "https://agstatic.com/games/betsoft/88_frenzy_fortune.jpg",
    provider: "betsoft",
  },
  {
    id: "44",
    name: "Wild Drops",
    imageUrl: "https://agstatic.com/games/betsoft/wild_drops.jpg",
    provider: "betsoft",
  },
  {
    id: "45",
    name: "Jungle Stripes",
    imageUrl: "https://agstatic.com/games/betsoft/jungle_stripes.jpg",
    provider: "betsoft",
  },
  {
    id: "46",
    name: "Mr. Macau",
    imageUrl: "https://agstatic.com/games/betsoft/mr_macau.jpg",
    provider: "betsoft",
  },
  {
    id: "47",
    name: "Hat Trick Hero",
    imageUrl: "https://agstatic.com/games/betsoft/hat_trick_hero.jpg",
    provider: "betsoft",
  },
  {
    id: "48",
    name: "Lava Gold",
    imageUrl: "https://agstatic.com/games/betsoft/lava_gold.jpg",
    provider: "betsoft",
  },
  {
    id: "49",
    name: "Safari Sam 2",
    imageUrl: "https://agstatic.com/games/betsoft/safari_sam_2.jpg",
    provider: "betsoft",
  },
  {
    id: "50",
    name: "Take Santa's Shop",
    imageUrl: "https://agstatic.com/games/betsoft/take_santas_shop.jpg",
    provider: "betsoft",
  },
  {
    id: "51",
    name: "Book Of Darkness",
    imageUrl: "https://agstatic.com/games/betsoft/book_of_darkness.jpg",
    provider: "betsoft",
  },
  {
    id: "52",
    name: "Chilli Pop",
    imageUrl: "https://agstatic.com/games/betsoft/chillipop.jpg",
    provider: "betsoft",
  },
  {
    id: "53",
    name: "Take The Bank",
    imageUrl: "https://agstatic.com/games/betsoft/take_the_bank.jpg",
    provider: "betsoft",
  },
  {
    id: "54",
    name: "Fruitbat Crazy",
    imageUrl: "https://agstatic.com/games/betsoft/fruitbat_crazy.jpg",
    provider: "betsoft",
  },
  {
    id: "55",
    name: "The Tipsy Tourist",
    imageUrl: "https://agstatic.com/games/betsoft/the_tipsy_tourist.jpg",
    provider: "betsoft",
  },
  {
    id: "56",
    name: "Miles Bellhouse and the Gears of Time",
    imageUrl:
      "https://agstatic.com/games/betsoft/miles_bellhouse_and_the_gears_of_time.jpg",
    provider: "betsoft",
  },
  {
    id: "57",
    name: "Sin City Nights",
    imageUrl: "https://agstatic.com/games/betsoft/sin_city_nights.jpg",
    provider: "betsoft",
  },
  {
    id: "58",
    name: "Fruit Zen",
    imageUrl: "https://agstatic.com/games/betsoft/fruit_zen.jpg",
    provider: "betsoft",
  },
  {
    id: "59",
    name: "Stampede",
    imageUrl: "https://agstatic.com/games/betsoft/stampede.jpg",
    provider: "betsoft",
  },
  {
    id: "60",
    name: "Mystic Potion",
    imageUrl: "https://agstatic.com/games/pgsoft/mystic_potion.jpg",
    provider: "pgsoft",
  },
  {
    id: "61",
    name: "Anubis Wrath",
    imageUrl: "https://agstatic.com/games/pgsoft/anubis_wrath.jpg",
    provider: "pgsoft",
  },
  {
    id: "62",
    name: "Pinata Wins",
    imageUrl: "https://agstatic.com/games/pgsoft/pinata_wins.jpg",
    provider: "pgsoft",
  },
  {
    id: "63",
    name: "Gemstones Gold",
    imageUrl: "https://agstatic.com/games/pgsoft/gemstones_gold.jpg",
    provider: "pgsoft",
  },
  {
    id: "64",
    name: "Dragon Hatch 2",
    imageUrl: "https://agstatic.com/games/pgsoft/dragon_hatch_2.jpg",
    provider: "pgsoft",
  },
  {
    id: "65",
    name: "Astrology",
    imageUrl: "https://agstatic.com/games/kaga/astrology.jpg",
    provider: "kaga",
  },
  {
    id: "66",
    name: "Tsar Treasures",
    imageUrl: "https://agstatic.com/games/pgsoft/tsar_treasures.jpg",
    provider: "pgsoft",
  },
  {
    id: "67",
    name: "Fortune Dragon",
    imageUrl: "https://agstatic.com/games/pgsoft/fortune_dragon.jpg",
    provider: "pgsoft",
  },
  {
    id: "68",
    name: "Bear Paw Legend",
    imageUrl: "https://agstatic.com/games/kaga/bear_paw_legend.jpg",
    provider: "kaga",
  },
  {
    id: "69",
    name: "Mafia Mayhem",
    imageUrl: "https://agstatic.com/games/pgsoft/mafia_mayhem.jpg",
    provider: "pgsoft",
  },
  {
    id: "70",
    name: "Werewolf's Hunt",
    imageUrl: "https://agstatic.com/games/pgsoft/werewolfs_hunt.jpg",
    provider: "pgsoft",
  },
  {
    id: "71",
    name: "Forge of Wealth",
    imageUrl: "https://agstatic.com/games/pgsoft/forge_of_wealth.jpg",
    provider: "pgsoft",
  },
  {
    id: "72",
    name: "Ultimate Striker",
    imageUrl: "https://agstatic.com/games/pgsoft/ultimate_striker.jpg",
    provider: "pgsoft",
  },
  {
    id: "73",
    name: "Wild Heist Cashout",
    imageUrl: "https://agstatic.com/games/pgsoft/wild_heist_cashout.jpg",
    provider: "pgsoft",
  },
  {
    id: "74",
    name: "Safari Wilds",
    imageUrl: "https://agstatic.com/games/pgsoft/safari_wilds.jpg",
    provider: "pgsoft",
  },
  {
    id: "75",
    name: "Cruise Royale",
    imageUrl: "https://agstatic.com/games/pgsoft/cruise_royale.jpg",
    provider: "pgsoft",
  },
  {
    id: "76",
    name: "UFO Hunt",
    imageUrl: "https://agstatic.com/games/kaga/ufo_hunt.jpg",
    provider: "kaga",
  },
  {
    id: "77",
    name: "Book of Skull",
    imageUrl: "https://agstatic.com/games/kaga/book_of_skull.jpg",
    provider: "kaga",
  },
  {
    id: "78",
    name: "Rock Parrot",
    imageUrl: "https://agstatic.com/games/kaga/rock_parrot.jpg",
    provider: "kaga",
  },
  {
    id: "79",
    name: "Deep Beast",
    imageUrl: "https://agstatic.com/games/kaga/deep_beast.jpg",
    provider: "kaga",
  },
  {
    id: "80",
    name: "Fly To Universe",
    imageUrl: "https://agstatic.com/games/kaga/fly_to_universe.jpg",
    provider: "kaga",
  },
  {
    id: "81",
    name: "Maleficent Fusion Reels",
    imageUrl: "https://agstatic.com/games/kaga/maleficent_fusion_reels.jpg",
    provider: "kaga",
  },
  {
    id: "82",
    name: "Romani Secret",
    imageUrl: "https://agstatic.com/games/kaga/romani_secret.jpg",
    provider: "kaga",
  },
  {
    id: "83",
    name: "Party Girl Deluxe Lock 2 Spin",
    imageUrl:
      "https://agstatic.com/games/kaga/party_girl_deluxe_lock_2_spin.jpg",
    provider: "kaga",
  },
  {
    id: "84",
    name: "Thunder God",
    imageUrl: "https://agstatic.com/games/kaga/thunder_god.jpg",
    provider: "kaga",
  },
  {
    id: "85",
    name: "Incas Lost Treasure",
    imageUrl: "https://agstatic.com/games/kaga/incas_lost_treasure.jpg",
    provider: "kaga",
  },
  {
    id: "86",
    name: "The Wild Four",
    imageUrl: "https://agstatic.com/games/kaga/the_wild_four.jpg",
    provider: "kaga",
  },
  {
    id: "87",
    name: "Olympus Gods",
    imageUrl: "https://agstatic.com/games/kaga/olympus_gods.jpg",
    provider: "kaga",
  },
  {
    id: "88",
    name: "The Crypto",
    imageUrl: "https://agstatic.com/games/kaga/the_crypto.jpg",
    provider: "kaga",
  },
  {
    id: "89",
    name: "Golden and Silver Horn",
    imageUrl: "https://agstatic.com/games/kaga/golden_and_silver_horn.jpg",
    provider: "kaga",
  },
  {
    id: "90",
    name: "Shrove Tuesday",
    imageUrl: "https://agstatic.com/games/kaga/shrove_tuesday.jpg",
    provider: "kaga",
  },
  {
    id: "91",
    name: "Monster Go Shopping",
    imageUrl: "https://agstatic.com/games/kaga/monster_go_shopping.jpg",
    provider: "kaga",
  },
  {
    id: "92",
    name: "Money God",
    imageUrl: "https://agstatic.com/games/kaga/money_god.jpg",
    provider: "kaga",
  },
  {
    id: "93",
    name: "Carnival Queen",
    imageUrl: "https://agstatic.com/games/kaga/carnival_queen.jpg",
    provider: "kaga",
  },
  {
    id: "94",
    name: "Ninja Raccoon Frenzy",
    imageUrl: "https://agstatic.com/games/pgsoft/ninja_raccoon_frenzy.jpg",
    provider: "pgsoft",
  },
  {
    id: "95",
    name: "Carnival of Venice",
    imageUrl: "https://agstatic.com/games/kaga/carnival_of_venice.jpg",
    provider: "kaga",
  },
  {
    id: "96",
    name: "Octopus Legend",
    imageUrl: "https://agstatic.com/games/kaga/octopus_legend.jpg",
    provider: "kaga",
  },
  {
    id: "97",
    name: "Lucky Golden Dragon Lock 2 Spin",
    imageUrl:
      "https://agstatic.com/games/kaga/lucky_golden_dragon_lock_2_spin.jpg",
    provider: "kaga",
  },
  {
    id: "98",
    name: "Lion On Ridge",
    imageUrl: "https://agstatic.com/games/kaga/lion_on_ridge.jpg",
    provider: "kaga",
  },
  {
    id: "99",
    name: "Neonmal",
    imageUrl: "https://agstatic.com/games/kaga/neonmal.jpg",
    provider: "kaga",
  },
  {
    id: "100",
    name: "Dragon Ingot",
    imageUrl: "https://agstatic.com/games/kaga/dragon_ingot.jpg",
    provider: "kaga",
  },
  {
    id: "101",
    name: "Chinese Phoenix",
    imageUrl: "https://agstatic.com/games/kaga/chinese_phoenix.jpg",
    provider: "kaga",
  },
  {
    id: "102",
    name: "Philosopher's Roulette",
    imageUrl: "https://agstatic.com/games/kaga/philosophers_roulette.jpg",
    provider: "kaga",
  },
  {
    id: "103",
    name: "Chess King",
    imageUrl: "https://agstatic.com/games/kaga/chess_king.jpg",
    provider: "kaga",
  },
  {
    id: "104",
    name: "Bubble Shooter",
    imageUrl: "https://agstatic.com/games/kaga/bubble_shooter.jpg",
    provider: "kaga",
  },
  {
    id: "105",
    name: "Crazy Guava Lock 2 Spin",
    imageUrl: "https://agstatic.com/games/kaga/crazy_guava_lock_2_spin.jpg",
    provider: "kaga",
  },
  {
    id: "106",
    name: "Rocket Race",
    imageUrl: "https://agstatic.com/games/kaga/rocket_race.jpg",
    provider: "kaga",
  },
  {
    id: "107",
    name: "Dragon Boom",
    imageUrl: "https://agstatic.com/games/kaga/dragon_boom.jpg",
    provider: "kaga",
  },
  {
    id: "108",
    name: "Ghost Hunter",
    imageUrl: "https://agstatic.com/games/kaga/ghost_hunter.jpg",
    provider: "kaga",
  },
  {
    id: "109",
    name: "777 Gems Fusion Reels",
    imageUrl: "https://agstatic.com/games/kaga/777_gems_fusion_reels.jpg",
    provider: "kaga",
  },
  {
    id: "110",
    name: "Cash Coming",
    imageUrl: "https://agstatic.com/games/kaga/cash_coming.jpg",
    provider: "kaga",
  },
  {
    id: "111",
    name: "Borderland",
    imageUrl: "https://agstatic.com/games/kaga/borderland.jpg",
    provider: "kaga",
  },
  {
    id: "112",
    name: "Gladiator's Glory",
    imageUrl: "https://agstatic.com/games/pgsoft/gladiators_glory.jpg",
    provider: "pgsoft",
  },
  {
    id: "113",
    name: "Donut City",
    imageUrl: "https://agstatic.com/games/kaga/donut_city.jpg",
    provider: "kaga",
  },
  {
    id: "114",
    name: "7 Sinners",
    imageUrl: "https://agstatic.com/games/kaga/7_sinners.jpg",
    provider: "kaga",
  },
  {
    id: "115",
    name: "Speakeasy 2 Fusion Reels",
    imageUrl: "https://agstatic.com/games/kaga/speakeasy_2_fusion_reels.jpg",
    provider: "kaga",
  },
  {
    id: "116",
    name: "Rudolph",
    imageUrl: "https://agstatic.com/games/kaga/rudolph.jpg",
    provider: "kaga",
  },
  {
    id: "117",
    name: "Romeo and Juliet",
    imageUrl: "https://agstatic.com/games/kaga/romeo_and_juliet.jpg",
    provider: "kaga",
  },
  {
    id: "118",
    name: "Iron Hero",
    imageUrl: "https://agstatic.com/games/kaga/iron_hero.jpg",
    provider: "kaga",
  },
  {
    id: "119",
    name: "Wind Lion God",
    imageUrl: "https://agstatic.com/games/kaga/wind_lion_god.jpg",
    provider: "kaga",
  },
  {
    id: "120",
    name: "Break Through Lock 2 Spin",
    imageUrl: "https://agstatic.com/games/kaga/break_through_lock_2_spin.jpg",
    provider: "kaga",
  },
  {
    id: "121",
    name: "Dragon City",
    imageUrl: "https://agstatic.com/games/kaga/dragon_city.jpg",
    provider: "kaga",
  },
  {
    id: "122",
    name: "Mole Money",
    imageUrl: "https://agstatic.com/games/kaga/mole_money.jpg",
    provider: "kaga",
  },
  {
    id: "123",
    name: "Taiko Master",
    imageUrl: "https://agstatic.com/games/kaga/taiko_master.jpg",
    provider: "kaga",
  },
  {
    id: "124",
    name: "Bang Bang",
    imageUrl: "https://agstatic.com/games/kaga/bang_bang.jpg",
    provider: "kaga",
  },
  {
    id: "125",
    name: "Mania Lotto",
    imageUrl: "https://agstatic.com/games/kaga/mania_lotto.jpg",
    provider: "kaga",
  },
  {
    id: "126",
    name: "Tanuki Tavern",
    imageUrl: "https://agstatic.com/games/kaga/tanuki_tavern.jpg",
    provider: "kaga",
  },
  {
    id: "127",
    name: "Jumping Mr. First",
    imageUrl: "https://agstatic.com/games/kaga/jumping_mr_first.jpg",
    provider: "kaga",
  },
  {
    id: "128",
    name: "Legend of Sword",
    imageUrl: "https://agstatic.com/games/kaga/legend_of_sword.jpg",
    provider: "kaga",
  },
  {
    id: "129",
    name: "Bombing Kraken",
    imageUrl: "https://agstatic.com/games/kaga/bombing_kraken.jpg",
    provider: "kaga",
  },
  {
    id: "130",
    name: "Hot Coin",
    imageUrl: "https://agstatic.com/games/kaga/hot_coin.jpg",
    provider: "kaga",
  },
  {
    id: "131",
    name: "Gypsy Fusion Reels",
    imageUrl: "https://agstatic.com/games/kaga/gypsy.jpg",
    provider: "kaga",
  },
  {
    id: "132",
    name: "Zodiac Hunting",
    imageUrl: "https://agstatic.com/games/kaga/zodiac_hunting.jpg",
    provider: "kaga",
  },
  {
    id: "133",
    name: "Darts Champion",
    imageUrl: "https://agstatic.com/games/kaga/darts_champion.jpg",
    provider: "kaga",
  },
  {
    id: "134",
    name: "Tap Heroes",
    imageUrl: "https://agstatic.com/games/kaga/tap_heroes.jpg",
    provider: "kaga",
  },
  {
    id: "135",
    name: "The Master Cat",
    imageUrl: "https://agstatic.com/games/kaga/the_master_cat.jpg",
    provider: "kaga",
  },
  {
    id: "136",
    name: "Alien Invasion",
    imageUrl: "https://agstatic.com/games/kaga/alien_invasion.jpg",
    provider: "kaga",
  },
  {
    id: "137",
    name: "The Frog Prince",
    imageUrl: "https://agstatic.com/games/kaga/the_frog_prince.jpg",
    provider: "kaga",
  },
  {
    id: "138",
    name: "Blast Man",
    imageUrl: "https://agstatic.com/games/kaga/blast_man.jpg",
    provider: "kaga",
  },
  {
    id: "139",
    name: "Trick or Treat",
    imageUrl: "https://agstatic.com/games/kaga/trick_or_treat.jpg",
    provider: "kaga",
  },
  {
    id: "140",
    name: "Peacock Princess Lock 2 Spin",
    imageUrl:
      "https://agstatic.com/games/kaga/peacock_princess_lock_2_spin.jpg",
    provider: "kaga",
  },
  {
    id: "141",
    name: "Stone Age",
    imageUrl: "https://agstatic.com/games/kaga/stone_age.jpg",
    provider: "kaga",
  },
  {
    id: "142",
    name: "Ice Cream Truck",
    imageUrl: "https://agstatic.com/games/kaga/ice_cream_truck.jpg",
    provider: "kaga",
  },
  {
    id: "143",
    name: "Fantasy War",
    imageUrl: "https://agstatic.com/games/kaga/fantasy_war.jpg",
    provider: "kaga",
  },
  {
    id: "144",
    name: "Dragon Pearl",
    imageUrl: "https://agstatic.com/games/kaga/dragon_pearl.jpg",
    provider: "kaga",
  },
  {
    id: "145",
    name: "Thief",
    imageUrl: "https://agstatic.com/games/kaga/thief.jpg",
    provider: "kaga",
  },
  {
    id: "146",
    name: "La Tomatina",
    imageUrl: "https://agstatic.com/games/kaga/la_tomatina.jpg",
    provider: "kaga",
  },
  {
    id: "147",
    name: "Shark Fight",
    imageUrl: "https://agstatic.com/games/kaga/shark_fight.jpg",
    provider: "kaga",
  },
  {
    id: "148",
    name: "Clean House",
    imageUrl: "https://agstatic.com/games/kaga/clean_house.jpg",
    provider: "kaga",
  },
  {
    id: "149",
    name: "Red Sorghum",
    imageUrl: "https://agstatic.com/games/kaga/red_sorghum.jpg",
    provider: "kaga",
  },
  {
    id: "150",
    name: "Surprise Box",
    imageUrl: "https://agstatic.com/games/kaga/surprise_box.jpg",
    provider: "kaga",
  },
  {
    id: "151",
    name: "Idun's Garden Fusion Reels",
    imageUrl: "https://agstatic.com/games/kaga/iduns_garden_fusion_reels.jpg",
    provider: "kaga",
  },
  {
    id: "152",
    name: "Gokudo Bentou",
    imageUrl: "https://agstatic.com/games/kaga/gokudo_bentou.jpg",
    provider: "kaga",
  },
  {
    id: "153",
    name: "Shenron Hunter",
    imageUrl: "https://agstatic.com/games/kaga/shenron_hunter.jpg",
    provider: "kaga",
  },
  {
    id: "154",
    name: "Golf Master",
    imageUrl: "https://agstatic.com/games/kaga/golf_master.jpg",
    provider: "kaga",
  },
  {
    id: "155",
    name: "Monkey King",
    imageUrl: "https://agstatic.com/games/kaga/monkey_king.jpg",
    provider: "kaga",
  },
  {
    id: "156",
    name: "Crush Pirate Ship",
    imageUrl: "https://agstatic.com/games/kaga/crush_pirate_ship.jpg",
    provider: "kaga",
  },
  {
    id: "157",
    name: "Tibet Plateau",
    imageUrl: "https://agstatic.com/games/kaga/tibet_plateau.jpg",
    provider: "kaga",
  },
  {
    id: "158",
    name: "Flaming Monkey Classic",
    imageUrl: "https://agstatic.com/games/kaga/flaming_monkey_classic.jpg",
    provider: "kaga",
  },
  {
    id: "159",
    name: "Repair Robot",
    imageUrl: "https://agstatic.com/games/kaga/repair_robot.jpg",
    provider: "kaga",
  },
  {
    id: "160",
    name: "Dragon Hunter",
    imageUrl: "https://agstatic.com/games/kaga/dragon_hunter.jpg",
    provider: "kaga",
  },
  {
    id: "161",
    name: "Radiant City",
    imageUrl: "https://agstatic.com/games/kaga/radiant_city.jpg",
    provider: "kaga",
  },
  {
    id: "162",
    name: "Kick Pumpkin",
    imageUrl: "https://agstatic.com/games/kaga/kick_pumpkin.jpg",
    provider: "kaga",
  },
  {
    id: "163",
    name: "Fruity Candy",
    imageUrl: "https://agstatic.com/games/pgsoft/fruity_candy.jpg",
    provider: "pgsoft",
  },
  {
    id: "164",
    name: "Love Game",
    imageUrl: "https://agstatic.com/games/kaga/love_game.jpg",
    provider: "kaga",
  },
  {
    id: "165",
    name: "Nie Xiaoqian",
    imageUrl: "https://agstatic.com/games/kaga/nie_xiaoqian.jpg",
    provider: "kaga",
  },
  {
    id: "166",
    name: "Lilith",
    imageUrl: "https://agstatic.com/games/kaga/lilith.jpg",
    provider: "kaga",
  },
  {
    id: "167",
    name: "Double Happiness",
    imageUrl: "https://agstatic.com/games/kaga/double_happiness.jpg",
    provider: "kaga",
  },
  {
    id: "168",
    name: "Home Run X",
    imageUrl: "https://agstatic.com/games/kaga/home_run_x.jpg",
    provider: "kaga",
  },
  {
    id: "169",
    name: "The Peony Pavilion",
    imageUrl: "https://agstatic.com/games/kaga/the_peony_pavilion.jpg",
    provider: "kaga",
  },
  {
    id: "170",
    name: "PlinkoS",
    imageUrl: "https://agstatic.com/games/kaga/plinkos.jpg",
    provider: "kaga",
  },
  {
    id: "171",
    name: "Poseidon Battle",
    imageUrl: "https://agstatic.com/games/kaga/poseidon_battle.jpg",
    provider: "kaga",
  },
  {
    id: "172",
    name: "Greedy Night",
    imageUrl: "https://agstatic.com/games/kaga/greedy_night.jpg",
    provider: "kaga",
  },
  {
    id: "173",
    name: "Lucky Clover Lady",
    imageUrl: "https://agstatic.com/games/pgsoft/lucky_clover_lady.jpg",
    provider: "pgsoft",
  },
  {
    id: "174",
    name: "Masters of Wulin Lock 2 Spin",
    imageUrl:
      "https://agstatic.com/games/kaga/masters_of_wulin_lock_2_spin.jpg",
    provider: "kaga",
  },
  {
    id: "175",
    name: "Firefighters",
    imageUrl: "https://agstatic.com/games/kaga/firefighters.jpg",
    provider: "kaga",
  },
  {
    id: "176",
    name: "Hanabi",
    imageUrl: "https://agstatic.com/games/kaga/hanabi.jpg",
    provider: "kaga",
  },
  {
    id: "177",
    name: "Acrobats",
    imageUrl: "https://agstatic.com/games/kaga/acrobats.jpg",
    provider: "kaga",
  },
  {
    id: "178",
    name: "Endorser of Thor",
    imageUrl: "https://agstatic.com/games/kaga/endorser_of_thor.jpg",
    provider: "kaga",
  },
  {
    id: "179",
    name: "Cheer Up",
    imageUrl: "https://agstatic.com/games/kaga/cheer_up.jpg",
    provider: "kaga",
  },
  {
    id: "180",
    name: "Calorie Killer",
    imageUrl: "https://agstatic.com/games/kaga/calorie_killer.jpg",
    provider: "kaga",
  },
  {
    id: "181",
    name: "Go Escape",
    imageUrl: "https://agstatic.com/games/kaga/go_escape.jpg",
    provider: "kaga",
  },
  {
    id: "182",
    name: "Wizard of Wild",
    imageUrl: "https://agstatic.com/games/kaga/wizard_of_wild.jpg",
    provider: "kaga",
  },
  {
    id: "183",
    name: "Monster File",
    imageUrl: "https://agstatic.com/games/kaga/monster_file.jpg",
    provider: "kaga",
  },
  {
    id: "184",
    name: "Zhong Yi and Dragon",
    imageUrl: "https://agstatic.com/games/kaga/zhong_yi_and_dragon.jpg",
    provider: "kaga",
  },
  {
    id: "185",
    name: "Fortuna",
    imageUrl: "https://agstatic.com/games/kaga/fortuna.jpg",
    provider: "kaga",
  },
  {
    id: "186",
    name: "Infinity X",
    imageUrl: "https://agstatic.com/games/kaga/infinity_x.jpg",
    provider: "kaga",
  },
  {
    id: "187",
    name: "888 Gold",
    imageUrl: "https://agstatic.com/games/pragmaticplay/888_gold.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "188",
    name: "Lightning Goddess",
    imageUrl: "https://agstatic.com/games/kaga/lightning_goddess.jpg",
    provider: "kaga",
  },
  {
    id: "189",
    name: "Release the Kraken Megaways",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/release_the_kraken_megaways.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "190",
    name: "Vampy Party",
    imageUrl: "https://agstatic.com/games/pragmaticplay/vampy_party.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "191",
    name: "Big Bass Halloween 2",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/big_bass_halloween_2.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "192",
    name: "Boom X",
    imageUrl: "https://agstatic.com/games/kaga/boom_x.jpg",
    provider: "kaga",
  },
  {
    id: "193",
    name: "Super Golf Drive",
    imageUrl: "https://agstatic.com/games/pgsoft/super_golf_drive.jpg",
    provider: "pgsoft",
  },
  {
    id: "194",
    name: "Gangster",
    imageUrl: "https://agstatic.com/games/kaga/gangster.jpg",
    provider: "kaga",
  },
  {
    id: "195",
    name: "Monster Collector",
    imageUrl: "https://agstatic.com/games/kaga/monster_collector.jpg",
    provider: "kaga",
  },
  {
    id: "196",
    name: "Mystery Mice",
    imageUrl: "https://agstatic.com/games/pragmaticplay/mystery_mice.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "197",
    name: "The Little Prince Lock 2 Spin",
    imageUrl:
      "https://agstatic.com/games/kaga/the_little_prince_lock_2_spin.jpg",
    provider: "kaga",
  },
  {
    id: "198",
    name: "Mustang Gold Megaways™",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/mustang_gold_megaways.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "199",
    name: "Big Bass Vegas Double Down Deluxe",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/big_bass_vegas_double_down_deluxe.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "200",
    name: "Congo Cash XL",
    imageUrl: "https://agstatic.com/games/pragmaticplay/congo_cash_xl.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "201",
    name: "Oodles of Noodles",
    imageUrl: "https://agstatic.com/games/pragmaticplay/oodles_of_noodles.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "202",
    name: "Badge Blitz",
    imageUrl: "https://agstatic.com/games/pragmaticplay/badge_blitz.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "203",
    name: "Wisdom of Athena 1000",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/wisdom_of_athena_1000.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "204",
    name: "The Dog House – Muttley Crew",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/the_dog_house_muttley_crew.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "205",
    name: "Fortune Hit'n Roll",
    imageUrl: "https://agstatic.com/games/pragmaticplay/fortune_hit_n_roll.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "206",
    name: "Chests of Cai Shen",
    imageUrl: "https://agstatic.com/games/pragmaticplay/chests_of_cai_shen.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "207",
    name: "Cantonese Fried Noodles",
    imageUrl: "https://agstatic.com/games/kaga/cantonese_fried_noodles.jpg",
    provider: "kaga",
  },
  {
    id: "208",
    name: "Forging Wilds",
    imageUrl: "https://agstatic.com/games/pragmaticplay/forging_wilds.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "209",
    name: "Gem Elevator",
    imageUrl: "https://agstatic.com/games/pragmaticplay/gem_elevator.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "210",
    name: "Foxy Mama",
    imageUrl: "https://agstatic.com/games/kaga/foxy_mama.jpg",
    provider: "kaga",
  },
  {
    id: "211",
    name: "Oriental Monster",
    imageUrl: "https://agstatic.com/games/kaga/oriental_monster.jpg",
    provider: "kaga",
  },
  {
    id: "212",
    name: "Walking Oz",
    imageUrl: "https://agstatic.com/games/kaga/walking_oz.jpg",
    provider: "kaga",
  },
  {
    id: "213",
    name: "Happy Animal Farm",
    imageUrl: "https://agstatic.com/games/kaga/happy_animal_farm.jpg",
    provider: "kaga",
  },
  {
    id: "214",
    name: "Green Party",
    imageUrl: "https://agstatic.com/games/kaga/green_party.jpg",
    provider: "kaga",
  },
  {
    id: "215",
    name: "Dragon Gold 88",
    imageUrl: "https://agstatic.com/games/pragmaticplay/dragon_gold_88.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "216",
    name: "Aztec Treasure Hunt",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/aztec_treasure_hunt.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "217",
    name: "Yeti Quest",
    imageUrl: "https://agstatic.com/games/pragmaticplay/yeti_quest.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "218",
    name: "Hot to Burn – 7 Deadly Free Spins",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/hot_to_burn_7_deadly_free_spins.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "219",
    name: "Sumo Supreme Megaways™",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/sumo_supreme_megaways.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "220",
    name: "Angel vs Sinner",
    imageUrl: "https://agstatic.com/games/pragmaticplay/angel_vs_sinner.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "221",
    name: "Joker's Jewels Hot",
    imageUrl: "https://agstatic.com/games/pragmaticplay/jokers_jewels_hot.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "222",
    name: "Hypersonic X",
    imageUrl: "https://agstatic.com/games/kaga/hypersonic_x.jpg",
    provider: "kaga",
  },
  {
    id: "223",
    name: "Impossible X",
    imageUrl: "https://agstatic.com/games/kaga/impossible_x.jpg",
    provider: "kaga",
  },
  {
    id: "224",
    name: "Dynamite Diggin Doug",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/dynamite_diggin_doug.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "225",
    name: "Animal Land",
    imageUrl: "https://agstatic.com/games/kaga/animal_land.jpg",
    provider: "kaga",
  },
  {
    id: "226",
    name: "Thunder Land",
    imageUrl: "https://agstatic.com/games/kaga/thunder_land.jpg",
    provider: "kaga",
  },
  {
    id: "227",
    name: "Mystical Spirits",
    imageUrl: "https://agstatic.com/games/pgsoft/mystical_spirits.jpg",
    provider: "pgsoft",
  },
  {
    id: "228",
    name: "Samurai Code",
    imageUrl: "https://agstatic.com/games/pragmaticplay/samurai_code.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "229",
    name: "Night on the Nile",
    imageUrl: "https://agstatic.com/games/kaga/night_on_the_nile.jpg",
    provider: "kaga",
  },
  {
    id: "230",
    name: "Sweet Kingdom",
    imageUrl: "https://agstatic.com/games/pragmaticplay/sweet_kingdom.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "231",
    name: "Slap It",
    imageUrl: "https://agstatic.com/games/kaga/slap_it.jpg",
    provider: "kaga",
  },
  {
    id: "232",
    name: "Hand of Midas 2",
    imageUrl: "https://agstatic.com/games/pragmaticplay/hand_of_midas_2.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "233",
    name: "KA Fish Party",
    imageUrl: "https://agstatic.com/games/kaga/ka_fish_party.jpg",
    provider: "kaga",
  },
  {
    id: "234",
    name: "Hot To Burn Multiplier",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/hot_to_burn_multiplier.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "235",
    name: "No Fly Zone",
    imageUrl: "https://agstatic.com/games/kaga/no_fly_zone.jpg",
    provider: "kaga",
  },
  {
    id: "236",
    name: "Buffalo King Untamed Megaways",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/buffalo_king_untamed_megaways.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "237",
    name: "Aces and Eights",
    imageUrl: "https://agstatic.com/games/kaga/aces_and_eights.jpg",
    provider: "kaga",
  },
  {
    id: "238",
    name: "Big Bass Mission Fishin'",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/big_bass_mission_fishin.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "239",
    name: "Red Baron",
    imageUrl: "https://agstatic.com/games/kaga/red_baron.jpg",
    provider: "kaga",
  },
  {
    id: "240",
    name: "Medusa's Stone",
    imageUrl: "https://agstatic.com/games/pragmaticplay/medusas_stone.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "241",
    name: "Cricket Winner",
    imageUrl: "https://agstatic.com/games/kaga/cricket_winner.jpg",
    provider: "kaga",
  },
  {
    id: "242",
    name: "Devilicious",
    imageUrl: "https://agstatic.com/games/pragmaticplay/devilicious.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "243",
    name: "Monster Buster",
    imageUrl: "https://agstatic.com/games/kaga/monster_buster.jpg",
    provider: "kaga",
  },
  {
    id: "244",
    name: "Coffee Wild",
    imageUrl: "https://agstatic.com/games/kaga/coffee_wild.jpg",
    provider: "kaga",
  },
  {
    id: "245",
    name: "Guan Yun Chang",
    imageUrl: "https://agstatic.com/games/kaga/guan_yun_chang.jpg",
    provider: "kaga",
  },
  {
    id: "246",
    name: "Wildies",
    imageUrl: "https://agstatic.com/games/pragmaticplay/wildies.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "247",
    name: "World of Lord Witch King",
    imageUrl: "https://agstatic.com/games/kaga/world_of_lord_witch_king.jpg",
    provider: "kaga",
  },
  {
    id: "248",
    name: "Songkran Splash",
    imageUrl: "https://agstatic.com/games/pgsoft/songkran_splash.jpg",
    provider: "pgsoft",
  },
  {
    id: "249",
    name: "Revenge of Loki Megaways",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/revenge_of_loki_megaways.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "250",
    name: "Bear Run",
    imageUrl: "https://agstatic.com/games/kaga/bear_run.jpg",
    provider: "kaga",
  },
  {
    id: "251",
    name: "Big Bass Bonanza - Reel Action",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/big_bass_bonanza_reel_action.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "252",
    name: "Mahjong Wins 2",
    imageUrl: "https://agstatic.com/games/pragmaticplay/mahjong_wins_2.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "253",
    name: "Crank It Up",
    imageUrl: "https://agstatic.com/games/pragmaticplay/crank_it_up.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "254",
    name: "6 Jokers",
    imageUrl: "https://agstatic.com/games/pragmaticplay/6_jokers.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "255",
    name: "Soul Gems Fusion Reels",
    imageUrl: "https://agstatic.com/games/kaga/soul_gems_fusion_reels.jpg",
    provider: "kaga",
  },
  {
    id: "256",
    name: "Starlight Princess Pachi",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/starlight_princess_pachi.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "257",
    name: "Crazy Gym",
    imageUrl: "https://agstatic.com/games/kaga/crazy_gym.jpg",
    provider: "kaga",
  },
  {
    id: "258",
    name: "Lucky Star",
    imageUrl: "https://agstatic.com/games/kaga/lucky_star.jpg",
    provider: "kaga",
  },
  {
    id: "259",
    name: "Heart of Cleopatra",
    imageUrl: "https://agstatic.com/games/pragmaticplay/heart_of_cleopatra.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "260",
    name: "Joker's Jewels Wild",
    imageUrl: "https://agstatic.com/games/pragmaticplay/jokers_jewels_wild.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "261",
    name: "Heroic Spins",
    imageUrl: "https://agstatic.com/games/pragmaticplay/heroic_spins.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "262",
    name: "Sweet Bonanza 1000",
    imageUrl: "https://agstatic.com/games/pragmaticplay/sweet_bonanza_1000.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "263",
    name: "Taketori Monogatari",
    imageUrl: "https://agstatic.com/games/kaga/taketori_monogatari.jpg",
    provider: "kaga",
  },
  {
    id: "264",
    name: "Fruity Treats",
    imageUrl: "https://agstatic.com/games/pragmaticplay/fruity_treats.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "265",
    name: "Monkey King Rush",
    imageUrl: "https://agstatic.com/games/pragmaticplay/monkey_king_rush.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "266",
    name: "Miss Joker",
    imageUrl: "https://agstatic.com/games/kaga/miss_joker.jpg",
    provider: "kaga",
  },
  {
    id: "267",
    name: "Candy Blitz Bombs",
    imageUrl: "https://agstatic.com/games/pragmaticplay/candy_blitz_bombs.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "268",
    name: "Dwarf & Dragon",
    imageUrl: "https://agstatic.com/games/pragmaticplay/dwarf_and_dragon.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "269",
    name: "Rise of Pyramids",
    imageUrl: "https://agstatic.com/games/pragmaticplay/rise_of_pyramids.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "270",
    name: "God of Gamblers",
    imageUrl: "https://agstatic.com/games/kaga/god_of_gamblers.jpg",
    provider: "kaga",
  },
  {
    id: "271",
    name: "Penguin Family Lock 2 Spin",
    imageUrl: "https://agstatic.com/games/kaga/penguin_family_lock_2_spin.jpg",
    provider: "kaga",
  },
  {
    id: "272",
    name: "Fortune Star Lock 2 Spin",
    imageUrl: "https://agstatic.com/games/kaga/fortune_star_lock_2_spin.jpg",
    provider: "kaga",
  },
  {
    id: "273",
    name: "Ice Lobster",
    imageUrl: "https://agstatic.com/games/pragmaticplay/ice_lobster.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "274",
    name: "Elite Games",
    imageUrl: "https://agstatic.com/games/kaga/elite_games.jpg",
    provider: "kaga",
  },
  {
    id: "275",
    name: "Bakery Bonanza",
    imageUrl: "https://agstatic.com/games/pgsoft/bakery_bonanza.jpg",
    provider: "pgsoft",
  },
  {
    id: "276",
    name: "Aztec Powernudge",
    imageUrl: "https://agstatic.com/games/pragmaticplay/aztec_powernudge.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "277",
    name: "Golden Fish Hunter",
    imageUrl: "https://agstatic.com/games/kaga/golden_fish_hunter.jpg",
    provider: "kaga",
  },
  {
    id: "278",
    name: "Big Burger Load it up with Xtra Cheese",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/big_burger_load_it_up_with_xtra_cheese.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "279",
    name: "Bionic Human",
    imageUrl: "https://agstatic.com/games/kaga/bionic_human.jpg",
    provider: "kaga",
  },
  {
    id: "280",
    name: "Fire Portals",
    imageUrl: "https://agstatic.com/games/pragmaticplay/fire_portals.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "281",
    name: "Spider Goblin",
    imageUrl: "https://agstatic.com/games/kaga/spider_goblin.jpg",
    provider: "kaga",
  },
  {
    id: "282",
    name: "Royale Vegas",
    imageUrl: "https://agstatic.com/games/spadegaming/royale_vegas.jpg",
    provider: "spadegaming",
  },
  {
    id: "283",
    name: "Dragon Wish",
    imageUrl: "https://agstatic.com/games/spadegaming/dragon_wish.jpg",
    provider: "spadegaming",
  },
  {
    id: "284",
    name: "Sugar Rush 1000",
    imageUrl: "https://agstatic.com/games/pragmaticplay/sugar_rush_1000.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "285",
    name: "James Bond",
    imageUrl: "https://agstatic.com/games/kaga/james_bond.jpg",
    provider: "kaga",
  },
  {
    id: "286",
    name: "Galaxy Guardian",
    imageUrl: "https://agstatic.com/games/spadegaming/galaxy_guardian.jpg",
    provider: "spadegaming",
  },
  {
    id: "287",
    name: "Pot of Fortune",
    imageUrl: "https://agstatic.com/games/pragmaticplay/pot_of_fortune.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "288",
    name: "The Dog House – Dog or Alive",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/the_dog_house_dog_or_alive.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "289",
    name: "Piggy Bank Machine",
    imageUrl: "https://agstatic.com/games/kaga/piggy_bank_machine.jpg",
    provider: "kaga",
  },
  {
    id: "290",
    name: "Clash of the Giants",
    imageUrl: "https://agstatic.com/games/spadegaming/clash_of_the_giants.jpg",
    provider: "spadegaming",
  },
  {
    id: "291",
    name: "Beware The Deep Megaways",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/beware_the_deep_megaways.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "292",
    name: "White Nose Cat",
    imageUrl: "https://agstatic.com/games/kaga/white_nose_cat.jpg",
    provider: "kaga",
  },
  {
    id: "293",
    name: "Moji Mania",
    imageUrl: "https://agstatic.com/games/spadegaming/moji_mania.jpg",
    provider: "spadegaming",
  },
  {
    id: "294",
    name: "Big Bass Day at the Races",
    imageUrl:
      "https://agstatic.com/games/pragmaticplay/big_bass_day_at_the_races.jpg",
    provider: "pragmaticplay",
  },
  {
    id: "295",
    name: "Caishen Deluxe Maxways",
    imageUrl:
      "https://agstatic.com/games/spadegaming/caishen_deluxe_maxways.jpg",
    provider: "spadegaming",
  },
  {
    id: "296",
    name: "Scary Clown",
    imageUrl: "https://agstatic.com/games/kaga/scary_clown.jpg",
    provider: "kaga",
  },
  {
    id: "297",
    name: "Winter Star",
    imageUrl: "https://agstatic.com/games/evoplay/winter_star.jpg",
    provider: "evoplay",
  },
  {
    id: "298",
    name: "Temple of Thunder II",
    imageUrl: "https://agstatic.com/games/evoplay/temple_of_thunder_ii.jpg",
    provider: "evoplay",
  },
  {
    id: "299",
    name: "Battle Roosters Bonus Buy",
    imageUrl:
      "https://agstatic.com/games/evoplay/battle_roosters_bonus_buy.jpg",
    provider: "evoplay",
  },
  {
    id: "300",
    name: "Legacy of the Sages",
    imageUrl: "https://agstatic.com/games/evoplay/legacy_of_the_sages.jpg",
    provider: "evoplay",
  },
];

const generateGames = (count) => {
  const games = [];
  for (let i = 0; i < count; i++) {
    const originalIndex = i % mockGames.length;
    games.push({
      ...mockGames[originalIndex],
      id: `${i + 1}`,
      name: `${mockGames[originalIndex].name} ${
        Math.floor(i / mockGames.length) + 1 > 1
          ? `(${Math.floor(i / mockGames.length) + 1})`
          : ""
      }`,
    });
  }
  return games;
};

const GameListing = () => {
  const [games] = useState(generateGames(50)); // Generate 50 games for demo
  const [visibleGames, setVisibleGames] = useState(12); // Show first 12 games initially

  const loadMoreGames = () => {
    setVisibleGames((prev) => Math.min(prev + 12, games.length));
  };

  return (
    <div className="max-w-7xl mx-auto px-4  py-2">
      {/* Header */}
      <BackButton />
      <div className="mb-2 flex gap-5">
        <h5 className="text-[13px] underline  font-bold text-gray-50 ">Game Listing</h5>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {games.slice(0, visibleGames).map((game) => (
          <div
            key={game.id}
            className="group relative overflow-hidden rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
          >
            <div className="h-20 md:h-16 relative overflow-hidden">
              <img
                src={game.imageUrl}
                alt={game.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  const target = e.target;
                  target.src =
                    "https://via.placeholder.com/300x400?text=Game+Image";
                }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-[10px] line-clamp-2">
                    {game.name}
                  </h3>
                  <span className="text-[10px] text-gray-300 mt-1 block">
                    {game.provider}
                  </span>
                </div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400 text-white px-3 cursor-pointer py-1 rounded-full text-[10px] md:text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {visibleGames < games.length && (
        <div className="md:mt-5 mt-6 text-center">
          <button
            onClick={loadMoreGames}
            className="inline-flex rounded-md items-center px-2 md:px-3 md:py-1 py-1 text-base text-[12px] border border-[#CF7500] md:text-xs text-[#F4F4F4]  bg-gradient-to-br from-[#232529] to-[#1A1C20] text-white hover:from-[#F0A500] hover:to-[#CF7500] hover:text-black cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            See More
            <svg
              className="ml-2 h-3 md:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <p className="mt-2 text-[10px] text-[#F4F4F4] dark:text-[#F4F4F4]">
            Showing {visibleGames} of {games.length} games
          </p>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-2 pt-2 border-t border-[#CF7500] dark:border-[#CF7500]">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-[12px] font-bold text-[#F0A500]">{games.length}</p>
            <p className="text-[10px] text-[#F4F4F4] dark:text-[#F4F4F4]">
              Total Games
            </p>
          </div>
          <div className="text-center">
            <p className="text-[12px] font-bold text-[#F0A500]">24+</p>
            <p className="text-[10px] text-[#F4F4F4] dark:text-[#F4F4F4]">
              Providers
            </p>
          </div>
          <div className="text-center">
            <p className="text-[12px]  font-bold text-[#F0A500]">New</p>
            <p className="text-[10px] text-[#F4F4F4] dark:text-[#F4F4F4]">
              Daily Additions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameListing;
