'use client';

import { useState } from 'react';
import { SectionHeader } from '../../ui/SectionHeader';
import { faqItems } from '../../../lib/clinic-content';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="bg-muted-50 px-6 py-20 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow=""
          title="Preguntas frecuentes"
          description="Respuestas rapidas para ayudarte a iniciar tu proceso con claridad"
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden border-l-4 border-primary-600 bg-surface-0 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:px-6"
                >
                  <span className="text-base font-bold text-secondary-900 sm:text-lg">{item.question}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary-600 text-primary-700 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-70'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-6 text-secondary-600 sm:px-6">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
