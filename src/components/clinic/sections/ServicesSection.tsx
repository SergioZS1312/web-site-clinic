'use client';

import { ReactNode } from 'react';
import { Activity, Dumbbell, Hand, Heart, ShieldCheck, Zap } from 'lucide-react';
import { SectionHeader } from '../../ui/SectionHeader';
import StatCard from '../shared/StatCard';
import { serviceImages, serviceStats, servicesList } from '../../../lib/clinic-content';

const serviceIcons: Record<string, ReactNode> = {
  'sports-physio': <Dumbbell className="h-10 w-10" strokeWidth={1.8} />,
  'manual-therapy': <Hand className="h-10 w-10" strokeWidth={1.8} />,
  'physical-rehab': <Activity className="h-10 w-10" strokeWidth={1.8} />,
  electrotherapy: <Zap className="h-10 w-10" strokeWidth={1.8} />,
  'massage-therapy': <Heart className="h-10 w-10" strokeWidth={1.8} />,
  'post-op-rehab': <ShieldCheck className="h-10 w-10" strokeWidth={1.8} />,
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
