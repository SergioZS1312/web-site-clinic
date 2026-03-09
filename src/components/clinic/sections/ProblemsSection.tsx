'use client';

import { scrollToSectionById } from '../utils';
import { SectionHeader } from '../../ui/SectionHeader';
import { problems, problemsContent } from '../../../lib/clinic-content';

const ProblemsSection = () => {
  return (
    <section id="problemas" className="bg-surface-0 px-6 py-24 md:px-[8%] md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader {...problemsContent} />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="group relative h-80 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${problem.image}')` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary-950/95 via-primary-900/60 to-transparent transition-opacity duration-500 group-hover:from-primary-700/95 group-hover:via-primary-700/70" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="mb-3 text-2xl font-black uppercase leading-tight text-surface-0 transition-all duration-300">
                  {problem.title}
                </h3>
                <p className="text-sm text-surface-0/90 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {problem.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-surface-0 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border-l-4 border-primary-600 bg-primary-50 p-6 text-center md:p-8">
          <p className="text-base text-secondary-700 md:text-lg">
            ¿No encuentras tu caso? Te ayudamos a encontrar la mejor solución para ti.
          </p>
          <button
            type="button"
            onClick={() => scrollToSectionById('contact')}
            className="mt-5 bg-primary-700 px-8 py-3 text-xs font-black uppercase tracking-[0.14em] text-surface-0 transition-all duration-300 hover:bg-primary-800"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
