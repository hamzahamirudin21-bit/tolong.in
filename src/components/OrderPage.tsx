import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ShoppingBag,
  Bike,
  Compass,
  GraduationCap,
  Sparkles,
  MessageCircle,
  Send,
  Copy,
  Check,
  RefreshCw,
  Clock,
  MapPin,
  Heart,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  ChevronDown,
} from 'lucide-react';
import { TolongInLogo } from './TolongInLogo';
import { ThemeToggle } from './ThemeToggle';
import { WhatsAppIcon } from './icons/BrandIcons';
import { JastipIllustration } from './illustrations/JastipIllustration';
import { MobilitasIllustration } from './illustrations/MobilitasIllustration';
import { InformasiIllustration } from './illustrations/InformasiIllustration';
import { AkademikIllustration } from './illustrations/AkademikIllustration';
import { KhususIllustration } from './illustrations/KhususIllustration';
import {
  WA_NUMBER,
  WA_DISPLAY,
  BRAND_TAGLINE,
  BRAND_SLOGAN,
  SERVICES_LIST,
  OrderFormData,
  formatTolongInOrderMessage,
} from '../data/contentData';

interface OrderPageProps {
  onBackToHome: () => void;
}

export const OrderPage: React.FC<OrderPageProps> = ({ onBackToHome }) => {
  // Selected category in order form
  const [selectedCategory, setSelectedCategory] = useState<string>('jastip');
  const [notification, setNotification] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState<OrderFormData>({
    nama: '',
    fakultasAngkatan: '',
    noWa: '',
    mauDitolongApa: 'Beliin dimsum gerbang UPI 2 porsi',
    deadline: 'secepatnya aja',
    lokasiAwal: 'gerbang utama UPI',
    lokasiTujuan: 'Kosan Gerlong Girang',
    bayarJasa: '5rb',
    catatan: '',
  });

  const [hasSubmittedAttempt, setHasSubmittedAttempt] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const formSectionRef = useRef<HTMLDivElement>(null);
  const catalogSectionRef = useRef<HTMLDivElement>(null);

  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectServiceFromCatalog = (serviceId: string, defaultReq: string, defaultAwal: string) => {
    setSelectedCategory(serviceId);
    setFormData((prev) => ({
      ...prev,
      mauDitolongApa: defaultReq,
      lokasiAwal: defaultAwal,
    }));
    setNotification(`Kategori "${serviceId}" dipilih! Formulir telah disesuaikan.`);
    setTimeout(() => setNotification(null), 3500);

    // Scroll smoothly to form section
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (field: keyof OrderFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isDetailsValid = formData.mauDitolongApa.trim().length >= 3;
  const isNamaValid = formData.nama.trim().length >= 2;
  const isValid = isDetailsValid && isNamaValid;

  const loadExample = () => {
    setFormData({
      nama: 'Mamat',
      fakultasAngkatan: 'FPMIPA 23',
      noWa: '+62 895-3217-48547',
      mauDitolongApa: 'Beliin makan siang nasi padang ayam gulai + es teh',
      deadline: 'Sebelum jam 12.30',
      lokasiAwal: 'RM Padang Surya Gerlong',
      lokasiTujuan: 'Kos Putri Melati Jl. Geger Asih No. 12',
      bayarJasa: '5rb - 7rb (sesuai kesepakatan)',
      catatan: 'Sambal dipisah ya kak, uang makanan ditransfer via QRIS/BCA.',
    });
    setSelectedCategory('jastip');
    setHasSubmittedAttempt(false);
    setNotification('Contoh pesanan berhasil dimuat!');
    setTimeout(() => setNotification(null), 2500);
  };

  const handleReset = () => {
    setFormData({
      nama: '',
      fakultasAngkatan: '',
      noWa: '',
      mauDitolongApa: '',
      deadline: 'secepatnya aja',
      lokasiAwal: '',
      lokasiTujuan: '',
      bayarJasa: '',
      catatan: '',
    });
    setHasSubmittedAttempt(false);
  };

  const formattedWhatsAppText = formatTolongInOrderMessage({
    nama: formData.nama.trim() || '(Nama Pemesan)',
    fakultasAngkatan: formData.fakultasAngkatan.trim() || '-',
    noWa: formData.noWa.trim() || '-',
    mauDitolongApa: formData.mauDitolongApa.trim() || '(Rincian Pesanan)',
    deadline: formData.deadline.trim() || 'secepatnya aja',
    lokasiAwal: formData.lokasiAwal.trim() || '(Lokasi Awal / Pembelian)',
    lokasiTujuan: formData.lokasiTujuan.trim() || '(Lokasi Pengantaran)',
    bayarJasa: formData.bayarJasa.trim() || 'disepakati bersama admin',
    catatan: formData.catatan.trim(),
  });

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmittedAttempt(true);

    if (!isValid) {
      // Focus on first invalid field
      return;
    }

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(formattedWhatsAppText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyText = () => {
    navigator.clipboard?.writeText(formattedWhatsAppText);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const scrollToCatalog = () => {
    catalogSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-page text-ink flex flex-col font-sans">
      {/* 1. Header Khusus Halaman Pemesanan */}
      <header className="sticky top-0 z-40 w-full bg-surface/95 backdrop-blur-md border-b border-line shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          
          {/* Left: Kembali ke Beranda + Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-surface-2 hover:bg-accent-tint text-ink-soft hover:text-accent border border-line hover:border-accent-line text-xs font-semibold transition-all cursor-pointer group"
              aria-label="Kembali ke Halaman Beranda"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Kembali ke Beranda</span>
              <span className="sm:hidden">Beranda</span>
            </button>

            <div className="h-5 w-px bg-line" aria-hidden="true" />

            <button
              type="button"
              onClick={onBackToHome}
              className="flex items-center gap-2 cursor-pointer text-left"
            >
              <TolongInLogo size={32} showWordmark={true} wordmarkColor="dark" />
            </button>
          </div>

          {/* Center Navigation Shortcuts (Desktop) */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-semibold">
            <button
              type="button"
              onClick={scrollToCatalog}
              className="py-1.5 px-3 rounded-full hover:bg-surface-2 text-ink-soft hover:text-ink transition-colors cursor-pointer"
            >
              1. Pilihan Jenis Layanan
            </button>
            <span className="text-line-strong">•</span>
            <button
              type="button"
              onClick={scrollToForm}
              className="py-1.5 px-3 rounded-full bg-accent-tint text-accent border border-accent-line transition-colors cursor-pointer"
            >
              2. Form Pemesanan
            </button>
          </nav>

          {/* Right: Theme Toggle & Admin WA Info */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle variant="navbar" onHero={false} />

            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/30 text-xs font-bold transition-colors"
            >
              <WhatsAppIcon size={14} className="fill-[#25D366]" />
              <span>Admin: {WA_DISPLAY}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Floating Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1F1F1F] text-white px-5 py-3 rounded-full text-xs font-semibold shadow-2xl flex items-center gap-2 border border-white/20 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#F2B705]" />
          <span>{notification}</span>
        </div>
      )}

      {/* 2. Banner Pengantar Halaman Pemesanan */}
      <section className="bg-gradient-to-b from-[#B71C1C] via-[#9B1B1B] to-[#7F1717] dark:from-[#3E0A0A] dark:via-[#2A0707] dark:to-[#1C1819] text-white py-10 sm:py-14 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#F2B705] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F2B705] shadow-xs" />
              <span>Menu Khusus Pemesanan & Layanan</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Pesan Sekarang & Pilih Jenis Layanan
            </h1>
            
            <p className="mt-2.5 text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
              Cek daftar jenis layanan di bawah ini, pilih yang kamu butuhkan, atau langsung isi formulir pemesanan. Pesanan akan otomatis tersusun rapi untuk dikirim ke WhatsApp Admin Tolong.in!
            </p>

            {/* Quick action buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={scrollToCatalog}
                className="py-2.5 px-5 rounded-full bg-white text-[#B71C1C] hover:bg-neutral-100 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Lihat Jenis Layanan</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollToForm}
                className="py-2.5 px-5 rounded-full bg-[#F2B705] text-[#4A0E0E] hover:bg-[#e0a804] font-extrabold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Langsung Isi Form Pemesanan</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Hanya Ada Fitur Jasa Layanan dan Form Pemesanan */}
      <main className="flex-1 space-y-16 py-12">
        
        {/* ==================================================================== */}
        {/* FITUR 1: JASA LAYANAN (Katalog untuk konsumen melihat jenis layanan) */}
        {/* ==================================================================== */}
        <section ref={catalogSectionRef} id="katalog-layanan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-line">
            <div>
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-accent-tint border border-accent-line text-xs font-bold text-accent mb-2">
                <span>Katalog Layanan</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                Pilihan Jenis Layanan Tolong.in
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-ink-soft max-w-xl">
                Temukan layanan yang sesuai dengan kebutuhanmu di kampus dan sekitar kosan. Klik <strong>"Pilih Layanan Ini"</strong> untuk otomatis mengisinya ke formulir pemesanan.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-ink-muted shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Dikerjakan oleh Runner Mahasiswa Terlatih</span>
            </div>
          </div>

          {/* Grid 5 Jenis Layanan */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Jastip Makanan & Barang */}
            <div className={`rounded-3xl p-6 border transition-all flex flex-col justify-between ${
              selectedCategory === 'jastip'
                ? 'bg-accent-tint/40 border-accent shadow-md dark:shadow-none'
                : 'bg-surface border-line hover:border-line-strong'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#E53935]/10 text-accent flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                    Paling Populer
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ink">Jasa Titip (Jastip) Makanan & Barang</h3>
                  <p className="text-xs text-ink-soft mt-1 leading-relaxed">
                    Titip beli makanan favorit di gerbang UPI, Indomaret/Alfamart Gerlong, apotek, laundry, atau fotokopian tanpa repot keluar kamar kos.
                  </p>
                </div>

                {/* Contoh yang bisa ditolong */}
                <div className="space-y-1.5 pt-2 border-t border-line">
                  <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider block">
                    Bisa Menolong:
                  </span>
                  <ul className="text-xs text-ink-soft space-y-1">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Dimsum gerbang, geprek, seblak, pecel lele</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Kopi, boba, & snack nugas malam</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Obat warung/apotek saat badan kurang fit</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Ambil & antar cucian laundry kiloan</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-line space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-muted">Estimasi Biaya Jasa:</span>
                  <span className="font-extrabold text-ink">Mulai 3rb - 8rb</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectServiceFromCatalog('jastip', 'Beliin dimsum gerbang UPI 2 porsi & es teh manis', 'Gerbang Utama UPI')}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    selectedCategory === 'jastip'
                      ? 'bg-accent text-white shadow-xs'
                      : 'bg-surface-2 hover:bg-accent-tint text-ink hover:text-accent border border-line'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{selectedCategory === 'jastip' ? 'Layanan Terpilih ✓' : 'Pilih Layanan Ini'}</span>
                </button>
              </div>
            </div>

            {/* 2. Mobilitas & Antar-Jemput (Anjem) */}
            <div className={`rounded-3xl p-6 border transition-all flex flex-col justify-between ${
              selectedCategory === 'mobilitas'
                ? 'bg-accent-tint/40 border-accent shadow-md dark:shadow-none'
                : 'bg-surface border-line hover:border-line-strong'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Bike className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gold-tint text-gold-ink border border-gold-line">
                    Cepat & Fleksibel
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ink">Mobilitas & Antar-Jemput (Anjem)</h3>
                  <p className="text-xs text-ink-soft mt-1 leading-relaxed">
                    Antar-jemput motor sesama mahasiswa di seputar kampus UPI, stasiun, terminal, serta bantuan tenaga angkut pindahan kosan.
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-line">
                  <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider block">
                    Bisa Menolong:
                  </span>
                  <ul className="text-xs text-ink-soft space-y-1">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Anjem dari kosan ke fakultas / gedung kuliah</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Anjem stasiun Bandung / travel Pasteur</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Helper tenaga angkut barang pindah kosan</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Antre loket / urusan tiket fisik</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-line space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-muted">Estimasi Biaya Jasa:</span>
                  <span className="font-extrabold text-ink">Sesuai Jarak & Muatan</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectServiceFromCatalog('mobilitas', 'Anjem motor dari Gerlong Girang ke FPBS UPI', 'Kos Gerlong Girang')}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    selectedCategory === 'mobilitas'
                      ? 'bg-accent text-white shadow-xs'
                      : 'bg-surface-2 hover:bg-accent-tint text-ink hover:text-accent border border-line'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{selectedCategory === 'mobilitas' ? 'Layanan Terpilih ✓' : 'Pilih Layanan Ini'}</span>
                </button>
              </div>
            </div>

            {/* 3. Informasi & Survei Kosan */}
            <div className={`rounded-3xl p-6 border transition-all flex flex-col justify-between ${
              selectedCategory === 'informasi'
                ? 'bg-accent-tint/40 border-accent shadow-md dark:shadow-none'
                : 'bg-surface border-line hover:border-line-strong'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400">
                    Video 360° Riil
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ink">Informasi & Survei Kosan</h3>
                  <p className="text-xs text-ink-soft mt-1 leading-relaxed">
                    Mata & telingamu di Bandung saat kamu masih di luar kota. Cek kondisi riil kamar, tekanan air, sinyal HP, keamanan, dan jalan masuk.
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-line">
                  <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider block">
                    Bisa Menolong:
                  </span>
                  <ul className="text-xs text-ink-soft space-y-1">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Survei kosan (video walkthrough & foto detail)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Uji coba kecepatan sinyal (Telkomsel/Indosat/XL)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Cek kejernihan air & fasilitas bersama kosan</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Cek fisik berkas administrasi ke gedung birokrasi</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-line space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-muted">Estimasi Biaya Jasa:</span>
                  <span className="font-extrabold text-ink">Transparan & Lengkap</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectServiceFromCatalog('informasi', 'Tolong survei kos putri di Jl. Geger Asih (cek air, sinyal, kamar mandi)', 'Jl. Geger Asih No. 15')}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    selectedCategory === 'informasi'
                      ? 'bg-accent text-white shadow-xs'
                      : 'bg-surface-2 hover:bg-accent-tint text-ink hover:text-accent border border-line'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{selectedCategory === 'informasi' ? 'Layanan Terpilih ✓' : 'Pilih Layanan Ini'}</span>
                </button>
              </div>
            </div>

            {/* 4. Akademik & Riset */}
            <div className={`rounded-3xl p-6 border transition-all flex flex-col justify-between ${
              selectedCategory === 'akademik'
                ? 'bg-accent-tint/40 border-accent shadow-md dark:shadow-none'
                : 'bg-surface border-line hover:border-line-strong'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-400">
                    Bantuan Kuliah
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ink">Bantuan Kampus & Akademik</h3>
                  <p className="text-xs text-ink-soft mt-1 leading-relaxed">
                    Dukungan perkuliahan dari sesama mahasiswa UPI, mulai dari fotokopi/print tugas mendadak hingga penyebaran kuesioner penelitian skripsi.
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-line">
                  <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider block">
                    Bisa Menolong:
                  </span>
                  <ul className="text-xs text-ink-soft space-y-1">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Print & jilid laporan tugas di percetakan kampus</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Bantu sebar link kuesioner riset / skripsi</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Antar map berkas/skripsi ke dosen pembimbing</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#F2B705] font-bold">•</span>
                      <span>Diskusi belajar & referensi mata kuliah dasar</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-line space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-muted">Estimasi Biaya Jasa:</span>
                  <span className="font-extrabold text-ink">Gotong Royong Bersahabat</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectServiceFromCatalog('akademik', 'Print berkas laporan 30 halaman & jilid lakban di fotokopi kampus', 'Percetakan UPI')}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    selectedCategory === 'akademik'
                      ? 'bg-accent text-white shadow-xs'
                      : 'bg-surface-2 hover:bg-accent-tint text-ink hover:text-accent border border-line'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{selectedCategory === 'akademik' ? 'Layanan Terpilih ✓' : 'Pilih Layanan Ini'}</span>
                </button>
              </div>
            </div>

            {/* 5. Layanan Khusus & Kebutuhan Darurat */}
            <div className={`rounded-3xl p-6 border transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2 ${
              selectedCategory === 'khusus'
                ? 'bg-accent-tint/40 border-accent shadow-md dark:shadow-none'
                : 'bg-surface border-line hover:border-line-strong'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F2B705]/20 text-[#B71C1C] dark:text-[#F2B705] flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gold-tint text-gold-ink border border-gold-line">
                    Serba Ada & Custom
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ink">Layanan Khusus & Kebutuhan Darurat</h3>
                  <p className="text-xs text-ink-soft mt-1 leading-relaxed">
                    Punya urusan unik atau darurat yang belum tercantum di atas? Jangan ragu ceritakan! Kami selalu siap mencari runner mahasiswa yang tepat untuk menolongmu.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-line">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider block">
                      Contoh Kasus Kampus:
                    </span>
                    <ul className="text-xs text-ink-soft space-y-1">
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#F2B705] font-bold">•</span>
                        <span>Jaga stan expo pameran / seminar kampus</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#F2B705] font-bold">•</span>
                        <span>Fotografer / videografer dadakan wisuda</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider block">
                      Kebutuhan Kosan Unik:
                    </span>
                    <ul className="text-xs text-ink-soft space-y-1">
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#F2B705] font-bold">•</span>
                        <span>Tolong angkat jemuran kosan pas mendung/hujan</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#F2B705] font-bold">•</span>
                        <span>Bangunin sahur / subuh / ujian pagi penting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-line space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-muted">Estimasi Biaya Jasa:</span>
                  <span className="font-extrabold text-ink">Sesuai Kesepakatan Santai</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectServiceFromCatalog('khusus', 'Butuh runner untuk jaga stan expo di Gymnasium UPI jam 09.00 - 13.00', 'Gymnasium UPI')}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    selectedCategory === 'khusus'
                      ? 'bg-accent text-white shadow-xs'
                      : 'bg-surface-2 hover:bg-accent-tint text-ink hover:text-accent border border-line'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{selectedCategory === 'khusus' ? 'Layanan Terpilih ✓' : 'Pilih Layanan Ini'}</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================================== */}
        {/* FITUR 2: FORM PEMESANAN UNTUK INPUT (+ PREVIEW WHATSAPP RESMI)      */}
        {/* ==================================================================== */}
        <section ref={formSectionRef} id="form-pemesanan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-line shadow-sm dark:shadow-none">
            
            {/* Header Form */}
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-accent-tint border border-accent-line text-xs font-bold text-accent mb-2">
                <span>Formulir Input Pemesanan</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                Lengkapi Data Pemesanan
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-ink-soft">
                Masukkan detail bantuan yang kamu butuhkan. Pesanan akan otomatis dirangkum sesuai format resmi WhatsApp Tolong.in.
              </p>
            </div>

            {/* Quick Category Chips Selector */}
            <div className="mb-8 p-4 rounded-2xl bg-surface-2 border border-line">
              <span className="text-xs font-bold text-ink-soft block mb-2.5">
                Kategori Layanan yang Dipilih:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'jastip', label: '🛍️ Jastip Makanan & Barang' },
                  { id: 'mobilitas', label: '🛵 Mobilitas & Anjem' },
                  { id: 'informasi', label: '🔍 Informasi & Survei Kos' },
                  { id: 'akademik', label: '🎓 Kampus & Akademik' },
                  { id: 'khusus', label: '✨ Layanan Khusus / Lainnya' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`py-1.5 px-3.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-accent text-white shadow-xs'
                        : 'bg-surface hover:bg-surface-2 text-ink border border-line'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid Form Input (Kiri) & Live WA Preview (Kanan) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Kolom Kiri: Input Fields */}
              <div className="lg:col-span-7 bg-page rounded-2xl p-5 sm:p-7 border border-line">
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-line">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                    Input Formulir Pemesanan
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={loadExample}
                      className="text-xs text-accent hover:underline font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Isi Contoh</span>
                    </button>
                    <span className="text-line-strong">|</span>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-ink-muted hover:text-ink flex items-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSendWhatsApp} className="space-y-4">
                  {/* Row 1: Nama & No WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-ink-soft mb-1 flex items-center justify-between">
                        <span>Nama Pemesan <span className="text-accent">*</span></span>
                        <span className="text-[10px] text-ink-muted font-normal">Panggilan/Lengkap</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Mamat"
                        value={formData.nama}
                        onChange={(e) => handleInputChange('nama', e.target.value)}
                        className={`w-full text-xs sm:text-sm py-2.5 px-3.5 bg-field border rounded-xl outline-hidden text-ink placeholder:text-ink-muted transition-all ${
                          hasSubmittedAttempt && !isNamaValid
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-line-strong focus:border-accent focus:ring-1 focus:ring-accent'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-ink-soft mb-1 flex items-center justify-between">
                        <span>No. WhatsApp Pemesan</span>
                        <span className="text-[10px] text-ink-muted font-normal">Untuk Konfirmasi</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Contoh: 0895-3217-48547"
                        value={formData.noWa}
                        onChange={(e) => handleInputChange('noWa', e.target.value)}
                        className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-field border border-line-strong rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-hidden text-ink placeholder:text-ink-muted"
                      />
                    </div>
                  </div>

                  {/* Row 2: Fakultas & Angkatan */}
                  <div>
                    <label className="text-xs font-bold text-ink-soft mb-1 flex items-center justify-between">
                      <span>Fakultas & Angkatan / Status</span>
                      <span className="text-[10px] text-ink-muted font-normal">Opsional</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: FPMIPA 23 / Mahasiswa Baru / Umum"
                      value={formData.fakultasAngkatan}
                      onChange={(e) => handleInputChange('fakultasAngkatan', e.target.value)}
                      className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-field border border-line-strong rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-hidden text-ink placeholder:text-ink-muted"
                    />
                  </div>

                  {/* Row 3: Mau Ditolong Apa */}
                  <div>
                    <label className="text-xs font-bold text-ink-soft mb-1 flex items-center justify-between">
                      <span>Mau Ditolong Apa? <span className="text-accent">*</span></span>
                      <span className="text-[10px] text-ink-muted font-normal">Rincian Detail</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Jelaskan kebutuhanmu secara rinci (contoh: Titip beliin dimsum gerbang 2 porsi, saus dipisah, es teh manis 1)"
                      value={formData.mauDitolongApa}
                      onChange={(e) => handleInputChange('mauDitolongApa', e.target.value)}
                      className={`w-full text-xs sm:text-sm py-2.5 px-3.5 bg-field border rounded-xl outline-hidden text-ink placeholder:text-ink-muted resize-none transition-all ${
                        hasSubmittedAttempt && !isDetailsValid
                          ? 'border-red-500 ring-1 ring-red-500'
                          : 'border-line-strong focus:border-accent focus:ring-1 focus:ring-accent'
                      }`}
                    />
                  </div>

                  {/* Row 4: Lokasi Awal & Lokasi Tujuan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-ink-soft mb-1 flex items-center justify-between">
                        <span>Lokasi Awal / Pembelian</span>
                        <span className="text-[10px] text-ink-muted font-normal">Titik Jemput/Beli</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Gerbang UPI / Indomaret Gerlong"
                        value={formData.lokasiAwal}
                        onChange={(e) => handleInputChange('lokasiAwal', e.target.value)}
                        className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-field border border-line-strong rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-hidden text-ink placeholder:text-ink-muted"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-ink-soft mb-1 flex items-center justify-between">
                        <span>Lokasi Tujuan / Pengantaran</span>
                        <span className="text-[10px] text-ink-muted font-normal">Titik Akhir</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Kos Putri Melati / FPBS Lt 2"
                        value={formData.lokasiTujuan}
                        onChange={(e) => handleInputChange('lokasiTujuan', e.target.value)}
                        className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-field border border-line-strong rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-hidden text-ink placeholder:text-ink-muted"
                      />
                    </div>
                  </div>

                  {/* Row 5: Deadline & Biaya Jasa */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-ink-soft mb-1 flex items-center justify-between">
                        <span>Waktu / Deadline</span>
                        <span className="text-[10px] text-ink-muted font-normal">Target Waktu</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: secepatnya aja / sebelum jam 12"
                        value={formData.deadline}
                        onChange={(e) => handleInputChange('deadline', e.target.value)}
                        className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-field border border-line-strong rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-hidden text-ink placeholder:text-ink-muted"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-ink-soft mb-1 flex items-center justify-between">
                        <span>Tawaran Biaya Jasa</span>
                        <span className="text-[10px] text-ink-muted font-normal">Bisa Nego Santai</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: 5rb / disepakati bersama admin"
                        value={formData.bayarJasa}
                        onChange={(e) => handleInputChange('bayarJasa', e.target.value)}
                        className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-field border border-line-strong rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-hidden text-ink placeholder:text-ink-muted"
                      />
                    </div>
                  </div>

                  {/* Row 6: Catatan Tambahan */}
                  <div>
                    <label className="text-xs font-bold text-ink-soft mb-1 flex items-center justify-between">
                      <span>Catatan Tambahan</span>
                      <span className="text-[10px] text-ink-muted font-normal">Instruksi Khusus</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Jangan dibunyikan klakson, ketuk pintu 2x ya kak"
                      value={formData.catatan}
                      onChange={(e) => handleInputChange('catatan', e.target.value)}
                      className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-field border border-line-strong rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-hidden text-ink placeholder:text-ink-muted"
                    />
                  </div>

                  {/* Submission Buttons */}
                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group"
                    >
                      <WhatsAppIcon size={18} className="fill-white" />
                      <span>Kirim Pesan ke WhatsApp Admin</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyText}
                      className="py-3 px-4 rounded-xl bg-surface-2 hover:bg-surface text-ink border border-line font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {copySuccess ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-500" />
                          <span className="text-emerald-500">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-ink-muted" />
                          <span>Salin Format</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Kolom Kanan: Live WhatsApp Bubble Preview */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-wa-canvas rounded-2xl p-4 sm:p-5 border border-line shadow-xs">
                  
                  {/* WhatsApp Chat Header Mock */}
                  <div className="flex items-center gap-3 pb-3 mb-3 border-b border-black/10 dark:border-white/10">
                    <div className="w-9 h-9 rounded-full bg-[#E53935] flex items-center justify-center text-white font-bold text-xs">
                      TI
                    </div>
                    <div>
                      <span className="text-xs font-bold text-wa-ink block">
                        Admin Tolong.in
                      </span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                        Online · Balas Cepat
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp Message Bubble */}
                  <div className="bg-wa-bubble text-wa-ink p-3.5 sm:p-4 rounded-2xl rounded-tr-xs shadow-xs text-xs space-y-2 border border-black/5 dark:border-white/5">
                    <div className="font-bold text-accent border-b border-black/10 dark:border-white/10 pb-1">
                      FORM PEMESANAN TOLONG.IN
                    </div>
                    <div className="text-[11px] text-ink-muted italic">
                      Menolong dengan Hati, Melesat Lebih Tinggi
                    </div>

                    <div className="space-y-1 pt-1 font-mono text-[11px] leading-relaxed">
                      <p><strong>Nama:</strong> {formData.nama.trim() || 'Mamat'}</p>
                      <p><strong>Fakultas & Angkatan:</strong> {formData.fakultasAngkatan.trim() || '-'}</p>
                      <p><strong>No. WhatsApp:</strong> {formData.noWa.trim() || '-'}</p>
                      <div className="h-px bg-black/10 dark:bg-white/10 my-1" />
                      <p><strong>Mau ditolong apa:</strong> {formData.mauDitolongApa.trim() || '(Rincian bantuan)'}</p>
                      <p><strong>Deadline:</strong> {formData.deadline.trim() || 'secepatnya aja'}</p>
                      <div className="h-px bg-black/10 dark:bg-white/10 my-1" />
                      <p><strong>Lokasi Awal:</strong> {formData.lokasiAwal.trim() || '-'}</p>
                      <p><strong>Lokasi Tujuan:</strong> {formData.lokasiTujuan.trim() || '-'}</p>
                      <div className="h-px bg-black/10 dark:bg-white/10 my-1" />
                      <p><strong>Aku mau bayar jasa ini:</strong> {formData.bayarJasa.trim() || 'disepakati bersama admin'}</p>
                      <p className="text-[10px] text-ink-muted italic">
                        (Belum termasuk biaya barang, makanan, minuman, atau parkir yaa)
                      </p>
                      {formData.catatan.trim() && (
                        <p><strong>Catatan:</strong> {formData.catatan.trim()}</p>
                      )}
                    </div>

                    <div className="pt-2 text-right text-[10px] text-ink-muted flex items-center justify-end gap-1">
                      <span>Baru saja</span>
                      <span className="text-[#53BDEB]">✓✓</span>
                    </div>
                  </div>
                </div>

                {/* Info Card: Cara Kerja Pemesanan */}
                <div className="p-4 rounded-2xl bg-surface-2 border border-line space-y-2 text-xs">
                  <span className="font-bold text-ink block">
                    Alur Setelah Mengirim Pesan:
                  </span>
                  <ol className="space-y-1.5 text-ink-soft list-decimal list-inside text-[11px]">
                    <li>Admin WhatsApp menyapa & menyepakati rincian biaya.</li>
                    <li>Runner mahasiswa terdekat langsung ditugaskan.</li>
                    <li>Runner meluncur ke lokasi & mengabari setiap progres.</li>
                    <li>Pembayaran aman via QRIS setelah tugas selesai dikerjakan.</li>
                  </ol>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* 3. Footer Sederhana & Bersih Khusus Halaman Pemesanan */}
      <footer className="bg-footer text-white py-8 border-t border-line mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center gap-3">
            <TolongInLogo size={28} showWordmark={true} wordmarkColor="white" />
            <span className="text-white/60">·</span>
            <span className="text-white/80">{BRAND_TAGLINE}</span>
          </div>

          <div className="flex items-center gap-4 text-white/80">
            <button
              type="button"
              onClick={onBackToHome}
              className="hover:text-white font-semibold underline underline-offset-2 cursor-pointer"
            >
              Kembali ke Beranda
            </button>
            <span>·</span>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2B705] font-semibold"
            >
              WhatsApp: {WA_DISPLAY}
            </a>
          </div>

          <p className="text-white/60 text-[11px]">
            © {new Date().getFullYear()} tolong.in · Kawasan Kampus UPI Bandung
          </p>
        </div>
      </footer>
    </div>
  );
};
