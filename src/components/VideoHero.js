import React from 'react';

const VideoHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4" // Coloca tu video en /public/video.mp4
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Capa oscura sobre el video */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Contenido centrado sobre el video */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 text-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 animate-fade-in">
            JCavalier
          </h1>
          <p className="text-lg md:text-xl">Estilo clásico. Elegancia eterna.</p>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
