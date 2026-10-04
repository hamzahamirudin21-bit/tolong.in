import React from 'react';
import {
  Coins,
  Briefcase,
  Users,
  Award,
  ArrowRight,
  LucideProps,
} from 'lucide-react';
import {
  RUNNER_BENEFITS,
  OPREC_OPEN,
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
    <section id="jadi-runner" className="py-16 md:py-24 bg-surface border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-accent-tint border border-accent-line text-xs font-semibold text-accent mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F2B705]" />
            <span>Peluang Berkembang Bersama Kami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            Kerja fleksibel, menyesuaikan jadwal kuliahmu.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-soft">
            Dapatkan penghasilan mandiri, bangun portofolio kepemimpinan, dan perluas pertemanan lintas jurusan di kampus.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {RUNNER_BENEFITS.map((b, idx) => {
            const IconComponent = BENEFIT_ICONS[b.iconName] || Briefcase;
            return (
              <div
                key={idx}
                className="bg-page rounded-3xl p-6 border border-line hover:border-accent/30 hover:bg-surface shadow-xs dark:shadow-none hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent-tint group-hover:bg-accent-tint/80 text-accent flex items-center justify-center mb-5 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-ink group-hover:text-accent transition-colors mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-ink-soft leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Posisi Terbuka Card */}
        <div className="bg-accent-tint/60 rounded-3xl p-6 sm:p-8 border border-accent-line mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                Peran yang Dibuka
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-ink mt-1">
                Pilihan Posisi Sesuai Minat & Keahlianmu
              </h3>
            </div>
            <span className="text-xs font-medium text-ink-soft bg-surface py-1 px-3 rounded-full border border-accent-line self-start sm:self-auto shadow-2xs">
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
              <div key={idx} className="bg-surface p-4 rounded-2xl border border-accent-line shadow-2xs dark:shadow-none">
                <span className="text-xs font-bold text-accent block mb-1">
                  0{idx + 1}. {p.role}
                </span>
                <p className="text-[11px] text-ink-soft leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tumbuh Bersama Organisasi tolong.in (Card Padat & Tombol Oprec) */}
        <div className="bg-neutral-900 dark:bg-[#1C1819] text-white rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-none border border-transparent dark:border-line text-center">
          <div className="max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F2B705] block mb-1.5">
              Jenjang Karier & Kepemimpinan
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Tumbuh Bersama Organisasi tolong.in
            </h3>

            {/* Status Pill & Action Button */}
            <div className="flex flex-col items-center justify-center gap-3">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                  OPREC_OPEN
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                    : 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    OPREC_OPEN ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                  }`}
                />
                {OPREC_OPEN ? 'Pendaftaran sedang dibuka' : 'Pendaftaran belum dibuka'}
              </span>

              <button
                type="button"
                onClick={onOpenOprecModal}
                className="inline-flex items-center gap-2 py-3.5 px-8 rounded-full bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-xl transition-all cursor-pointer group mt-1"
              >
                <span>Daftar Open Recruitment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-neutral-400 mt-2">
                Informasi pembukaan batch terbaru selalu kami umumkan via Instagram{' '}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 font-semibold hover:underline"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
