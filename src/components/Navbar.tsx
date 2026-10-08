import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ArrowUpRight } from 'lucide-react';
import { TolongInLogo } from './TolongInLogo';
import { WhatsAppIcon } from './icons/BrandIcons';
import { ThemeToggle } from './ThemeToggle';
import { WA_LINK, WA_DISPLAY, BRAND_TAGLINE } from '../data/contentData';

interface NavbarProps {
  onOrderClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Kenapa Tolong.in', href: '#kenapa-kami' },
    { label: 'Jadi Runner', href: '#jadi-runner' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md shadow-sm border-b border-line py-2.5 text-ink'
          : 'bg-[#E53935]/95 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none border-b border-white/10 py-3.5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo & Tagline */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="Tolong.in Beranda"
          >
            <TolongInLogo
              size={36}
              showWordmark={true}
              wordmarkColor={isScrolled ? 'dark' : 'white'}
            />
            <span
              className={`hidden xl:inline-block text-[11px] font-medium pl-2 border-l transition-colors ${
                isScrolled
                  ? 'text-ink-muted border-line'
                  : 'text-white/80 border-white/20'
              }`}
            >
              UPI Bandung · <span className={isScrolled ? 'text-accent font-semibold' : 'text-[#F2B705] font-semibold'}>{BRAND_TAGLINE}</span>
            </span>
          </a>

          {/* Center: Desktop Navigation Anchor Links */}
          <nav
            className={`hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium transition-colors ${
              isScrolled ? 'text-ink' : 'text-white/90'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`transition-colors relative py-1 hover:underline underline-offset-4 ${
                  isScrolled
                    ? 'hover:text-accent decoration-accent'
                    : 'hover:text-white decoration-[#F2B705]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: ThemeToggle & Pill Button Pesan Sekarang */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle variant="navbar" onHero={!isScrolled} />
            {onOrderClick ? (
              <button
                type="button"
                onClick={onOrderClick}
                className={`rounded-full font-bold text-xs xl:text-sm py-2.5 px-5 shadow-xs hover:shadow-md transition-all flex items-center gap-2 group cursor-pointer active:scale-95 ${
                  isScrolled
                    ? 'bg-[#E53935] hover:bg-[#B71C1C] text-white'
                    : 'bg-white hover:bg-neutral-100 text-[#B71C1C] shadow-lg'
                }`}
              >
                <WhatsAppIcon
                  size={18}
                  className={isScrolled ? 'fill-white text-white' : 'fill-[#25D366] text-[#25D366]'}
                />
                <span>Pesan Sekarang</span>
              </button>
            ) : (
              <a
                href="#pesan"
                className={`rounded-full font-bold text-xs xl:text-sm py-2.5 px-5 shadow-xs hover:shadow-md transition-all flex items-center gap-2 group cursor-pointer active:scale-95 ${
                  isScrolled
                    ? 'bg-[#E53935] hover:bg-[#B71C1C] text-white'
                    : 'bg-white hover:bg-neutral-100 text-[#B71C1C] shadow-lg'
                }`}
              >
                <WhatsAppIcon
                  size={18}
                  className={isScrolled ? 'fill-white text-white' : 'fill-[#25D366] text-[#25D366]'}
                />
                <span>Pesan Sekarang</span>
              </a>
            )}
          </div>

          {/* Mobile Right: ThemeToggle, WA, & Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle variant="navbar" onHero={!isScrolled} />

            {onOrderClick ? (
              <button
                type="button"
                onClick={onOrderClick}
                className={`py-1.5 px-3 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer ${
                  isScrolled
                    ? 'bg-[#E53935] text-white'
                    : 'bg-white text-[#B71C1C]'
                }`}
              >
                <WhatsAppIcon
                  size={14}
                  className={isScrolled ? 'fill-white' : 'fill-[#25D366]'}
                />
                <span>Pesan Sekarang</span>
              </button>
            ) : (
              <a
                href="#pesan"
                className={`py-1.5 px-3 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xs ${
                  isScrolled
                    ? 'bg-[#E53935] text-white'
                    : 'bg-white text-[#B71C1C]'
                }`}
              >
                <WhatsAppIcon
                  size={14}
                  className={isScrolled ? 'fill-white' : 'fill-[#25D366]'}
                />
                <span>Pesan Sekarang</span>
              </a>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-ink hover:bg-surface-2'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-50 bg-surface text-ink overflow-y-auto animate-in slide-in-from-top-2 duration-200 shadow-2xl border-b border-line">
          <div className="px-5 py-6 space-y-4 pb-24">
            {/* Tampilan Theme Toggle Segment */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider px-1">
                Tampilan
              </span>
              <ThemeToggle variant="menu" />
            </div>

            <div className="p-4 rounded-2xl bg-accent-tint border border-accent-line flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-accent shrink-0 shadow-xs">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-xs font-bold text-accent block">Menolong Dengan Hati.</span>
                <span className="text-[11px] text-ink-soft">Komunitas Bantuan Mahasiswa UPI</span>
              </div>
            </div>

            {/* Direct Order CTA Button */}
            {onOrderClick ? (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOrderClick();
                }}
                className="w-full py-3.5 px-5 rounded-full bg-[#E53935] hover:bg-[#B71C1C] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <WhatsAppIcon size={20} className="fill-white" />
                <span>Pesan Sekarang</span>
              </button>
            ) : (
              <a
                href="#pesan"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-5 rounded-full bg-[#E53935] hover:bg-[#B71C1C] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <WhatsAppIcon size={20} className="fill-white" />
                <span>Pesan Sekarang</span>
              </a>
            )}

            {/* Navigation links */}
            <div className="border-t border-line pt-3 space-y-1">
              <div className="text-[11px] font-bold text-ink-muted uppercase tracking-wider px-2 py-1">
                Navigasi Halaman
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold text-ink hover:text-accent hover:bg-surface-2 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-line text-xs text-ink-muted space-y-1">
              <p>Hotline WhatsApp: <strong className="text-ink">{WA_DISPLAY}</strong></p>
              <p>Instagram & TikTok: <strong className="text-ink">@upi.tolong</strong></p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
