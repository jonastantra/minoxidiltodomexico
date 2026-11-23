// Datos centrales de Minoxidil Todo México (sitio NACIONAL).
// Precios: los publicados vigentes del sitio. Envío nacional: $140 fijo.
// Pedidos: WhatsApp del negocio. Nada de horarios aquí salvo el confirmado
// de la sucursal (martes a sábado, 12:30–16:30), que vive en la página de sucursales.

export const WA_NUMBER = "525569380408";
export const WA_DISPLAY = "+52 1 55 6938 0408";
export const DOMAIN = "https://www.minoxidiltodomexico.com";
export const CDMX_SITE = "https://minoxidilencdmx.com";
export const SHIPPING = 140;
export const UPDATED = "10 de noviembre de 2026";

export const wa = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const waGeneral = wa("Hola, quiero información de Minoxidil Todo México. Estoy en: ");

export const money = (n) => "$" + n.toLocaleString("es-MX");

export const PRODUCTS = [
  {
    slug: "minoxidil-kirkland-1-mes",
    name: "Minoxidil Kirkland líquido 5% — 1 mes",
    short: "1 mes · líquido 5%",
    price: 250,
    image: "1-mes-minoxidil-kirkland-low-1.jpg",
    format: "Líquido 5% con gotero",
    content: "1 botella de 60 ml",
    perBottle: 250,
    tag: "Para empezar",
    keyword: "minoxidil Kirkland 1 mes",
    title: "Minoxidil Kirkland 1 mes | Líquido 5% a $250 con envío a todo México",
    meta: "Paquete de 1 mes de minoxidil Kirkland líquido 5% (1 botella de 60 ml) a $250. Para probar rutina y reacción de tu piel. Envío a todo México por $140, pedido por WhatsApp.",
    intro:
      "El paquete de 1 mes es la forma más sencilla de empezar: una botella de minoxidil Kirkland líquido al 5% (60 ml) para probar la rutina dos veces al día sin comprometerte con un tratamiento largo. Sirve para medir dos cosas: cómo reacciona tu piel y si puedes sostener la constancia, que es lo que de verdad pesa en este tipo de tratamientos.",
    bullets: [
      "1 botella de 60 ml: alcanza para 30 días aplicando 1 ml dos veces al día.",
      "Formato líquido con gotero: es más fácil dosificar la cantidad exacta.",
      "Pensado como mes de adaptación, no como mes de resultados: en 30 días lo normal es apenas estar agarrando la rutina.",
      "Antes de pagar te mandamos foto real del empaque, con lote y fecha de caducidad visibles.",
    ],
    fit: "Si nunca has usado minoxidil y quieres probar sin gastar de más, o si vas a regalar un inicio de tratamiento y prefieres algo corto.",
    guides: ["como-comprar-minoxidil-kirkland-en-linea", "paquetes-minoxidil-cual-elegir"],
  },
  {
    slug: "minoxidil-kirkland-2-meses",
    name: "Minoxidil Kirkland líquido 5% — 2 meses",
    short: "2 meses · líquido 5%",
    price: 450,
    image: "2-meses.jpg",
    format: "Líquido 5% con gotero",
    content: "2 botellas de 60 ml",
    perBottle: 225,
    tag: "Continuidad corta",
    keyword: "minoxidil Kirkland 2 meses",
    title: "Minoxidil Kirkland 2 meses | Líquido 5% a $450 con envío nacional",
    meta: "Paquete de 2 meses de minoxidil Kirkland líquido 5% (2 botellas de 60 ml) a $450, $225 por botella. Continuidad sin quedarte sin producto. Envío a todo México por $140.",
    intro:
      "Dos botellas para no cortar el ritmo justo cuando la rutina empieza a volverse hábito. El paquete de 2 meses baja el precio por botella frente al de 1 mes y te da un segundo mes completo para valorar tolerancia y constancia antes de decidir si vas por un paquete más largo.",
    bullets: [
      "2 botellas de 60 ml: 60 días de tratamiento con la dosis estándar de 1 ml dos veces al día.",
      "Precio por botella de $225, mejor que comprar de una en una.",
      "Un solo envío para dos meses: pagas el envío nacional una sola vez.",
      "Antes de pagar te mandamos foto real del empaque, con lote y fecha de caducidad visibles.",
    ],
    fit: "Si ya decidiste probar en serio pero todavía no quieres amarrarte a 3 o 6 meses, este es el paso intermedio natural.",
    guides: ["paquetes-minoxidil-cual-elegir", "minoxidil-liquido-vs-espuma"],
  },
  {
    slug: "minoxidil-kirkland-3-meses",
    name: "Minoxidil Kirkland líquido 5% — 3 meses",
    short: "3 meses · líquido 5%",
    price: 600,
    image: "3-meses-1.jpg",
    format: "Líquido 5% con gotero",
    content: "3 botellas de 60 ml",
    perBottle: 200,
    tag: "El más pedido",
    keyword: "minoxidil Kirkland 3 meses",
    title: "Minoxidil Kirkland 3 meses | Líquido 5% a $600, envío a todo México",
    meta: "Paquete de 3 meses de minoxidil Kirkland líquido 5% (3 botellas de 60 ml) a $600, $200 por botella. El punto medio para llevar rutina y fotos de seguimiento. Envío nacional $140.",
    intro:
      "El de 3 meses es el paquete que más recomendamos para empezar y el que más se pide: da tiempo de establecer la rutina, de que la piel se adapte y de tomar fotos de comparación con sentido. Tres meses también es el plazo mínimo razonable para valorar si el tratamiento va contigo antes de invertir en paquetes largos.",
    bullets: [
      "3 botellas de 60 ml: un trimestre completo sin preocuparte por el abasto.",
      "Precio por botella de $200: el mejor balance entre inversión y tiempo de prueba real.",
      "Tiempo suficiente para comparar fotos del mes 1 contra el mes 3 con la misma luz y ángulo.",
      "Antes de pagar te mandamos foto real del empaque, con lote y fecha de caducidad visibles.",
    ],
    fit: "Si es tu primer tratamiento y quieres hacerlo bien desde el inicio, sin quedarte corto ni gastar de más.",
    guides: ["paquetes-minoxidil-cual-elegir", "minoxidil-para-barba"],
  },
  {
    slug: "minoxidil-kirkland-6-meses",
    name: "Minoxidil Kirkland líquido 5% — 6 meses",
    short: "6 meses · líquido 5%",
    price: 1100,
    image: "6-meses.jpg",
    format: "Líquido 5% con gotero",
    content: "6 botellas de 60 ml",
    perBottle: 183,
    tag: "Ahorro",
    keyword: "minoxidil Kirkland 6 meses",
    title: "Minoxidil Kirkland 6 meses | Líquido 5% a $1,100, envío nacional",
    meta: "Paquete de 6 meses de minoxidil Kirkland líquido 5% (6 botellas de 60 ml) a $1,100, unos $183 por botella. Para quien ya trae rutina y quiere mejor precio. Envío a todo México $140.",
    intro:
      "Seis meses es el paquete de quien ya probó el producto y sabe que va en serio. Medio año de abasto resuelto de una vez, con el precio por botella más bajo de los paquetes cortos y sin estar pidiendo (ni pagando envío) cada mes. También es el plazo en el que la mayoría de los usuarios puede valorar cambios con fotos seriadas.",
    bullets: [
      "6 botellas de 60 ml: medio año de tratamiento continuo.",
      "Precio por botella de unos $183: ahorras frente a comprar paquetes cortos seguidos.",
      "Un solo envío nacional para todo el semestre.",
      "Guarda las botellas en un lugar fresco y seco, lejos del sol, y revisa la caducidad al recibir.",
      "Antes de pagar te mandamos foto real del empaque, con lote y fecha de caducidad visibles.",
    ],
    fit: "Si ya usaste minoxidil antes, te acomodó el líquido y quieres dejar de pensar en el abasto por un buen rato.",
    guides: ["paquetes-minoxidil-cual-elegir", "minoxidil-para-cabello"],
  },
  {
    slug: "minoxidil-kirkland-12-meses",
    name: "Minoxidil Kirkland líquido 5% — 12 meses",
    short: "12 meses · líquido 5%",
    price: 2000,
    image: "12-meses.jpg",
    format: "Líquido 5% con gotero",
    content: "12 botellas de 60 ml",
    perBottle: 167,
    tag: "Tratamiento anual",
    keyword: "minoxidil Kirkland 12 meses",
    title: "Minoxidil Kirkland 12 meses | Líquido 5% a $2,000, envío a todo México",
    meta: "Paquete de 12 meses de minoxidil Kirkland líquido 5% (12 botellas de 60 ml) a $2,000, unos $167 por botella: el mejor precio por botella del catálogo. Envío nacional $140.",
    intro:
      "El paquete anual resuelve el abasto de todo un año de una sola vez y trae el precio por botella más bajo del catálogo. Tiene sentido para usuarios constantes que ya conocen su presentación favorita y tienen dónde guardar las botellas correctamente; no es la compra para experimentar.",
    bullets: [
      "12 botellas de 60 ml: un año completo de tratamiento.",
      "Precio por botella de unos $167, el más bajo de todos los paquetes.",
      "Un solo envío nacional al año (o los que coordines por WhatsApp si prefieres recibirlo en partes).",
      "Revisa caducidades al recibir: las botellas se usan a lo largo del año, así que confirma que las fechas te cubren.",
      "Antes de pagar te mandamos foto real del empaque, con lote y fechas de caducidad visibles.",
    ],
    fit: "Si ya llevas meses de rutina, sabes que el líquido te funciona y quieres el mejor precio por botella sin vueltas.",
    guides: ["paquetes-minoxidil-cual-elegir", "mayoreo-minoxidil-kirkland"],
  },
  {
    slug: "minoxidil-kirkland-espuma-6-meses",
    name: "Minoxidil Kirkland espuma 5% — 6 meses",
    short: "6 meses · espuma 5%",
    price: 1850,
    image: "6-meses-espuma.jpg",
    format: "Espuma 5% (foam)",
    content: "Presentación de espuma para 6 meses",
    perBottle: null,
    tag: "Espuma",
    keyword: "minoxidil Kirkland espuma",
    title: "Minoxidil Kirkland espuma 5% | Paquete 6 meses a $1,850 en línea",
    meta: "Minoxidil Kirkland espuma 5% (foam), paquete para 6 meses a $1,850. Secado rápido y sin propilenglicol: la opción cómoda para piel sensible. Envío a todo México por $140.",
    intro:
      "La espuma de Kirkland trae el mismo ingrediente activo (minoxidil al 5%), pero en una textura tipo mousse que se deshace al contacto con la piel y seca mucho más rápido que el líquido. Es la presentación que eligen quienes tienen piel sensible —no lleva propilenglicol— o poco tiempo en las mañanas. Este paquete cubre 6 meses de tratamiento.",
    bullets: [
      "Mismo activo que el líquido (minoxidil 5%), experiencia de uso distinta: seca en minutos y no deja sensación grasosa.",
      "Sin propilenglicol: suele tolerarse mejor en pieles que se irritan con el líquido.",
      "Paquete para 6 meses: la espuma no se vende suelta mes a mes en este sitio, así que confirma por WhatsApp que la textura es la que buscas antes de pedir.",
      "Dosificar la espuma es menos exacto que el gotero: se aplica media tapa como referencia estándar de la presentación.",
      "Antes de pagar te mandamos foto real del empaque, con lote y fecha de caducidad visibles.",
    ],
    fit: "Si el líquido te irrita, te deja sensación grasosa o tardas mucho en salir de casa, la espuma suele ser el cambio correcto.",
    guides: ["minoxidil-liquido-vs-espuma", "minoxidil-para-barba"],
  },
  {
    slug: "biotina-natrol",
    name: "Biotina Natrol 10,000 mcg",
    short: "Complemento oral",
    price: 450,
    image: "biotina-low.jpg",
    format: "Suplemento en tabletas",
    content: "Frasco de biotina 10,000 mcg",
    perBottle: null,
    tag: "Apoyo",
    keyword: "biotina Natrol 10000 mcg",
    title: "Biotina Natrol 10,000 mcg | $450 con envío a todo México",
    meta: "Biotina Natrol de 10,000 mcg a $450. Complemento de apoyo para cabello, piel y uñas dentro de una rutina con minoxidil. No sustituye al tratamiento tópico. Envío nacional $140.",
    intro:
      "La biotina (vitamina B7) es un complemento nutricional que apoya la salud de cabello, piel y uñas. Hay que decirlo claro: la biotina no hace crecer barba ni cabello por sí sola y no sustituye al minoxidil; su papel es de apoyo cuando la alimentación no cubre bien esta vitamina. Por eso aquí se vende como complemento, no como tratamiento.",
    bullets: [
      "Presentación Natrol de 10,000 mcg: una de las concentraciones más pedidas como suplemento de apoyo.",
      "Tiene sentido si ya traes constancia con tu rutina tópica y quieres cuidar también la parte nutricional.",
      "Si te harás análisis de laboratorio, avisa a tu médico que tomas biotina: puede interferir con algunos resultados.",
      "Antes de pagar te mandamos foto real del frasco, con lote y fecha de caducidad visibles.",
    ],
    fit: "Si ya sostienes tu rutina de minoxidil y quieres sumar un apoyo nutricional sencillo, sin caer en la idea de que es un atajo.",
    guides: ["complementos-biotina-dermaroller-balsamo"],
  },
  {
    slug: "dermaroller",
    name: "Dermaroller 0.5 mm",
    short: "Herramienta de rutina",
    price: 240,
    image: "dermaroller.jpg",
    format: "Rodillo de microagujas 0.5 mm",
    content: "1 dermaroller de 0.5 mm",
    perBottle: null,
    tag: "Rutina",
    keyword: "dermaroller 0.5 mm",
    title: "Dermaroller 0.5 mm | $240 con envío a todo México",
    meta: "Dermaroller de 0.5 mm a $240. Herramienta complementaria de la rutina con minoxidil que exige higiene estricta y uso espaciado. No es para empezar el día uno. Envío nacional $140.",
    intro:
      "El dermaroller es un rodillo con microagujas de 0.5 mm que algunos usuarios incorporan a su rutina para acompañar el uso de productos tópicos. No es un producto milagro ni un requisito: es una herramienta con reglas de higiene estrictas, pensada para quien ya domina la rutina básica y quiere usarla con cuidado.",
    bullets: [
      "Uso típico: 1 o 2 veces por semana como máximo, nunca a diario.",
      "La piel y el rodillo deben estar limpios y desinfectados antes y después de cada uso.",
      "No apliques minoxidil inmediatamente después de usarlo; deja pasar al menos 30 minutos o espera a la siguiente aplicación.",
      "Si sangra o irrita fuerte, estás presionando de más. Es de uso personal: no se comparte.",
      "Se recomienda cambiarlo cada 3 o 4 meses según el desgaste de las agujas.",
    ],
    fit: "Si ya llevas al menos un par de meses de rutina constante y entiendes los cuidados de higiene que implica. Si vas empezando, primero domina lo básico.",
    guides: ["complementos-biotina-dermaroller-balsamo", "minoxidil-para-barba"],
  },
  {
    slug: "balsamo-maximus-barba",
    name: "Bálsamo Maximus 12% para barba",
    short: "Bálsamo para barba",
    price: 480,
    image: "balsamo12.jpg",
    format: "Bálsamo con minoxidil 12%",
    content: "1 bálsamo para barba",
    perBottle: null,
    tag: "Barba",
    keyword: "bálsamo minoxidil 12% barba",
    title: "Bálsamo Maximus 12% para barba | $480 con envío a todo México",
    meta: "Bálsamo Maximus con minoxidil al 12% para la rutina de barba a $480. Por su concentración, la venta se confirma antes por WhatsApp. Envío a todo México por $140.",
    intro:
      "El bálsamo Maximus combina el cuidado de la barba —peinar, dar forma y bajar la resequedad— con minoxidil al 12% en formato de bálsamo. Es un producto de concentración alta, así que su venta se confirma primero por WhatsApp: queremos saber si ya has usado minoxidil antes y qué presentación traes en tu rutina, para no venderte algo que no te conviene.",
    bullets: [
      "Formato bálsamo: se aplica sobre la barba y la piel de la zona, con textura que ayuda a peinar y dar forma.",
      "Concentración de 12%: más alta que el líquido Kirkland de 5%; no es el producto para experimentar sin haber usado minoxidil antes.",
      "La venta se confirma por WhatsApp antes de pagar, por la concentración.",
      "Antes de pagar te mandamos foto real del producto, con lote y fecha de caducidad visibles.",
    ],
    fit: "Si ya tienes barba visible, traes rutina con minoxidil y buscas un formato que además te ayude a peinarla y cuidarla.",
    guides: ["complementos-biotina-dermaroller-balsamo", "minoxidil-para-barba"],
  },
];

export const FAQ = [
  {
    q: "¿Envían a toda la República?",
    a: "Sí. El envío nacional tiene tarifa fija de $140 MXN a cualquier estado, sin costo extra por zonas extendidas. Trabajamos con FedEx, Estafeta y Redpack, con número de guía para rastrear tu paquete.",
  },
  {
    q: "¿Cuánto tarda en llegar mi pedido?",
    a: "Los tiempos estimados que manejamos son: CDMX y área metropolitana, 1 a 2 días hábiles; ciudades principales como Monterrey, Guadalajara o Puebla, 2 a 3 días hábiles; resto del país, 3 a 5 días hábiles. Son estimados de paquetería: al cotizar por WhatsApp te confirmamos el tiempo para tu código postal.",
  },
  {
    q: "¿Cómo sé que el Kirkland que me venden es el bueno?",
    a: "Antes de que pagues te mandamos fotos reales del empaque: caja y frasco, con número de lote y fecha de caducidad visibles. También puedes revisar las señales del empaque Kirkland Signature que explicamos en nuestra guía de compra en línea. Si algo no te convence en las fotos, no pagas.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Por transferencia o depósito, y confirmamos contigo el total exacto (producto + $140 de envío) antes de que mandes cualquier pago. Si recoges en la sucursal de Plaza Guelatao, pagas ahí mismo al recibir.",
  },
  {
    q: "¿Qué paquete me conviene para empezar?",
    a: "Para la mayoría, el de 3 meses: da tiempo de crear la rutina, ver cómo responde tu piel y comparar fotos con sentido. Si nunca has usado minoxidil y quieres gastar lo menos posible para probar, el de 1 mes cumple esa función de adaptación.",
  },
  {
    q: "¿Qué diferencia hay entre líquido y espuma?",
    a: "El activo es el mismo (minoxidil 5%). El líquido es más económico, rinde más y se dosifica exacto con gotero, pero tarda en secar y lleva propilenglicol, que puede irritar pieles sensibles. La espuma seca en minutos, no lleva propilenglicol y se siente más ligera, pero cuesta más. La comparativa completa está en la guía de líquido vs espuma.",
  },
  {
    q: "¿Puedo recoger mi pedido en persona?",
    a: "Sí, si estás en la Ciudad de México: el punto de recogida es la sucursal de Plaza Guelatao (Iztapalapa), martes a sábado de 12:30 a 4:30 pm. Confirma disponibilidad por WhatsApp antes de venir. Para precios, catálogo y todo lo local de CDMX visita minoxidilencdmx.com.",
  },
  {
    q: "¿El envío cuesta lo mismo a cualquier estado?",
    a: "Sí: $140 fijos a todo México, compres un paquete de 1 mes o el anual. Por eso, si ya sabes que vas a continuar, conviene pedir paquetes de más meses y pagar el envío una sola vez.",
  },
  {
    q: "¿Venden mayoreo?",
    a: "Sí, para barberías y revendedores. Escríbenos por WhatsApp con tu ciudad y el volumen aproximado que buscas (líquido, espuma o combinado) y te cotizamos sin compromiso. En la guía de mayoreo explicamos cómo calcular tu margen.",
  },
  {
    q: "¿El dermaroller es necesario?",
    a: "No. Es una herramienta complementaria que algunos usuarios suman a su rutina, con reglas de higiene estrictas y uso de 1 a 2 veces por semana. No reemplaza la constancia con el minoxidil y no recomendamos empezarlo el primer día.",
  },
  {
    q: "¿En cuánto tiempo se ven resultados?",
    a: "Depende de cada persona y de la constancia. En general, los primeros cambios suelen valorarse entre el tercer y el sexto mes de uso diario, con fotos comparables. Nadie serio puede garantizarte un resultado ni una fecha exacta: desconfía de quien te lo prometa.",
  },
];

export const COVERAGE = [
  "Ciudad de México", "Monterrey", "Guadalajara", "Puebla", "Querétaro", "Mérida",
  "Tijuana", "León", "Toluca", "Veracruz", "Sinaloa", "Michoacán",
  "Guerrero", "Oaxaca", "Chiapas", "Chihuahua", "y el resto de los 32 estados",
];

export const STEPS = [
  { title: "Elige tu paquete", desc: "Decide cuántos meses necesitas y si prefieres líquido o espuma. Los precios ya están publicados: sin sorpresas." },
  { title: "Escríbenos por WhatsApp", desc: "Mándanos tu ciudad, el paquete elegido y si es para barba o cabello." },
  { title: "Confirma con foto real", desc: "Te mandamos foto del empaque con lote y caducidad, el total con envío y el tiempo estimado a tu código postal." },
  { title: "Recibe en tu casa", desc: "Coordinamos el envío con guía de rastreo a cualquier estado de México." },
];
