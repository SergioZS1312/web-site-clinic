'use client';

import { useState } from 'react';
import { scrollToSectionById } from '../clinic/utils';

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    ['problemas', 'Problemas'],
    ['services', 'Servicios'],
    ['beneficios', 'Beneficios'],
    ['aliados', 'Aliados'],
    ['proceso', 'Proceso'],
    ['faq', 'FAQ'],
    ['contact', 'Contacto'],
  ];

  const handleNavClick = (id) => {
    scrollToSectionById(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-0/95 px-6 py-4 backdrop-blur-lg md:px-12'
          : 'px-6 py-6 md:px-12'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a
          href="#"
          className={`inline-flex items-baseline text-3xl font-black uppercase tracking-[-0.05em] ${
            scrolled ? 'text-primary-700' : 'text-primary-900'
          }`}
        >
          fisio
          <span className={`ml-1 inline-block h-2 w-2 ${scrolled ? 'bg-primary-700' : 'bg-primary-900'}`} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6 xl:gap-10">
            {navigationItems.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`text-xs font-semibold uppercase tracking-[0.14em] transition ${
                    scrolled ? 'text-secondary-900 hover:text-primary-700' : 'text-primary-900 hover:text-primary-700'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSectionById(id);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden ${scrolled ? 'text-primary-700' : 'text-primary-900'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border-t border-secondary-200 bg-surface-0 pb-6 pt-4">
          <ul className="space-y-1">
            {navigationItems.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="block px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-secondary-900 transition hover:bg-primary-50 hover:text-primary-700"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(id);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
