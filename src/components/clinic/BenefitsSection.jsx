'use client';

import React from 'react';
import { sectionHeaderClass, sectionSubtitleClass, sectionTitleClass } from './constants';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Reduccion del dolor',
      desc: 'Alivio efectivo y duradero mediante técnicas especializadas',
      icon: '🎯',
    },
    {
      title: 'Mejora de movilidad',
      desc: 'Recupera tu rango de movimiento y flexibilidad natural',
      icon: '💪',
    },
    {
      title: 'Recuperacion mas rapida',
      desc: 'Procesos optimizados para acelerar tu retorno a las actividades',
      icon: '⚡',
    },
    {
      title: 'Prevencion de lesiones',
      desc: 'Fortalecimiento y educación para evitar futuras complicaciones',
      icon: '🛡️',
    },
    {
      title: 'Mejor rendimiento fisico',
      desc: 'Optimiza tu capacidad física para el deporte y vida diaria',
      icon: '📈',
    },
  ];

  return (
    <section id="beneficios" className="bg-surface-0 px-6 py-24 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className={sectionHeaderClass}>
          <h2 className={`${sectionTitleClass} text-primary-700`}>¿Qué lograrás con nosotros?</h2>
          <p className={sectionSubtitleClass}>
            Beneficios reales que mejoran tu calidad de vida
          </p>
        </div>

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




