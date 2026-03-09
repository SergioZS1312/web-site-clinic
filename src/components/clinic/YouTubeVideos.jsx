'use client';

import React from 'react';
import { sectionHeaderClass, sectionSubtitleClass, sectionTitleClass } from './constants';

const videos = [
  'dQw4w9WgXcQ', // Reemplaza con tus IDs reales de YouTube
  'dQw4w9WgXcQ', // Reemplaza con tus IDs reales de YouTube
  'dQw4w9WgXcQ', // Reemplaza con tus IDs reales de YouTube
];

const YouTubeVideos = () => {
  return (
    <section id="youtube-videos" className="bg-muted-50 px-6 py-20 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className={sectionHeaderClass}>
          <h2 className={`${sectionTitleClass} text-primary-700`}>Resultados reales</h2>
          <p className={sectionSubtitleClass}>
            Mira los procesos de recuperación de nuestros pacientes.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((videoId, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                  title={`Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
