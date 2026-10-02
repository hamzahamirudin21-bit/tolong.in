import React from 'react';

interface IllustrationProps {
  className?: string;
  detailed?: boolean;
}

export const InformasiIllustration: React.FC<IllustrationProps> = ({
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
        <linearGradient id="infoBg" x1="0" y1="0" x2="360" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF1F0" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FDECEC" stopOpacity="0.95" />
        </linearGradient>
        <pattern id="infoDots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#E53935" fillOpacity="0.1" />
        </pattern>
        <linearGradient id="houseRoof" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#B71C1C" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#infoBg)" rx="16" />
      <rect width="100%" height="100%" fill="url(#infoDots)" rx="16" />

      {/* Decorative ambient glow */}
      <circle cx={detailed ? 250 : 180} cy={detailed ? 170 : 80} r={detailed ? 140 : 70} fill="#F2B705" fillOpacity="0.12" filter="blur(20px)" />

      {detailed ? (
        // Detailed Version
        <g transform="translate(35, 25)">
          {/* Ground Platform */}
          <ellipse cx="225" cy="285" rx="175" ry="20" fill="#4A0E0E" fillOpacity="0.08" />

          {/* Student Kos House (Center) */}
          <g transform="translate(130, 70)">
            {/* House Body */}
            <rect x="0" y="60" width="150" height="150" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" filter="drop-shadow(0 10px 16px rgba(0,0,0,0.06))" />
            {/* Pitched Roof */}
            <path d="M-15 60 L75 5 L165 60 Z" fill="url(#houseRoof)" filter="drop-shadow(0 6px 12px rgba(183,28,28,0.22))" />
            {/* Attic circular vent */}
            <circle cx="75" cy="40" r="10" fill="#FFFFFF" stroke="#D32F2F" strokeWidth="2" />
            <path d="M75 30 L75 50 M65 40 L85 40" stroke="#D32F2F" strokeWidth="2" />

            {/* Balcony / 2nd Floor Window */}
            <rect x="25" y="80" width="38" height="42" rx="4" fill="#FDECEC" stroke="#E53935" strokeWidth="2" />
            <path d="M44 80 L44 122 M25 101 L63 101" stroke="#E53935" strokeWidth="2" />
            {/* Right Window */}
            <rect x="85" y="80" width="38" height="42" rx="4" fill="#FFF9C4" stroke="#F2B705" strokeWidth="2" />
            <path d="M104 80 L104 122 M85 101 L123 101" stroke="#F2B705" strokeWidth="2" />

            {/* Entrance Door */}
            <rect x="55" y="145" width="40" height="65" rx="4" fill="#D32F2F" />
            <circle cx="85" cy="178" r="3" fill="#F2B705" />
            <rect x="25" y="150" width="20" height="24" rx="3" fill="#FDECEC" stroke="#D1D5DB" strokeWidth="1.5" />
          </g>

          {/* 360 Camera Badge (Top Left of Kos) */}
          <g transform="translate(45, 60)">
            <ellipse cx="35" cy="80" rx="25" ry="6" fill="#4A0E0E" fillOpacity="0.08" />
            <circle cx="35" cy="35" r="35" fill="#FFFFFF" stroke="#E53935" strokeWidth="2.5" filter="drop-shadow(0 8px 12px rgba(229,57,53,0.18))" />
            {/* Camera Body */}
            <rect x="18" y="24" width="34" height="26" rx="5" fill="#D32F2F" />
            <circle cx="35" cy="37" r="7" fill="#FFFFFF" stroke="#F2B705" strokeWidth="2" />
            <circle cx="35" cy="37" r="3" fill="#F2B705" />
            {/* 360 circular arrows */}
            <path d="M12 25 C14 10, 56 10, 58 25" stroke="#F2B705" strokeWidth="3" strokeLinecap="round" fill="none" />
            <polygon points="56,22 62,26 56,30" fill="#F2B705" />
            <text x="35" y="70" textAnchor="middle" fill="#B71C1C" fontSize="10" fontWeight="bold">SURVEI 360°</text>
          </g>

          {/* Checklist Document (Right) */}
          <g transform="translate(325, 90)">
            <rect x="0" y="0" width="95" height="125" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" filter="drop-shadow(0 8px 14px rgba(0,0,0,0.08))" />
            {/* Check lines */}
            <line x1="15" y1="20" x2="80" y2="20" stroke="#B71C1C" strokeWidth="3" strokeLinecap="round" />
            {[40, 65, 90].map((y, i) => (
              <g key={i}>
                <circle cx="22" cy={y} r="7" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1.5" />
                <path d={`M19 ${y} L21 ${y + 2} L25 ${y - 2}`} stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="36" y1={y} x2="80" y2={y} stroke="#71717A" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            ))}
          </g>

          {/* Magnifying Glass (Center-Right overlaying House & Checklist) */}
          <g transform="translate(260, 160)">
            <line x1="35" y1="35" x2="70" y2="70" stroke="#4A0E0E" strokeWidth="9" strokeLinecap="round" />
            <line x1="35" y1="35" x2="68" y2="68" stroke="#F2B705" strokeWidth="5" strokeLinecap="round" />
            <circle cx="20" cy="20" r="26" fill="#FFFFFF" fillOpacity="0.4" stroke="#D32F2F" strokeWidth="5" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.12))" />
            <circle cx="20" cy="20" r="20" fill="#FDECEC" fillOpacity="0.4" />
            <path d="M12 12 Q20 8 28 12" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>
      ) : (
        // Compact 160px Card Header Version
        <g transform="translate(20, 10)">
          {/* Ground Shadow */}
          <ellipse cx="170" cy="132" rx="100" ry="8" fill="#4A0E0E" fillOpacity="0.08" />

          {/* Kos House (Center) */}
          <g transform="translate(125, 30)">
            <rect x="0" y="35" width="85" height="80" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
            <path d="M-8 35 L42 5 L93 35 Z" fill="url(#houseRoof)" />
            <rect x="15" y="48" width="22" height="24" rx="3" fill="#FDECEC" stroke="#E53935" strokeWidth="1.5" />
            <rect x="48" y="48" width="22" height="24" rx="3" fill="#FFF9C4" stroke="#F2B705" strokeWidth="1.5" />
            <rect x="30" y="82" width="24" height="33" rx="3" fill="#D32F2F" />
            <circle cx="48" cy="100" r="2" fill="#F2B705" />
          </g>

          {/* 360 Camera Badge (Left) */}
          <g transform="translate(55, 38)">
            <circle cx="22" cy="22" r="22" fill="#FFFFFF" stroke="#E53935" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(229,57,53,0.15))" />
            <rect x="11" y="15" width="22" height="16" rx="3" fill="#D32F2F" />
            <circle cx="22" cy="23" r="4.5" fill="#FFFFFF" />
            <circle cx="22" cy="23" r="2" fill="#F2B705" />
            <path d="M8 15 C10 6, 34 6, 36 15" stroke="#F2B705" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>

          {/* Checklist (Right) */}
          <g transform="translate(230, 42)">
            <rect x="0" y="0" width="55" height="72" rx="5" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
            <line x1="8" y1="12" x2="46" y2="12" stroke="#B71C1C" strokeWidth="2" strokeLinecap="round" />
            {[24, 38, 52].map((y, i) => (
              <g key={i}>
                <circle cx="14" cy={y} r="4" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1" />
                <line x1="22" y1={y} x2="46" y2={y} stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            ))}
          </g>

          {/* Magnifying Glass Overlay */}
          <g transform="translate(195, 80)">
            <line x1="20" y1="20" x2="38" y2="38" stroke="#4A0E0E" strokeWidth="5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="14" fill="#FFFFFF" fillOpacity="0.5" stroke="#D32F2F" strokeWidth="3" />
            <circle cx="12" cy="12" r="11" fill="#FDECEC" fillOpacity="0.3" />
          </g>
        </g>
      )}
    </svg>
  );
};
