import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    case 'azul marino':  // admite ambos nombres
      return '#003366';
    case 'verde oliva':
      return '#556B2F';
    default:
      return 'transparent';
  }
};

const CartModal = ({ isOpen, onClose, onAddMore, cartItems, onRemoveItem, onClearCart }) => {
  const message = cartItems
    .map((item, i) =>
      `🛍️ *Producto ${i + 1}:* ${item.name}%0A` +
      `• Talla: ${item.size}%0A` +
      `• Color: ${item.color}%0A` +
      `• Precio: $${item.price}%0A--------------------`
    )
    .join('%0A');

  const finalMessage =
    `Hola equipo JCavalier 👋,%0A` +
    `Me interesa comprar los siguientes productos:%0A%0A` +
    message +
    `%0A%0AGracias por su atención, espero su confirmación 😊`;

  const whatsappUrl = `https://wa.me/123456789?text=${finalMessage}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-[#1a1a1a] border border-white p-6 rounded-lg w-full max-w-md text-white shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-white text-2xl hover:text-gray-300 transition"
              aria-label="Cerrar"
            >
              ×
            </button>

            <h2 className="text-white text-2xl mb-4 text-center font-semibold">Tu Selección</h2>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {cartItems.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="flex items-center gap-4 border-b border-white border-opacity-20 pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded border border-white"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-white text-sm flex items-center gap-2">
                      <span>Talla: {item.size} | Color:</span>
                      <span
                        className="w-4 h-4 rounded-full border border-white"
                        style={{ backgroundColor: getColorCode(item.color) }}
                        title={item.color}
                      />
                      <span>{item.color}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-white font-bold">${item.price}</div>
                    <button
                      onClick={() => onRemoveItem(index)}
                      className="text-xs text-red-500 hover:text-red-400 mt-1 transition"
                    >
                      Eliminar
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {cartItems.length > 0 && (
              <>
                <button
                  onClick={onClearCart}
                  className="mt-4 mb-2 text-sm text-red-500 hover:text-red-400 underline transition"
                >
                  Vaciar carrito
                </button>

                <button
                  onClick={onAddMore}
                  className="mt-2 w-full bg-white bg-opacity-10 text-white py-2 rounded hover:bg-opacity-20 transition font-semibold shadow-md"
                >
                  Agregar otro producto
                </button>
              </>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full bg-white bg-opacity-20 text-white text-center py-2 rounded hover:bg-opacity-40 transition font-semibold shadow-lg"
            >
              Confirmar por WhatsApp
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
