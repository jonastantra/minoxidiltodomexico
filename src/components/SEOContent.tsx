import React from 'react';
import { Star, MapPin, Shield, Clock, CheckCircle, MessageCircle } from 'lucide-react';

const SEOContent: React.FC = () => {
  const whatsappNumber = "5569380408";
  const whatsappMessage = "Hola! Me interesa comprar Minoxidil Kirkland original en Ciudad de México. ¿Tienen disponibilidad?";

  return (
    <div className="bg-white">
      {/* Hero SEO Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-green-600">Minoxidil Ciudad de México</span> - 
              Kirkland Original para Barba y Cabello
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compra <strong>Minoxidil Kirkland original</strong> en <strong>Ciudad de México</strong> y zona metropolitana. 
              Tratamiento profesional para crecimiento de barba y cabello con resultados garantizados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                CDMX • Neza • Iztapalapa • Los Reyes
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                500+ clientes satisfechos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* ¿Por qué elegir Minoxidil? */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              ¿Por qué elegir <span className="text-green-600">Minoxidil Kirkland original en CDMX</span>?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              El <strong>Minoxidil</strong> es el tratamiento más efectivo y científicamente comprobado para el 
              <strong>crecimiento de barba y cabello</strong>. En <strong>Ciudad de México</strong>, somos especialistas 
              en la venta de <strong>Minoxidil Kirkland original</strong>, la marca más confiable del mercado con 
              concentración al 5% que garantiza resultados visibles en 4-6 semanas.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-green-600" />
                  Beneficios del Minoxidil para Barba
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Estimula folículos pilosos inactivos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Aumenta densidad y grosor de la barba
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Resultados visibles en 4-6 semanas
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Fórmula científicamente comprobada
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-green-600" />
                  Beneficios del Minoxidil para Cabello
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Detiene la caída del cabello
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Regenera cabello en zonas con calvicie
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Fortalece el cabello existente
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Aprobado por dermatólogos mundialmente
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Minoxidil Kirkland vs Otras Marcas */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="text-green-600">Minoxidil Kirkland</span> vs Otras Marcas: 
              ¿Por qué es la mejor opción en México?
            </h2>
            <p className="text-lg text-gray-600">
              <strong>Kirkland</strong> es la marca líder con fórmula más pura. La mejor opción en <strong>CDMX</strong>.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Ventajas del Minoxidil Kirkland Original
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✅ Calidad Garantizada</h4>
                  <p className="text-green-600 text-sm">Estándares FDA, concentración exacta 5%.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✅ Precio Competitivo</h4>
                  <p className="text-green-600 text-sm">Mejor precio del mercado con máxima efectividad.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✅ Resultados Comprobados</h4>
                  <p className="text-green-600 text-sm">85% de efectividad comprobada clínicamente.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✅ Disponibilidad CDMX</h4>
                  <p className="text-green-600 text-sm">Stock permanente, entrega inmediata CDMX.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Disponibilidad Local */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Comprar <span className="text-green-600">Minoxidil en Ciudad de México</span> y Zona Metropolitana
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos tu mejor opción para <strong>comprar Minoxidil en CDMX</strong>. Ofrecemos venta directa 
              con pickup gratuito en las principales zonas de <strong>Ciudad de México</strong> y área metropolitana. 
              Nuestro <strong>Minoxidil Kirkland</strong> está disponible inmediatamente en:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  🏙️ Ciudad de México (CDMX)
                </h3>
                <ul className="text-blue-600 text-sm space-y-1">
                  <li>• Iztapalapa</li>
                  <li>• Gustavo A. Madero</li>
                  <li>• Venustiano Carranza</li>
                  <li>• Cuauhtémoc</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  🏘️ Estado de México
                </h3>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• <strong>Nezahualcóyotl (Neza)</strong></li>
                  <li>• Los Reyes de la Paz</li>
                  <li>• Chimalhuacán</li>
                  <li>• Ecatepec</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">
                  📍 Zonas Cercanas
                </h3>
                <ul className="text-purple-600 text-sm space-y-1">
                  <li>• Valle de Chalco</li>
                  <li>• La Paz</li>
                  <li>• Chalco</li>
                  <li>• Texcoco</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Minoxidil Neza Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="text-green-600">Minoxidil Neza</span> - Compra Rápida y Segura
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              ¿Buscas <strong>Minoxidil en Nezahualcóyotl</strong>? Somos especialistas en la zona oriente 
              con más de 3 años atendiendo clientes en <strong>Neza</strong> y alrededores. Nuestro 
              <strong>Minoxidil Kirkland</strong> ha ayudado a cientos de personas en Nezahualcóyotl a 
              lograr la barba y cabello que siempre quisieron.
            </p>
            
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                ¿Por qué somos la mejor opción de Minoxidil en Neza?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Entrega Inmediata</h4>
                    <p className="text-gray-600 text-sm">
                      Pickup el mismo día en puntos estratégicos de Nezahualcóyotl
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Producto Original</h4>
                    <p className="text-gray-600 text-sm">
                      100% Kirkland original importado, sin imitaciones
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Conocemos la Zona</h4>
                    <p className="text-gray-600 text-sm">
                      Puntos de encuentro seguros y convenientes en toda Neza
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Clientes Satisfechos</h4>
                    <p className="text-gray-600 text-sm">
                      Más de 200 clientes atendidos solo en Nezahualcóyotl
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Precios y Llamada a la Acción */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="text-green-600">Minoxidil precio en Ciudad de México</span> - 
              Ofertas Especiales
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ofrecemos los mejores precios de <strong>Minoxidil Kirkland</strong> en <strong>Ciudad de México</strong>. 
              Sin intermediarios, sin sobrecostos. Compra directamente y ahorra hasta 40% comparado con farmacias tradicionales.
            </p>
            
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                🔥 Oferta Especial CDMX - Tiempo Limitado
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow">
                  <h4 className="font-bold text-gray-800">Minoxidil Barba</h4>
                  <p className="text-2xl font-bold text-green-600">$450</p>
                  <p className="text-gray-500 line-through">$600</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <h4 className="font-bold text-gray-800">Minoxidil Cabello</h4>
                  <p className="text-2xl font-bold text-green-600">$520</p>
                  <p className="text-gray-500 line-through">$700</p>
                </div>
                <div className="bg-green-100 rounded-lg p-4 shadow border-2 border-green-400">
                  <h4 className="font-bold text-green-800">Kit Completo</h4>
                  <p className="text-2xl font-bold text-green-600">$850</p>
                  <p className="text-gray-500 line-through">$1200</p>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">MÁS VENDIDO</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-yellow-700 font-semibold">
                  ✅ Pickup gratuito en CDMX, Neza, Iztapalapa<br />
                  ✅ Producto original garantizado<br />
                  ✅ Asesoría personalizada incluida
                </p>
                
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-bold text-lg shadow-lg transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Haz tu Pedido Hoy Mismo - WhatsApp
                </a>
                
                <p className="text-sm text-gray-600">
                  <strong>Visítanos en la CDMX</strong> - Coordinamos contigo el mejor punto de encuentro
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Preguntas Frecuentes sobre <span className="text-green-600">Minoxidil en Ciudad de México</span>
            </h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Dónde comprar Minoxidil en Ciudad de México?
                </h3>
                <p className="text-gray-600">
                  Puedes comprar <strong>Minoxidil Kirkland original</strong> directamente con nosotros. 
                  Ofrecemos venta con pickup gratuito en <strong>Ciudad de México, Nezahualcóyotl, Iztapalapa</strong> 
                  y zonas aledañas. Contacta por WhatsApp para coordinar tu compra.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿El Minoxidil Kirkland es original?
                </h3>
                <p className="text-gray-600">
                  Sí, vendemos únicamente <strong>Minoxidil Kirkland 100% original</strong> importado directamente. 
                  Cada producto viene con su empaque original y sellos de autenticidad. Garantizamos la originalidad 
                  de todos nuestros productos.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Cuánto cuesta el Minoxidil en CDMX?
                </h3>
                <p className="text-gray-600">
                  Nuestros precios son: <strong>Minoxidil Barba $450</strong>, <strong>Minoxidil Cabello $520</strong>, 
                  y <strong>Kit Completo $850</strong>. Ofrecemos los mejores precios de <strong>Minoxidil en Ciudad de México</strong> 
                  sin comprometer la calidad.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Hacen entregas en Nezahualcóyotl?
                </h3>
                <p className="text-gray-600">
                  Sí, ofrecemos <strong>pickup gratuito en Nezahualcóyotl</strong> y toda la zona oriente. 
                  Coordinamos contigo el punto de encuentro más conveniente. Tenemos amplia experiencia 
                  atendiendo clientes en <strong>Neza</strong> y conocemos muy bien la zona.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Cuánto tiempo tarda en hacer efecto el Minoxidil?
                </h3>
                <p className="text-gray-600">
                  Los primeros resultados del <strong>Minoxidil Kirkland</strong> son visibles entre 4-6 semanas 
                  de uso constante. Para resultados completos en barba y cabello, recomendamos un tratamiento 
                  de 3-4 meses. Cada persona es diferente, pero la mayoría ve cambios significativos en el segundo mes.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Es seguro usar Minoxidil para la barba?
                </h3>
                <p className="text-gray-600">
                  Sí, el <strong>Minoxidil</strong> es completamente seguro para uso en barba cuando se usa correctamente. 
                  Es el tratamiento más estudiado y aprobado mundialmente para crecimiento capilar. Te proporcionamos 
                  instrucciones detalladas y seguimiento personalizado para garantizar el mejor resultado.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¡Transforma tu Barba y Cabello Hoy Mismo!
            </h2>
            <p className="text-xl mb-6 text-green-100">
              Únete a más de 500 personas en <strong>Ciudad de México</strong> que ya lograron 
              los resultados que buscaban con <strong>Minoxidil Kirkland original</strong>
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Contactar Ahora - WhatsApp
            </a>
            <p className="text-sm text-green-200 mt-4">
              Respuesta inmediata • Pickup gratuito CDMX • Producto original garantizado
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOContent;