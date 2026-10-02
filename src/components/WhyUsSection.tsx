import React, { useState } from 'react';
import {
  Heart,
  Sparkles,
  Shield,
  Lock,
  MessageCircle,
  GraduationCap,
  Wallet,
  FileCheck,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Check,
} from 'lucide-react';
import { BRAND_HASHTAG } from '../data/contentData';

// Micro-illustration 1: Perisai Harga Terkunci
const ShieldLockedSvg = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
    <path d="M32 6 L52 14 V32 C52 44 42 54 32 58 C22 54 12 44 12 32 V14 Z" fill="#FDECEC" stroke="#E53935" strokeWidth="2.5" />
    <circle cx="32" cy="30" r="8" fill="#F2B705" stroke="#C99700" strokeWidth="1.5" />
    <path d="M28 30 V25 C28 22.8 29.8 21 32 21 C34.2 21 36 22.8 36 25 V30" stroke="#4A0E0E" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="30" r="2" fill="#4A0E0E" />
  </svg>
);

// Micro-illustration 2: Admin Chat dengan Pulsing Green Indicator
const AdminPulseChatSvg = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
    <rect x="10" y="14" width="44" height="34" rx="10" fill="#FFFFFF" stroke="#25D366" strokeWidth="2.5" />
    <path d="M22 48 L18 56 L30 48 Z" fill="#FFFFFF" stroke="#25D366" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="24" cy="31" r="3" fill="#25D366" />
    <circle cx="32" cy="31" r="3" fill="#25D366" />
    <circle cx="40" cy="31" r="3" fill="#25D366" />
    {/* Live Pulse Indicator */}
    <circle cx="48" cy="18" r="5" fill="#25D366" />
    <circle cx="48" cy="18" r="8" stroke="#25D366" strokeWidth="1.5" opacity="0.6">
      <animate attributeName="r" values="5;10;5" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// Micro-illustration 3: Topi Toga dengan Sparkle
const TogaSparkleSvg = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
    <polygon points="32,14 56,24 32,34 8,24" fill="#E53935" stroke="#B71C1C" strokeWidth="2" />
    <path d="M18 30 V42 C18 48 46 48 46 42 V30" stroke="#B71C1C" strokeWidth="2" fill="none" />
    <line x1="56" y1="24" x2="56" y2="40" stroke="#F2B705" strokeWidth="2.5" />
    <circle cx="56" cy="42" r="3.5" fill="#F2B705" />
    {/* Sparkle */}
    <path d="M48 10 L50 6 L52 10 L56 12 L52 14 L50 18 L48 14 L44 12 Z" fill="#F2B705" />
  </svg>
);

// Micro-illustration 4: Dompet + QRIS
const WalletQrisSvg = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
    <rect x="8" y="18" width="48" height="34" rx="8" fill="#FDECEC" stroke="#E53935" strokeWidth="2.5" />
    <path d="M8 26 H56" stroke="#E53935" strokeWidth="2" />
    <rect x="36" y="28" width="18" height="14" rx="4" fill="#FFFFFF" stroke="#F2B705" strokeWidth="1.8" />
    <circle cx="43" cy="35" r="2.5" fill="#E53935" />
    {/* Floating QRIS badge */}
    <g transform="translate(38, 8)">
      <rect x="0" y="0" width="18" height="14" rx="3" fill="#4A0E0E" />
      <text x="9" y="10" fill="#F2B705" fontSize="7" fontWeight="bold" textAnchor="middle">QRIS</text>
    </g>
  </svg>
);

// Micro-illustration 5: Lembar Checklist
const ChecklistSvg = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
    <rect x="14" y="10" width="36" height="46" rx="6" fill="#FFFFFF" stroke="#E53935" strokeWidth="2.5" />
    <line x1="22" y1="20" x2="42" y2="20" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="30" x2="42" y2="30" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="40" x2="36" y2="40" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    {/* Green drawn checkmark */}
    <circle cx="44" cy="42" r="8" fill="#10B981" />
    <path d="M40 42 L43 45 L48 39" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Micro-illustration 6: Mini Map dengan Pin Jalan Tikus
const MiniMapPinSvg = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
    <rect x="10" y="12" width="44" height="42" rx="8" fill="#FFF9EB" stroke="#F2B705" strokeWidth="2" />
    <path d="M12 28 Q26 20 34 32 T52 26" stroke="#E53935" strokeWidth="2.5" strokeDasharray="4 3" />
    <path d="M22 14 V52 M42 14 V52" stroke="#E5E7EB" strokeWidth="1.5" />
    {/* Animated Pulsing Location Pin */}
    <g transform="translate(34, 24)">
      <path d="M0 -12 C-5 -12, -9 -8, -9 -3 C-9 4, 0 12, 0 12 C0 12, 9 4, 9 -3 C9 -8, 5 -12, 0 -12 Z" fill="#E53935" />
      <circle cx="0" cy="-4" r="3" fill="#FFFFFF" />
    </g>
  </svg>
);

// Bento Card with Spotlight Mouse Follower
const BentoSpotlightCard: React.FC<{
  className?: string;
  badge?: string;
  numberMetric?: string;
  metricLabel?: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}> = ({ className = '', badge, numberMetric, metricLabel, title, desc, icon }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl p-6 sm:p-7 border border-neutral-200/90 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 ${className}`}
    >
      {/* Spotlight Radial Gradient on Cursor */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(229,57,53,0.06), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      <div>
        {/* Top bar with Badge / Metric */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="p-2 rounded-2xl bg-[#F8F9FB] border border-neutral-100 group-hover:scale-110 transition-transform">
            {icon}
          </div>
          {badge && (
            <span className="text-[10px] font-bold text-[#D32F2F] bg-red-50 border border-red-200 py-1 px-3 rounded-full">
              {badge}
            </span>
          )}
          {numberMetric && (
            <div className="text-right">
              <span className="text-xl sm:text-2xl font-black text-[#D32F2F] tracking-tight block leading-none">
                {numberMetric}
              </span>
              <span className="text-[10px] text-neutral-400 font-semibold">{metricLabel}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#D32F2F] transition-colors mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-semibold text-neutral-400">
        <span>Prinsip Layanan Tolong.in</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#F2B705] group-hover:scale-150 transition-transform" />
      </div>
    </div>
  );
};

// 3 Kata Ajaib Flip / Interactive Cards
const THREE_WORDS_DATA = [
  {
    word: 'Tolong',
    quote: 'Meminta bantuan dengan adab, kerendahan hati, dan saling menghargai martabat sesama teman seperjuangan.',
    tagline: 'Nilai Integritas #1',
    iconColor: '#E53935',
    dialogue: {
      customer: 'Kak, tolong belikan obat lambung di apotek Gerlong yaa, lagi lemes banget di kosan...',
      runner: 'Siap kak, segera meluncur! Istirahat dulu yaa, 10 menit lagi sampai di depan pagar kos 👍',
    },
  },
  {
    word: 'Maaf',
    quote: 'Tulus mengakui keterbatasan, menjunjung kejujuran bila ada kendala lapangan, dan selalu siap berbenah cepat.',
    tagline: 'Nilai Integritas #2',
    iconColor: '#F2B705',
    dialogue: {
      customer: 'Min, pesanan fotokopi berkas skripsi udah selesai belum yaa?',
      runner: 'Kak, mohon maaf banget ya antrean mesin fotokopi lagi padat 10 menit. Tetap kami tungguin rapi sampai tuntas kak 🙏',
    },
  },
  {
    word: 'Terima Kasih',
    quote: 'Mengapresiasi setiap tetes keringat ikhtiar runner dan memuliakan kepercayaan yang telah dititipkan pelanggan.',
    tagline: 'Nilai Integritas #3',
    iconColor: '#10B981',
    dialogue: {
      customer: 'Terima kasih banyak yaa kak sudah ditolongin, bener-bener ngebantu banget pas lagi deadline nugas!',
      runner: 'Sama-sama kak! Senang bisa membantu sesama mahasiswa. Sukses yaa tugas kuliahnya! 😊',
    },
  },
];

export const WhyUsSection: React.FC = () => {
  const [flippedWord, setFlippedWord] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedWord((prev) => (prev === index ? null : index));
  };

  return (
    <section id="kenapa-kami" className="py-16 md:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-[#D32F2F] mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#F2B705]" />
            <span>Alasan Memilih Kami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Kenapa Mahasiswa Memilih Tolong.in?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Didesain khusus untuk ritme kehidupan kampus: fleksibel, transparan, dan mengedepankan etika pelayanan.
          </p>
        </div>

        {/* TUGAS 5b: ASYMMETRIC BENTO GRID WITH CUSTOM MICRO-ANIMATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Col-Span-2 (Hero card on desktop) */}
          <BentoSpotlightCard
            className="md:col-span-2 bg-gradient-to-br from-white via-white to-red-50/40"
            badge="100% Mahasiswa UPI"
            numberMetric="100%"
            metricLabel="Runner Terverifikasi"
            icon={<TogaSparkleSvg />}
            title="Runner Mahasiswa Terlatih"
            desc="Semua runner adalah mahasiswa aktif UPI yang dibekali pelatihan SOP keramahan, ketepatan waktu, dan etika kerja. Lebih ramah, nyambung diajak ngobrol, dan paham dinamika perkuliahan."
          />

          {/* Card 2: Col-Span-1 */}
          <BentoSpotlightCard
            className="md:col-span-1"
            numberMetric="< 15 Mnt"
            metricLabel="Rata-rata Respon"
            icon={<AdminPulseChatSvg />}
            title="Admin Responsif & Hangat"
            desc="Bukan bot kaku. Kamu mengobrol dengan admin yang mengerti bahasa mahasiswa dan siap mencari solusi terbaik di lapangan."
          />

          {/* Card 3: Col-Span-1 */}
          <BentoSpotlightCard
            className="md:col-span-1"
            numberMetric="0"
            metricLabel="Tarif Tersembunyi"
            icon={<ShieldLockedSvg />}
            title="Harga Disepakati di Awal"
            desc="Transparan sejak detik pertama. Tidak ada tarif melonjak misterius, semua dibicarakan di muka bersama admin sebelum runner jalan."
          />

          {/* Card 4: Col-Span-1 */}
          <BentoSpotlightCard
            className="md:col-span-1"
            badge="QRIS Resmi"
            icon={<WalletQrisSvg />}
            title="Pembayaran Aman (QRIS/Tunai)"
            desc="Bayar setelah pekerjaan tuntas. Mendukung QRIS resmi dan uang tunai tanpa risiko transfer ke rekening liar."
          />

          {/* Card 5: Col-Span-1 */}
          <BentoSpotlightCard
            className="md:col-span-1"
            icon={<ChecklistSvg />}
            title="Pesanan Tercatat & Dievaluasi"
            desc="Setiap tugas memiliki rekam jejak sistem yang jelas demi keamanan barang, privasi, dan kepuasan pelanggan."
          />

          {/* Card 6: Col-Span-3 or Full Width */}
          <BentoSpotlightCard
            className="md:col-span-3 bg-gradient-to-r from-white via-[#FFF9EB]/40 to-white"
            badge="Navigasi Runner Cepat"
            icon={<MiniMapPinSvg />}
            title="Paham Seluk-Beluk Kampus UPI & Jalur Tikus"
            desc="Runner hafal jalan tikus Gegerkalong, jam buka kantin legendaris, letak ruang kuliah FIP sampai FPMIPA, hingga birokrasi kampus UPI. Mau titip atau anjem di lorong manapun, runner kami tahu jalurnya."
          />

        </div>

        {/* TUGAS 5c: BLOK INTERAKTIF "3 KATA AJAIB DALAM SETIAP PELAYANAN" (DARK SECTION WITH AMBIENT PARTICLES & SIMULATION FLIP) */}
        <div className="bg-gradient-to-br from-[#1E1E1E] via-[#2B0A0A] to-[#141414] rounded-3xl p-7 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden border border-white/10">
          
          {/* Ambient Particles & Pulsing Glow */}
          <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
            <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#E53935]/20 blur-[90px] animate-pulse" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#F2B705]/15 blur-[80px]" />
            {/* Subtle floating gold dots */}
            {[10, 30, 50, 70, 90].map((left, idx) => (
              <span
                key={idx}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#F2B705] opacity-60 shadow-[0_0_6px_#F2B705]"
                style={{
                  left: `${left}%`,
                  bottom: `${15 + idx * 12}%`,
                  animation: `pulse 3s ease-in-out infinite ${idx * 0.5}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white/10 text-xs font-semibold text-[#F2B705] mb-3 border border-white/15">
              <Heart className="w-3.5 h-3.5 fill-[#F2B705]" />
              <span>Budaya Pelayanan Tolong.in</span>
            </div>
            
            {/* Shimmer Effect on Heading */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              3 Kata Ajaib dalam Setiap Pelayanan
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2">
              Fondasi etika yang selalu kami pegang teguh. <span className="text-[#F2B705] font-semibold">Klik kartu di bawah</span> untuk melihat contoh percakapan nyata pelanggan dan runner.
            </p>
          </div>

          {/* Three Interactive Flip/Toggle Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_WORDS_DATA.map((item, idx) => {
              const isFlipped = flippedWord === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleFlip(idx)}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between relative group ${
                    isFlipped
                      ? 'bg-black/60 border-[#F2B705] shadow-[0_0_24px_rgba(242,183,5,0.2)] ring-1 ring-[#F2B705]'
                      : 'bg-white/10 backdrop-blur-xs border-white/15 hover:bg-white/15 hover:border-white/30'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggleFlip(idx);
                    }
                  }}
                  aria-expanded={isFlipped}
                >
                  {isFlipped ? (
                    /* Sisi Balik: Simulasi Bubble Chat WhatsApp Nyata */
                    <div className="space-y-3.5 animate-fadeIn">
                      <div className="flex items-center justify-between text-[11px] text-[#F2B705] font-bold border-b border-white/15 pb-2">
                        <span>💬 Contoh Percakapan Lapangan</span>
                        <RotateCcw className="w-3.5 h-3.5" />
                      </div>

                      {/* Bubble Pelanggan */}
                      <div className="bg-emerald-950/80 border border-emerald-500/40 p-3 rounded-xl rounded-tr-xs text-left">
                        <span className="text-[10px] text-emerald-300 font-bold block mb-0.5">Pelanggan:</span>
                        <p className="text-xs text-white leading-relaxed">
                          "{item.dialogue.customer}"
                        </p>
                      </div>

                      {/* Bubble Runner */}
                      <div className="bg-white/15 border border-white/20 p-3 rounded-xl rounded-tl-xs text-left">
                        <span className="text-[10px] text-[#F2B705] font-bold block mb-0.5">Runner Tolong.in:</span>
                        <p className="text-xs text-neutral-100 leading-relaxed">
                          "{item.dialogue.runner}"
                        </p>
                      </div>

                      <div className="pt-2 text-center text-[10px] text-neutral-400">
                        Klik lagi untuk kembali
                      </div>
                    </div>
                  ) : (
                    /* Sisi Depan: Nilai Integritas & Definisi */
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#F2B705] bg-[#F2B705]/15 py-1 px-2.5 rounded-full border border-[#F2B705]/30">
                          {item.tagline}
                        </span>
                        <span className="text-xs text-neutral-400 group-hover:text-white transition-colors flex items-center gap-1">
                          <span>Buka Chat</span>
                          <span>→</span>
                        </span>
                      </div>

                      <div className="text-3xl sm:text-4xl font-extrabold text-[#F2B705] mb-3 tracking-tight group-hover:scale-105 transition-transform origin-left">
                        "{item.word}"
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                        {item.quote}
                      </p>
                    </div>
                  )}

                  {!isFlipped && (
                    <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                      <span>Etika Mahasiswa UPI</span>
                      <span className="text-[#F2B705] font-bold group-hover:translate-x-1 transition-transform">
                        Lihat Contoh Simulasi ↗
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
