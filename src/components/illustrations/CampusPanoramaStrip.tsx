import React from 'react';

interface CampusPanoramaStripProps {
  className?: string;
}

export const CampusPanoramaStrip: React.FC<CampusPanoramaStripProps> = ({
  className = '',
}) => {
  return (
    <div className={`w-full overflow-hidden rounded-2xl bg-gradient-to-r from-red-50/50 via-amber-50/40 to-red-50/50 border border-red-100/70 ${className}`}>
      <svg
        viewBox="0 0 1000 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[140px] opacity-75"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle gradient for hills */}
          <linearGradient id="hillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E53935" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#B71C1C" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A0E0E" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#4A0E0E" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="runnerGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E53935" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B71C1C" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Layer 1: Bandung Rolling Hills Silhouette in Background */}
        <path
          d="M0 90 Q140 40 280 80 T560 60 T840 85 Q920 70 1000 75 L1000 140 L0 140 Z"
          fill="url(#hillGrad)"
        />
        <path
          d="M0 105 Q180 70 380 95 T780 80 Q890 90 1000 95 L1000 140 L0 140 Z"
          fill="#FDECEC"
          fillOpacity="0.6"
        />

        {/* Layer 2: Generic Campus Buildings Silhouette (Faculty buildings, clock tower/dome) */}
        {/* Building cluster 1 (Left) */}
        <rect x="50" y="65" width="70" height="75" fill="url(#buildingGrad)" rx="2" />
        <rect x="62" y="75" width="8" height="12" fill="#FFFFFF" fillOpacity="0.8" />
        <rect x="78" y="75" width="8" height="12" fill="#FFFFFF" fillOpacity="0.8" />
        <rect x="94" y="75" width="8" height="12" fill="#FFFFFF" fillOpacity="0.8" />
        <rect x="62" y="95" width="8" height="12" fill="#FFFFFF" fillOpacity="0.8" />
        <rect x="78" y="95" width="8" height="12" fill="#FFFFFF" fillOpacity="0.8" />
        <rect x="94" y="95" width="8" height="12" fill="#FFFFFF" fillOpacity="0.8" />

        {/* Campus Main Landmark Tower / Isola-inspired silhouette (Center-Left) */}
        <g transform="translate(180, 30)">
          <rect x="25" y="30" width="50" height="80" fill="url(#buildingGrad)" rx="3" />
          <path d="M20 30 L50 8 L80 30 Z" fill="#D32F2F" fillOpacity="0.2" />
          {/* Clock face / emblem */}
          <circle cx="50" cy="45" r="9" fill="#FFFFFF" fillOpacity="0.9" />
          <circle cx="50" cy="45" r="7" stroke="#F2B705" strokeWidth="1.5" />
          <line x1="50" y1="45" x2="50" y2="40" stroke="#B71C1C" strokeWidth="1.5" />
          <line x1="50" y1="45" x2="54" y2="45" stroke="#B71C1C" strokeWidth="1.5" />
          {/* Windows */}
          <rect x="35" y="65" width="30" height="8" rx="1" fill="#FFFFFF" fillOpacity="0.7" />
          <rect x="35" y="80" width="30" height="8" rx="1" fill="#FFFFFF" fillOpacity="0.7" />
        </g>

        {/* Building cluster 2 (Center-Right) */}
        <rect x="700" y="55" width="90" height="85" fill="url(#buildingGrad)" rx="2" />
        <polygon points="695,55 745,35 795,55" fill="#E53935" fillOpacity="0.18" />
        <rect x="715" y="68" width="10" height="14" fill="#FFFFFF" fillOpacity="0.8" />
        <rect x="740" y="68" width="10" height="14" fill="#FFFFFF" fillOpacity="0.8" />
        <rect x="765" y="68" width="10" height="14" fill="#FFFFFF" fillOpacity="0.8" />

        {/* Generic Trees */}
        {[130, 260, 660, 810, 860].map((tx, idx) => (
          <g key={idx} transform={`translate(${tx}, 95)`}>
            <circle cx="10" cy="12" r="14" fill="#E53935" fillOpacity="0.15" />
            <circle cx="14" cy="8" r="10" fill="#F2B705" fillOpacity="0.2" />
            <rect x="8" y="20" width="4" height="25" fill="#4A0E0E" fillOpacity="0.2" />
          </g>
        ))}

        {/* Campus Road Ground Line */}
        <line x1="0" y1="125" x2="1000" y2="125" stroke="#D32F2F" strokeWidth="2.5" strokeOpacity="0.25" />
        <line x1="0" y1="130" x2="1000" y2="130" stroke="#F2B705" strokeWidth="1.5" strokeDasharray="16 10" strokeOpacity="0.4" />

        {/* Student Runner on Motorbike on the Road (Moving Left to Right) */}
        <g transform="translate(440, 85)">
          {/* Wheels */}
          <circle cx="16" cy="38" r="8" fill="#4A0E0E" />
          <circle cx="16" cy="38" r="5" fill="#FFFFFF" />
          <circle cx="52" cy="38" r="8" fill="#4A0E0E" />
          <circle cx="52" cy="38" r="5" fill="#FFFFFF" />
          {/* Scooter Body */}
          <path d="M22 36 L44 36 L48 24 L36 24 L26 30 Z" fill="url(#runnerGrad)" />
          {/* Runner */}
          <path d="M30 26 L34 14 L42 16 L38 26 Z" fill="#D32F2F" />
          <path d="M35 16 L46 22" stroke="#D32F2F" strokeWidth="2.5" strokeLinecap="round" />
          {/* Helmet */}
          <circle cx="36" cy="9" r="6" fill="#E53935" />
          <circle cx="38" cy="8" r="1.5" fill="#F2B705" />
          {/* Headlight Ray */}
          <polygon points="50,26 80,22 82,32 50,28" fill="#F2B705" fillOpacity="0.35" />
          {/* Delivery Box at back */}
          <rect x="14" y="18" width="12" height="12" rx="2" fill="#F2B705" />
          <circle cx="20" cy="24" r="2" fill="#B71C1C" />
        </g>
      </svg>
    </div>
  );
};
