import React, { useState } from 'react';
import JCavalierHeader from './components/JCavalierHeader';
import HeroLanding from './components/HeroLanding';
import CategoryMenu from './components/CategoryMenu';
import ProductGrid from './components/ProductGrid';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SocialFloatButtons from './components/SocialFloatButtons';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('Múnich Collection');

  return (
    <div className="font-sans text-gray-900 bg-neutral">
      <JCavalierHeader />
      <HeroLanding />
      <CategoryMenu
        activeCategory={activeCategory}
        onCategorySelect={setActiveCategory}
      />
      <main>
        <ProductGrid category={activeCategory} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <SocialFloatButtons />
    </div>
  );
};

export default App;
