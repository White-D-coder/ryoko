import React from 'react';

interface GalleryCard {
  id: string;
  tag: string;
  kanjiTag: string;
  title: string;
  japaneseDesc: string;
  englishDesc: string;
  image: string;
  offsetClass: string;
  delayClass: string;
}

const GALLERY_CARDS: GalleryCard[] = [
  {
    id: 'g1',
    tag: '嵐山 竹林の路 • 京都',
    kanjiTag: '嵐山竹林の小径・京都',
    title: 'Arashiyama Bamboo Grove Path',
    japaneseDesc: '階段アプローチになっている高低差を活かした、ダイナミックな竹林と桜の静寂が広がる空間です。',
    englishDesc: 'A serene approach through towering emerald bamboo stalks and weeping cherry blossoms.',
    image: '/images/pexels-novalkho-34190167.jpg',
    offsetClass: 'mt-0',
    delayClass: 'delay-100',
  },
  {
    id: 'g2',
    tag: '吉野山 桜の宿 • 奈良',
    kanjiTag: '吉野山 桜の庭・奈良',
    title: 'Yoshino Mountain Ryokan Sanctuary',
    japaneseDesc: '世代が進めど誰もがいいなって思えるような景色。そんな伝統的な数寄屋造りの庭を目指しました。',
    englishDesc: 'Centuries-old wooden Sukiya architecture nestled amidst 30,000 mountain cherry trees.',
    image: '/images/pexels-songhanphoto-10618962.jpg',
    offsetClass: 'mt-10 sm:mt-20',
    delayClass: 'delay-300',
  },
  {
    id: 'g3',
    tag: '銀閣寺 苔庵の庭 • 京都',
    kanjiTag: 'テラスと苔の庭・京都',
    title: 'Ginkaku-ji Moss & Tea House',
    japaneseDesc: 'このお庭は道からも中の様子が伺い知れるオープンな庭となっており、四季の花々とお茶を愉しめます。',
    englishDesc: 'Tranquil Japanese rock and moss garden overlooking open-air tea ceremony pavilions.',
    image: '/images/pexels-agustin-villalba-589020055-17258243.jpg',
    offsetClass: 'mt-0 sm:mt-4',
    delayClass: 'delay-500',
  },
];

export const JapaneseEditorialGallery: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF9F5] relative overflow-hidden border-slate-200/50">
      {/* Background Sumi-e Bamboo Ink Artwork */}
      <div className="absolute right-0 top-0 w-80 sm:w-96 md:w-[480px] h-full opacity-25 pointer-events-none select-none z-0">
        <img
          src="/images/bamboo-ink-art.png"
          alt="Japanese Bamboo Ink Artwork"
          className="w-full h-auto object-contain object-top"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Japanese Calligraphy Header Section (Bottom-to-Top Initial Load Animation) */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-kanji text-3xl sm:text-5xl font-black text-[#0F172A] tracking-wider mb-6 leading-tight">
            竹林と四季を味わう自然風な旅づくり。
          </h2>

          <div className="space-y-2 text-slate-600 font-kanji text-xs sm:text-sm leading-relaxed max-w-xl mx-auto opacity-90">
            <p>"竹林の風"と呼ばれる、野山にある木や石を使う自然風な旅を作っています。</p>
            <p>都市に住みながら、四季を感じる、風を感じる、森を感じる。</p>
            <p>自然によりそって暮らし、ホッとする毎日がおくられる心休まる空間です。</p>
          </div>
        </div>

        {/* Asymmetric Staggered 3-Column Cards Grid (Matching User Screenshot Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start">
          {GALLERY_CARDS.map((card) => (
            <div
              key={card.id}
              className={`flex flex-col space-y-4 animate-fade-in-up ${card.delayClass} ${card.offsetClass}`}
            >
              {/* Card Photography with Overlaid Vertical White Paper Tag */}
              <div className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 group border border-slate-200/80 rounded-none bg-white">
                <div className="h-[380px] sm:h-[430px] w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>

                {/* Overlaid Vertical White Paper Tag Label (Tatechūgaki Style) */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-6 shadow-2xl border border-slate-200/80 pointer-events-none rounded-none">
                  <span
                    style={{ writingMode: 'vertical-rl' }}
                    className="font-kanji font-black text-xs sm:text-sm text-[#0F172A] tracking-[0.25em] select-none block"
                  >
                    {card.kanjiTag}
                  </span>
                </div>
              </div>

              {/* Japanese Description Paragraph Below Card */}
              <div className="space-y-1.5 pt-1 px-1">
                <h4 className="font-outfit font-bold text-sm text-[#0F172A]">
                  {card.title}
                </h4>
                <p className="text-slate-600 font-kanji text-xs leading-relaxed">
                  {card.japaneseDesc}
                </p>
                <p className="text-slate-500 font-jakarta text-[11px] leading-relaxed font-light">
                  {card.englishDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
