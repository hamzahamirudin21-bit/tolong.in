import React from 'react';

interface BadgeProps {
  className?: string;
  size?: number;
}

// 1. @upi.shitpost Badge: Smartphone dengan feed + megafon
export const MediaPartnerBadge: React.FC<BadgeProps> = ({
  className = '',
  size = 48,
}) => {
  return (
    <div
      className={`rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center p-2 text-amber-800 shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Smartphone */}
        <rect x="7" y="5" width="18" height="30" rx="3.5" fill="#FFFFFF" stroke="#4A0E0E" strokeWidth="1.8" />
        <line x1="12" y1="8" x2="20" y2="8" stroke="#D1D5DB" strokeWidth="1.2" strokeLinecap="round" />
        {/* Screen feed rows */}
        <rect x="10" y="11" width="12" height="6" rx="1.5" fill="#E53935" fillOpacity="0.2" />
        <line x1="10" y1="20" x2="20" y2="20" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="24" x2="18" y2="24" stroke="#F2B705" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="31" r="1.5" fill="#4A0E0E" />

        {/* Megaphone (Front right) */}
        <g transform="translate(19, 14)">
          {/* Cone */}
          <polygon points="4,7 15,2 15,16 4,11" fill="#F2B705" stroke="#C99700" strokeWidth="1.2" />
          <ellipse cx="15" cy="9" rx="2.5" ry="7" fill="#E53935" />
          <rect x="0" y="7" width="5" height="4" rx="1" fill="#4A0E0E" />
          <path d="M4 11 L3 17 L6 17 L6 11" fill="#4A0E0E" />
          {/* Sound waves */}
          <path d="M19 6 C21 7, 21 11, 19 12" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

// 2. Organisasi Kemahasiswaan Badge: Sekelompok orang / bendera
export const StudentOrgBadge: React.FC<BadgeProps> = ({
  className = '',
  size = 48,
}) => {
  return (
    <div
      className={`rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center p-2 text-blue-800 shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Student Group (Left & Right silhouetted students) */}
        {/* Person Left */}
        <circle cx="12" cy="18" r="4.5" fill="#1E40AF" fillOpacity="0.7" />
        <path d="M6 31 C6 25, 18 25, 18 31" fill="#1E40AF" fillOpacity="0.7" />

        {/* Person Right */}
        <circle cx="28" cy="18" r="4.5" fill="#1E40AF" fillOpacity="0.7" />
        <path d="M22 31 C22 25, 34 25, 34 31" fill="#1E40AF" fillOpacity="0.7" />

        {/* Person Center Leader */}
        <circle cx="20" cy="14" r="5" fill="#E53935" />
        <path d="M12 28 C12 21, 28 21, 28 28" fill="#D32F2F" />

        {/* Campus Organization Banner / Flag */}
        <g transform="translate(19, 4)">
          <line x1="0" y1="0" x2="0" y2="16" stroke="#4A0E0E" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M0 0 L14 4 L0 9 Z" fill="#F2B705" stroke="#C99700" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};

// 3. UMKM Kuliner Badge: Warung dengan kanopi dan mangkuk makanan
export const UmkmFoodBadge: React.FC<BadgeProps> = ({
  className = '',
  size = 48,
}) => {
  return (
    <div
      className={`rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center p-2 text-emerald-800 shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Warung Canopy / Roof */}
        <path d="M5 14 L35 14 L31 7 L9 7 Z" fill="#E53935" />
        <path d="M11 14 L17 14 L15 7 L12 7 Z" fill="#FFFFFF" fillOpacity="0.85" />
        <path d="M23 14 L29 14 L27 7 L24 7 Z" fill="#FFFFFF" fillOpacity="0.85" />
        {/* Scallop edge */}
        <path d="M5 14 Q8 17 11 14 Q14 17 17 14 Q20 17 23 14 Q26 17 29 14 Q32 17 35 14" stroke="#B71C1C" strokeWidth="1.2" fill="#E53935" />

        {/* Counter Table */}
        <rect x="8" y="20" width="24" height="13" rx="2" fill="#FFFFFF" stroke="#047857" strokeWidth="1.5" />
        <line x1="8" y1="24" x2="32" y2="24" stroke="#A7F3D0" strokeWidth="1.2" />

        {/* Steaming Food Bowl on Counter */}
        <g transform="translate(14, 16)">
          <path d="M2 5 C2 10, 10 10, 10 5 Z" fill="#F2B705" stroke="#C99700" strokeWidth="1.2" />
          <ellipse cx="6" cy="5" rx="4" ry="1.5" fill="#E53935" />
          {/* Steam */}
          <path d="M4 3 C4 1, 5 0, 5 -2" stroke="#E53935" strokeWidth="1" strokeLinecap="round" />
          <path d="M7 3 C7 1, 8 0, 8 -2" stroke="#E53935" strokeWidth="1" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};
