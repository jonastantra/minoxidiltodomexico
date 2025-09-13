import React from 'react';
import { MessageCircle, MapPin, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappNumber = "5569380408";
  const whatsappMessage = "¡Hola! Me interesa obtener una barba más densa y cabello fuerte. ¿Pueden ayudarme?";

  return (
    <section id="inicio" className="bg-gradient-to-br from-gray-50 to-green-50 py-8 sm:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-green-600">Minoxidil Kirkland</span>{' '}
                Original para{' '}
                <span className="text-green-600">Barba y Cabello</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <strong>Minoxidil Kirkland 5%</strong> original importado para crecimiento acelerado de barba y cabello. 
                Resultados visibles en 4-6 semanas. Venta directa en{' '}
                <strong>Ciudad de México, Nezahualcóyotl, Iztapalapa y Los Reyes</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg font-semibold text-base sm:text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Comprar Minoxidil Kirkland
              </a>
              <a
                href="#productos"
                className="flex items-center justify-center bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors border-2 border-green-600 font-semibold text-base sm:text-lg"
              >
                Ver Productos
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 lg:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">4-6</div>
                <div className="text-xs sm:text-sm text-gray-600">Semanas resultados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Kirkland Original</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl max-w-md mx-auto">
              <img
                src="/minoxidil-kirkland-real.jpg"
                alt="Minoxidil Kirkland crecimiento barba Ciudad de México Nezahualcóyotl"
                className="w-full h-full object-cover rounded-xl lg:rounded-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="hidden sm:block absolute -top-2 -left-2 lg:-top-4 lg:-left-4 bg-white p-2 lg:p-4 rounded-lg lg:rounded-xl shadow-xl">
              <MapPin className="w-4 h-4 lg:w-6 lg:h-6 text-green-600 mb-1 lg:mb-2" />
              <div className="text-xs lg:text-sm font-semibold">Pickup en:</div>
              <div className="text-xs text-gray-600">CDMX, Neza, Iztapalapa</div>
            </div>
            
            <div className="hidden sm:block absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 bg-white p-2 lg:p-4 rounded-lg lg:rounded-xl shadow-xl">
              <Clock className="w-4 h-4 lg:w-6 lg:h-6 text-green-600 mb-1 lg:mb-2" />
              <div className="text-xs lg:text-sm font-semibold">Resultados en:</div>
              <div className="text-xs text-gray-600">4-6 semanas</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Minoxidil Kirkland Ciudad de México</h2>
        <p>Venta de Minoxidil Kirkland original en Ciudad de México, Nezahualcóyotl, Iztapalapa, Los Reyes de la Paz. Minoxidil 5% para crecimiento de barba y cabello. Donde comprar Minoxidil Kirkland en CDMX. Minoxidil barato Nezahualcóyotl. Productos para barba México. Crecimiento cabello CDMX. Minoxidil zona oriente. Barba densa México. Calvicie tratamiento CDMX.</p>
        <h3>Minoxidil Nezahualcóyotl</h3>
        <p>Minoxidil Kirkland Nezahualcóyotl, Minoxidil Neza, donde comprar Minoxidil en Nezahualcóyotl, productos barba Neza, crecimiento cabello Nezahualcóyotl.</p>
        <h3>Minoxidil Iztapalapa Los Reyes</h3>
        <p>Minoxidil Kirkland Iztapalapa, Minoxidil Los Reyes de la Paz, venta Minoxidil zona oriente CDMX, productos crecimiento barba Iztapalapa.</p>
      </div>
    </section>
  );
};

export default Hero;