import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Branches from './components/Branches';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import SEOContent from './components/SEOContent';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ProductPage from './components/ProductPage';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product'>('home');
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  // Función para navegar a página de producto
  const navigateToProduct = (productId: string) => {
    setSelectedProduct(productId);
    setCurrentView('product');
    window.scrollTo(0, 0);
  };

  // Función para volver al home
  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  if (currentView === 'product') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead />
        <Header />
        <ProductPage productId={selectedProduct} />
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead />
      <Header />
      <Hero />
      <Products onProductClick={navigateToProduct} />
      <About />
      <Branches />
      <SEOContent />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;