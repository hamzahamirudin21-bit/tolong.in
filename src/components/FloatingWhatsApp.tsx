import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WA_LINK } from '../data/contentData';

interface FloatingWhatsAppProps {
  onOrderClick?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOrderClick }) => {
  return (
    <aside
      aria-label="Kontak Langsung Pemesanan Tolong.in"
      className="fixed bottom-5 right-5 z-40 flex items-center group pointer-events-auto"
    >
      {onOrderClick ? (
        <button
          type="button"
          onClick={onOrderClick}
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 sm:px-5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-bold text-xs sm:text-sm active:scale-95 border-2 border-white dark:border-line-strong cursor-pointer"
          aria-label="Pesan Layanan Tolong.in Sekarang"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F2B705]"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span>Pesan Sekarang</span>
        </button>
      ) : (
        <a
          href="#pesan"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 sm:px-5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-bold text-xs sm:text-sm active:scale-95 border-2 border-white dark:border-line-strong cursor-pointer"
          aria-label="Pesan Layanan Tolong.in Sekarang"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F2B705]"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span>Pesan Sekarang</span>
        </a>
      )}
    </aside>
  );
};
