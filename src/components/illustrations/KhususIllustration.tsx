import React from 'react';

interface IllustrationProps {
  className?: string;
  detailed?: boolean;
}

export const KhususIllustration: React.FC<IllustrationProps> = ({
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
        <linearGradient id="khususBg" x1="0" y1="0" x2="360" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF1F0" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFF9EB" stopOpacity="0.95" />
        </linearGradient>
        <pattern id="khususDots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#D32F2F" fillOpacity="0.1" />
        </pattern>
        <linearGradient id="canopyRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#B71C1C" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#khususBg)" rx="16" />
      <rect width="100%" height="100%" fill="url(#khususDots)" rx="16" />

      {/* Decorative ambient glow */}
      <circle cx={detailed ? 250 : 180} cy={detailed ? 170 : 80} r={detailed ? 140 : 70} fill="#F2B705" fillOpacity="0.14" filter="blur(22px)" />

      {detailed ? (
        // Detailed Version (500x360)
        <g transform="translate(35, 20)">
          {/* Ground Platform */}
          <ellipse cx="225" cy="290" rx="180" ry="20" fill="#4A0E0E" fillOpacity="0.08" />

          {/* Exhibition / Campus Booth Tent (Center) */}
          <g transform="translate(130, 80)">
            {/* Tent Canopy Roof with Red/White Stripes */}
            <path d="M-10 60 L75 0 L160 60 Z" fill="url(#canopyRed)" filter="drop-shadow(0 10px 18px rgba(183,28,28,0.25))" />
            <path d="M15 60 L75 0 L105 60 Z" fill="#FFFFFF" fillOpacity="0.9" />
            <path d="M45 60 L75 0 L75 60 Z" fill="#E53935" />
            {/* Scalloped canopy fringe */}
            {[-10, 15, 45, 75, 105, 135].map((x, i) => (
              <path key={i} d={`M${x} 60 Q${x + 12.5} 70 ${x + 25} 60`} fill={i % 2 === 0 ? '#B71C1C' : '#FFFFFF'} />
            ))}

            {/* Tent Support Poles */}
            <line x1="5" y1="65" x2="5" y2="190" stroke="#71717A" strokeWidth="4" strokeLinecap="round" />
            <line x1="145" y1="65" x2="145" y2="190" stroke="#71717A" strokeWidth="4" strokeLinecap="round" />

            {/* Booth Table */}
            <rect x="15" y="130" width="120" height="60" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.06))" />
            <rect x="15" y="130" width="120" height="15" rx="3" fill="#F2B705" />
            <text x="75" y="165" textAnchor="middle" fill="#B71C1C" fontSize="12" fontWeight="extrabold">STAND ACARA</text>
          </g>

          {/* Chat Bubble 1 (Top Left) */}
          <g transform="translate(45, 40)">
            <path d="M0 15 C0 6.7 6.7 0 15 0 L105 0 C113.3 0 120 6.7 120 15 L120 55 C120 63.3 113.3 70 105 70 L35 70 L15 85 L18 70 L15 70 C6.7 70 0 63.3 0 55 Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" filter="drop-shadow(0 8px 14px rgba(0,0,0,0.08))" />
            <text x="20" y="32" fill="#18181B" fontSize="12" fontWeight="bold">Butuh tolong apa?</text>
            <text x="20" y="52" fill="#D32F2F" fontSize="11" fontWeight="medium">Ceritakan ke admin ✨</text>
          </g>

          {/* Chat Bubble 2 (Bottom Right) */}
          <g transform="translate(320, 160)">
            <path d="M15 0 L105 0 C113.3 0 120 6.7 120 15 L120 50 C120 58.3 113.3 65 105 65 L102 65 L105 78 L85 65 L15 65 C6.7 65 0 58.3 0 50 L0 15 C0 6.7 6.7 0 15 0 Z" fill="#E53935" filter="drop-shadow(0 8px 14px rgba(229,57,53,0.25))" />
            <text x="20" y="28" fill="#FFFFFF" fontSize="11" fontWeight="bold">Bisa jaga stand</text>
            <text x="20" y="46" fill="#F2B705" fontSize="10" fontWeight="bold">& tugas darurat!</text>
          </g>

          {/* Floating Gold Sparkles / Stars */}
          {/* Sparkle 1 */}
          <g transform="translate(200, 30)">
            <path d="M15 0 L18 10 L28 15 L18 20 L15 30 L12 20 L2 15 L12 10 Z" fill="#F2B705" filter="drop-shadow(0 2px 6px rgba(242,183,5,0.6))" />
          </g>
          {/* Sparkle 2 */}
          <g transform="translate(330, 60)">
            <path d="M12 0 L14 8 L22 12 L14 16 L12 24 L10 16 L2 12 L10 8 Z" fill="#F2B705" />
          </g>
          {/* Sparkle 3 */}
          <g transform="translate(90, 160)">
            <path d="M10 0 L12 6 L18 10 L12 14 L10 20 L8 14 L2 10 L8 6 Z" fill="#E53935" />
          </g>
        </g>
      ) : (
        // Compact 160px Card Header Version
        <g transform="translate(20, 10)">
          {/* Ground Shadow */}
          <ellipse cx="170" cy="132" rx="100" ry="8" fill="#4A0E0E" fillOpacity="0.08" />

          {/* Tent (Center) */}
          <g transform="translate(130, 32)">
            <path d="M-5 35 L42 2 L90 35 Z" fill="url(#canopyRed)" filter="drop-shadow(0 4px 8px rgba(183,28,28,0.2))" />
            <path d="M12 35 L42 2 L58 35 Z" fill="#FFFFFF" fillOpacity="0.9" />
            {/* Poles */}
            <line x1="5" y1="36" x2="5" y2="98" stroke="#71717A" strokeWidth="2.5" />
            <line x1="80" y1="36" x2="80" y2="98" stroke="#71717A" strokeWidth="2.5" />
            {/* Table */}
            <rect x="12" y="68" width="62" height="30" rx="3" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
            <rect x="12" y="68" width="62" height="8" rx="2" fill="#F2B705" />
          </g>

          {/* Chat Bubble Left */}
          <g transform="translate(50, 35)">
            <rect x="0" y="0" width="70" height="38" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.06))" />
            <path d="M15 38 L10 46 L25 38 Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
            <rect x="10" y="10" width="50" height="6" rx="2" fill="#E53935" />
            <rect x="10" y="20" width="35" height="5" rx="1.5" fill="#F2B705" />
          </g>

          {/* Chat Bubble Right */}
          <g transform="translate(235, 62)">
            <rect x="0" y="0" width="65" height="36" rx="6" fill="#E53935" filter="drop-shadow(0 4px 8px rgba(229,57,53,0.25))" />
            <path d="M45 36 L52 44 L50 36 Z" fill="#E53935" />
            <rect x="10" y="10" width="45" height="5" rx="1.5" fill="#FFFFFF" />
            <rect x="10" y="19" width="30" height="5" rx="1.5" fill="#F2B705" />
          </g>

          {/* Sparkles */}
          <g transform="translate(170, 10)">
            <path d="M8 0 L10 5 L15 8 L10 11 L8 16 L6 11 L1 8 L6 5 Z" fill="#F2B705" />
          </g>
          <g transform="translate(260, 22)">
            <path d="M6 0 L7 4 L11 6 L7 8 L6 12 L5 8 L1 6 L5 4 Z" fill="#F2B705" />
          </g>
        </g>
      )}
    </svg>
  );
};
