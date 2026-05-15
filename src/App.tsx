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
  "dir": "G:\\1 Creado Con IA\\02 - Sitios Web Estaticos\\Clon Sitio Minoxidil\\1.Otros Sitios Web\\minoxidiltodomexico\\minoxidiltodomexico",
  "brand": "Minoxidil Todo Mexico",
  "shortBrand": "Todo Mexico",
  "domain": "https://www.minoxidiltodomexico.com/",
  "title": "Minoxidil Todo Mexico | Envio nacional por WhatsApp",
  "description": "Compra minoxidil Kirkland para barba y cabello con envio a Mexico. Paquetes de 1, 3, 6 y 12 meses, atencion por WhatsApp.",
  "theme": "mexico",
  "accent": "#137a45",
  "heroImage": "diseno-sin-titulo-1.jpg",
  "location": "Envios a todo Mexico desde CDMX",
  "promise": "Paquetes claros, envio rastreable y asesoria practica antes de comprar.",
  "h1": "Minoxidil para todo Mexico, con pedido claro desde WhatsApp",
  "subtitle": "Arma tu tratamiento por meses, confirma disponibilidad y recibe indicaciones simples para no comprar a ciegas.",
  "primaryCta": "Cotizar envio",
  "secondaryCta": "Ver paquetes",
  "sections": [
    [
      "Envio nacional",
      "Coordinamos paqueteria y datos completos para que sepas que va en camino y que compraste."
    ],
    [
      "Paquetes por etapa",
      "1 mes para probar, 3 para medir, 6 para avanzar con calma y 12 para quien ya trae plan."
    ],
    [
      "Compra guiada",
      "Te ayudamos a elegir liquido, espuma o complemento sin venderte cosas que no necesitas."
    ]
  ],
  "products": [
    {
      "name": "1 Mes Minoxidil Kirkland Liquido 5%",
      "price": "$250",
      "image": "1-mes-minoxidil-kirkland-low-1.jpg",
      "tag": "Inicio",
      "copy": "Una botella para empezar sin comprar de mas. Ideal si quieres probar constancia, sensacion en piel y rutina."
    },
    {
      "name": "2 Meses Tratamiento Kirkland 5%",
      "price": "$450",
      "image": "2-meses.jpg",
      "tag": "Pareja",
      "copy": "Dos botellas para no cortar el ritmo justo cuando apenas estas agarrando disciplina con la aplicacion."
    },
    {
      "name": "3 Meses Minoxidil Kirkland Liquido 5%",
      "price": "$600",
      "image": "3-meses-1.jpg",
      "tag": "Recomendado",
      "copy": "El paquete mas equilibrado para llevar calendario, fotos y seguimiento sin estar comprando cada mes."
    },
    {
      "name": "6 Meses Minoxidil Kirkland 5%",
      "price": "$1,100",
      "image": "6-meses.jpg",
      "tag": "Ahorro",
      "copy": "Para quien ya sabe que va en serio. Menos vueltas, mejor precio por botella y rutina completa."
    },
    {
      "name": "12 Meses Minoxidil Kirkland",
      "price": "$2,000",
      "image": "12-meses.jpg",
      "tag": "Completo",
      "copy": "Tratamiento largo para barba o cabello cuando quieres resolver el abasto del ano de una vez."
    },
    {
      "name": "6 Meses Minoxidil Espuma Kirkland",
      "price": "$1,850",
      "image": "6-meses-espuma.jpg",
      "tag": "Espuma",
      "copy": "Textura mas practica para quien prefiere secado rapido y una aplicacion menos liquida."
    },
    {
      "name": "Biotina para cabello y barba",
      "price": "$450",
      "image": "biotina-low.jpg",
      "tag": "Apoyo",
      "copy": "Complemento para cuidar la rutina desde adentro. No reemplaza constancia ni buena aplicacion."
    },
    {
      "name": "Dermaroller 0.5 mm",
      "price": "$240",
      "image": "dermaroller.jpg",
      "tag": "Rutina",
      "copy": "Herramienta para usuarios que ya entienden cuidados, higiene y descanso entre usos."
    },
    {
      "name": "Balsamo para barba",
      "price": "$480",
      "image": "balsamo12.jpg",
      "tag": "Barba",
      "copy": "Para peinar, dar forma y bajar resequedad cuando la barba ya empieza a verse mas presente."
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
    },
    {
      "title": "Barba o cabello: como elegir producto inicial",
      "excerpt": "Para barba casi todos empiezan con liquido 5%. Para cabello depende de zona, sensibilidad y rutina.",
      "body": "Para barba casi todos empiezan con liquido 5%. Para cabello depende de zona, sensibilidad y rutina. No necesitas comprar todos los complementos el primer dia. Primero entiende aplicacion, horarios y constancia."
    },
    {
      "title": "Por que no copiamos descripciones eternas de tienda",
      "excerpt": "Porque nadie compra mejor por leer veinte parrafos repetidos. Prefiero explicar lo que importa: presentacion, meses, precio, uso responsable y expectativa.",
      "body": "Porque nadie compra mejor por leer veinte parrafos repetidos. Prefiero explicar lo que importa: presentacion, meses, precio, uso responsable y expectativa. La descripcion debe ayudar, no marearte."
    },
    {
      "title": "Mayoreo de minoxidil: cuando si tiene sentido",
      "excerpt": "Mayoreo tiene sentido si ya tienes clientes, barberia o venta constante. Si apenas vas a probar, no compres cajas por emocion.",
      "body": "Mayoreo tiene sentido si ya tienes clientes, barberia o venta constante. Si apenas vas a probar, no compres cajas por emocion. Empieza ordenado, mide demanda y luego sube volumen. Asi no se te queda producto parado."
    },
    {
      "title": "Comprar minoxidil barato: donde suele estar la trampa",
      "excerpt": "A veces el precio bajo es oportunidad. A veces es producto raro, caducidad cercana o vendedor que desaparece.",
      "body": "A veces el precio bajo es oportunidad. A veces es producto raro, caducidad cercana o vendedor que desaparece. Compara precio, presentacion y trato. Si todo se siente demasiado apresurado, no cierres compra."
    },
    {
      "title": "Rutina de 90 dias para no abandonar",
      "excerpt": "Dia 1: foto y horario fijo. Dia 30: revisa piel y disciplina, no milagros.",
      "body": "Dia 1: foto y horario fijo. Dia 30: revisa piel y disciplina, no milagros. Dia 60: ajusta detalles. Dia 90: compara fotos reales. Tres meses no hacen magia, pero si te muestran si vas en serio."
    },
    {
      "title": "Biotina, dermaroller y balsamo: que papel tienen",
      "excerpt": "Son complementos, no sustitutos. Biotina apoya rutina general, dermaroller requiere higiene y descanso, balsamo ayuda a peinar y cuidar barba.",
      "body": "Son complementos, no sustitutos. Biotina apoya rutina general, dermaroller requiere higiene y descanso, balsamo ayuda a peinar y cuidar barba. Compra lo que entiendas, no lo que suena mas llamativo."
    },
    {
      "title": "Como pedir por WhatsApp para que te atiendan rapido",
      "excerpt": "Manda ciudad, paquete deseado y si lo quieres para barba o cabello. Con eso se cotiza mejor.",
      "body": "Manda ciudad, paquete deseado y si lo quieres para barba o cabello. Con eso se cotiza mejor. Si solo escribes \"info\", tambien se puede, pero vamos a tardar mas en llegar a lo que realmente necesitas."
    },
    {
      "title": "Fotos reales de producto antes de pagar",
      "excerpt": "Pedir foto no es exagerar. Es parte de comprar bien.",
      "body": "Pedir foto no es exagerar. Es parte de comprar bien. Una tienda seria puede mostrar producto, presentacion y disponibilidad. No necesitas desconfiar de todo, pero tampoco compres a ciegas."
    },
    {
      "title": "Errores al recibir tratamiento de varios meses",
      "excerpt": "Guardar en calor, perder la caja, prestar botellas, cambiar horarios cada dia. Si compras 6 o 12 meses, tratalo como tratamiento: lugar fijo, calendario y orden.",
      "body": "Guardar en calor, perder la caja, prestar botellas, cambiar horarios cada dia. Si compras 6 o 12 meses, tratalo como tratamiento: lugar fijo, calendario y orden. Lo aburrido funciona mas que la emocion."
    },
    {
      "title": "La constancia pesa mas que la ciudad donde vives",
      "excerpt": "Da igual si estas en Monterrey, Puebla, Merida o Tijuana: si no eres constante, no avanzas. El envio resuelve tener producto.",
      "body": "Da igual si estas en Monterrey, Puebla, Merida o Tijuana: si no eres constante, no avanzas. El envio resuelve tener producto. La rutina la resuelves tu, con horarios realistas y menos desesperacion."
    }
  ],
  "faq": [
    [
      "¿Envían a todo México?",
      "Si, cotizamos envio nacional por WhatsApp segun ciudad y paquete."
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
  const selected = SITE.posts[activePost];
  const productGroups = useMemo(() => SITE.products.slice(0, 6), []);

  return (
    <main className={`site theme-${SITE.theme}`}>
      <Header />
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">{SITE.location}</p>
          <h1>{SITE.h1}</h1>
          <p className="lead">{SITE.subtitle}</p>
          <div className="hero-actions">
            <a className="button primary" href={WHATSAPP}>{SITE.primaryCta}</a>
            <a className="button secondary" href="#productos">{SITE.secondaryCta}</a>
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

      <section className="proof-strip" aria-label="Ventajas">
        {SITE.sections.map(([title, copy]) => (
          <article key={title}>
            <span />
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="products" id="productos">
        <div className="section-heading">
          <p className="eyebrow">Productos</p>
          <h2>Paquetes que se entienden en diez segundos</h2>
          <p>No meti descripciones eternas: precio, meses, foto real y para que tipo de compra sirve.</p>
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

      <section className="blog" id="blog">
        <div className="section-heading align-left">
          <p className="eyebrow">Blog</p>
          <h2>15 entradas propias para posicionar sin sonar a texto automatico</h2>
          <p>Cada sitio habla desde una intencion distinta: local, nacional o Kirkland. La idea es que no sean copias peleando por la misma frase.</p>
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

      <section className="contact" id="contacto">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Escribenos y armamos tu pedido</h2>
          <p>Telefono y WhatsApp: 55-6938-0408. Manda ciudad, paquete deseado y si lo quieres para barba o cabello.</p>
        </div>
        <a className="button primary" href={WHATSAPP}>Abrir WhatsApp</a>
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
        <a href="#productos">Productos</a>
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
        <a href="#blog">Blog</a>
        <a href="#contacto">Contacto</a>
      </div>
    </footer>
  );
}

export default App;
