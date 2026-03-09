'use client';

import { SectionHeader } from '../../ui/SectionHeader';
import { processSteps } from '../../../lib/clinic-content';

const ProcessSection = () => {
  return (
    <section id="proceso" className="bg-muted-50 px-6 py-24 md:px-[8%] md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow=""
          title="Proceso de tratamiento"
          description="Así trabajamos cada caso para lograr una recuperación segura, progresiva y medible."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="group border border-secondary-200 bg-muted-100 p-7 transition duration-300 hover:-translate-y-1 hover:border-primary-700 hover:bg-surface-0"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-primary-700">Paso {item.step}</p>
              <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.02em] leading-[0.95]">{item.title}</h3>
              <p className="mt-4 leading-7 text-secondary-600">{item.description}</p>
              <div className="mt-5 h-0.5 w-12 bg-primary-700 transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
