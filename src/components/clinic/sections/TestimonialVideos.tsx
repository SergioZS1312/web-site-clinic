'use client';

import { useEffect } from 'react';
import { SectionHeader } from '../../ui/SectionHeader';
import { testimonialVideoUrls } from '../../../lib/clinic-content';

// Extend Window interface for Instagram embed API
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const TestimonialVideos = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    const timer = setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="testimonial-videos" className="bg-surface-0 px-6 py-20 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow=""
          title="Testimonios en video"
          description="Conoce las experiencias de nuestros pacientes en sus propias palabras."
        />

        {/* Videos Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialVideoUrls.map((url, index) => (
            <div key={index} className="flex items-center justify-center">
              <iframe
                src={`${url}embed/`}
                className="h-150 w-full max-w-100 rounded-xl border-0"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
                title={`Testimonio ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideos;
