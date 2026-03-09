'use client';

import { scrollToSectionById } from '../utils';

const PrimaryCtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary-900 px-6 py-20 md:px-[8%] md:py-32">
      {/* Background Image with Better Visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50 scale-105 blur-[1px]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80')" }}
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-900/75 via-primary-800/70 to-secondary-900/80" />
      
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 top-0 h-full w-1/3 rotate-12 bg-linear-to-b from-surface-0 to-transparent" />
        <div className="absolute -left-20 bottom-0 h-full w-1/3 -rotate-12 bg-linear-to-t from-surface-0 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Badge with glow */}
        <div className="mb-6 inline-flex items-center gap-2 animate-pulse border-2 border-primary-300/50 bg-primary-500/20 px-5 py-2 text-xs font-bold uppercase tracking-wide text-surface-0 shadow-lg shadow-primary-500/50 backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm sm:tracking-wider">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Da el primer paso hoy
        </div>

        {/* Main Heading with text shadow for better readability */}
        <h2 className="mb-6 text-4xl font-black uppercase leading-[0.95] text-surface-0 drop-shadow-2xl sm:text-5xl md:text-7xl">
          ¿Listo para<br />
          <span className="text-primary-300">recuperar</span> tu<br />
          movilidad?
        </h2>

        {/* Subheading with better contrast */}
        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-surface-0/95 drop-shadow-lg sm:mb-12 sm:text-xl md:text-2xl">
          Agenda tu <strong className="text-primary-200">evaluación sin costo</strong> y comienza tu proceso de recuperación con nuestro equipo especializado
        </p>

        {/* CTA Buttons - Enhanced Design */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA - Calendar */}
          <button
            onClick={() => scrollToSectionById('contact')}
            className="group relative w-full overflow-hidden bg-primary-700 px-6 py-4 font-black uppercase tracking-wide text-surface-0 shadow-2xl shadow-primary-500/30 transition-all duration-300 hover:scale-105 hover:bg-primary-800 hover:shadow-primary-400/50 sm:w-auto sm:px-12 sm:py-6"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:gap-3 sm:text-lg">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Agenda tu cita ahora
            </span>
          </button>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden bg-primary-700 px-6 py-4 font-black uppercase tracking-wide text-surface-0 shadow-2xl shadow-primary-500/40 transition-all duration-300 hover:scale-105 hover:bg-primary-800 hover:shadow-primary-600/50 sm:w-auto sm:gap-3 sm:px-12 sm:py-6"
          >
            <svg className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="text-sm sm:text-lg">Escríbenos por WhatsApp</span>
          </a>
        </div>

        {/* Quick Info Cards - Enhanced with better visibility */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:mt-16 md:grid-cols-3">
          <div className="group border-l-4 border-primary-300 bg-surface-0/15 p-6 backdrop-blur-md transition-all duration-300 hover:bg-surface-0/25 hover:shadow-2xl sm:p-8">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="shrink-0 pt-0.5 transition-transform duration-300 group-hover:scale-110">
                <svg className="h-10 w-10 text-primary-200 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-200">Llámanos ahora</p>
                <p className="mt-3 text-xl font-black text-surface-0 drop-shadow-lg">+57 123 456 7890</p>
              </div>
            </div>
          </div>

          <div className="group border-l-4 border-primary-300 bg-surface-0/15 p-6 backdrop-blur-md transition-all duration-300 hover:bg-surface-0/25 hover:shadow-2xl sm:p-8">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="shrink-0 pt-0.5 transition-transform duration-300 group-hover:scale-110">
                <svg className="h-10 w-10 text-primary-200 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-200">Horario de atención</p>
                <p className="mt-3 text-xl font-black text-surface-0 drop-shadow-lg">Lun - Vie: 8am - 7pm</p>
              </div>
            </div>
          </div>

          <div className="group border-l-4 border-primary-300 bg-surface-0/15 p-6 backdrop-blur-md transition-all duration-300 hover:bg-surface-0/25 hover:shadow-2xl sm:p-8">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="shrink-0 pt-0.5 transition-transform duration-300 group-hover:scale-110">
                <svg className="h-10 w-10 text-primary-200 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-200">Primera consulta</p>
                <p className="mt-3 text-xl font-black text-surface-0 drop-shadow-lg">Evaluación GRATIS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators - Better contrast */}
        <div className="mt-10 rounded-2xl bg-surface-0/10 px-4 py-4 backdrop-blur-sm sm:mt-12 sm:rounded-full sm:px-8">
          <p className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-surface-0 drop-shadow-lg sm:gap-3 sm:text-lg">
            <span className="flex gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.3L18.2 21l-1.6-7.1L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2l5.4 4.7L5.8 21z" />
                </svg>
              ))}
            </span>
            <span className="text-primary-200">Más de 2,000 pacientes recuperados</span> | 95% de satisfacción
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrimaryCtaSection;
