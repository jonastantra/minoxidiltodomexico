import React, { useState, useMemo } from 'react';
import { ArrowLeft, Calendar, User, Tag, MessageCircle, Clock, Star, CheckCircle } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  keywords: string[];
  content: string;
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const whatsappNumber = "5569380408";

  const blogPosts: BlogPost[] = useMemo(() => [
    {
      id: "donde-comprar-minoxidil-cdmx-2025",
      title: "¿Dónde comprar Minoxidil en Ciudad de México? Guía completa 2025",
      excerpt: "Descubre las mejores opciones para comprar Minoxidil Kirkland original en CDMX, Neza e Iztapalapa. Comparación de precios y lugares confiables.",
      category: "Guías de Compra",
      readTime: "8 min",
      date: "15 Dic 2024",
      keywords: ["Minoxidil Ciudad de México", "comprar Minoxidil CDMX", "Minoxidil Kirkland original"],
      content: `<h2>¿Dónde comprar Minoxidil en Ciudad de México?</h2>
      <p>La <strong>Ciudad de México</strong> se ha convertido en el epicentro de la venta de <strong>Minoxidil Kirkland original</strong> en México. Con más de 9 millones de habitantes, la demanda de productos para crecimiento de barba y cabello ha crecido exponencialmente.</p>
      
      <h3>Mejores opciones para comprar Minoxidil en CDMX</h3>
      <ul>
        <li><strong>Venta directa especializada</strong> - La opción más confiable</li>
        <li><strong>Farmacias tradicionales</strong> - Limitada disponibilidad</li>
        <li><strong>Tiendas en línea</strong> - Riesgo de productos falsos</li>
      </ul>

      <h3>Ventajas de comprar con entrega rápida en Iztapalapa y Neza</h3>
      <p>Las zonas de <strong>Iztapalapa</strong> y <strong>Nezahualcóyotl</strong> ofrecen las mejores opciones de pickup para <strong>Minoxidil Kirkland</strong>:</p>
      <ul>
        <li>Entrega el mismo día</li>
        <li>Producto 100% original garantizado</li>
        <li>Precios directos sin intermediarios</li>
        <li>Asesoría personalizada incluida</li>
      </ul>

      <h3>Comparación de precios Minoxidil CDMX 2025</h3>
      <p><strong>Farmacias tradicionales:</strong> $800-$1200<br>
      <strong>Tiendas en línea:</strong> $600-$900 (riesgo de falsificaciones)<br>
      <strong>Venta directa especializada:</strong> $450-$520 (original garantizado)</p>`
    },
    {
      id: "minoxidil-kirkland-vs-otras-marcas",
      title: "Minoxidil Kirkland vs. otras marcas: ¿Cuál es mejor para barba y cabello?",
      excerpt: "Comparación detallada entre Kirkland y marcas genéricas. Descubre por qué Kirkland es la mejor opción en CDMX y Neza.",
      category: "Comparativas",
      readTime: "10 min",
      date: "12 Dic 2024",
      keywords: ["Minoxidil Kirkland", "Minoxidil Neza", "diferencia Minoxidil Kirkland original"],
      content: `<h2>Minoxidil Kirkland vs. otras marcas</h2>
      <p><strong>Kirkland Signature</strong> se ha posicionado como la marca líder en <strong>Minoxidil</strong> a nivel mundial. En <strong>Ciudad de México</strong> y <strong>Nezahualcóyotl</strong>, la diferencia es aún más notable.</p>

      <h3>¿Por qué Kirkland es superior?</h3>
      <ul>
        <li><strong>Concentración exacta:</strong> 5% garantizado vs. variaciones en genéricos</li>
        <li><strong>Pureza del producto:</strong> Estándares FDA vs. calidad variable</li>
        <li><strong>Resultados comprobados:</strong> 85% efectividad vs. 60-70% genéricos</li>
        <li><strong>Precio-calidad:</strong> Mejor relación del mercado</li>
      </ul>

      <h3>Testimonios reales en Neza y CDMX</h3>
      <p><em>"Probé 3 marcas diferentes antes de Kirkland. Solo con Kirkland vi resultados reales en mi barba en 6 semanas."</em> - Carlos M., Nezahualcóyotl</p>

      <h3>Cómo identificar Kirkland original</h3>
      <ul>
        <li>Empaque con hologramas de seguridad</li>
        <li>Código de barras verificable</li>
        <li>Textura y color específicos</li>
        <li>Compra solo con distribuidores autorizados</li>
      </ul>`
    },
    {
      id: "como-usar-minoxidil-paso-a-paso",
      title: "Cómo usar Minoxidil paso a paso para lograr mejores resultados en barba y cabello",
      excerpt: "Guía completa de aplicación diaria de Minoxidil. Rutinas, horarios y consejos para maximizar resultados en CDMX.",
      category: "Tutoriales",
      readTime: "12 min",
      date: "10 Dic 2024",
      keywords: ["cómo usar Minoxidil", "Minoxidil barba CDMX", "Minoxidil 5% Kirkland Neza"],
      content: `<h2>Guía completa: Cómo usar Minoxidil correctamente</h2>
      <p>El <strong>Minoxidil Kirkland 5%</strong> requiere una aplicación correcta para obtener los mejores resultados. Esta guía está basada en la experiencia de más de 500 clientes en <strong>CDMX</strong> y <strong>Nezahualcóyotl</strong>.</p>

      <h3>Rutina diaria recomendada</h3>
      <p><strong>Mañana (Opcional):</strong></p>
      <ul>
        <li>Lavar la zona con agua tibia</li>
        <li>Secar completamente</li>
        <li>Aplicar 1ml de Minoxidil</li>
        <li>Masajear suavemente 2-3 minutos</li>
      </ul>

      <p><strong>Noche (Obligatorio):</strong></p>
      <ul>
        <li>Limpiar la piel con jabón neutro</li>
        <li>Secar completamente (muy importante)</li>
        <li>Aplicar 1ml de Minoxidil Kirkland</li>
        <li>Dejar actuar toda la noche</li>
      </ul>

      <h3>Cronograma de resultados esperados</h3>
      <p><strong>Semanas 1-2:</strong> Posible descamación (normal)<br>
      <strong>Semanas 3-6:</strong> Primeros vellos finos visibles<br>
      <strong>Semanas 8-12:</strong> Aumento notable de densidad<br>
      <strong>Meses 4-6:</strong> Resultados completos</p>

      <h3>Consejos para potenciar resultados</h3>
      <ul>
        <li>Usar dermaroller 0.5mm una vez por semana</li>
        <li>Complementar con biotina 10,000 mcg</li>
        <li>Mantener una dieta rica en proteínas</li>
        <li>Evitar tocar la zona durante 4 horas post-aplicación</li>
      </ul>`
    },
    {
      id: "preguntas-frecuentes-minoxidil-mexico-2025",
      title: "Preguntas frecuentes sobre Minoxidil en México (FAQ actualizado 2025)",
      excerpt: "Respuestas a las 15 preguntas más comunes sobre Minoxidil. Información actualizada para usuarios en México.",
      category: "FAQ",
      readTime: "15 min",
      date: "8 Dic 2024",
      keywords: ["Minoxidil México", "Minoxidil preguntas frecuentes", "comprar Minoxidil Neza"],
      content: `<h2>FAQ Minoxidil México 2025</h2>
      <p>Recopilación de las preguntas más frecuentes sobre <strong>Minoxidil</strong> basada en consultas reales de clientes en <strong>Ciudad de México</strong> y <strong>Nezahualcóyotl</strong>.</p>

      <h3>¿Cuánto tiempo tarda en verse el efecto del Minoxidil?</h3>
      <p>Los primeros resultados del <strong>Minoxidil Kirkland</strong> son visibles entre 4-6 semanas. El crecimiento significativo se nota a los 2-3 meses. Para resultados completos, recomendamos 4-6 meses de uso constante.</p>

      <h3>¿Es seguro usar Minoxidil Kirkland en barba?</h3>
      <p>Sí, es completamente seguro. El <strong>Minoxidil</strong> es el tratamiento más estudiado para crecimiento capilar, aprobado por FDA. Puede causar sequedad inicial que se controla con hidratación.</p>

      <h3>¿Se puede dejar de usar después de crecer la barba?</h3>
      <p>Una vez logrados los resultados deseados, se puede reducir gradualmente la frecuencia de aplicación. Muchos usuarios en <strong>CDMX</strong> mantienen una aplicación semanal como mantenimiento.</p>

      <h3>¿Dónde se consigue Minoxidil original en Nezahualcóyotl?</h3>
      <p>En <strong>Nezahualcóyotl</strong> ofrecemos venta directa con pickup gratuito. Coordinamos contigo el punto de encuentro más conveniente en toda la zona oriente.</p>

      <h3>¿Qué efectos secundarios puede tener?</h3>
      <p>Los efectos más comunes son sequedad y descamación inicial (primeras 2 semanas). Menos del 5% experimenta irritación, que se resuelve ajustando la frecuencia de aplicación.</p>`
    },
    {
      id: "vitaminas-suplementos-potencian-minoxidil",
      title: "Vitaminas y suplementos que potencian el efecto del Minoxidil",
      excerpt: "Descubre cómo la Biotina, Bergamota y otros suplementos multiplican los resultados del Minoxidil. Combinaciones efectivas disponibles en CDMX.",
      category: "Suplementos",
      readTime: "9 min",
      date: "5 Dic 2024",
      keywords: ["Biotina CDMX", "suplementos para barba Neza", "vitaminas para cabello México"],
      content: `<h2>Suplementos que potencian el Minoxidil</h2>
      <p>La combinación de <strong>Minoxidil Kirkland</strong> con suplementos específicos puede acelerar y mejorar significativamente los resultados. Basado en estudios y experiencia de clientes en <strong>CDMX</strong>.</p>

      <h3>Stack básico recomendado</h3>
      <ul>
        <li><strong>Minoxidil Kirkland 5%:</strong> Base del tratamiento</li>
        <li><strong>Biotina 10,000 mcg:</strong> Fortalece folículos pilosos</li>
        <li><strong>Colágeno hidrolizado:</strong> Mejora calidad del cabello</li>
        <li><strong>Zinc 15mg:</strong> Optimiza absorción</li>
      </ul>

      <h3>Stack avanzado para resultados máximos</h3>
      <p>Para usuarios que buscan los mejores resultados en el menor tiempo:</p>
      <ul>
        <li>Todo lo del stack básico +</li>
        <li><strong>Saw Palmetto 320mg:</strong> Bloquea DHT</li>
        <li><strong>Vitamina D3 4000 UI:</strong> Salud folicular</li>
        <li><strong>Omega 3:</strong> Antiinflamatorio natural</li>
      </ul>

      <h3>Disponibilidad en Ciudad de México</h3>
      <p>Todos estos suplementos están disponibles para pickup en <strong>CDMX</strong>, <strong>Nezahualcóyotl</strong> e <strong>Iztapalapa</strong>. Ofrecemos paquetes combinados con descuentos especiales.</p>

      <h3>Precios de stacks completos</h3>
      <p><strong>Stack Básico:</strong> $1,200 (ahorro $300)<br>
      <strong>Stack Avanzado:</strong> $1,800 (ahorro $500)<br>
      <strong>Stack Premium:</strong> $2,400 (ahorro $800)</p>`
    }
  ], []);

  const categories = ['all', 'Guías de Compra', 'Comparativas', 'Tutoriales', 'FAQ', 'Suplementos'];

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') return blogPosts;
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [blogPosts, selectedCategory]);

  const handleWhatsAppContact = (postTitle: string) => {
    const message = `Hola! Leí el artículo "${postTitle}" y me interesa obtener más información sobre Minoxidil Kirkland original. ¿Pueden ayudarme?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (selectedPost) {
    return (
      <section id="blog" className="py-16 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Blog
          </button>

          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime} lectura</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Experto en Minoxidil</span>
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedPost.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-ul:text-gray-600"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ¿Te resultó útil este artículo?
                </h3>
                <p className="text-gray-600 mb-6">
                  Haz tu pedido de <strong>Minoxidil Kirkland original</strong> con entrega rápida en 
                  <strong> CDMX, Nezahualcóyotl e Iztapalapa</strong>. Asesoría personalizada incluida.
                </p>
                <button
                  onClick={() => handleWhatsAppContact(selectedPost.title)}
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-bold text-lg shadow-lg transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Contactar por WhatsApp
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Respuesta inmediata • Pickup gratuito • Producto original garantizado
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Blog <span className="text-green-600">Minoxidil CDMX</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guías completas, consejos de expertos y todo lo que necesitas saber sobre 
            <strong> Minoxidil en Ciudad de México</strong> y zona metropolitana.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              {category === 'all' ? 'Todos los artículos' : category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.keywords.slice(0, 2).map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      <Tag className="w-3 h-3 inline mr-1" />
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            ¿Necesitas asesoría personalizada?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Nuestros expertos en <strong>Minoxidil</strong> están disponibles para resolver tus dudas específicas 
            sobre crecimiento de barba y cabello en <strong>Ciudad de México</strong>.
          </p>
          <button
            onClick={() => handleWhatsAppContact("Consulta general del blog")}
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Consulta Gratuita por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;