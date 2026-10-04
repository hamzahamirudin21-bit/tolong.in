import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
  PARTNER_LOGOS,
  PartnerLogo,
  WA_NUMBER,
} from '../data/contentData';

interface PartnerLogoItemProps {
  partner: PartnerLogo;
}

const PartnerLogoItem: React.FC<PartnerLogoItemProps> = ({ partner }) => {
  const [hasError, setHasError] = useState(false);

  // Sumber URL: logoUrl diprioritaskan, kemudian Simple Icons CDN slug
  const logoUrl =
    partner.logoUrl ||
    (partner.slug ? `https://cdn.simpleicons.org/${partner.slug}` : undefined);

  // Jika URL tidak ada atau gagal dimuat, fallback ke teks nama merek polos tebal berwarna abu-abu
  if (!logoUrl || hasError) {
    return (
      <span
        tabIndex={0}
        aria-label={partner.name}
        className="font-extrabold text-neutral-400 dark:text-ink-muted hover:text-neutral-700 dark:hover:text-ink focus:text-neutral-700 dark:focus:text-ink text-lg sm:text-xl tracking-wider uppercase font-sans transition-colors select-none flex items-center h-8 sm:h-9 md:h-10 leading-none outline-hidden cursor-default"
      >
        {partner.name}
      </span>
    );
  }

  return (
    <img
      src={logoUrl}
      alt={partner.name}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
      tabIndex={0}
      className="h-7 sm:h-8 md:h-10 w-auto max-w-[130px] sm:max-w-[150px] md:max-w-[170px] object-contain filter grayscale opacity-65 hover:grayscale-0 hover:opacity-100 focus:grayscale-0 focus:opacity-100 dark:brightness-0 dark:invert dark:opacity-70 dark:hover:opacity-100 dark:focus:opacity-100 transition-all duration-300 select-none outline-hidden cursor-pointer"
    />
  );
};

export const CommunitySection: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const collabWaLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    'Halo Admin tolong.in! Kami dari (Organisasi Mahasiswa / Pelaku Usaha UMKM) ingin mengajak kolaborasi kemitraan bersama tolong.in. Boleh minta waktu untuk diskusi kak? Terima kasih!'
  )}`;

  return (
    <section className="py-16 md:py-24 bg-surface border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-accent-tint border border-accent-line text-xs font-semibold text-accent mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F2B705]" />
            <span>Ekosistem Kampus yang Hidup</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            Komunitas & Kolaborasi
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-soft">
            Terhubung bersama ribuan mahasiswa UPI, media kampus, dan pelaku usaha lokal di Bandung.
          </p>
        </div>

        {/* Media Sosial Cards (Instagram & TikTok) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          
          {/* Instagram Card */}
          <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 dark:from-[#2A141C] dark:via-[#241517] dark:to-[#26200F] rounded-3xl p-6 sm:p-8 border border-pink-200/80 dark:border-white/10 shadow-xs dark:shadow-none flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center font-extrabold text-base shadow-sm">
                  IG
                </div>
                <span className="text-xs font-bold text-pink-700 dark:text-pink-300 bg-white/80 dark:bg-white/10 py-1 px-3 rounded-full border border-pink-200 dark:border-white/10">
                  Instagram Resmi
                </span>
              </div>

              <h3 className="text-xl font-bold text-ink mb-1">
                {INSTAGRAM_HANDLE}
              </h3>
              <p className="text-xs text-ink-soft leading-relaxed mb-6">
                Update harian operasional kampus, info open recruitment runner, diskon jastip mingguan, dan konten seputar dinamika perkuliahan UPI.
              </p>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full bg-neutral-900 dark:bg-surface-2 dark:border dark:border-line hover:bg-[#E53935] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <span>Ikuti di Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* TikTok Card */}
          <div className="bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200/80 dark:from-[#1E1B1C] dark:via-[#191617] dark:to-[#221F20] rounded-3xl p-6 sm:p-8 border border-neutral-300 dark:border-white/10 shadow-xs dark:shadow-none flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center font-extrabold text-base shadow-sm">
                  TT
                </div>
                <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 bg-white dark:bg-white/10 py-1 px-3 rounded-full border border-neutral-300 dark:border-white/10">
                  TikTok Komunitas
                </span>
              </div>

              <h3 className="text-xl font-bold text-ink mb-1">
                {TIKTOK_HANDLE}
              </h3>
              <p className="text-xs text-ink-soft leading-relaxed mb-6">
                Keseruan di balik layar runner mengantar pesanan, rekomendasi kuliner hidden gems di Gegerkalong, dan tips praktis seputar kehidupan kosan.
              </p>
            </div>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full bg-neutral-900 dark:bg-surface-2 dark:border dark:border-line hover:bg-[#E53935] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <span>Ikuti di TikTok</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Marquee Logo Slider Mitra */}
        <div className="bg-[#F8F9FB] dark:bg-page rounded-3xl p-7 sm:p-10 border border-line overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block mb-1">
              Jejaring Kemitraan
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-ink">
              Berkolaborasi Bersama Ekosistem Kampus
            </h3>
            {/* TODO: Pastikan klaim 'pernah bekerja sama' sesuai kenyataan dan logo dipakai dengan izin merek terkait. */}
            <p className="text-xs sm:text-sm text-ink-soft mt-1">
              Mitra yang pernah bekerja sama dengan tolong.in
            </p>
          </div>

          {/* Marquee Container with Left-Right Edge Mask Fade */}
          <div
            className="relative w-full overflow-hidden py-4"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            {prefersReducedMotion ? (
              /* Reduced motion: tampilan logo statis dalam flex-wrap di tengah tanpa duplikasi */
              <ul
                className="flex flex-wrap items-center justify-center gap-12 sm:gap-16 py-2 list-none m-0 p-0"
                aria-label="Mitra tolong.in"
              >
                {PARTNER_LOGOS.map((partner) => (
                  <li key={partner.id} className="shrink-0 flex items-center justify-center">
                    <PartnerLogoItem partner={partner} />
                  </li>
                ))}
              </ul>
            ) : (
              /* Normal motion: infinite marquee loop halus */
              <div className="animate-partner-marquee flex w-max items-center">
                {/* Track 1: Daftar Asli */}
                <ul
                  className="flex items-center gap-14 sm:gap-16 md:gap-18 shrink-0 pr-14 sm:pr-16 md:pr-18 list-none m-0 p-0"
                  aria-label="Mitra tolong.in"
                >
                  {PARTNER_LOGOS.map((partner) => (
                    <li
                      key={`orig-${partner.id}`}
                      className="shrink-0 flex items-center justify-center"
                    >
                      <PartnerLogoItem partner={partner} />
                    </li>
                  ))}
                </ul>

                {/* Track 2: Salinan Duplikasi untuk Seamless Loop */}
                <ul
                  className="flex items-center gap-14 sm:gap-16 md:gap-18 shrink-0 pr-14 sm:pr-16 md:pr-18 list-none m-0 p-0"
                  aria-hidden="true"
                >
                  {PARTNER_LOGOS.map((partner) => (
                    <li
                      key={`dup-${partner.id}`}
                      className="shrink-0 flex items-center justify-center"
                    >
                      <PartnerLogoItem partner={partner} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Ajakan Kolaborasi Banner */}
          <div className="bg-surface rounded-2xl p-6 border border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mt-8">
            <div>
              <h4 className="text-sm font-bold text-ink">
                Punya UMKM di sekitar kampus atau organisasi mahasiswa yang ingin bekerja sama?
              </h4>
              <p className="text-xs text-ink-soft mt-0.5">
                Kami siap menjadi mitra logistik acara, kurir pesanan toko, atau saluran publikasi kegiatan positifmu.
              </p>
            </div>
            <a
              href={collabWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-bold transition-all shadow-xs whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ajak Kolaborasi ke WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
