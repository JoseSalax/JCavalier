import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-800 pb-10">
        {/* Logo / Marca */}
        <div>
          <h2 className="text-xl font-heading uppercase tracking-widest mb-4">
            JCavalier
          </h2>
          <p className="text-sm text-white/70">
            Ropa masculina con elegancia atemporal, inspirada en legado, sobriedad y distinción.
          </p>
        </div>

        {/* Navegación rápida */}
        <div>
          <h3 className="text-sm uppercase font-semibold tracking-wide mb-4">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#inicio" className="hover:text-white transition">Inicio</a></li>
            <li><a href="#coleccion" className="hover:text-white transition">Colección</a></li>
            <li><a href="#nosotros" className="hover:text-white transition">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto + Redes */}
        <div>
          <h3 className="text-sm uppercase font-semibold tracking-wide mb-4">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Caracas, Venezuela
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +58 412-000-0000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> contacto@jcavalier.com
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} />
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
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} JCavalier. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
