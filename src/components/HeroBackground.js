import React from 'react';

const HeroBackground = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagen de fondo fija con capa oscura */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40"
        style={{
          backgroundImage: "url('/fondo-elegante.jpg')", // Cambia esto por la ruta de tu imagen
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      ></div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 font-heading">
            JCavalier
          </h1>
          <p className="text-lg md:text-xl">
            Tradición, carácter y elegancia masculina.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBackground;
