import React, { useState } from 'react';
import {
  Coins,
  Briefcase,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  LucideProps,
} from 'lucide-react';
import {
  RUNNER_BENEFITS,
  OPREC_TIMELINE,
  CAREER_LADDER,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from '../data/contentData';

const BENEFIT_ICONS: Record<string, React.FC<LucideProps>> = {
  Coins,
  Briefcase,
  Users,
  Award,
};

interface JoinRunnerSectionProps {
  onOpenOprecModal: () => void;
}

export const JoinRunnerSection: React.FC<JoinRunnerSectionProps> = ({ onOpenOprecModal }) => {
  return (
    <section id="jadi-runner" className="py-16 md:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-[#D32F2F] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F2B705]" />
            <span>Peluang Berkembang Bersama Kami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Kerja fleksibel, menyesuaikan jadwal kuliahmu.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Dapatkan penghasilan mandiri, bangun portofolio kepemimpinan, dan perluas pertemanan lintas jurusan di kampus.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {RUNNER_BENEFITS.map((b, idx) => {
            const IconComponent = BENEFIT_ICONS[b.iconName] || Briefcase;
            return (
              <div
                key={idx}
                className="bg-[#F8F9FB] rounded-3xl p-6 border border-neutral-200/80 hover:border-[#D32F2F]/30 hover:bg-white shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FDECEC] group-hover:bg-[#fbd3d3] text-[#D32F2F] flex items-center justify-center mb-5 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#D32F2F] transition-colors mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Posisi Terbuka Card */}
        <div className="bg-[#FDECEC]/60 rounded-3xl p-6 sm:p-8 border border-red-100 mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#B71C1C] uppercase tracking-wider block">
                Peran yang Dibuka
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-1">
                Pilihan Posisi Sesuai Minat & Keahlianmu
              </h3>
            </div>
            <span className="text-xs font-medium text-neutral-600 bg-white py-1 px-3 rounded-full border border-red-200/80 self-start sm:self-auto">
              Mahasiswa Aktif UPI
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { role: 'Runner Lapangan', desc: 'Antar pesanan makanan & barang titipan di sekitar kampus' },
              { role: 'Helper & Anjem', desc: 'Bantuan tenaga angkut pindahan kos & mobilitas kampus' },
              { role: 'Tutor Akademik', desc: 'Bimbingan belajar mata kuliah dasar & pembagian materi riset' },
              { role: 'Staf Operasional', desc: 'Membantu admin koordinasi pesanan & relasi komunitas' },
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-red-100/80 shadow-2xs">
                <span className="text-xs font-bold text-[#D32F2F] block mb-1">
                  0{idx + 1}. {p.role}
                </span>
                <p className="text-[11px] text-neutral-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Alur Open Recruitment Internship (Dibuka tiap ~2 bulan) */}
        <div className="bg-[#F8F9FB] rounded-3xl p-6 sm:p-9 border border-neutral-200/80 mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider block">
                Proses Seleksi
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Alur Open Recruitment Internship
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600 bg-white py-1.5 px-3.5 rounded-full border border-neutral-200">
              <Calendar className="w-4 h-4 text-[#D32F2F]" />
              <span>Dibuka berkala sekitar setiap 2 bulan</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {OPREC_TIMELINE.map((item) => (
              <div
                key={item.step}
                className="bg-white p-5 rounded-2xl border border-neutral-200/70 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#FDECEC] text-[#D32F2F] font-bold text-xs flex items-center justify-center mb-3">
                    {item.step}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jenjang Karier sebagai Timeline */}
        <div className="bg-neutral-900 text-white rounded-3xl p-7 sm:p-10 shadow-xl mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F2B705] block mb-1">
              Jenjang Karier & Kepemimpinan
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tumbuh Bersama Organisasi tolong.in
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2">
              Bukan sekadar kerja harian, kami membina kepemimpinanmu dari masa orientasi hingga tingkat pengambil keputusan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {CAREER_LADDER.map((ladder, idx) => (
              <div
                key={idx}
                className="bg-white/10 rounded-2xl p-5 border border-white/15 backdrop-blur-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#F2B705] uppercase tracking-wider mb-2">
                    Level 0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">
                    {ladder.title}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {ladder.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/10 text-[10px] text-neutral-400">
                  {idx === 0 ? 'Gerbang awal masuk' : idx === 3 ? 'Puncak manajerial' : 'Pengembangan tim'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button: Daftar Open Recruitment */}
        <div className="text-center space-y-3">
          {/*
            TODO: Tautkan href ke form pendaftaran resmi (misal: Google Form / Typeform)
            saat batch Open Recruitment periode berikutnya dibuka.
          */}
          <button
            type="button"
            onClick={onOpenOprecModal}
            className="inline-flex items-center gap-2 py-4 px-8 rounded-full bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-xl transition-all cursor-pointer group"
          >
            <span>Daftar Open Recruitment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-neutral-500">
            Informasi pembukaan batch terbaru juga selalu kami umumkan via Instagram{' '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D32F2F] font-semibold hover:underline"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
