import React from 'react';
import { MessageCircle, ArrowRight, Heart } from 'lucide-react';
import { WA_LINK, BRAND_TAGLINE } from '../data/contentData';

interface CtaBannerProps {
  onOrderClick?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOrderClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#E53935] via-[#D32F2F] to-[#B71C1C] dark:from-[#9B1B1B] dark:via-[#7F1717] dark:to-[#5E1010] text-white py-14 md:py-20 border-b border-transparent dark:border-line">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5" aria-hidden="true">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border-8 border-white" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border-4 border-dashed border-[#F2B705]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/15 border border-white/20 text-xs font-semibold text-white">
          <Heart className="w-3.5 h-3.5 fill-[#F2B705] text-[#F2B705]" />
          <span>{BRAND_TAGLINE}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ada yang bisa kami tolong hari ini?
        </h2>

        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Kirim kebutuhanmu sekarang lewat chat WhatsApp. Admin kami siap menyapa, berdiskusi harga secara wajar, dan mencarikan runner mahasiswa yang pas di sekitarmu.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          {onOrderClick ? (
            <button
              type="button"
              onClick={onOrderClick}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white hover:bg-neutral-100 active:scale-98 text-[#B71C1C] font-extrabold text-base shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2.5 group"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366] text-white" />
              <span>Pesan Sekarang</span>
              <ArrowRight className="w-4 h-4 text-[#B71C1C] group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <a
              href="#pesan"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white hover:bg-neutral-100 active:scale-98 text-[#B71C1C] font-extrabold text-base shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2.5 group"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366] text-white" />
              <span>Pesan Sekarang</span>
              <ArrowRight className="w-4 h-4 text-[#B71C1C] group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
