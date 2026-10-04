import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Clock,
  Instagram,
  Heart,
} from 'lucide-react';
import {
  WA_NUMBER,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  OPREC_OPEN,
} from '../data/contentData';
import { TolongInLogo } from './TolongInLogo';

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ActionModal: React.FC<ActionModalProps> = ({ isOpen, onClose }) => {
  const [candidateName, setCandidateName] = useState('');
  const [candidateMajor, setCandidateMajor] = useState('');
  const [candidateRole, setCandidateRole] = useState('Runner Lapangan (Jastip & Belanja)');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setCandidateName('');
    setCandidateMajor('');
    onClose();
  };

  const getWaLink = () => {
    const text = `Halo Admin tolong.in! 👋
Saya ${candidateName.trim() || 'Calon Pelamar'} (${candidateMajor.trim() || 'Mahasiswa UPI'}) ingin mendaftar Open Recruitment tolong.in untuk posisi: ${candidateRole}.

Mohon info formulir pendaftaran dan tahap seleksi ya kak. Terima kasih! 🙏
#MenolongDenganHati`;

    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-lg bg-surface rounded-3xl shadow-2xl dark:shadow-none border border-transparent dark:border-line p-6 sm:p-8 overflow-hidden text-ink"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-ink-muted hover:text-ink hover:bg-surface-2 transition-colors cursor-pointer"
          aria-label="Tutup jendela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* JIKA OPREC BELUM DIBUKA (OPREC_OPEN === false) */}
        {!OPREC_OPEN ? (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 bg-gold-tint text-gold-ink rounded-3xl border border-gold-line flex items-center justify-center mx-auto shadow-xs">
              <Clock className="w-8 h-8 text-gold-ink" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-gold-ink uppercase tracking-wider">
                Status Seleksi
              </span>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
                Open Recruitment Belum Dibuka
              </h3>
            </div>

            <div className="bg-page rounded-2xl p-4 border border-line text-left space-y-2">
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                Pendaftaran Open Recruitment <strong>tolong.in</strong> belum dibuka. Tunggu info selanjutnya ya!
              </p>
              <p className="text-xs text-ink-muted leading-relaxed">
                Pengumuman pembukaan batch pendaftaran runner dan staf baru akan dibagikan secara resmi melalui akun Instagram{' '}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-bold hover:underline"
                >
                  {INSTAGRAM_HANDLE}
                </a>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 rounded-full bg-[#E53935] hover:bg-[#B71C1C] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Pantau Instagram {INSTAGRAM_HANDLE}</span>
              </a>
              <button
                type="button"
                onClick={resetAndClose}
                className="py-3 px-6 rounded-full border border-line-strong text-ink hover:bg-surface-2 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        ) : !isSuccess ? (
          /* JIKA OPREC SEDANG DIBUKA (OPREC_OPEN === true) */
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TolongInLogo size={36} />
              <div>
                <h3 id="modal-title" className="text-xl font-bold text-ink">
                  Daftar Open Recruitment Runner
                </h3>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  Pendaftaran saat ini sedang dibuka!
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1.5">
                  Nama Lengkap / Panggilan
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Farhan"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-field border border-line-strong rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-hidden text-ink placeholder:text-ink-muted"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1.5">
                  Jurusan / Fakultas di UPI
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Pendidikan Ilmu Komputer / FPMIPA"
                  value={candidateMajor}
                  onChange={(e) => setCandidateMajor(e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-field border border-line-strong rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-hidden text-ink placeholder:text-ink-muted"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1.5">
                  Posisi Peminatan
                </label>
                <select
                  value={candidateRole}
                  onChange={(e) => setCandidateRole(e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 bg-field border border-line-strong rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-hidden text-ink"
                >
                  <option value="Runner Lapangan (Jastip & Belanja)">Runner Lapangan (Jastip & Belanja)</option>
                  <option value="Helper & Anjem (Pindahan / Antar-Jemput)">Helper & Anjem (Pindahan / Antar-Jemput)</option>
                  <option value="Tutor Akademik & Riset">Tutor Akademik & Riset</option>
                  <option value="Staf Operasional & Komunitas">Staf Operasional & Komunitas</option>
                </select>
              </div>

              <div className="p-3 bg-accent-tint rounded-xl border border-accent-line flex items-start gap-2 text-xs text-ink-soft">
                <Heart className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p>
                  Pendaftaran runner tolong.in tidak dipungut biaya apapun. Mahasiswa akan mendapatkan pembekalan SOP keramahan dan etika kerja.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#E53935] hover:bg-[#B71C1C] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lanjut Hubungkan ke WhatsApp Admin</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-ink">Data Awal Tersimpan!</h3>
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed max-w-sm mx-auto">
              Terima kasih <strong className="text-ink">{candidateName}</strong> dari{' '}
              <strong className="text-ink">{candidateMajor}</strong>. Klik tombol di bawah untuk langsung mengonfirmasi minatmu ke WhatsApp admin tolong.in.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={getWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={resetAndClose}
                className="w-full py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Kirim Format Pendaftaran via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={resetAndClose}
                className="py-2.5 px-4 text-xs font-semibold text-ink-muted hover:text-ink transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
