import React from 'react';

// 1. Chat Bubble Mengetik
export const Step1ChatSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="bubbleGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FDECEC" />
      </linearGradient>
    </defs>
    {/* Background glow */}
    <circle cx="60" cy="50" r="38" fill="#E53935" fillOpacity="0.08" />
    {/* Main Chat Bubble */}
    <path
      d="M20 22 C20 14, 28 8, 38 8 L82 8 C92 8, 100 14, 100 22 L100 58 C100 66, 92 72, 82 72 L45 72 L26 86 L28 72 L20 72 Z"
      fill="url(#bubbleGrad)"
      stroke="#D32F2F"
      strokeWidth="2.5"
      strokeLinejoin="round"
      filter="drop-shadow(0 4px 8px rgba(211,47,47,0.12))"
    />
    {/* WhatsApp Green Top Badge */}
    <circle cx="86" cy="18" r="7" fill="#25D366" />
    <path d="M83.5 18 L85.5 20 L89 16.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    {/* 3 Animated Typing Dots */}
    <circle cx="44" cy="40" r="4.5" fill="#D32F2F">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite" begin="0s" />
      <animate attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="1.4s" repeatCount="indefinite" begin="0s" />
    </circle>
    <circle cx="60" cy="40" r="4.5" fill="#F2B705">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite" begin="0.25s" />
      <animate attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="1.4s" repeatCount="indefinite" begin="0.25s" />
    </circle>
    <circle cx="76" cy="40" r="4.5" fill="#D32F2F">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite" begin="0.5s" />
      <animate attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="1.4s" repeatCount="indefinite" begin="0.5s" />
    </circle>
  </svg>
);

// 2. Dua Tangan Sepakat dengan Label Harga Berubah
export const Step2HandshakeSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="60" cy="50" r="38" fill="#F2B705" fillOpacity="0.1" />
    {/* Floating Price Agreement Tag */}
    <g transform="translate(36, 10)">
      <rect x="0" y="0" width="48" height="22" rx="11" fill="#F2B705" stroke="#C99700" strokeWidth="1.5" />
      <text x="24" y="15" fill="#4A0E0E" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
        Deal! ✓
      </text>
    </g>
    {/* Hand Left */}
    <path
      d="M15 54 L38 54 L52 64 L62 56 L44 44 L20 44 Z"
      fill="#E53935"
      stroke="#B71C1C"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Sleeve Left */}
    <rect x="10" y="42" width="12" height="15" rx="3" fill="#4A0E0E" />
    {/* Hand Right */}
    <path
      d="M105 54 L82 54 L68 64 L58 56 L76 44 L100 44 Z"
      fill="#F2B705"
      stroke="#C99700"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Sleeve Right */}
    <rect x="98" y="42" width="12" height="15" rx="3" fill="#D32F2F" />
    {/* Interlocking Fingers Center */}
    <ellipse cx="60" cy="60" rx="9" ry="5" fill="#FFFFFF" stroke="#4A0E0E" strokeWidth="1.8" />
  </svg>
);

// 3. Pesanan Terbang ke Runner
export const Step3FlyingOrderSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="60" cy="50" r="38" fill="#E53935" fillOpacity="0.08" />
    {/* Motion Streaks */}
    <path d="M14 62 L32 62 M8 70 L26 70 M20 54 L36 54" stroke="#F2B705" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    {/* Flying Parcel with Wings */}
    <g transform="translate(38, 26)">
      {/* Wing Left */}
      <path d="M12 18 C-4 6, -6 -6, 12 -2 Z" fill="#FDECEC" stroke="#E53935" strokeWidth="1.5" />
      {/* Wing Right */}
      <path d="M36 18 C52 6, 54 -6, 36 -2 Z" fill="#FDECEC" stroke="#E53935" strokeWidth="1.5" />
      {/* Box */}
      <rect x="8" y="10" width="32" height="32" rx="6" fill="#FFFFFF" stroke="#D32F2F" strokeWidth="2.5" />
      {/* Tape */}
      <line x1="8" y1="26" x2="40" y2="26" stroke="#F2B705" strokeWidth="3" />
      <line x1="24" y1="10" x2="24" y2="42" stroke="#F2B705" strokeWidth="3" />
      {/* Mini notification badge */}
      <circle cx="36" cy="10" r="6" fill="#E53935" />
      <text x="36" y="13.5" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">1</text>
    </g>
    {/* Target Pin */}
    <g transform="translate(86, 52)">
      <path d="M10 0 C4.5 0, 0 4.5, 0 10 C0 16, 10 26, 10 26 C10 26, 20 16, 20 10 C20 4.5, 15.5 0, 10 0 Z" fill="#E53935" />
      <circle cx="10" cy="9" r="4" fill="#FFFFFF" />
    </g>
  </svg>
);

// 4. Runner Motor Berjalan
export const Step4MotorRunningSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="60" cy="50" r="38" fill="#F2B705" fillOpacity="0.1" />
    {/* Road line */}
    <line x1="12" y1="80" x2="108" y2="80" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
    <line x1="30" y1="80" x2="55" y2="80" stroke="#F2B705" strokeWidth="3" strokeLinecap="round" />
    <line x1="75" y1="80" x2="95" y2="80" stroke="#D32F2F" strokeWidth="3" strokeLinecap="round" />
    
    {/* Scooter Body */}
    <g transform="translate(26, 30)">
      {/* Wheels */}
      <circle cx="15" cy="42" r="9" fill="#2B0A0A" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="15" cy="42" r="3" fill="#F2B705" />
      <circle cx="56" cy="42" r="9" fill="#2B0A0A" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="56" cy="42" r="3" fill="#F2B705" />
      {/* Frame */}
      <path d="M15 42 L34 42 L42 28 L56 42" stroke="#E53935" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Handlebar & Windshield */}
      <line x1="42" y1="28" x2="48" y2="14" stroke="#4A0E0E" strokeWidth="3" strokeLinecap="round" />
      <path d="M48 14 L55 12" stroke="#F2B705" strokeWidth="3" strokeLinecap="round" />
      {/* Headlight beam */}
      <polygon points="56,22 80,14 80,32 56,24" fill="#F2B705" fillOpacity="0.25" />
      {/* Runner with Red Helmet */}
      <circle cx="34" cy="12" r="8" fill="#E53935" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M36 10 L42 12 L38 15 Z" fill="#2B0A0A" /> {/* Visor */}
      <path d="M30 20 C26 26, 32 36, 36 38" stroke="#4A0E0E" strokeWidth="4" strokeLinecap="round" />
      {/* Delivery Box */}
      <rect x="18" y="24" width="12" height="12" rx="2" fill="#F2B705" stroke="#C99700" strokeWidth="1.2" />
    </g>
  </svg>
);

// 5. Scan QRIS dengan Garis Laser
export const Step5QrisLaserSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="60" cy="50" r="38" fill="#E53935" fillOpacity="0.08" />
    {/* Smartphone Frame */}
    <rect x="36" y="10" width="48" height="80" rx="9" fill="#FFFFFF" stroke="#4A0E0E" strokeWidth="2.5" />
    <rect x="42" y="18" width="36" height="60" rx="4" fill="#F8F9FB" />
    {/* QR Code Matrix */}
    <g transform="translate(47, 24)">
      {/* Corner Blocks */}
      <rect x="0" y="0" width="8" height="8" fill="#4A0E0E" rx="1" />
      <rect x="2" y="2" width="4" height="4" fill="#FFFFFF" />
      <rect x="18" y="0" width="8" height="8" fill="#4A0E0E" rx="1" />
      <rect x="20" y="2" width="4" height="4" fill="#FFFFFF" />
      <rect x="0" y="18" width="8" height="8" fill="#4A0E0E" rx="1" />
      <rect x="2" y="20" width="4" height="4" fill="#FFFFFF" />
      {/* Dots */}
      <rect x="10" y="4" width="4" height="4" fill="#D32F2F" />
      <rect x="12" y="12" width="5" height="5" fill="#F2B705" />
      <rect x="4" y="10" width="4" height="4" fill="#4A0E0E" />
      <rect x="18" y="18" width="6" height="6" fill="#D32F2F" />
    </g>
    {/* Red/Gold Scanning Laser Line (Animated in CSS) */}
    <g className="animate-laser">
      <line x1="39" y1="28" x2="81" y2="28" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="39,28 81,28 75,32 45,32" fill="#E53935" fillOpacity="0.3" />
    </g>
  </svg>
);

// 6. Bintang Ulasan Menyala
export const Step6RatingSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="60" cy="50" r="38" fill="#F2B705" fillOpacity="0.12" />
    {/* Large Central Glowing Star */}
    <g transform="translate(60, 44)">
      <polygon
        points="0,-24 7,-8 24,-6 12,6 15,22 0,13 -15,22 -12,6 -24,-6 -7,-8"
        fill="#F2B705"
        stroke="#C99700"
        strokeWidth="2"
        filter="drop-shadow(0 0 8px rgba(242,183,5,0.6))"
      />
      <circle cx="0" cy="0" r="5" fill="#FFF9C4" />
    </g>
    {/* Mini Side Stars */}
    <g transform="translate(26, 48) scale(0.6)">
      <polygon points="0,-18 5,-6 18,-4 9,5 11,17 0,10 -11,17 -9,5 -18,-4 -5,-6" fill="#F2B705" />
    </g>
    <g transform="translate(94, 48) scale(0.6)">
      <polygon points="0,-18 5,-6 18,-4 9,5 11,17 0,10 -11,17 -9,5 -18,-4 -5,-6" fill="#F2B705" />
    </g>
    {/* Sparkle sparkles */}
    <circle cx="34" cy="22" r="3" fill="#E53935" className="animate-ping" style={{ animationDuration: '2s' }} />
    <circle cx="86" cy="20" r="2.5" fill="#F2B705" />
    {/* 5.0 Rating Tag */}
    <g transform="translate(44, 76)">
      <rect x="0" y="0" width="32" height="16" rx="8" fill="#4A0E0E" />
      <text x="16" y="12" fill="#F2B705" fontSize="10" fontWeight="bold" textAnchor="middle">★ 5.0</text>
    </g>
  </svg>
);
