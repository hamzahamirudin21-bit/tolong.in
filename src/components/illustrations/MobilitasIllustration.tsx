import React from 'react';

interface IllustrationProps {
  className?: string;
  detailed?: boolean;
}

export const MobilitasIllustration: React.FC<IllustrationProps> = ({
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
        <linearGradient id="mobilitasBg" x1="0" y1="0" x2="360" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF4E5" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FDECEC" stopOpacity="0.9" />
        </linearGradient>
        <pattern id="mobilitasDots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#D32F2F" fillOpacity="0.1" />
        </pattern>
        <linearGradient id="bikeBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#B71C1C" />
        </linearGradient>
        <linearGradient id="boxCardboard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5D0A9" />
          <stop offset="100%" stopColor="#E0B07E" />
        </linearGradient>
      </defs>

      {/* Background with subtle dots */}
      <rect width="100%" height="100%" fill="var(--surface-2)" rx="16" />
      <rect width="100%" height="100%" fill="url(#mobilitasDots)" rx="16" />

      {/* Decorative ambient glow */}
      <circle cx={detailed ? 260 : 190} cy={detailed ? 170 : 80} r={detailed ? 130 : 65} fill="#E53935" fillOpacity="0.1" filter="blur(22px)" />

      {detailed ? (
        // Detailed Version
        <g transform="translate(40, 25)">
          {/* Dashed route line with waypoint markers */}
          <path
            d="M20 250 C100 240, 160 290, 240 270 C310 250, 360 210, 420 180"
            stroke="#F2B705"
            strokeWidth="4"
            strokeDasharray="8 6"
            strokeLinecap="round"
          />
          <circle cx="420" cy="180" r="9" fill="#E53935" />
          <circle cx="420" cy="180" r="4" fill="#FFFFFF" />

          {/* Road shadow */}
          <ellipse cx="220" cy="275" rx="180" ry="20" fill="#4A0E0E" fillOpacity="0.1" />

          {/* Motorbike & Rider (Center) */}
          <g transform="translate(130, 80)">
            {/* Wheels */}
            {/* Rear Wheel */}
            <circle cx="40" cy="150" r="32" fill="#2B0A0A" />
            <circle cx="40" cy="150" r="22" fill="#E5E7EB" />
            <circle cx="40" cy="150" r="10" fill="#4A0E0E" />
            {/* Front Wheel */}
            <circle cx="160" cy="150" r="32" fill="#2B0A0A" />
            <circle cx="160" cy="150" r="22" fill="#E5E7EB" />
            <circle cx="160" cy="150" r="10" fill="#4A0E0E" />

            {/* Scooter Frame */}
            <path d="M40 150 L85 140 L115 140 L135 110 L155 110 L160 150" stroke="#71717A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            {/* Body Panel */}
            <path d="M60 142 L130 142 L145 95 L110 95 L80 125 Z" fill="url(#bikeBody)" filter="drop-shadow(0 6px 12px rgba(183,28,28,0.25))" />
            {/* Headlight Beam */}
            <polygon points="155,100 230,85 240,125 155,108" fill="#F2B705" fillOpacity="0.25" />
            <ellipse cx="156" cy="104" rx="4" ry="7" fill="#F2B705" />

            {/* Seat */}
            <path d="M60 115 C75 110, 105 110, 115 120" stroke="#18181B" strokeWidth="10" strokeLinecap="round" />

            {/* Student Rider */}
            {/* Body/Jacket */}
            <path d="M92 110 L98 62 L120 72 L115 110 Z" fill="#D32F2F" />
            {/* Arms & Handlebar */}
            <path d="M102 70 L138 88" stroke="#D32F2F" strokeWidth="8" strokeLinecap="round" />
            <circle cx="138" cy="88" r="5" fill="#2B0A0A" />
            {/* Helmet & Visor */}
            <circle cx="106" cy="45" r="19" fill="#E53935" />
            <path d="M112 36 C122 38, 124 50, 116 54" stroke="#F2B705" strokeWidth="5" strokeLinecap="round" />
            <circle cx="106" cy="30" r="3.5" fill="#F2B705" />
          </g>

          {/* Moving Cardboard Boxes (Left-Back for kos relocation) */}
          <g transform="translate(10, 130)">
            {/* Box 1 (Bottom) */}
            <rect x="0" y="50" width="80" height="70" rx="6" fill="url(#boxCardboard)" stroke="#C89762" strokeWidth="2" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.08))" />
            <line x1="0" y1="85" x2="80" y2="85" stroke="#BA8552" strokeWidth="2" strokeDasharray="6 3" />
            <rect x="25" y="65" width="30" height="12" rx="3" fill="#FFFFFF" fillOpacity="0.8" />
            {/* Box 2 (Stacked Top) */}
            <rect x="15" y="0" width="55" height="50" rx="5" fill="url(#boxCardboard)" stroke="#C89762" strokeWidth="2" />
            <line x1="15" y1="25" x2="70" y2="25" stroke="#BA8552" strokeWidth="1.5" strokeDasharray="4 2" />
            {/* Fragile/Up arrows */}
            <path d="M35 15 L40 10 L45 15 M40 10 L40 22" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </g>
      ) : (
        // Compact 160px Card Header Version
        <g transform="translate(20, 10)">
          {/* Dashed route line */}
          <path
            d="M30 115 C90 110, 140 135, 200 120 C260 105, 290 80, 320 65"
            stroke="#F2B705"
            strokeWidth="3"
            strokeDasharray="6 4"
            strokeLinecap="round"
          />
          <circle cx="320" cy="65" r="6" fill="#E53935" />
          <circle cx="320" cy="65" r="2.5" fill="#FFFFFF" />

          {/* Ground Shadow */}
          <ellipse cx="170" cy="132" rx="110" ry="10" fill="#4A0E0E" fillOpacity="0.08" />

          {/* Scooter & Rider */}
          <g transform="translate(110, 25)">
            {/* Wheels */}
            <circle cx="30" cy="95" r="18" fill="#2B0A0A" />
            <circle cx="30" cy="95" r="12" fill="#E5E7EB" />
            <circle cx="105" cy="95" r="18" fill="#2B0A0A" />
            <circle cx="105" cy="95" r="12" fill="#E5E7EB" />

            {/* Frame */}
            <path d="M30 95 L60 88 L80 88 L95 68 L105 95" stroke="#71717A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Body */}
            <path d="M42 90 L88 90 L98 60 L75 60 L55 78 Z" fill="url(#bikeBody)" filter="drop-shadow(0 4px 8px rgba(183,28,28,0.2))" />

            {/* Headlight */}
            <polygon points="100,64 140,54 145,78 100,68" fill="#F2B705" fillOpacity="0.25" />
            <circle cx="101" cy="66" r="3" fill="#F2B705" />

            {/* Rider */}
            <path d="M62 70 L66 40 L80 46 L76 70 Z" fill="#D32F2F" />
            <path d="M68 45 L90 56" stroke="#D32F2F" strokeWidth="5" strokeLinecap="round" />
            <circle cx="70" cy="28" r="12" fill="#E53935" />
            <path d="M74 23 C80 25, 81 32, 76 34" stroke="#F2B705" strokeWidth="3" strokeLinecap="round" />
            <circle cx="70" cy="18" r="2" fill="#F2B705" />
          </g>

          {/* Relocation Box (Left) */}
          <g transform="translate(25, 60)">
            <rect x="0" y="24" width="46" height="42" rx="4" fill="url(#boxCardboard)" stroke="#C89762" strokeWidth="1.5" />
            <line x1="0" y1="45" x2="46" y2="45" stroke="#BA8552" strokeWidth="1.5" strokeDasharray="4 2" />
            <rect x="10" y="0" width="32" height="24" rx="3" fill="url(#boxCardboard)" stroke="#C89762" strokeWidth="1.5" />
          </g>
        </g>
      )}
    </svg>
  );
};
