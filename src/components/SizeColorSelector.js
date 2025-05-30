import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GOLD_SOFT = 'rgba(212, 175, 55, 0.6)';

const getColorCode = (colorName) => {
  switch (colorName.toLowerCase()) {
    case 'blanco':
      return '#FFFFFF';
    case 'beige':
      return '#F5F5DC';
    case 'negro':
      return '#000000';
    case 'azul':
      return '#003366';
    case 'verde oliva':
      return '#556B2F';
    default:
      return 'transparent';
  }
};

const SizeColorSelector = ({ onSelect, onClose, product }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleConfirm = () => {
    if (selectedSize && selectedColor) {
      onSelect({ size: selectedSize, color: selectedColor });
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#1a1a1a] border border-white text-white p-6 rounded-lg w-full max-w-sm shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white text-xl font-semibold tracking-wide">Selecciona tus opciones</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-yellow-400 transition text-3xl font-bold"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        {/* Imagen del producto */}
        {product && (
          <div className="mb-6 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-contain rounded-md border border-white shadow-md"
            />
          </div>
        )}

        {/* Selector de talla */}
        <div className="mb-6">
          <label className="block text-white mb-3 text-lg font-semibold">Talla:</label>
          <div className="flex space-x-4 justify-center">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <motion.button
                key={size}
                className={`w-12 h-12 rounded-full border-2 text-lg font-semibold flex items-center justify-center cursor-pointer select-none transition-colors duration-300 ${
                  selectedSize === size
                    ? 'bg-transparent border-yellow-400 text-yellow-300 shadow-[0_0_12px_4px_rgba(212,175,55,0.5)]'
                    : 'border-white text-white hover:border-yellow-400 hover:text-yellow-300'
                }`}
                onClick={() => setSelectedSize(size)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                animate={
                  selectedSize === size
                    ? {
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          `0 0 12px 4px ${GOLD_SOFT}`,
                          `0 0 24px 8px ${GOLD_SOFT}`,
                          `0 0 12px 4px ${GOLD_SOFT}`,
                        ],
                      }
                    : {}
                }
                transition={{ duration: 1.8, repeat: Infinity, repeatType: 'loop' }}
              >
                {size}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Selector de color */}
        <div className="mb-8">
          <label className="block text-white mb-3 text-lg font-semibold">Color:</label>
          <div className="flex space-x-6 justify-center">
            {['Negro', 'Azul', 'Blanco', 'Beige', 'Verde Oliva'].map((color) => {
              const bgColor = getColorCode(color);
              const isSelected = selectedColor === color;
              return (
                <motion.button
                  key={color}
                  className={`w-12 h-12 rounded-full border-2 cursor-pointer select-none transition-shadow duration-300 ${
                    isSelected ? 'border-yellow-400 shadow-[0_0_20px_8px_rgba(212,175,55,0.5)]' : 'border-white hover:border-yellow-400'
                  }`}
                  style={{ backgroundColor: bgColor }}
                  onClick={() => setSelectedColor(color)}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  animate={
                    isSelected
                      ? {
                          boxShadow: [
                            `0 0 20px 8px ${GOLD_SOFT}`,
                            `0 0 30px 12px ${GOLD_SOFT}`,
                            `0 0 20px 8px ${GOLD_SOFT}`,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 1.8, repeat: Infinity, repeatType: 'loop' }}
                  aria-label={`Color ${color}`}
                  title={color}
                />
              );
            })}
          </div>
        </div>

        {/* Botón confirmar */}
        <button
          className={`w-full py-3 rounded text-black font-semibold uppercase tracking-wider transition-colors ${
            selectedSize && selectedColor
              ? 'bg-yellow-500 hover:bg-yellow-400 cursor-pointer shadow-lg shadow-yellow-500/60'
              : 'bg-yellow-300 cursor-not-allowed'
          }`}
          onClick={handleConfirm}
          disabled={!selectedSize || !selectedColor}
        >
          Confirmar
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SizeColorSelector;
