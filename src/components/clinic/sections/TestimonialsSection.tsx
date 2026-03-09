'use client';

import { SectionHeader } from '../../ui/SectionHeader';
import { testimonialReviews } from '../../../lib/clinic-content';

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="bg-muted-50 px-6 py-20 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow=""
          title="Lo que dicen nuestros pacientes"
          description="Testimonios reales de personas que confiaron en nuestro equipo para su recuperación."
        />

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialReviews.map((item, index) => (
            <article
              key={index}
              className="rounded-lg border-l-4 border-primary-600 bg-surface-0 p-6 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.3L18.2 21l-1.6-7.1L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2l5.4 4.7L5.8 21z" />
                  </svg>
                ))}
              </div>

              <p className="mb-5 text-base leading-relaxed text-secondary-700">"{item.text}"</p>

              <div className="border-t border-secondary-200 pt-4">
                <p className="font-bold text-secondary-900">{item.name}</p>
                <p className="mt-1 text-sm text-secondary-500">{item.context}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-secondary-600">
                  {item.date}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-linear-to-r from-primary-600 to-primary-700 p-8 text-center text-surface-0 shadow-xl md:p-10">
          <p className="text-2xl font-black uppercase tracking-tight md:text-3xl">
            Más de 500 pacientes atendidos
          </p>
          <p className="mt-3 text-lg opacity-95">
            Confía en nuestro equipo para tu recuperación
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
