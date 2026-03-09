'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </>
  );
}
