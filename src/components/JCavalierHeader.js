import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JCavalierHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false); // Cierra el menú móvil si está abierto
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-white bg-opacity-95 shadow-md backdrop-blur-md border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Marca */}
        <div
          onClick={() => scrollTo('#inicio')}
          className="text-xl font-heading tracking-wide uppercase text-gray-900 cursor-pointer"
        >
          JCavalier
        </div>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollTo('#inicio')} className="text-gray-700 text-xs uppercase tracking-widest hover:text-black transition">
            Inicio
          </button>
          <button onClick={() => scrollTo('#coleccion')} className="text-gray-700 text-xs uppercase tracking-widest hover:text-black transition">
            Colección
          </button>
          <button onClick={() => scrollTo('#nosotros')} className="text-gray-700 text-xs uppercase tracking-widest hover:text-black transition">
            Nosotros
          </button>
          <button onClick={() => scrollTo('#contacto')} className="text-gray-700 text-xs uppercase tracking-widest hover:text-black transition">
            Contacto
          </button>
        </nav>

        {/* Botón menú móvil */}
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-700 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-4">
              <button onClick={() => scrollTo('#inicio')} className="text-gray-800 text-sm uppercase tracking-widest hover:text-black transition">
                Inicio
              </button>
              <button onClick={() => scrollTo('#coleccion')} className="text-gray-800 text-sm uppercase tracking-widest hover:text-black transition">
                Colección
              </button>
              <button onClick={() => scrollTo('#nosotros')} className="text-gray-800 text-sm uppercase tracking-widest hover:text-black transition">
                Nosotros
              </button>
              <button onClick={() => scrollTo('#contacto')} className="text-gray-800 text-sm uppercase tracking-widest hover:text-black transition">
                Contacto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default JCavalierHeader;
