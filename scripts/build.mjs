// Generador estático de Minoxidil Todo México (sitio NACIONAL).
// Sustituye la SPA de React: cada página sale como HTML completo en dist/.
// Uso: node scripts/build.mjs
import { mkdirSync, writeFileSync, copyFileSync, rmSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  WA_NUMBER, WA_DISPLAY, DOMAIN, CDMX_SITE, SHIPPING, UPDATED,
  wa, waGeneral, money, PRODUCTS, FAQ, COVERAGE, STEPS,
} from "../content/site-data.mjs";
import { GUIDES } from "../content/guides.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const LASTMOD = "2026-11-10";
const STORE_PHONE = "+525569380408";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ---------- markdown ligero ----------
function md(src) {
  const lines = src.split("\n");
  let html = "", list = null;
  const closeList = () => { if (list) { html += `</${list}>`; list = null; } };
  const inline = (t) => esc(t)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (/^## /.test(line)) { closeList(); html += `<h2>${inline(line.slice(3))}</h2>`; }
    else if (/^### /.test(line)) { closeList(); html += `<h3>${inline(line.slice(4))}</h3>`; }
    else if (/^- /.test(line)) { if (list !== "ul") { closeList(); html += "<ul>"; list = "ul"; } html += `<li>${inline(line.slice(2))}</li>`; }
    else if (/^\d+\.\s/.test(line)) { if (list !== "ol") { closeList(); html += "<ol>"; list = "ol"; } html += `<li>${inline(line.replace(/^\d+\.\s/, ""))}</li>`; }
    else if (line.trim() === "") { closeList(); }
    else { closeList(); html += `<p>${inline(line)}</p>`; }
  }
  closeList();
  return html;
}

// ---------- schemas ----------
const storeSchema = {
  "@type": "OnlineStore",
  "@id": `${DOMAIN}/#store`,
  name: "Minoxidil Todo México",
  url: `${DOMAIN}/`,
  description: "Tienda en línea de minoxidil Kirkland y productos para barba y cabello, con pedidos por WhatsApp y envío a todo México con tarifa fija.",
  telephone: STORE_PHONE,
  areaServed: { "@type": "Country", name: "México" },
  priceRange: "$240 - $2,000 MXN",
  currenciesAccepted: "MXN",
};
const websiteSchema = {
  "@type": "WebSite",
  "@id": `${DOMAIN}/#website`,
  name: "Minoxidil Todo México",
  url: `${DOMAIN}/`,
  inLanguage: "es-MX",
  publisher: { "@id": `${DOMAIN}/#store` },
};
const crumbs = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem", position: i + 1, name, item: `${DOMAIN}${path}`,
  })),
});

// ---------- layout ----------
function layout({ title, meta, path, schemas = [], body, crumbTrail = null }) {
  const url = `${DOMAIN}${path}`;
  const ld = JSON.stringify({ "@context": "https://schema.org", "@graph": [storeSchema, websiteSchema, ...schemas] });
  const crumbHtml = crumbTrail
    ? `<nav class="crumbs wrap" aria-label="Miga de pan">${crumbTrail.map(([n, p], i) =>
        i < crumbTrail.length - 1 ? `<a href="${p}">${esc(n)}</a> › ` : `<span>${esc(n)}</span>`).join("")}</nav>`
    : "";
  return `<!doctype html>
<html lang="es-MX">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(meta)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#0b7a44">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Minoxidil Todo México">
<meta property="og:locale" content="es_MX">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(meta)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${DOMAIN}/site-images/marcas-de-minoxidil.png">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%230b7a44'/%3E%3Ctext x='50' y='68' font-family='Arial' font-size='58' font-weight='bold' fill='white' text-anchor='middle'%3EM%3C/text%3E%3C/svg%3E">
<link rel="stylesheet" href="/assets/style.css">
<script type="application/ld+json">${ld}</script>
</head>
<body>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="/"><span class="mark">M</span><span>Minoxidil Todo México<small>Venta en línea · envío a todo el país</small></span></a>
    <nav class="main-nav" aria-label="Principal">
      <a href="/productos/">Productos</a>
      <a href="/guias/">Guías</a>
      <a href="/envios/">Envíos</a>
      <a href="/preguntas-frecuentes/">Preguntas frecuentes</a>
      <a href="/sucursales/">Sucursales</a>
    </nav>
    <a class="btn btn-wa btn-sm header-cta" href="${waGeneral}">WhatsApp</a>
  </div>
</header>
${crumbHtml}
<main>
${body}
</main>
<section class="libro-band" aria-label="Libro gratis">
  <div class="wrap libro-inner">
    <div>
      <p class="libro-eyebrow">Libro gratis · John Barbas</p>
      <h2>Barba con Método</h2>
      <p>Cómo elegir tu kit de minoxidil y usarlo bien, sin tirar dinero. Déjanos tu correo y te llega el PDF.</p>
    </div>
    <a class="libro-btn" href="https://libro.johnbarbas.com/?utm_source=minoxidiltodomexico&amp;utm_medium=sitio&amp;utm_campaign=libro-gratis">Quiero el libro gratis</a>
  </div>
</section>
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <h4>Minoxidil Todo México</h4>
      <p>Tienda en línea de minoxidil Kirkland y productos para barba y cabello. Pedidos por WhatsApp y envío nacional con tarifa fija de ${money(SHIPPING)}.</p>
      <p>WhatsApp: <a href="${waGeneral}" style="display:inline">${WA_DISPLAY}</a></p>
    </div>
    <div>
      <h4>Productos</h4>
      ${PRODUCTS.slice(0, 5).map((p) => `<a href="/productos/${p.slug}/">${esc(p.name)}</a>`).join("\n      ")}
      <a href="/productos/">Ver todo el catálogo</a>
    </div>
    <div>
      <h4>Guías</h4>
      ${GUIDES.slice(0, 5).map((g) => `<a href="/guias/${g.slug}/">${esc(g.title)}</a>`).join("\n      ")}
      <a href="/guias/">Todas las guías</a>
    </div>
    <div>
      <h4>Ayuda</h4>
      <a href="/envios/">Envíos a todo México</a>
      <a href="/preguntas-frecuentes/">Preguntas frecuentes</a>
      <a href="/sucursales/">Sucursales y recogida</a>
      <a href="/nosotros/">Nosotros</a>
      <a href="${CDMX_SITE}/">¿Estás en CDMX? Sitio local</a>
    </div>
  </div>
  <div class="wrap footer-bottom">Minoxidil Todo México © 2026 — Venta en línea con envío a toda la República Mexicana. Este sitio no sustituye la orientación de un dermatólogo.</div>
</footer>
<a class="float-wa" href="${waGeneral}" aria-label="Pedir por WhatsApp" title="Pedir por WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
</a>
</body>
</html>`;
}

const productCard = (p) => `
        <a class="p-card" href="/productos/${p.slug}/">
          <img src="/site-images/${p.image}" alt="${esc(p.name)}" loading="lazy">
          <span class="body">
            <span class="p-tag">${esc(p.tag)}</span>
            <span class="p-name">${esc(p.name)}</span>
            <span class="p-copy">${esc(p.intro.split(". ")[0])}.</span>
            <span class="p-price">${money(p.price)}${p.perBottle ? ` <small>(${money(p.perBottle)} por botella)</small>` : ""}</span>
            <span class="p-link">Ver producto →</span>
          </span>
        </a>`;

const guideCard = (g) => `
        <a class="g-card" href="/guias/${g.slug}/">
          <span class="eyebrow">Guía</span>
          <h3>${esc(g.title)}</h3>
          <p>${esc(g.excerpt)}</p>
        </a>`;

const pages = []; // {path, html}
const addPage = (path, html) => pages.push({ path, html });

// ---------- PORTADA (nacional) ----------
addPage("/", layout({
  title: "Minoxidil en México | Kirkland en línea con envío nacional $140",
  meta: "Compra minoxidil Kirkland en línea en México: paquetes de 1 a 12 meses, espuma, biotina, dermaroller y bálsamo. Pedido por WhatsApp, foto real antes de pagar y envío a todo el país por $140 fijos.",
  path: "/",
  body: `
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="hero-badge"><span class="dot"></span> Envíos a todo México — Pedidos por WhatsApp</span>
      <h1>Minoxidil Kirkland en México, directo a tu puerta</h1>
      <p class="lead">Elige tu paquete por meses, confirma tu pedido por WhatsApp con foto real del producto y recíbelo en cualquier estado. Precio claro, envío nacional de ${money(SHIPPING)} fijos y atención de una tienda real.</p>
      <div class="hero-actions">
        <a class="btn btn-wa" href="${waGeneral}">Pedir ahora por WhatsApp</a>
        <a class="btn btn-ghost" href="/productos/">Ver paquetes y precios</a>
      </div>
    </div>
    <div>
      <img class="hero-img" src="/site-images/marcas-de-minoxidil.png" alt="Presentaciones de minoxidil Kirkland que se venden en este sitio">
    </div>
  </div>
</section>
<section class="trust">
  <div class="wrap trust-grid">
    <div class="trust-item"><strong>${money(SHIPPING)} fijos</strong><span>Envío a cualquier estado</span></div>
    <div class="trust-item"><strong>Foto real</strong><span>Del empaque, lote y caducidad antes de pagar</span></div>
    <div class="trust-item"><strong>Precios publicados</strong><span>Por paquete y por botella, sin sorpresas</span></div>
    <div class="trust-item"><strong>32 estados</strong><span>Cobertura nacional por paquetería</span></div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Cómo funciona</span>
      <h2>Comprar minoxidil en línea, en 4 pasos</h2>
    </div>
    <div class="steps">
      ${STEPS.map((s, i) => `<div class="step"><span class="num">${i + 1}</span><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></div>`).join("\n      ")}
    </div>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Catálogo</span>
      <h2>Paquetes de minoxidil Kirkland y complementos</h2>
      <p class="lead">Del mes de prueba al tratamiento anual. Cada producto tiene su página con contenido, precio por botella y para quién conviene.</p>
    </div>
    <div class="product-grid">${PRODUCTS.map(productCard).join("")}
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Compra con respaldo</span>
      <h2>Así vendemos en línea (y así deberías exigir en cualquier tienda)</h2>
    </div>
    <div class="info-grid">
      <div class="info-card"><h3>Foto antes de pagar</h3><p>Te mandamos foto real del empaque que recibirás, con número de lote y fecha de caducidad visibles. Si algo no te convence, no pagas.</p></div>
      <div class="info-card"><h3>Total cerrado desde el inicio</h3><p>Producto + ${money(SHIPPING)} de envío. Nada de cargos que aparecen al final. En la sección de <a href="/envios/">envíos</a> están los tiempos estimados por zona.</p></div>
      <div class="info-card"><h3>Sin promesas mágicas</h3><p>No garantizamos resultados ni fechas: te explicamos qué esperar con honestidad en nuestras <a href="/guias/">guías</a> y te ayudamos a elegir el paquete que sí te conviene.</p></div>
    </div>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Guías</span>
      <h2>Información para decidir antes de comprar</h2>
    </div>
    <div class="guide-grid">${GUIDES.slice(0, 4).map(guideCard).join("")}
    </div>
    <p style="margin-top:20px"><a class="btn btn-ghost btn-sm" href="/guias/">Ver todas las guías</a></p>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Cobertura</span>
      <h2>Enviamos a todo México</h2>
      <p class="lead">Paquetería con guía de rastreo a ciudades y zonas extendidas de todo el país, con la misma tarifa fija.</p>
    </div>
    <div class="chips">${COVERAGE.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>
    <p style="margin-top:22px">¿Estás en la Ciudad de México? También puedes <a href="/sucursales/">recoger en la sucursal de Plaza Guelatao</a> o visitar el sitio local <a href="${CDMX_SITE}/">minoxidilencdmx.com</a> para precios y catálogo de la tienda física.</p>
  </div>
</section>`,
}));

// ---------- ÍNDICE DE PRODUCTOS ----------
addPage("/productos/", layout({
  title: "Productos | Minoxidil Kirkland, espuma, biotina y bálsamo en México",
  meta: "Catálogo nacional: paquetes de minoxidil Kirkland líquido de 1, 2, 3, 6 y 12 meses, espuma 5%, biotina Natrol, dermaroller 0.5 mm y bálsamo Maximus 12%. Precios publicados y envío a todo México.",
  path: "/productos/",
  crumbTrail: [["Inicio", "/"], ["Productos", "/productos/"]],
  schemas: [crumbs([["Inicio", "/"], ["Productos", "/productos/"]])],
  body: `
<section class="section" style="padding-top:28px">
  <div class="wrap">
    <span class="eyebrow">Catálogo nacional</span>
    <h1>Productos: minoxidil Kirkland y complementos</h1>
    <p class="lead">Precios vigentes publicados, con el precio por botella cuando aplica. Todos los pedidos se confirman por WhatsApp con foto real del empaque antes de pagar; el envío a cualquier estado cuesta ${money(SHIPPING)}.</p>
    <div class="product-grid" style="margin-top:26px">${PRODUCTS.map(productCard).join("")}
    </div>
    <div class="notice" style="margin-top:28px"><strong>¿No sabes qué paquete elegir?</strong> La <a href="/guias/paquetes-minoxidil-cual-elegir/">guía de paquetes</a> compara los de 1 a 12 meses por objetivo y presupuesto, sin venderte el más caro por defecto.</div>
  </div>
</section>`,
}));

// ---------- FICHAS DE PRODUCTO ----------
for (const p of PRODUCTS) {
  const others = PRODUCTS.filter((x) => x.slug !== p.slug && (p.slug.includes("kirkland") ? x.slug.includes("kirkland") : true)).slice(0, 3);
  const relGuides = GUIDES.filter((g) => p.guides.includes(g.slug));
  const brand = p.slug.includes("kirkland") ? "Kirkland Signature" : p.slug.includes("biotina") ? "Natrol" : p.slug.includes("balsamo") ? "Maximus Inc" : "Maximus Inc";
  addPage(`/productos/${p.slug}/`, layout({
    title: p.title,
    meta: p.meta,
    path: `/productos/${p.slug}/`,
    crumbTrail: [["Inicio", "/"], ["Productos", "/productos/"], [p.name, `/productos/${p.slug}/`]],
    schemas: [
      crumbs([["Inicio", "/"], ["Productos", "/productos/"], [p.name, `/productos/${p.slug}/`]]),
      {
        "@type": "Product",
        name: p.name,
        image: `${DOMAIN}/site-images/${p.image}`,
        description: p.meta,
        brand: { "@type": "Brand", name: brand },
        offers: {
          "@type": "Offer",
          url: `${DOMAIN}/productos/${p.slug}/`,
          priceCurrency: "MXN",
          price: p.price,
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@id": `${DOMAIN}/#store` },
        },
      },
    ],
    body: `
<section class="wrap">
  <div class="product-hero">
    <div><img src="/site-images/${p.image}" alt="${esc(p.name)}"></div>
    <div>
      <span class="eyebrow">${esc(p.tag)}</span>
      <h1>${esc(p.name)}</h1>
      <p class="lead">${esc(p.intro.split(". ")[0])}.</p>
      <div class="price-box">
        <div class="price-row">
          <span class="price-big">${money(p.price)}</span>
          ${p.perBottle ? `<span class="price-note">${money(p.perBottle)} por botella</span>` : ""}
        </div>
        <p class="price-note" style="margin:8px 0 14px">Más ${money(SHIPPING)} de envío a cualquier estado de México. En CDMX puedes recoger en sucursal sin pagar envío (ver <a href="/sucursales/">sucursales</a>).</p>
        <a class="btn btn-wa" href="${wa(`Hola, quiero pedir ${p.name} por ${money(p.price)}. Estoy en: `)}">Pedir por WhatsApp</a>
      </div>
      <table class="spec-table">
        <tr><th>Presentación</th><td>${esc(p.content)}</td></tr>
        <tr><th>Formato</th><td>${esc(p.format)}</td></tr>
        <tr><th>Precio</th><td>${money(p.price)} MXN${p.perBottle ? ` (${money(p.perBottle)} por botella)` : ""}</td></tr>
        <tr><th>Envío</th><td>${money(SHIPPING)} fijo a todo México, con guía de rastreo</td></tr>
      </table>
    </div>
  </div>
  <div class="article">
    <h2>Sobre este producto</h2>
    <p>${esc(p.intro)}</p>
    <ul class="check-list">
      ${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("\n      ")}
    </ul>
    <h2>¿Para quién es?</h2>
    <p>${esc(p.fit)}</p>
    <h2>Cómo pedirlo</h2>
    <p>Escríbenos por WhatsApp con tu ciudad y este producto. Te mandamos foto real del empaque (lote y caducidad visibles), confirmamos el total con envío y el tiempo estimado a tu código postal. Así de simple: sin registro, sin formularios.</p>
    <div class="cta-box">
      <h3 style="margin-top:0">${esc(p.name)} — ${money(p.price)}</h3>
      <p>Confirma disponibilidad y pide el tuyo. Si estás valorando otro paquete, compara primero en la <a href="/guias/paquetes-minoxidil-cual-elegir/">guía de paquetes</a>.</p>
      <a class="btn btn-wa" href="${wa(`Hola, quiero pedir ${p.name} por ${money(p.price)}. Estoy en: `)}">Pedir por WhatsApp</a>
    </div>
    ${relGuides.length ? `<div class="related"><h2>Guías relacionadas</h2>${relGuides.map((g) => `<a href="/guias/${g.slug}/">${esc(g.title)}</a>`).join("")}</div>` : ""}
    <div class="related"><h2>Otros productos</h2>${others.map((o) => `<a href="/productos/${o.slug}/">${esc(o.name)} — ${money(o.price)}</a>`).join("")}</div>
  </div>
</section>`,
  }));
}

// ---------- ÍNDICE DE GUÍAS ----------
addPage("/guias/", layout({
  title: "Guías de minoxidil | Compra en línea, barba, cabello y paquetes",
  meta: "Guías nacionales para comprar y usar minoxidil en México: compra segura en línea, barba, cabello, líquido vs espuma, paquetes por meses, complementos y mayoreo. Sin promesas mágicas.",
  path: "/guias/",
  crumbTrail: [["Inicio", "/"], ["Guías", "/guias/"]],
  schemas: [crumbs([["Inicio", "/"], ["Guías", "/guias/"]])],
  body: `
<section class="section" style="padding-top:28px">
  <div class="wrap">
    <span class="eyebrow">Guías</span>
    <h1>Guías para comprar y usar minoxidil en México</h1>
    <p class="lead">Información directa y honesta, escrita desde la tienda: qué revisar antes de pagar, cómo elegir presentación y paquete, y qué esperar de cada producto. Para temas de la tienda física en CDMX están las guías de <a href="${CDMX_SITE}/">minoxidilencdmx.com</a>.</p>
    <div class="guide-grid" style="margin-top:26px">${GUIDES.map(guideCard).join("")}
    </div>
  </div>
</section>`,
}));

// ---------- GUÍAS ----------
for (const g of GUIDES) {
  const rel = GUIDES.filter((x) => g.related.includes(x.slug));
  const prods = PRODUCTS.filter((p) => g.products.includes(p.slug));
  addPage(`/guias/${g.slug}/`, layout({
    title: `${g.title} | Minoxidil Todo México`,
    meta: g.meta,
    path: `/guias/${g.slug}/`,
    crumbTrail: [["Inicio", "/"], ["Guías", "/guias/"], [g.title, `/guias/${g.slug}/`]],
    schemas: [
      crumbs([["Inicio", "/"], ["Guías", "/guias/"], [g.title, `/guias/${g.slug}/`]]),
      {
        "@type": "Article",
        headline: g.title,
        description: g.meta,
        dateModified: LASTMOD,
        inLanguage: "es-MX",
        author: { "@id": `${DOMAIN}/#store` },
        publisher: { "@id": `${DOMAIN}/#store` },
        mainEntityOfPage: `${DOMAIN}/guias/${g.slug}/`,
      },
    ],
    body: `
<section class="section" style="padding-top:24px">
  <div class="wrap">
    <div class="article">
      <span class="eyebrow">Guía · ${esc(g.keyword)}</span>
      <h1>${esc(g.title)}</h1>
      <p class="article-meta">Actualizada el ${UPDATED} · Minoxidil Todo México</p>
      <p class="lead">${esc(g.excerpt)}</p>
      ${md(g.body)}
      <div class="cta-box">
        <h3 style="margin-top:0">¿Lo pedimos por WhatsApp?</h3>
        <p>Te mandamos foto real del producto, confirmamos el total con el envío de ${money(SHIPPING)} y el tiempo estimado a tu ciudad. Sin compromiso.</p>
        <a class="btn btn-wa" href="${wa(`Hola, leí la guía «${g.title}» y quiero información. Estoy en: `)}">Enviar mensaje por WhatsApp</a>
      </div>
      ${prods.length ? `<div class="related"><h2>Productos de esta guía</h2>${prods.map((p) => `<a href="/productos/${p.slug}/">${esc(p.name)} — ${money(p.price)}</a>`).join("")}</div>` : ""}
      ${rel.length ? `<div class="related"><h2>Seguir leyendo</h2>${rel.map((r) => `<a href="/guias/${r.slug}/">${esc(r.title)}</a>`).join("")}</div>` : ""}
    </div>
  </div>
</section>`,
  }));
}

// ---------- ENVÍOS ----------
addPage("/envios/", layout({
  title: "Envíos de minoxidil a todo México | $140 fijos, con rastreo",
  meta: "Cómo enviamos minoxidil a todo México: tarifa fija de $140, paqueterías FedEx, Estafeta y Redpack, tiempos estimados por zona, datos que necesitas y qué revisar al recibir.",
  path: "/envios/",
  crumbTrail: [["Inicio", "/"], ["Envíos", "/envios/"]],
  schemas: [crumbs([["Inicio", "/"], ["Envíos", "/envios/"]])],
  body: `
<section class="section" style="padding-top:28px">
  <div class="wrap">
    <span class="eyebrow">Envíos nacionales</span>
    <h1>Envío de minoxidil a todo México: ${money(SHIPPING)} fijos</h1>
    <p class="lead">Una sola tarifa para cualquier estado, sin costo extra por zonas extendidas. Trabajamos con FedEx, Estafeta y Redpack, siempre con número de guía para que rastrees tu paquete.</p>
    <div class="steps" style="margin:30px 0">
      ${STEPS.map((s, i) => `<div class="step"><span class="num">${i + 1}</span><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></div>`).join("\n      ")}
    </div>
    <div class="article">
      <h2>Tiempos estimados por zona</h2>
      <p>Son los tiempos que manejamos con las paqueterías; al cotizar por WhatsApp te confirmamos el estimado para tu código postal antes de que pagues.</p>
      <table class="spec-table">
        <tr><th>CDMX y área metropolitana</th><td>1 a 2 días hábiles</td></tr>
        <tr><th>Ciudades principales (Monterrey, Guadalajara, Puebla…)</th><td>2 a 3 días hábiles</td></tr>
        <tr><th>Resto del país y zonas extendidas</th><td>3 a 5 días hábiles</td></tr>
      </table>
      <h2>Qué datos necesitamos de ti</h2>
      <ul class="check-list">
        <li>Nombre completo de quien recibe.</li>
        <li>Calle y número, colonia, código postal, municipio y estado.</li>
        <li>Referencias útiles: color de fachada, entre qué calles, un negocio cercano.</li>
        <li>Teléfono activo, por si la paquetería necesita llamarte.</li>
      </ul>
      <p>El error más común es un código postal que no coincide con la colonia: revísalo antes de enviarlo y tu paquete no se detiene.</p>
      <h2>Cobertura</h2>
      <p>Enviamos con frecuencia a Monterrey, Guadalajara, Puebla, Querétaro, Mérida, Tijuana, León y Toluca, y también llegamos a zonas extendidas de Michoacán, Guerrero, Oaxaca, Chiapas y la sierra de Chihuahua. En corto: a los 32 estados.</p>
      <div class="chips">${COVERAGE.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>
      <h2>Al recibir tu paquete</h2>
      <ul class="check-list">
        <li>Abre el paquete y revisa que las botellas o presentaciones estén en buen estado.</li>
        <li>Compara lote y fecha de caducidad con la foto que te mandamos antes de pagar.</li>
        <li>Guarda la caja y las etiquetas los primeros días, por cualquier aclaración.</li>
        <li>Guarda las botellas en un lugar fresco y seco, lejos del sol.</li>
      </ul>
      <h2>¿Estás en la Ciudad de México?</h2>
      <p>Puedes saltarte el envío: recoge tu pedido en la <a href="/sucursales/">sucursal de Plaza Guelatao</a> y paga ahí mismo. Para catálogo y temas de la tienda física visita <a href="${CDMX_SITE}/">minoxidilencdmx.com</a>.</p>
      <div class="cta-box">
        <h3 style="margin-top:0">Cotiza tu envío en un mensaje</h3>
        <p>Mándanos tu ciudad y el paquete que te interesa; te confirmamos total y tiempo estimado.</p>
        <a class="btn btn-wa" href="${wa("Hola, quiero cotizar un envío de minoxidil. Estoy en: ")}">Cotizar por WhatsApp</a>
      </div>
    </div>
  </div>
</section>`,
}));

// ---------- PREGUNTAS FRECUENTES ----------
addPage("/preguntas-frecuentes/", layout({
  title: "Preguntas frecuentes | Comprar minoxidil en línea en México",
  meta: "Respuestas directas sobre comprar minoxidil en línea: envíos a todo México por $140, tiempos, pagos, cómo verificar el producto, paquetes recomendados y mayoreo.",
  path: "/preguntas-frecuentes/",
  crumbTrail: [["Inicio", "/"], ["Preguntas frecuentes", "/preguntas-frecuentes/"]],
  schemas: [
    crumbs([["Inicio", "/"], ["Preguntas frecuentes", "/preguntas-frecuentes/"]]),
    { "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
  body: `
<section class="section" style="padding-top:28px">
  <div class="wrap">
    <span class="eyebrow">Preguntas frecuentes</span>
    <h1>Lo que todos preguntan antes de comprar minoxidil en línea</h1>
    <p class="lead">Respuestas cortas y directas. Si tu duda no está aquí, pregúntanos por WhatsApp: ${WA_DISPLAY}.</p>
    <div class="faq-list" style="margin-top:26px">
      ${FAQ.map((f) => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join("\n      ")}
    </div>
    <div class="notice" style="margin-top:26px;max-width:820px"><strong>Nota de honestidad:</strong> el minoxidil es un medicamento tópico. Esta página vende productos y explica su uso general; no sustituye el diagnóstico ni la orientación de un dermatólogo.</div>
  </div>
</section>`,
}));

// ---------- SUCURSALES / RECOGIDA ----------
addPage("/sucursales/", layout({
  title: "Sucursales y recogida | Plaza Guelatao, CDMX — Minoxidil Todo México",
  meta: "Punto de recogida de Minoxidil Todo México: sucursal Plaza Guelatao (Local 76, Pasillo 5, Iztapalapa), martes a sábado de 12:30 a 4:30 pm. Confirma disponibilidad por WhatsApp antes de venir.",
  path: "/sucursales/",
  crumbTrail: [["Inicio", "/"], ["Sucursales", "/sucursales/"]],
  schemas: [
    crumbs([["Inicio", "/"], ["Sucursales", "/sucursales/"]]),
    {
      "@type": "Store",
      name: "Minoxidil Todo México — Sucursal Plaza Guelatao (punto de recogida)",
      url: `${DOMAIN}/sucursales/`,
      telephone: STORE_PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plaza Guelatao, Local 76, Pasillo 5, Calz. Ignacio Zaragoza 406",
        addressLocality: "Iztapalapa",
        addressRegion: "Ciudad de México",
        postalCode: "09100",
        addressCountry: "MX",
      },
      geo: { "@type": "GeoCoordinates", latitude: 19.3861, longitude: -99.0363 },
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "12:30", closes: "16:30",
      }],
    },
  ],
  body: `
<section class="section" style="padding-top:28px">
  <div class="wrap">
    <span class="eyebrow">Recogida en tienda</span>
    <h1>Sucursal Plaza Guelatao: el punto de recogida en CDMX</h1>
    <p class="lead">Este sitio vende en línea a todo México, pero si estás en la Ciudad de México puedes recoger tu pedido en la sucursal y pagar ahí mismo, sin costo de envío.</p>
    <div class="info-grid" style="margin-top:26px">
      <div class="info-card dark">
        <h3>Sucursal Plaza Guelatao</h3>
        <p>Plaza Guelatao, Local 76, Pasillo 5.<br>Calz. Ignacio Zaragoza 406, Col. Juan Escutia, Iztapalapa.<br>Cerca del Metro Guelatao, Línea A.</p>
        <p><strong>Horario: martes a sábado, 12:30 a 4:30 pm.</strong></p>
      </div>
      <div class="info-card">
        <h3>Antes de venir</h3>
        <p>Confirma disponibilidad y horario por WhatsApp: aparta tu producto y no haces el viaje en vano. Al recoger puedes revisar empaque, lote y caducidad en persona antes de pagar.</p>
        <p><a class="btn btn-wa btn-sm" href="${wa("Hola, quiero recoger mi pedido en Plaza Guelatao. Me interesa: ")}">Confirmar por WhatsApp</a></p>
      </div>
      <div class="info-card">
        <h3>¿Buscas la tienda física de CDMX?</h3>
        <p>Precios de mostrador, catálogo completo de la sucursal y temas locales están en el sitio de la tienda: <a href="${CDMX_SITE}/">minoxidilencdmx.com</a>. Este sitio nacional es para comprar en línea y recibir en tu estado.</p>
      </div>
    </div>
    <div class="article" style="margin-top:30px">
      <h2>Zona oriente del Estado de México</h2>
      <p>Para Nezahualcóyotl y la zona oriente coordinamos entregas por WhatsApp según disponibilidad. Escríbenos con tu colonia y te decimos la opción más práctica: entrega coordinada, recogida en sucursal o envío por paquetería.</p>
    </div>
  </div>
</section>`,
}));

// ---------- NOSOTROS ----------
addPage("/nosotros/", layout({
  title: "Nosotros | Minoxidil Todo México, tienda en línea",
  meta: "Quiénes somos: una tienda mexicana en línea especializada en minoxidil Kirkland y cuidado de barba y cabello. Vendemos por WhatsApp con foto real antes de pagar y envío a todo México.",
  path: "/nosotros/",
  crumbTrail: [["Inicio", "/"], ["Nosotros", "/nosotros/"]],
  schemas: [crumbs([["Inicio", "/"], ["Nosotros", "/nosotros/"]])],
  body: `
<section class="section" style="padding-top:28px">
  <div class="wrap">
    <span class="eyebrow">Nosotros</span>
    <h1>Minoxidil Todo México: la tienda en línea</h1>
    <div class="article">
      <p>Somos una tienda mexicana en línea especializada en minoxidil Kirkland y en productos de cuidado para barba y cabello. Este es el sitio nacional del negocio: aquí compras desde cualquier estado, con precios publicados, pedido por WhatsApp y envío con tarifa fija de ${money(SHIPPING)}.</p>
      <p>También tenemos presencia física en la Ciudad de México: la sucursal de Plaza Guelatao (Iztapalapa) funciona como punto de recogida para quien prefiere ver el producto en persona. Todo lo local de esa tienda —catálogo de mostrador, precios de sucursal y guías locales— vive en su propio sitio, <a href="${CDMX_SITE}/">minoxidilencdmx.com</a>, para no mezclar dos formas de comprar distintas.</p>
      <h2>Cómo vendemos</h2>
      <ul class="check-list">
        <li>Sin registro ni formularios: todo el pedido se coordina por WhatsApp, con una persona real.</li>
        <li>Foto real del empaque, con lote y fecha de caducidad, antes de que pagues.</li>
        <li>Total cerrado desde el inicio: producto + ${money(SHIPPING)} de envío, sin cargos sorpresa.</li>
        <li>Guías honestas: explicamos qué esperar de cada producto y cuándo un complemento no te conviene, aunque lo vendamos.</li>
      </ul>
      <h2>Lo que no hacemos</h2>
      <ul class="check-list">
        <li>No prometemos resultados ni fechas exactas: la respuesta al minoxidil varía por persona.</li>
        <li>No publicamos reseñas que no podamos respaldar ni contadores inventados de clientes.</li>
        <li>No vendemos el bálsamo de concentración alta sin confirmar antes tu experiencia con minoxidil.</li>
      </ul>
      <p>Si quieres conocernos comprando, empieza por el <a href="/productos/">catálogo</a> o por la guía de <a href="/guias/como-comprar-minoxidil-kirkland-en-linea/">compra segura en línea</a>: ahí está, paso a paso, exactamente lo que hacemos con cada pedido.</p>
    </div>
  </div>
</section>`,
}));

// ---------- SALIDA ----------
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });

const usedImages = new Set(["marcas-de-minoxidil.png", ...PRODUCTS.map((p) => p.image)]);
for (const img of usedImages) {
  const src = join(ROOT, "public", "site-images", img);
  if (!existsSync(src)) throw new Error(`Falta imagen: ${img}`);
  mkdirSync(join(DIST, "site-images"), { recursive: true });
  copyFileSync(src, join(DIST, "site-images", img));
}
mkdirSync(join(DIST, "assets"), { recursive: true });
copyFileSync(join(ROOT, "assets", "style.css"), join(DIST, "assets", "style.css"));

for (const { path, html } of pages) {
  const dir = path === "/" ? DIST : join(DIST, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ path }) => `  <url><loc>${DOMAIN}${path}</loc><lastmod>${LASTMOD}</lastmod></url>`).join("\n")}
</urlset>
`;
writeFileSync(join(DIST, "sitemap.xml"), sitemap);
writeFileSync(join(DIST, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`);

console.log(`Páginas generadas: ${pages.length}`);
for (const { path } of pages) console.log("  " + path);
