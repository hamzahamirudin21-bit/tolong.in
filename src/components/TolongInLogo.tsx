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
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logo tolong.in"
        className="shrink-0 drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="tiRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E53739" />
            <stop offset="1" stopColor="#B02221" />
          </linearGradient>
          <radialGradient id="tiGold" cx=".3" cy=".25" r=".8">
            <stop offset="0%" stopColor="#FFF4CC" />
            <stop offset=".45" stopColor="#E8B73A" />
            <stop offset="1" stopColor="#A89050" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill="url(#tiRed)" />
        <path
          fill="#F8F9FB"
          stroke="#F8F9FB"
          strokeWidth="1"
          strokeLinejoin="round"
          d="M38 53.9 37.5 55.1 37.7 56.4 50.7 85.5 51.8 86 52.9 86 69.8 80.7 69.2 78.9 68.3 78.2 64.5 78.5 61.9 78 59 76.5 57.1 74.7 55.7 72.3 46.4 51.1 39.1 53.2ZM24.3 37.8 24.3 38.8 27.7 45.9 42.3 41.6 46.5 50.8 70.4 43.5 67.4 36.3 66.4 35.1 65.2 34.7 51.7 38.8 48 30.9 47.2 30.1 46.1 29.8 25.9 35.7 24.8 36.6Z"
        />
        <circle cx="50.5" cy="22.7" r="5.9" fill="url(#tiGold)" />
      </svg>

      {showWordmark && (
        <span
          className={`font-bold tracking-tight text-xl md:text-2xl transition-colors font-heading ${
            wordmarkColor === 'white' ? 'text-white' : 'text-ink'
          }`}
        >
          tolong<span className={wordmarkColor === 'white' ? 'text-[#F2B705]' : 'text-[#D32F2F]'}>.in</span>
        </span>
      )}
    </div>
  );
};
