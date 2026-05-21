# Contexto del proyecto

Este archivo existe para poder continuar el trabajo desde varias computadoras sin perder decisiones, estructura ni enfoque comercial.

## Sitio

- Proyecto: Minoxidil Todo Mexico.
- Dominio esperado: https://www.minoxidiltodomexico.com/
- Repo: https://github.com/jonastantra/minoxidiltodomexico
- WhatsApp principal: 55-6938-0408.
- Framework: React + Vite.
- Entrada principal: `src/App.tsx`.
- Estilos principales: `src/index.css`.
- Imagenes locales: `public/site-images/`.

## Enfoque actual

El sitio busca posicionar y convertir para busquedas de minoxidil en Mexico:

- Minoxidil Kirkland original.
- Minoxidil para barba.
- Minoxidil para cabello.
- Minoxidil liquido vs espuma.
- Paquetes de 1, 2, 3, 6 y 12 meses.
- Biotina, dermaroller y balsamo.
- Envio nacional.
- CDMX, Estado de Mexico, Neza, Guelatao y zona oriente.
- Mayoreo.

## Cambios recientes importantes

1. Se redisenaron las tarjetas de producto.
   - Precio visible.
   - Precio por botella cuando aplica.
   - Formato del producto.
   - Ideal para.
   - CTA directo a WhatsApp por producto.

2. Se amplio el blog.
   - Paso de 15 a 31 entradas.
   - Las entradas ya no son solo previews.
   - Cada entrada tiene URL por hash: `#blog/slug-de-la-entrada`.
   - Cada pagina de entrada tiene:
     - titulo,
     - extracto,
     - keyword,
     - cuerpo,
     - bloque "Mi forma de verlo",
     - checklist,
     - errores comunes,
     - consejos practicos,
     - mensaje listo para WhatsApp,
     - entradas relacionadas.

3. Se adapto contacto/footer tomando como referencia `minoxidilencdmx.com`.
   - Sucursal Guelatao.
   - Oficinas Neza.
   - Horario: martes a domingo, 12PM a 5PM.
   - Metodos: WhatsApp, horario, envios, pago.
   - Footer con columnas: Contacto, Compra, Guias y Zonas.

## Como funciona el blog

El blog vive dentro de `src/App.tsx`.

Funciones clave:

- `slugify(value)`: convierte titulos en slugs.
- `postPath(post)`: genera rutas tipo `#blog/comprar-minoxidil...`.
- `activePostPage`: detecta si el hash actual es una entrada.
- `BlogPostPage`: renderiza la pagina completa del articulo.
- `ARTICLE_GUIDES`: agrega contenido profundo por categoria.
- `getArticleGuide(post)`: elige la guia segun `post.category`.
- `whatsappScript(post)`: genera texto sugerido para WhatsApp.

Categorias usadas:

- Compra
- Rutina
- Paquetes
- Producto
- Envio
- Local
- Cabello
- Complementos
- Mayoreo
- Guia

Si agregas una entrada nueva, intenta poner:

```ts
{
  title: "...",
  excerpt: "...",
  body: "...",
  category: "Compra",
  keyword: "keyword objetivo"
}
```

## Importante para SEO

- No volver a dejar entradas de una sola linea.
- Mantener tono humano, directo y comercial, como vendedor que explica sin marear.
- Evitar promesas medicas absolutas.
- Enfatizar compra guiada, presentacion, precio, envio, fotos reales y rutina.
- Para nuevos articulos, cubrir intencion de busqueda completa:
  - que es,
  - para quien conviene,
  - que revisar,
  - errores comunes,
  - como pedirlo por WhatsApp.

## Contacto y datos comerciales

Sucursal Guelatao:

- Plaza Guelatao, Local 76, Pasillo 5.
- Iztapalapa, Ciudad de Mexico.

Oficinas Neza:

- Oriente 10 #224, Colonia Reforma.
- Nezahualcoyotl, Estado de Mexico.

WhatsApp:

- 55-6938-0408.

Horario:

- Martes a domingo, 12PM a 5PM.

## Despliegue

El repo esta conectado a GitHub:

```bash
git remote -v
```

Remoto actual:

```text
https://github.com/jonastantra/minoxidiltodomexico.git
```

Flujo usado para desplegar:

```bash
npm run build
git add src/App.tsx src/index.css README.md PROJECT_CONTEXT.md
git commit -m "Mensaje claro"
git push origin main
```

Si el hosting esta conectado a GitHub, el push a `main` dispara el deploy.

## Verificacion antes de subir

Ejecutar:

```bash
npm run build
```

Revisar en local:

```bash
npm run dev
```

URLs utiles:

- Home/productos: `http://127.0.0.1:5173/#productos`
- Blog: `http://127.0.0.1:5173/#blog`
- Entrada ejemplo: `http://127.0.0.1:5173/#blog/comprar-minoxidil-kirkland-original-senales-de-una-compra-seria`
- Contacto: `http://127.0.0.1:5173/#contacto`

## Ultimo estado conocido

- Build pasa.
- Blog con rutas individuales funciona.
- Entradas relacionadas navegan a otra entrada.
- Volver al blog funciona.
- Contacto/footer responsive revisados.
- No hay overflow horizontal en movil.
