'use client';

import { SectionHeader } from '../../ui/SectionHeader';
import { teamMembers } from '../../../lib/clinic-content';

const TeamSection = () => {
  return (
    <section id="equipo" className="bg-muted-50 px-6 py-20 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow=""
          title="Nuestro equipo"
          description="Profesionales especializados que te acompanan en cada etapa de tu recuperacion"
        />

        <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary-500">Desliza para ver mas perfiles</p>
          <p className="text-xs font-bold uppercase tracking-wider text-primary-700">Mover a la derecha</p>
        </div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group w-[85vw] max-w-[320px] shrink-0 snap-start overflow-hidden border-t-4 border-primary-600 bg-surface-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-secondary-900/80 to-transparent p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-200">{member.experience}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black uppercase leading-tight text-secondary-900">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary-700">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-secondary-600">{member.specialty}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border-l-4 border-primary-600 bg-surface-0 p-6 md:p-8">
          <p className="text-lg font-bold text-secondary-900">
            Equipo multidisciplinario con enfoque en resultados medibles y atencion personalizada.
          </p>
          <p className="mt-2 text-secondary-600">
            Evaluamos tu caso, definimos objetivos claros y acompanamos tu progreso sesion a sesion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
