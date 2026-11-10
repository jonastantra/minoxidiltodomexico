# Minoxidil Todo México — sitio nacional (estático)

Sitio **nacional** del negocio: venta en línea de minoxidil Kirkland y productos
para barba y cabello, pedidos por WhatsApp y envío a todo México ($140 fijos).
El sitio local de la tienda física en CDMX es otro: minoxidilencdmx.com.

Desde el 10-nov-2026 el sitio ya no es una SPA de React: es un **generador
estático** (`scripts/build.mjs` + `content/`) que produce HTML completo por
página en `dist/`, para que Google indexe cada producto y cada guía con su
propia URL. Vercel despliega con `npm run build` y sirve `dist/`
(ver `vercel.json`: cleanUrls + trailingSlash).

## Estructura

- `content/site-data.mjs` — productos (9), precios, FAQ, cobertura, pasos.
- `content/guides.mjs` — las 7 guías nacionales.
- `assets/style.css` — única hoja de estilos (sin frameworks).
- `scripts/build.mjs` — generador de las 23 páginas + sitemap + robots.
- `scripts/audit.mjs` — auditoría: títulos/metas únicos, 1 H1 por página,
  canonical, enlaces internos, páginas huérfanas, claims y similitud vs CDMX.
- `public/site-images/` — imágenes fuente; el build copia solo las usadas.

## Comandos

```bash
npm run build   # genera dist/
npm run audit   # audita dist/ (correr después del build)
```

## Reglas del sitio

- Precios publicados vigentes en `content/site-data.mjs`: no cambiarlos aquí
  sin cambiarlos en el negocio.
- Envío nacional $140 fijo. Pedidos por WhatsApp +52 1 56 4198 9504.
- Temas locales de CDMX (precios de mostrador, sucursal, guías locales) NO van
  aquí: van en minoxidilencdmx.com. Aquí solo una mención con enlace.
- Horario de sucursal confirmado: martes a sábado, 12:30 a 4:30 pm.
- Cero promesas médicas o de resultados; cero claims no verificables.
