export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  category: 'sakura' | 'golden' | 'luxury' | 'anime' | 'culture';
  regionId: string;
  durationDays: number;
  durationNights: number;
  groupSize: string;
  priceUSD: number;
  image: string;
  rating: number;
  reviewsCount: number;
  badges: string[];
  highlights: string[];
  inclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals: string;
    accommodation: string;
  }[];
}

export interface RegionData {
  id: string;
  name: string;
  kanji: string;
  english: string;
  tagline: string;
  highlights: string[];
  packageCount: number;
  heroImage: string;
  color: string;
}

export interface ShinkansenRoute {
  id: string;
  from: string;
  to: string;
  time: string;
  trainName: string;
}

export interface SakuraBloomForecast {
  region: string;
  city: string;
  firstBloom: string;
  fullBloom: string;
  status: 'Upcoming' | 'Peak Season' | 'Late Bloom';
  tempAvg: string;
  image: string;
}

export const REGIONS: RegionData[] = [
  {
    id: 'hokkaido',
    name: 'Hokkaido',
    kanji: '北海道',
    english: 'Northern Wilderness & Snow',
    tagline: 'Powder snow, volcano hot springs & lavender fields',
    highlights: ['Sapporo Ramen Alley', 'Otaru Canal', 'Noboribetsu Onsen', 'Furano Lavender Fields'],
    packageCount: 6,
    heroImage: '/images/pexels-kuma-jio-2150949207-31416355.jpg',
    color: '#3B82F6'
  },
  {
    id: 'tohoku',
    name: 'Tohoku',
    kanji: '東北',
    english: 'Ancient Traditions & Nature',
    tagline: 'Unspoiled mountains, samurai castles & Nebuta festivals',
    highlights: ['Hirosaki Castle Sakura', 'Ginzan Onsen', 'Matsushima Bay', 'Aomori Nebuta'],
    packageCount: 5,
    heroImage: '/images/pexels-satoshi-1325837.jpg',
    color: '#10B981'
  },
  {
    id: 'kanto',
    name: 'Kanto',
    kanji: '関東',
    english: 'Tokyo Metropolis & Mt. Fuji',
    tagline: 'Futuristic skyscrapers, Mt. Fuji views & Hakone ryokans',
    highlights: ['Shibuya Crossing', 'Sensō-ji Temple', 'Lake Kawaguchiko (Fuji)', 'Hakone Ropeway'],
    packageCount: 14,
    heroImage: '/images/pexels-agustin-villalba-589020055-17258243.jpg',
    color: '#64748B'
  },
  {
    id: 'kansai',
    name: 'Kansai',
    kanji: '関西',
    english: 'Kyoto, Osaka & Historic Heart',
    tagline: 'Geisha alleyways, bamboo groves & Osaka street food culture',
    highlights: ['Fushimi Inari Torii Gates', 'Arashiyama Bamboo Grove', 'Dotonbori Glico Man', 'Nara Deer Park'],
    packageCount: 18,
    heroImage: '/images/pexels-huy-phan-316220-34991523.jpg',
    color: '#F59E0B'
  },
  {
    id: 'chugoku_shikoku',
    name: 'Chugoku & Shikoku',
    kanji: '中国・四国',
    english: 'Art Islands & Peace Heritage',
    tagline: 'Floating Torii of Miyajima, Naoshima contemporary art & Seto inland sea',
    highlights: ['Miyajima Floating Shrine', 'Hiroshima Peace Memorial', 'Naoshima Pumpkin', 'Dogo Onsen'],
    packageCount: 8,
    heroImage: '/images/pexels-imageriesnap-14055275.jpg',
    color: '#8B5CF6'
  },
  {
    id: 'kyushu_okinawa',
    name: 'Kyushu & Okinawa',
    kanji: '九州・沖縄',
    english: 'Volcanoes & Tropical Beaches',
    tagline: 'Active Mt. Aso volcano, Takachiho Gorge & Okinawa turquoise waters',
    highlights: ['Beppu Hell Springs', 'Takachiho Gorge Rowing', 'Yufuin Ryokans', 'Ishigaki Island Coral'],
    packageCount: 7,
    heroImage: '/images/pexels-miyou_-77-696995602-31006026.jpg',
    color: '#EC4899'
  }
];

export const SHINKANSEN_ROUTES: ShinkansenRoute[] = [
  { id: '1', from: 'Tokyo', to: 'Kyoto', time: '2h 15m', trainName: 'Nozomi Shinkansen' },
  { id: '2', from: 'Kyoto', to: 'Osaka', time: '14m', trainName: 'Hikari Shinkansen' },
  { id: '3', from: 'Osaka', to: 'Hiroshima', time: '1h 25m', trainName: 'Mizuho Shinkansen' },
  { id: '4', from: 'Tokyo', to: 'Kanazawa', time: '2h 27m', trainName: 'Kagayaki Shinkansen' },
  { id: '5', from: 'Tokyo', to: 'Hakodate (Hokkaido)', time: '4h 02m', trainName: 'Hayabusa Shinkansen' }
];

export const SAKURA_FORECASTS: SakuraBloomForecast[] = [
  {
    region: 'Kyushu (Fukuoka)',
    city: 'Fukuoka',
    firstBloom: 'March 21',
    fullBloom: 'March 29',
    status: 'Upcoming',
    tempAvg: '17°C / 62°F',
    image: '/images/pexels-willianjusten-15830265.jpg'
  },
  {
    region: 'Kansai (Kyoto & Osaka)',
    city: 'Kyoto / Osaka',
    firstBloom: 'March 24',
    fullBloom: 'April 01',
    status: 'Peak Season',
    tempAvg: '16°C / 60°F',
    image: '/images/pexels-huy-phan-316220-34991523.jpg'
  },
  {
    region: 'Kanto (Tokyo & Fuji)',
    city: 'Tokyo',
    firstBloom: 'March 23',
    fullBloom: 'March 31',
    status: 'Peak Season',
    tempAvg: '18°C / 64°F',
    image: '/images/pexels-agustin-villalba-589020055-17258243.jpg'
  },
  {
    region: 'Tohoku (Sendai & Aomori)',
    city: 'Hirosaki',
    firstBloom: 'April 14',
    fullBloom: 'April 20',
    status: 'Upcoming',
    tempAvg: '13°C / 55°F',
    image: '/images/pexels-satoshi-1325837.jpg'
  },
  {
    region: 'Hokkaido (Sapporo)',
    city: 'Sapporo',
    firstBloom: 'April 26',
    fullBloom: 'May 02',
    status: 'Late Bloom',
    tempAvg: '11°C / 52°F',
    image: '/images/pexels-kuma-jio-2150949207-31416355.jpg'
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'sakura-golden-route-2027',
    title: 'The Eternal Sakura Golden Route',
    subtitle: 'Classic Tokyo, Mt. Fuji & Kyoto immersed in peak cherry blossom season',
    category: 'sakura',
    regionId: 'kansai',
    durationDays: 10,
    durationNights: 9,
    groupSize: 'Max 12 Guests',
    priceUSD: 3499,
    image: '/images/pexels-huy-phan-316220-34991523.jpg',
    rating: 4.98,
    reviewsCount: 142,
    badges: ['Best Seller', 'Sakura Guaranteed', '7-Day JR Pass Included'],
    highlights: [
      'Private Geisha Tea Ceremony in Gion, Kyoto',
      'Bullet train first-class seat to Hakone',
      'Stay in luxury Kaiseki Onsen Ryokan near Mt. Fuji',
      'After-hours illuminations at Sensō-ji Temple'
    ],
    inclusions: ['4★ & 5★ Boutique Hotels', 'Bullet Train Passes', 'Private English Guide', 'Daily Breakfast & 4 Chef Dinners'],
    itinerary: [
      { day: 1, title: 'Arrival in Tokyo Metropolis', description: 'Private chauffeur transfer to Shibuya luxury hotel. Evening welcome cocktail overlooking Shinjuku skyline.', meals: 'Dinner included', accommodation: 'TRUNK Hotel Shibuya' },
      { day: 2, title: 'Ancient Temples & Sakura Parks', description: 'Morning guided walk through Shinjuku Gyoen National Garden under pink blossoms. Afternoon craft sake tasting in Asakusa.', meals: 'Breakfast & Lunch', accommodation: 'TRUNK Hotel Shibuya' },
      { day: 3, title: 'Mt. Fuji & Hakone Hot Springs', description: 'Ride the Romancecar train to Hakone. Cruise Lake Ashi on a private boat with views of Mt. Fuji.', meals: 'Breakfast & Multi-course Kaiseki Dinner', accommodation: 'Gora Kadan Onsen Ryokan' },
      { day: 4, title: 'Bullet Train to Kyoto Cultural Capital', description: 'Board the Shinkansen Green Class to Kyoto. Sunset walk through Fushimi Inari 10,000 Vermilion Torii Gates.', meals: 'Breakfast', accommodation: 'Sowaka Kyoto Boutique Hotel' },
      { day: 5, title: 'Arashiyama Bamboo & Zen Gardens', description: 'Early morning quiet entry to Arashiyama Bamboo Grove followed by Tenryu-ji Zen temple gardens.', meals: 'Breakfast & Traditional Shojin Ryori Lunch', accommodation: 'Sowaka Kyoto Boutique Hotel' },
      { day: 6, title: 'Private Geisha Tea Ceremony & Gion Walk', description: 'Exclusive audience with a Maiko (apprentice Geisha) in an 18th-century tea house.', meals: 'Breakfast & Kaiseki Tea Dinner', accommodation: 'Sowaka Kyoto Boutique Hotel' },
      { day: 7, title: 'Nara Deer Park & Ancient Todai-ji Giant Buddha', description: 'Day excursion to Nara. Interact with friendly sika deer and gaze upon the world\'s largest bronze Buddha.', meals: 'Breakfast', accommodation: 'Sowaka Kyoto Boutique Hotel' },
      { day: 8, title: 'Osaka Street Food Extravaganza', description: 'Transfer to Osaka. Evening food crawl tasting Takoyaki, Okonomiyaki, and Wagyu beef in Dotonbori.', meals: 'Breakfast & Street Food Tasting Tour', accommodation: 'Swissôtel Nankai Osaka' },
      { day: 9, title: 'Himeji Castle & Farewell Ceremony', description: 'Visit the pristine white castle of Himeji surrounded by 1,000 weeping cherry trees.', meals: 'Breakfast & Farewell Omakase Dinner', accommodation: 'Swissôtel Nankai Osaka' },
      { day: 10, title: 'Sayonara Japan', description: 'Private transfer to Kansai International Airport (KIX) or Kansai Shinkansen station.', meals: 'Breakfast included', accommodation: 'N/A' }
    ]
  },
  {
    id: 'first-timers-golden-route',
    title: 'Essential Japan First-Timer Discovery',
    subtitle: 'High-speed Shinkansen journey through Tokyo, Hakone, Kyoto & Osaka',
    category: 'golden',
    regionId: 'kanto',
    durationDays: 7,
    durationNights: 6,
    groupSize: 'Max 14 Guests',
    priceUSD: 2499,
    image: '/images/pexels-agustin-villalba-589020055-17258243.jpg',
    rating: 4.95,
    reviewsCount: 218,
    badges: ['Top Choice', 'JR Pass Included', 'Small Group'],
    highlights: [
      'Tokyo Skytree & Meiji Shrine guided tour',
      'Hakone Cable Car & Lake Ashi Pirate Ship',
      'Bullet train from Mt. Fuji to Kyoto',
      'Kyoto Golden Pavilion (Kinkaku-ji)'
    ],
    inclusions: ['4★ Central Hotels', '7-Day JR Pass', 'Pocket Wi-Fi Device', 'Full-time English Escort'],
    itinerary: [
      { day: 1, title: 'Touchdown Tokyo', description: 'Arrival at Narita or Haneda Airport. Pocket Wi-Fi setup & check-in.', meals: 'Welcome Dinner', accommodation: 'Hotel Gracery Shinjuku' },
      { day: 2, title: 'Tokyo Neon & Zen', description: 'Explore Meiji Jingu Shrine, Harajuku Takeshita Street, and Shibuya Crossing.', meals: 'Breakfast', accommodation: 'Hotel Gracery Shinjuku' },
      { day: 3, title: 'Hakone & Mt. Fuji Wonders', description: 'Travel to Fuji-Hakone-Izu National Park. Open-air hot spring bath experience.', meals: 'Breakfast & Dinner', accommodation: 'Yumoto Fujiya Hotel' },
      { day: 4, title: 'High-Speed Bullet Train to Kyoto', description: 'Ride 280 km/h Shinkansen. Evening walk in Pontocho Alley.', meals: 'Breakfast', accommodation: 'Kyoto Century Hotel' },
      { day: 5, title: 'Kyoto Golden Icons', description: 'Kinkaku-ji (Golden Pavilion), Ryoan-ji Rock Garden & Kiyomizu-dera Temple.', meals: 'Breakfast & Lunch', accommodation: 'Kyoto Century Hotel' },
      { day: 6, title: 'Osaka Gastronomy Night', description: 'Visit Osaka Castle and immerse in the food lovers paradise of Dotonbori.', meals: 'Breakfast & Food Tour', accommodation: 'Cross Hotel Osaka' },
      { day: 7, title: 'Departure', description: 'Direct airport express train transfer to KIX or return to Tokyo via Shinkansen.', meals: 'Breakfast', accommodation: 'N/A' }
    ]
  },
  {
    id: 'luxury-onsen-ryokan-sanctuary',
    title: 'Zen, Onsen & Ryokan Luxury Sanctuary',
    subtitle: 'Indulgent hot springs, Michelin dining & private temple sanctuaries',
    category: 'luxury',
    regionId: 'tohoku',
    durationDays: 8,
    durationNights: 7,
    groupSize: 'Private Ultra-VIP',
    priceUSD: 5899,
    image: '/images/pexels-drkesu-12045314.jpg',
    rating: 5.0,
    reviewsCount: 64,
    badges: ['VIP Experience', 'Private Chauffeur', '5★ Ryokans'],
    highlights: [
      'Private helicopter tour over Mt. Fuji & Hakone Crater',
      'Exclusive stay at 100-year-old wooden Ginzan Onsen Ryokan',
      'Multi-course Michelin 3-Star Kaiseki dining in Kyoto',
      'Private Zazen meditation with head monk'
    ],
    inclusions: ['Luxury Ryokans & 5★ Hotels', 'Private Executive Alphard Van', 'Luggage Forwarding', '24/7 Butler Service'],
    itinerary: [
      { day: 1, title: 'Aman Tokyo Arrival', description: 'Check-in to Aman Tokyo. Private evening champagne tasting on the 33rd floor.', meals: 'Dinner', accommodation: 'Aman Tokyo' },
      { day: 2, title: 'Ginzan Onsen Winter/Autumn Realm', description: 'First class Gran Class Shinkansen to Yamagata and Ginzan Onsen retreat.', meals: 'Breakfast & Kaiseki Dinner', accommodation: 'Notoya Ryokan' },
      { day: 3, title: 'Natural Healing Waters', description: 'Day of relaxation in private outdoor rotenburo hot spring baths.', meals: 'Breakfast, Lunch & Dinner', accommodation: 'Notoya Ryokan' },
      { day: 4, title: 'Hakone Sanctuary', description: 'Transfer to Gora Kadan. Private tea master ceremony in traditional sukiya room.', meals: 'Breakfast & Kaiseki Dinner', accommodation: 'Gora Kadan' },
      { day: 5, title: 'Helicopter Fuji Pass', description: 'Helicopter flight offering panoramic aerial views of Mt. Fuji peak.', meals: 'Breakfast', accommodation: 'Gora Kadan' },
      { day: 6, title: 'Kyoto Four Seasons & Temple Access', description: 'Bullet train to Kyoto. Exclusive after-hours access to Daitoku-ji sub-temple.', meals: 'Breakfast & Michelin Dinner', accommodation: 'Four Seasons Kyoto' },
      { day: 7, title: 'Maiko Performance & Bamboo Sanctuary', description: 'Private performance by Kyoto top geiko with traditional shamisen music.', meals: 'Breakfast & Dinner', accommodation: 'Four Seasons Kyoto' },
      { day: 8, title: 'Departure with Concierge Escort', description: 'Private limousine transfer to Kansai or Tokyo airport.', meals: 'Breakfast', accommodation: 'N/A' }
    ]
  },
  {
    id: 'anime-tech-pop-culture',
    title: 'Otaku Dream: Tech, Gaming & Pop Culture',
    subtitle: 'From Akihabara tech arcades to Ghibli Park & Nintendo World',
    category: 'anime',
    regionId: 'kanto',
    durationDays: 9,
    durationNights: 8,
    groupSize: 'Max 10 Fans',
    priceUSD: 2899,
    image: '/images/pexels-markus-winkler-1430818-19867354.jpg',
    rating: 4.96,
    reviewsCount: 95,
    badges: ['Ghibli Tickets Included', 'Super Nintendo World', 'Anime Escort'],
    highlights: [
      'Ghibli Museum Mitaka & Ghibli Park Nagoya entry',
      'Akihabara electronic district VIP retro arcade hunt',
      'Super Nintendo World VIP Express Pass in USJ Osaka',
      'teamLab Planets immersive digital art museum'
    ],
    inclusions: ['Theme Park Fast Passes', 'Ghibli Tickets', '4★ Themed Hotels', 'JR Pass'],
    itinerary: [
      { day: 1, title: 'Cyberpunk Tokyo', description: 'Arrive in Tokyo. Night walk through Shinjuku Kabukicho and 3D Cat billboard.', meals: 'Dinner', accommodation: 'Hotel Gracery (Godzilla Hotel)' },
      { day: 2, title: 'Akihabara Deep Dive', description: 'Guided tour of Mandarake, Radio Kaikan, and retro gaming shops.', meals: 'Breakfast', accommodation: 'Hotel Gracery' },
      { day: 3, title: 'Ghibli Museum & Odaiba Robots', description: 'Step into Hayao Miyazaki wonderland in Mitaka, visit Unicorn Gundam statue.', meals: 'Breakfast', accommodation: 'Hotel Gracery' },
      { day: 4, title: 'teamLab Planets & Nakano Broadway', description: 'Walk through water & light art, then shop vintage collectible anime figurines.', meals: 'Breakfast', accommodation: 'Hotel Gracery' },
      { day: 5, title: 'Bullet Train to Nagoya Ghibli Park', description: 'Explore Dondoko Forest and Grand Warehouse in Ghibli Park.', meals: 'Breakfast & Lunch', accommodation: 'Nagoya Marriott Associa' },
      { day: 6, title: 'Osaka & Dotonbori Gaming Arcades', description: 'Transfer to Osaka. Visit Nipponbashi Denden Town.', meals: 'Breakfast', accommodation: 'Namba Oriental Hotel' },
      { day: 7, title: 'Super Nintendo World & USJ', description: 'Full day VIP access to Mario Kart Bowser Challenge & Wizarding World.', meals: 'Breakfast', accommodation: 'Namba Oriental Hotel' },
      { day: 8, title: 'Pokemon Center & Farewell Feast', description: 'Visit largest Pokemon Center Megastore & themed cafe.', meals: 'Breakfast & Farewell Dinner', accommodation: 'Namba Oriental Hotel' },
      { day: 9, title: 'Sayonara & Departure', description: 'Airport transfer with custom anime souvenir gift box.', meals: 'Breakfast', accommodation: 'N/A' }
    ]
  },
  {
    id: 'hokkaido-powder-onsen',
    title: 'Hokkaido Snow Powder & Hot Springs',
    subtitle: 'Niseko skiing, Otaru winter canals & Sapporo snow culinary magic',
    category: 'culture',
    regionId: 'hokkaido',
    durationDays: 8,
    durationNights: 7,
    groupSize: 'Max 12 Guests',
    priceUSD: 3199,
    image: '/images/pexels-kuma-jio-2150949207-31416355.jpg',
    rating: 4.92,
    reviewsCount: 78,
    badges: ['Snow & Ski', 'Onsen Included', 'Gourmet Seafood'],
    highlights: [
      'Niseko champagne powder ski/snowboard experience',
      'Noboribetsu Hell Valley sulfur volcanic thermal springs',
      'Sapporo Snow Festival illuminations & King Crab feast',
      'Romantic lamp-lit Otaru Canal stroll'
    ],
    inclusions: ['Ski Lift Passes', 'Luxury Snow Resorts', 'Onsen Entry', 'Fresh Seafood Meals'],
    itinerary: [
      { day: 1, title: 'Sapporo Arrival', description: 'Flight to New Chitose Airport (CTS). Transfer to Sapporo center.', meals: 'Seafood Dinner', accommodation: 'JR Tower Hotel Nikko Sapporo' },
      { day: 2, title: 'Sapporo Landmarks & Beer Museum', description: 'Visit Odori Park, Clock Tower, and Sapporo Beer Garden lamb BBQ.', meals: 'Breakfast & Dinner', accommodation: 'JR Tower Hotel Nikko Sapporo' },
      { day: 3, title: 'Otaru Glassworks & Canals', description: 'Day trip to seaside Otaru. Taste fresh Uni sea urchin & LeTAO cheesecake.', meals: 'Breakfast & Lunch', accommodation: 'JR Tower Hotel Nikko Sapporo' },
      { day: 4, title: 'Transfer to Niseko Resort', description: 'Scenic drive to Niseko powder snow paradise.', meals: 'Breakfast & Dinner', accommodation: 'Aya Niseko Luxury Resort' },
      { day: 5, title: 'Niseko Ski & Onsen Day', description: 'World-famous powder snow slopes and slope-side hot spring relaxation.', meals: 'Breakfast', accommodation: 'Aya Niseko Luxury Resort' },
      { day: 6, title: 'Noboribetsu Jigokudani (Hell Valley)', description: 'Explore steaming volcanic vents and stay at traditional thermal ryokan.', meals: 'Breakfast & Kaiseki Dinner', accommodation: 'Dai-ichi Takimotokan' },
      { day: 7, title: 'Lake Toya & Mount Usu Volcano', description: 'Ropeway ride up Mt. Usu with crater lake panoramas.', meals: 'Breakfast', accommodation: 'Dai-ichi Takimotokan' },
      { day: 8, title: 'Departure from Sapporo', description: 'Chitose airport transfer.', meals: 'Breakfast', accommodation: 'N/A' }
    ]
  },
  {
    id: 'art-islands-miyajima-heritage',
    title: 'Naoshima Art Islands & Sacred Miyajima',
    subtitle: 'Seto Inland Sea contemporary art, Hiroshima peace & floating Torii',
    category: 'culture',
    regionId: 'chugoku_shikoku',
    durationDays: 7,
    durationNights: 6,
    groupSize: 'Max 10 Guests',
    priceUSD: 2999,
    image: '/images/pexels-imageriesnap-14055275.jpg',
    rating: 4.97,
    reviewsCount: 52,
    badges: ['Art & Heritage', 'Ferry Included', 'Ryokan Night'],
    highlights: [
      'Naoshima & Teshima island museums (Chichu Art Museum)',
      'Overnight stay on sacred Miyajima island with floating Torii views',
      'Hiroshima Peace Memorial Park & Museum guided reflection',
      'Kurashiki Bikan historical canal quarter'
    ],
    inclusions: ['Ferry & Train Passes', 'Museum Tickets', 'Boutique Stays', 'Local Art Guide'],
    itinerary: [
      { day: 1, title: 'Arrival in Okayama / Kurashiki', description: 'Bullet train to Okayama. Check in near historic canal quarter.', meals: 'Dinner', accommodation: 'Kurashiki Kokusai Hotel' },
      { day: 2, title: 'Naoshima Island Art Expedition', description: 'Ferry to Naoshima. See Yayoi Kusama Yellow Pumpkin & Tadao Ando architecture.', meals: 'Breakfast & Lunch', accommodation: 'Benesse House Naoshima' },
      { day: 3, title: 'Teshima Art Museum & Inland Sea', description: 'Discover Teshima Art Museum drop of water structure overlooking sea.', meals: 'Breakfast', accommodation: 'Benesse House Naoshima' },
      { day: 4, title: 'Hiroshima Peace & Reflection', description: 'Bullet train to Hiroshima. Visit Peace Dome & Museum with local historian.', meals: 'Breakfast', accommodation: 'Sheraton Grand Hiroshima' },
      { day: 5, title: 'Sacred Island of Miyajima', description: 'Ferry to Miyajima. Watch floating Torii gate at high tide and sunset.', meals: 'Breakfast & Oyster Dinner', accommodation: 'Iwaso Ryokan Miyajima' },
      { day: 6, title: 'Mount Misen Cable Car & Wild Monkeys', description: 'Ascend Mt. Misen for panoramic 360° views across Seto Inland Sea islands.', meals: 'Breakfast', accommodation: 'Iwaso Ryokan Miyajima' },
      { day: 7, title: 'Sayonara Setouchi', description: 'Return ferry to Hiroshima Shinkansen station.', meals: 'Breakfast', accommodation: 'N/A' }
    ]
  }
];

export const TRUST_BADGES = [
  {
    icon: 'ShieldCheck',
    title: 'Official JR Pass Partner',
    desc: 'Authorized global distributor for Japan Railways bullet train passes & Green Class bookings.'
  },
  {
    icon: 'Headphones',
    title: '24/7 English Tokyo Support',
    desc: 'Dedicated local concierge team in Tokyo & Kyoto on WhatsApp for real-time trip assistance.'
  },
  {
    icon: 'Sparkles',
    title: '100% Tailor-Made Flex',
    desc: 'Customize any itinerary with private tea ceremonies, ryokan upgrades, or extra days.'
  },
  {
    icon: 'Award',
    title: 'Sakura Guarantee 2027',
    desc: 'Dynamic blooming tracking and flexible itinerary adjustments during peak cherry blossom weeks.'
  }
];
