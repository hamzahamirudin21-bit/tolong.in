import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Bike,
  Compass,
  GraduationCap,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Check,
  ShieldCheck,
  HelpCircle,
  LucideProps,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { SERVICES_LIST, PRICING_NOTE, WA_NUMBER, SERVICES_BG_URL } from '../data/contentData';
import { JastipIllustration } from './illustrations/JastipIllustration';
import { MobilitasIllustration } from './illustrations/MobilitasIllustration';
import { InformasiIllustration } from './illustrations/InformasiIllustration';
import { AkademikIllustration } from './illustrations/AkademikIllustration';
import { KhususIllustration } from './illustrations/KhususIllustration';
import { WhatsAppIcon } from './icons/BrandIcons';

const ICON_MAP: Record<string, React.FC<LucideProps>> = {
  ShoppingBag,
  Bike,
  Compass,
  GraduationCap,
  Sparkles,
};

const ILLUSTRATION_MAP: Record<string, React.FC<{ className?: string; detailed?: boolean }>> = {
  jastip: JastipIllustration,
  mobilitas: MobilitasIllustration,
  informasi: InformasiIllustration,
  akademik: AkademikIllustration,
  khusus: KhususIllustration,
};

const SHOWCASE_DATA: Record<
  string,
  {
    customerMsg: string;
    adminReply: string;
    chips: [string, string, string];
    highlightBadge: string;
    samplePrice: string;
  }
> = {
  jastip: {
    customerMsg: 'Halo admin Tolong.in! Mau titip dimsum gerbang UPI 2 porsi sama es teh manis ke kosan Gerlong Girang ya kak 🥟🥤',
    adminReply: 'Halo kak! Siap, total makanan 30rb & ongkir jasa disepakati ya. Runner standby di gerbang langsung meluncur 🛵💨',
    chips: ['Harga disepakati dulu', 'Runner dekat lokasimu', 'Bayar setelah selesai'],
    highlightBadge: 'Paling Sering Dipesan Mahasiswa',
    samplePrice: 'Mulai 3rb - 8rb (Sesuai Jarak)',
  },
  mobilitas: {
    customerMsg: 'Min, ada runner motor standby di depan FPBS sekarang? Mau anjem ke stasiun/kosan nih 🛵',
    adminReply: 'Ada kak! Runner Iqbal merapat 3 menit lagi pakai jaket merah helm hitam. Nanti bayar QRIS beres ya 👍',
    chips: ['Runner mahasiswa berhelm', 'Bisa bantu angkut kos', 'Tarif transparan di awal'],
    highlightBadge: 'Antar Cepat Bebas Macet',
    samplePrice: 'Tarif Terjangkau Kantong Kosan',
  },
  informasi: {
    customerMsg: 'Kak, aku masih di luar kota. Bisa tolong survei kos putri di Jl. Geger Asih? Cek air & sinyalnya dong 🔍',
    adminReply: 'Bisa banget kak! Runner kami ke lokasi jam 14.00, nanti dikirimi video walkthrough 360° & checklist detail 📹✨',
    chips: ['Foto & video 360° riil', 'Cek air & sinyal kamar', 'Informasi netral & jujur'],
    highlightBadge: 'Mata & Telingamu di Kampus',
    samplePrice: 'Laporan Lengkap & Transparan',
  },
  akademik: {
    customerMsg: 'Halo min, lagi butuh 25 responden mahasiswa FIP buat kuesioner skripsi, bisa bantu sebar & koordinasi? 📊',
    adminReply: 'Tentu kak! Kami bantu sebar ke jaringan lingkar kampus yang valid hari ini juga dengan target tepat 🎓',
    chips: ['Bantu responden riset', 'Bimbel mata kuliah', 'Dukungan sesama akademisi'],
    highlightBadge: 'Dukungan Akademik & Riset',
    samplePrice: 'Gotong Royong Sesama Mahasiswa',
  },
  khusus: {
    customerMsg: 'Kak, butuh 2 orang runner buat bantu jaga stan expo pameran di Gymnasium UPI besok pagi jam 08.00 🎪',
    adminReply: 'Siap kak! Kami siapkan 2 runner terpercaya berseragam rapi, on-time, dan siap bantu operasional stan kamu 🤝',
    chips: ['Kebutuhan fleksibel', 'Tenaga mahasiswa sigap', 'SOP ramah & terpercaya'],
    highlightBadge: 'Permintaan Khusus Serba Bisa',
    samplePrice: 'Kesepakatan Fleksibel & Wajar',
  },
};

interface ServicesSectionProps {
  onOrderClick?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOrderClick }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [bgLoaded, setBgLoaded] = useState(true);
  const [displayedReply, setDisplayedReply] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const filteredList =
    selectedFilter === 'all'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.id === selectedFilter);

  const activeService =
    selectedFilter !== 'all'
      ? SERVICES_LIST.find((s) => s.id === selectedFilter)
      : null;

  const currentShowcase = activeService ? SHOWCASE_DATA[activeService.id] : null;

  // Efek simulasi ketik (typing effect) admin reply
  useEffect(() => {
    if (!currentShowcase) return;

    setDisplayedReply('');
    setIsTyping(true);

    const fullText = currentShowcase.adminReply;
    let idx = 0;

    const timer = setInterval(() => {
      idx++;
      setDisplayedReply(fullText.slice(0, idx));
      if (idx >= fullText.length) {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [selectedFilter, currentShowcase]);

  const getWaLink = (template: string) => {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(template)}`;
  };

  return (
    <section id="layanan" className="relative py-16 md:py-24 bg-page border-b border-line overflow-hidden">
      
      {/* Photo Latar Kampus UPI dengan Gaya Transparan + Filter */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <img
          src={SERVICES_BG_URL}
          alt=""
          loading="lazy"
          onError={() => setBgLoaded(false)}
          onLoad={() => setBgLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 dark:brightness-[.6] ${
            bgLoaded ? 'opacity-[0.12]' : 'opacity-0'
          }`}
          style={{
            filter: 'saturate(0.3) blur(2px) contrast(1.1)',
          }}
        />
        {/* Brand Overlay Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-page via-page/90 to-page" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-accent-tint border border-accent-line text-xs font-semibold text-accent mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#F2B705]" />
            <span>Katalog Bantuan Mahasiswa UPI Bandung</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            Layanan Serba Ada, Tanpa Perlu Aplikasi
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-soft">
            Dikerjakan oleh runner sesama mahasiswa UPI yang terpercaya, sopan, dan sigap membantu kebutuhan harianmu.
          </p>
        </div>

        {/* Pricing Note Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-2xl bg-gold-tint backdrop-blur-xs border border-gold-line flex items-center justify-center gap-3 text-center shadow-2xs">
          <ShieldCheck className="w-5 h-5 text-gold-ink shrink-0" />
          <p className="text-xs sm:text-sm font-semibold text-gold-ink">
            {PRICING_NOTE}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1 bg-neutral-200/80 dark:bg-white/10 backdrop-blur-xs rounded-full gap-1 shadow-inner border border-transparent dark:border-line">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`py-2 px-4 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedFilter === 'all'
                  ? 'bg-[#E53935] text-white shadow-sm'
                  : 'text-neutral-700 dark:text-ink-soft hover:text-neutral-900 dark:hover:text-ink'
              }`}
            >
              Semua Layanan (5)
            </button>
            {SERVICES_LIST.map((svc) => (
              <button
                key={svc.id}
                type="button"
                onClick={() => setSelectedFilter(svc.id)}
                className={`py-2 px-4 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedFilter === svc.id
                    ? 'bg-[#E53935] text-white shadow-sm'
                    : 'text-neutral-700 dark:text-ink-soft hover:text-neutral-900 dark:hover:text-ink'
                }`}
              >
                {svc.name}
              </button>
            ))}
          </div>
        </div>

        {/* CONDITION 1: Single Service Filter Selected -> 2-COLUMN SHOWCASE LAYOUT */}
        {selectedFilter !== 'all' && activeService && currentShowcase ? (
          <div className="transition-all duration-500 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Kolom Kiri: Kartu Layanan (5 Cols di Desktop) */}
              <div className="lg:col-span-5">
                {(() => {
                  const Icon = ICON_MAP[activeService.iconName] || HelpCircle;
                  const IllustrationComp = ILLUSTRATION_MAP[activeService.illustration] || JastipIllustration;
                  return (
                    <div className="bg-surface rounded-3xl p-6 sm:p-7 border-2 border-accent/30 dark:border-accent-line shadow-xl dark:shadow-none flex flex-col justify-between group overflow-hidden relative">
                      {/* Active Tag */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="text-[11px] font-bold text-white bg-[#E53935] py-1 px-3 rounded-full shadow-xs flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F2B705] animate-ping" />
                          Layanan Terpilih
                        </span>
                      </div>

                      <div>
                        {/* Top 160px Illustration Header */}
                        <div className="w-full h-[160px] rounded-2xl overflow-hidden mb-5 border border-line relative bg-surface-2 shadow-inner mt-6">
                          <IllustrationComp className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute top-3 right-3 z-10">
                            <span className="text-[10px] font-bold text-[#B71C1C] dark:text-accent bg-surface/95 backdrop-blur-xs border border-accent-line py-1 px-2.5 rounded-full shadow-xs">
                              {activeService.tagline}
                            </span>
                          </div>
                          <div className="absolute bottom-2.5 left-3 z-10 w-9 h-9 rounded-xl bg-surface/95 backdrop-blur-xs text-accent flex items-center justify-center shadow-md border border-line">
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-ink mb-2">
                          {activeService.name}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mb-5">
                          {activeService.desc}
                        </p>

                        {/* Examples Checklist */}
                        <div className="space-y-2.5 pt-4 border-t border-line mb-6">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block mb-1">
                            Contoh yang Sering Dibantu:
                          </span>
                          {activeService.examples.map((ex, exIdx) => (
                            <div key={exIdx} className="flex items-start gap-2.5 text-xs text-ink-soft">
                              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-snug">{ex}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* WhatsApp Button */}
                      <div className="pt-2">
                        <a
                          href={getWaLink(activeService.waTemplate)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3.5 px-5 rounded-full bg-[#E53935] hover:bg-[#B71C1C] text-white font-bold text-sm transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg cursor-pointer active:scale-98"
                        >
                          <WhatsAppIcon size={18} className="fill-white" />
                          <span>Pesan {activeService.name} via WA</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Kolom Kanan: PANEL SHOWCASE (7 Cols di Desktop) */}
              <div className="lg:col-span-7 bg-surface rounded-3xl p-6 sm:p-8 border border-line shadow-lg dark:shadow-none space-y-6">
                
                {/* Header Showcase: Badge & Highlight */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-line">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F2B705] shadow-xs" />
                    <span className="text-xs font-bold text-ink uppercase tracking-wide">
                      Showcase Interaktif: {activeService.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-accent bg-accent-tint border border-accent-line py-1 px-3 rounded-full">
                    {currentShowcase.highlightBadge}
                  </span>
                </div>

                {/* A. Ilustrasi SVG Beranimasi Besar */}
                <div className="w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-line relative bg-gradient-to-br from-[#FFF9EB] via-[#FDECEC] to-white dark:from-[#262017] dark:via-[#241718] dark:to-[#1C1819] shadow-inner flex items-center justify-center p-2">
                  {(() => {
                    const DetailedComp = ILLUSTRATION_MAP[activeService.illustration] || JastipIllustration;
                    return (
                      <div className="w-full h-full relative flex items-center justify-center">
                        <DetailedComp detailed={true} className="w-full h-full object-contain drop-shadow-sm" />
                        {/* Pulsing Pin / Marker indicator */}
                        <div className="absolute top-4 right-4 bg-surface/95 backdrop-blur-xs py-1.5 px-3 rounded-full shadow-md border border-line flex items-center gap-2 text-xs font-semibold text-ink">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Runner Siap di UPI</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* B. Mockup Bubble Chat WhatsApp dengan Typing Effect */}
                <div className="rounded-2xl bg-[#EFEAE2] dark:bg-wa-canvas p-4 sm:p-5 border border-[#DDD6CC] dark:border-line space-y-3.5 shadow-inner">
                  <div className="flex items-center justify-between text-[11px] text-neutral-600 dark:text-ink-muted font-medium px-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Simulasi Chat Langsung Admin Tolong.in</span>
                    </div>
                    <span className="text-neutral-500 dark:text-ink-muted">WhatsApp Official</span>
                  </div>

                  {/* Customer Chat Bubble (Right-aligned) */}
                  <div className="flex justify-end">
                    <div className="bg-[#E7FFDB] dark:bg-[#005C4B] text-neutral-900 dark:text-wa-ink rounded-2xl rounded-tr-xs p-3 sm:p-3.5 max-w-[85%] text-xs sm:text-sm shadow-xs border border-[#CDEEB7] dark:border-transparent leading-relaxed">
                      <p className="font-sans">{currentShowcase.customerMsg}</p>
                      <div className="text-right text-[10px] text-neutral-500 dark:text-emerald-200/80 mt-1 flex items-center justify-end gap-1">
                        <span>14.02</span>
                        <span className="text-[#34B7F1]">✓✓</span>
                      </div>
                    </div>
                  </div>

                  {/* Admin Reply Bubble with Live Typing Effect (Left-aligned) */}
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-wa-bubble text-neutral-900 dark:text-wa-ink rounded-2xl rounded-tl-xs p-3 sm:p-3.5 max-w-[85%] text-xs sm:text-sm shadow-xs border border-neutral-200/80 dark:border-line leading-relaxed">
                      <div className="font-bold text-[11px] text-accent mb-0.5">Admin Tolong.in UPI</div>
                      <p className="font-sans inline">
                        {displayedReply}
                        {isTyping && (
                          <span className="inline-block w-1.5 h-3.5 bg-accent ml-1 animate-pulse align-middle" />
                        )}
                      </p>
                      <div className="text-right text-[10px] text-neutral-400 dark:text-ink-muted mt-1">
                        14.03
                      </div>
                    </div>
                  </div>
                </div>

                {/* C. 3 Chip Info Singkat */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {currentShowcase.chips.map((chip, cIdx) => (
                    <div
                      key={cIdx}
                      className="bg-page rounded-xl p-3 border border-line flex items-center gap-2.5 text-xs font-semibold text-ink shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span className="leading-snug">{chip}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Prompt */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-red-50 to-amber-50 dark:from-accent-tint dark:to-gold-tint p-4 rounded-2xl border border-accent-line">
                  <div className="text-xs text-ink-soft">
                    <span className="font-bold text-ink block">Ingin pesan layanan ini sekarang?</span>
                    Admin standby membalas dalam hitungan menit tanpa bot kaku.
                  </div>
                  {onOrderClick ? (
                    <button
                      type="button"
                      onClick={onOrderClick}
                      className="py-2.5 px-5 rounded-full bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2 whitespace-nowrap cursor-pointer active:scale-95 shrink-0"
                    >
                      <Send className="w-3.5 h-3.5 fill-white" />
                      <span>Pesan Sekarang</span>
                    </button>
                  ) : (
                    <a
                      href="#pesan"
                      className="py-2.5 px-5 rounded-full bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2 whitespace-nowrap cursor-pointer active:scale-95 shrink-0"
                    >
                      <Send className="w-3.5 h-3.5 fill-white" />
                      <span>Pesan Sekarang</span>
                    </a>
                  )}
                </div>

              </div>

            </div>
          </div>
        ) : (
          /* CONDITION 2: All 5 Services Grid (Normal 3 Columns) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-300">
            {filteredList.map((svc) => {
              const Icon = ICON_MAP[svc.iconName] || HelpCircle;
              const IllustrationComp = ILLUSTRATION_MAP[svc.illustration] || JastipIllustration;
              return (
                <div
                  key={svc.id}
                  className="bg-surface rounded-3xl p-5 sm:p-6 border border-line hover:border-accent/40 shadow-xs dark:shadow-none hover:shadow-xl dark:hover:shadow-none hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Top 150px Illustration Header */}
                    <div className="w-full h-[150px] rounded-2xl overflow-hidden mb-5 border border-line relative bg-surface-2 shadow-inner">
                      <IllustrationComp className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      
                      {/* Tagline Pill (Top Right) */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="text-[10px] font-bold text-[#B71C1C] dark:text-accent bg-surface/95 backdrop-blur-xs border border-accent-line py-1 px-2.5 rounded-full shadow-xs">
                          {svc.tagline}
                        </span>
                      </div>

                      {/* Service Icon Badge (Bottom Left) */}
                      <div className="absolute bottom-2.5 left-3 z-10 w-9 h-9 rounded-xl bg-surface/95 backdrop-blur-xs text-accent flex items-center justify-center shadow-md border border-line group-hover:bg-[#E53935] group-hover:text-white transition-colors">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors mb-2">
                      {svc.name}
                    </h3>

                    {/* One-Sentence Description */}
                    <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mb-5">
                      {svc.desc}
                    </p>

                    {/* Examples Checklist */}
                    <div className="space-y-2 pt-4 border-t border-line mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block mb-1">
                        Contoh yang Sering Dibantu:
                      </span>
                      {svc.examples.map((ex, exIdx) => (
                        <div key={exIdx} className="flex items-start gap-2 text-xs text-ink-soft">
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{ex}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Order Button for this specific service */}
                  <div className="pt-2">
                    {onOrderClick ? (
                      <button
                        type="button"
                        onClick={onOrderClick}
                        className="w-full py-3 px-4 rounded-full bg-neutral-900 dark:bg-surface-2 dark:border dark:border-line group-hover:bg-[#E53935] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Pesan Sekarang</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <a
                        href="#pesan"
                        className="w-full py-3 px-4 rounded-full bg-neutral-900 dark:bg-surface-2 dark:border dark:border-line group-hover:bg-[#E53935] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Pesan Sekarang</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Quick Anchor Link to Quick Order Form */}
        <div className="mt-12 text-center">
          <p className="text-xs text-ink-muted mb-2">Mau menyusun rincian pesananmu lebih rapi dulu?</p>
          <a
            href="#form-pesan"
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full border border-line-strong hover:border-accent text-ink hover:text-accent text-xs font-semibold bg-surface transition-colors shadow-2xs"
          >
            <span>Buka Form Pemesanan Tolong.in di Bawah</span>
            <span>↓</span>
          </a>
        </div>

      </div>
    </section>
  );
};
