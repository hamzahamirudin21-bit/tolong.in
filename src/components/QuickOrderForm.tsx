import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, AlertCircle, Sparkles, RefreshCw, Copy, Check } from 'lucide-react';
import { WA_NUMBER, formatTolongInOrderMessage, OrderFormData } from '../data/contentData';

export const QuickOrderForm: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    nama: '',
    fakultasAngkatan: '',
    noWa: '',
    mauDitolongApa: '',
    deadline: '',
    lokasiAwal: '',
    lokasiTujuan: '',
    bayarJasa: '',
    catatan: '',
  });

  const [hasSubmittedAttempt, setHasSubmittedAttempt] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Default display fallbacks matching the uploaded WhatsApp form reference
  const displayData: OrderFormData = {
    nama: formData.nama.trim() || 'mamat',
    fakultasAngkatan: formData.fakultasAngkatan.trim() || 'fisika 25',
    noWa: formData.noWa.trim() || '+62 895-3217-48547',
    mauDitolongApa: formData.mauDitolongApa.trim() || 'beliin indomie 2 bungkus',
    deadline: formData.deadline.trim() || 'secepatnya aja',
    lokasiAwal: formData.lokasiAwal.trim() || 'gerlong',
    lokasiTujuan: formData.lokasiTujuan.trim() || 'jalan kartika 1 no 195 b kpad gerlong',
    bayarJasa: formData.bayarJasa.trim() || '1rb',
    catatan: formData.catatan.trim() || '',
  };

  const isDetailsValid = formData.mauDitolongApa.trim().length >= 3;
  const isNamaValid = formData.nama.trim().length >= 2;
  const isValid = isDetailsValid && isNamaValid;

  const handleInputChange = (field: keyof OrderFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const loadExample = () => {
    setFormData({
      nama: 'mamat',
      fakultasAngkatan: 'fisika 25',
      noWa: '+62 895-3217-48547',
      mauDitolongApa: 'beliin indomie 2 bungkus',
      deadline: 'secepatnya aja',
      lokasiAwal: 'gerlong',
      lokasiTujuan: 'jalan kartika 1 no 195 b kpad gerlong',
      bayarJasa: '1rb',
      catatan: 'sambal dipisah ya kak',
    });
    setHasSubmittedAttempt(false);
  };

  const handleReset = () => {
    setFormData({
      nama: '',
      fakultasAngkatan: '',
      noWa: '',
      mauDitolongApa: '',
      deadline: '',
      lokasiAwal: '',
      lokasiTujuan: '',
      bayarJasa: '',
      catatan: '',
    });
    setHasSubmittedAttempt(false);
  };

  const formattedWhatsAppText = formatTolongInOrderMessage({
    nama: formData.nama.trim() || displayData.nama,
    fakultasAngkatan: formData.fakultasAngkatan.trim() || displayData.fakultasAngkatan,
    noWa: formData.noWa.trim() || displayData.noWa,
    mauDitolongApa: formData.mauDitolongApa.trim() || displayData.mauDitolongApa,
    deadline: formData.deadline.trim() || displayData.deadline,
    lokasiAwal: formData.lokasiAwal.trim() || displayData.lokasiAwal,
    lokasiTujuan: formData.lokasiTujuan.trim() || displayData.lokasiTujuan,
    bayarJasa: formData.bayarJasa.trim() || displayData.bayarJasa,
    catatan: formData.catatan.trim(),
  });

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmittedAttempt(true);

    if (!isValid) {
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

  return (
    <section id="form-pesan" className="py-16 md:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-[#D32F2F] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F2B705]" />
            <span>Format Resmi Pemesanan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Form Pemesanan Tolong.in
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Isi formulir di bawah ini. Format pesan akan otomatis tersusun rapi sesuai standar resmi pemesanan WhatsApp admin Tolong.in.
          </p>
        </div>

        {/* Two-Column: Interactive Form (Left) & Real WhatsApp Bubble Preview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Inputs */}
          <div className="lg:col-span-7 bg-[#F8F9FB] rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-neutral-200">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                Isi Data Pemesanan
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={loadExample}
                  className="text-xs text-[#D32F2F] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Contoh Pesanan</span>
                </button>
                <span className="text-neutral-300">|</span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-neutral-500 hover:text-neutral-800 flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              
              {/* Row 1: Nama & Fakultas/Angkatan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5 flex items-center justify-between">
                    <span>Nama <span className="text-[#D32F2F]">*</span></span>
                    <span className="text-[10px] text-neutral-400 font-normal">Panggilan/Lengkap</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: mamat"
                    value={formData.nama}
                    onChange={(e) => handleInputChange('nama', e.target.value)}
                    className={`w-full text-xs sm:text-sm py-2.5 px-3.5 bg-white border rounded-xl outline-hidden text-neutral-900 transition-all ${
                      hasSubmittedAttempt && !isNamaValid
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-neutral-300 focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5 flex items-center justify-between">
                    <span>Fakultas & Angkatan</span>
                    <span className="text-[10px] text-neutral-400 font-normal">atau Umum/Dosen</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: fisika 25 / FPMIPA 23"
                    value={formData.fakultasAngkatan}
                    onChange={(e) => handleInputChange('fakultasAngkatan', e.target.value)}
                    className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-white border border-neutral-300 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-hidden text-neutral-900"
                  />
                </div>
              </div>

              {/* Row 2: No. WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                  No. WhatsApp Pemesan
                </label>
                <input
                  type="text"
                  placeholder="Contoh: +62 895-3217-48547 / 0895321748547"
                  value={formData.noWa}
                  onChange={(e) => handleInputChange('noWa', e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-white border border-neutral-300 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-hidden text-neutral-900"
                />
              </div>

              {/* Row 3: Mau Ditolong Apa (Required) */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5 flex items-center justify-between">
                  <span>Mau ditolong apa <span className="text-[#D32F2F]">*</span></span>
                  <span className="text-[10px] text-neutral-400 font-normal">Wajib diisi</span>
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Contoh: beliin indomie 2 bungkus (atau titip dimsum gerbang, print berkas, anjem, survei kosan)"
                  value={formData.mauDitolongApa}
                  onChange={(e) => handleInputChange('mauDitolongApa', e.target.value)}
                  className={`w-full text-xs sm:text-sm p-3.5 bg-white border rounded-xl outline-hidden text-neutral-900 transition-all resize-none ${
                    hasSubmittedAttempt && !isDetailsValid
                      ? 'border-red-500 ring-1 ring-red-500'
                      : 'border-neutral-300 focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]'
                  }`}
                />
                {hasSubmittedAttempt && !isDetailsValid && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Mohon isi apa yang ingin kamu minta tolong ya kak.
                  </p>
                )}
              </div>

              {/* Row 4: Deadline */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5 flex items-center justify-between">
                  <span>Deadline</span>
                  <span className="text-[10px] text-neutral-400 font-normal">Batas waktu yang kamu mau</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: secepatnya aja / hari ini jam 14.00 / besok pagi"
                  value={formData.deadline}
                  onChange={(e) => handleInputChange('deadline', e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-white border border-neutral-300 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-hidden text-neutral-900"
                />
              </div>

              {/* Row 5: Lokasi Awal & Lokasi Tujuan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    Lokasi Awal
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: gerlong / warung indomie"
                    value={formData.lokasiAwal}
                    onChange={(e) => handleInputChange('lokasiAwal', e.target.value)}
                    className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-white border border-neutral-300 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-hidden text-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    Lokasi Tujuan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: jalan kartika 1 no 195 b kpad gerlong"
                    value={formData.lokasiTujuan}
                    onChange={(e) => handleInputChange('lokasiTujuan', e.target.value)}
                    className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-white border border-neutral-300 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-hidden text-neutral-900"
                  />
                </div>
              </div>

              {/* Row 6: Aku mau bayar jasa ini */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5 flex items-center justify-between">
                  <span>Aku mau bayar jasa ini</span>
                  <span className="text-[10px] text-neutral-400 font-normal">Tawaran ongkos jasa kamu</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: 1rb / 5rb / 10rb / disepakati admin"
                  value={formData.bayarJasa}
                  onChange={(e) => handleInputChange('bayarJasa', e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-white border border-neutral-300 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-hidden text-neutral-900"
                />
              </div>

              {/* Disclaimer Callout dari Format Gambar */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>(Belum termasuk biaya barang, makanan, minuman, atau parkir yaa)</strong>
                  <br />
                  Harga jasa akhir akan disepakati bersama admin secara santai dan adil sebelum runner berangkat.
                </span>
              </div>

              {/* Row 7: Catatan Tambahan */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5 flex items-center justify-between">
                  <span>Catatan Tambahan (Opsional)</span>
                  <span className="text-[10px] text-neutral-400">Instruksi khusus</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: sambal dipisah ya kak / titip bon pembelian"
                  value={formData.catatan}
                  onChange={(e) => handleInputChange('catatan', e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-white border border-neutral-300 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-hidden text-neutral-900"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>Kirim Format Pesanan ke WhatsApp Admin</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Exact Visual Reproduction of the WhatsApp Bubble in image.png */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Chat Canvas */}
            <div className="bg-[#E4DDD6] rounded-3xl p-4 sm:p-5 shadow-xl border border-neutral-300 overflow-hidden relative">
              
              {/* Top Bar on Preview */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-300/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                  <span className="text-xs font-bold text-neutral-800">
                    Live Preview Format Pesanan
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="text-[11px] font-semibold text-neutral-700 bg-white/80 hover:bg-white border border-neutral-300 py-1 px-2.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copySuccess ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* The White WhatsApp Chat Bubble (Exact layout from image.png) */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-neutral-200 text-neutral-900 text-xs sm:text-sm font-sans leading-relaxed relative">
                
                {/* Header */}
                <div className="font-bold text-neutral-900 leading-snug mb-4">
                  FORM PEMESANAN TOLONG.IN<br />
                  <span className="font-normal text-neutral-700">Menolong dengan Hati, Melesat Lebih Tinggi</span>
                </div>

                {/* Section 1: Data Diri */}
                <div className="space-y-1 mb-4">
                  <div>
                    <span className="font-medium text-neutral-900">Nama:</span>{' '}
                    <span className="text-neutral-800">{displayData.nama}</span>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-900">Fakultas & Angkatan:</span>{' '}
                    <span className="text-neutral-800">{displayData.fakultasAngkatan}</span>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-900">No. WhatsApp:</span>{' '}
                    <span className="text-[#0B63CE] font-medium underline underline-offset-2">
                      {displayData.noWa}
                    </span>
                  </div>
                </div>

                {/* Section 2: Kebutuhan & Deadline */}
                <div className="space-y-1 mb-4">
                  <div>
                    <span className="font-medium text-neutral-900">Mau ditolong apa:</span>{' '}
                    <span className="text-neutral-800 font-semibold">{displayData.mauDitolongApa}</span>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-900">Deadline:</span>{' '}
                    <span className="text-neutral-800">{displayData.deadline}</span>
                  </div>
                </div>

                {/* Section 3: Lokasi Awal & Tujuan */}
                <div className="space-y-1 mb-4">
                  <div>
                    <span className="font-medium text-neutral-900">Lokasi Awal:</span>{' '}
                    <span className="text-neutral-800">{displayData.lokasiAwal}</span>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-900">Lokasi Tujuan:</span>{' '}
                    <span className="text-neutral-800">{displayData.lokasiTujuan}</span>
                  </div>
                </div>

                {/* Section 4: Bayar Jasa & Disclaimer */}
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="font-medium text-neutral-900">Aku mau bayar jasa ini:</span>
                    <span className="text-neutral-900 font-bold ml-1">{displayData.bayarJasa}</span>
                  </div>
                  <div className="text-neutral-600 text-xs leading-normal">
                    (Belum termasuk biaya barang, makanan, minuman, atau parkir yaa)
                  </div>
                </div>

                {/* Section 5: Catatan */}
                <div className="text-neutral-800 mb-2">
                  <span className="font-medium text-neutral-900">Catatan:</span>{' '}
                  <span className="text-neutral-700">{displayData.catatan || '-'}</span>
                </div>

                {/* WhatsApp Timestamp at bottom right (like 20.27 in the photo) */}
                <div className="text-right text-[10px] text-neutral-400 mt-2 font-mono">
                  20.27
                </div>

              </div>

              {/* Watermark Label */}
              <div className="text-center pt-3 text-[11px] text-neutral-600 font-medium">
                💬 Format pesan ini disesuaikan 100% dengan format standar WhatsApp <strong>Tolong.in</strong>
              </div>

            </div>

            {/* Helper Trust Banner */}
            <div className="p-4 rounded-2xl bg-[#F8F9FB] border border-neutral-200 text-xs text-neutral-600 space-y-1">
              <span className="font-bold text-neutral-800 block">Cara Kerja Pemesanan:</span>
              <p>1. Tekan tombol hijau di atas untuk langsung mengirim format ini ke WhatsApp admin.</p>
              <p>2. Admin akan merespons dalam hitungan menit untuk mengonfirmasi kesepakatan dan mencarikan runner siaga.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
