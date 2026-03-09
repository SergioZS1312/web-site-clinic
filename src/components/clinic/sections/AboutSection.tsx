'use client';

import { ReactNode } from 'react';
import { SectionHeader } from '../../ui/SectionHeader';
import CounterAnimation from '../shared/CounterAnimation';
import StatCard from '../shared/StatCard';
import { aboutStats, aboutValues } from '../../../lib/clinic-content';

const valueIcons: Record<string, ReactNode> = {
  professionalism: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M22 10L12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
    </svg>
  ),
  experience: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  ),
  commitment: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z" />
    </svg>
  ),
};

const AboutSection = () => {

  return (
    <section id="nosotros" className="bg-muted-50 px-6 py-24 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow=""
          title="Sobre nosotros"
          description="Un equipo comprometido con tu recuperación y bienestar"
        />

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Image Collage */}
          <div className="relative">
            {/* Large Main Image */}
            <div className="relative h-100 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80')" }}
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-primary-700 p-6 text-surface-0 shadow-xl">
                <div className="text-4xl font-black">
                  <CounterAnimation target={15} suffix="+" />
                </div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-wide">Años en el sector</div>
              </div>
            </div>

            {/* Small Images Grid */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="h-28 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=600&q=80')" }}
                />
              </div>
              <div className="h-28 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80')" }}
                />
              </div>
              <div className="h-28 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80')" }}
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="mb-6 text-3xl font-black uppercase leading-tight text-secondary-900">
              Expertos en recuperación y rendimiento físico
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-secondary-600">
              Somos un equipo de fisioterapeutas especializados en rehabilitación, readaptación deportiva
              y bienestar físico. Aplicamos protocolos basados en evidencia con atención personalizada.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {aboutValues.map((value) => (
                <div
                  key={value.title}
                  className="group flex items-start gap-4 border-l-4 border-primary-600 bg-surface-0 p-5 transition-all duration-300 hover:border-primary-600 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-transform duration-300 group-hover:scale-110">
                    {valueIcons[value.id]}
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-secondary-900">{value.title}</h4>
                    <p className="text-sm text-secondary-600">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {aboutStats.map((stat) => (
            <StatCard
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
