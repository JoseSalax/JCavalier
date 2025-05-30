import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SizeColorSelector from './SizeColorSelector';
import CartModal from './CartModal';

const productData = {
  'Monarch linen': [
    { id: 1, name: 'Monarch linen Manga Larga', price: 25.0, image: '/images/Monarch linen/1.jpg' },
    { id: 2, name: 'Monarch linen', price: 25.0, image: '/images/Monarch linen/2.jpg' },
    { id: 3, name: 'Monarch linen', price: 25.0, image: '/images/Monarch linen/3.jpg' },
    { id: 4, name: 'Monarch linen', price: 25.0, image: '/images/Monarch linen/4.jpg' },
  ],
  'Franela y Chemise Imprerial': [
    { id: 5, name: 'Franela y Chemise Imprerial', price: 100.0, image: '/images/./Franela y Chemise Imprerial/1.jpg' },
    { id: 6, name: 'Franela y Chemise Imprerial', price: 32.0, image: '/images/./Franela y Chemise Imprerial/2.jpg' },
    { id: 7, name: 'Franela y Chemise Imprerial', price: 34.0, image: '/images/./Franela y Chemise Imprerial/3.jpg' },
    { id: 8, name: 'Franela y Chemise Imprerial', price: 28.0, image: '/images/./Franela y Chemise Imprerial/4.jpg' }
  ],
  'Set Diamond': [
    { id: 9, name: 'Set Diamond', price: 22.0, image: '/images/Set Diamond/1.jpg' },
    { id: 10, name: 'Set Diamond', price: 35.0, image: '/images/Set Diamond/2.jpg' },
    { id: 11, name: 'Set Diamond', price: 38.0, image: '/images/Set Diamond/3.jpg' },
    { id: 12, name: 'Set Diamond', price: 25.0, image: '/images/Set Diamond/4.jpg' }
  ],
  'Egipcian Collection': [
    { id: 13, name: 'Túnica Beige', price: 40.0, image: '/egypt1.jpg' },
    { id: 14, name: 'Camiseta Arena', price: 20.0, image: '/egypt2.jpg' },
    { id: 15, name: 'Set Egipcio', price: 60.0, image: '/egypt3.jpg' },
    { id: 16, name: 'Capa Oro', price: 80.0, image: '/egypt4.jpg' }
  ],
  'Gold Sport Set': [
    { id: 17, name: 'Gold Sport Set', price: 100.0, image: '/images/Gold Sport Set/1.jpg' },
    { id: 18, name: 'Gold Sport Set', price: 85.0, image: '/images/Gold Sport Set/2.jpg' },
    { id: 19, name: 'Gold Sport Set', price: 45.0, image: '/images/Gold Sport Set/3.jpg' },
    { id: 20, name: 'Gold Sport Set', price: 55.0, image: '/images/Gold Sport Set/4.jpg' }
  ]
};

const ProductCard = ({ product, delay, onClick }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="bg-[#262626] p-4 text-white rounded-md cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="aspect-square overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="mt-4 text-sm text-center">
        <p className="font-medium">{product.name}</p>
        <p className="text-gray-400 text-xs mt-1">${product.price.toFixed(2)} USD</p>
      </div>
    </motion.div>
  );
};

const ProductGrid = ({ category }) => {
  const products = productData[category] || [];
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cargar carrito guardado al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem('jcavalierCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('jcavalierCart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Añadir producto con opciones (talla, color)
  const handleSelectOptions = ({ size, color }) => {
    const item = {
      ...selectedProduct,
      size,
      color,
    };

    setCartItems((prev) => {
      const exists = prev.some(
        (p) => p.id === item.id && p.size === item.size && p.color === item.color
      );
      return exists ? prev : [...prev, item];
    });

    setSelectedProduct(null);
    setIsCartOpen(true);
  };

  // Eliminar producto individual por índice
  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Vaciar carrito completo
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Cerrar carrito
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  // Abrir selector para añadir otro producto
  const handleAddMore = () => {
    setIsCartOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="coleccion" className="bg-[#1a1a1a] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              delay={index * 0.1}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* Modal para elegir talla/color */}
      {selectedProduct && (
        <SizeColorSelector
          product={selectedProduct}
          onSelect={handleSelectOptions}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Modal carrito con opciones */}
      <CartModal
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        onAddMore={handleAddMore}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        cartItems={cartItems}
      />
    </section>
  );
};

export default ProductGrid;
