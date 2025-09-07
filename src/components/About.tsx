import React from 'react';
import { Shield, Award, Users, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              ¿Por qué elegir{' '}
              <span className="text-green-600">Minoxidil Kirkland</span> original?
            </h2>
            <p className="text-lg text-gray-600">
              Somos especialistas en <strong>Minoxidil Kirkland original</strong> para crecimiento de barba y cabello en 
              <strong>Ciudad de México, Nezahualcóyotl, Iztapalapa</strong> y zona oriente. 
              Nuestro <strong>Minoxidil Kirkland 5%</strong> es 100% original importado y ha 
              ayudado a más de 500 personas en CDMX a lograr la barba y cabello que desean.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Minoxidil Kirkland Original</h3>
                  <p className="text-gray-600">
                    Minoxidil Kirkland 100% original importado con certificación. Sin imitaciones ni productos genéricos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Resultados Garantizados</h3>
                  <p className="text-gray-600">
                    Primeros resultados visibles en 4-6 semanas. Crecimiento completo en 3-4 meses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Asesoría Personalizada</h3>
                  <p className="text-gray-600">
                    Te acompañamos en todo el proceso. Seguimiento por WhatsApp y consejos de aplicación.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Venta Directa Zona Oriente CDMX</h3>
                  <p className="text-gray-600">
                    Venta directa de <strong>Minoxidil Kirkland</strong> en <strong>Ciudad de México, Nezahualcóyotl, Iztapalapa, Los Reyes</strong> y 
                    zonas aledañas del oriente de CDMX. Sin intermediarios.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Zonas de Venta Minoxidil Kirkland
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">Ciudad de México (CDMX)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">Nezahualcóyotl (Neza)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">Iztapalapa</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">Los Reyes de la Paz</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Chimalhuacán</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>La Paz</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Valle de Chalco</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                ✅ Verde oscuro = Venta directa gratuita<br />
                ✅ Verde claro = Venta con costo mínimo de envío
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">¿Cómo funciona el pickup?</h4>
              <ol className="space-y-2 text-gray-600">
                <li>1. Contactas por WhatsApp</li>
                <li>2. Confirmamos disponibilidad de Minoxidil Kirkland</li>
                <li>3. Coordinamos punto de encuentro</li>
                <li>4. Recoges tu Minoxidil Kirkland sin costo extra</li>
              </ol>
            </div>
          </div>
        </div>
        
        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Minoxidil Kirkland Ciudad de México venta directa</h3>
          <p>Venta directa Minoxidil Kirkland Ciudad de México, Minoxidil Kirkland Nezahualcóyotl, Minoxidil Kirkland Iztapalapa, Minoxidil Kirkland Los Reyes. Donde comprar Minoxidil Kirkland CDMX. Minoxidil original importado México. Productos barba Ciudad de México. Crecimiento cabello CDMX zona oriente.</p>
        </div>
      </div>
    </section>
  );
};

export default About;