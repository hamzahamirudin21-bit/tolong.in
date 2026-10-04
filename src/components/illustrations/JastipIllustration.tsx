import React from 'react';

interface IllustrationProps {
  className?: string;
  detailed?: boolean;
}

export const JastipIllustration: React.FC<IllustrationProps> = ({
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
        <linearGradient id="jastipBg" x1="0" y1="0" x2="360" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDECEC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFF1F0" stopOpacity="0.95" />
        </linearGradient>
        <pattern id="jastipDots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#E53935" fillOpacity="0.12" />
        </pattern>
        <linearGradient id="bagGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#B71C1C" />
        </linearGradient>
        <linearGradient id="boxGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5F5F5" />
        </linearGradient>
      </defs>

      {/* Background with subtle dots */}
      <rect width="100%" height="100%" fill="var(--surface-2)" rx="16" />
      <rect width="100%" height="100%" fill="url(#jastipDots)" rx="16" />

      {/* Decorative ambient glow */}
      <circle cx={detailed ? 250 : 180} cy={detailed ? 180 : 80} r={detailed ? 130 : 65} fill="#F2B705" fillOpacity="0.14" filter="blur(20px)" />

      {/* Main Composition */}
      {detailed ? (
        // Detailed Version for large single service view
        <g transform="translate(40, 20)">
          {/* Shadow platform */}
          <ellipse cx="210" cy="290" rx="170" ry="22" fill="#4A0E0E" fillOpacity="0.08" />

          {/* Shopping Bag (Left-Center) */}
          <g transform="translate(100, 70)">
            {/* Bag Handle */}
            <path d="M45 40 C45 10, 85 10, 85 40" stroke="#F2B705" strokeWidth="7" strokeLinecap="round" fill="none" />
            {/* Bag Body */}
            <path d="M15 40 L115 40 L125 180 L5 180 Z" fill="url(#bagGrad)" filter="drop-shadow(0 12px 16px rgba(183,28,28,0.22))" />
            <path d="M25 50 L105 50 L113 170 L17 170 Z" fill="#D32F2F" fillOpacity="0.6" />
            {/* Logo Heart/Hand badge on bag */}
            <circle cx="65" cy="110" r="22" fill="#FFFFFF" fillOpacity="0.95" />
            <path d="M65 102 C61 97, 52 101, 52 108 C52 116, 65 123, 65 123 C65 123, 78 116, 78 108 C78 101, 69 97, 65 102 Z" fill="#E53935" />
            <circle cx="65" cy="100" r="3" fill="#F2B705" />
          </g>

          {/* Takeaway Food Box (Right-Front) */}
          <g transform="translate(230, 150)">
            <rect x="0" y="30" width="130" height="90" rx="14" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" filter="drop-shadow(0 8px 14px rgba(0,0,0,0.08))" />
            {/* Box Lid */}
            <path d="M-8 30 L65 5 L138 30 Z" fill="#FDECEC" stroke="#E53935" strokeWidth="2" />
            <line x1="65" y1="5" x2="65" y2="120" stroke="#E53935" strokeWidth="2" strokeDasharray="4 3" />
            {/* Warm Food Steam */}
            <path d="M40 0 C43 -12, 38 -20, 42 -30" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.6" />
            <path d="M65 -5 C68 -16, 62 -25, 67 -35" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />
            <path d="M90 0 C93 -12, 87 -20, 91 -30" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.6" />
            <rect x="25" y="60" width="80" height="24" rx="6" fill="#F2B705" fillOpacity="0.25" />
            <text x="65" y="76" textAnchor="middle" fill="#B71C1C" fontSize="11" fontWeight="bold">DIMSUM FRESH</text>
          </g>

          {/* Iced Drink Cup (Left-Front) */}
          <g transform="translate(50, 160)">
            {/* Straw */}
            <line x1="45" y1="-25" x2="35" y2="35" stroke="#F2B705" strokeWidth="6" strokeLinecap="round" />
            {/* Cup Body */}
            <path d="M10 25 L60 25 L52 110 L18 110 Z" fill="#FFFFFF" fillOpacity="0.9" stroke="#E5E7EB" strokeWidth="2" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.06))" />
            {/* Drink Liquid */}
            <path d="M14 45 L56 45 L50 106 L20 106 Z" fill="#FDECEC" />
            {/* Cup Lid Dome */}
            <path d="M8 25 C8 10, 62 10, 62 25 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
            <circle cx="35" cy="72" r="10" fill="#E53935" fillOpacity="0.2" />
          </g>

          {/* Floating Location Pin (Top Right) */}
          <g transform="translate(320, 40)">
            <ellipse cx="20" cy="65" rx="14" ry="4" fill="#4A0E0E" fillOpacity="0.15" />
            <path d="M20 10 C8 10, 0 19, 0 31 C0 47, 20 65, 20 65 C20 65, 40 47, 40 31 C40 19, 32 10, 20 10 Z" fill="#E53935" filter="drop-shadow(0 6px 10px rgba(229,57,53,0.35))" />
            <circle cx="20" cy="30" r="8" fill="#FFFFFF" />
            <circle cx="20" cy="30" r="4" fill="#F2B705" />
          </g>
        </g>
      ) : (
        // Compact 160px Card Header Version
        <g transform="translate(15, 5)">
          {/* Subtle Ground Shadow */}
          <ellipse cx="165" cy="138" rx="110" ry="10" fill="#4A0E0E" fillOpacity="0.08" />

          {/* Shopping Bag (Center-Left) */}
          <g transform="translate(100, 32)">
            <path d="M30 26 C30 8, 55 8, 55 26" stroke="#F2B705" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M10 26 L75 26 L82 102 L3 102 Z" fill="url(#bagGrad)" filter="drop-shadow(0 6px 10px rgba(183,28,28,0.2))" />
            <circle cx="42" cy="64" r="14" fill="#FFFFFF" fillOpacity="0.95" />
            <path d="M42 58 C39 55, 33 58, 33 62 C33 68, 42 72, 42 72 C42 72, 51 68, 51 62 C51 58, 45 55, 42 58 Z" fill="#E53935" />
            <circle cx="42" cy="56" r="2" fill="#F2B705" />
          </g>

          {/* Takeaway Food Box (Center-Right) */}
          <g transform="translate(180, 58)">
            <rect x="0" y="20" width="80" height="52" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.06))" />
            <path d="M-4 20 L40 4 L84 20 Z" fill="#FDECEC" stroke="#E53935" strokeWidth="1.5" />
            <line x1="40" y1="4" x2="40" y2="72" stroke="#E53935" strokeWidth="1.5" strokeDasharray="3 2" />
            {/* Steam */}
            <path d="M25 0 C27 -8, 23 -12, 26 -18" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
            <path d="M40 -3 C42 -10, 38 -15, 41 -21" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.75" />
            <path d="M55 0 C57 -8, 53 -12, 56 -18" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
          </g>

          {/* Iced Drink Cup (Far Left) */}
          <g transform="translate(55, 62)">
            <line x1="28" y1="-12" x2="22" y2="20" stroke="#F2B705" strokeWidth="4" strokeLinecap="round" />
            <path d="M6 16 L38 16 L33 66 L11 66 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
            <path d="M8 30 L36 30 L32 64 L12 64 Z" fill="#FDECEC" />
            <path d="M4 16 C4 6, 40 6, 40 16 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
          </g>

          {/* Location Pin (Top Right) */}
          <g transform="translate(265, 20)">
            <path d="M14 6 C6 6, 0 12, 0 20 C0 32, 14 44, 14 44 C14 44, 28 32, 28 20 C28 12, 22 6, 14 6 Z" fill="#E53935" filter="drop-shadow(0 4px 6px rgba(229,57,53,0.3))" />
            <circle cx="14" cy="19" r="5" fill="#FFFFFF" />
            <circle cx="14" cy="19" r="2.5" fill="#F2B705" />
          </g>
        </g>
      )}
    </svg>
  );
};
