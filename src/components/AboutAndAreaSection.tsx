import React, { useState } from 'react';
import { MapPin, ArrowRight, CheckCircle2, Compass, Sparkles, Building2, ExternalLink, RefreshCw } from 'lucide-react';
import { ABOUT_STORY, CAMPUS_MAP_AREAS, ROADMAP_STAGES, BRAND_TAGLINE, BRAND_SLOGAN, BRAND_HASHTAG } from '../data/contentData';

export const AboutAndAreaSection: React.FC = () => {
  const [activeAreaId, setActiveAreaId] = useState<string>(CAMPUS_MAP_AREAS[0].id);
  const [mapError, setMapError] = useState(false);

  const activeArea = CAMPUS_MAP_AREAS.find((a) => a.id === activeAreaId) || CAMPUS_MAP_AREAS[0];
  
  // URL embed Google Maps resmi tanpa API key (Roadmap default view, bukan citra satelit)
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(activeArea.query)}&z=15&output=embed`;
  const directMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeArea.query)}`;

  return (
    <section id="tentang" className="py-16 md:py-24 bg-[#F8F9FB] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-[#D32F2F] mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#F2B705]" />
            <span>Mengenal Kami Lebih Dekat</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Tentang Tolong.in & Jangkauan Wilayah
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            {BRAND_SLOGAN}
          </p>
        </div>

        {/* Story Section: Two Original Paragraphs */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-neutral-200/80 shadow-xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider block">
                Cerita di Balik Inisiatif
              </span>
              <p>
                {ABOUT_STORY.paragraph1}
              </p>
              <p>
                {ABOUT_STORY.paragraph2}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#FDECEC] rounded-2xl p-6 border border-red-100 flex flex-col justify-between shadow-2xs">
              <div>
                <span className="text-xs font-bold text-[#B71C1C] uppercase tracking-wider block mb-1">
                  Semangat Utama
                </span>
                <div className="text-xl font-extrabold text-neutral-900">
                  "{BRAND_TAGLINE}"
                </div>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Bukan tentang transaksi semata, tapi tentang saling menjaga dan mempermudah kehidupan sesama mahasiswa di tanah rantau.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-red-200/70 text-[11px] font-bold text-[#D32F2F]">
                {BRAND_HASHTAG}
              </div>
            </div>

          </div>
        </div>

        {/* TUGAS 4: Area Layanan Aktif dengan Interaktif Google Maps (Roadmap Mode) */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 border border-neutral-200/80 shadow-sm mb-12">
          
          {/* Header Area & Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#D32F2F]" />
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                  Area Layanan Aktif Saat Ini (Kawasan UPI Bandung)
                </h3>
              </div>
              <p className="text-xs text-neutral-500 mt-1">
                Pilih area di bawah ini untuk melihat fokus navigasi runner kami di peta jalan Google Maps.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="self-start sm:self-auto text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 py-1.5 px-3.5 rounded-full flex items-center gap-2 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Beroperasi Aktif</span>
              </span>
            </div>
          </div>

          {/* 5 Interactive Area Chips (Click to switch map query & highlight active) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {CAMPUS_MAP_AREAS.map((area) => {
              const isActive = area.id === activeAreaId;
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => {
                    setActiveAreaId(area.id);
                    setMapError(false);
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-3 group active:scale-98 ${
                    isActive
                      ? 'bg-[#E53935] text-white border-[#E53935] shadow-md ring-2 ring-[#E53935]/20'
                      : 'bg-[#F8F9FB] hover:bg-neutral-100 text-neutral-800 border-neutral-200/80'
                  }`}
                  aria-pressed={isActive}
                >
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${
                      isActive ? 'text-white' : 'text-[#D32F2F] group-hover:scale-110'
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold leading-snug truncate">
                      {area.name}
                    </div>
                    <div className={`text-[11px] mt-0.5 line-clamp-1 ${isActive ? 'text-white/85' : 'text-neutral-500'}`}>
                      {area.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Area Banner Description */}
          <div className="p-3.5 mb-6 rounded-2xl bg-amber-50/80 border border-amber-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-900">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#4A0E0E]">Titik Vital Terlayani:</span>
              <span className="font-medium text-amber-800">{activeArea.popularSpots}</span>
            </div>
            <a
              href={directMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-[#B71C1C] hover:underline whitespace-nowrap"
            >
              <span>Buka di Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Google Maps Embed Frame (Roadmap Default Layer, Rounded-3xl, Shadow) */}
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden border border-neutral-200/90 shadow-md bg-neutral-100">
            {mapError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-white space-y-3">
                <MapPin className="w-10 h-10 text-[#D32F2F]" />
                <h4 className="font-bold text-neutral-900 text-sm">Peta Tidak Dapat Dimuat Langsung</h4>
                <p className="text-xs text-neutral-600 max-w-md">
                  Koneksi jaringan atau browser memblokir bingkai peta. Kamu tetap bisa membuka titik lokasi langsung di aplikasi Google Maps.
                </p>
                <a
                  href={directMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 rounded-full bg-[#E53935] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka {activeArea.name} di Google Maps</span>
                </a>
              </div>
            ) : (
              <iframe
                key={activeArea.id}
                src={mapEmbedUrl}
                title={`Peta Area Layanan Tolong.in: ${activeArea.name}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onError={() => setMapError(true)}
                className="w-full h-full"
              />
            )}

            {/* Bottom Overlay Pill on Map */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 bg-white/95 backdrop-blur-md py-2 px-4 rounded-2xl shadow-lg border border-neutral-200/80 flex items-center justify-between sm:justify-start gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D32F2F]" />
                <span className="font-bold text-neutral-900">{activeArea.name}</span>
              </div>
              <span className="text-[11px] text-[#D32F2F] font-semibold">{BRAND_HASHTAG}</span>
            </div>
          </div>

        </div>

        {/* Roadmap Visual 3 Tahap */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Peta Jalan Pengembangan
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
              Roadmap Perjalanan Tolong.in
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {ROADMAP_STAGES.map((stage, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-7 border transition-all duration-200 flex flex-col justify-between ${
                  stage.active
                    ? 'bg-white border-[#D32F2F] shadow-md ring-2 ring-[#D32F2F]/20'
                    : 'bg-[#F8F9FB] border-neutral-200/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold py-1 px-3 rounded-full ${
                      stage.active
                        ? 'bg-[#E53935] text-white'
                        : 'bg-neutral-200 text-neutral-700'
                    }`}>
                      Tahap {idx + 1}: {stage.stage}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-500">
                      {stage.status}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                    {stage.campus}
                  </h4>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-200/60 text-[11px] font-semibold text-neutral-400">
                  {stage.active ? 'Sedang berlangsung di lapangan' : 'Langkah strategis berikutnya'}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
