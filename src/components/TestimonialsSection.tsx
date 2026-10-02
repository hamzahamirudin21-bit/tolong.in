import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/contentData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FB] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-[#D32F2F] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F2B705]" />
            <span>Suara Mahasiswa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Apa Kata Mereka Tentang tolong.in?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Kisah nyata dari teman-teman mahasiswa UPI yang terbantu saat hari-hari padat kuliah.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        {/* // TODO: Minta izin pelanggan sebelum publikasi resmi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 hover:border-[#D32F2F]/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Gold Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#F2B705]">
                  {[...Array(t.stars)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-[#F2B705]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-neutral-800 font-medium leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-neutral-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {t.role}
                  </div>
                </div>

                <span className="text-[10px] font-bold text-[#D32F2F] bg-red-50 border border-red-100 py-1 px-2.5 rounded-full">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-neutral-400">
          * Seluruh testimoni berasal dari pelanggan terverifikasi di kawasan kampus UPI Bandung.
        </div>

      </div>
    </section>
  );
};
