import React, { useEffect, useState, useRef } from 'react';
import { TRUST_STATS } from '../data/contentData';

export const TrustStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="bg-white border-b border-neutral-200/80 py-10 sm:py-12 relative z-20 -mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Tag */}
        <div className="flex items-center justify-center gap-2 mb-8 text-xs font-semibold text-neutral-500">
          <span className="w-2 h-2 rounded-full bg-[#D32F2F]" />
          <span>Fase Pilot · Komunitas Universitas Pendidikan Indonesia (UPI)</span>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} isVisible={isVisible} />
          ))}
        </div>

      </div>
    </section>
  );
};

interface StatCardProps {
  stat: (typeof TRUST_STATS)[0];
  isVisible: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ stat, isVisible }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.value;
    const duration = 1400; // ms
    const increment = end / (duration / 25);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div className="bg-[#F8F9FB] rounded-2xl p-5 sm:p-6 border border-neutral-200/70 text-center hover:border-[#D32F2F]/30 hover:bg-white hover:shadow-md transition-all duration-200">
      {/* Big Number */}
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#D32F2F] tracking-tight tabular-nums flex items-center justify-center">
        {stat.prefix && <span>{stat.prefix}</span>}
        <span>{isVisible ? displayValue.toLocaleString('id-ID') : 0}</span>
        {stat.suffix && <span className="text-[#F2B705]">{stat.suffix}</span>}
      </div>

      {/* Label */}
      <h3 className="text-sm font-bold text-neutral-900 mt-2">
        {stat.label}
      </h3>

      {/* Period / Note */}
      <div className="mt-1 text-[11px] text-neutral-500 font-medium">
        <span>{stat.period}</span>
        <span className="block text-[10px] text-neutral-400 mt-0.5">{stat.note}</span>
      </div>
    </div>
  );
};
