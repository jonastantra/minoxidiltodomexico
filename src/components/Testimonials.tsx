import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      location: "Los Reyes de la Paz",
      rating: 5,
      text: "Increíble el cambio en mi barba. En 6 semanas ya tenía mucha más densidad. El minoxidil es original y el pickup súper cómodo. 100% recomendado.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Miguel R.", 
      location: "Nezahualcóyotl",
      rating: 5,
      text: "Tenía calvicie incipiente y me daba pena. Con el tratamiento para cabello de 3 meses, ya no se me nota. Súper profesional el servicio.",
      image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "David L.",
      location: "Iztapalapa", 
      rating: 5,
      text: "Mi barba era muy dispersa. Ahora luzco una barba completa y tupida. El producto llegó rápido y el precio está muy bien. Gracias!",
      image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros <span className="text-green-600">clientes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Más de 500 personas han transformado su barba y cabello con nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={`Cliente satisfecho ${testimonial.name} - crecimiento barba`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-green-200 absolute -top-2 -left-1" />
                <p className="text-gray-600 pl-6 italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-green-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para transformar tu barba y cabello?
            </h3>
            <p className="text-green-100 mb-6">
              Únete a más de 500 personas que ya han logrado los resultados que buscaban. 
              Productos originales, resultados garantizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-3xl font-bold">⭐ 4.8/5</div>
              <div className="text-green-100">|</div>
              <div className="text-lg">500+ clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;