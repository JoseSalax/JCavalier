import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

const SocialFloatButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/584120000000"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white rounded-full p-3 shadow-md hover:scale-105 transition transform"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/jcavalier_"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white rounded-full p-3 shadow-md hover:scale-105 transition transform"
        aria-label="Instagram"
      >
        <FaInstagram size={20} />
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com/@jcavalier_"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white rounded-full p-3 shadow-md hover:scale-105 transition transform"
        aria-label="TikTok"
      >
        <FaTiktok size={20} />
      </a>
    </div>
  );
};

export default SocialFloatButtons;
