'use client';

import React, { useEffect } from 'react';
import { sectionHeaderClass, sectionSubtitleClass, sectionTitleClass } from './constants';

const videos = [
  'https://www.instagram.com/reel/DVhL6zeDlYA/', // Reemplaza con tus URLs reales
  'https://www.instagram.com/reel/DVNEpVnjfan/', // Reemplaza con tus URLs reales
  'https://www.instagram.com/reel/DTqXei3Do43/', // Reemplaza con tus URLs reales
];

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
        <div className={sectionHeaderClass}>
          <h2 className={`${sectionTitleClass} text-primary-700`}>Testimonios en video</h2>
          <p className={sectionSubtitleClass}>
            Conoce las experiencias de nuestros pacientes en sus propias palabras.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((url, index) => (
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
