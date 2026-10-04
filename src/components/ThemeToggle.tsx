import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme, Theme } from '../context/ThemeContext';

export interface ThemeToggleProps {
  variant?: 'navbar' | 'menu';
  onHero?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'navbar',
  onHero = false,
  className = '',
}) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'menu') {
    // Varian Menu Mobile: lebar penuh, tinggi 44px dengan teks label Terang & Gelap
    const trackClasses = isDark
      ? 'bg-white/10 border border-line'
      : 'bg-surface-2 border border-line';

    const thumbClasses = isDark
      ? 'translate-x-full bg-[#F2B705] text-[#2A0A0A]'
      : 'translate-x-0 bg-[#D32F2F] text-white';

    return (
      <div
        role="group"
        aria-label="Tampilan situs"
        className={`relative w-full h-[44px] rounded-xl p-1 flex items-center select-none ${trackClasses} ${className}`}
      >
        {/* Animated Sliding Thumb */}
        <div
          aria-hidden="true"
          className={`absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] rounded-lg shadow-sm transition-transform duration-200 ease-out pointer-events-none ${thumbClasses}`}
        />

        {/* Tombol Terang */}
        <button
          type="button"
          onClick={() => setTheme('light')}
          aria-pressed={!isDark}
          aria-label="Tema terang"
          className={`relative z-10 w-1/2 h-full flex items-center justify-center gap-2 rounded-lg text-xs font-bold transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F2B705] ${
            !isDark ? 'text-white' : 'text-ink-muted hover:text-ink'
          }`}
        >
          <Sun className="w-4 h-4 shrink-0" />
          <span>Terang</span>
        </button>

        {/* Tombol Gelap */}
        <button
          type="button"
          onClick={() => setTheme('dark')}
          aria-pressed={isDark}
          aria-label="Tema gelap"
          className={`relative z-10 w-1/2 h-full flex items-center justify-center gap-2 rounded-lg text-xs font-bold transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F2B705] ${
            isDark ? 'text-[#2A0A0A]' : 'text-ink-muted hover:text-ink'
          }`}
        >
          <Moon className="w-4 h-4 shrink-0" />
          <span>Gelap</span>
        </button>
      </div>
    );
  }

  // Varian Navbar: saklar segmen ringkas (~76x36px di desktop, ~80x40px di mobile touch target)
  let trackClasses = '';
  let thumbClasses = '';
  let activeIconLight = '';
  let activeIconDark = '';
  let inactiveIconClasses = '';

  if (onHero) {
    trackClasses = 'bg-white/15 border border-white/25';
    thumbClasses = isDark
      ? 'translate-x-full bg-white text-[#B71C1C]'
      : 'translate-x-0 bg-white text-[#B71C1C]';
    activeIconLight = 'text-[#B71C1C]';
    activeIconDark = 'text-[#B71C1C]';
    inactiveIconClasses = 'text-white/80 hover:text-white';
  } else if (!isDark) {
    // Scrolled, Light theme
    trackClasses = 'bg-surface-2 border border-line';
    thumbClasses = 'translate-x-0 bg-[#D32F2F] text-white';
    activeIconLight = 'text-white';
    activeIconDark = 'text-white';
    inactiveIconClasses = 'text-ink-muted hover:text-ink';
  } else {
    // Scrolled, Dark theme
    trackClasses = 'bg-white/10 border border-line';
    thumbClasses = 'translate-x-full bg-[#F2B705] text-[#2A0A0A]';
    activeIconLight = 'text-[#2A0A0A]';
    activeIconDark = 'text-[#2A0A0A]';
    inactiveIconClasses = 'text-ink-muted hover:text-ink';
  }

  return (
    <div
      role="group"
      aria-label="Tampilan situs"
      className={`relative w-[76px] sm:w-[72px] h-[40px] sm:h-[36px] rounded-full p-1 flex items-center select-none ${trackClasses} ${className}`}
    >
      {/* Sliding Round Thumb */}
      <div
        aria-hidden="true"
        className={`absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] rounded-full shadow-sm transition-transform duration-200 ease-out pointer-events-none ${thumbClasses}`}
      />

      {/* Tombol Segmen Terang */}
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-pressed={!isDark}
        aria-label="Tema terang"
        className={`relative z-10 w-1/2 h-full flex items-center justify-center rounded-full transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F2B705] ${
          !isDark ? activeIconLight : inactiveIconClasses
        }`}
      >
        <Sun className="w-4 h-4 shrink-0" />
      </button>

      {/* Tombol Segmen Gelap */}
      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-pressed={isDark}
        aria-label="Tema gelap"
        className={`relative z-10 w-1/2 h-full flex items-center justify-center rounded-full transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F2B705] ${
          isDark ? activeIconDark : inactiveIconClasses
        }`}
      >
        <Moon className="w-4 h-4 shrink-0" />
      </button>
    </div>
  );
};
