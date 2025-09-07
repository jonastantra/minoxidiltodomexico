import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const whatsappNumber = "5569380408";
  const whatsappMessage = "Hola! Me interesa conocer más sobre sus productos para crecimiento de barba y cabello";

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Barba<span className="text-green-600">Pro</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="#productos" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Productos
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Nosotros
            </a>
            <a href="#sucursales" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Sucursales
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Contacto
            </a>
          </nav>

          {/* WhatsApp Button Desktop */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
          >
            <Phone className="w-4 h-4 mr-2" />
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#productos" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </a>
              <a 
                href="#nosotros" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a 
                href="#sucursales" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sucursales
              </a>
              <a 
                href="#contacto" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;