import React from 'react';

interface IllustrationProps {
  className?: string;
  detailed?: boolean;
}

export const AkademikIllustration: React.FC<IllustrationProps> = ({
  className = '',
  detailed = false,
}) => {
  return (
    <svg
      viewBox={detailed ? '0 0 500 360' : '0 0 360 160'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="akadBg" x1="0" y1="0" x2="360" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF9EB" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FDECEC" stopOpacity="0.9" />
        </linearGradient>
        <pattern id="akadDots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#E53935" fillOpacity="0.1" />
        </pattern>
        <linearGradient id="bookRed" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B71C1C" />
          <stop offset="100%" stopColor="#E53935" />
        </linearGradient>
        <linearGradient id="togaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2B0A0A" />
          <stop offset="100%" stopColor="#18181B" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#akadBg)" rx="16" />
      <rect width="100%" height="100%" fill="url(#akadDots)" rx="16" />

      {/* Ambient Glow */}
      <circle cx={detailed ? 250 : 180} cy={detailed ? 170 : 80} r={detailed ? 140 : 70} fill="#F2B705" fillOpacity="0.15" filter="blur(22px)" />

      {detailed ? (
        // Detailed Version (500x360)
        <g transform="translate(30, 20)">
          {/* Ground Platform */}
          <ellipse cx="230" cy="290" rx="180" ry="20" fill="#4A0E0E" fillOpacity="0.08" />

          {/* Stack of Books (Left) */}
          <g transform="translate(60, 150)">
            {/* Book 1 (Bottom, Gold) */}
            <rect x="0" y="70" width="140" height="30" rx="5" fill="#F2B705" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.08))" />
            <rect x="15" y="74" width="125" height="22" rx="3" fill="#FFFFFF" />
            <line x1="0" y1="85" x2="140" y2="85" stroke="#C99700" strokeWidth="2" />
            {/* Book 2 (Middle, Red) */}
            <rect x="10" y="40" width="125" height="28" rx="5" fill="url(#bookRed)" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.08))" />
            <rect x="22" y="44" width="113" height="20" rx="3" fill="#FFFFFF" />
            {/* Book 3 (Top, Navy/Dark) */}
            <rect x="20" y="12" width="110" height="26" rx="5" fill="#4A0E0E" />
            <rect x="30" y="16" width="100" height="18" rx="3" fill="#FFF1F0" />
            {/* Bookmark ribbon */}
            <path d="M100 12 L100 55 L106 48 L112 55 L112 12" fill="#F2B705" />
          </g>

          {/* Laptop with Research Chart (Center) */}
          <g transform="translate(195, 110)">
            {/* Screen */}
            <rect x="10" y="10" width="150" height="105" rx="8" fill="#18181B" filter="drop-shadow(0 10px 18px rgba(0,0,0,0.12))" />
            <rect x="18" y="18" width="134" height="88" rx="4" fill="#FFFFFF" />
            {/* Research Chart Lines on Screen */}
            <rect x="28" y="26" width="50" height="8" rx="2" fill="#D32F2F" />
            {/* Bar chart */}
            <rect x="30" y="66" width="12" height="30" rx="2" fill="#E53935" />
            <rect x="46" y="52" width="12" height="44" rx="2" fill="#F2B705" />
            <rect x="62" y="42" width="12" height="54" rx="2" fill="#4A0E0E" />
            {/* Trend line */}
            <path d="M85 85 L105 65 L120 70 L140 45" stroke="#E53935" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="140" cy="45" r="4" fill="#F2B705" />
            {/* Laptop Base/Keyboard */}
            <path d="M-5 115 L175 115 L160 135 L10 135 Z" fill="#D1D5DB" />
            <rect x="65" y="117" width="40" height="6" rx="2" fill="#9CA3AF" />
          </g>

          {/* Graduation Cap / Topi Toga (Top Center, Floating) */}
          <g transform="translate(200, 30)">
            {/* Cap Diamond */}
            <polygon points="65,5 130,30 65,55 0,30" fill="url(#togaGrad)" filter="drop-shadow(0 8px 14px rgba(0,0,0,0.2))" />
            {/* Skull Cap under */}
            <path d="M30 38 C30 58, 100 58, 100 38" fill="#2B0A0A" />
            {/* Tassel Button & String */}
            <circle cx="65" cy="30" r="4.5" fill="#F2B705" />
            <path d="M65 30 C75 35, 95 40, 100 55" stroke="#F2B705" strokeWidth="2.5" fill="none" />
            <rect x="96" y="55" width="8" height="18" rx="2" fill="#F2B705" />
          </g>

          {/* Questionnaire / Survey Sheet (Right) */}
          <g transform="translate(345, 120)">
            <rect x="0" y="20" width="85" height="120" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.08))" />
            <rect x="15" y="32" width="55" height="8" rx="2" fill="#B71C1C" />
            {/* Checkbox circles */}
            {[52, 74, 96, 118].map((y, i) => (
              <g key={i}>
                <circle cx="22" cy={y} r="5" fill={i % 2 === 0 ? '#E53935' : '#FFFFFF'} stroke="#E53935" strokeWidth="1.5" />
                <line x1="34" y1={y} x2="72" y2={y} stroke="#71717A" strokeWidth="2" strokeLinecap="round" />
              </g>
            ))}
          </g>
        </g>
      ) : (
        // Compact 160px Card Header Version
        <g transform="translate(20, 10)">
          {/* Ground Shadow */}
          <ellipse cx="170" cy="132" rx="100" ry="8" fill="#4A0E0E" fillOpacity="0.08" />

          {/* Stack of Books (Left) */}
          <g transform="translate(50, 68)">
            <rect x="0" y="38" width="80" height="18" rx="3" fill="#F2B705" />
            <rect x="5" y="20" width="75" height="17" rx="3" fill="url(#bookRed)" />
            <rect x="10" y="4" width="68" height="15" rx="3" fill="#4A0E0E" />
            <path d="M55 4 L55 28 L59 24 L63 28 L63 4" fill="#F2B705" />
          </g>

          {/* Laptop (Center) */}
          <g transform="translate(130, 48)">
            <rect x="5" y="5" width="90" height="62" rx="5" fill="#18181B" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))" />
            <rect x="10" y="10" width="80" height="52" rx="3" fill="#FFFFFF" />
            {/* Mini bars */}
            <rect x="18" y="42" width="7" height="15" rx="1" fill="#E53935" />
            <rect x="28" y="32" width="7" height="25" rx="1" fill="#F2B705" />
            <rect x="38" y="24" width="7" height="33" rx="1" fill="#4A0E0E" />
            <path d="M52 46 L64 34 L72 38 L82 24" stroke="#E53935" strokeWidth="2" strokeLinecap="round" />
            {/* Laptop Base */}
            <path d="M-3 67 L103 67 L95 78 L5 78 Z" fill="#D1D5DB" />
          </g>

          {/* Topi Toga (Floating above laptop) */}
          <g transform="translate(135, 12)">
            <polygon points="40,3 78,18 40,33 2,18" fill="url(#togaGrad)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.18))" />
            <circle cx="40" cy="18" r="3" fill="#F2B705" />
            <path d="M40 18 C46 21, 56 24, 60 32" stroke="#F2B705" strokeWidth="1.8" fill="none" />
            <rect x="58" y="32" width="4.5" height="10" rx="1" fill="#F2B705" />
          </g>

          {/* Research Questionnaire (Right) */}
          <g transform="translate(230, 52)">
            <rect x="0" y="0" width="54" height="72" rx="5" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
            <rect x="8" y="8" width="38" height="5" rx="1.5" fill="#B71C1C" />
            {[20, 34, 48, 62].map((y, i) => (
              <g key={i}>
                <circle cx="14" cy={y} r="3.5" fill={i % 2 === 0 ? '#E53935' : '#FFFFFF'} stroke="#E53935" strokeWidth="1" />
                <line x1="22" y1={y} x2="46" y2={y} stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            ))}
          </g>
        </g>
      )}
    </svg>
  );
};
