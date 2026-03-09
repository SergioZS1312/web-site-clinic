'use client';

import React from 'react';
import { sectionHeaderClass, sectionSubtitleClass, sectionTitleClass } from './constants';
import CounterAnimation from './CounterAnimation';

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
      title: 'Fisioterapia deportiva',
      desc: 'Tratamiento de lesiones en atletas y planes de retorno seguro a la actividad fisica.',
    },
    {
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2c-4 0-8 4-8 9v9h16v-9c0-5-4-9-8-9z"></path>
          <path d="M9 13l3 3 3-3"></path>
        </svg>
      ),
      title: 'Terapia manual',
      desc: 'Tecnicas manuales para aliviar dolor, mejorar movilidad articular y reducir tension muscular.',
    },
    {
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3a4 4 0 0 0 4-4V6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a7 7 0 0 0 7 7h-9"></path>
        </svg>
      ),
      title: 'Rehabilitacion fisica',
      desc: 'Programas funcionales para recuperar fuerza, control motor y autonomia en actividades diarias.',
    },
    {
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="11" y="2" width="2" height="20" rx="1"></rect>
          <path d="M8 6h8 M8 10h8 M8 14h8 M8 18h8"></path>
        </svg>
      ),
      title: 'Electroterapia',
      desc: 'Aplicacion de corrientes terapeuticas para control del dolor y estimulacion muscular.',
    },
    {
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 12h16M12 4v16" />
          <path d="M7 7l10 10" />
        </svg>
      ),
      title: 'Masoterapia',
      desc: 'Masaje terapeutico para descarga muscular, recuperacion post esfuerzo y bienestar integral.',
    },
    {
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 12h18" />
          <path d="M6 8h12M8 16h8" />
          <path d="M12 3v18" />
        </svg>
      ),
      title: 'Rehabilitacion postoperatoria',
      desc: 'Acompanamiento progresivo despues de cirugia para recuperar movilidad y volver a tus rutinas.',
    },
  ];

  const images = [
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <section id="services" className="bg-muted-50 px-6 py-24 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className={sectionHeaderClass}>
          <h2 className={`${sectionTitleClass} text-primary-700`}>Nuestros servicios</h2>
          <p className={sectionSubtitleClass}>
            Tratamientos especializados diseñados para tu recuperación integral.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Image Mosaic */}
          <div className="grid grid-cols-2 gap-3">
            {/* Large Image - spans 2 rows */}
            <div className="row-span-2 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${images[0]}')`, minHeight: '400px' }}
              />
            </div>

            {/* Top Right Image */}
            <div className="overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${images[1]}')`, minHeight: '195px' }}
              />
            </div>

            {/* Middle Right Image */}
            <div className="overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${images[2]}')`, minHeight: '195px' }}
              />
            </div>

            {/* Bottom Left Image */}
            <div className="overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${images[3]}')`, minHeight: '195px' }}
              />
            </div>

            {/* Bottom Middle Image */}
            <div className="overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${images[4]}')`, minHeight: '195px' }}
              />
            </div>
          </div>

          {/* Right Column: Services List */}
          <div className="flex flex-col gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group flex gap-5 border-l-4 border-transparent bg-linear-to-r from-muted-50 to-transparent p-6 transition-all duration-300 hover:border-primary-600 hover:from-primary-50 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="shrink-0 text-primary-600 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
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
          <div className="text-center border-t-4 border-primary-600 bg-surface-0 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-5xl font-black text-primary-700">
              <CounterAnimation target={100} suffix="%" />
            </div>
            <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-secondary-600">Personalizado</div>
          </div>
          
          <div className="text-center border-t-4 border-primary-600 bg-surface-0 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-5xl font-black text-primary-700">
              <CounterAnimation target={15} suffix="+" />
            </div>
            <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-secondary-600">Años experiencia</div>
          </div>
          
          <div className="text-center border-t-4 border-primary-600 bg-surface-0 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-5xl font-black text-primary-700">
              <CounterAnimation target={2000} suffix="+" />
            </div>
            <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-secondary-600">Pacientes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;





