/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ServicesSection } from './components/ServicesSection';
import { QuickOrderForm } from './components/QuickOrderForm';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyUsSection } from './components/WhyUsSection';
import { AboutAndAreaSection } from './components/AboutAndAreaSection';
import { JoinRunnerSection } from './components/JoinRunnerSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CommunitySection } from './components/CommunitySection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ActionModal } from './components/ActionModal';
import { OrderPage } from './components/OrderPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'order'>('home');
  const [isOprecModalOpen, setIsOprecModalOpen] = useState(false);

  // Sync routing state with URL hash (#pesan)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#pesan' || hash.startsWith('#pesan')) {
        setCurrentPage('order');
      } else if (hash === '' || hash === '#') {
        setCurrentPage('home');
      }
    };

    // Check initial hash on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToOrder = () => {
    setCurrentPage('order');
    if (window.location.hash !== '#pesan') {
      window.location.hash = '#pesan';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    if (window.location.hash === '#pesan') {
      // Remove hash cleanly without full page refresh
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If user navigates to dedicated Order & Services page
  if (currentPage === 'order') {
    return <OrderPage onBackToHome={navigateToHome} />;
  }

  // Default Home Page View
  return (
    <div className="min-h-screen bg-page text-ink flex flex-col font-sans selection:bg-[#F2B705] selection:text-[#B71C1C]">
      {/* 1. Navbar (Sticky) with onOrderClick handler */}
      <Navbar onOrderClick={navigateToOrder} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 2. Hero with onOrderClick handler & removed screenshot pilot badge */}
        <Hero onOrderClick={navigateToOrder} />

        {/* 3. Strip Angka Kepercayaan (Count-Up Animation) */}
        <TrustStats />

        {/* 4. Layanan (5 Kategori & Template WhatsApp) */}
        <ServicesSection onOrderClick={navigateToOrder} />

        {/* 5. Form "Pesan Cepat" (Fitur Interaktif Utama + Live WA Preview) */}
        <QuickOrderForm />

        {/* 6. Cara Kerja (Stepper 6 Langkah + Callout 15 Menit) */}
        <HowItWorksSection />

        {/* 7. Kenapa Tolong.in & Blok 3 Kata Ajaib */}
        <WhyUsSection />

        {/* 8. Tentang Kami & Area Layanan (UPI Bandung & Roadmap) */}
        <AboutAndAreaSection />

        {/* 9. Jadi Runner / Bergabung (Alur Oprec & Jenjang Karier) */}
        <JoinRunnerSection onOpenOprecModal={() => setIsOprecModalOpen(true)} />

        {/* 10. Testimoni (Pelanggan UPI & Rating Bintang Emas) */}
        <TestimonialsSection />

        {/* 11. Komunitas & Kolaborasi (@upi.tolong, @upi.shitpost, UMKM) */}
        <CommunitySection />

        {/* 12. FAQ (Akordeon 7 Pertanyaan) */}
        <FaqSection />

        {/* 13. Banner CTA Akhir with onOrderClick handler */}
        <CtaBanner onOrderClick={navigateToOrder} />
      </main>

      {/* 14. Footer (Merah Gelap #4A0E0E) */}
      <Footer />

      {/* Floating Action Button with onOrderClick handler */}
      <FloatingWhatsApp onOrderClick={navigateToOrder} />

      {/* Modal Dialog for Runner Open Recruitment */}
      <ActionModal
        isOpen={isOprecModalOpen}
        onClose={() => setIsOprecModalOpen(false)}
      />
    </div>
  );
}
