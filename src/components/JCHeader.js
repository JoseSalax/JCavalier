import React from 'react';

const JCHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide text-gray-800 uppercase font-heading">
          JCavalier
        </h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#inicio" className="text-gray-700 hover:text-black transition">Inicio</a>
          <a href="#nosotros" className="text-gray-700 hover:text-black transition">Nosotros</a>
          <a href="#coleccion" className="text-gray-700 hover:text-black transition">Colección</a>
          <a href="#contacto" className="text-gray-700 hover:text-black transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default JCHeader;
