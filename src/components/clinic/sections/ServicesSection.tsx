'use client';

import { ReactNode } from 'react';
import { SectionHeader } from '../../ui/SectionHeader';
import StatCard from '../shared/StatCard';
import { serviceImages, serviceStats, servicesList } from '../../../lib/clinic-content';

const serviceIcons: Record<string, ReactNode> = {
  'sports-physio': (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  ),
  'manual-therapy': (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2c-4 0-8 4-8 9v9h16v-9c0-5-4-9-8-9z"></path>
      <path d="M9 13l3 3 3-3"></path>
    </svg>
  ),
  'physical-rehab': (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3a4 4 0 0 0 4-4V6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a7 7 0 0 0 7 7h-9"></path>
    </svg>
  ),
  electrotherapy: (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="11" y="2" width="2" height="20" rx="1"></rect>
      <path d="M8 6h8 M8 10h8 M8 14h8 M8 18h8"></path>
    </svg>
  ),
  'massage-therapy': (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 12h16M12 4v16" />
      <path d="M7 7l10 10" />
    </svg>
  ),
  'post-op-rehab': (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 12h18" />
      <path d="M6 8h12M8 16h8" />
      <path d="M12 3v18" />
    </svg>
  ),
};

const ServicesSection = () => {

  return (
    <section id="services" className="bg-muted-50 px-6 py-24 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow=""
          title="Nuestros servicios"
          description="Tratamientos especializados diseñados para tu recuperación integral."
        />

        {/* Two Column Layout */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Image Mosaic */}
          <div className="grid grid-cols-2 gap-3">
            {/* Large Image - spans 2 rows */}
            <div className="row-span-2 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${serviceImages[0]}')`, minHeight: '400px' }}
              />
            </div>

            {/* Top Right Image */}
            <div className="overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${serviceImages[1]}')`, minHeight: '195px' }}
              />
            </div>

            {/* Middle Right Image */}
            <div className="overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${serviceImages[2]}')`, minHeight: '195px' }}
              />
            </div>

            {/* Bottom Left Image */}
            <div className="overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${serviceImages[3]}')`, minHeight: '195px' }}
              />
            </div>

            {/* Bottom Middle Image */}
            <div className="overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${serviceImages[4]}')`, minHeight: '195px' }}
              />
            </div>
          </div>

          {/* Right Column: Services List */}
          <div className="flex flex-col gap-6">
            {servicesList.map((service) => (
              <div
                key={service.title}
                className="group flex gap-5 border-l-4 border-transparent bg-linear-to-r from-muted-50 to-transparent p-6 transition-all duration-300 hover:border-primary-600 hover:from-primary-50 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="shrink-0 text-primary-600 transition-transform duration-300 group-hover:scale-110">
                  {serviceIcons[service.id]}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold uppercase tracking-tight text-secondary-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-600">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {serviceStats.map((stat) => (
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

export default ServicesSection;
