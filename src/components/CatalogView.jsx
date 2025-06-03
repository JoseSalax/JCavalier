import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SizeSelector from './SizeSelector';
import CartModal from './CartModal';

const productData = {
  'Monarch linen': [
    { id: 1, name: 'Monarch linen Blanco', price: 25.0, image: '/images/Monarch linen/1.jpg' },
    { id: 2, name: 'Monarch linen Gris', price: 25.0, image: '/images/Monarch linen/2.jpg' },
    { id: 3, name: 'Monarch linen Beige', price: 25.0, image: '/images/Monarch linen/3.jpg' },
    { id: 4, name: 'Monarch linen Rosa', price: 25.0, image: '/images/Monarch linen/4.jpg' },
    { id: 5, name: 'Monarch linen Azul', price: 25.0, image: '/images/Monarch linen/5.jpg' },
    { id: 6, name: 'Monarch linen Negro', price: 25.0, image: '/images/Monarch linen/6.jpg' },
  ],
  'Imprerial': [
    { id: 7, name: 'Franela Imprerial Blanco', price: 32.0, image: '/images/Franela y Chemise Imprerial/1.jpg' },
    { id: 8, name: 'Franela Imprerial verde', price: 28.0, image: '/images/Franela y Chemise Imprerial/2.jpg' },
    { id: 9, name: 'Franela Imprerial Azul', price: 25.0, image: '/images/Monarch linen/3.jpg' },
    { id: 10, name: 'Chemise Imperial Rosa', price: 25.0, image: '/images/Monarch linen/4.jpg' },
    { id: 11, name: 'Chemise Imperial vrde', price: 25.0, image: '/images/Monarch linen/5.jpg' },
    { id: 12, name: 'Chemise Imperial Azul', price: 25.0, image: '/images/Monarch linen/6.jpg' },
  ],
  'Set Diamond': [
    { id: 13, name: 'Pantalon blamco', price: 22.0, image: '/images/Set Diamond/1.jpg' },
    { id: 14, name: 'Pantalon beige', price: 35.0, image: '/images/Set Diamond/2.jpg' },
    { id: 15, name: 'Pantalon rojo', price: 25.0, image: '/images/Monarch linen/3.jpg' },
    { id: 16, name: 'Short negro', price: 25.0, image: '/images/Monarch linen/4.jpg' },
    { id: 17, name: 'Short verde', price: 25.0, image: '/images/Monarch linen/5.jpg' },
    { id: 18, name: 'Short gris', price: 25.0, image: '/images/Monarch linen/6.jpg' },
  ],
  'Gold Sport Set': [
    { id: 19, name: 'Sport Blanco', price: 100.0, image: '/images/Gold Sport Set/1.jpg' },
    { id: 20, name: 'Sport Rojo', price: 85.0, image: '/images/Gold Sport Set/2.jpg' },
    { id: 21, name: 'Sport negro', price: 25.0, image: '/images/Monarch linen/3.jpg' },
    { id: 22, name: 'Sport gris', price: 25.0, image: '/images/Monarch linen/4.jpg' },
    { id: 23, name: 'Sport azul', price: 25.0, image: '/images/Monarch linen/5.jpg' },
    { id: 24, name: 'Sport beige', price: 25.0, image: '/images/Monarch linen/6.jpg' },
  ],
  'Set Playero': [
    { id: 25, name: 'Palmeras Blanco', price: 50.0, image: '/images/Set Playero/1.jpg' },
    { id: 26, name: 'Palmeras verde', price: 25.0, image: '/images/Monarch linen/6.jpg' },
    { id: 27, name: 'Palmeras Beige', price: 25.0, image: '/images/Monarch linen/3.jpg' },
    { id: 28, name: 'Palmeras Rosa', price: 25.0, image: '/images/Monarch linen/4.jpg' },
    { id: 29, name: 'Palmeras Azul', price: 25.0, image: '/images/Monarch linen/5.jpg' },
    { id: 30, name: 'Palmeras Negro', price: 25.0, image: '/images/Monarch linen/6.jpg' },
  ],
  'Camisas Cubanas': [
    { id: 31, name: 'Camisa Cubana Blanco', price: 30.0, image: '/images/Camisas Cubanas/1.jpg' },
    { id: 32, name: 'Camisa Cubana Beige', price: 25.0, image: '/images/Monarch linen/3.jpg' },
    { id: 33, name: 'Camisa Cubana Rosa', price: 25.0, image: '/images/Monarch linen/4.jpg' },
    { id: 34, name: 'Camisa Cubana Azul', price: 25.0, image: '/images/Monarch linen/5.jpg' },
    { id: 35, name: 'Camisa Cubana Negro', price: 25.0, image: '/images/Monarch linen/6.jpg' },
    { id: 36, name: 'Camisa Cubana Negro', price: 25.0, image: '/images/Monarch linen/6.jpg' },
  ],
};

const CatalogView = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem('jcavalierCart');
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  // Guardar carrito en localStorage al cambiar
  useEffect(() => {
    localStorage.setItem('jcavalierCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSelectOptions = ({ size, color, model }) => {
    const item = {
      ...selectedProduct,
      size,
      color,
      model,
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

  const handleRemoveItem = (index) =>
    setCartItems((prev) => prev.filter((_, i) => i !== index));

  const handleClearCart = () => setCartItems([]);

  const handleCloseCart = () => setIsCartOpen(false);

  const handleAddMore = () => {
    setIsCartOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="tulio-catalogo" className="bg-[#1a1a1a] py-16 px-4 min-h-[auto]">
      <div className="max-w-7xl mx-auto">
        {!selectedCollection ? (
          <>
            <h2 className="text-white text-xl font-heading mb-8 text-center uppercase tracking-wider">
              Colecciones JCavalier
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Object.entries(productData).map(([name, products], i) => (
                <ProductCard
                  key={name}
                  product={{
                    name,
                    image: products[0]?.image,
                  }}
                  delay={i * 0.1}
                  onClick={() => setSelectedCollection(name)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setSelectedCollection(null)}
                className="text-sm text-white hover:underline"
              >
                ← Volver a colecciones
              </button>
              <h3 className="text-white text-lg font-bold uppercase tracking-wide">
                {selectedCollection}
              </h3>
              <div></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {productData[selectedCollection].map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  delay={i * 0.1}
                  onClick={setSelectedProduct}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {selectedProduct && (
        <SizeSelector
          product={selectedProduct}
          collection={productData[selectedCollection]}
          onSelect={handleSelectOptions}
          onClose={() => setSelectedProduct(null)}
        />
      )}

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

// Card individual de producto o colección
const ProductCard = ({ product, delay, onClick }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="bg-[#262626] p-4 text-white rounded-md cursor-pointer hover:shadow-md transition"
      onClick={() => onClick(product)}
    >
      <div className="aspect-square overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={`Vista previa de ${product.name}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="mt-4 text-sm text-center">
        <p className="font-medium">{product.name}</p>
        {product.price && (
          <p className="text-gray-400 text-xs mt-1">${product.price.toFixed(2)} USD</p>
        )}
      </div>
    </motion.div>
  );
};

export default CatalogView;