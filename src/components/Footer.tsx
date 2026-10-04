import React from 'react';
import { MessageCircle, Heart, Clock, ArrowUpRight } from 'lucide-react';
import { TolongInLogo } from './TolongInLogo';
import {
  WA_DISPLAY,
  WA_LINK,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
  PARTNER_HANDLE,
  PARTNER_URL,
  BRAND_TAGLINE,
  BRAND_SLOGAN,
  BRAND_HASHTAG,
  OPERATIONAL_HOURS,
  PHOTO_CREDIT,
} from '../data/contentData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-white pt-16 pb-12 border-t border-[#601414] dark:border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <TolongInLogo size={40} showWordmark={true} wordmarkColor="white" />
            </div>

            <p className="text-base font-bold text-[#F2B705] flex items-center gap-2">
              <Heart className="w-4 h-4 fill-[#F2B705]" />
              <span>{BRAND_TAGLINE}</span>
            </p>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm">
              {BRAND_SLOGAN} Ekosistem layanan on-demand berbasis komunitas mahasiswa di kawasan Universitas Pendidikan Indonesia (UPI) Bandung.
            </p>

            <div className="pt-2 text-xs text-neutral-400">
              <span className="font-semibold text-white">Fase Pilot:</span> UPI Bumi Siliwangi, Setiabudi, Gegerkalong, Ledeng, Isola & kos sekitarnya.
            </div>
          </div>

          {/* Kolom Navigasi Layanan (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F2B705]">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Jasa Titip (Jastip) Makanan & Barang
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Mobilitas & Antar-Jemput (Anjem)
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Helper & Bantuan Pindahan Kos
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Informasi & Survei Kosan Lapangan
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Bimbingan Akademik & Responden Riset
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Layanan Khusus & Kebutuhan Unik
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom Kontak & Jam Operasional (Span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F2B705]">
              Kontak & Operasional
            </h4>
            
            <div className="space-y-2.5 text-xs text-neutral-200">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp:</span>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#F2B705] transition-colors underline decoration-white/40"
                >
                  {WA_DISPLAY}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-xs bg-pink-500 text-white flex items-center justify-center text-[9px] font-bold shrink-0">
                  IG
                </span>
                <span>Instagram:</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#F2B705] transition-colors"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-xs bg-black text-white flex items-center justify-center text-[9px] font-bold shrink-0">
                  TT
                </span>
                <span>TikTok:</span>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#F2B705] transition-colors"
                >
                  {TIKTOK_HANDLE}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-xs bg-amber-500 text-white flex items-center justify-center text-[9px] font-bold shrink-0">
                  P
                </span>
                <span>Partner Resmi:</span>
                <a
                  href={PARTNER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#F2B705] transition-colors"
                >
                  {PARTNER_HANDLE}
                </a>
              </div>

              {/* Jam Operasional */}
              <div className="pt-2 flex items-start gap-2 text-neutral-300">
                <Clock className="w-4 h-4 text-[#F2B705] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Jam Operasional:</span>
                  <span>{OPERATIONAL_HOURS}</span>
                  {/* // TODO: Konfirmasi jam operasional resmi sebelum publikasi */}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="space-y-1 text-center sm:text-left">
            <div>
              <span>© 2026 Tolong.in. {BRAND_HASHTAG}</span>
            </div>
            <div className="text-[11px] text-neutral-400/80">
              {PHOTO_CREDIT}
            </div>
          </div>

          <div className="flex items-center gap-4 text-neutral-300">
            <a href="#cara-kerja" className="hover:text-white transition-colors">
              Cara Kerja
            </a>
            <span>•</span>
            <a href="#kenapa-kami" className="hover:text-white transition-colors">
              SOP & Keamanan
            </a>
            <span>•</span>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
