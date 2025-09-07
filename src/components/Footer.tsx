import React from 'react';
import { MessageCircle, MapPin, Clock, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappNumber = "5569380408";
  const whatsappMessage = "Hola! Me interesa conocer más sobre sus productos para crecimiento de barba y cabello";

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Barba<span className="text-green-400">Pro</span>
            </h3>
            <p className="text-gray-300">
              Especialistas en crecimiento de barba y cabello con minoxidil original. 
              Más de 500 clientes satisfechos en la zona oriente de CDMX.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#productos" className="hover:text-green-400 transition-colors">
                  Minoxidil Barba 5%
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-green-400 transition-colors">
                  Minoxidil Cabello 5%
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-green-400 transition-colors">
                  Kit Completo
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-green-400 transition-colors">
                  Aceites nutritivos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Zonas de Servicio</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-400" />
                Los Reyes de la Paz
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-400" />
                Nezahualcóyotl
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-400" />
                Iztapalapa
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-400" />
                Chimalhuacán
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span>55 69 38 04 08</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-green-400 mt-1" />
                <div>
                  <p>Lun-Sáb: 9:00 AM - 8:00 PM</p>
                  <p>Dom: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BarbaPro. Todos los derechos reservados. Productos para crecimiento de barba y cabello en CDMX.
            </p>
            <div className="text-sm text-gray-400 md:text-right">
              <p>
                <strong>Keywords:</strong> crecimiento barba, minoxidil, cabello, Los Reyes, Nezahualcóyotl, Iztapalapa
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;