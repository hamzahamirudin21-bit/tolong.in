import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
} from '../data/contentData';

export const CommunitySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-surface border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-accent-tint border border-accent-line text-xs font-semibold text-accent mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F2B705]" />
            <span>Ekosistem Kampus yang Hidup</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            Komunitas & Media Sosial
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-soft">
            Terhubung bersama ribuan mahasiswa UPI, info operasional kampus, dan keseruan keseharian tolong.in.
          </p>
        </div>

        {/* Media Sosial Cards (Instagram & TikTok) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
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

      </div>
    </section>
  );
};
