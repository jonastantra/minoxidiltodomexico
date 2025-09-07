import React from 'react';
import { MessageCircle, Star, CheckCircle, MapPin, Clock } from 'lucide-react';

interface ProductsProps {
  onProductClick?: (productId: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
  const whatsappNumber = "5569380408";

  const products = [
    {
      id: "1-mes-minoxidil-kirkland",
      name: "1 Mes Minoxidil Kirkland 5% - CDMX",
      description: "Minoxidil Kirkland original para crecimiento de barba y cabello en Ciudad de México. Tratamiento de 1 mes con resultados visibles. Comprar Minoxidil en CDMX con entrega rápida. Haz tu pedido por WhatsApp.",
      price: "$250",
      originalPrice: "$350",
      image: "https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["Kirkland Original", "1 mes tratamiento", "Entrega CDMX"],
      whatsappMessage: "Hola! Me interesa el 1 Mes Minoxidil Kirkland 5% - CDMX por $250. ¿Está disponible para pickup?"
    },
    {
      id: "3-meses-minoxidil-kirkland",
      name: "3 Meses Minoxidil Kirkland - CDMX",
      description: "Tratamiento completo Minoxidil Kirkland 3 meses para barba densa en Ciudad de México. Minoxidil original importado con resultados garantizados. Comprar Minoxidil en CDMX. Entrega rápida zona metropolitana.",
      price: "$600",
      originalPrice: "$900",
      image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["3 meses completos", "Ahorro 33%", "Resultados garantizados"],
      whatsappMessage: "Hola! Me interesa el 3 Meses Minoxidil Kirkland - CDMX por $600. ¿Puedo recogerlo hoy?",
      isPopular: true
    },
    {
      id: "6-meses-minoxidil-kirkland",
      name: "6 Meses Minoxidil Kirkland - Neza",
      description: "Minoxidil Kirkland 6 meses tratamiento profesional en Nezahualcóyotl. Crecimiento barba y regeneración capilar completa. Minoxidil Neza con entrega en Nezahualcóyotl. Máximo ahorro y resultados permanentes.",
      price: "$1,100",
      originalPrice: "$1,500",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["6 meses completos", "Máximo ahorro", "Resultados permanentes"],
      whatsappMessage: "Hola! Me interesa el 6 Meses Minoxidil Kirkland - Neza por $1,100. ¿Hacen entrega en Nezahualcóyotl?"
    },
    {
      id: "biotina-natrol",
      name: "Biotina Natrol 10,000 mcg - CDMX",
      description: "Biotina Natrol 10,000 mcg para fortalecimiento capilar en Ciudad de México. Complemento perfecto con Minoxidil Kirkland. Tratamiento para barba y cabello más efectivo. Comprar en CDMX con entrega rápida.",
      price: "$450",
      originalPrice: "$600",
      image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["10,000 mcg potencia", "Fortalece cabello", "Complemento ideal"],
      whatsappMessage: "Hola! Me interesa la Biotina Natrol 10,000 mcg - CDMX por $450. ¿Está disponible?"
    },
    {
      id: "balsamo-crecimiento-barba",
      name: "Bálsamo Crecimiento Barba 12% - Neza",
      description: "Bálsamo crecimiento barba 12% concentrado en Nezahualcóyotl. Tratamiento para barba densa y suave. Minoxidil Neza complemento perfecto. Entrega en Nezahualcóyotl. Resultados visibles en 3 semanas.",
      price: "$480",
      originalPrice: "$650",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["12% concentrado", "Barba suave", "Resultados rápidos"],
      whatsappMessage: "Hola! Me interesa el Bálsamo Crecimiento Barba 12% - Neza por $480. ¿Puedo recogerlo en Neza?"
    },
    {
      id: "12-meses-minoxidil-kirkland",
      name: "12 Meses Minoxidil Kirkland - CDMX",
      description: "Minoxidil Kirkland 12 meses tratamiento completo en Ciudad de México. Máximo ahorro para crecimiento barba y regeneración capilar. Comprar Minoxidil en CDMX. Tratamiento anual con resultados permanentes garantizados.",
      price: "$2,000",
      originalPrice: "$3,000",
      image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["Tratamiento anual", "Máximo ahorro 33%", "Resultados permanentes"],
      whatsappMessage: "Hola! Me interesa el 12 Meses Minoxidil Kirkland - CDMX por $2,000. ¿Qué formas de pago aceptan?"
    },
    {
      id: "kit-gran-barbon",
      name: "Kit Gran Barbón Minoxidil - Neza",
      description: "Kit Gran Barbón Minoxidil completo en Nezahualcóyotl. Incluye Minoxidil Kirkland, bálsamo y aceites nutritivos. Minoxidil Neza kit profesional. Entrega en Nezahualcóyotl. Todo lo necesario para barba perfecta.",
      price: "$780",
      originalPrice: "$1,200",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["Kit completo", "Ahorro 35%", "Todo incluido"],
      whatsappMessage: "Hola! Me interesa el Kit Gran Barbón Minoxidil - Neza por $780. ¿Qué incluye exactamente?"
    },
    {
      id: "shampoo-minoxidil-control",
      name: "Shampoo Minoxidil Control - Neza",
      description: "Shampoo Minoxidil Control para cabello en Nezahualcóyotl. Complemento perfecto con tratamiento Minoxidil Kirkland. Fortalece y controla caída capilar. Minoxidil Neza con entrega rápida en Nezahualcóyotl.",
      price: "$280",
      originalPrice: "$400",
      image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["Control caída", "Fortalece cabello", "Complemento ideal"],
      whatsappMessage: "Hola! Me interesa el Shampoo Minoxidil Control - Neza por $280. ¿Está disponible para pickup?"
    },
    {
      id: "locion-crecimiento-barba",
      name: "Loción Crecimiento Barba 10% - CDMX",
      description: "Loción crecimiento barba 10% concentrada en Ciudad de México. Tratamiento para barba rápido y efectivo. Comprar en CDMX con entrega inmediata. Complementa perfectamente con Minoxidil Kirkland para mejores resultados.",
      price: "$349",
      originalPrice: "$500",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["10% concentrado", "Acción rápida", "Complemento perfecto"],
      whatsappMessage: "Hola! Me interesa la Loción Crecimiento Barba 10% - CDMX por $349. ¿Cuándo puedo recogerla?"
    },
    {
      id: "minoxidil-kirkland-foam",
      name: "Minoxidil Kirkland 5% Foam - Neza",
      description: "Minoxidil Kirkland 5% Foam original en Nezahualcóyotl. Fórmula espuma de fácil aplicación para barba y cabello. Minoxidil Neza con entrega en Nezahualcóyotl. Tratamiento profesional con resultados garantizados.",
      price: "$480",
      originalPrice: "$650",
      image: "https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=400",
      benefits: ["Fórmula espuma", "Fácil aplicación", "Kirkland original"],
      whatsappMessage: "Hola! Me interesa el Minoxidil Kirkland 5% Foam - Neza por $480. ¿Es la versión espuma original?"
    }
  ];

  return (
    <section id="productos" className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            <span className="text-green-600">Minoxidil Kirkland</span> Original - CDMX y Neza
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Catálogo completo de <strong>Minoxidil Kirkland original</strong> y productos para crecimiento de barba y cabello. 
            Venta directa en <strong>Ciudad de México y Nezahualcóyotl</strong> con entrega rápida.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
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
                  alt={`${product.name} - Minoxidil Ciudad de México Nezahualcóyotl`}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-red-500 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-bold">
                  Oferta
                </div>
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {product.name.includes('CDMX') ? 'CDMX' : 'Neza'}
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-600 text-sm">(4.8/5)</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{product.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{product.description}</p>

                <div className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-xl sm:text-2xl font-bold text-green-600">{product.price}</span>
                  <span className="text-base sm:text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs sm:text-sm font-bold">
                    OFERTA
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Entrega rápida {product.name.includes('CDMX') ? 'CDMX' : 'Neza'}</span>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => onProductClick?.(product.id)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
                  >
                    Ver Detalles
                  </button>
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
            </div>
          ))}
        </div>

        <div className="mt-8 lg:mt-12 text-center">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 rounded-xl p-4 sm:p-6 max-w-4xl mx-auto">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">
              🚚 Entrega Rápida en Ciudad de México y Nezahualcóyotl
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm sm:text-base">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  CDMX - Ciudad de México
                </h4>
                <p className="text-blue-700">
                  Pickup gratuito en <strong>Iztapalapa, Gustavo A. Madero, Venustiano Carranza</strong> y zonas cercanas. 
                  Coordinamos contigo el punto de encuentro más conveniente.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Neza - Nezahualcóyotl
                </h4>
                <p className="text-green-700">
                  Entrega directa en <strong>Nezahualcóyotl, Los Reyes, Chimalhuacán</strong> y zona oriente. 
                  Servicio rápido y confiable en toda el área metropolitana.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Catálogo completo Minoxidil Ciudad de México y Nezahualcóyotl</h3>
          <p>Venta de Minoxidil Kirkland original en Ciudad de México y Nezahualcóyotl. Productos para crecimiento de barba y cabello. Minoxidil CDMX, Minoxidil Neza. Tratamientos 1, 3, 6 y 12 meses. Biotina, bálsamos, lociones y kits completos. Entrega rápida en CDMX y Neza. Comprar Minoxidil en Ciudad de México y Nezahualcóyotl. Precios especiales y ofertas exclusivas.</p>
        </div>
      </div>
    </section>
  );
};

export default Products;