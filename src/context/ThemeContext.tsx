import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';

export type Theme = 'light' | 'dark';

// Ubah DEFAULT_THEME di sini jika ingin default berbeda ('light' atau 'dark')
const DEFAULT_THEME: Theme = 'light';
const STORAGE_KEY = 'tolongin-theme';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return DEFAULT_THEME;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
    } catch {
      // Abaikan jika localStorage tidak dapat diakses
    }
    return DEFAULT_THEME;
  });

  const transitionTimerRef = useRef<number | null>(null);

  const applyThemeToDOM = useCallback((newTheme: Theme, triggerTransition: boolean = false) => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const isDark = newTheme === 'dark';

    // Tambahkan class theme-transition jika diminta dan user tidak memilih reduced-motion
    if (triggerTransition) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        root.classList.add('theme-transition');
        if (transitionTimerRef.current) {
          window.clearTimeout(transitionTimerRef.current);
        }
        transitionTimerRef.current = window.setTimeout(() => {
          root.classList.remove('theme-transition');
          transitionTimerRef.current = null;
        }, 350);
      }
    }

    // Update class 'dark' dan colorScheme
    root.classList.toggle('dark', isDark);
    root.style.colorScheme = newTheme;

    // Update <meta name="theme-color"> (dark: #121011, light: #B71C1C)
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', isDark ? '#121011' : '#B71C1C');
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState((currentTheme) => {
      if (currentTheme === newTheme) return currentTheme;

      try {
        localStorage.setItem(STORAGE_KEY, newTheme);
      } catch {
        // Abaikan jika storage penuh atau tidak diizinkan
      }

      applyThemeToDOM(newTheme, true);
      return newTheme;
    });
  }, [applyThemeToDOM]);

  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => {
      const nextTheme: Theme = prevTheme === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem(STORAGE_KEY, nextTheme);
      } catch {
        // Abaikan jika storage penuh atau tidak diizinkan
      }
      applyThemeToDOM(nextTheme, true);
      return nextTheme;
    });
  }, [applyThemeToDOM]);

  // Initial sync saat komponen mount
  useEffect(() => {
    applyThemeToDOM(theme, false);
  }, [applyThemeToDOM, theme]);

  // Sinkronisasi antar tab browser via event storage
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === 'light' || e.newValue === 'dark')) {
        const syncTheme = e.newValue as Theme;
        setThemeState(syncTheme);
        applyThemeToDOM(syncTheme, true);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [applyThemeToDOM]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme harus digunakan di dalam ThemeProvider');
  }
  return context;
};
