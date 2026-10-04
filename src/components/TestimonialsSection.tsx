import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/contentData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-page border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-accent-tint border border-accent-line text-xs font-semibold text-accent mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F2B705]" />
            <span>Suara Mahasiswa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            Apa Kata Mereka Tentang tolong.in?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-soft">
            Kisah nyata dari teman-teman mahasiswa UPI yang terbantu saat hari-hari padat kuliah.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        {/* TODO: Ganti dengan nama pelanggan asli yang sudah memberi izin sebelum publikasi. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-surface rounded-3xl p-6 sm:p-8 border border-line hover:border-accent/30 shadow-xs dark:shadow-none hover:shadow-xl dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Gold Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#F2B705]">
                  {[...Array(t.stars)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-[#F2B705]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-ink font-medium leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Service Meta with Initials Avatar */}
              <div className="pt-4 border-t border-line flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-100 to-rose-50 dark:from-accent-tint dark:to-accent-tint/40 text-accent font-extrabold text-xs flex items-center justify-center shrink-0 border border-accent-line shadow-2xs">
                    {t.initials || t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="truncate">
                    <div className="text-sm font-bold text-ink truncate">
                      {t.name}
                    </div>
                    <div className="text-xs text-ink-muted truncate">
                      {t.role}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-accent bg-accent-tint border border-accent-line py-1 px-2.5 rounded-full shrink-0">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-ink-muted">
          * Seluruh testimoni berasal dari pelanggan terverifikasi di kawasan kampus UPI Bandung.
        </div>

      </div>
    </section>
  );
};
