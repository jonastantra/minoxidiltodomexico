# Contexto del proyecto — Minoxidil Todo México

## Identidad

- Sitio NACIONAL (venta en línea, todo México). Dominio más viejo del negocio
  (2018). El sitio LOCAL de la tienda física es minoxidilencdmx.com: no mezclar
  enfoques. CDMX = sucursal/mostrador; Todo México = en línea/envío nacional.
- Repo: jonastantra/minoxidiltodomexico · Hosting: Vercel (push a main = deploy).
- Pedidos: WhatsApp del negocio +52 1 56 4198 9504 (wa.me/5215641989504).
- Envío nacional: $140 fijos, FedEx/Estafeta/Redpack, con guía.
- Sucursal (recogida): Plaza Guelatao, Local 76, Pasillo 5, Iztapalapa, CDMX.
  Horario confirmado por John el 10-nov-2026: **martes a sábado, 12:30–16:30**.

## Precios publicados vigentes

| Producto | Precio |
|---|---|
| Kirkland líquido 1 mes | $250 |
| Kirkland líquido 2 meses | $450 |
| Kirkland líquido 3 meses | $600 |
| Kirkland líquido 6 meses | $1,100 |
| Kirkland líquido 12 meses | $2,000 |
| Kirkland espuma 6 meses | $1,850 |
| Biotina Natrol 10,000 mcg | $450 |
| Dermaroller 0.5 mm | $240 |
| Bálsamo Maximus 12% | $480 |

## Arquitectura (desde 10-nov-2026)

Generador estático en Node sin dependencias. Antes era una SPA React/Vite sin
router: Google veía un cascarón vacío, el sitemap tenía 1 URL y las guías no
tenían URL propia. Ahora hay 23 URLs reales (portada, índice y 9 productos,
índice y 7 guías, envíos, FAQ, sucursales, nosotros), cada una con title/meta
únicos, un H1, canonical propio, schema diferenciado (OnlineStore con
areaServed MX; la sucursal solo como punto de recogida con su openingHours) y
auditoría automática (`npm run audit`).

La SPA anterior (src/, componentes) y sus claims («100% original», «+500
clientes», testimonios de iniciales) se retiraron: no eran verificables.

## Medición

La SPA no traía píxel de Meta ni GTM (verificado en el código el 10-nov-2026):
no había medición que conservar. Si se instala medición, un solo GTM por sitio,
como en los demás sitios del negocio.
