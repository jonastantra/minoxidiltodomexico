import React from 'react';

const SEOHead: React.FC = () => {
  React.useEffect(() => {
    // Update page title
    document.title = "Minoxidil Ciudad de México | Kirkland Original Neza Iztapalapa CDMX | Comprar Minoxidil";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprar Minoxidil Ciudad de México ✅ Kirkland Original 5% para barba y cabello ✅ Venta directa CDMX, Neza, Iztapalapa ✅ Pickup gratuito ✅ Resultados garantizados ✅ WhatsApp 55-6938-0408');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Comprar Minoxidil Ciudad de México ✅ Kirkland Original 5% para barba y cabello ✅ Venta directa CDMX, Neza, Iztapalapa ✅ Pickup gratuito ✅ Resultados garantizados ✅ WhatsApp 55-6938-0408';
      document.head.appendChild(meta);
    }

    // Add keywords meta tag
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'minoxidil ciudad de mexico, minoxidil kirkland, minoxidil neza, comprar minoxidil cdmx, minoxidil precio ciudad de mexico, minoxidil nezahualcoyotl, minoxidil iztapalapa, donde comprar minoxidil en cdmx, tratamiento crecimiento barba mexico, minoxidil kirkland original cdmx, venta minoxidil ciudad de mexico, minoxidil barato neza, productos barba cdmx, crecimiento cabello ciudad de mexico, minoxidil zona oriente, barba densa mexico, calvicie tratamiento cdmx, minoxidil gustavo a madero, minoxidil ecatepec';
    document.head.appendChild(metaKeywords);

    // Add Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Minoxidil Ciudad de México | Kirkland Original CDMX Neza Iztapalapa';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Comprar Minoxidil Ciudad de México ✅ Kirkland Original para barba y cabello ✅ Venta directa CDMX, Neza, Iztapalapa ✅ Pickup gratuito ✅ WhatsApp 55-6938-0408';
    document.head.appendChild(ogDescription);

    // Add local business structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Minoxidil Ciudad de México - Kirkland Original CDMX",
      "description": "Comprar Minoxidil Ciudad de México. Venta Kirkland Original 5% para crecimiento barba y cabello. Pickup gratuito CDMX, Neza, Iztapalapa",
      "telephone": "+52-55-6938-0408",
      "url": "https://minoxidilcdmx.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ciudad de México",
        "addressRegion": "Estado de México",
        "addressCountry": "MX",
        "postalCode": "57000"
      },
      "areaServed": [
        "Ciudad de México",
        "Nezahualcóyotl", 
        "Iztapalapa",
        "Los Reyes de la Paz",
        "Chimalhuacán",
        "Valle de Chalco",
        "La Paz Estado de México",
        "Gustavo A. Madero",
        "Venustiano Carranza",
        "Ecatepec"
      ],
      "serviceType": "Venta Minoxidil Kirkland original, tratamiento crecimiento barba y cabello",
      "priceRange": "$450-$850",
      "paymentAccepted": "Efectivo, Transferencia",
      "currenciesAccepted": "MXN"
    });
    document.head.appendChild(script);
  }, []);

  return null;
};

export default SEOHead;