import React from 'react';
import { Users, Handshake, ArrowUpRight, MessageCircle, Heart, Sparkles } from 'lucide-react';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
  PARTNER_HANDLE,
  PARTNER_URL,
  WA_LINK,
  WA_NUMBER,
} from '../data/contentData';
import {
  MediaPartnerBadge,
  StudentOrgBadge,
  UmkmFoodBadge,
} from './illustrations/PartnerBadges';

export const CommunitySection: React.FC = () => {
  const collabWaLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    'Halo Admin tolong.in! Kami dari (Organisasi Mahasiswa / Pelaku Usaha UMKM) ingin mengajak kolaborasi kemitraan bersama tolong.in. Boleh minta waktu untuk diskusi kak? Terima kasih!'
  )}`;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-[#D32F2F] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F2B705]" />
            <span>Ekosistem Kampus yang Hidup</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Komunitas & Kolaborasi
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Terhubung bersama ribuan mahasiswa UPI, media kampus, dan pelaku usaha lokal di Bandung.
          </p>
        </div>

        {/* Media Sosial Cards (Instagram & TikTok) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          
          {/* Instagram Card */}
          <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 rounded-3xl p-6 sm:p-8 border border-pink-200/80 shadow-xs flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center font-extrabold text-base shadow-sm">
                  IG
                </div>
                <span className="text-xs font-bold text-pink-700 bg-white/80 py-1 px-3 rounded-full border border-pink-200">
                  Instagram Resmi
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-1">
                {INSTAGRAM_HANDLE}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                Update harian operasional kampus, info open recruitment runner, diskon jastip mingguan, dan konten seputar dinamika perkuliahan UPI.
              </p>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full bg-neutral-900 hover:bg-[#E53935] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <span>Ikuti di Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* TikTok Card */}
          <div className="bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200/80 rounded-3xl p-6 sm:p-8 border border-neutral-300 shadow-xs flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center font-extrabold text-base shadow-sm">
                  TT
                </div>
                <span className="text-xs font-bold text-neutral-700 bg-white py-1 px-3 rounded-full border border-neutral-300">
                  TikTok Komunitas
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-1">
                {TIKTOK_HANDLE}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                Keseruan di balik layar runner mengantar pesanan, rekomendasi kuliner hidden gems di Gegerkalong, dan tips praktis seputar kehidupan kosan.
              </p>
            </div>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full bg-neutral-900 hover:bg-[#E53935] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <span>Ikuti di TikTok</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Blok Berkolaborasi Dengan */}
        <div className="bg-[#F8F9FB] rounded-3xl p-7 sm:p-10 border border-neutral-200/80">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
              Jejaring Kemitraan
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
              Berkolaborasi Bersama Ekosistem Kampus
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Partner 1: upi.shitpost */}
            <a
              href={PARTNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-2xl border border-neutral-200/80 hover:border-[#D32F2F] transition-all flex items-center gap-3.5 group shadow-2xs"
            >
              <MediaPartnerBadge size={48} />
              <div className="text-left">
                <div className="text-xs font-bold text-neutral-900 group-hover:text-[#D32F2F] transition-colors flex items-center gap-1">
                  <span>{PARTNER_HANDLE}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-[11px] text-[#B71C1C] font-semibold">Partner Resmi Media Kampus</div>
                <div className="text-[10px] text-neutral-500">Komunitas & Publikasi Mahasiswa UPI</div>
              </div>
            </a>

            {/* Partner 2: Organisasi Kemahasiswaan */}
            <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 flex items-center gap-3.5 shadow-2xs">
              <StudentOrgBadge size={48} />
              <div className="text-left">
                <div className="text-xs font-bold text-neutral-900">Organisasi Kemahasiswaan</div>
                <div className="text-[11px] text-neutral-600 font-medium">BEM, Hima Jurusan & UKM Kampus</div>
                <div className="text-[10px] text-neutral-500">Dukungan logistik acara & survei riset</div>
              </div>
            </div>

            {/* Partner 3: UMKM Sekitar Kampus */}
            <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 flex items-center gap-3.5 shadow-2xs">
              <UmkmFoodBadge size={48} />
              <div className="text-left">
                <div className="text-xs font-bold text-neutral-900">UMKM Kuliner & Usaha Sekitar</div>
                <div className="text-[11px] text-neutral-600 font-medium">Warung Gerlong, Ledeng & Setiabudi</div>
                <div className="text-[10px] text-neutral-500">Kemitraan jastip & promosi menu harian</div>
              </div>
            </div>
          </div>

          {/* Ajakan Kolaborasi Banner */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-sm font-bold text-neutral-900">
                Punya UMKM di sekitar kampus atau organisasi mahasiswa yang ingin bekerja sama?
              </h4>
              <p className="text-xs text-neutral-500 mt-0.5">
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
