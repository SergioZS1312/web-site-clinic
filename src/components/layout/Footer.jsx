'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t-4 border-primary-700 bg-secondary-900 px-6 py-20 text-surface-0 md:px-[8%]">
      <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <a href="#" className="inline-block text-5xl font-black uppercase tracking-[-0.05em] text-surface-0 no-underline">
            fisio<span className="ml-1 inline-block h-2 w-2 bg-primary-700" />
          </a>
          <p className="mt-4 max-w-xs leading-7 text-secondary-400">
            Clinica de fisioterapia enfocada en recuperacion funcional, readaptacion y bienestar fisico integral.
          </p>
        </div>
        <div>
          <h3 className="mb-8 text-xs font-black uppercase tracking-[0.15em] text-primary-400">Servicios</h3>
          <ul className="space-y-4">
            {['Fisioterapia deportiva', 'Terapia manual', 'Rehabilitacion fisica', 'Electroterapia'].map((item) => (
              <li key={item}>
                <a href="#" className="text-secondary-400 transition hover:text-surface-0 hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-8 text-xs font-black uppercase tracking-[0.15em] text-primary-400">Clinica</h3>
          <ul className="space-y-4">
            {['Sobre nosotros', 'Equipo', 'Testimonios', 'Contacto'].map((item) => (
              <li key={item}>
                <a href="#" className="text-secondary-400 transition hover:text-surface-0 hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-8 text-xs font-black uppercase tracking-[0.15em] text-primary-400">Contacto</h3>
          <ul className="space-y-4">
            {['+54 11 4000 2233', 'WhatsApp', 'Av. Salud 245'].map((item) => (
              <li key={item}>
                <span className="text-secondary-400">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-800 pt-10 text-left text-xs uppercase tracking-widest text-secondary-400">
        2026 Fisio Clinic. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;




