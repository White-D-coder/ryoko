export interface DestinationGuide {
  id: string;
  name: string;
  kanji: string;
  region: string;
  heroImage: string;
  tagline: string;
  description: string;
  calligraphyTitle: string;
  poemSubtext: string[];
  verticalPillBadges: string[];
  bestSeason: string;
  transitInfo: string;
  landmarks: {
    title: string;
    description: string;
    image: string;
    tag: string;
  }[];
  culinary: {
    title: string;
    description: string;
    image?: string;
  }[];
  travelTips: string[];
  packageIds: string[];
}

export const DESTINATION_GUIDES: Record<string, DestinationGuide> = {
  tokyo: {
    id: 'tokyo',
    name: 'Tokyo Metropolis',
    kanji: '東京',
    region: 'Kanto Region • 関東',
    heroImage: '/images/pexels-sarmat-batagov-776392502-35139475.jpg',
    tagline: 'Futuristic Skyscrapers, Ancient Shinto Shrines, and Neon-Lit Culinary Alleys',
    calligraphyTitle: 'ネオンと伝統が交差する大都会の旅覚。',
    poemSubtext: [
      '"東京の風"と呼ばれる、超高層ビルと古来の神社が響き合う魅惑の都。',
      '現代のネオンを背景に、四季を愛で、歴史を感じる特有の空間。',
      '先端技術と伝統文化が溶け合い、毎日に刺激と安らぎを与える空間です。',
    ],
    verticalPillBadges: [
      '渋谷交差点ネオン・東京',
      '浅草寺風雷神門・東京',
      '明治神宮の森・東京',
    ],
    description: `Tokyo is a hyper-modern metropolis where 400-year-old Edo traditions exist seamlessly alongside soaring skyscrapers, robot cafes, and lantern-lit izakayas. From the quiet serenity of Meiji Jingu shrine's forested pathways to the electric energy of Shibuya Crossing, Tokyo is an essential gateway to Japanese culture.`,
    bestSeason: 'March to May (Cherry Blossom) & October to November (Autumn Foliage)',
    transitInfo: 'Connected to all major Japanese cities via Tokyo & Shinagawa Shinkansen stations. Nozomi Shinkansen to Kyoto takes 2h 15m.',
    landmarks: [
      {
        title: 'Shibuya Scramble Crossing',
        description: 'The world’s busiest pedestrian intersection, pulsing with giant screens and neon lights.',
        image: '/images/pexels-sarmat-batagov-776392502-35139475.jpg',
        tag: 'Modern Icon',
      },
      {
        title: 'Sensō-ji Temple & Asakusa',
        description: 'Tokyo’s oldest Buddhist temple founded in 645 AD, approached via traditional Nakamise shopping street.',
        image: '/images/pexels-musaortac-38410095.jpg',
        tag: 'Edo Heritage',
      },
      {
        title: 'Meiji Jingu Shrine',
        description: 'A tranquil Shinto sanctuary hidden inside a dense 170-acre forest in the heart of Harajuku.',
        image: '/images/pexels-songhanphoto-10618962.jpg',
        tag: 'Sacred Forest',
      },
      {
        title: 'Ginza & Tsukiji Outer Market',
        description: 'High-end luxury shopping avenues paired with fresh morning sushi and street food stalls.',
        image: '/images/pexels-satoshi-1325837.jpg',
        tag: 'Gastronomy & Fashion',
      },
    ],
    culinary: [
      {
        title: 'Edomae Sushi in Ginza',
        description: 'Master chefs slicing wild bluefin tuna and seasonal fish served on warm vinegared rice.',
      },
      {
        title: 'Omoide Yokocho Yakitori',
        description: 'Smoky charcoal-grilled chicken skewers paired with local craft sake in Shinjuku alleys.',
      },
      {
        title: 'Rich Tonkotsu & Shoyu Ramen',
        description: 'Slurping rich bone broth bowls in Golden Gai broth dispensaries.',
      },
      {
        title: 'Harajuku Matcha Parfaits',
        description: 'Artisanal stone-ground green tea soft serve with red bean paste & mochi.',
      },
    ],
    travelTips: [
      'Get a Suica or Pasmo IC card for effortless subway transit across Tokyo.',
      'Visit Sensō-ji early in the morning (before 8 AM) for serene crowds.',
      'Book Shibuya Sky observation deck tickets 4 weeks in advance for sunset.',
    ],
    packageIds: ['tokyo-golden-route', 'anime-tech-odyssey'],
  },

  kyoto: {
    id: 'kyoto',
    name: 'Kyoto Cultural Sanctuary',
    kanji: '京都',
    region: 'Kansai Region • 関西',
    heroImage: '/images/pexels-songhanphoto-10618962.jpg',
    tagline: 'The Cultural Heart of Japan: Wooden Machiya Homes, Geiko Tea Rituals, and Golden Temples',
    calligraphyTitle: '竹林と四季を味わう自然風な旅づくり。',
    poemSubtext: [
      '"竹林の風"と呼ばれる、野山にある木や石を使う自然風な旅を作っています。',
      '都市に住みながら、四季を感じる、風を感じる、森を感じる。',
      '自然によりそって暮らし、ホッとする毎日がおくられる心休まる空間です。',
    ],
    verticalPillBadges: [
      '嵐山竹林の小径・京都',
      '吉野山 桜の庭・奈良',
      'テラスと昔の庭・京都',
    ],
    description: `For over 1,000 years, Kyoto served as the imperial capital of Japan. Home to 17 UNESCO World Heritage sites, thousand-year-old Zen rock gardens, and traditional Gion tea houses where Geiko and Maiko entertain guests, Kyoto is an indispensable journey into Japan's soul.`,
    bestSeason: 'Late March to April (Peak Sakura) & November (Momiji Crimson Autumn)',
    transitInfo: 'Accessible via Kyoto Station on the JR Tokaido Shinkansen line. 2 hours 15 minutes from Tokyo.',
    landmarks: [
      {
        title: 'Fushimi Inari Taisha',
        description: 'Over 10,000 vibrant vermilion torii gates winding up the sacred Mount Inari.',
        image: '/images/pexels-huy-phan-316220-34991523.jpg',
        tag: 'Shinto Sanctum',
      },
      {
        title: 'Arashiyama Bamboo Grove',
        description: 'Towering green bamboo stalks swaying gracefully in the breeze near Togetsukyo Bridge.',
        image: '/images/pexels-songhanphoto-10618962.jpg',
        tag: 'Natural Wonder',
      },
      {
        title: 'Kinkaku-ji (Golden Pavilion)',
        description: 'A Zen temple whose top two floors are completely covered in pure gold leaf, reflecting over Mirror Pond.',
        image: '/images/pexels-musaortac-38410095.jpg',
        tag: 'UNESCO Heritage',
      },
      {
        title: 'Gion Preservation District',
        description: 'Historic wooden machiya townhouses where traditional tea houses and Maiko tea ceremonies flourish.',
        image: '/images/matcha-tea-ceremony.png',
        tag: 'Geiko Tradition',
      },
    ],
    culinary: [
      {
        title: 'Multi-course Kaiseki Dining',
        description: 'Traditional multi-course dinner reflecting micro-seasons with Michelin-starred precision.',
      },
      {
        title: 'Stone-Ground Uji Matcha',
        description: 'Whisked ceremonial matcha served with seasonal wagashi sweets.',
      },
      {
        title: 'Yudofu Simmered Tofu',
        description: 'Silken Kyoto tofu simmered in kombu dashi at Nanzen-ji temple gardens.',
      },
      {
        title: 'Nishiki Market Seafood',
        description: 'Fresh grilled scallops, skewered eel, and Kyoto tsukemono pickles.',
      },
    ],
    travelTips: [
      'Rise early at 6:30 AM to walk Fushimi Inari and Arashiyama without crowds.',
      'Always reserve tea ceremony sessions with licensed tea masters in advance.',
      'Respect Geiko and Maiko in Gion by not blocking their path or taking forced photos.',
    ],
    packageIds: ['tokyo-golden-route', 'luxury-ryokan-sanctuary'],
  },

  fuji: {
    id: 'fuji',
    name: 'Mt. Fuji & Hakone Sanctuary',
    kanji: '富士山・箱根',
    region: 'Kanto & Chubu Region • 富士',
    heroImage: '/images/pexels-agustin-villalba-589020055-17258243.jpg',
    tagline: 'Volcanic Hot Springs, Hakone Ropeway Cable Cars, and Iconic Mount Fuji Panoramas',
    calligraphyTitle: '富士の静寂と温泉の温もりを巡る旅。',
    poemSubtext: [
      '"霊峰富士の息吹"を肌で感じ、湖畔に揺れる静穏の風景。',
      '四季の彩りと硫黄漂う温泉街に包まれ、心が自然と解放される。',
      '古より日本人の心を魅了し続ける、至高の癒やしがここにあります。',
    ],
    verticalPillBadges: [
      '河口湖と富士山・富士',
      '箱根神社水中鳥居・箱根',
      '大涌谷噴煙谷・箱根',
    ],
    description: `Sacred Mount Fuji is Japan's highest peak at 3,776 meters and an enduring cultural symbol. Nestled nearby is Hakone, a world-renowned thermal spring town surrounded by Lake Ashi pirate ships, Hakone Shrine's floating lake torii, and centuries-old onsen ryokans.`,
    bestSeason: 'November to February (Clearest Fuji Views) & April (Sakura at Lake Kawaguchiko)',
    transitInfo: 'Odakyu Romancecar from Shinjuku to Hakone-Yumoto (85m) or JR Shinkansen to Odawara Station (35m).',
    landmarks: [
      {
        title: 'Lake Kawaguchiko & Chureito Pagoda',
        description: 'Iconic five-story pagoda overlooking Mount Fuji surrounded by cherry blossoms.',
        image: '/images/pexels-agustin-villalba-589020055-17258243.jpg',
        tag: 'Fuji Vista',
      },
      {
        title: 'Hakone Shrine Floating Torii Gate',
        description: 'A striking red Shinto torii gate standing gracefully inside the waters of Lake Ashi.',
        image: '/images/pexels-imageriesnap-14055275.jpg',
        tag: 'Water Shrine',
      },
      {
        title: 'Owakudani Volcanic Valley',
        description: 'Active sulfur vents where famous black eggs (Kuro-tamago) boiled in volcanic spring waters are served.',
        image: '/images/pexels-drkesu-12045314.jpg',
        tag: 'Geothermal Valley',
      },
    ],
    culinary: [
      {
        title: 'Volcanic Black Eggs (Kuro-Tamago)',
        description: 'Eggs boiled in Owakudani sulfur hot springs, believed to add 7 years to your life.',
      },
      {
        title: 'Hoto Miso Noodles',
        description: 'Thick flat wheat noodles simmered with fresh pumpkin, mushrooms, and rich broth.',
      },
      {
        title: 'Ryokan Kaiseki Feasts',
        description: 'Seasonal local mountain vegetables, Wagyu beef, and fresh Lake Ashi trout.',
      },
      {
        title: 'Hakone Mountain Tofu',
        description: 'Silken tofu crafted using pure volcanic spring mineral water.',
      },
    ],
    travelTips: [
      'Fuji visibility is highest in early mornings (7 AM to 10 AM) during colder months.',
      'Stay overnight in an authentic ryokan with private outdoor rotenburo hot spring baths.',
      'Use the Hakone Freepass for unlimited cable car, ropeway, and pirate ship rides.',
    ],
    packageIds: ['tokyo-golden-route', 'luxury-ryokan-sanctuary'],
  },

  osaka: {
    id: 'osaka',
    name: 'Osaka Gourmet Capital',
    kanji: '大阪',
    region: 'Kansai Region • 関西',
    heroImage: '/images/pexels-satoshi-1325837.jpg',
    tagline: 'Japan’s Street Food Capital: Dotonbori Neon Alleys, Takoyaki, and Osaka Castle',
    calligraphyTitle: '食い倒れの街と活気あふれる浪花文化。',
    poemSubtext: [
      '"天下の台所"と称され、人々の温かい笑顔と賑わいが溢れる天下の都会。',
      '道頓堀の灯りと香ばしい粉もの文化に身をゆだねる、味覚の旅路。',
      '歴史の城郭と人情味あふれる街並みが、訪れる者を包み込みます。',
    ],
    verticalPillBadges: [
      '道頓堀グリコ看板・大阪',
      '大阪城天守閣・大阪',
      '通天閣新世界・大阪',
    ],
    description: `Known as "Japan's Kitchen" (Tenka no Kuidaore - eat until you drop), Osaka is famous for its outgoing hospitality, vibrant nightlife in Dotonbori, majestic Osaka Castle, and world-class street gastronomy from crisp Kushikatsu to sizzling Takoyaki.`,
    bestSeason: 'March to May & October to December',
    transitInfo: 'JR Tokaido Shinkansen to Shin-Osaka Station. 15 minutes from Kyoto via Shinkansen or 30 minutes via JR Special Rapid train.',
    landmarks: [
      {
        title: 'Dotonbori Neon Canal & Glico Man',
        description: 'Osaka’s famous night entertainment canal filled with giant mechanical crab signs and street food stalls.',
        image: '/images/pexels-satoshi-1325837.jpg',
        tag: 'Nightlife Capital',
      },
      {
        title: 'Osaka Castle & Gardens',
        description: 'A grand 16th-century fortress surrounded by stone moats and over 3,000 cherry blossom trees.',
        image: '/images/pexels-huy-phan-316220-34991523.jpg',
        tag: 'Feudal Fortress',
      },
      {
        title: 'Shinsekai & Tsutenkaku Tower',
        description: 'A nostalgic retro district famous for fried Kushikatsu skewers and lantern-lit alleyways.',
        image: '/images/pexels-sarmat-batagov-776392502-35139475.jpg',
        tag: 'Retro Alley',
      },
    ],
    culinary: [
      {
        title: 'Piping Hot Takoyaki',
        description: 'Crispy batter balls stuffed with octopus, topped with bonito flakes and sweet savory sauce.',
      },
      {
        title: 'Sizzling Okonomiyaki',
        description: 'Osaka-style savory cabbage pancake grilled right at your table with pork and mayo.',
      },
      {
        title: 'Shinsekai Kushikatsu Skewers',
        description: 'Deep-fried meat and vegetable skewers dipped into sweet Worcestershire sauce.',
      },
      {
        title: 'Kuromon Market Wagyu Beef',
        description: 'Melt-in-your-mouth grilled A5 Wagyu beef and sea urchin skewers.',
      },
    ],
    travelTips: [
      'Visit Dotonbori after sunset for the full neon light show.',
      'Take a day trip to neighboring Nara Park to feed the free-roaming sacred deer.',
      'Get an Osaka Amazing Pass for free subway rides and castle entry.',
    ],
    packageIds: ['tokyo-golden-route', 'anime-tech-odyssey'],
  },

  hokkaido: {
    id: 'hokkaido',
    name: 'Hokkaidō Snow Wilderness',
    kanji: '北海道',
    region: 'Hokkaido Region • 北海道',
    heroImage: '/images/pexels-kuma-jio-2150949207-31416355.jpg',
    tagline: 'World-Renowned Niseko Powder Snow, Sapporo Ramen, and Noboribetsu Hot Springs',
    calligraphyTitle: '銀世界と極上の粉雪が織りなす冬景色。',
    poemSubtext: [
      '"北の大地"が育む、澄み渡る空気と一面の白銀の世界。',
      '粉雪が舞うニセコのゲレンデと地熱あふれる温泉郷の贅沢なコントラスト。',
      '壮大な大自然と極上の海鮮料理が、心を満たす至福の旅を紡ぎます。',
    ],
    verticalPillBadges: [
      'ニセコ粉雪ゲレンデ・北海道',
      '登別温泉地獄谷・北海道',
      '小樽運河ガス灯・北海道',
    ],
    description: `Japan's northernmost island is a pristine wilderness of snow-capped mountains, champagne powder ski slopes in Niseko, crystal-clear caldera lakes, and geothermal steam valleys. Hokkaidō is equally famous for its incredible fresh seafood and creamy dairy products.`,
    bestSeason: 'December to March (Winter Snow & Ice Festivals) & July (Furano Lavender Fields)',
    transitInfo: 'Flight to New Chitose Airport (CTS) from Tokyo Haneda (1h 30m) or Hokkaido Shinkansen to Hakodate.',
    landmarks: [
      {
        title: 'Niseko Ski & Powder Resort',
        description: 'World-renowned ski paradise famous for the lightest, fluffiest powder snow on earth.',
        image: '/images/pexels-kuma-jio-2150949207-31416355.jpg',
        tag: 'Powder Paradise',
      },
      {
        title: 'Noboribetsu Jigokudani (Hell Valley)',
        description: 'A dramatic geothermal valley with steaming sulfur vents and natural hot spring rivers.',
        image: '/images/pexels-drkesu-12045314.jpg',
        tag: 'Geothermal Valley',
      },
      {
        title: 'Otaru Canal & Glassware Quarter',
        description: 'Historic gas-lit canal lined with 1920s brick warehouses and artisan music box shops.',
        image: '/images/pexels-songhanphoto-10618962.jpg',
        tag: 'Historic Port',
      },
    ],
    culinary: [
      {
        title: 'Fresh Hokkaido King Crab & Uni Don',
        description: 'Sweet sea urchin and fresh king crab legs served over warm sushi rice.',
      },
      {
        title: 'Sapporo Miso Butter Ramen',
        description: 'Rich miso broth topped with sweet corn, thick chashu pork, and a pat of fresh Hokkaido butter.',
      },
      {
        title: 'Genghis Khan Grilled Mutton',
        description: 'Tender mutton cooked over helmet-shaped iron grills with onions and bean sprouts.',
      },
      {
        title: 'Fresh Farm Soft Serve Ice Cream',
        description: 'Rich, creamy soft serve ice cream made from pure Hokkaido dairy milk.',
      },
    ],
    travelTips: [
      'Visit Sapporo in early February for the famous International Snow Festival.',
      'Soak in natural outdoor snow onsens (Yukimi-furo) after a day on the ski slopes.',
      'Rent a 4WD vehicle if exploring rural Hokkaidō during winter months.',
    ],
    packageIds: ['sakura-special-2027', 'luxury-ryokan-sanctuary'],
  },

  hiroshima: {
    id: 'hiroshima',
    name: 'Hiroshima & Miyajima Island',
    kanji: '広島・宮島',
    region: 'Chugoku Region • 中国',
    heroImage: '/images/pexels-imageriesnap-14055275.jpg',
    tagline: 'The Floating Torii Gate of Itsukushima, Peace Memorial Park, and Hiroshima Okonomiyaki',
    calligraphyTitle: '平和の願いと海に浮かぶ朱色の鳥居。',
    poemSubtext: [
      '"瀬戸内の風"が薫る、静寂の海に浮かぶ神々の島・宮島。',
      '世界平和への深い祈りと歴史の記憶が刻まれた、尊い聖地。',
      '豊かな海の恵みと伝統文化が調和し、深く心に染み渡る旅を約束します。',
    ],
    verticalPillBadges: [
      '厳島神社大鳥居・広島',
      '原爆ドーム平和公園・広島',
      '弥山ロープウェイ・広島',
    ],
    description: `A city of profound resilience and peace, Hiroshima is home to the UNESCO World Heritage Peace Memorial Park and nearby Miyajima Island (Itsukushima), famous for its iconic "floating" vermilion torii gate standing gracefully inside the Seto Inland Sea.`,
    bestSeason: 'March to May & October to November',
    transitInfo: 'JR Sanyo Shinkansen from Shin-Osaka (1h 25m) or Kyoto (1h 40m). Short ferry to Miyajima Island.',
    landmarks: [
      {
        title: 'Itsukushima Floating Torii Gate',
        description: 'One of Japan’s most iconic views—a magnificent Shinto gate rising directly out of the ocean.',
        image: '/images/pexels-imageriesnap-14055275.jpg',
        tag: 'Ocean Torii',
      },
      {
        title: 'Hiroshima Peace Memorial Park & A-Bomb Dome',
        description: 'A deeply moving UNESCO World Heritage site dedicated to global peace and remembrance.',
        image: '/images/pexels-agustin-villalba-589020055-17258243.jpg',
        tag: 'Peace Sanctuary',
      },
      {
        title: 'Mount Misen Cable Car',
        description: 'Panoramas over the island-dotted Seto Inland Sea surrounded by friendly wild deer.',
        image: '/images/pexels-songhanphoto-10618962.jpg',
        tag: 'Sacred Mountain',
      },
    ],
    culinary: [
      {
        title: 'Hiroshima-Style Layered Okonomiyaki',
        description: 'Layered crepe pancake packed with cabbage, yakisoba noodles, fried egg, and savory sauce.',
      },
      {
        title: 'Grilled Seto Inland Sea Oysters',
        description: 'Plump local oysters grilled over charcoal with lemon and ponzu soy sauce.',
      },
      {
        title: 'Momiji Manju Pastries',
        description: 'Maple-leaf-shaped sweet cakes filled with red bean paste, matcha cream, or chocolate.',
      },
      {
        title: 'Hiroshima Lemon Crafts',
        description: 'Refreshing lemon sweets, craft beers, and lemon-infused seasoning salts.',
      },
    ],
    travelTips: [
      'Check tide tables for Miyajima: high tide for the floating torii effect, low tide to walk up to the gate on foot.',
      'Stay overnight on Miyajima island after day-trippers leave for peaceful evening strolls.',
      'Try authentic Hiroshima okonomiyaki cooked on hot iron teppan grills right in front of you.',
    ],
    packageIds: ['art-heritage-islands', 'tokyo-golden-route'],
  },
};
