import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WA_LINK } from '../data/contentData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Kontak Langsung WhatsApp Tolong.in"
      className="fixed bottom-5 right-5 z-40 flex items-center group pointer-events-auto"
    >
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 sm:px-5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-bold text-xs sm:text-sm active:scale-95 border-2 border-white dark:border-line-strong"
        aria-label="Hubungi Admin Tolong.in di WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F2B705]"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="hidden sm:inline">Pesan via WhatsApp</span>
        <span className="sm:hidden">Chat WA</span>
      </a>
    </aside>
  );
};
