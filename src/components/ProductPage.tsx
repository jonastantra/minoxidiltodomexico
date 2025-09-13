import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle, 
  MessageCircle, 
  Shield, 
  Clock, 
  Award,
  Truck,
  Heart,
  Users,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone
} from 'lucide-react';

interface ProductPageProps {
  productId?: string;
}

const ProductPage: React.FC<ProductPageProps> = ({ productId = 'minoxidil-kirkland-barba' }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  const whatsappNumber = "5569380408";

  // Datos del producto basado en el ID
  const productData = {
    'minoxidil-kirkland-barba': {
      name: 'Minoxidil Kirkland Barba 5%',
      shortName: 'Kirkland Barba 5%',
      price: 450,
      originalPrice: 600,
      discount: 25,
      description: 'Minoxidil Kirkland original importado específicamente formulado para crecimiento de barba. Concentración al 5% con resultados visibles en 4-6 semanas.',
      longDescription: 'El Minoxidil Kirkland para barba es el tratamiento más efectivo y confiable para lograr una barba densa y completa. Fabricado bajo estándares FDA con la fórmula original de Kirkland Signature, este producto ha ayudado a miles de hombres en Ciudad de México y zona metropolitana a transformar su barba.',
      images: [
        '/1 mes liquido.jpg',
        'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      benefits: [
        'Estimula folículos pilosos inactivos',
        'Aumenta densidad y grosor de la barba',
        'Fórmula original Kirkland Signature',
        'Concentración exacta al 5%',
        'Resultados visibles en 4-6 semanas',
        'Aplicación nocturna fácil',
        'Sin efectos secundarios graves',
        'Aprobado dermatológicamente'
      ],
      specifications: {
        'Concentración': 'Minoxidil 5%',
        'Presentación': 'Frasco 60ml',
        'Duración': '1-2 meses de tratamiento',
        'Aplicación': 'Nocturna, 1ml por día',
        'Origen': 'Importado original USA',
        'Marca': 'Kirkland Signature',
        'Registro': 'FDA Aprobado'
      },
      whatsappMessage: 'Hola! Me interesa el Minoxidil Kirkland para Barba 5%. ¿Está disponible para pickup en CDMX/Neza? Quiero información sobre precios y disponibilidad.'
    }
  };

  const product = productData[productId as keyof typeof productData] || productData['minoxidil-kirkland-barba'];

  const faqs = [
    {
      question: '¿Cómo usar el Minoxidil Kirkland para barba?',
      answer: 'Aplica 1ml de Minoxidil Kirkland por las noches en la zona de la barba limpia y seca. Masajea suavemente y deja actuar toda la noche. Lava por la mañana. Usa constante por 3-4 meses para resultados completos.'
    },
    {
      question: '¿Cuándo veré resultados con Minoxidil Kirkland?',
      answer: 'Los primeros resultados del Minoxidil Kirkland son visibles entre 4-6 semanas. El crecimiento significativo se nota a los 2-3 meses. Para resultados completos y permanentes, recomendamos 4-6 meses de uso constante.'
    },
    {
      question: '¿Es seguro el Minoxidil Kirkland para la barba?',
      answer: 'Sí, el Minoxidil Kirkland es completamente seguro cuando se usa correctamente. Es el tratamiento más estudiado para crecimiento capilar, aprobado por FDA. Puede causar sequedad inicial que se controla con hidratación.'
    },
    {
      question: '¿Dónde recoger mi Minoxidil Kirkland en CDMX?',
      answer: 'Ofrecemos pickup gratuito en Ciudad de México, Nezahualcóyotl, Iztapalapa y Los Reyes. Coordinamos contigo el punto de encuentro más conveniente. También atendemos Chimalhuacán, Ecatepec y zonas cercanas.'
    },
    {
      question: '¿Qué diferencia hay entre Kirkland y otras marcas?',
      answer: 'Kirkland es la marca original con fórmula FDA, concentración exacta al 5% y pureza garantizada. Otras marcas pueden tener variaciones en concentración o calidad. Kirkland ofrece la mejor relación calidad-precio del mercado.'
    },
    {
      question: '¿Puedo usar Minoxidil Kirkland si tengo poca barba?',
      answer: 'Sí, el Minoxidil Kirkland es ideal para barbas dispersas o zonas sin pelo. Estimula folículos inactivos y genera nuevo crecimiento. Es especialmente efectivo en hombres jóvenes con barba irregular o incompleta.'
    }
  ];

  const handleWhatsAppOrder = () => {
    const message = `${product.whatsappMessage}

Producto: ${product.name}
Cantidad: ${quantity}
Precio: $${product.price * quantity}

¿Cuál sería el siguiente paso para coordinar la compra?`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <a href="#inicio" className="hover:text-green-600">Inicio</a>
            <span className="mx-2">/</span>
            <a href="#productos" className="hover:text-green-600">Productos</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.shortName}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Galería de Imágenes */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={`${product.name} - Minoxidil Kirkland original Ciudad de México`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-green-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Información del Producto */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">(4.8/5 - 127 reseñas)</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Precio */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-green-600">${product.price}</span>
                <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {product.discount}% OFF
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-green-700 mb-4">
                <Truck className="w-5 h-5" />
                <span className="font-medium">Pickup gratuito en CDMX, Neza, Iztapalapa</span>
              </div>

              {/* Cantidad */}
              <div className="flex items-center gap-4 mb-6">
                <label className="font-medium text-gray-700">Cantidad:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-3 font-bold text-lg shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Pedir por WhatsApp - ${product.price * quantity}
              </button>
            </div>

            {/* Garantías */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-blue-800">100% Original</div>
                  <div className="text-sm text-blue-600">Kirkland Signature</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <Award className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-green-800">Resultados</div>
                  <div className="text-sm text-green-600">4-6 semanas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de Información */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-green-500 font-medium text-green-600">
                Descripción
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
                Especificaciones
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
                Reseñas
              </button>
            </nav>
          </div>

          <div className="py-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  ¿Por qué elegir Minoxidil Kirkland para barba?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.longDescription}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900">
                  Beneficios del Minoxidil Kirkland Original
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Especificaciones Técnicas
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <dl className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <dt className="font-medium text-gray-700">{key}:</dt>
                        <dd className="text-gray-600">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h4 className="font-bold text-yellow-800 mb-3">
                    📍 Disponible en Ciudad de México
                  </h4>
                  <div className="space-y-2 text-sm text-yellow-700">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Nezahualcóyotl (Neza) - Pickup gratuito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Iztapalapa - Pickup gratuito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Los Reyes de la Paz - Pickup gratuito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>WhatsApp: 55 69 38 04 08</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Preguntas Frecuentes - <span className="text-green-600">Minoxidil Kirkland</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para transformar tu barba?
          </h2>
          <p className="text-xl mb-6 text-green-100">
            Únete a más de 500 hombres en <strong>Ciudad de México</strong> que ya lograron 
            la barba que siempre quisieron con <strong>Minoxidil Kirkland original</strong>
          </p>
          <button
            onClick={handleWhatsAppOrder}
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Haz tu Pedido Ahora - ${product.price * quantity}
          </button>
          <p className="text-sm text-green-200 mt-4">
            Pickup gratuito en CDMX, Neza, Iztapalapa • Producto original garantizado
          </p>
        </div>
      </div>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Minoxidil Kirkland Barba Ciudad de México</h2>
        <p>Comprar Minoxidil Kirkland para barba en Ciudad de México. Venta directa Minoxidil Kirkland original 5% en CDMX, Nezahualcóyotl, Iztapalapa. Tratamiento crecimiento barba México. Donde comprar Minoxidil Kirkland barba CDMX. Minoxidil original importado barba. Productos barba densa México. Crecimiento barba rápido CDMX. Minoxidil Kirkland precio México. Barba completa tratamiento Ciudad de México.</p>
      </div>
    </div>
  );
};

export default ProductPage;