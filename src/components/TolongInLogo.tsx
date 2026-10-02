import React from 'react';

interface TolongInLogoProps {
  size?: number;
  className?: string;
  showWordmark?: boolean;
  wordmarkColor?: 'dark' | 'white';
}

export const TolongInLogo: React.FC<TolongInLogoProps> = ({
  size = 40,
  className = '',
  showWordmark = false,
  wordmarkColor = 'dark',
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
        aria-label="Logo Tolong.in"
      >
        <defs>
          {/* Main Red Gradient from logo specs: #E53935 to #B71C1C */}
          <linearGradient id="tolongRedGrad" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E53935" />
            <stop offset="100%" stopColor="#B71C1C" />
          </linearGradient>

          {/* Gold Accent Gradient */}
          <linearGradient id="tolongGoldGrad" x1="56" y1="18" x2="68" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFD54F" />
            <stop offset="45%" stopColor="#F2B705" />
            <stop offset="100%" stopColor="#C99700" />
          </linearGradient>

          {/* Subtle inner top glow for the icon container */}
          <linearGradient id="topHighlight" x1="50" y1="0" x2="50" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Squircle Background */}
        <rect
          x="2"
          y="2"
          width="96"
          height="96"
          rx="24"
          fill="url(#tolongRedGrad)"
        />
        {/* Subtle highlight sheen */}
        <rect
          x="2"
          y="2"
          width="96"
          height="45"
          rx="24"
          fill="url(#topHighlight)"
        />

        {/* Iconic White Lowercase 't' */}
        {/*
          Clean geometric letter 't':
          - Vertical stem with curved lower tail
          - Crossbar across the stem
        */}
        <path
          d="M45 28 V40 H34 V51 H45 V68 C45 76.5 49.5 81 58.5 81 H66 V71 H60 C57 71 55.5 69.5 55.5 66.5 V51 H67 V40 H55.5 V28 Z"
          fill="#FFFFFF"
        />

        {/* Distinctive Gold Accent Dot above the 't' stem */}
        <circle
          cx="62"
          cy="26"
          r="8"
          fill="url(#tolongGoldGrad)"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          className="filter drop-shadow-sm"
        />
      </svg>

      {/* Brand Text */}
      {showWordmark && (
        <span
          className={`font-bold tracking-tight text-xl md:text-2xl transition-colors font-heading ${
            wordmarkColor === 'white' ? 'text-white' : 'text-[#1F1F1F]'
          }`}
        >
          Tolong<span className={wordmarkColor === 'white' ? 'text-[#F2B705]' : 'text-[#D32F2F]'}>.in</span>
        </span>
      )}
    </div>
  );
};
