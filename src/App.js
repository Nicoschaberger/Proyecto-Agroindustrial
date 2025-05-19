import React from 'react';
import AgroHeader from './components/AgroHeader';
import AgroHero from './components/AgroHero';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import AgroFooter from './components/AgroFooter';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <AgroHeader />
      <main>
        <AgroHero />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <AgroFooter />
    </div>
  );
}

export default App;

// DONE