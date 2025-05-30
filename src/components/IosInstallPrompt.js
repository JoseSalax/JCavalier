import React, { useEffect, useState } from 'react';

const isIos = () => {
  return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
};

const isInStandaloneMode = () =>
  'standalone' in window.navigator && window.navigator.standalone;

const IosInstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (isIos() && !isInStandaloneMode()) {
      setShowPrompt(true);
    }
  }, []);

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 p-4 bg-white text-black rounded-md shadow-md z-50 border border-gray-300 text-center">
      📲 Para instalar esta app en tu iPhone:<br />
      Toca el ícono <strong>Compartir</strong> y selecciona <strong>"Agregar a pantalla de inicio"</strong>.
    </div>
  );
};

export default IosInstallPrompt;
