'use client';

import { SectionHeader } from '../../ui/SectionHeader';
import CheckListItem from '../shared/CheckListItem';
import {
  alliesAthletes,
  alliesCompany,
  corporateServices,
  eventServices,
} from '../../../lib/clinic-content';

const AlliesSection = () => {
  return (
    <section id="aliados" className="bg-surface-0 px-6 py-24 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow=""
          title="Aliados y eventos"
          description="Trabajamos con empresas y atletas brindando cobertura fisioterapeutica profesional"
        />

        {/* Mosaico de atletas */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-black uppercase tracking-tight text-primary-700 md:text-3xl">
            Atletas y embajadores
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {alliesAthletes.map((athlete) => (
              <article
                key={athlete.name}
                className="group relative overflow-hidden border-2 border-secondary-200 bg-surface-0 transition-all duration-300 hover:border-primary-600 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden sm:h-64 md:h-72">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${athlete.image}')` }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-secondary-900/90 via-secondary-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-secondary-900/95 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-base font-bold text-surface-0 md:text-lg">{athlete.name}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary-300 md:text-sm">{athlete.discipline}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Marcas y empresas aliadas - Formato horizontal */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-black uppercase tracking-tight text-primary-700 md:text-3xl">
            Empresas aliadas
          </h3>
          <div className="relative">
            <div className="flex gap-3 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-6 lg:gap-5">
              {alliesCompany.map((ally) => (
                <article
                  key={ally.name}
                  className="min-w-35 shrink-0 border border-secondary-200 bg-surface-0 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-600 hover:shadow-lg md:min-w-0"
                >
                  <div className="flex h-20 items-center justify-center border-2 border-dashed border-secondary-300 bg-muted-50 text-xs font-bold uppercase tracking-wider text-secondary-500 md:h-24">
                    Logo
                  </div>
                  <p className="mt-3 text-center text-xs font-bold text-secondary-900 md:text-sm">{ally.name}</p>
                  <p className="mt-1 text-center text-[10px] font-semibold uppercase tracking-wide text-secondary-500 md:text-xs">{ally.category}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Event Services - Content Left / Image Right */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 md:items-center">
          {/* Content */}
          <div>
            <h3 className="mb-6 text-3xl font-black uppercase tracking-tight text-primary-700">
              Cobertura de eventos
            </h3>
            <p className="mb-8 text-lg text-secondary-600">
              Atención profesional durante maratones, competencias y activaciones deportivas.
            </p>
            <div className="space-y-4">
              {eventServices.map((item) => (
                <CheckListItem key={item} text={item} />
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 h-64 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80')" }}
              />
            </div>
            <div className="h-40 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80')" }}
              />
            </div>
            <div className="h-40 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80')" }}
              />
            </div>
          </div>
        </div>

        {/* Corporate Services - Image Left / Content Right */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 md:items-center">
          {/* Image */}
          <div className="order-2 grid grid-cols-2 gap-4 md:order-1">
            <div className="h-40 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80')" }}
              />
            </div>
            <div className="h-40 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80')" }}
              />
            </div>
            <div className="col-span-2 h-64 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h3 className="mb-6 text-3xl font-black uppercase tracking-tight text-primary-700">
              Servicios corporativos
            </h3>
            <p className="mb-8 text-lg text-secondary-600">
              Bienestar y salud ocupacional para equipos de trabajo y empresas.
            </p>
            <div className="space-y-4">
              {corporateServices.map((item) => (
                <CheckListItem key={item} text={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-linear-to-r from-primary-600 to-primary-600 p-10 text-center text-surface-0 shadow-xl">
          <p className="text-2xl font-black uppercase">
            ¿Necesitas cobertura para tu evento o empresa?
          </p>
          <p className="mt-3 text-lg text-primary-100">
            Contáctanos para una propuesta personalizada
          </p>
          <button className="mt-6 border-2 border-surface-0 bg-primary-700 px-8 py-3 font-bold uppercase tracking-wide text-surface-0 transition-all duration-300 hover:bg-primary-800 hover:border-primary-800">
            Solicitar cotización
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlliesSection;
