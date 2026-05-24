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
  brand: "Minoxidil Todo Mexico",
  shortBrand: "Todo Mexico",
  domain: "https://www.minoxidiltodomexico.com/",
  title: "Minoxidil Todo Mexico | Envio nacional por WhatsApp",
  description: "Compra minoxidil Kirkland para barba y cabello con envio a todo Mexico. Paquetes de 1, 3, 6 y 12 meses, atencion por WhatsApp.",
  heroImage: "marcas-de-minoxidil.png",
  location: "Envios a todo Mexico desde CDMX",
  promise: "Envio nacional tarifa fija $140. Entregas personales gratis y pago contra entrega en CDMX.",
  h1: "Minoxidil Kirkland original, directo a tu puerta",
  subtitle: "Pide por WhatsApp, elige tu paquete por meses y recibe sin vueltas. Producto real, precio claro y envio a todo Mexico.",
  primaryCta: "Pedir ahora por WhatsApp",
  secondaryCta: "Ver paquetes y precios",
  sections: [
    ["Envio nacional", "Coordinamos paqueteria y datos completos para que sepas que va en camino."],
    ["Paquetes por etapa", "1 mes para probar, 3 para medir, 6 para avanzar y 12 para quien ya trae plan."],
    ["Compra guiada", "Te ayudamos a elegir liquido, espuma o complemento sin venderte cosas que no necesitas."],
  ],
  products: [
    { name: "1 Mes Minoxidil Kirkland Liquido 5%", price: "$250", image: "1-mes-minoxidil-kirkland-low-1.jpg", tag: "Inicio", copy: "Una botella para empezar sin comprar de mas. Ideal si quieres probar constancia y rutina." },
    { name: "2 Meses Tratamiento Kirkland 5%", price: "$450", image: "2-meses.jpg", tag: "Pareja", copy: "Dos botellas para no cortar el ritmo cuando estas agarrando disciplina." },
    { name: "3 Meses Minoxidil Kirkland Liquido 5%", price: "$600", image: "3-meses-1.jpg", tag: "Recomendado", copy: "El paquete mas equilibrado para llevar calendario, fotos y seguimiento." },
    { name: "6 Meses Minoxidil Kirkland 5%", price: "$1,100", image: "6-meses.jpg", tag: "Ahorro", copy: "Para quien ya sabe que va en serio. Menos vueltas, mejor precio por botella." },
    { name: "12 Meses Minoxidil Kirkland", price: "$2,000", image: "12-meses.jpg", tag: "Completo", copy: "Tratamiento largo para barba o cabello, resuelves el abasto del ano de una vez." },
    { name: "6 Meses Minoxidil Espuma Kirkland", price: "$1,850", image: "6-meses-espuma.jpg", tag: "Espuma", copy: "Textura mas practica para quien prefiere secado rapido y aplicacion mas comoda." },
    { name: "Biotina para cabello y barba", price: "$450", image: "biotina-low.jpg", tag: "Apoyo", copy: "Complemento para cuidar la rutina desde adentro. No reemplaza constancia." },
    { name: "Dermaroller 0.5 mm", price: "$240", image: "dermaroller.jpg", tag: "Rutina", copy: "Herramienta para usuarios que entienden cuidados, higiene y descanso." },
    { name: "Balsamo para barba", price: "$480", image: "balsamo12.jpg", tag: "Barba", copy: "Para peinar, dar forma y bajar resequedad cuando la barba ya se ve mas presente." },
  ],
  posts: [
    {
      title: "Como comprar minoxidil Kirkland original sin riesgos",
      excerpt: "Aprende a identificar producto legitimo, verificar sellos y evitar estafas al comprar minoxidil en Mexico.",
      body: `Comprar minoxidil Kirkland original en Mexico no deberia ser una apuesta. Cada vez hay mas opciones, pero tambien mas vendedores sin respaldo que ofrecen producto generico haciendolo pasar por original.

## Como identificar Minoxidil Kirkland autentico

El empaque de Kirkland Signature tiene caracteristicas especificas: caja blanca con detalles verdes, el logo de Costco visible y la informacion del fabricante (Perrigo) claramente impresa. El frasco debe venir sellado, con fecha de caducidad legible y numero de lote.

## Senales de una compra segura

1. El vendedor te manda fotos reales del producto, no solo imagenes de catalogo
2. Puedes ver el lote y la fecha de caducidad en las fotos
3. El precio es razonable: si esta demasiado barato, desconfia
4. Hay un canal de atencion claro (WhatsApp, telefono, ubicacion fisica)
5. Te explican el proceso de envio antes de pagar

## Errores comunes al comprar

Muchos compradores se van por el precio mas bajo sin revisar presentacion, fecha de caducidad o si el vendedor tiene referencias. Otro error frecuente es no guardar capturas de la conversacion y los datos del pedido.

## Como comprar por WhatsApp de forma segura

Al escribir por WhatsApp, pide foto real del producto, confirma cuantas botellas incluye tu paquete, pregunta el total con envio incluido, y verifica la paqueteria y el tiempo estimado de entrega. Un vendedor serio responde todo esto sin rodeos.

Si quieres comprar minoxidil Kirkland original con envio a todo Mexico, escribenos por WhatsApp. Te mandamos fotos reales del producto, confirmamos disponibilidad y coordinamos el envio para que recibas sin preocupaciones.`,
      category: "Compra",
      keyword: "minoxidil kirkland original",
    },
    {
      title: "Minoxidil para barba en Mexico: guia completa para empezar",
      excerpt: "Todo lo que necesitas saber sobre usar minoxidil para hacer crecer la barba: dosis, rutina, resultados esperados y errores a evitar.",
      body: `El minoxidil para barba se ha vuelto una de las busquedas mas populares en Mexico. Si estas considerando empezar, esta guia te explica lo esencial para hacerlo bien desde el primer dia.

## Como funciona el minoxidil en la barba

El minoxidil fue desarrollado originalmente como vasodilatador para la presion arterial, pero se descubrio que estimula el crecimiento de vello. En la barba, mejora la circulacion en los foliculos, prolonga la fase de crecimiento y puede activar foliculos que estaban inactivos.

No es magia: necesitas constancia. Los resultados visibles suelen aparecer entre el mes 3 y 6 de uso diario.

## Que presentacion elegir: liquido vs espuma

La mayoria de los hombres empieza con minoxidil liquido al 5%. Es la opcion mas economica y la mas estudiada para barba. La espuma puede ser mas comoda si tienes piel sensible o prefieres un secado mas rapido, pero suele costar mas.

## Rutina basica para barba

- Aplica 1 ml dos veces al dia (manana y noche) sobre la zona de la barba
- La piel debe estar limpia y seca
- Masajea suavemente para distribuir el producto
- Lava tus manos despues de aplicar
- Deja secar completamente (15-20 minutos) antes de acostarte o aplicar otros productos
- Toma fotos con la misma luz y angulo cada 15 dias

## Errores frecuentes

1. Aplicar mas de 1 ml pensando que acelerara el proceso (no funciona asi)
2. Dejar de usarlo a las pocas semanas porque no ve resultados inmediatos
3. No ser consistente con los horarios
4. Usar dermaroller sin la higiene adecuada
5. Compararse con fotos de internet que pueden ser poco realistas

## Que esperar el primer mes

El primer mes es de adaptacion. Puede haber algo de resequedad o descamacion, lo cual es normal. Algunos usuarios notan un ligero aumento de vello fino. Lo importante es establecer la rutina y no abandonar.

## Cuando se ven resultados

Los primeros cambios suelen notarse a los 2-3 meses. El resultado mas notorio se da entre los 6 y 12 meses de uso constante. La genetica juega un papel importante: no todos responden igual, pero la constancia es el factor principal.

Si quieres empezar tu tratamiento de minoxidil para barba, escribenos por WhatsApp. Te orientamos sobre que paquete te conviene segun tu presupuesto y te mandamos fotos reales del producto.`,
      category: "Rutina",
      keyword: "minoxidil para barba Mexico",
    },
    {
      title: "Paquetes de minoxidil: cual te conviene segun tu objetivo",
      excerpt: "Compara los paquetes de 1, 3, 6 y 12 meses de minoxidil. Descubre cual se ajusta a tu presupuesto y nivel de compromiso.",
      body: `Elegir el paquete correcto de minoxidil hace la diferencia entre abandonar a las pocas semanas o sostener un tratamiento que de resultados. Aqui te explicamos cada opcion.

## Paquete de 1 mes: para probar

El paquete de 1 mes es ideal si:
- Nunca has usado minoxidil y quieres ver como reacciona tu piel
- Estas probando si puedes mantener la disciplina de aplicarlo a diario
- Tu presupuesto es limitado este mes

Incluye 1 botella de 60 ml, suficiente para 30 dias de uso (dos aplicaciones diarias). No esperes ver resultados en 30 dias; este mes es para adaptarte.

## Paquete de 3 meses: el punto medio ideal

Este es el paquete mas recomendado para empezar. Tres meses te permiten:
- Establecer una rutina real
- Ver si hay sensibilidad o irritacion
- Tomar fotos de comparacion con sentido
- Decidir si quieres continuar con mas meses

Incluye 3 botellas. El costo por botella es mejor que comprar de una en una, y no te quedas sin producto a media rutina.

## Paquete de 6 meses: para quien va en serio

Cuando ya probaste el producto y sabes que lo vas a usar, 6 meses es la mejor compra. Ventajas:
- Mejor precio por botella
- No tienes que estar pidiendo cada mes
- Tiempo suficiente para ver resultados reales en barba o cabello
- Menos gastos de envio

## Paquete de 12 meses: tratamiento completo

Para usuarios constantes que quieren resolver el abasto del ano. Conviene si:
- Ya sabes que presentacion prefieres (liquido o espuma)
- Tienes donde guardar las botellas (lugar fresco, sin humedad)
- Quieres el mejor precio por botella del mercado

## Como decidir

Preguntate: ya use minoxidil antes? Soy constante con las rutinas diarias? Tengo presupuesto para varios meses? Si respondes que si a todo, 6 meses es buena opcion. Si es tu primera vez, empieza con 1 o 3 meses.

Escribenos por WhatsApp y te ayudamos a elegir el paquete ideal para ti.`,
      category: "Paquetes",
      keyword: "paquete minoxidil meses",
    },
    {
      title: "Minoxidil liquido vs espuma: diferencias, ventajas y como elegir",
      excerpt: "Comparativa completa entre minoxidil liquido y espuma: precio, absorcion, comodidad y para que tipo de persona funciona cada uno.",
      body: `La decision entre minoxidil liquido y espuma es una de las dudas mas frecuentes. Ambos contienen el mismo ingrediente activo (minoxidil al 5%), pero la experiencia de uso es distinta.

## Minoxidil liquido

El liquido es la presentacion clasica y la mas economica. Se aplica con gotero y se extiende con los dedos.

**Ventajas:**
- Precio mas bajo por botella
- Facil de dosificar con el gotero
- Mayor rendimiento (cunde mas)
- Mas facil de encontrar

**Desventajas:**
- Tarda mas en secar (15-25 minutos)
- Puede dejar sensacion grasosa o humeda
- Contiene propilenglicol, que puede irritar pieles sensibles
- Si tienes barba larga, puede ser mas dificil llegar a la piel

## Minoxidil espuma

La espuma es una formulacion mas reciente. Se dispensa como mousse y se deshace al contacto con la piel.

**Ventajas:**
- Secado mucho mas rapido (5-10 minutos)
- No contiene propilenglicol (mejor para pieles sensibles)
- Sensacion mas ligera, menos grasosa
- Ideal si tienes poco tiempo en las mananas

**Desventajas:**
- Precio mas alto
- Puede ser mas dificil de medir la dosis exacta
- Menos disponibilidad en el mercado mexicano

## Para barba: cual funciona mejor?

Ambos funcionan. La mayoria empieza con liquido por precio. Si tu piel se irrita o no toleras la sensacion humeda, cambia a espuma. Si tu barba ya es poblada y cuesta llegar a la piel, la espuma puede ser mas practica.

## Para cabello: cual conviene?

En cabello, el liquido suele preferirse porque el cuero cabelludo tolera mejor la textura. Pero si tienes poco tiempo para secar o piel sensible, la espuma es una buena alternativa.

## Nuestra recomendacion

Empieza con liquido. Si despues de 1-2 meses sientes que la textura no te acomoda, prueba la espuma. No compres 6 meses de espuma sin antes haber probado si te gusta la textura.

Escribenos por WhatsApp para ver disponibilidad y precio de ambas presentaciones.`,
      category: "Producto",
      keyword: "minoxidil espuma vs liquido",
    },
    {
      title: "Envio de minoxidil a todo Mexico: como funciona y que necesitas",
      excerpt: "Te explicamos como coordinamos el envio de minoxidil a cualquier estado de Mexico: costos, paqueterias, tiempos y como preparar tus datos.",
      body: `Pedir minoxidil con envio a cualquier estado de Mexico es mas facil de lo que parece. Aqui te contamos como funciona el proceso para que no tengas dudas.

## Como funciona el envio

Trabajamos con paqueterias como FedEx, Estafeta y Redpack. La tarifa de envio es fija: $140 MXN a cualquier parte de la Republica Mexicana. No hay costo extra por zonas extendidas.

## Que necesitas para recibir tu pedido

Para que tu envio salga sin retrasos, ten listos estos datos:
- Nombre completo de quien recibe
- Calle y numero
- Colonia
- Codigo postal
- Municipio o alcaldia
- Estado
- Referencias (color de fachada, entre que calles, negocio cercano)
- Telefono de contacto (activo, para que la paqueteria te pueda llamar)

## Ciudades donde mas enviamos

Hacemos envios frecuentes a Monterrey, Guadalajara, Puebla, Queretaro, Merida, Tijuana, Leon, Toluca, y practicamente cualquier ciudad del pais. Tambien llegamos a zonas extendidas como Michoacan, Guerrero, Oaxaca, Chiapas y la Sierra de Chihuahua.

## Tiempos de entrega estimados

- CDMX y area metropolitana: 1-2 dias habiles
- Ciudades principales (MTY, GDL, PUE): 2-3 dias habiles
- Resto del pais: 3-5 dias habiles

## Consejos para recibir bien tu pedido

1. Manda tus datos completos desde el primer mensaje de WhatsApp
2. Revisa que el codigo postal coincida con tu colonia
3. Al recibir, abre el paquete y revisa que las botellas esten en buen estado
4. Toma foto del paquete recibido por si necesitas alguna aclaracion
5. No tires la caja ni etiquetas el primer dia

Si estas en CDMX o zona metropolitana, tambien ofrecemos entregas personales gratis con pago contra entrega.

Listo para pedir? Mandanos un WhatsApp con tu ciudad y el paquete que te interesa.`,
      category: "Envio",
      keyword: "minoxidil envio nacional",
    },
    {
      title: "Minoxidil en CDMX: precios, sucursales y como recibir",
      excerpt: "Si vives en CDMX o area metropolitana, conoce las opciones para comprar minoxidil: recoger en sucursal, entrega personal o envio local.",
      body: `Comprar minoxidil en la Ciudad de Mexico tiene ventajas: puedes ver el producto antes de pagar, recoger en sucursal o recibir envio local rapido.

## Sucursal Guelatao (Iztapalapa)

Nuestra sucursal principal esta en Plaza Guelatao, Local 76, Pasillo 5, sobre Calzada Ignacio Zaragoza. Es un punto fisico donde puedes:
- Ver el producto en persona antes de comprar
- Revisar fechas de caducidad y presentacion
- Resolver dudas directamente
- Pagar en efectivo o transferencia

## Entregas personales en zona oriente

Si estas en Nezahualcoyotl, La Paz, Chalco, Ixtapaluca o zonas aledanas, coordinamos entregas personales en puntos publicos (metros, plazas) con pago contra entrega. No necesitas depositar por adelantado.

## Envio local en CDMX

Si prefieres recibir en tu domicilio en CDMX, el envio llega en 1-2 dias habiles. La tarifa de envio aplica igual ($140), pero si estas muy cerca de nuestras sucursales, la entrega personal puede ser gratis.

## Horarios de atencion

Atendemos de martes a domingo, de 12 PM a 5 PM. Te recomendamos escribir por WhatsApp antes de venir para confirmar disponibilidad y que no hagas el viaje en vano.

## Oficinas Neza

Tenemos oficina en Oriente 10 #224, Colonia Reforma, Nezahualcoyotl. Es otro punto de referencia para pedidos en zona oriente, entregas coordinadas y compras por mayoreo.

Escribenos por WhatsApp para confirmar disponibilidad, horario y coordinar tu visita o entrega.`,
      category: "Local",
      keyword: "minoxidil CDMX",
    },
    {
      title: "Minoxidil para cabello: guia de uso, resultados y cuidados",
      excerpt: "Todo lo que debes saber sobre usar minoxidil para el cabello: zonas de aplicacion, constancia, complementos y expectativas realistas.",
      body: `El minoxidil para cabello es uno de los tratamientos mas usados en el mundo. Si estas considerando empezar, aqui tienes la informacion que necesitas.

## Como actua el minoxidil en el cuero cabelludo

El minoxidil mejora la circulacion sanguinea en los foliculos pilosos del cuero cabelludo. Esto prolonga la fase de crecimiento (anagena) y puede ayudar a que foliculos debilitados produzcan cabello mas grueso.

Es importante entender que el minoxidil no cura la calvicie, pero puede frenar la caida y estimular nuevo crecimiento en muchos casos.

## Zonas de aplicacion

El minoxidil funciona mejor en la coronilla (parte superior trasera) que en las entradas. Si tu perdida de cabello es en las entradas, los resultados pueden ser mas limitados, pero aun asi vale la pena intentarlo.

## Como se aplica

- Aplica 1 ml sobre el cuero cabelludo seco, dos veces al dia
- Usa el gotero o aplicador para distribuir el liquido directamente sobre la piel (no sobre el cabello)
- Masajea suavemente con las yemas de los dedos
- Deja secar completamente
- No te laves el cabello inmediatamente despues

## Complementos utiles

- La biotina puede apoyar la salud general del cabello
- Un shampoo suave sin sulfatos ayuda a mantener el cuero cabelludo limpio
- El dermaroller puede mejorar la absorcion, pero requiere higiene estricta

## Errores a evitar

1. Aplicar sobre el cabello en lugar del cuero cabelludo
2. Usar mas de 1 ml por dosis
3. Abandonar antes de los 4-6 meses
4. No tomar fotos de seguimiento
5. Cambiar de producto cada mes por desesperacion

## Cuando consultar a un profesional

Si tienes caida subita, zonas sin cabello con cicatrices, o condiciones medicas previas del cuero cabelludo, consulta a un dermatologo antes de empezar cualquier tratamiento.

Escribenos por WhatsApp si tienes dudas sobre que paquete empezar para cabello.`,
      category: "Cabello",
      keyword: "minoxidil para cabello",
    },
    {
      title: "Biotina, dermaroller y balsamo: que papel juegan en tu rutina",
      excerpt: "Complementos que pueden mejorar tu rutina con minoxidil: aprende cuando si conviene usarlos y cuando son gasto innecesario.",
      body: `Ademas del minoxidil, hay productos complementarios que pueden potenciar tu rutina. Pero ojo: no todos son necesarios, y comprarlos sin entender su funcion es tirar dinero.

## Biotina: apoyo, no sustituto

La biotina (vitamina B7) contribuye a la salud del cabello, la piel y las unas. Es un complemento nutricional, no un tratamiento topico. Puede ayudar si tu alimentacion es deficiente, pero no reemplaza al minoxidil.

Recomendacion: compra biotina si ya tienes constancia con el minoxidil y quieres un apoyo adicional. No la compres como "atajo" pensando que hara crecer barba por si sola.

## Dermaroller (0.5 mm): herramienta con reglas

El dermaroller es un rodillo con microagujas que se pasa sobre la piel para estimular la circulacion y mejorar la absorcion de productos topicos.

**Reglas de uso:**
- Usalo 1-2 veces por semana, no a diario
- La piel debe estar limpia y desinfectada
- Desinfecta el rodillo antes y despues de cada uso con alcohol
- No apliques minoxidil inmediatamente despues (espera al menos 30 min o hasta el dia siguiente)
- Si sangra o irrita, estas presionando demasiado
- Cambia el rodillo cada 3-4 meses

No es para principiantes. Primero domina la rutina basica con minoxidil y luego considera agregar dermaroller.

## Balsamo para barba: cuando la barba ya existe

El balsamo para barba sirve para peinar, hidratar y dar forma. Solo tiene sentido cuando ya tienes una barba visible que necesita cuidado. Si apenas estas empezando con minoxidil y no tienes barba, el balsamo no te sirve todavia.

## Orden de compra inteligente

1. Primero: minoxidil (el producto base)
2. Despues de 2-3 meses de constancia: considera biotina
3. Cuando domines la rutina: evalua dermaroller
4. Cuando tengas barba visible: balsamo

Escribenos por WhatsApp y te orientamos sobre que complementos tienen sentido para tu caso.`,
      category: "Complementos",
      keyword: "biotina dermaroller minoxidil",
    },
    {
      title: "Mayoreo de minoxidil Kirkland: guia para revendedores",
      excerpt: "Si quieres vender minoxidil al por mayor en Mexico, aqui te explicamos como calcular margen, elegir volumen y vender con responsabilidad.",
      body: `El mayoreo de minoxidil Kirkland puede ser un buen negocio si lo haces con orden. Aqui te explicamos como empezar sin arriesgar dinero de mas.

## Quien deberia comprar mayoreo

- Barberias que quieren ofrecer producto a sus clientes
- Revendedores locales con clientes frecuentes
- Personas que ya tienen un canal de venta (WhatsApp, Marketplace, local fisico)
- Quienes compran para uso personal de larga duracion (12+ meses)

Si apenas estas probando si hay demanda en tu zona, no compres mayoreo. Empieza con poco y mide la respuesta.

## Como calcular tu margen

1. Conoce el precio de mayoreo por botella
2. Suma costos de envio (si aplica)
3. Define tu precio de venta al publico
4. Calcula tu ganancia por botella
5. Multiplica por la cantidad que esperas vender al mes

Un margen saludable para reventa suele estar entre el 20% y 40% sobre el costo, dependiendo del volumen y la zona.

## Que presentaciones se venden mas

En la experiencia de nuestros clientes mayoristas:
- El liquido 5% es el producto estrella (80% de las ventas)
- Los paquetes de 3 y 6 meses son los mas buscados por consumidores finales
- La espuma tiene un publico mas reducido pero con mejor margen
- Los complementos (biotina, dermaroller) suman a la venta pero no son el producto principal

## Consejos para revender bien

1. Conoce el producto: aprende a explicar la diferencia entre liquido y espuma
2. Muestra fotos reales, no solo imagenes de internet
3. Explica con honestidad los tiempos de resultados
4. No prometas milagros: la confianza del cliente vale mas que una venta rapida
5. Ten disponibilidad constante: si te quedas sin producto, pierdes clientes

## Como pedir mayoreo con nosotros

Escribenos por WhatsApp con tu ciudad, la cantidad aproximada que buscas y si prefieres liquido, espuma o combinado. Te cotizamos sin compromiso.`,
      category: "Mayoreo",
      keyword: "mayoreo minoxidil Kirkland",
    },
  ],
  faq: [
    ["Envian a toda la Republica?", "Si. Envio nacional con tarifa fija de $140 MXN a cualquier estado. Usamos FedEx, Estafeta y Redpack con seguimiento."],
    ["Cual es el paquete mas recomendado para empezar?", "3 meses. Es el punto medio ideal: da tiempo para establecer rutina, medir resultados y decidir si continuas."],
    ["Puedo ver el producto antes de pagar?", "Claro. Mandamos fotos reales del producto, con fecha de caducidad y presentacion visible antes de que pagues."],
    ["Diferencia entre liquido y espuma?", "El liquido es mas economico y rendidor. La espuma seca mas rapido y suele ser mejor para pieles sensibles."],
    ["Hacen entregas en persona en CDMX?", "Si. Entregas gratis en CDMX y zona metropolitana con pago contra entrega. Tambien puedes recoger en Plaza Guelatao."],
    ["Cuanto tarda en llegar un envio?", "CDMX: 1-2 dias. Ciudades grandes: 2-3 dias. Resto del pais: 3-5 dias habiles."],
    ["Como se paga?", "Transferencia, deposito o pago contra entrega (CDMX). Confirmamos total antes de que envies cualquier pago."],
    ["El dermaroller es necesario?", "No es indispensable. Es una herramienta complementaria que requiere higiene y cuidado. No reemplaza la constancia con minoxidil."],
  ],
} as SiteData;

const WHATSAPP_NUMBER = "525569380408";
const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero informacion de " + SITE.brand)}`;

const PRODUCT_META: Record<string, { bottles?: number; format: string; fit: string }> = {
  Inicio: { bottles: 1, format: "Liquido 5%", fit: "Primera prueba" },
  Pareja: { bottles: 2, format: "Liquido 5%", fit: "Continuidad corta" },
  Recomendado: { bottles: 3, format: "Liquido 5%", fit: "Mejor balance" },
  Ahorro: { bottles: 6, format: "Liquido 5%", fit: "Rutina seria" },
  Completo: { bottles: 12, format: "Liquido 5%", fit: "Abasto anual" },
  Espuma: { bottles: 6, format: "Espuma 5%", fit: "Secado rapido" },
  Apoyo: { format: "Complemento", fit: "Cabello y barba" },
  Rutina: { format: "0.5 mm", fit: "Uso con cuidado" },
  Barba: { format: "Balsamo", fit: "Peinado y forma" },
};

const TAG_CLASS: Record<string, string> = {
  Inicio: "tag-inicio",
  Recomendado: "tag-recomendado",
  Ahorro: "tag-ahorro",
  Completo: "tag-completo",
  Espuma: "tag-espuma",
  Apoyo: "tag-apoyo",
  Rutina: "tag-rutina",
  Barba: "tag-barba",
  Pareja: "tag-pareja",
};

const CAT_CLASS: Record<string, string> = {
  Compra: "cat-compra",
  Rutina: "cat-rutina",
  Paquetes: "cat-paquetes",
  Producto: "cat-producto",
  Envio: "cat-envio",
  Local: "cat-local",
  Cabello: "cat-cabello",
  Complementos: "cat-complementos",
  Mayoreo: "cat-mayoreo",
};

const COVERAGE_AREAS = ["CDMX", "Monterrey", "Guadalajara", "Puebla", "Queretaro", "Merida", "Tijuana", "Leon", "Toluca", "Michoacan", "Guerrero", "Oaxaca", "Chiapas", "Veracruz", "Sinaloa"];

const FOOTER_COLUMNS = [
  { title: "Contacto", items: ["WhatsApp 55-6938-0408", "Sucursal Guelatao", "Oficinas Neza", "Martes a domingo"] },
  { title: "Productos", items: ["Minoxidil liquido", "Minoxidil espuma", "Paquetes por mes", "Mayoreo"] },
  { title: "Informacion", items: ["Blog", "Envios a todo Mexico", "Rutina para barba", "Complementos"] },
];

function moneyToNumber(price: string) {
  return Number(price.replace(/[$,]/g, ""));
}

function productHref(product: Product) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, quiero pedir ${product.name} por ${product.price}. Estoy en:`
  )}`;
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function postPath(post: Post) {
  return `#blog/${slugify(post.title)}`;
}

function stripMarkdown(md: string): string {
  return md
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/^[-*]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "");
}

function renderMarkdown(md: string): string {
  const lines = md.split("\n");
  let html = "";
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^### /.test(line)) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h3>${line.replace(/^### /, "")}</h3>`;
    } else if (/^## /.test(line)) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h2>${line.replace(/^## /, "")}</h2>`;
    } else if (/^\d+\.\s/.test(line)) {
      if (!inList) { html += "<ol>"; inList = true; }
      html += `<li>${line.replace(/^\d+\.\s+/, "")}</li>`;
    } else if (/^[-*]\s/.test(line)) {
      if (!inList) { html += "<ul>"; inList = true; }
      html += `<li>${line.replace(/^[-*]\s+/, "")}</li>`;
    } else if (line.trim() === "") {
      if (inList) { html += inList.includes("<ol>") ? "</ol>" : "</ul>"; inList = false; }
      continue;
    } else {
      if (inList) { html += inList.includes("<ol>") ? "</ol>" : "</ul>"; inList = false; }
      html += `<p>${line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")}</p>`;
    }
  }
  if (inList) { html += inList.includes("<ol>") ? "</ol>" : "</ul>"; }
  return html;
}

function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  const featuredPosts = useMemo(() => SITE.posts.filter((p) => p.category).slice(0, 6), []);
  const allPostsSorted = useMemo(() => SITE.posts, []);

  const activePostPage = useMemo(() => {
    if (!hash.startsWith("#blog/")) return null;
    const slug = hash.replace("#blog/", "");
    return SITE.posts.find((p) => slugify(p.title) === slug) ?? null;
  }, [hash]);

  const relatedPosts = useMemo(() => {
    if (!activePostPage) return [];
    return SITE.posts
      .filter((p) => p.title !== activePostPage.title && (p.category ?? "Guia") === (activePostPage.category ?? "Guia"))
      .slice(0, 3);
  }, [activePostPage]);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    document.title = activePostPage ? `${activePostPage.title} | ${SITE.brand}` : SITE.title;
  }, [activePostPage]);

  if (activePostPage) {
    return (
      <>
        <Header />
        <BlogPostPage post={activePostPage} relatedPosts={relatedPosts.length ? relatedPosts : SITE.posts.slice(0, 3)} />
        <Footer />
        <FloatingWA />
      </>
    );
  }

  return (
    <>
      <Header />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <ProductsSection />
      <Testimonials />
      <BlogSection posts={featuredPosts} allPosts={allPostsSorted} />
      <FAQSection />
      <LocationsSection />
      <ContactSection />
      <Footer />
      <FloatingWA />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="#inicio">
          <span className="brand-icon">M</span>
          <span className="brand-text">{SITE.brand}<span>{SITE.location}</span></span>
        </a>
        <nav className="header-nav">
          <a href="#productos">Productos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#blog">Blog</a>
          <a href="#preguntas">FAQ</a>
          <a href="#sucursales">Sucursales</a>
        </nav>
        <a className="btn btn-whatsapp header-cta" href={WHATSAPP}>WhatsApp</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Envios a todo Mexico — Atencion por WhatsApp
          </div>
          <h1 className="hero-title">
            {SITE.h1.split("directo")[0]}<em>directo</em> a tu puerta
          </h1>
          <p className="hero-desc">{SITE.subtitle}</p>
          <div className="hero-actions">
            <a className="btn btn-whatsapp btn-lg" href={WHATSAPP}>
              Pedir ahora por WhatsApp
            </a>
            <a className="btn btn-secondary btn-lg" href="#productos">
              Ver paquetes y precios
            </a>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Producto Kirkland original
            </div>
            <div className="hero-trust-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              Envio nacional $140 fijo
            </div>
            <div className="hero-trust-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Pago contra entrega en CDMX
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img className="hero-image" src={`/site-images/${SITE.heroImage}`} alt={SITE.brand} />
            <div className="hero-float-card">
              <div className="wa-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              </div>
              <div>
                <strong>Pedidos por WhatsApp</strong>
                <span>Respuesta en minutos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="trust-strip-inner">
        <div className="trust-item">
          <span className="trust-number">+500</span>
          <span className="trust-label">Clientes satisfechos</span>
        </div>
        <div className="trust-item">
          <span className="trust-number">32</span>
          <span className="trust-label">Estados con cobertura</span>
        </div>
        <div className="trust-item">
          <span className="trust-number">$140</span>
          <span className="trust-label">Envio nacional fijo</span>
        </div>
        <div className="trust-item">
          <span className="trust-number">100%</span>
          <span className="trust-label">Producto Kirkland original</span>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Elige tu paquete", desc: "Decide cuantos meses necesitas y si prefieres liquido o espuma." },
    { title: "Escribenos por WhatsApp", desc: "Manda tu ciudad, el paquete elegido y si es para barba o cabello." },
    { title: "Confirma tu pedido", desc: "Recibe foto real del producto, precio total y tiempo de entrega." },
    { title: "Recibe en tu casa", desc: "Coordinamos el envio a cualquier parte de Mexico con seguimiento." },
  ];
  return (
    <section className="section how-it-works" id="como-funciona">
      <div className="section-header">
        <span className="eyebrow">Como funciona</span>
        <h2>Compra en 4 pasos, sin vueltas</h2>
        <p className="lead">Asi de simple es pedir tu minoxidil. Elige, escribes, confirmas y recibes.</p>
      </div>
      <div className="steps-grid">
        {steps.map((s, i) => (
          <div className="step-card" key={i}>
            <div className="step-number">{i + 1}</div>
            <h3>{s.title}</h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="section products-section" id="productos">
      <div className="section-header">
        <span className="eyebrow">Productos</span>
        <h2>Elige tu tratamiento por meses</h2>
        <p className="lead">Precios claros, fotos reales y envio a todo Mexico. Todos los paquetes incluyen producto Kirkland original sellado.</p>
      </div>
      <div className="product-grid">
        {SITE.products.map((product) => {
          const meta = PRODUCT_META[product.tag] ?? { format: "Producto", fit: "Pedido guiado" };
          const price = moneyToNumber(product.price);
          const perBottle = meta.bottles ? Math.round(price / meta.bottles) : null;
          const isFeatured = product.tag === "Recomendado";
          return (
            <article className={`product-card ${isFeatured ? "featured" : ""}`} key={product.name}>
              <div className="product-image-wrap">
                <img src={`/site-images/${product.image}`} alt={product.name} />
                <span className={`product-tag ${TAG_CLASS[product.tag] ?? ""}`}>{product.tag}</span>
              </div>
              <div className="product-body">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.copy}</p>
                <div className="product-meta">
                  <div className="product-meta-item">
                    <dt>Formato</dt>
                    <dd>{meta.format}</dd>
                  </div>
                  <div className="product-meta-item">
                    <dt>Ideal para</dt>
                    <dd>{meta.fit}</dd>
                  </div>
                </div>
                <div className="product-price-row">
                  <span className="product-price">{product.price}</span>
                  {perBottle && <span className="product-per-bottle">${perBottle} c/botella</span>}
                </div>
                <a className="product-buy-btn" href={productHref(product)}>
                  Pedir por WhatsApp
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { name: "Carlos M.", city: "Monterrey", text: "Pedi el paquete de 3 meses para barba. Llego en 3 dias, bien empacado y el vendedor me mando foto antes de enviar. Ya voy en el mes 2 y se nota el cambio.", initials: "CM" },
    { name: "Andres G.", city: "Guadalajara", text: "Compre 6 meses por mayoreo para mi barberia. Buenos precios, envio puntual y mis clientes estan contentos con el producto.", initials: "AG" },
    { name: "Luis R.", city: "CDMX", text: "Fui a la sucursal en Guelatao. Me atendieron bien, me explicaron como usar el producto y me dieron recomendaciones sin presion para comprar mas.", initials: "LR" },
  ];
  return (
    <section className="section testimonials-section">
      <div className="section-header">
        <span className="eyebrow">Testimonios</span>
        <h2>Lo que dicen nuestros clientes</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <div className="avatar">{t.initials}</div>
              <div>
                <strong>{t.name}</strong>
                <span>{t.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlogSection({ posts, allPosts }: { posts: Post[]; allPosts: Post[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="section blog-section" id="blog">
      <div className="section-header">
        <span className="eyebrow">Blog</span>
        <h2>Guias para comprar y usar minoxidil</h2>
        <p className="lead">Informacion util para que tomes la mejor decision. Basado en experiencia real, no en promesas magicas.</p>
      </div>
      <div className="blog-featured-grid">
        {posts.map((post) => {
          const cat = post.category ?? "Guia";
          return (
            <a className="blog-card" href={postPath(post)} key={post.title}>
              <div className="blog-card-image">
                {cat === "Compra" ? "🛒" : cat === "Rutina" ? "📋" : cat === "Paquetes" ? "📦" : cat === "Producto" ? "🧴" : cat === "Envio" ? "🚚" : cat === "Local" ? "📍" : cat === "Cabello" ? "💇" : cat === "Complementos" ? "💊" : cat === "Mayoreo" ? "🏪" : "📝"}
              </div>
              <div className="blog-card-body">
                <span className={`blog-card-category ${CAT_CLASS[cat] ?? "cat-guia"}`}>{cat}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <span className="blog-card-link">Leer guia completa →</span>
              </div>
            </a>
          );
        })}
      </div>
      <div className="blog-list-full">
        {allPosts.map((post, i) => {
          const cat = post.category ?? "Guia";
          return (
            <a className="blog-list-item" href={postPath(post)} key={post.title}>
              <span className="blog-list-number">{i + 1}</span>
              <div className="blog-list-info">
                <strong>{post.title}</strong>
                <small>{post.excerpt.substring(0, 80)}...</small>
              </div>
              <span className={`blog-list-cat ${CAT_CLASS[cat] ?? "cat-guia"}`}>{cat}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function BlogPostPage({ post, relatedPosts }: { post: Post; relatedPosts: Post[] }) {
  const cat = post.category ?? "Guia";
  return (
    <section className="blog-post-page">
      <div className="blog-post-inner">
        <div className="blog-post-main">
          <a className="blog-post-back" href="#blog">
            ← Volver al blog
          </a>
          <span className={`blog-card-category ${CAT_CLASS[cat] ?? "cat-guia"}`}>{cat}</span>
          <h1>{post.title}</h1>
          {post.keyword && (
            <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 16, fontStyle: "italic" }}>
              Keyword: {post.keyword}
            </p>
          )}
          <p className="blog-post-excerpt">{post.excerpt}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
          />
          <div className="blog-post-cta">
            <strong>Listo para empezar tu tratamiento?</strong>
            <p>Escribenos por WhatsApp. Te mandamos foto real del producto y coordinamos el envio a tu ciudad.</p>
            <a className="btn btn-whatsapp" href={WHATSAPP}>
              Enviar mensaje por WhatsApp
            </a>
          </div>
        </div>
        <aside className="blog-post-sidebar">
          {relatedPosts.length > 0 && (
            <div className="sidebar-related">
              <h2>Articulos relacionados</h2>
              {relatedPosts.map((rp) => (
                <a href={postPath(rp)} key={rp.title}>
                  {rp.title}
                </a>
              ))}
            </div>
          )}
          <div className="sidebar-cta">
            <strong>Cotiza tu paquete</strong>
            <p>Escribenos, es gratis y sin compromiso.</p>
            <a className="btn btn-whatsapp" href={WHATSAPP} style={{ display: "inline-flex" }}>
              WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="section faq-section" id="preguntas">
      <div className="section-header">
        <span className="eyebrow">Preguntas frecuentes</span>
        <h2>Lo que todos preguntan antes de comprar</h2>
      </div>
      <div className="faq-grid">
        {SITE.faq.map(([q, a]) => (
          <div className="faq-item" key={q}>
            <h3>{q}</h3>
            <p>{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LocationsSection() {
  const locations = [
    {
      tag: "CDMX",
      title: "Sucursal Guelatao",
      desc: "Plaza Guelatao, Local 76, Pasillo 5, Iztapalapa. Ven a ver el producto en persona y resuelve tus dudas antes de comprar.",
      detail: "Calz. Ignacio Zaragoza 406. Martes a domingo, 12-5 PM.",
      featured: true,
    },
    {
      tag: "Zona Oriente",
      title: "Oficinas Neza",
      desc: "Entrega personal en Nezahualcoyotl, La Paz, Chalco e Ixtapaluca. Coordinamos punto publico y pago al recibir.",
      detail: "Oriente 10 #224, Colonia Reforma, Nezahualcoyotl.",
      featured: false,
    },
    {
      tag: "Todo Mexico",
      title: "Envio nacional",
      desc: "Si vives en cualquier otro estado, coordinamos envio por paqueteria con seguimiento. Llega a todo el pais.",
      detail: "Tarifa fija $140. FedEx, Estafeta o Redpack.",
      featured: false,
    },
  ];
  return (
    <section className="section locations-section" id="sucursales">
      <div className="section-header">
        <span className="eyebrow">Donde estamos</span>
        <h2>Sucursales, entregas y envios</h2>
        <p className="lead">Elige como quieres recibir tu minoxidil: recoge en sucursal, entrega personal o envio a domicilio.</p>
      </div>
      <div className="location-grid">
        {locations.map((loc, i) => (
          <div className={`location-card ${loc.featured ? "featured" : ""}`} key={i}>
            <span className="location-tag">{loc.tag}</span>
            <h3>{loc.title}</h3>
            <p className="location-desc">{loc.desc}</p>
            <span className="location-detail">{loc.detail}</span>
            <a className="location-link" href={loc.featured ? "/sucursales.html" : WHATSAPP}>
              {loc.featured ? "Ver sucursal →" : "Contactar por WhatsApp →"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const branches = [
    { zone: "Iztapalapa, CDMX", name: "Sucursal Guelatao", address: "Plaza Guelatao, Local 76, Pasillo 5", note: "Punto fisico para ver producto y resolver dudas." },
    { zone: "Nezahualcoyotl, EdoMex", name: "Oficinas Neza", address: "Oriente 10 #224, Colonia Reforma", note: "Apoyo en zona oriente, entregas y mayoreo." },
  ];
  const methods = [
    { label: "WhatsApp", value: "55-6938-0408", hint: "Respuesta rapida para paquetes y envios." },
    { label: "Horario", value: "Mar a Dom, 12PM - 5PM", hint: "Mejor escribir con ciudad y paquete." },
    { label: "Envio", value: "Todo Mexico", hint: "Cotizamos segun ciudad y codigo postal." },
    { label: "Pago", value: "Contra entrega o transferencia", hint: "Confirmamos total antes de pagar." },
  ];
  return (
    <section className="section contact-section" id="contacto">
      <div className="contact-inner">
        <div>
          <span className="eyebrow">Contacto</span>
          <h2>Escribenos y coordina tu pedido hoy</h2>
          <p className="lead">Respondemos rapido por WhatsApp. Solo dinos tu ciudad, el paquete que te interesa y si es para barba o cabello.</p>
          <div style={{ marginTop: 28 }}>
            <a className="btn btn-whatsapp btn-lg" href={WHATSAPP}>
              Enviar mensaje por WhatsApp
            </a>
          </div>
        </div>
        <div>
          <div className="branches-grid">
            {branches.map((b) => (
              <div className="branch-card" key={b.name}>
                <span className="zone">{b.zone}</span>
                <h3>{b.name}</h3>
                <address>{b.address}</address>
                <p>{b.note}</p>
              </div>
            ))}
          </div>
          <div className="contact-methods-grid">
            {methods.map((m) => (
              <div className="contact-method-card" key={m.label}>
                <span className="label">{m.label}</span>
                <span className="value">{m.value}</span>
                <span className="hint">{m.hint}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>{SITE.brand}</strong>
          <p>{SITE.description}</p>
          <a className="btn btn-whatsapp" href={WHATSAPP} style={{ display: "inline-flex" }}>
            WhatsApp 55-6938-0408
          </a>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <nav>
              {col.items.map((item) => (
                <a href="#" key={item}>{item}</a>
              ))}
            </nav>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        {SITE.brand} &copy; {new Date().getFullYear()} — Todos los derechos reservados. Producto Kirkland original. Envios a toda la Republica Mexicana.
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a className="float-wa" href={WHATSAPP} aria-label="WhatsApp" title="Escribenos por WhatsApp">
      <span className="float-wa-pulse" />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
      </svg>
    </a>
  );
}

export default App;
