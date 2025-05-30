import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="bg-[#1a1a1a] text-white py-20 px-6 animate-fade-in duration-700 ease-out"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Información */}
        <div className="space-y-6 animate-slide-in-from-bottom delay-100 duration-700">
          <h2 className="text-3xl md:text-4xl font-heading uppercase tracking-wide">
            Contáctanos
          </h2>
          <p className="text-white text-base md:text-lg">
            Para atención personalizada, colaboraciones o distribución exclusiva, estamos disponibles.
          </p>
          <ul className="text-sm md:text-base space-y-4 text-white">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-white" />
              Caracas, Venezuela
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-white" />
              +58 412-000-0000
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-white" />
              contacto@jcavalier.com
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={18} className="text-white" />
              <a
                href="https://instagram.com/jcavalier_"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                @jcavalier_
              </a>
            </li>
          </ul>
        </div>

        {/* Botones de contacto directo */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 animate-slide-in-from-bottom delay-300 duration-700">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-48 py-4 border border-white text-white text-base md:text-lg uppercase tracking-wider hover:bg-white hover:text-black transition rounded-full shadow-md backdrop-blur-sm text-center"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/jcavalier_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-48 py-4 border border-white text-white text-base md:text-lg uppercase tracking-wider hover:bg-white hover:text-black transition rounded-full shadow-md backdrop-blur-sm text-center"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@jcavalier"
            target="_blank"
            rel="noopener noreferrer"
            className="w-48 py-4 border border-white text-white text-base md:text-lg uppercase tracking-wider hover:bg-white hover:text-black transition rounded-full shadow-md backdrop-blur-sm text-center"
          >
            TikTok
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
