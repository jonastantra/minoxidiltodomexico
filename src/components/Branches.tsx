import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const Branches: React.FC = () => {
  const whatsappNumber = "5569380408";

  const branches = [
    {
      id: 1,
      name: "Plaza Guelatao",
      address: "Calz. Ignacio Zaragoza 406, Juan Escutia, Iztapalapa, 09100 Ciudad de México, CDMX",
      details: "Dentro de Plaza Guelatao, Local 76, Pasillo 5",
      zone: "Iztapalapa, CDMX",
      hours: "Lun-Sáb: 10:00 AM - 8:00 PM",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.8234567890123!2d-99.0123456789!3d19.3456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff123456789a%3A0x123456789abcdef0!2sPlaza%20Guelatao!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx",
      whatsappMessage: "Hola! Me interesa visitar su sucursal en Plaza Guelatao para comprar Minoxidil Kirkland. ¿Tienen disponibilidad?"
    },
    {
      id: 2,
      name: "Oficinas en Neza",
      address: "Oriente 10 #224, Colonia Reforma, 57840 Ciudad Nezahualcóyotl, Estado de México",
      details: "Oficina principal - Atención personalizada",
      zone: "Nezahualcóyotl, Edomex",
      hours: "Lun-Sáb: 9:00 AM - 7:00 PM",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-99.0234567890!3d19.4123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fe987654321b%3A0x987654321fedcba0!2sOriente%2010%20224%2C%20Reforma%2C%20Nezahualc%C3%B3yotl!5e0!3m2!1ses!2smx!4v1234567890124!5m2!1ses!2smx",
      whatsappMessage: "Hola! Me gustaría visitar su oficina en Nezahualcóyotl para conocer sus productos de Minoxidil Kirkland. ¿Cuál es el mejor horario?"
    }
  ];

  return (
    <section id="sucursales" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestras <span className="text-green-600">Sucursales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visítanos en nuestras ubicaciones físicas en <strong>Ciudad de México</strong> y <strong>Nezahualcóyotl</strong>. 
            Atención personalizada y productos <strong>Minoxidil Kirkland</strong> originales disponibles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header de la sucursal */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{branch.name}</h3>
                </div>
                <p className="text-green-100 font-medium">{branch.zone}</p>
              </div>

              {/* Información de la sucursal */}
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    Dirección:
                  </h4>
                  <p className="text-gray-700 font-semibold leading-relaxed">
                    {branch.address}
                  </p>
                  <p className="text-gray-600 text-sm mt-1 italic">
                    {branch.details}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="font-medium">{branch.hours}</span>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(branch.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contactar Sucursal
                  </a>
                  <button
                    onClick={() => {
                      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`;
                      window.open(mapUrl, '_blank');
                    }}
                    className="flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Cómo Llegar
                  </button>
                </div>
              </div>

              {/* Mapa de Google */}
              <div className="px-6 pb-6">
                <div className="bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                  <iframe
                    src={branch.mapEmbed}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${branch.name} - Minoxidil Kirkland ${branch.zone}`}
                    className="w-full"
                  ></iframe>
                </div>
                
                {/* Información adicional del mapa */}
                <div className="mt-4 bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">
                    📍 Información de ubicación:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fácil acceso en transporte público</li>
                    <li>• Estacionamiento disponible</li>
                    <li>• Productos Minoxidil Kirkland en stock</li>
                    <li>• Atención personalizada y asesoría gratuita</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Por qué visitar nuestras <span className="text-green-600">sucursales físicas</span>?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Ubicaciones Estratégicas</h4>
              <p className="text-gray-600 text-sm">
                Sucursales en <strong>Iztapalapa</strong> y <strong>Nezahualcóyotl</strong>, 
                zonas de alta demanda de productos para barba y cabello.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Atención Personalizada</h4>
              <p className="text-gray-600 text-sm">
                Asesoría directa sobre <strong>Minoxidil Kirkland</strong>, 
                aplicación correcta y seguimiento de resultados.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fácil Acceso</h4>
              <p className="text-gray-600 text-sm">
                Transporte público cercano, estacionamiento disponible 
                y horarios amplios para tu comodidad.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¡Visítanos Hoy Mismo!
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Conoce nuestras sucursales en <strong>Ciudad de México</strong> y <strong>Nezahualcóyotl</strong>. 
              Productos <strong>Minoxidil Kirkland</strong> originales, asesoría gratuita y atención personalizada.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola! Me gustaría información sobre sus sucursales y productos Minoxidil Kirkland disponibles.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg transform hover:scale-105"
            >
              <Phone className="w-6 h-6 mr-3" />
              Contactar Sucursales
            </a>
          </div>
        </div>
      </div>
      
      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h3>Sucursales Minoxidil Kirkland Ciudad de México</h3>
        <p>Sucursales Minoxidil Kirkland Ciudad de México, sucursal Iztapalapa Plaza Guelatao, oficina Nezahualcóyotl Minoxidil. Donde comprar Minoxidil Kirkland presencial CDMX. Tienda física Minoxidil zona oriente. Sucursal Minoxidil Neza. Oficina Minoxidil Iztapalapa. Venta presencial Kirkland original.</p>
      </div>
    </section>
  );
};

export default Branches;