import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, ShieldCheck, QrCode, CheckCheck } from 'lucide-react';
import { WA_LINK, BRAND_SLOGAN, BRAND_TAGLINE, HERO_BG_URL } from '../data/contentData';
import { TolongInLogo } from './TolongInLogo';
import { WhatsAppIcon } from './icons/BrandIcons';

export const Hero: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 10 Staggered Gold Particles rising gently
  const particles = [
    { left: '8%', delay: '0s', duration: '7s', size: 'w-2 h-2' },
    { left: '18%', delay: '2.5s', duration: '9s', size: 'w-1.5 h-1.5' },
    { left: '28%', delay: '1s', duration: '8s', size: 'w-2.5 h-2.5' },
    { left: '38%', delay: '4s', duration: '10s', size: 'w-1.5 h-1.5' },
    { left: '48%', delay: '1.8s', duration: '7.5s', size: 'w-2 h-2' },
    { left: '62%', delay: '3.2s', duration: '8.5s', size: 'w-2.5 h-2.5' },
    { left: '72%', delay: '0.5s', duration: '9.5s', size: 'w-1.5 h-1.5' },
    { left: '82%', delay: '4.5s', duration: '8s', size: 'w-2 h-2' },
    { left: '90%', delay: '2s', duration: '7s', size: 'w-1.5 h-1.5' },
    { left: '95%', delay: '5s', duration: '9s', size: 'w-2 h-2' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#B71C1C] dark:bg-gradient-to-b dark:from-[#5A0F0F] dark:to-[#240808] text-white pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 min-h-[640px] flex items-center">
      
      {/* 0. Photo Latar Kampus UPI Bandung (Gedung Isola / Bumi Siliwangi) dengan Filter & Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <img
          src={HERO_BG_URL}
          alt=""
          loading="eager"
          onError={() => setImgLoaded(false)}
          onLoad={() => setImgLoaded(true)}
          className={`absolute inset-0 w-full h-[125%] object-cover object-center transition-opacity duration-700 dark:brightness-[.6] ${
            imgLoaded ? 'opacity-20' : 'opacity-0'
          }`}
          style={{
            transform: `translateY(${Math.min(scrollY * 0.18, 90)}px) scale(1.04)`,
            filter: 'saturate(0.4) contrast(1.1) blur(1px)',
          }}
        />
        {/* Brand Overlay Tint (Gradasi Merah - Krem/Emas Halus) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#B71C1C]/80 via-[#D32F2F]/75 to-[#4A0E0E]/90 dark:from-[#5A0F0F]/80 dark:via-[#3E0A0A]/75 dark:to-[#240808]/90 mix-blend-multiply" />
        
        {/* Mask gradient memudar halus ke warna background */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#B71C1C] via-[#B71C1C]/70 to-transparent dark:from-[#240808] dark:via-[#240808]/70" />
      </div>

      {/* 1. Animated Mesh Gradient Layer (4-5 Large Blurred Blobs moving in smooth loop) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Blob 1: Bright Red (#E53935) Top Left */}
        <div
          className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full bg-[#E53935] opacity-85 dark:opacity-50 blur-[90px] animate-hero-blob-1"
        />

        {/* Blob 2: Primary Red (#D32F2F) Center */}
        <div
          className="absolute top-1/4 left-1/3 w-[550px] h-[550px] rounded-full bg-[#D32F2F] opacity-75 dark:opacity-45 blur-[100px] animate-hero-blob-2"
        />

        {/* Blob 3: Deep Red (#B71C1C) Top Right */}
        <div
          className="absolute -top-10 right-0 w-[500px] h-[500px] rounded-full bg-[#B71C1C] opacity-80 dark:opacity-50 blur-[85px] animate-hero-blob-3"
        />

        {/* Blob 4: Soft Gold Accent (#F2B705) Low Opacity Drift */}
        <div
          className="absolute top-1/3 right-1/4 w-[360px] h-[360px] rounded-full bg-[#F2B705] opacity-20 dark:opacity-12 blur-[110px] animate-hero-blob-4"
        />

        {/* Blob 5: Dark Red (#4A0E0E) Bottom Corner */}
        <div
          className="absolute -bottom-24 -right-24 w-[600px] h-[600px] rounded-full bg-[#4A0E0E] opacity-90 dark:opacity-55 blur-[100px] animate-hero-blob-5"
        />

        {/* Fine Subtle Geometric Grid / Line Texture */}
        <div
          className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:44px_44px]"
        />

        {/* 2. Floating Golden Particles (Rising slowly) */}
        <div className="absolute inset-x-0 bottom-0 top-1/2 overflow-hidden pointer-events-none">
          {particles.map((p, idx) => (
            <span
              key={idx}
              className={`absolute bottom-0 rounded-full bg-[#F2B705] shadow-[0_0_8px_#F2B705] pointer-events-none ${p.size}`}
              style={{
                left: p.left,
                animation: `particle-rise ${p.duration} ease-in-out infinite`,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Trust Chips & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Campus Pilot Badge with Gold Dot */}
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F2B705] shadow-xs shadow-[#F2B705]" />
              <span>Pilot Project: Kawasan UPI Bandung & Kos Sekitarnya</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.14] text-balance drop-shadow-xs">
              Lagi sibuk? <br />
              <span className="text-white">Biar kami yang </span>
              <span className="text-[#F2B705] relative inline-block">
                tolong.
                <span className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-[#F2B705]/50 rounded-full" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed drop-shadow-xs">
              Jasa titip, antar-jemput, survei kos, sampai urusan kampus. Dikerjakan runner mahasiswa terlatih. Tanpa download aplikasi, cukup chat.
            </p>

            {/* Trust Chips (Clean metadata separated by dots) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs text-white/95 font-medium">
              <span className="bg-black/20 backdrop-blur-xs border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs">
                <Heart className="w-3.5 h-3.5 fill-[#F2B705] text-[#F2B705]" />
                Dari mahasiswa, untuk mahasiswa
              </span>
              <span className="bg-black/20 backdrop-blur-xs border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F2B705]" />
                Dikerjakan sesuai SOP
              </span>
              <span className="bg-black/20 backdrop-blur-xs border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs">
                <QrCode className="w-3.5 h-3.5 text-[#F2B705]" />
                Bayar via QRIS
              </span>
            </div>

            {/* Dual CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary: Pesan via WhatsApp */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-neutral-100 active:scale-98 text-[#B71C1C] font-extrabold text-base shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2.5 group"
              >
                <WhatsAppIcon size={20} className="fill-[#25D366]" />
                <span>Pesan via WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#B71C1C] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary: Lihat Layanan */}
              <a
                href="#layanan"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-white hover:bg-white hover:text-[#B71C1C] text-white font-bold text-base transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Lihat Layanan</span>
              </a>
            </div>

            {/* Motto tagline */}
            <div className="pt-2 text-xs text-white/85 flex items-center justify-center lg:justify-start gap-2">
              <span className="font-semibold text-white">#MenolongDenganHati</span>
              <span>·</span>
              <span>{BRAND_SLOGAN}</span>
            </div>

          </div>

          {/* Right Column: Floating CSS WhatsApp Chat Mockup */}
          <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0 animate-hero-float">
            
            {/* Decorative Gold Floating Dots */}
            <div className="absolute -top-3 left-6 w-3.5 h-3.5 rounded-full bg-[#F2B705] shadow-lg shadow-[#F2B705] animate-pulse" />
            <div className="absolute top-1/2 -left-6 w-3 h-3 rounded-full bg-[#F2B705] shadow-md shadow-[#F2B705]/60" />
            <div className="absolute -bottom-4 right-10 w-4 h-4 rounded-full bg-[#F2B705] shadow-lg shadow-[#F2B705]" />

            {/* Floating Mini Card 1: Top Right */}
            <div className="hidden sm:flex absolute -top-5 -right-4 z-20 bg-white dark:bg-surface text-neutral-900 dark:text-ink py-2 px-3.5 rounded-2xl shadow-xl dark:shadow-none border border-neutral-100 dark:border-line items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0">
                ✓
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-neutral-900 dark:text-ink">Pesanan Masuk</div>
                <div className="text-[10px] text-neutral-500 dark:text-ink-muted">Dimsum Gerbang Baru UPI</div>
              </div>
            </div>

            {/* Floating Mini Card 2: Bottom Left */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 z-20 bg-white dark:bg-surface text-neutral-900 dark:text-ink py-2.5 px-3.5 rounded-2xl shadow-xl dark:shadow-none border border-neutral-100 dark:border-line items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FDECEC] dark:bg-accent-tint text-[#D32F2F] dark:text-accent flex items-center justify-center text-xs font-bold shrink-0">
                RM
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-neutral-900 dark:text-ink">Runner Mahasiswa</div>
                <div className="text-[10px] text-neutral-500 dark:text-ink-muted">Fahmi (FPEB) • Siap Bantu</div>
              </div>
            </div>

            {/* WhatsApp Chat Window Container */}
            <div className="w-full max-w-[340px] sm:max-w-[360px] bg-[#075E54] dark:bg-[#121B22] rounded-3xl shadow-2xl dark:shadow-none overflow-hidden border-2 border-white/20 dark:border-line text-neutral-900">
              
              {/* WhatsApp Header */}
              <div className="bg-[#128C7E] dark:bg-[#1F2C34] px-4 py-3 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <TolongInLogo size={32} />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#128C7E] dark:border-[#1F2C34]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight flex items-center gap-1">
                      <span>tolong.in Admin (UPI)</span>
                      <span className="text-[9px] bg-white/20 py-0.2 px-1 rounded text-white">Resmi</span>
                    </div>
                    <div className="text-[10px] text-emerald-100 leading-tight">
                      online · membalas seketika
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-white">
                  <WhatsAppIcon size={16} className="fill-white" />
                  <span className="text-[10px] uppercase font-bold text-emerald-200">
                    WhatsApp
                  </span>
                </div>
              </div>

              {/* Chat Body (WhatsApp subtle background color) */}
              <div className="bg-[#ECE5DD] dark:bg-wa-canvas p-3.5 space-y-2.5 min-h-[310px] text-xs relative">
                
                {/* Time stamp indicator */}
                <div className="text-center">
                  <span className="text-[9px] bg-white/70 dark:bg-wa-bubble/80 text-neutral-600 dark:text-ink-muted px-2 py-0.5 rounded-full font-medium shadow-2xs">
                    HARI INI
                  </span>
                </div>

                {/* Message 1 (Customer - Right: Form Pemesanan Tolong.in) */}
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] dark:bg-[#005C4B] text-neutral-800 dark:text-[#E9EDEF] p-2.5 rounded-xl rounded-tr-xs shadow-2xs max-w-[90%] text-left text-[11px]">
                    <div className="font-bold text-[10px] text-neutral-900 dark:text-white border-b border-emerald-300 dark:border-[#007A65] pb-1 mb-1.5 leading-tight">
                      FORM PEMESANAN TOLONG.IN
                      <span className="block font-normal text-[9px] text-neutral-600 dark:text-emerald-100/70">Menolong Dengan Hati</span>
                    </div>
                    <div className="space-y-0.5 text-[10.5px]">
                      <div><span className="font-medium text-neutral-700 dark:text-emerald-100">Nama:</span> mamat</div>
                      <div><span className="font-medium text-neutral-700 dark:text-emerald-100">Mau ditolong apa:</span> beliin indomie 2 bungkus</div>
                      <div><span className="font-medium text-neutral-700 dark:text-emerald-100">Deadline:</span> secepatnya aja</div>
                      <div><span className="font-medium text-neutral-700 dark:text-emerald-100">Tujuan:</span> kpad gerlong</div>
                      <div><span className="font-medium text-neutral-700 dark:text-emerald-100">Aku mau bayar jasa ini:</span> 1rb</div>
                    </div>
                    <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-neutral-500 dark:text-emerald-200/80">
                      <span>11:42</span>
                      <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
                    </div>
                  </div>
                </div>

                {/* Message 2 (Admin - Left: Response) */}
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-wa-bubble text-neutral-800 dark:text-wa-ink p-2.5 rounded-xl rounded-tl-xs shadow-2xs max-w-[88%] text-left text-[11px]">
                    <p className="leading-snug">
                      Halo Kak Mamat! Siap, total harga dan ongkos jasa sudah disepakati ya. Runner kami (Kak Fahmi) langsung otw beliin indomie-nya yaa 🛵✨
                    </p>
                    <div className="flex items-center justify-end mt-1 text-[9px] text-neutral-400 dark:text-ink-muted">
                      <span>11:43</span>
                    </div>
                  </div>
                </div>

                {/* Status Capsule: Runner Menuju Lokasi */}
                <div className="pt-1 flex justify-center">
                  <div className="inline-flex items-center gap-1.5 bg-[#D32F2F] text-white text-[10px] font-bold py-1 px-3 rounded-full shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F2B705] animate-ping" />
                    <span>Runner sedang menuju lokasi ⚡</span>
                  </div>
                </div>

                {/* Watermark Label "ilustrasi" */}
                <div className="text-center pt-1">
                  <span className="text-[9px] text-neutral-400 dark:text-ink-muted italic">
                    (ilustrasi obrolan pemesanan WhatsApp)
                  </span>
                </div>

              </div>

              {/* Chat Bottom Bar Simulation */}
              <div className="bg-[#F0F0F0] dark:bg-[#1F2C34] px-3 py-2 flex items-center justify-between border-t border-neutral-200 dark:border-line">
                <span className="text-[11px] text-neutral-400 dark:text-ink-muted">Ketik pesan untuk admin...</span>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="Kirim pesan di WhatsApp"
                >
                  <WhatsAppIcon size={16} className="fill-white" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
