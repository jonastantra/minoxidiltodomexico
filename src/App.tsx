import { useMemo, useState } from 'react';

type Product = {
  name: string;
  price: string;
  image: string;
  tag: string;
  copy: string;
};

type Post = {
  title: string;
  excerpt: string;
  body: string;
};

type SiteData = {
  brand: string;
  shortBrand: string;
  domain: string;
  title: string;
  description: string;
  theme: string;
  accent: string;
  heroImage: string;
  location: string;
  promise: string;
  h1: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  sections: string[][];
  products: Product[];
  posts: Post[];
  faq: string[][];
};

const SITE = {
  "key": "todo-mexico",
  "dir": "G:\\1.Otros Sitios Web\\minoxidiltodomexico\\minoxidiltodomexico",
  "brand": "Minoxidil Todo Mexico",
  "shortBrand": "Todo Mexico",
  "domain": "https://www.minoxidiltodomexico.com/",
  "title": "Minoxidil Todo Mexico | Envio nacional por WhatsApp",
  "description": "Compra minoxidil Kirkland para barba y cabello con envio a todo Mexico por $140 fijo. Entregas personales gratis y pago contra entrega en CDMX.",
  "theme": "mexico",
  "accent": "#137a45",
  "heroImage": "diseno-sin-titulo-1.jpg",
  "location": "Envios a todo Mexico desde CDMX",
  "promise": "Envio nacional tarifa fija de $140 y entregas personales gratis con pago contra entrega en CDMX.",
  "h1": "Minoxidil para todo Mexico, con envio a tarifa plana de $140",
  "subtitle": "Arma tu tratamiento por meses, confirma disponibilidad por WhatsApp y recibe de forma segura en cualquier parte de la Republica mexicana.",
  "primaryCta": "Pedir por WhatsApp",
  "secondaryCta": "Ver paquetes",
  "sections": [
    [
      "Envio Nacional $140",
      "Costo de envio parejo a todo Mexico, incluyendo de forma garantizada zonas extendidas de dificil acceso."
    ],
    [
      "Entregas Contra Entrega CDMX",
      "Entrega personal gratis y pago contra entrega al recibir en CDMX y area metropolitana para tu seguridad."
    ],
    [
      "Compra guiada",
      "Te ayudamos a elegir liquido, espuma o complemento sin venderte cosas que no necesitas."
    ]
  ],
  "products": [
    {
      "name": "6 Meses Minoxidil Kirkland Liquido 5",
      "price": "$1,100",
      "image": "6-meses.jpg",
      "tag": "Kirkland Liquido",
      "copy": "Por supuesto, aquí tienes una descripción mejorada para mejorar el SEO del producto: Kirkland para 6 meses de tratamiento 5 Extra Strength: Estimul..."
    },
    {
      "name": "3 Meses Minoxidil Kirkland Liquido 5",
      "price": "$600",
      "image": "3-meses-1.jpg",
      "tag": "Kirkland Liquido",
      "copy": "Tratamiento Kirkland 5 Extra Strength para 3 Meses: Estimula el crecimiento capilar y fortalece tu cabello El Tratamiento Kirkland 5 Extra Strength..."
    },
    {
      "name": "Biotina Natrol de 10,000 Microgramos Con 100 Tabletas | Vitaminas para Cabello y Uñas",
      "price": "$450",
      "image": "biotina-low.jpg",
      "tag": "Biotina",
      "copy": "Biotina Marca Natrol de 10,000 MCG (Diez Mil) 100 Tabletas: Fomenta la salud capilar y promueve un aspecto radiante La Biotina Marca Natrol de 10,0..."
    },
    {
      "name": "1 Mes Minoxidil Kirkland Liquido 5",
      "price": "$250",
      "image": "1-mes-minoxidil-kirkland-low-1.jpg",
      "tag": "Kirkland Liquido",
      "copy": "Por supuesto, aquí tienes una descripción mejorada para mejorar el SEO del producto: Tratamiento Kirkland 5 Extra Strength para 1 Mes: Estimula el ..."
    },
    {
      "name": "Bálsamo Para el Crecimiento de Barba al 12% 4 oz Maximus",
      "price": "$480",
      "image": "balsamo12.jpg",
      "tag": "Balsamo",
      "copy": "¡Nuestro producto para el crecimiento de la barba es la solución que estabas buscando! Es fácil de usar y extremadamente efectivo para estimular el..."
    },
    {
      "name": "Skin Roller 0.5 mm (derma Roller) | Estimulador de Crecimiento Capilar",
      "price": "$240",
      "image": "dermaroller.jpg",
      "tag": "Dermaroller",
      "copy": "Skin Roller (Derma Roller) de 0.5 mm: Tu herramienta versátil para el cuidado de la piel El Skin Roller, también conocido como Derma Roller, es una..."
    },
    {
      "name": "2 Meses Tratamiento Minoxidil Kirkland Líquido 5",
      "price": "$450",
      "image": "2-meses.jpg",
      "tag": "Kirkland Liquido",
      "copy": "Tratamiento Kirkland 5 Extra Strength para 2 Meses: Estimula el crecimiento capilar y fortalece tu cabello El tratamiento Kirkland 5 Extra Strength..."
    },
    {
      "name": "12 Meses Minoxidil Kirkland Liquido 5",
      "price": "$2,000",
      "image": "12-meses.jpg",
      "tag": "Kirkland Liquido",
      "copy": "Kirkland para 12 meses de tratamiento 5 Extra Strength: Estimula el crecimiento capilar y fortalece tu cabello durante todo un año El tratamiento K..."
    },
    {
      "name": "Kit Del Barbon 3 Meses Minoxidil Kirkland Con Biotina Natrol",
      "price": "$1,000",
      "image": "15085827-1340189009347678-3152941011026575360-n-2.jpg",
      "tag": "Kirkland Liquido",
      "copy": "Kit para el cuidado capilar con Biotina de 10,000 mcg de la marca Natrol Descubre el secreto para un cabello más fuerte, grueso y saludable con el ..."
    },
    {
      "name": "Kit Gran Barbon Minoxidil Con Balsamo",
      "price": "$780",
      "image": "3-meses-minoxidil-balsamo-low-1.jpg",
      "tag": "Balsamo",
      "copy": "3 Meses de Minoxidil Kirkland + Balsamo de Bergamota Marca Maximus Beard No hay tratamiento mas Poderoso para Crecimiento de Barba Balsamo Bergamot..."
    },
    {
      "name": "1 Mes Minoxidil Kirkland 5% Foam (espuma) Tratamiento 100% Importado.",
      "price": "$480",
      "image": "6-meses-espuma.jpg",
      "tag": "Espuma Kirkland",
      "copy": "El Minoxidil Kirkland 5% Foam es un tratamiento altamente efectivo para el crecimiento del cabello, especialmente diseñado para combatir la pérdida..."
    },
    {
      "name": "Shampoo Minoxidil Control Caida y Regeneracion de Cabello – 500 Ml.",
      "price": "$280",
      "image": "minoxidil-4.jpg",
      "tag": "Shampoo",
      "copy": "Shampoo con Minoxidil: Tratamiento Eficaz para Prevenir la Caída del Cabello El shampoo con minoxidil es un tratamiento efectivo diseñado para prev..."
    },
    {
      "name": "Kit Crecimiento de Barba 3 Meses Minoxidil + 1 Cera Karite",
      "price": "$700",
      "image": "3-meses-cera-y-minoxidil-low-1.jpg",
      "tag": "Kit Ahorro",
      "copy": "Con este KIT estimulas el crecimiento de La Barba ya que Incluye 3 Meses de Minoxidil Kirkland más Cera de Bergamotas, estos componentes comprobado..."
    },
    {
      "name": "1 Mes – Loción Para el Crecimiento de Barba al 10% + Bergamota Maximus",
      "price": "$349",
      "image": "minoxidil10-md.jpg",
      "tag": "Tratamiento",
      "copy": "¡Nuestro bálsamo para el crecimiento de la barba es la combinación perfecta de Minoxidil y Bergamota, dos poderosos ingredientes que te brindarán l..."
    },
    {
      "name": "Kit de 2 Jabones Crecimiento Para Barba. Arma tu Kit de Jabones",
      "price": "$180",
      "image": "2jabones.jpg",
      "tag": "Jabon",
      "copy": "Promoción Exclusiva: ¡Kit de Jabones de Crecimiento para Barba y Bigote! ¡Con nuestro Kit de Jabones de Crecimiento Maximus, obtendrás los mejores ..."
    },
    {
      "name": "Balsamo Bergamota, Maximus Beard (45 Gr)",
      "price": "$200",
      "image": "bergamotae55539c64f7f56f1.jpg",
      "tag": "Balsamo",
      "copy": "BALSAMO BERGAMOTA (BARBA Y BIGOTE) Balsamo :Hecho a base de productos naturales como la cera de abeja ,vitamina E, aceites esenciales,aceite de coc..."
    },
    {
      "name": "Cera Con Bergamota, Jojoba, Karite Marca Maximus",
      "price": "$160",
      "image": "cera-karite-maximus-low-1.jpg",
      "tag": "Tratamiento",
      "copy": "Nuestra nueva CERA de crecimiento de Barba – Cera de Abeja – Aceite de Jojoba – Aceite de Karite – Aceite de Romero – Aceite de Bergamota – Aceite ..."
    },
    {
      "name": "Aceite Tonico Bergamota Para Barbba y Bigote (citrix) 30 ml Maximus",
      "price": "$180",
      "image": "tonicomaximus.jpg",
      "tag": "Tratamiento",
      "copy": "Aceite de Crecimiento para Barba y Bigote Increible para el empezar el tratamiento de barba"
    },
    {
      "name": "Shampoo Bergamota Crecimiento Acelerado – Maximus 500 Ml.",
      "price": "$280",
      "image": "bergamota-6.jpg",
      "tag": "Shampoo",
      "copy": "Shampoo de Bergamota Maximus: Potente Fórmula para un Cabello Fuerte y Brillante El Shampoo de Bergamota Maximus ofrece una serie de beneficios par..."
    },
    {
      "name": "3 Rimel – Crecimiento de Pestañas y Cejas Minoxidil 5% y Biotina",
      "price": "$700",
      "image": "3pestanas.jpg",
      "tag": "Biotina",
      "copy": "🖤 Rimel de Biotina para Pestañas y Cejas – Pack Doble Transforma tus pestañas y cejas con nuestro increíble Rimel de Biotina, ahora disponible en ..."
    },
    {
      "name": "2 Rimel – Crecimiento de Pestañas y Cejas Minoxidil 5% y Biotina",
      "price": "$480",
      "image": "2pestanas.jpg",
      "tag": "Biotina",
      "copy": "◾️Incluye: 2 Rimels. Cada Rimel dura Aproximadamente 2 Semanas ◾️Los primeros resultados se empiezan a ver al mes de uso constante. ◾️Alarga tus pe..."
    },
    {
      "name": "1 Rimel – Crecimiento de Pestañas y Cejas Minoxidil 5% y Biotina",
      "price": "$250",
      "image": "1pestanas.jpg",
      "tag": "Biotina",
      "copy": "🖤 Rimel de Biotina para Pestañas y Cejas Transforma tus pestañas y cejas con nuestro increíble Rimel de Biotina, diseñado para brindarte resultado..."
    },
    {
      "name": "Pomada Suavecita 113g",
      "price": "$300",
      "image": "suavecita-1.jpg",
      "tag": "Tratamiento",
      "copy": "Pomada Suavecita para Mujeres Inspirada en nuestra icónica Pomada Suavecito Original, la Pomada Suavecita para Mujeres está diseñada específicament..."
    },
    {
      "name": "Bálsamo de Crecimiento de Barba Regrowe",
      "price": "$430",
      "image": "placeholder.jpg",
      "tag": "Balsamo",
      "copy": "Bálsamo estimulante para crecimiento de barba 60ml. para un mes de uso."
    },
    {
      "name": "Cera Para Barba y Bigote – Quioco",
      "price": "$120",
      "image": "24295882-1321911014581181-6595544907237031936-n-1.jpg",
      "tag": "Tratamiento",
      "copy": "CERA PARA BARBA Y BIGOTE Contenido neto: 12g. Elaborada con cera 100 porciento de abeja cuya composición antiséptica e imperecedera."
    },
    {
      "name": "Suavecito Pomade, Firme Hold (4oz)",
      "price": "$310",
      "image": "suavecito-firme-hold-1-1.jpg",
      "tag": "Tratamiento",
      "copy": "Suavecito Pomade Firme Hold (4oz): La Fijación Duradera para Estilos Flexibles La Suavecito Pomade Firme Hold es la elección perfecta para aquellos..."
    },
    {
      "name": "Beardbro Peine y Delineador de Barba",
      "price": "$150",
      "image": "beardpro-1.jpg",
      "tag": "Tratamiento",
      "copy": "Beard Bro Delineado de Barba: Herramienta Patentada para un Recorte Preciso El Beard Bro Delineado de Barba es la herramienta esencial que necesita..."
    },
    {
      "name": "Shampoo Para Barba y Bigote 125 ml",
      "price": "$149",
      "image": "shampoobarba.jpg",
      "tag": "Shampoo",
      "copy": "¡Nuestro Shampoo Maximus para Barba y Bigote está diseñado para brindarte una limpieza profunda y completa, así como una serie de beneficios adicio..."
    },
    {
      "name": "Bálsamo Para el Crecimiento de Barba al 5% 3 oz Maximus",
      "price": "$349",
      "image": "minoxidil5.jpg",
      "tag": "Balsamo",
      "copy": "¡Descubre nuestro revolucionario Bálsamo para el Crecimiento de Barba al 5%! Nuestro bálsamo ha sido diseñado para brindarte resultados efectivos d..."
    },
    {
      "name": "Pomada Matte 113g",
      "price": "$340",
      "image": "mattepomade-1.jpg",
      "tag": "Tratamiento",
      "copy": "¡Presentamos la Pomada Matte de Suavecito! El momento que todos estábamos esperando finalmente ha llegado. Después de innumerables horas en el labo..."
    },
    {
      "name": "Aceite Para la Barba 30 ml",
      "price": "$280",
      "image": "bearoil-1.jpg",
      "tag": "Tratamiento",
      "copy": "Suero para Barba sin Perfume con Aceite de Argán Una barba bien cuidada es una señal de un hombre que se preocupa por su apariencia. Y para lograr ..."
    },
    {
      "name": "Kit de 5 Jabones Crecimiento Para Barba. Arma tu Kit de Jabones",
      "price": "$399",
      "image": "5jabones53aa1978b651f24d-md.jpg",
      "tag": "Jabon",
      "copy": "Jabón de Biotina Maximus ¿Quieres una barba y bigote más gruesos y saludables? Nuestro Jabón de Biotina es tu aliado perfecto. Fabricado artesanalm..."
    },
    {
      "name": "Kit de 4 Jabones Crecimiento Para Barba. Arma tu Kit de Jabones",
      "price": "$360",
      "image": "5jabones.jpg",
      "tag": "Jabon",
      "copy": "Jabón de Biotina Maximus ¡Dale a tu barba y bigote un impulso de crecimiento con nuestro Jabón de Biotina! Fabricado artesanalmente, este jabón con..."
    },
    {
      "name": "Kit de 3 Jabones Crecimiento Para Barba. Arma tu Kit de Jabones",
      "price": "$270",
      "image": "2jabnes-md.jpg",
      "tag": "Jabon",
      "copy": "¡Kit Personalizado de Jabones Maximus para una Barba Poderosa! Promoción Exclusiva: ¡Arma tu Kit como Quieras! ¡Personaliza tu propio Kit de Jabone..."
    },
    {
      "name": "Shampoo Biotina Engrosar y Fortalecimiento – Maximus 500 ml | Vitaminas para Cabello y Uñas",
      "price": "$280",
      "image": "biotina-4.jpg",
      "tag": "Biotina",
      "copy": "Shampoo de Biotina Maximus: Potenciado con Vitamina H para un Cabello Más Fuerte y Brillante El Shampoo de Biotina Maximus es una poderosa fórmula ..."
    },
    {
      "name": "Shampoo Coco Anticaspa – Maximus – 500ml",
      "price": "$280",
      "image": "coco-2.jpg",
      "tag": "Shampoo",
      "copy": "Shampoo de Coco: Acondicionador Versátil para Todo Tipo de Cabello y Edades El shampoo de coco es un acondicionador ideal para todo tipo de cabello..."
    },
    {
      "name": "Black Gel – Quioco 120 gr",
      "price": "$280",
      "image": "27699746-1605531729496286-2423651063040049152-n-1.jpg",
      "tag": "Tratamiento",
      "copy": "Quio’co BLACK GEL Contenido neto 120g. Gel negro, especial para matizar el vello facial negro profundo. Ideal para tapar canas, vello claros y pigm..."
    },
    {
      "name": "Bálsamo Estimulante – Quioco 60 Grs",
      "price": "$330",
      "image": "27056483-1703564416368719-4205933315443654656-n-1.jpg",
      "tag": "Balsamo",
      "copy": "BÁLSAMO ESTIMULANTE Contenido neto: 60g."
    },
    {
      "name": "Jabon Cubrir Huecos y Suavizante – Menta y Abeja – Maximus 100 gr",
      "price": "$100",
      "image": "23588073-1748057078599983-1398711483545681920-n-2.png",
      "tag": "Jabon",
      "copy": "Jabón de Miel y Hierbabuena El jabón de Miel y es excelente para el crecimiento de barba crezca más rápido, es porque esta planta tiene propiedades..."
    },
    {
      "name": "Jabon Exfoliante y Afeitar – Avena – Maximus 100 gr",
      "price": "$100",
      "image": "23589763-1881736265200564-283622778186235904-n-1.png",
      "tag": "Jabon",
      "copy": "Este super jabón Maximus esta hecho con coco es un superalimento para tu vello facial y piel. El jabón contiene esa vitamina E que tanto necesita t..."
    },
    {
      "name": "Jabón de Crecimiento – Bergamota – Maximus 100 gr",
      "price": "$100",
      "image": "23589433-1578956302152272-82586577515053056-n-1.jpg",
      "tag": "Jabon",
      "copy": "Jabón de Bergamota El “Jabón Maximus Bergamota” uno de nuestros producto estrella, si tienes huecos o no te sale casi nada de barba este jabón está..."
    },
    {
      "name": "Suavecito Pomade, Original (4oz)",
      "price": "$300",
      "image": "suavecito-original.jpg",
      "tag": "Tratamiento",
      "copy": "Suavecito Pomade Original (4oz): La Fijación Perfecta para Estilos Flexibles La Suavecito Pomade Original es la opción ideal para aquellos que busc..."
    }
  ],
  "imageSet": [
    "marcas-de-minoxidil.png",
    "diseno-sin-titulo-1.jpg",
    "1-mes-minoxidil-kirkland-low-1.jpg",
    "2-meses.jpg",
    "3-meses-1.jpg",
    "6-meses.jpg",
    "12-meses.jpg",
    "6-meses-espuma.jpg",
    "biotina-low.jpg",
    "dermaroller.jpg",
    "balsamo12.jpg"
  ],
  "posts": [
    {
      "title": "Minoxidil con envio a todo Mexico: como comprar sin enredarte",
      "excerpt": "La compra debe ser simple: eliges paquete, mandas datos, confirmas total y recibes guia. Si una tienda te da mil rodeos o no te enseña producto, mejor pausa.",
      "body": "La compra debe ser simple: eliges paquete, mandas datos, confirmas total y recibes guia. Si una tienda te da mil rodeos o no te enseña producto, mejor pausa. En tratamientos largos, la confianza vale mas que ahorrar unos pesos."
    },
    {
      "title": "Que paquete conviene si vives fuera de CDMX",
      "excerpt": "Si estas lejos, 3 o 6 meses suele ser mas practico que pedir de uno en uno. Pagas menos envios y no cortas la rutina.",
      "body": "Si estas lejos, 3 o 6 meses suele ser mas practico que pedir de uno en uno. Pagas menos envios y no cortas la rutina. Un mes solo lo recomiendo si de verdad quieres probar sensacion y disciplina antes de invertir mas."
    },
    {
      "title": "Minoxidil liquido vs espuma para envios nacionales",
      "excerpt": "El liquido es el mas pedido por precio y rendimiento. La espuma se acomoda a quien quiere secado rapido.",
      "body": "El liquido es el mas pedido por precio y rendimiento. La espuma se acomoda a quien quiere secado rapido. Para envio, ambos se pueden mandar; la decision depende mas de tu piel, rutina y presupuesto que de la ciudad donde vivas."
    },
    {
      "title": "Como revisar tu pedido cuando llega",
      "excerpt": "Abre el paquete con calma, revisa caja, botellas, cantidad y presentacion. Guarda foto por si necesitas aclaracion.",
      "body": "Abre el paquete con calma, revisa caja, botellas, cantidad y presentacion. Guarda foto por si necesitas aclaracion. No tires etiquetas ni empaque el primer dia. Comprar bien tambien es revisar bien cuando recibes."
    },
    {
      "title": "Envios a estados: lo que debes tener listo",
      "excerpt": "Ten nombre completo, calle, colonia, CP, municipio, estado y referencias. Suena basico, pero muchos retrasos salen de datos incompletos.",
      "body": "Ten nombre completo, calle, colonia, CP, municipio, estado y referencias. Suena basico, pero muchos retrasos salen de datos incompletos. Si quieres que llegue rapido, empieza por mandar direccion completa desde el primer mensaje."
    }
  ],
  "faq": [
    [
      "¿Envían a todo México?",
      "Sí, enviamos a toda la República con tarifa fija de $140 MXN (FedEx/Estafeta/Redpack), incluyendo de forma garantizada zonas extendidas y de difícil acceso (como Michoacán Buenavista CP 60700/Apatzingán CP 60600/Lázaro Cárdenas CP 60950, Guerrero Tlapa CP 41300/Ometepec CP 41700, Oaxaca Pinotepa Nacional CP 71600/Juchitán CP 70000, Chiapas Ocosingo CP 29950/Motozintla CP 30900, Sierra de Chihuahua Guachochi CP 33180/Guadalupe y Calvo CP 33470, etc.) sin cobros sorpresa. En CDMX y área metropolitana no hacemos envíos de paquetería local; ofrecemos entregas personales gratis con pago contra entrega al momento para tu total seguridad sin depósitos previos."
    ],
    [
      "¿Que paquete recomiendan?",
      "Para empezar con seriedad, 3 meses. Para ahorrar y no cortar rutina, 6 meses."
    ],
    [
      "¿Puedo pedir mayoreo?",
      "Si. Conviene escribir con ciudad, cantidad aproximada y presentacion que buscas."
    ]
  ]
} as SiteData;
const WHATSAPP = 'https://wa.me/525569380408?text=' + encodeURIComponent('Hola, quiero informacion de ' + SITE.brand);

function App() {
  const [activePost, setActivePost] = useState(0);
  const [formData, setFormData] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  const [formStatus, setFormStatus] = useState('idle');

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
    }, 1200);
  };

  const selected = SITE.posts[activePost];
  const productGroups = useMemo(() => SITE.products.slice(0, 6), []);

  return (
    <main className={`site theme-${SITE.theme}`}>
      <Header />
      
      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">{SITE.location}</p>
          <h1>{SITE.h1}</h1>
          <p className="lead">{SITE.subtitle}</p>
          <div className="hero-actions">
            <a className="button primary" href={WHATSAPP}>{SITE.primaryCta}</a>
            <a className="button secondary" href="#envios">Ver Envios y Entregas</a>
          </div>
        </div>
        <div className="hero-media">
          <img src={`/site-images/${SITE.heroImage}`} alt={SITE.brand} />
          <div className="hero-note">
            <strong>{SITE.shortBrand}</strong>
            <span>{SITE.promise}</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE ENVÍOS Y ENTREGAS */}
      <section className="envio-info-section" id="envios">
        <div className="section-heading">
          <p className="eyebrow">Envíos y Entregas</p>
          <h2>Envíos Seguros a Todo México y Entregas CDMX</h2>
          <p>Manejamos esquemas transparentes y seguros tanto para entregas locales como envíos nacionales.</p>
        </div>
        <div className="envio-grid">
          <div className="envio-card" style={{ background: '#fdfbf7', border: '1px solid var(--line)', padding: '24px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📍</div>
            <h3>Entregas Personales Gratis (Pago Contra Entrega)</h3>
            <p style={{ margin: '12px 0', fontSize: '14px', lineHeight: '1.6', color: 'var(--ink)' }}>
              Para tu total seguridad y para evitar cualquier tipo de fraude o delincuencia en línea, 
              <strong> no te solicitamos depósitos ni transferencias por adelantado</strong> en la CDMX y Área Metropolitana. 
              Te entregamos el producto directamente en tus manos y pagas al momento de recibir y verificar el producto físicamente.
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.6', margin: '12px 0', color: 'var(--muted)', listStyleType: 'disc' }}>
              <li><strong>Sucursal Física:</strong> Plaza Guelatao Local 76 Pasillo 5, Iztapalapa.</li>
              <li><strong>Puntos de Entrega:</strong> Torniquetes de Metro Guelatao, Zaragoza y Tepalcates.</li>
              <li><strong>Horario Flexible:</strong> Coordinamos la hora que mejor te acomode por WhatsApp.</li>
            </ul>
            <a className="button primary block" href={WHATSAPP} style={{ marginTop: 'auto' }}>
              Coordinar Entrega Personal
            </a>
          </div>
          
          <div className="envio-result" style={{ background: '#fdfbf7', border: '1px solid var(--line)', padding: '24px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📦</div>
            <h3>Envío Nacional: Tarifa Fija $140 MXN</h3>
            <p style={{ margin: '12px 0', fontSize: '14px', lineHeight: '1.6', color: 'var(--ink)' }}>
              Si te encuentras fuera de la CDMX y EdoMex, mandamos tu tratamiento directo a tu domicilio en cualquier Estado de la República. 
              El costo de envío es <strong>parejo de $140 MXN a todo México</strong>, sin cargos extras ocultos.
            </p>
            <p style={{ margin: '12px 0', fontSize: '13px', lineHeight: '1.6', color: 'var(--muted)' }}>
              🎯 <strong>Zonas Extendidas Garantizadas:</strong> Cubrimos sin costo adicional regiones como Michoacán (Buenavista CP 60700, Apatzingán CP 60600, Lázaro Cárdenas CP 60950), Guerrero (Tlapa CP 41300, Ometepec CP 41700, Costa Chica), Oaxaca (Pinotepa Nacional CP 71600, Juchitán CP 70000), Chiapas (Ocosingo CP 29950, Motozintla CP 30900) y Sierra de Chihuahua (Guachochi CP 33180, Guadalupe y Calvo CP 33470).
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.6', margin: '12px 0', color: 'var(--muted)', listStyleType: 'disc' }}>
              <li><strong>Paqueterías seguras:</strong> FedEx, Estafeta y Redpack enviados desde la Ciudad de México.</li>
              <li><strong>Rastreo Garantizado:</strong> Te compartimos tu número de guía de inmediato para seguir el trayecto.</li>
            </ul>
            <a className="button secondary block" href={WHATSAPP} style={{ marginTop: 'auto' }}>
              Solicitar Envío Nacional
            </a>
          </div>
        </div>
      </section>

      {/* VENTAJAS DE COBERTURA */}
      <section className="proof-strip" aria-label="Ventajas">
        {SITE.sections.map(([title, copy]) => (
          <article key={title}>
            <span />
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      {/* CATÁLOGO */}
      <section className="products" id="productos">
        <div className="section-heading">
          <p className="eyebrow">Productos</p>
          <h2>Catalogo completo sincronizado</h2>
          <p>Todos los productos y tratamientos disponibles para su entrega y envio.</p>
        </div>
        <div className="product-grid">
          {SITE.products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <img src={`/site-images/${product.image}`} alt={product.name} />
                <b>{product.tag}</b>
              </div>
              <div className="product-body">
                <h3>{product.name}</h3>
                <p>{product.copy}</p>
                <div className="product-buy">
                  <strong>{product.price}</strong>
                  <a href={WHATSAPP}>Pedir por WhatsApp</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GUIA RAPIDA */}
      <section className="editorial" id="guia">
        <div>
          <p className="eyebrow">Guia rapida</p>
          <h2>Compra como alguien que ya sabe que revisar</h2>
        </div>
        <div className="guide-grid">
          {productGroups.map((product, index) => (
            <article key={product.name}>
              <small>0{index + 1}</small>
              <h3>{product.tag}</h3>
              <p>{product.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="blog" id="blog">
        <div className="section-heading align-left">
          <p className="eyebrow">Blog</p>
          <h2>Entradas propias e informacion de valor</h2>
          <p>Articulos informativos sobre la aplicacion, la constancia y los detalles de tu tratamiento.</p>
        </div>
        <div className="blog-layout">
          <div className="blog-list">
            {SITE.posts.map((post, index) => (
              <button className={activePost === index ? 'active' : ''} key={post.title} onClick={() => setActivePost(index)}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{post.title}</strong>
                <small>{post.excerpt}</small>
              </button>
            ))}
          </div>
          <article className="post-reader">
            <p className="eyebrow">Entrada seleccionada</p>
            <h3>{selected.title}</h3>
            <p>{selected.body}</p>
            <a className="button primary" href={WHATSAPP}>Preguntar por este tema</a>
          </article>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="faq" id="preguntas">
        <div className="section-heading">
          <p className="eyebrow">Preguntas</p>
          <h2>Lo que conviene aclarar antes de pagar</h2>
        </div>
        <div className="faq-grid">
          {SITE.faq.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SUCURSALES */}
      <section className="sucursal-section" id="sucursal">
        <div className="section-heading">
          <p className="eyebrow">🛡️ Compra 100% Segura Sin Fraudes</p>
          <h2>Puntos de Recolección Física y Entregas en Mano</h2>
          <p>Para tu total tranquilidad y seguridad, evita fraudes digitales y transferencias sospechosas en internet. Te invitamos a recoger tu tratamiento directamente en nuestras instalaciones físicas. Revisa los hologramas de seguridad, el lote de importación original y la fecha de caducidad con el producto en tu mano antes de realizar tu pago contra entrega.</p>
        </div>
        
        <div className="sucursales-grid">
          <div className="sucursal-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Plaza Guelatao (Iztapalapa / CDMX)</h3>
            <p className="address" style={{ flexGrow: 1, fontSize: '0.92rem', lineHeight: '1.6' }}>
              <strong>Dirección:</strong> Calz. Ignacio Zaragoza 406, Juan Escutia, Iztapalapa, 09100 Ciudad de México, CDMX.<br />
              <span className="detalles-tienda" style={{ display: 'inline-block', marginTop: '6px' }}>Dentro de Plaza Guelatao, Local 76, Pasillo 5. Local comercial físico establecido.</span>
            </p>
            <div style={{ background: '#f0fdf4', border: '1px solid #dcfce7', padding: '12px 14px', borderRadius: '6px', marginBottom: '14px', fontSize: '0.88rem', color: '#16a34a' }}>
              <strong style={{ color: '#15803d', display: 'block', marginBottom: '4px' }}>🏬 Recolección Directa en Tienda:</strong>
              Ven directamente a nuestro local dentro de la Plaza. Nuestro personal te atenderá cara a cara, podrás verificar el Minoxidil original y realizar tu pago seguro en mano (efectivo o transferencia) al momento.
            </div>
            <div className="map-container" style={{ marginBottom: '16px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0822180862024!2d-99.02517622387796!3d19.397023881874288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e2334005b757%3A0xb3cf516ea278f244!2sPlaza%20Guelatao!5e0!3m2!1ses-419!2smx!4v1716300000000!5m2!1ses-419!2smx"
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Plaza Guelatao"
              ></iframe>
            </div>
            <a className="button primary block" href={'https://wa.me/525569380408?text=' + encodeURIComponent('Hola, me interesa agendar recolección personal de Minoxidil en la sucursal de Plaza Guelatao.')}>
              Agendar Recolección en Plaza Guelatao
            </a>
          </div>
          
          <div className="sucursal-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Oficinas en Neza (EdoMex)</h3>
            <p className="address" style={{ flexGrow: 1, fontSize: '0.92rem', lineHeight: '1.6' }}>
              <strong>Dirección:</strong> Oriente 10 #224, Colonia Reforma, 57840 Ciudad Nezahualcóyotl, Estado de México.<br />
              <span className="detalles-tienda" style={{ display: 'inline-block', marginTop: '6px' }}>Punto de distribución oficial para recolecciones y atención exprés.</span>
            </p>
            <div style={{ background: '#f0fdf4', border: '1px solid #dcfce7', padding: '12px 14px', borderRadius: '6px', marginBottom: '14px', fontSize: '0.88rem', color: '#16a34a' }}>
              <strong style={{ color: '#15803d', display: 'block', marginBottom: '4px' }}>🏢 Recolección Física en Oficinas:</strong>
              Punto ideal para entregas directas en la zona de Neza. Ven por tu tratamiento, revísalo detalladamente y realiza tu pago contra entrega en mano de manera rápida y segura.
            </div>
            <div className="map-container" style={{ marginBottom: '16px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.120015949581!2d-99.01426462387802!3d19.395350381875416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e25d2b70f0ab%3A0xc3b84ca3b006a8f1!2sOte.%2010%20224%2C%20Reforma%2C%2057840%20Ciudad%20Nezahualc%C3%B3yotl%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1716300000000!5m2!1ses-419!2smx"
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Oficinas en Neza"
              ></iframe>
            </div>
            <a className="button primary block" href={'https://wa.me/525569380408?text=' + encodeURIComponent('Hola, me interesa agendar recolección personal de Minoxidil en las oficinas de Neza.')}>
              Agendar Recolección en Neza
            </a>
          </div>

          <div className="sucursal-card" style={{ display: 'flex', flexDirection: 'column', border: '2px solid #137a45', background: '#f0fdf4' }}>
            <div className="badge-oriente" style={{ background: '#137a45', color: '#fff', padding: '6px 12px', borderRadius: '4px', fontWeight: '900', fontSize: '0.75rem', alignSelf: 'flex-start', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              🔥 Zona Oriente - Entregas Personales Gratis
            </div>
            <h3>Entregas Personales en Chalco, La Paz, Ixtapaluca, Neza e Iztapalapa</h3>
            <p className="address" style={{ flexGrow: 1, fontSize: '0.92rem', lineHeight: '1.6' }}>
              Si vives en el Estado de México Oriente, las paqueterías suelen cobrarte tarifas de "zona extendida" y tardar días. Nosotros te entregamos <strong>hoy mismo</strong> en mano y <strong>sin costo de entrega</strong> en: <br />
              • <strong>Chalco:</strong> Plaza Sendero Chalco, Plaza Cortijo y Centro de Chalco (Kiosco principal).<br />
              • <strong>Los Reyes La Paz:</strong> Estación Metro La Paz (Línea A), Plaza La Paz.<br />
              • <strong>Ixtapaluca:</strong> Plaza Sendero Ixtapaluca (área de comida o entrada principal) y Galerías Ixtapaluca.<br />
              • <strong>Ciudad Neza:</strong> Av. Chimalhuacán, Plaza Ciudad Jardín, Metro Nezahualcóyotl o Metro Impulsora.<br />
              • <strong>Iztapalapa:</strong> Metro Guelatao, Metro Tepalcates, Metro Constitución de 1917 y zonas colindantes.
            </p>
            <div style={{ background: '#ffffff', border: '1px solid #dcfce7', padding: '12px 14px', borderRadius: '6px', marginBottom: '14px', fontSize: '0.88rem', color: '#16a34a' }}>
              <strong style={{ color: '#15803d', display: 'block', marginBottom: '4px' }}>🤝 Pago Contra Entrega en Mano:</strong>
              Nos vemos en un punto público y seguro. Inspeccionas tu tratamiento de Minoxidil original, confirmas sellos de fábrica y caducidad, y pagas en mano por transferencia o efectivo al recibir. ¡Cero anticipos!
            </div>
            <div className="map-container" style={{ marginBottom: '16px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15065.733560641209!2d-98.92429402517173!3d19.262523281878345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1e672728f11b%3A0x6a090b8fca2066c0!2sPlaza%20Sendero%20Ixtapaluca!5e0!3m2!1ses-419!2smx!4v1716300000000!5m2!1ses-419!2smx"
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Puntos de Entrega Oriente"
              ></iframe>
            </div>
            <a className="button primary block" href={'https://wa.me/525569380408?text=' + encodeURIComponent('Hola, vivo en la zona Oriente y quiero agendar una entrega personal contra entrega (Chalco / La Paz / Ixtapaluca / Neza / Iztapalapa).')}>
              Agendar Entrega en Oriente
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="contacto-section" id="contacto">
        <div className="contacto-container">
          <div className="contacto-info">
            <p className="eyebrow">Contacto</p>
            <h2>Información de Contacto General</h2>
            <p>Estamos para servirte. Contáctanos por cualquiera de estos medios o envíanos un mensaje directo.</p>
            
            <div className="info-detalles">
              <div className="info-item">
                <strong>WhatsApp</strong>
                <span><a href={WHATSAPP} style={{ color: 'var(--accent)', fontWeight: 800 }}>55-6938-0408</a></span>
              </div>
              <div className="info-item">
                <strong>Email</strong>
                <span>ventaminoxidilmexico@gmail.com</span>
              </div>
              <div className="info-item">
                <strong>Horario</strong>
                <span>Mar-Dom, 12PM - 5PM</span>
              </div>
            </div>
          </div>
          
          <div className="contacto-form-card">
            <h3>Envíanos un Mensaje</h3>
            <p className="form-sub">¿Tienes alguna pregunta? Nos encantaría ayudarte.</p>
            
            <form onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    placeholder="Tu nombre" 
                    required 
                    value={formData.nombre} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="tu@email.com" 
                    required 
                    value={formData.email} 
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="asunto">Asunto</label>
                <select 
                  id="asunto" 
                  name="asunto" 
                  required 
                  value={formData.asunto} 
                  onChange={handleInputChange}
                >
                  <option value="">Selecciona un tema</option>
                  <option value="Consulta sobre Barba">Consulta sobre crecimiento de barba</option>
                  <option value="Consulta sobre Cabello">Consulta sobre crecimiento de cabello</option>
                  <option value="Duda sobre Envío">Duda sobre envío express o nacional</option>
                  <option value="Duda sobre Originalidad">Duda sobre originalidad y lotes</option>
                  <option value="Otro Asunto">Otro asunto</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows={4} 
                  placeholder="Escribe tu mensaje aquí..." 
                  required 
                  value={formData.mensaje} 
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <button type="submit" className="button primary block" disabled={formStatus === 'sending'}>
                {formStatus === 'idle' && 'Enviar Mensaje'}
                {formStatus === 'sending' && 'Enviando...'}
                {formStatus === 'success' && '¡Mensaje Enviado con Éxito! ✓'}
              </button>
              
              {formStatus === 'success' && (
                <div className="form-success-alert">
                  <p>¡Gracias por escribirnos, <strong>{formData.nombre}</strong>!</p>
                  <p>Te responderemos a <strong>{formData.email}</strong> o WhatsApp lo antes posible.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <a className="float-wa" href={WHATSAPP}>WhatsApp</a>
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label={SITE.brand}>
        <span>{SITE.shortBrand.charAt(0)}</span>
        <strong>{SITE.brand}</strong>
      </a>
      <nav>
        <a href="#envios">Envios y Entregas</a>
        <a href="#productos">Productos</a>
        <a href="#sucursal">Sucursales</a>
        <a href="#guia">Guia</a>
        <a href="#blog">Blog</a>
        <a href="#preguntas">Preguntas</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <a className="mini-wa" href={WHATSAPP}>WhatsApp</a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{SITE.brand}</strong>
        <p>{SITE.description}</p>
      </div>
      <div>
        <a href="#productos">Productos</a>
        <a href="#sucursal">Sucursales</a>
        <a href="#blog">Blog</a>
        <a href="#contacto">Contacto</a>
      </div>
    </footer>
  );
}

export default App;
