import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const CategoryMenu = ({ activeCategory, onCategorySelect }) => {
  const categories = [
    'Monarch linen',
    'Franela y Chemise Imprerial',
    'Set Diamond',
    'Set Old Money',
    'Gold Sport Set',
    'Camisas Cubanas',
    'Camisas de Vestir Slim',
    'Set Playero',
    'Pantalones y Bermudas',
  ];

  const scrollContainerRef = useRef(null);

  const handleChangeCategory = (direction) => {
    const currentIndex = categories.indexOf(activeCategory);
    let targetIndex = direction === 'next'
      ? Math.min(currentIndex + 1, categories.length - 1)
      : Math.max(currentIndex - 1, 0);

    if (targetIndex !== currentIndex) {
      const nextCategory = categories[targetIndex];
      onCategorySelect(nextCategory);

      // Scroll al botón correspondiente
      const container = scrollContainerRef.current;
      if (container) {
        const buttons = container.querySelectorAll('button');
        const targetButton = buttons[targetIndex];
        if (targetButton) {
          targetButton.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
      }
    }
  };

  const atStart = categories.indexOf(activeCategory) === 0;
  const atEnd = categories.indexOf(activeCategory) === categories.length - 1;

  return (
    <div className="sticky top-[72px] z-40 bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-2">
        {/* Título centrado */}
        <div className="text-center mb-2">
          <h2 className="text-white text-base md:text-lg font-bold uppercase tracking-wider">
            Colecciones
          </h2>
        </div>

        {/* Contenedor principal con ambas flechas */}
        <div className="relative">
          {/* Scroll horizontal */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto py-2 space-x-6 hide-scrollbar px-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategorySelect(category)}
                className={`whitespace-nowrap text-xs md:text-sm uppercase tracking-widest px-2 pb-1 border-b-2 transition-all text-white ${
                  activeCategory === category
                    ? 'font-bold border-white'
                    : 'font-normal border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Flecha izquierda */}
          {!atStart && (
            <div
              onClick={() => handleChangeCategory('prev')}
              className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-black/80 to-transparent flex items-center justify-start pl-1 cursor-pointer"
            >
              <ChevronLeft size={16} className="text-white opacity-70" />
            </div>
          )}

          {/* Flecha derecha */}
          {!atEnd && (
            <div
              onClick={() => handleChangeCategory('next')}
              className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-black/80 to-transparent flex items-center justify-end pr-1 cursor-pointer"
            >
              <ChevronRight size={16} className="text-white opacity-70" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
