export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  category: 'sakura' | 'golden' | 'luxury' | 'anime' | 'culture';
  regionId: string;
  citiesStay: string;
  citiesCount?: number;
  hotelsCount?: number;
  transfersCount?: number;
  activitiesCount?: number;
  hotelRating?: string;
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
    region: 'Kanto',
    city: 'Tokyo',
    firstBloom: 'March 22',
    fullBloom: 'March 29',
    status: 'Peak Season',
    tempAvg: '15°C',
    image: '/images/pexels-sarmat-batagov-776392502-35139475.jpg'
  },
  {
    region: 'Kansai',
    city: 'Kyoto',
    firstBloom: 'March 24',
    fullBloom: 'March 31',
    status: 'Peak Season',
    tempAvg: '14°C',
    image: '/images/pexels-songhanphoto-10618962.jpg'
  },
  {
    region: 'Chubu',
    city: 'Mt. Fuji & Hakone',
    firstBloom: 'March 28',
    fullBloom: 'April 04',
    status: 'Upcoming',
    tempAvg: '12°C',
    image: '/images/pexels-agustin-villalba-589020055-17258243.jpg'
  },
  {
    region: 'Kansai',
    city: 'Osaka',
    firstBloom: 'March 25',
    fullBloom: 'April 01',
    status: 'Peak Season',
    tempAvg: '15°C',
    image: '/images/pexels-satoshi-1325837.jpg'
  },
  {
    region: 'Hokkaido',
    city: 'Sapporo',
    firstBloom: 'April 26',
    fullBloom: 'May 01',
    status: 'Upcoming',
    tempAvg: '9°C',
    image: '/images/pexels-kuma-jio-2150949207-31416355.jpg'
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'tokyo-golden-route',
    title: 'The Eternal Sakura Golden Route',
    subtitle: 'Tokyo, Mt. Fuji, Kyoto & Osaka Imperial Heritage Journey',
    category: 'sakura',
    regionId: 'kanto',
    citiesStay: 'Tokyo 3N, Mt. Fuji 2N, Kyoto 3N, Osaka 2N',
    citiesCount: 4,
    hotelsCount: 4,
    transfersCount: 5,
    activitiesCount: 12,
    hotelRating: '5★ Luxury Ryokan & Heritage Hotels',
    durationDays: 10,
    durationNights: 9,
    groupSize: 'Max 12 Guests (Small Group)',
    priceUSD: 4200,
    image: '/images/pexels-satoshi-1325837.jpg',
    rating: 4.95,
    reviewsCount: 128,
    badges: ['Best Seller', 'Sakura 2027 Guaranteed', 'Shinkansen Included'],
    highlights: [
      'Private Geisha Tea Ceremony in Gion, Kyoto',
      'First-Class Green Car Nozomi Shinkansen Ticket',
      'Mt. Fuji Panoramic Onsen Ryokan Stay with Kaiseki Dinner',
      'Shibuya Sky Sunset Access & Tsukiji Outer Market Tasting'
    ],
    inclusions: [
      '5★ Luxury Accommodation throughout',
      'Daily Artisanal Breakfast & 5 Chef Kaiseki Dinners',
      'JR Green Car Shinkansen Passes & Private Chauffeured Coach',
      'All UNESCO Shrine Entrance Fees & Licensed English Specialist Guide',
      '24/7 Concierge & Luggage Door-to-Door Transfer Service'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Tokyo Metropolis & Welcome Kaiseki Banquet',
        description: 'Private airport transfer to your luxury hotel. Meet your journey concierge for an evening welcome toast overlooking Tokyo Tower.',
        meals: 'Dinner Included',
        accommodation: 'The Capitol Hotel Tokyu (5★)'
      },
      {
        day: 2,
        title: 'Edo Traditions & Shibuya Sunset Horizon',
        description: 'Morning walking tour of Sensō-ji Temple in Asakusa. Afternoon tea in Harajuku and private sunset deck access at Shibuya Sky.',
        meals: 'Breakfast & Lunch',
        accommodation: 'The Capitol Hotel Tokyu (5★)'
      },
      {
        day: 3,
        title: 'Sacred Mount Fuji & Hakone Onsen Sanctuary',
        description: 'Travel by luxury coach to Lake Kawaguchiko. Ride the Hakone Ropeway over volcanic Owakudani and check into your private hot spring ryokan.',
        meals: 'Breakfast & Traditional Kaiseki Dinner',
        accommodation: 'Gora Kadan Hakone Ryokan (5★ Luxury Onsen)'
      },
      {
        day: 4,
        title: 'Bullet Express to Kyoto Imperial Capital',
        description: 'Board the 320 km/h Nozomi Shinkansen Green Car to Kyoto. Evening twilight walk through lantern-lit Gion machiya alleys.',
        meals: 'Breakfast & Dinner',
        accommodation: 'Sowaka Kyoto Heritage Hotel (5★)'
      },
      {
        day: 5,
        title: 'Arashiyama Bamboo Sanctuary & Fushimi Inari Gates',
        description: 'Early morning quiet path through Arashiyama Bamboo Grove followed by 10,000 vermilion Torii gates of Fushimi Inari.',
        meals: 'Breakfast & Matcha Tea Ceremony',
        accommodation: 'Sowaka Kyoto Heritage Hotel (5★)'
      }
    ]
  },
  {
    id: 'sakura-special-2027',
    title: 'Cherry Blossom Mankai Expedition 2027',
    subtitle: 'Chasing Peak Sakura Bloom from Tokyo Moats to Kyoto Canals',
    category: 'sakura',
    regionId: 'kansai',
    citiesStay: 'Tokyo 4N, Hakone 1N, Kyoto 4N',
    citiesCount: 3,
    hotelsCount: 3,
    transfersCount: 4,
    activitiesCount: 14,
    hotelRating: '5★ Luxury Boutique',
    durationDays: 9,
    durationNights: 8,
    groupSize: 'Max 10 Guests',
    priceUSD: 4850,
    image: '/images/pexels-songhanphoto-10618962.jpg',
    rating: 4.98,
    reviewsCount: 94,
    badges: ['Peak Bloom Forecast', 'Exclusive Access', 'Small Group'],
    highlights: [
      'Private Night Hanami Boat Cruise along Meguro River',
      'Philosopher’s Path Sakura Walk in Kyoto with Master Botanist',
      'Private Tea Ceremony with Senior Maiko in Gion',
      'Exclusive Access to Closed Temple Gardens in Kyoto'
    ],
    inclusions: [
      'Boutique 5★ Heritage Accommodations',
      'Private Chauffeured Transits & Shinkansen Passes',
      'Exclusive Evening Access Tickets & Private Hanami Cruises',
      'Full Board Dining (Includes 2 Michelin-Starred Dinners)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Tokyo Arrival & Night Hanami Illuminations',
        description: 'Arrive in Tokyo. Night stroll under illuminated cherry blossom trees along Chidorigafuchi Moat.',
        meals: 'Welcome Banquet',
        accommodation: 'Palace Hotel Tokyo (5★)'
      },
      {
        day: 2,
        title: 'Shinjuku Gyoen Blossom Varieties',
        description: 'In-depth exploration of 60 cherry blossom species in Shinjuku Gyoen with expert guide.',
        meals: 'Breakfast & Lunch',
        accommodation: 'Palace Hotel Tokyo (5★)'
      }
    ]
  },
  {
    id: 'luxury-ryokan-sanctuary',
    title: 'Zen Sanctuary & Private Hot Spring Retreat',
    subtitle: 'Ultra-Luxury Ryokan Living, Kaiseki Gastronomy & Onsen Wellness',
    category: 'luxury',
    regionId: 'kansai',
    citiesStay: 'Kyoto 3N, Hakone 2N, Nara 2N',
    citiesCount: 3,
    hotelsCount: 3,
    transfersCount: 3,
    activitiesCount: 8,
    hotelRating: '5★ Relais & Châteaux Ryokans',
    durationDays: 7,
    durationNights: 6,
    groupSize: 'Max 8 Guests (Private Ultra-Luxe)',
    priceUSD: 6400,
    image: '/images/matcha-tea-ceremony.png',
    rating: 5.0,
    reviewsCount: 62,
    badges: ['Ultra Luxury', 'Private Rotenburo', 'Kaiseki Dining'],
    highlights: [
      'Private Open-Air Onsen Bath in Every Ryokan Suite',
      'Multi-course Seasonal Kaiseki Dinner by 3-Star Michelin Master',
      'Private Zen Garden Meditation Session with Head Monk',
      'Helicopter Transfer over Mount Fuji & Lake Ashi'
    ],
    inclusions: [
      'Private Villa & Suite Accommodations with Outdoor Onsen',
      'Private Chauffeured Mercedes Benz Transits throughout',
      'All Michelin Gourmet Dining & Rare Vintage Sake Pairings'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kyoto Sanctuary Check-In & Garden Meditation',
        description: 'Check into your private ryokan suite nestled beside the Arashiyama forest.',
        meals: 'Welcome Kaiseki Feast',
        accommodation: 'Hoshinoya Kyoto (5★ Ultra Luxury)'
      }
    ]
  },
  {
    id: 'anime-tech-odyssey',
    title: 'Akihabara Tech & Modern Anime Odyssey',
    subtitle: 'Tokyo Cyberpunk Alleys, Ghibli Museum & Osaka Gaming Culture',
    category: 'anime',
    regionId: 'kanto',
    citiesStay: 'Tokyo 5N, Osaka 3N',
    citiesCount: 2,
    hotelsCount: 2,
    transfersCount: 3,
    activitiesCount: 15,
    hotelRating: '4.5★ Contemporary Tech Hotels',
    durationDays: 8,
    durationNights: 7,
    groupSize: 'Max 14 Guests',
    priceUSD: 3350,
    image: '/images/pexels-sarmat-batagov-776392502-35139475.jpg',
    rating: 4.89,
    reviewsCount: 112,
    badges: ['Pop Culture', 'Ghibli Museum Guaranteed', 'Akihabara VIP'],
    highlights: [
      'Guaranteed Tickets to Ghibli Museum & Ghibli Park',
      'Private Akihabara Retro Gaming & Anime Concierge Shopping',
      'teamLab Planets Immersive Digital Art Installation',
      'Osaka Dotonbori Street Food & Retro Arcade Crawl'
    ],
    inclusions: [
      '4.5★ Modern Central Hotels',
      'All Museum & Exhibition VIP Tickets Included',
      'JR Bullet Train Passes & Suica Metro Cards'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Tokyo Arrival & Shinjuku Neon Night Walk',
        description: 'Explore Golden Gai, Godzilla Head, and VR Shinjuku entertainment center.',
        meals: 'Welcome Dinner',
        accommodation: 'Hotel Gracery Shinjuku (4.5★)'
      }
    ]
  },
  {
    id: 'art-heritage-islands',
    title: 'Seto Inland Sea Art Islands & Miyajima',
    subtitle: 'Naoshima Modern Art, Floating Torii & Hiroshima Peace Park',
    category: 'culture',
    regionId: 'chugoku_shikoku',
    citiesStay: 'Hiroshima 2N, Naoshima 2N, Kyoto 3N',
    citiesCount: 3,
    hotelsCount: 3,
    transfersCount: 4,
    activitiesCount: 11,
    hotelRating: '5★ Art & Heritage Hotels',
    durationDays: 7,
    durationNights: 6,
    groupSize: 'Max 10 Guests',
    priceUSD: 3950,
    image: '/images/pexels-imageriesnap-14055275.jpg',
    rating: 4.93,
    reviewsCount: 76,
    badges: ['Art & Culture', 'Naoshima VIP', 'Miyajima Overnight'],
    highlights: [
      'Overnight Stay at Benesse House Art Museum Hotel on Naoshima',
      'High Tide & Low Tide Guided Walks at Miyajima Floating Torii',
      'Hiroshima Peace Memorial Museum Private Historical Tour',
      'Seto Inland Sea Private Speedboat Island Hopping'
    ],
    inclusions: [
      'Benesse House & Boutique Island Hotel Stays',
      'Private Speedboat & Ferry Passes',
      'All Art Site Entry Passes & Expert Art Curator Guide'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hiroshima Arrival & Miyajima Island Sunset',
        description: 'Take ferry to Miyajima island. Watch sunset behind the famous floating Torii gate.',
        meals: 'Grilled Oyster Dinner',
        accommodation: 'Iwaso Ryokan Miyajima (5★)'
      }
    ]
  }
];
