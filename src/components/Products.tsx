import React from 'react';
import { MessageCircle, Star, CheckCircle } from 'lucide-react';

const Products: React.FC = () => {
  const whatsappNumber = "5569380408";

  const products = [
    {
      id: 1,
      name: "Minoxidil Barba 5%",
      description: "Fórmula especializada para crecimiento de barba. Aplicación fácil, resultados en 4-6 semanas.",
      price: "$450",
      originalPrice: "$600",
      image: "https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["Estimula folículos", "Sin efectos secundarios", "Aplicación nocturna"],
      whatsappMessage: "Hola! Me interesa el Minoxidil para Barba 5%. ¿Está disponible para pickup?"
    },
    {
      id: 2, 
      name: "Minoxidil Cabello 5%",
      description: "Tratamiento profesional para calvicie y debilitamiento capilar. Fórmula concentrada.",
      price: "$520",
      originalPrice: "$700",
      image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["Frena caída", "Aumenta densidad", "Fortalece cabello"],
      whatsappMessage: "Hola! Me interesa el Minoxidil para Cabello 5%. ¿Puedo recogerlo en Los Reyes?"
    },
    {
      id: 3,
      name: "Kit Completo Barba + Cabello",
      description: "Combo especial: Minoxidil barba + cabello + aceite nutritivo. El más vendido.",
      price: "$850",
      originalPrice: "$1200",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["Combo completo", "Ahorro del 30%", "Aceite de regalo"],
      whatsappMessage: "¡Hola! Me interesa el Kit Completo Barba + Cabello. ¿Cuál es el proceso para el pickup?",
      isPopular: true
    }
  ];

  return (
    <section id="productos" className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            Productos para <span className="text-green-600">Crecimiento</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Minoxidil original al 5% con resultados comprobados. Pickup disponible en{' '}
            <strong>Los Reyes de la Paz, Nezahualcóyotl e Iztapalapa</strong>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                product.isPopular ? 'ring-4 ring-green-500 ring-opacity-50' : ''
              }`}
            >
              {product.isPopular && (
                <div className="bg-green-500 text-white text-center py-2 font-bold text-sm">
                  🔥 MÁS VENDIDO
                </div>
              )}
              
              <div className="relative">
                <img
                  src={product.image}
                  alt={`${product.name} - crecimiento barba cabello minoxidil`}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-red-500 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-bold">
                  Oferta
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-600 text-sm">(4.8/5)</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{product.name}</h3>
                <p className="text-sm sm:text-base text-gray-600">{product.description}</p>

                <div className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-xs sm:text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-xl sm:text-2xl font-bold text-green-600">{product.price}</span>
                  <span className="text-base sm:text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs sm:text-sm font-bold">
                    25% OFF
                  </span>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 lg:mt-12 text-center">
          <div className="bg-green-100 border border-green-200 rounded-xl p-4 sm:p-6 max-w-2xl mx-auto">
            <h3 className="text-base sm:text-lg font-bold text-green-800 mb-2">
              🚚 Pickup Gratis en Zona Oriente
            </h3>
            <p className="text-sm sm:text-base text-green-700">
              Recoge tu producto sin costo adicional en <strong>Los Reyes de la Paz, 
              Nezahualcóyotl o Iztapalapa</strong>. Coordinamos contigo el punto de encuentro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;