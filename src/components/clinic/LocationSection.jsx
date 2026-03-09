'use client';

import React from 'react';
import { sectionTitleClass } from './constants';

const LocationSection = () => {
  return (
    <section id="location" className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] lg:min-h-175">
      <div className="relative overflow-hidden bg-secondary-300 bg-[linear-gradient(var(--color-surface-0)_1px,transparent_1px),linear-gradient(90deg,var(--color-surface-0)_1px,transparent_1px)] bg-size-[50px_50px]">
        <div className="absolute left-[-10%] top-[40%] h-10 w-[120%] rotate-10 border border-secondary-300 bg-surface-0" />
        <div className="absolute left-[40%] top-[-10%] h-[120%] w-10 rotate-10 border border-secondary-300 bg-surface-0" />
        <div className="absolute left-[20%] top-[60%] h-6 w-[60%] border border-secondary-300 bg-surface-0" />
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="h-5 w-5 rotate-45 bg-primary-700" />
          <div className="absolute inset-0 animate-ping border border-primary-700" />
        </div>
        <div className="absolute left-1/2 top-[calc(50%-100px)] z-20 -translate-x-1/2 bg-primary-700 px-6 py-4 font-semibold text-surface-0 shadow-lg">
          <strong>Elisa Clinic</strong><br />
          Central District, Madrid
        </div>
      </div>
      <div className="flex flex-col justify-center border-l border-secondary-200 bg-surface-0 p-10 sm:p-16 lg:p-20">
        <div>
          <h2 className={`${sectionTitleClass} text-primary-700`}>Visit Us</h2>
          <div className="mb-8 mt-5 h-0.5 w-full max-w-xl bg-primary-700" />
          <p className="mb-8 text-lg leading-relaxed text-secondary-700 md:text-xl">
            Located in the heart of the city, our clinic is an oasis of calm designed for your rehabilitation journey.
          </p>
          <h4 className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-primary-700">Address</h4>
          <p className="mb-8 text-lg text-secondary-600">
            124 Avenida de la Castellana<br />Madrid, Spain 28046
          </p>
          <h4 className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-primary-700">Hours</h4>
          <p className="text-lg text-secondary-600">Mon - Fri: 08:00 - 20:00</p>
          <p className="mb-6 text-lg text-secondary-600">Sat: 09:00 - 14:00</p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;




