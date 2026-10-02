import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { WA_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/contentData';
import { TolongInLogo } from './TolongInLogo';

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ActionModal: React.FC<ActionModalProps> = ({ isOpen, onClose }) => {
  const [candidateName, setCandidateName] = useState('');
  const [candidateMajor, setCandidateMajor] = useState('');
  const [candidateRole, setCandidateRole] = useState('Runner Lapangan');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleSendWa = () => {
    const text = `Halo Admin tolong.in! 👋
Saya ${candidateName.trim() || 'Calon Pelamar'} (${candidateMajor.trim() || 'Mahasiswa UPI'}) ingin mendaftar Open Recruitment tolong.in untuk posisi: ${candidateRole}.

Mohon info formulir pendaftaran dan jadwal seleksi batch terdekat ya kak. Terima kasih! 🙏
#MenolongDenganHati`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setCandidateName('');
    setCandidateMajor('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label="Tutup jendela"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TolongInLogo size={36} />
              <div>
                <h3 id="modal-title" className="text-xl font-bold text-neutral-900">
                  Daftar Open Recruitment Runner
                </h3>
                <p className="text-xs text-neutral-500">
                  Batch Oprec Internship dibuka berkala sekitar tiap 2 bulan
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                  Nama Lengkap / Panggilan
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Farhan"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 border border-neutral-300 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-hidden text-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                  Jurusan / Fakultas di UPI
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Pendidikan Ilmu Komputer / FPMIPA"
                  value={candidateMajor}
                  onChange={(e) => setCandidateMajor(e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 border border-neutral-300 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-hidden text-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                  Posisi Peminatan
                </label>
                <select
                  value={candidateRole}
                  onChange={(e) => setCandidateRole(e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 border border-neutral-300 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-hidden text-neutral-900"
                >
                  <option value="Runner Lapangan (Jastip/Belanja)">Runner Lapangan (Jastip & Belanja)</option>
                  <option value="Helper & Anjem (Pindahan/Mobilitas)">Helper & Anjem (Pindahan / Antar-Jemput)</option>
                  <option value="Tutor Akademik & Riset">Tutor Akademik & Riset</option>
                  <option value="Staf Operasional & Komunitas">Staf Operasional & Komunitas</option>
                </select>
              </div>

              <div className="p-3 bg-red-50 rounded-xl border border-red-100 flex items-start gap-2 text-xs text-neutral-700">
                <Heart className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                <p>
                  Pendaftaran runner tolong.in tidak dipungut biaya apapun. Mahasiswa akan mendapatkan pembekalan SOP keramahan dan keselamatan.
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
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Data Awal Tersimpan!</h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
              Terima kasih <strong className="text-neutral-900">{candidateName}</strong> dari{' '}
              <strong className="text-neutral-900">{candidateMajor}</strong>. Klik tombol di bawah untuk langsung mengonfirmasi minatmu ke WhatsApp admin tolong.in.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={handleSendWa}
                className="w-full py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Kirim Format Pendaftaran via WhatsApp</span>
              </button>
              <button
                onClick={resetAndClose}
                className="py-2.5 px-4 text-xs font-semibold text-neutral-500 hover:text-neutral-800 transition-colors"
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
