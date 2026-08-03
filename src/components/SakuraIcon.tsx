import React from 'react';

interface SakuraIconProps {
  className?: string;
  size?: number;
  isFilled?: boolean;
}

export const SakuraIcon: React.FC<SakuraIconProps> = ({
  className = '',
  size = 24,
  isFilled = true,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform hover:scale-110 ${className}`}
    >
      {/* 5 Petals with notch tips */}
      <g opacity={isFilled ? '1' : '0.4'}>
        {/* Top Petal */}
        <path
          d="M50 48 C45 28, 30 10, 47 6 C48.5 5.7, 50 8, 50 8 C50 8, 51.5 5.7, 53 6 C70 10, 55 28, 50 48 Z"
          fill="#FFC1CC"
          stroke="#FFA6B9"
          strokeWidth="1.5"
        />
        {/* Top-Right Petal */}
        <path
          d="M50 48 C68 38, 90 32, 91 50 C91.5 51.5, 89 52.5, 89 52.5 C89 52.5, 91.5 53.5, 91 55 C89 73, 68 60, 50 48 Z"
          fill="#FFC1CC"
          stroke="#FFA6B9"
          strokeWidth="1.5"
        />
        {/* Bottom-Right Petal */}
        <path
          d="M50 48 C63 64, 76 84, 61 93 C59.7 93.8, 58 91.8, 58 91.8 C58 91.8, 56.8 94, 55.5 93 C39 85, 47 64, 50 48 Z"
          fill="#FFC1CC"
          stroke="#FFA6B9"
          strokeWidth="1.5"
        />
        {/* Bottom-Left Petal */}
        <path
          d="M50 48 C37 64, 23 85, 8 76 C6.7 75, 8.5 73, 8.5 73 C8.5 73, 6.2 72, 7 70.5 C16 53, 37 57, 50 48 Z"
          fill="#FFC1CC"
          stroke="#FFA6B9"
          strokeWidth="1.5"
        />
        {/* Top-Left Petal */}
        <path
          d="M50 48 C32 38, 10 32, 9 14 C8.8 12.5, 11 11.5, 11 11.5 C11 11.5, 8.8 10.5, 9 9 C26 17, 37 34, 50 48 Z"
          fill="#FFC1CC"
          stroke="#FFA6B9"
          strokeWidth="1.5"
        />
      </g>

      {/* Floating Pollen Dots around flower */}
      <circle cx="15" cy="18" r="3.5" fill="#FFB3C1" />
      <circle cx="88" cy="22" r="3.5" fill="#FFB3C1" />
      <circle cx="85" cy="85" r="3.5" fill="#FFB3C1" />
      <circle cx="18" cy="82" r="3.5" fill="#FFB3C1" />

      {/* Stamen Lines */}
      <line x1="50" y1="50" x2="50" y2="28" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="50" x2="69" y2="37" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="50" x2="62" y2="67" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="50" x2="38" y2="67" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="50" x2="31" y2="37" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />

      {/* Center Ring (Pink) */}
      <circle cx="50" cy="50" r="11" fill="#F472B6" stroke="#E11D48" strokeWidth="1" />

      {/* Yellow Core */}
      <circle cx="50" cy="50" r="6" fill="#FACC15" />
    </svg>
  );
};
