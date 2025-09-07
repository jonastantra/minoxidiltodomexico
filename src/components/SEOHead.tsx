import React from 'react';

const SEOHead: React.FC = () => {
  React.useEffect(() => {
    // Update page title
    document.title = "Crecimiento Barba y Cabello | Minoxidil Los Reyes Nezahualcóyotl Iztapalapa CDMX";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Minoxidil Kirkland original para crecimiento barba y cabello. Venta en Ciudad de México, Nezahualcóyotl, Iztapalapa, Los Reyes. Minoxidil 5% resultados garantizados. WhatsApp 55-6938-0408.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Minoxidil Kirkland original para crecimiento barba y cabello. Venta en Ciudad de México, Nezahualcóyotl, Iztapalapa, Los Reyes. Minoxidil 5% resultados garantizados. WhatsApp 55-6938-0408.';
      document.head.appendChild(meta);
    }

    // Add keywords meta tag
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'minoxidil kirkland, minoxidil ciudad de mexico, minoxidil nezahualcoyotl, minoxidil neza, minoxidil iztapalapa, minoxidil los reyes, crecimiento barba cdmx, minoxidil 5%, barba kirkland, cabello kirkland, minoxidil original mexico, donde comprar minoxidil cdmx, minoxidil barato neza, productos barba mexico, crecimiento cabello cdmx, minoxidil zona oriente, barba densa mexico, calvicie tratamiento cdmx';
    document.head.appendChild(metaKeywords);

    // Add Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Minoxidil Kirkland Original | Ciudad de México, Neza, Iztapalapa';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Minoxidil Kirkland 5% original para barba y cabello. Venta directa en CDMX, Nezahualcóyotl, Iztapalapa. Resultados garantizados. ¡Contacta por WhatsApp!';
    document.head.appendChild(ogDescription);

    // Add local business structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Minoxidil Kirkland CDMX - Crecimiento Barba y Cabello",
      "description": "Venta de Minoxidil Kirkland original 5% para crecimiento de barba y cabello en Ciudad de México",
      "telephone": "+52-55-6938-0408",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Reyes de la Paz",
        "addressRegion": "Estado de México",
        "addressCountry": "MX"
      },
      "areaServed": [
        "Los Reyes de la Paz",
        "Nezahualcóyotl", 
        "Iztapalapa",
        "Ciudad de México",
        "Chimalhuacán",
        "Valle de Chalco",
        "La Paz Estado de México"
      ],
      "serviceType": "Venta Minoxidil Kirkland, productos crecimiento barba y cabello",
      "priceRange": "$400-$900"
    });
    document.head.appendChild(script);
  }, []);

  return null;
};

export default SEOHead;