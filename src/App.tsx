import { useEffect, useMemo, useState } from 'react';

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
  category?: string;
  keyword?: string;
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
  "dir": "G:\\Clonar Sitio Web Minoxidil\\1.Otros Sitios Web\\minoxidiltodomexico\\minoxidiltodomexico",
  "brand": "Minoxidil Todo Mexico",
  "shortBrand": "Todo Mexico",
  "domain": "https://www.minoxidiltodomexico.com/",
  "title": "Minoxidil Todo Mexico | Envio nacional por WhatsApp",
  "description": "Compra minoxidil Kirkland para barba y cabello con envio a Mexico. Paquetes de 1, 3, 6 y 12 meses, atencion por WhatsApp.",
  "theme": "mexico",
  "accent": "#137a45",
  "heroImage": "marcas-de-minoxidil.png",
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
    },
    {
      "title": "Comprar Minoxidil Kirkland original: senales de una compra seria",
      "excerpt": "Antes de pagar revisa presentacion, cantidad, fotos reales, trato del vendedor y claridad del envio.",
      "body": "Comprar Minoxidil Kirkland original no deberia sentirse como apuesta. Pide foto real, confirma cantidad de botellas, revisa si es liquido o espuma y pregunta como se coordina el envio. Una compra seria se entiende antes de pagar: producto, precio, ciudad, paqueteria y seguimiento.",
      "category": "Compra",
      "keyword": "minoxidil kirkland original"
    },
    {
      "title": "Minoxidil para barba en Mexico: que esperar el primer mes",
      "excerpt": "El primer mes sirve para medir disciplina, reaccion de piel y horarios; no para exigir una barba completa.",
      "body": "Si buscas minoxidil para barba en Mexico, el primer mes es una etapa de adaptacion. Sirve para aprender aplicacion, observar resequedad, tomar fotos base y decidir si la rutina cabe en tu dia. Lo importante no es emocionarte una semana, sino sostener un horario realista.",
      "category": "Rutina",
      "keyword": "minoxidil para barba Mexico"
    },
    {
      "title": "Tratamiento de 3 meses: por que suele ser el punto medio",
      "excerpt": "Tres meses te dan margen para comparar fotos, ajustar aplicacion y no cortar cuando apenas empieza la disciplina.",
      "body": "El paquete de 3 meses funciona bien porque evita comprar cada pocas semanas y te obliga a medir con mas calma. Para barba o cabello, noventa dias permiten ver rutina, tolerancia y cambios iniciales sin brincar directo a un tratamiento largo.",
      "category": "Paquetes",
      "keyword": "minoxidil 3 meses"
    },
    {
      "title": "Paquete de 6 meses: cuando conviene ahorrar por botella",
      "excerpt": "Seis meses tiene sentido si ya probaste la formula o si quieres evitar quedarte sin producto a mitad del proceso.",
      "body": "El paquete de 6 meses conviene cuando ya sabes que usaras minoxidil con constancia. El ahorro por botella es mejor, reduces vueltas y puedes organizar calendario, fotos y descanso sin estar pendiente de comprar cada mes.",
      "category": "Paquetes",
      "keyword": "minoxidil 6 meses"
    },
    {
      "title": "Minoxidil espuma vs liquido: como elegir por rutina",
      "excerpt": "La espuma suele sentirse mas practica; el liquido suele ganar por precio. La mejor opcion es la que si vas a usar.",
      "body": "Liquido y espuma pueden funcionar dentro de una rutina constante. El liquido suele ser mas economico y facil de dosificar; la espuma ayuda a quien busca secado rapido o una sensacion menos humeda. La decision depende de piel, presupuesto y horario.",
      "category": "Producto",
      "keyword": "minoxidil espuma vs liquido"
    },
    {
      "title": "Envio de minoxidil a Monterrey, Guadalajara y Puebla",
      "excerpt": "Para envios nacionales conviene mandar datos completos desde el primer mensaje y pedir confirmacion del paquete.",
      "body": "Si pides minoxidil a Monterrey, Guadalajara, Puebla u otra ciudad, prepara nombre completo, calle, colonia, codigo postal, municipio, estado y referencias. Tambien confirma que el paquete incluya la cantidad correcta y que el vendedor te explique como se dara seguimiento.",
      "category": "Envio",
      "keyword": "minoxidil envio nacional"
    },
    {
      "title": "Minoxidil en CDMX: cuando pedir envio y cuando recoger",
      "excerpt": "Si estas cerca, recoger puede ser rapido; si tus horarios son complicados, el envio evita perder tiempo.",
      "body": "En CDMX muchos compradores prefieren coordinar entrega o punto de encuentro, pero no siempre es lo mas comodo. Si trabajas lejos, si sales tarde o si compras varios meses, un envio bien confirmado puede ser mas practico que moverte por una sola botella.",
      "category": "Local",
      "keyword": "minoxidil CDMX"
    },
    {
      "title": "Minoxidil para cabello: dudas antes de empezar",
      "excerpt": "Para cabello conviene ubicar zona, constancia y expectativas. No todos necesitan los mismos complementos.",
      "body": "Quien compra minoxidil para cabello debe pensar en zona de aplicacion, sensibilidad, horarios y seguimiento. No es buena idea comprar todo el catalogo desde el primer dia. Primero entiende el producto base y luego decide si biotina, shampoo o apoyo externo tiene sentido.",
      "category": "Cabello",
      "keyword": "minoxidil para cabello"
    },
    {
      "title": "Como comparar precio de minoxidil sin caer en lo mas barato",
      "excerpt": "Compara precio por botella, presentacion, cantidad real, envio y confianza. El precio solo no cuenta toda la historia.",
      "body": "Un precio bajo puede ser bueno, pero tambien puede esconder dudas: falta de foto, presentacion confusa, envio no explicado o vendedor sin seguimiento. Compara el costo por botella, no solo el total, y pregunta exactamente que estas recibiendo.",
      "category": "Compra",
      "keyword": "precio minoxidil Kirkland"
    },
    {
      "title": "Guia para tomar fotos de avance con minoxidil",
      "excerpt": "Misma luz, mismo angulo y misma distancia. Sin eso, comparar avances se vuelve una trampa.",
      "body": "Las fotos de avance ayudan cuando son constantes. Usa la misma luz, mismo angulo, misma distancia y fechas claras. No tomes una foto con sombra y otra con flash esperando comparacion justa. La evidencia ordenada baja ansiedad y ayuda a decidir si sigues.",
      "category": "Rutina",
      "keyword": "avance minoxidil barba"
    },
    {
      "title": "Dermaroller con minoxidil: cuidados basicos antes de comprar",
      "excerpt": "No es juguete ni atajo. Requiere higiene, descanso entre usos y entender que no reemplaza la constancia.",
      "body": "El dermaroller puede ser parte de una rutina, pero solo si entiendes higiene, frecuencia y descanso. No se usa para raspar la piel ni para acelerar todo por desesperacion. Si apenas empiezas, primero domina el minoxidil y despues agrega herramientas.",
      "category": "Rutina",
      "keyword": "dermaroller minoxidil"
    },
    {
      "title": "Biotina y minoxidil: que papel tiene cada uno",
      "excerpt": "La biotina apoya rutina general; el minoxidil es el producto principal para la aplicacion localizada.",
      "body": "Biotina y minoxidil no hacen lo mismo. El minoxidil se usa de forma localizada en barba o cabello segun rutina. La biotina es un complemento general y no sustituye aplicacion, paciencia ni orden. Comprar ambos solo tiene sentido si entiendes ese papel.",
      "category": "Complementos",
      "keyword": "biotina y minoxidil"
    },
    {
      "title": "Mayoreo de minoxidil Kirkland: checklist para revender",
      "excerpt": "Antes de comprar mayoreo define ciudad, cantidad, rotacion, margen y como vas a explicar el producto.",
      "body": "El mayoreo de minoxidil Kirkland conviene cuando ya tienes salida: barberia, clientes frecuentes o venta local. Antes de comprar por volumen calcula rotacion, margen, presentacion y mensajes de venta. Comprar mucho sin plan puede dejar producto parado.",
      "category": "Mayoreo",
      "keyword": "mayoreo minoxidil Kirkland"
    },
    {
      "title": "Que decir por WhatsApp para cotizar mas rapido",
      "excerpt": "Manda ciudad, paquete, presentacion y si buscas barba o cabello. Eso evita vueltas y acelera la respuesta.",
      "body": "Para cotizar rapido escribe algo asi: quiero 3 meses de minoxidil liquido, estoy en Puebla, lo busco para barba. Con ciudad, paquete y uso principal se puede responder mejor que con un mensaje de una sola palabra.",
      "category": "Compra",
      "keyword": "comprar minoxidil por WhatsApp"
    },
    {
      "title": "Errores comunes al comprar tratamiento de 12 meses",
      "excerpt": "Comprar 12 meses puede ahorrar, pero primero confirma que usaras la presentacion correcta.",
      "body": "Un tratamiento de 12 meses tiene sentido para quien ya probo el producto o tiene una rutina clara. El error es comprar por emocion sin saber si prefieres liquido o espuma, sin revisar fechas y sin organizar lugar fresco para guardar las botellas.",
      "category": "Paquetes",
      "keyword": "minoxidil 12 meses"
    },
    {
      "title": "Minoxidil para estados: como evitar retrasos de paqueteria",
      "excerpt": "La mayoria de retrasos empieza con direccion incompleta, referencias vagas o falta de confirmacion.",
      "body": "Para envios a estados, manda datos completos y revisa que el codigo postal coincida con colonia y municipio. Agrega referencias claras y confirma telefono. Un pedido bien capturado viaja mejor que uno armado a medias.",
      "category": "Envio",
      "keyword": "minoxidil a estados"
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
    ],
    [
      "Que diferencia hay entre liquido y espuma",
      "El liquido suele ser mas economico y rendidor. La espuma es practica si quieres secado rapido o menos sensacion humeda."
    ],
    [
      "Conviene comprar 1, 3 o 6 meses",
      "Un mes sirve para probar. Tres meses es el punto medio. Seis meses conviene si ya decidiste sostener la rutina."
    ],
    [
      "Hacen envios a estados",
      "Si. Para cotizar rapido manda ciudad, codigo postal, paquete deseado y presentacion."
    ],
    [
      "El dermaroller reemplaza el minoxidil",
      "No. Es una herramienta complementaria que requiere higiene y descanso. No sustituye constancia ni aplicacion correcta."
    ],
    [
      "Puedo pedir foto real antes de pagar",
      "Si. Es parte de comprar con calma: revisas presentacion, cantidad y disponibilidad antes de cerrar."
    ]
  ]
} as SiteData;
const WHATSAPP = 'https://wa.me/525569380408?text=' + encodeURIComponent('Hola, quiero informacion de ' + SITE.brand);

const PRODUCT_META: Record<string, { bottles?: number; format: string; fit: string }> = {
  Inicio: { bottles: 1, format: 'Liquido 5%', fit: 'Prueba inicial' },
  Pareja: { bottles: 2, format: 'Liquido 5%', fit: 'Continuidad corta' },
  Recomendado: { bottles: 3, format: 'Liquido 5%', fit: 'Mejor balance' },
  Ahorro: { bottles: 6, format: 'Liquido 5%', fit: 'Rutina seria' },
  Completo: { bottles: 12, format: 'Liquido 5%', fit: 'Abasto anual' },
  Espuma: { bottles: 6, format: 'Espuma 5%', fit: 'Secado rapido' },
  Apoyo: { format: 'Complemento', fit: 'Cabello y barba' },
  Rutina: { format: '0.5 mm', fit: 'Uso con cuidado' },
  Barba: { format: 'Balsamo', fit: 'Peinado y forma' }
};

function moneyToNumber(price: string) {
  return Number(price.replace(/[$,]/g, ''));
}

function productHref(product: Product) {
  return 'https://wa.me/525569380408?text=' + encodeURIComponent(
    `Hola, quiero pedir ${product.name} por ${product.price}. Estoy en:`
  );
}

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function postPath(post: Post) {
  return `#blog/${slugify(post.title)}`;
}

const BUYER_STEPS = [
  ["01", "Elige presentacion", "Liquido si buscas precio y rendimiento; espuma si prefieres secado rapido."],
  ["02", "Define meses", "1 para probar, 3 para medir avances, 6 o 12 para no cortar la rutina."],
  ["03", "Manda ciudad", "Con ciudad y codigo postal se cotiza envio nacional sin vueltas."],
  ["04", "Confirma producto", "Pide foto real, cantidad de botellas y total antes de pagar."]
];

const SEO_TOPICS = [
  ["Minoxidil Kirkland original", "Compra con precio, fotos reales, presentacion clara y pedido por WhatsApp."],
  ["Minoxidil para barba", "Rutina por etapas para quien quiere llenar zonas o dar mas densidad."],
  ["Minoxidil para cabello", "Orientacion para elegir producto base sin comprar complementos de mas."],
  ["Envio nacional", "Atencion para CDMX, Estado de Mexico y envios a otros estados con datos completos."],
  ["Mayoreo", "Pedidos para barberias, reventa local o clientes frecuentes con mejor planeacion."],
  ["Complementos", "Biotina, dermaroller y balsamo explicados como apoyo, no como promesa magica."]
];

const COVERAGE_AREAS = [
  "CDMX",
  "Estado de Mexico",
  "Monterrey",
  "Guadalajara",
  "Puebla",
  "Queretaro",
  "Merida",
  "Tijuana"
];

const BRANCHES = [
  {
    name: "Sucursal Guelatao",
    address: "Plaza Guelatao, Local 76, Pasillo 5",
    zone: "Iztapalapa, Ciudad de Mexico",
    note: "Punto fisico para recoger producto y resolver dudas antes de comprar."
  },
  {
    name: "Oficinas Neza",
    address: "Oriente 10 #224, Colonia Reforma",
    zone: "Nezahualcoyotl, Estado de Mexico",
    note: "Apoyo para pedidos en zona oriente, entregas coordinadas y mayoreo."
  }
];

const CONTACT_METHODS = [
  ["WhatsApp", "55-6938-0408", "Respuesta para paquetes, disponibilidad y envio."],
  ["Horario", "Martes a domingo, 12PM a 5PM", "Mejor escribir con ciudad y paquete deseado."],
  ["Envios", "Todo Mexico", "Cotizamos segun ciudad, codigo postal y cantidad."],
  ["Pago", "Confirma total antes de cerrar", "Te damos producto, precio y forma de entrega."]
];

const FOOTER_COLUMNS = [
  {
    title: "Contacto",
    items: ["WhatsApp 55-6938-0408", "Sucursal Guelatao", "Oficinas Neza", "Martes a domingo"]
  },
  {
    title: "Compra",
    items: ["Paquetes por mes", "Minoxidil liquido", "Minoxidil espuma", "Mayoreo"]
  },
  {
    title: "Guias",
    items: ["Blog", "Envios a todo Mexico", "Rutina para barba", "Complementos"]
  },
  {
    title: "Zonas",
    items: ["CDMX", "Estado de Mexico", "Nezahualcoyotl", "Envio nacional"]
  }
];

const ARTICLE_GUIDES: Record<string, {
  angle: string;
  checklist: string[];
  mistakes: string[];
  practical: string[];
}> = {
  Compra: {
    angle: "Aqui no se trata de empujarte el producto mas caro. La compra buena es la que entiendes: que presentacion llevas, cuantas botellas son, cuanto dura, como se entrega y que dudas quedan resueltas antes de pagar.",
    checklist: [
      "Pide foto real del producto y confirma si es liquido, espuma o complemento.",
      "Revisa cantidad de botellas, precio total y costo aproximado por botella.",
      "Pregunta si hay disponibilidad inmediata o si el pedido se agenda.",
      "Confirma ciudad, punto de entrega o paqueteria antes de mandar pago.",
      "Guarda captura de producto, precio y acuerdo de entrega."
    ],
    mistakes: [
      "Comprar solo porque esta barato sin revisar presentacion.",
      "No preguntar si el precio incluye envio o solo producto.",
      "Mandar datos incompletos y luego culpar a la paqueteria.",
      "Comprar un tratamiento largo sin saber si prefieres liquido o espuma."
    ],
    practical: [
      "Si es tu primera compra, empieza con 1 o 3 meses para medir rutina.",
      "Si ya usaste Kirkland y te acomoda, 6 meses suele ser mejor compra.",
      "Si vas a revender, pregunta por volumen, margen y disponibilidad real."
    ]
  },
  Rutina: {
    angle: "La rutina pesa mas que la emocion del primer dia. Minoxidil no es comprar una botella y esperar magia: es horario, piel limpia, fotos comparables y paciencia para no abandonar justo cuando empiezas a ordenarte.",
    checklist: [
      "Toma foto inicial con la misma luz que usaras para comparar.",
      "Define horario fijo para que no dependas de acordarte cuando puedas.",
      "Observa resequedad, irritacion o sensibilidad los primeros dias.",
      "No mezcles demasiados productos si apenas estas empezando.",
      "Evalua avances por semanas, no por horas ni por espejo cada rato."
    ],
    mistakes: [
      "Cambiar de producto cada semana por desesperacion.",
      "Aplicar sin orden y luego decir que no funciono.",
      "Comparar fotos con diferente luz, angulo o distancia.",
      "Usar dermaroller sin higiene ni descanso entre usos."
    ],
    practical: [
      "Usa calendario de 30, 60 y 90 dias para comparar con calma.",
      "Si hay resequedad, ajusta cuidado de piel antes de abandonar.",
      "Compra complementos solo cuando ya domines lo basico."
    ]
  },
  Paquetes: {
    angle: "Los paquetes se eligen por constancia y presupuesto, no por antojo. Un mes sirve para probar; tres meses para medir disciplina; seis o doce meses para quien ya sabe que va a seguir.",
    checklist: [
      "Calcula cuantas botellas incluye el paquete.",
      "Compara el precio total y el costo por botella.",
      "Piensa si realmente vas a sostener la rutina ese tiempo.",
      "Confirma si quieres liquido o espuma antes de comprar varios meses.",
      "Pregunta como se guarda el producto y que presentacion llega."
    ],
    mistakes: [
      "Comprar 12 meses sin haber probado sensacion o rutina.",
      "Comprar de uno en uno y cortar justo cuando ibas agarrando constancia.",
      "No revisar si el paquete es para barba, cabello o uso general.",
      "Elegir solo por descuento sin pensar en tu disciplina."
    ],
    practical: [
      "3 meses es buen punto medio para empezar en serio.",
      "6 meses conviene cuando ya probaste y quieres ahorrar vueltas.",
      "12 meses es mas para usuarios constantes o compra planeada."
    ]
  },
  Producto: {
    angle: "Liquido y espuma no compiten por cual suena mas bonito; compiten por cual si vas a usar. La mejor presentacion es la que cabe en tu piel, horario y presupuesto.",
    checklist: [
      "Pregunta si la presentacion es liquida o espuma.",
      "Compara precio por mes y facilidad de aplicacion.",
      "Piensa si te molesta la sensacion humeda o el tiempo de secado.",
      "Confirma si el producto viene sellado y con empaque claro.",
      "No compres ambos al mismo tiempo si aun no sabes cual te acomoda."
    ],
    mistakes: [
      "Elegir espuma solo porque suena premium.",
      "Elegir liquido solo por precio aunque odies la aplicacion.",
      "Cambiar presentacion sin dar tiempo a una rutina ordenada.",
      "No preguntar disponibilidad antes de organizar tu compra."
    ],
    practical: [
      "Liquido suele ser mas economico y rendidor.",
      "Espuma suele sentirse mas practica y de secado rapido.",
      "Si tienes duda, pregunta segun piel, horario y zona de aplicacion."
    ]
  },
  Envio: {
    angle: "Un envio nacional sale bien cuando el pedido nace ordenado. La mayor parte de los retrasos no empieza en la paqueteria: empieza con datos incompletos, colonia mal escrita o falta de confirmacion.",
    checklist: [
      "Manda nombre completo, calle, numero, colonia y codigo postal.",
      "Incluye municipio, estado, referencias y telefono activo.",
      "Confirma paquete, cantidad y presentacion antes del envio.",
      "Pregunta por tiempo estimado y forma de seguimiento.",
      "Revisa el paquete al recibir y guarda foto si necesitas aclaracion."
    ],
    mistakes: [
      "Mandar solo ciudad y esperar cotizacion exacta.",
      "No revisar codigo postal antes de confirmar.",
      "Cambiar direccion despues de que ya se preparo el pedido.",
      "No estar pendiente del telefono cuando llega paqueteria."
    ],
    practical: [
      "Para estados conviene comprar 3 o 6 meses y ahorrar envios.",
      "Si tienes horario complicado, pide que quede claro desde el inicio.",
      "Un mensaje completo por WhatsApp acelera todo."
    ]
  },
  Local: {
    angle: "Comprar en CDMX o zona oriente tiene una ventaja: puedes resolver dudas mas rapido y coordinar mejor. Aun asi, conviene llegar con paquete, presentacion y horario claro.",
    checklist: [
      "Pregunta si te conviene recoger o pedir envio.",
      "Confirma punto, horario y disponibilidad antes de moverte.",
      "Lleva claro si buscas barba, cabello o complemento.",
      "No salgas sin confirmar precio y cantidad.",
      "Si compras para varios meses, revisa que todo venga completo."
    ],
    mistakes: [
      "Llegar sin confirmar existencia del producto.",
      "Creer que pickup siempre es mas comodo que envio.",
      "No preguntar por paquetes y comprar solo una botella por inercia.",
      "No guardar datos de contacto para seguimiento."
    ],
    practical: [
      "CDMX conviene para resolver dudas y recoger si estas cerca.",
      "Neza y zona oriente pueden coordinarse mejor con mensaje previo.",
      "Si vas lejos, el envio puede salir mas practico que moverte."
    ]
  },
  Cabello: {
    angle: "Para cabello conviene ir con mas calma. La pregunta no es solo que comprar, sino en que zona lo usaras, como vas a medir avances y que expectativas tienes antes de meter complementos.",
    checklist: [
      "Ubica la zona donde quieres trabajar: entradas, coronilla o densidad.",
      "Define horario y forma de aplicacion antes de comprar volumen.",
      "Pregunta si te conviene liquido o espuma por tu rutina.",
      "No reemplaces seguimiento con mil complementos.",
      "Toma fotos mensuales con luz similar."
    ],
    mistakes: [
      "Comprar todo el catalogo el primer dia.",
      "No distinguir entre caida, densidad y crecimiento esperado.",
      "Cambiar rutina sin dar tiempo a observar.",
      "No consultar dudas sensibles si tienes irritacion o condicion previa."
    ],
    practical: [
      "Empieza por producto base y seguimiento.",
      "Biotina puede apoyar, pero no reemplaza la rutina.",
      "Si tienes dudas medicas, consulta a un profesional."
    ]
  },
  Complementos: {
    angle: "Los complementos ayudan cuando tienen un papel claro. Biotina, dermaroller o balsamo no deben comprarse por moda: deben entrar cuando ya sabes que problema quieres resolver.",
    checklist: [
      "Define si necesitas apoyo interno, herramienta o cuidado de barba.",
      "No uses dermaroller sin higiene y descanso.",
      "No esperes que biotina haga el trabajo del minoxidil.",
      "Compra balsamo si ya necesitas forma, suavidad o control.",
      "Pregunta como combinar sin saturar tu rutina."
    ],
    mistakes: [
      "Comprar complementos pensando que sustituyen constancia.",
      "Usar dermaroller por desesperacion.",
      "Aplicar demasiadas cosas y no saber que te irrito.",
      "Comprar por nombre llamativo sin entender uso."
    ],
    practical: [
      "Primero domina minoxidil y horario.",
      "Despues agrega un complemento a la vez.",
      "Si algo irrita, pausa y revisa antes de seguir mezclando."
    ]
  },
  Mayoreo: {
    angle: "Mayoreo no es comprar mucho por emocion. Es calcular rotacion, margen, clientes y disponibilidad. Si vas a revender, necesitas producto claro y discurso claro.",
    checklist: [
      "Define ciudad, cantidad aproximada y presentacion.",
      "Calcula margen real despues de entrega o envio.",
      "Pregunta disponibilidad por volumen.",
      "Ten claro como explicar liquido, espuma y paquetes.",
      "No compres mas de lo que puedes mover."
    ],
    mistakes: [
      "Comprar cajas sin clientes.",
      "No calcular tiempos de rotacion.",
      "No preguntar si hay precio por volumen.",
      "Vender sin saber responder dudas basicas."
    ],
    practical: [
      "Mayoreo conviene para barberias, reventa local o clientes frecuentes.",
      "Empieza con volumen medido y sube segun demanda.",
      "Pide informacion clara para no prometer lo que no tienes."
    ]
  },
  Guia: {
    angle: "Esta guia esta pensada para comprar con menos vueltas. La idea es que sepas que preguntar, que revisar y como evitar una compra confusa.",
    checklist: [
      "Aclara producto, precio y cantidad.",
      "Pregunta presentacion y disponibilidad.",
      "Manda ciudad o punto de entrega.",
      "Confirma total antes de pagar.",
      "Guarda la informacion del pedido."
    ],
    mistakes: [
      "Comprar con informacion incompleta.",
      "No preguntar por envio o pickup.",
      "No revisar si el paquete corresponde a los meses que quieres.",
      "Dejar tus dudas para despues de pagar."
    ],
    practical: [
      "Mientras mas claro escribas, mas rapido se cotiza.",
      "Si no sabes que paquete elegir, di si es para barba o cabello.",
      "Pide recomendacion segun presupuesto y constancia."
    ]
  }
};

function getArticleGuide(post: Post) {
  return ARTICLE_GUIDES[post.category ?? 'Guia'] ?? ARTICLE_GUIDES.Guia;
}

function whatsappScript(post: Post) {
  const topic = post.keyword ?? post.title;
  return `Hola, vi la guia de ${topic}. Estoy en [mi ciudad] y quiero saber que paquete me conviene para [barba/cabello]. Mi presupuesto aproximado es de [$___].`;
}

function App() {
  const [activePost, setActivePost] = useState(0);
  const [hash, setHash] = useState(() => window.location.hash);
  const selected = SITE.posts[activePost];
  const productGroups = useMemo(() => SITE.products.slice(0, 6), []);
  const featuredPosts = useMemo(() => SITE.posts.filter((post) => post.category).slice(0, 6), []);
  const categories = useMemo(
    () => Array.from(new Set(SITE.posts.map((post) => post.category ?? 'Guia'))).slice(0, 9),
    []
  );
  const activePostPage = useMemo(() => {
    if (!hash.startsWith('#blog/')) {
      return null;
    }

    const slug = hash.replace('#blog/', '');
    return SITE.posts.find((post) => slugify(post.title) === slug) ?? null;
  }, [hash]);
  const relatedPosts = useMemo(() => {
    if (!activePostPage) {
      return [];
    }

    return SITE.posts
      .filter((post) => post.title !== activePostPage.title && (post.category ?? 'Guia') === (activePostPage.category ?? 'Guia'))
      .slice(0, 3);
  }, [activePostPage]);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  useEffect(() => {
    document.title = activePostPage ? `${activePostPage.title} | ${SITE.brand}` : SITE.title;
  }, [activePostPage]);

  if (activePostPage) {
    return (
      <main className={`site theme-${SITE.theme}`}>
        <Header />
        <BlogPostPage post={activePostPage} relatedPosts={relatedPosts.length ? relatedPosts : SITE.posts.slice(0, 3)} />
        <Footer />
      </main>
    );
  }

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
          <h2>Elige por meses, presupuesto y constancia</h2>
          <p>Precios claros, foto real y una pista rapida para saber si te conviene probar, avanzar o abastecerte.</p>
        </div>
        <div className="product-summary" aria-label="Resumen de compra">
          <article>
            <span>Desde</span>
            <strong>$240</strong>
            <p>Complementos y herramientas para completar rutina.</p>
          </article>
          <article>
            <span>Mas pedido</span>
            <strong>3 meses</strong>
            <p>Buen punto medio entre precio, seguimiento y disciplina.</p>
          </article>
          <article>
            <span>Mejor ahorro</span>
            <strong>6 a 12 meses</strong>
            <p>Menos envios, menos vueltas y mejor costo por botella.</p>
          </article>
        </div>
        <div className="product-grid">
          {SITE.products.map((product) => {
            const meta = PRODUCT_META[product.tag] ?? { format: 'Producto', fit: 'Pedido guiado' };
            const price = moneyToNumber(product.price);
            const perBottle = meta.bottles ? Math.round(price / meta.bottles) : null;

            return (
              <article className={`product-card ${product.tag === 'Recomendado' ? 'featured' : ''}`} key={product.name}>
                <div className="product-image">
                  <img src={`/site-images/${product.image}`} alt={product.name} />
                  <b>{product.tag}</b>
                  <small>{meta.format}</small>
                </div>
                <div className="product-body">
                  <div className="product-price-row">
                    <strong>{product.price}</strong>
                    {perBottle && <span>${perBottle} por botella</span>}
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.copy}</p>
                  <dl className="product-facts">
                    <div>
                      <dt>Ideal para</dt>
                      <dd>{meta.fit}</dd>
                    </div>
                    <div>
                      <dt>Compra</dt>
                      <dd>{meta.bottles ? `${meta.bottles} ${meta.bottles === 1 ? 'botella' : 'botellas'}` : 'Individual'}</dd>
                    </div>
                  </dl>
                  <div className="product-buy">
                    <a href={productHref(product)}>Pedir por WhatsApp</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="editorial" id="guia">
        <div className="editorial-head">
          <div>
            <p className="eyebrow">Guia rapida</p>
            <h2>Compra como alguien que ya sabe que revisar</h2>
          </div>
          <p>La idea es que el sitio tambien explique, compare y resuelva dudas de busqueda: no solo mostrar producto y precio.</p>
        </div>
        <div className="buyer-steps" aria-label="Proceso de compra">
          {BUYER_STEPS.map(([number, title, copy]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
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

      <section className="seo-panel" id="envios">
        <div className="seo-main">
          <p className="eyebrow">Contexto para posicionar</p>
          <h2>Contenido para vender y para aparecer cuando alguien busca con dudas reales</h2>
          <p>
            La pagina ahora cubre intenciones de compra completas: precio, meses de tratamiento, diferencia entre liquido y espuma,
            envios a estados, compra por WhatsApp, mayoreo, complementos y rutina para barba o cabello.
          </p>
          <div className="coverage-row">
            {COVERAGE_AREAS.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
        <div className="topic-grid">
          {SEO_TOPICS.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="blog" id="blog">
        <div className="section-heading align-left">
          <p className="eyebrow">Blog</p>
          <h2>{SITE.posts.length} entradas propias para posicionar sin sonar a texto automatico</h2>
          <p>Cada entrada ataca una busqueda distinta: precio, envio, barba, cabello, Kirkland original, presentaciones, complementos y mayoreo.</p>
        </div>
        <div className="blog-overview">
          <article>
            <span>{SITE.posts.length}</span>
            <strong>entradas SEO</strong>
            <p>Contenido corto, accionable y enfocado en dudas de compra.</p>
          </article>
          <article>
            <span>{categories.length}</span>
            <strong>temas cubiertos</strong>
            <p>Compra, envio, rutina, paquetes, mayoreo y complementos.</p>
          </article>
          <article>
            <span>9</span>
            <strong>productos enlazables</strong>
            <p>Cada producto puede pedirse por WhatsApp con mensaje propio.</p>
          </article>
        </div>
        <div className="topic-rail" aria-label="Temas del blog">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <div className="featured-posts">
          {featuredPosts.map((post) => (
            <a href={postPath(post)} key={post.title}>
              <small>{post.category}</small>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <strong>Leer entrada</strong>
            </a>
          ))}
        </div>
        <div className="blog-layout">
          <div className="blog-list">
            {SITE.posts.map((post, index) => (
              <a className={activePost === index ? 'active' : ''} href={postPath(post)} key={post.title} onMouseEnter={() => setActivePost(index)} onFocus={() => setActivePost(index)}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{post.title}</strong>
                <em>{post.category ?? 'Guia'}</em>
                <small>{post.excerpt}</small>
              </a>
            ))}
          </div>
          <article className="post-reader">
            <p className="eyebrow">{selected.category ?? 'Entrada seleccionada'}</p>
            <h3>{selected.title}</h3>
            {selected.keyword && <strong className="keyword-line">Keyword: {selected.keyword}</strong>}
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
        <div className="contact-copy">
          <p className="eyebrow">Sucursal y contacto</p>
          <h2>Visitanos, escribe por WhatsApp o pide envio nacional</h2>
          <p>Adaptamos el contacto para que sea claro desde el primer vistazo: ubicaciones, horario, telefono, envio y que datos mandar para cotizar rapido.</p>
          <div className="contact-actions">
            <a className="button primary" href={WHATSAPP}>Abrir WhatsApp</a>
            <a className="button secondary" href="#productos">Ver paquetes</a>
          </div>
        </div>
        <div className="contact-panel">
          <div className="branch-grid">
            {BRANCHES.map((branch) => (
              <article key={branch.name}>
                <span>{branch.zone}</span>
                <h3>{branch.name}</h3>
                <strong>{branch.address}</strong>
                <p>{branch.note}</p>
              </article>
            ))}
          </div>
          <div className="contact-methods">
            {CONTACT_METHODS.map(([label, value, copy]) => (
              <article key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <p>{copy}</p>
              </article>
            ))}
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
        <a href="#productos">Productos</a>
        <a href="#guia">Guia</a>
        <a href="#blog">Blog</a>
        <a href="#preguntas">Preguntas</a>
        <a href="#contacto">Sucursales</a>
      </nav>
      <a className="mini-wa" href={WHATSAPP}>WhatsApp</a>
    </header>
  );
}

function BlogPostPage({ post, relatedPosts }: { post: Post; relatedPosts: Post[] }) {
  const guide = getArticleGuide(post);

  return (
    <article className="blog-post-page">
      <section className="article-hero">
        <a className="back-link" href="#blog">Volver al blog</a>
        <p className="eyebrow">{post.category ?? 'Guia'}</p>
        <h1>{post.title}</h1>
        <p className="article-excerpt">{post.excerpt}</p>
        {post.keyword && <strong className="keyword-line">Keyword: {post.keyword}</strong>}
      </section>

      <section className="article-layout">
        <div className="article-body">
          <p>{post.body}</p>
          <div className="article-note">
            <span>Mi forma de verlo</span>
            <p>{guide.angle}</p>
          </div>

          <h2>Lo que revisaria antes de comprar</h2>
          <ul className="article-checklist">
            {guide.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Errores comunes que te pueden costar tiempo o dinero</h2>
          <div className="article-warning-grid">
            {guide.mistakes.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <h2>Consejo practico para decidir mejor</h2>
          <div className="article-practical">
            {guide.practical.map((item) => (
              <article key={item}>
                <strong>{item}</strong>
              </article>
            ))}
          </div>

          <h2>Mensaje que yo mandaria por WhatsApp</h2>
          <p className="whatsapp-script">{whatsappScript(post)}</p>

          <div className="article-cta">
            <div>
              <span>Pedido guiado</span>
              <strong>Te ayudamos a elegir sin comprar de mas.</strong>
            </div>
            <a className="button primary" href={WHATSAPP}>Preguntar por WhatsApp</a>
          </div>
        </div>

        <aside className="article-sidebar">
          <h2>Entradas relacionadas</h2>
          {relatedPosts.map((related) => (
            <a href={postPath(related)} key={related.title}>
              <small>{related.category ?? 'Guia'}</small>
              <strong>{related.title}</strong>
              <span>Leer entrada</span>
            </a>
          ))}
        </aside>
      </section>
    </article>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>{SITE.brand}</strong>
        <p>{SITE.description}</p>
        <a className="footer-whatsapp" href={WHATSAPP}>WhatsApp 55-6938-0408</a>
      </div>
      <div className="footer-columns">
        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <strong>{column.title}</strong>
            {column.items.map((item) => (
              <a key={item} href={item === 'Blog' ? '#blog' : item.includes('Paquetes') ? '#productos' : item.includes('Sucursal') || item.includes('Neza') || item.includes('WhatsApp') ? '#contacto' : '#guia'}>
                {item}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <p className="footer-bottom">Copyright 2026 - Minoxidil Todo Mexico. Informacion de contacto, productos y envios actualizada para compra guiada por WhatsApp.</p>
    </footer>
  );
}

export default App;
