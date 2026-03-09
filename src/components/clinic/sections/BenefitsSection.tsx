'use client';

import { SectionHeader } from '../../ui/SectionHeader';
import { benefits } from '../../../lib/clinic-content';

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="bg-surface-0 px-6 py-24 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow=""
          title="¿Qué lograrás con nosotros?"
          description="Beneficios reales que mejoran tu calidad de vida"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group text-center transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 text-6xl transition-transform duration-300 group-hover:scale-125">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-bold uppercase leading-tight text-secondary-900">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-secondary-600">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Feature */}
        <div className="mt-20 border-t-2 border-primary-100 pt-12 text-center">
          <p className="text-2xl font-bold text-secondary-900">
            Tratamientos respaldados por{' '}
            <span className="text-primary-700">15+ años de experiencia</span> y{' '}
            <span className="text-primary-700">más de 2,000 pacientes</span> satisfechos
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
