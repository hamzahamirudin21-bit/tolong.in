import React, { useState } from 'react';
import { Clock, ArrowRight, Bike } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, TIMEOUT_CALLOUT, WA_LINK } from '../data/contentData';
import {
  Step1ChatSvg,
  Step2HandshakeSvg,
  Step3FlyingOrderSvg,
  Step4MotorRunningSvg,
  Step5QrisLaserSvg,
  Step6RatingSvg,
} from './illustrations/HowItWorksIllustrations';

const STEP_ILLUSTRATIONS = [
  Step1ChatSvg,
  Step2HandshakeSvg,
  Step3FlyingOrderSvg,
  Step4MotorRunningSvg,
  Step5QrisLaserSvg,
  Step6RatingSvg,
];

// Tilt Card Component
const TiltCard: React.FC<{
  step: typeof HOW_IT_WORKS_STEPS[0];
  index: number;
}> = ({ step, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Illustration = STEP_ILLUSTRATIONS[index] || Step1ChatSvg;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // max 8deg tilt
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className={`bg-surface rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
        isHovered
          ? 'border-accent/60 dark:border-accent shadow-[0_16px_32px_rgba(211,47,47,0.15)] dark:shadow-none ring-1 ring-accent/20 dark:ring-accent-line'
          : 'border-line shadow-xs dark:shadow-none'
      }`}
    >
      {/* Background Accent Glow on Hover */}
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#F2B705]/10 blur-xl pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div>
        {/* Step Header: Custom Illustrated Icon + Number */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-18 h-18 rounded-2xl bg-surface-2 border border-line flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
            <Illustration className="w-full h-full object-contain" />
          </div>
          <span className="w-9 h-9 rounded-full bg-[#F2B705] text-[#4A0E0E] flex items-center justify-center font-extrabold text-xs shadow-xs border border-[#C99700]/30 group-hover:scale-110 transition-transform">
            {step.step}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors mb-2">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
          {step.desc}
        </p>
      </div>

      {/* Step Marker Progress Label */}
      <div className="pt-4 mt-4 border-t border-line flex items-center justify-between text-[11px] font-bold tracking-wider text-ink-muted">
        <span>Langkah 0{step.step} dari 06</span>
        <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
          <span>SOP Ramah</span>
          <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="cara-kerja" className="relative py-16 md:py-24 bg-page border-b border-line overflow-hidden">
      
      {/* Background Decorative Dashed Trails */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20" aria-hidden="true">
        <div className="max-w-7xl mx-auto h-full relative">
          <svg className="w-full h-full" fill="none">
            <path
              d="M 100 240 Q 400 320 640 240 T 1200 340"
              stroke="#E53935"
              strokeWidth="2"
              strokeDasharray="8 8"
              strokeOpacity="0.25"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-accent-tint border border-accent-line text-xs font-semibold text-accent mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#F2B705]" />
            <span>Alur Pelayanan Santai & Rapi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            Cara Kerja Tolong.in
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-soft">
            Enam langkah sederhana dari chat pertama sampai urusanmu beres dengan aman.
          </p>
        </div>

        {/* 6 Stepper Cards Grid with 3D Tilt Hover & Custom SVG Illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <TiltCard key={step.step} step={step} index={idx} />
          ))}
        </div>

        {/* Visual Progress Connector Bar with Moving Runner Bike */}
        <div className="hidden lg:flex items-center justify-between p-4 mb-10 rounded-2xl bg-surface border border-line shadow-2xs dark:shadow-none">
          <div className="flex items-center gap-2 text-xs font-bold text-ink">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Alur Transparan:</span>
            <span className="text-ink-muted font-normal">Chat Admin → Sepakati Harga → Runner Jalan → Selesai & Review</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-accent">
            <Bike className="w-4 h-4 animate-bounce" />
            <span>Runner UPI Siaga di Sekitarmu</span>
          </div>
        </div>

        {/* 15-Minute Timeout Callout Banner */}
        <div className="p-5 sm:p-6 rounded-3xl bg-gold-tint border border-gold-line flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#F2B705]/20 text-gold-ink flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-gold-ink" />
            </div>
            <div>
              <span className="font-bold text-gold-ink text-xs sm:text-sm block">
                Jaminan Respons Cepat Admin:
              </span>
              <p className="text-xs text-gold-ink/90 leading-relaxed mt-0.5">
                {TIMEOUT_CALLOUT}
              </p>
            </div>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-6 rounded-full bg-neutral-900 dark:bg-surface-2 dark:border dark:border-line hover:bg-[#E53935] text-white text-xs font-bold transition-all shadow-xs whitespace-nowrap flex items-center gap-2 cursor-pointer active:scale-95 shrink-0"
          >
            <span>Tanya Admin Sekarang</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
