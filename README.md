# Minoxidil Todo Mexico

Micrositio estatico para venta de Minoxidil Kirkland con enfoque nacional: paquetes por mes, compra guiada por WhatsApp, envios a Mexico, sucursales y contenido SEO.

- Dominio: https://www.minoxidiltodomexico.com/
- WhatsApp: 55-6938-0408
- Enfoque: paquetes claros, envio rastreable y asesoria practica antes de comprar.
- Blog: 31 entradas con rutas propias por hash (`#blog/slug-de-entrada`).
- Contacto: Sucursal Guelatao, Oficinas Neza, horario, envios y footer completo.

## Contexto del proyecto

Lee [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) antes de continuar en otra computadora. Ahi esta documentado que se cambio, como funciona el blog, como desplegar y que partes no conviene romper.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Flujo rapido en otra computadora

```bash
git clone https://github.com/jonastantra/minoxidiltodomexico.git
cd minoxidiltodomexico
npm install
npm run dev
```

Para publicar cambios:

```bash
npm run build
git add .
git commit -m "Descripcion del cambio"
git push origin main
```

Si el hosting esta conectado a GitHub, el push a `main` dispara el despliegue.
