import React from 'react';

const SEOHead: React.FC = () => {
  React.useEffect(() => {
    // Update page title
    document.title = "Crecimiento Barba y Cabello | Minoxidil Los Reyes Nezahualcóyotl Iztapalapa CDMX";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Productos para crecimiento de barba y cabello con minoxidil. Entrega en Los Reyes de la Paz, Nezahualcóyotl, Iztapalapa. WhatsApp 55-6938-0408. Resultados garantizados.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Productos para crecimiento de barba y cabello con minoxidil. Entrega en Los Reyes de la Paz, Nezahualcóyotl, Iztapalapa. WhatsApp 55-6938-0408. Resultados garantizados.';
      document.head.appendChild(meta);
    }

    // Add keywords meta tag
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'crecimiento barba, minoxidil, crecimiento cabello, barba densa, productos barba, Los Reyes de la Paz, Nezahualcóyotl, Iztapalapa, Ciudad de México, oriente CDMX, barba rápido, cabello fuerte, minoxidil original';
    document.head.appendChild(metaKeywords);

    // Add Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Crecimiento Barba y Cabello | Minoxidil Oriente CDMX';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Productos premium para crecimiento de barba y cabello. Pickup en Los Reyes, Neza, Iztapalapa. ¡Contacta por WhatsApp!';
    document.head.appendChild(ogDescription);

    // Add local business structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Crecimiento Barba y Cabello CDMX",
      "description": "Productos para crecimiento de barba y cabello con minoxidil",
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
        "Ciudad de México"
      ],
      "serviceType": "Productos para crecimiento capilar y barba"
    });
    document.head.appendChild(script);
  }, []);

  return null;
};

export default SEOHead;