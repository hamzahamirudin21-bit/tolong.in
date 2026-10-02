/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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

export default function App() {
  const [isOprecModalOpen, setIsOprecModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1F1F1F] flex flex-col font-sans selection:bg-[#F2B705] selection:text-[#B71C1C]">
      {/* 1. Navbar (Sticky) */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 2. Hero (WhatsApp Mockup & Evergreen Visuals) */}
        <Hero />

        {/* 3. Strip Angka Kepercayaan (Count-Up Animation) */}
        <TrustStats />

        {/* 4. Layanan (5 Kategori & Template WhatsApp) */}
        <ServicesSection />

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

        {/* 13. Banner CTA Akhir */}
        <CtaBanner />
      </main>

      {/* 14. Footer (Merah Gelap #4A0E0E) */}
      <Footer />

      {/* Floating WhatsApp Action Button (Mobile & Desktop) */}
      <FloatingWhatsApp />

      {/* Modal Dialog for Runner Open Recruitment */}
      <ActionModal
        isOpen={isOprecModalOpen}
        onClose={() => setIsOprecModalOpen(false)}
      />
    </div>
  );
}
