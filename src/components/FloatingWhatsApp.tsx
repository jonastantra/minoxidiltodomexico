import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappNumber = "5569380408";
  const whatsappMessage = "¡Hola! Me interesa conocer más sobre sus productos para crecimiento de barba y cabello. ¿Pueden ayudarme?";

  useEffect(() => {
    // Show button after 1 second
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Show tooltip after 3 seconds on desktop only
    const tooltipTimer = setTimeout(() => {
      if (window.innerWidth >= 768) {
        setShowTooltip(true);
      }
    }, 3000);

    // Hide tooltip after 8 seconds
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleTooltipClose = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="hidden sm:block fixed bottom-4 right-4 z-50">
        <div className="relative">
          {/* Tooltip - Desktop only */}
          {showTooltip && (
            <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl p-3 w-56 border border-gray-200 animate-bounce">
              <button
                onClick={handleTooltipClose}
                className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="pr-4">
                <h4 className="font-bold text-gray-800 text-xs mb-1">
                  💬 ¡Consulta Gratis!
                </h4>
                <p className="text-xs text-gray-600">
                  Pregúntanos sobre barba y cabello
                </p>
              </div>
              <div className="absolute bottom-[-6px] right-4 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-2xl transition-all duration-300 transform hover:scale-110 group relative"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
          </button>

          {/* Badge */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            1
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Button */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-green-600 text-white z-50 shadow-2xl">
        <button
          onClick={handleWhatsAppClick}
          className="w-full flex items-center justify-center gap-3 py-4 px-4 font-bold text-base active:bg-green-700 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Consulta Gratis por WhatsApp</span>
          <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold ml-2">
            1
          </div>
        </button>
      </div>
    </>
  );
};

export default FloatingWhatsApp;