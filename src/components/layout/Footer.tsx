'use client';

import { scrollToSectionById } from '../clinic/utils';
import { footerContent } from '../../lib/clinic-content';

const Footer = () => {
  return (
    <footer className="border-t-4 border-primary-700 bg-secondary-900 px-6 py-20 text-surface-0 md:px-[8%]">
      <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <button
            type="button"
            onClick={() => scrollToSectionById('top')}
            className="inline-block text-5xl font-black uppercase tracking-[-0.05em] text-surface-0 no-underline"
          >
            {footerContent.brand}<span className="ml-1 inline-block h-2 w-2 bg-primary-700" />
          </button>
          <p className="mt-4 max-w-xs leading-7 text-secondary-400">
            {footerContent.description}
          </p>
        </div>

        <div>
          <h3 className="mb-8 text-xs font-black uppercase tracking-[0.15em] text-primary-400">Servicios</h3>
          <ul className="space-y-4">
            {footerContent.serviceLinks.map(([id, item], index) => (
              <li key={`${item}-${index}`}>
                <button
                  type="button"
                  onClick={() => scrollToSectionById(id)}
                  className="text-secondary-400 transition hover:text-surface-0 hover:underline"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-8 text-xs font-black uppercase tracking-[0.15em] text-primary-400">Clinica</h3>
          <ul className="space-y-4">
            {footerContent.clinicLinks.map(([id, item]) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => scrollToSectionById(id)}
                  className="text-secondary-400 transition hover:text-surface-0 hover:underline"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-8 text-xs font-black uppercase tracking-[0.15em] text-primary-400">Contacto</h3>
          <ul className="space-y-4">
            <li>
              <a className="text-secondary-400 transition hover:text-surface-0" href={footerContent.contact.phoneHref}>
                {footerContent.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="text-secondary-400 transition hover:text-surface-0"
                href={footerContent.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {footerContent.contact.whatsappLabel}
              </a>
            </li>
            <li>
              <span className="text-secondary-400">{footerContent.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary-800 pt-10 text-left text-xs uppercase tracking-widest text-secondary-400">
        {new Date().getFullYear()} {footerContent.copyrightName}. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
