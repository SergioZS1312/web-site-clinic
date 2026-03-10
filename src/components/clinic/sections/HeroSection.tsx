'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { sectionTitleClass } from '../constants';
import { scrollToSectionById } from '../utils';
import { heroImages } from '../../../lib/clinic-content';

const HeroSection = () => {
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden text-primary-950">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center brightness-105 saturate-95 transition-opacity duration-1000 ${
            index === activeImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
          aria-hidden="true"
        />
      ))}
      <div
        className="absolute inset-0 bg-linear-to-br from-surface-0/80 via-muted-50/80 to-primary-100/70"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-surface-0/10" aria-hidden="true" />

      <div className="relative z-30 flex min-h-screen items-start px-6 pb-16 pt-28 md:items-center md:px-[8%] md:pb-0 md:pt-0">
        <div className="max-w-3xl text-left">
          <div className="animate-rise">
            <p className="mb-5 inline-flex border border-primary-300/70 bg-surface-0/80 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary-700 backdrop-blur-sm">
            Fisioterapia en Bogota y atencion a domicilio
            </p>
            <h1 className={`${sectionTitleClass} text-primary-950 drop-shadow-md`}>
              Elimina el dolor y vuelve a moverte sin miedo
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-900/90 md:text-lg">
              Tratamos lesiones deportivas, dolor de espalda, cervical y rehabilitacion postquirurgica
              con planes personalizados en consultorio y a domicilio.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                className="rounded-none bg-primary-700 px-10 py-4 text-xs font-black uppercase tracking-[0.14em] text-surface-0 transition hover:bg-primary-800"
                onClick={() => scrollToSectionById('contact')}
              >
                Agenda tu cita
              </button>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-none bg-primary-700 px-10 py-4 text-xs font-black uppercase tracking-[0.14em] text-surface-0 transition hover:bg-primary-800"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
                Hablar por WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center justify-center gap-3"
        aria-label="Selector de imagenes del hero"
      >
        {heroImages.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            onClick={() => setActiveImage(index)}
            aria-label={`Mostrar imagen ${index + 1}`}
            className={`h-3 w-3 rounded-full border transition ${
              index === activeImage
                ? 'border-primary-700 bg-primary-700'
                : 'border-primary-700/60 bg-surface-0/70 hover:bg-primary-100'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
