import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ArrowUpRight } from 'lucide-react';
import { TolongInLogo } from './TolongInLogo';
import { WhatsAppIcon } from './icons/BrandIcons';
import { WA_LINK, WA_DISPLAY, BRAND_TAGLINE } from '../data/contentData';

export const Navbar: React.FC = () => {
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-2.5 text-neutral-800'
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
                  ? 'text-neutral-500 border-neutral-200'
                  : 'text-white/80 border-white/20'
              }`}
            >
              UPI Bandung · <span className={isScrolled ? 'text-[#D32F2F] font-semibold' : 'text-[#F2B705] font-semibold'}>{BRAND_TAGLINE}</span>
            </span>
          </a>

          {/* Center: Desktop Navigation Anchor Links */}
          <nav
            className={`hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium transition-colors ${
              isScrolled ? 'text-neutral-700' : 'text-white/90'
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
                    ? 'hover:text-[#D32F2F] decoration-[#D32F2F]'
                    : 'hover:text-white decoration-[#F2B705]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Pill Button Pesan via WhatsApp */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
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
              <span>Pesan via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right: Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
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
              <span>Chat WA</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled
                  ? 'text-neutral-700 hover:bg-neutral-100'
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
        <div className="lg:hidden fixed inset-0 top-[60px] z-50 bg-white text-neutral-900 overflow-y-auto animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="px-5 py-6 space-y-4 pb-24">
            <div className="p-4 rounded-2xl bg-[#FDECEC] border border-red-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D32F2F] shrink-0 shadow-xs">
                <Heart className="w-5 h-5 fill-[#D32F2F]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#B71C1C] block">Menolong Dengan Hati.</span>
                <span className="text-[11px] text-neutral-600">Komunitas Bantuan Mahasiswa UPI</span>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2.5"
            >
              <WhatsAppIcon size={20} className="fill-white" />
              <span>Pesan Sekarang via WhatsApp</span>
            </a>

            {/* Navigation links */}
            <div className="border-t border-neutral-100 pt-3 space-y-1">
              <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider px-2 py-1">
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
                  className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold text-neutral-800 hover:text-[#D32F2F] hover:bg-neutral-50 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-300" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-100 text-xs text-neutral-500 space-y-1">
              <p>Hotline WhatsApp: <strong className="text-neutral-800">{WA_DISPLAY}</strong></p>
              <p>Instagram & TikTok: <strong className="text-neutral-800">@upi.tolong</strong></p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
