import React from 'react';

interface JapaneseBuntingBannerProps {
  characters?: { char: string; sub?: string }[];
}

const DEFAULT_CHARACTERS = [
  { char: '一', sub: 'Ichi' },
  { char: '期', sub: 'Go' },
  { char: '一', sub: 'Ichi' },
  { char: '会', sub: 'E' },
  { char: '旅', sub: 'Ryo' },
  { char: '行', sub: 'Kō' },
];

export const JapaneseBuntingBanner: React.FC<JapaneseBuntingBannerProps> = ({
  characters = DEFAULT_CHARACTERS,
}) => {
  return (
    <div className="relative w-full py-8 bg-[#FAF9F5] overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-4 relative flex flex-col items-center justify-center">
        {/* Hanging String Curve SVG Line */}
        <svg
          viewBox="0 0 1000 120"
          className="w-full max-w-4xl h-auto overflow-visible filter drop-shadow-sm"
        >
          {/* Curved String Path */}
          <path
            d="M 20 20 Q 500 80 980 20"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />

          {/* 6 Hanging Bunting Pennant Flags along the String */}
          {characters.map((item, index) => {
            // Calculate positions along quadratic curve B(t) = (1-t)^2 P0 + 2(1-t)t P1 + t^2 P2
            const t = (index + 0.5) / characters.length;
            const x = (1 - t) * (1 - t) * 20 + 2 * (1 - t) * t * 500 + t * t * 980;
            const y = (1 - t) * (1 - t) * 20 + 2 * (1 - t) * t * 80 + t * t * 20;

            const isCrimson = index % 2 === 1;

            return (
              <g
                key={index}
                transform={`translate(${x - 30}, ${y})`}
                className="transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Flag Top Pin Connector */}
                <circle cx="30" cy="0" r="3.5" fill="#0F172A" />

                {/* Flag Shape (Swallowtail / V-shaped bottom matching screenshot) */}
                <polygon
                  points="5,2 55,2 55,70 30,55 5,70"
                  fill={isCrimson ? '#E11D48' : '#FFFDF9'}
                  stroke={isCrimson ? '#BE123C' : '#E2E8F0'}
                  strokeWidth="1.5"
                  className="filter drop-shadow-md"
                />

                {/* Japanese Kanji Character */}
                <text
                  x="30"
                  y="36"
                  textAnchor="middle"
                  fill={isCrimson ? '#FFFFFF' : '#0F172A'}
                  fontSize="22"
                  fontWeight="900"
                  fontFamily="'Noto Serif JP', serif"
                >
                  {item.char}
                </text>

                {/* Romaji Subtitle Text */}
                {item.sub && (
                  <text
                    x="30"
                    y="48"
                    textAnchor="middle"
                    fill={isCrimson ? '#FFE4E6' : '#64748B'}
                    fontSize="8"
                    fontWeight="700"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    letterSpacing="0.05em"
                  >
                    {item.sub.toUpperCase()}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
