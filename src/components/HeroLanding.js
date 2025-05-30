import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroLanding = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true); // Mostrar botón solo si se puede instalar
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-jcavalier.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
{/* 🔹 Botones de descarga sin fondo */}
<motion.div
  className="absolute top-24 right-6 z-30 flex flex-col space-y-3 items-end"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4, delay: 1, ease: 'easeOut' }}
>
  {/* App Store */}
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      alert(
        'En iOS:\n1. Abre en Safari\n2. Toca el botón compartir\n3. Selecciona "Agregar a pantalla de inicio"'
      );
    }}
    className="hover:opacity-80 transition"
  >
    <img src="/appstore-badge.svg" alt="Descargar en App Store" className="h-11" />
  </a>

  {/* Google Play — solo si se puede instalar */}
  {canInstall && (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleInstall();
      }}
      className="hover:opacity-80 transition"
    >
      <img src="/googleplay-badge.svg" alt="Disponible en Google Play" className="h-11" />
    </a>
  )}
</motion.div>


      {/* Capa oscura base */}
      <motion.div
        className="absolute inset-0 bg-black z-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />

      {/* Capa tipo cristal translúcido animada */}
      <motion.div
        className="absolute inset-0 z-10 backdrop-blur-xl bg-white bg-opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.8, delay: 0.6, ease: 'easeOut' }}
      />

      {/* Contenido principal */}
      <motion.div
        className="relative z-20 px-6 text-white flex flex-col items-center space-y-10"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        {/* 🟡 Bloque del Logo */}
        <motion.div>
          <motion.img
            src="/LogoB.png"
            alt="Logo JCavalier"
            className="w-28 h-28 object-contain"
            initial={{ scale: 0, y: 0, x: 0 }}
            animate={{ scale: 3, y: -45, x: 0 }}
            transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* 🟢 Bloque del subtítulo + botones */}
        <motion.div className="flex flex-col items-center space-y-6">
          <motion.p
            className="text-lg md:text-xl text-white/90 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.3, ease: 'easeOut' }}
          >
            La ropa que refleja tu legado y carácter
          </motion.p>

          <motion.div
            className="flex flex-col space-y-4 mt-4 items-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.6, ease: 'easeOut' }}
          >
            <a
              href="https://wa.me/1234567890"
              className="w-48 py-4 border border-white text-white text-lg uppercase tracking-wider hover:bg-white hover:text-black transition rounded-full shadow-md backdrop-blur-sm text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/jcavalier_"
              className="w-48 py-4 border border-white text-white text-lg uppercase tracking-wider hover:bg-white hover:text-black transition rounded-full shadow-md backdrop-blur-sm text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroLanding;
