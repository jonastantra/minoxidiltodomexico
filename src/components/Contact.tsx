import React, { useState } from 'react';
import { MessageCircle, MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    product: ''
  });

  const whatsappNumber = "5569380408";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola! Mi nombre es ${formData.name}
    
Teléfono: ${formData.phone}
Producto de interés: ${formData.product}
Mensaje: ${formData.message}

Me gustaría recibir más información sobre sus productos para crecimiento de barba y cabello.`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para comenzar tu <span className="text-green-600">transformación</span>?
          </h2>
          <p className="text-xl text-gray-600">
            Contáctanos por WhatsApp o llena el formulario. Te respondemos en minutos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicita tu consulta gratuita
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="55 1234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Producto de interés
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Selecciona un producto</option>
                  <option value="Minoxidil Barba 5%">Minoxidil Barba 5%</option>
                  <option value="Minoxidil Cabello 5%">Minoxidil Cabello 5%</option>
                  <option value="Kit Completo">Kit Completo Barba + Cabello</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Cuéntanos sobre tu caso específico..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar por WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">55 69 38 04 08</p>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Enviar mensaje →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Zona de servicio</h4>
                    <p className="text-gray-600">
                      Los Reyes de la Paz, Nezahualcóyotl, Iztapalapa y zonas aledañas del oriente de CDMX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Horarios de atención</h4>
                    <p className="text-gray-600">
                      Lunes a Sábado: 9:00 AM - 8:00 PM<br />
                      Domingo: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 mb-3">
                🚚 Pickup Gratuito
              </h4>
              <p className="text-green-700 text-sm mb-4">
                Coordinamos contigo el punto de encuentro más cómodo en tu zona. 
                Sin costos adicionales en las áreas principales.
              </p>
              <div className="text-xs text-green-600">
                <strong>Zonas principales:</strong> Los Reyes, Neza, Iztapalapa<br />
                <strong>Zonas cercanas:</strong> Chimalhuacán, La Paz, Valle de Chalco
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 mb-3">
                💬 Respuesta rápida
              </h4>
              <p className="text-blue-700 text-sm">
                Respondemos todos los mensajes en menos de 30 minutos durante horario de atención. 
                ¡Tu consulta es importante para nosotros!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;