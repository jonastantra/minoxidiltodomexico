# 🚀 GUÍA DE DESPLIEGUE PARA HOSTING COMPARTIDO

## 📋 INSTRUCCIONES PASO A PASO

### 1️⃣ **PREPARAR ARCHIVOS PARA SUBIR**

```bash
# Ejecuta este comando en tu terminal:
npm run deploy:prepare
```

Esto creará una carpeta `dist/` con todos los archivos optimizados.

### 2️⃣ **SUBIR ARCHIVOS AL HOSTING**

1. **Accede a tu panel de hosting** (cPanel, Plesk, etc.)
2. **Ve al administrador de archivos** o usa FTP
3. **Navega a la carpeta public_html** (o www, htdocs según tu hosting)
4. **Sube TODO el contenido de la carpeta `dist/`** (no la carpeta, solo su contenido)

### 3️⃣ **ESTRUCTURA DE ARCHIVOS EN EL SERVIDOR**

```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── vendor-[hash].js
└── vite.svg
```

## 🌐 HOSTINGS COMPATIBLES

✅ **FUNCIONA EN:**
- **Hostinger** - Hosting compartido
- **GoDaddy** - Hosting compartido  
- **Bluehost** - Hosting compartido
- **SiteGround** - Hosting compartido
- **HostGator** - Hosting compartido
- **Namecheap** - Hosting compartido
- **1&1 IONOS** - Hosting compartido
- **DreamHost** - Hosting compartido

## 🔧 CONFIGURACIONES INCLUIDAS

### ✅ **Archivo .htaccess**
- ✅ Redirecciones para SPA (Single Page Application)
- ✅ Caché optimizado para mejor rendimiento
- ✅ Compresión GZIP automática
- ✅ Headers de seguridad

### ✅ **Build Optimizado**
- ✅ Rutas relativas (funciona en subcarpetas)
- ✅ Assets con hash para caché
- ✅ Código minificado y comprimido
- ✅ Chunks separados para carga rápida

## 🚨 SOLUCIÓN DE PROBLEMAS COMUNES

### **Problema: Página en blanco**
**Solución:** Verifica que subiste TODO el contenido de `dist/`, no la carpeta completa.

### **Problema: CSS no carga**
**Solución:** Asegúrate de que el archivo `.htaccess` esté en la raíz del sitio.

### **Problema: Rutas no funcionan**
**Solución:** Verifica que tu hosting soporte archivos `.htaccess` y mod_rewrite.

### **Problema: Imágenes no cargan**
**Solución:** Todas las imágenes son externas (Pexels), verifica tu conexión.

## 📞 SOPORTE TÉCNICO

Si tienes problemas con el despliegue:

1. **Verifica** que tu hosting soporte:
   - ✅ Archivos `.htaccess`
   - ✅ mod_rewrite
   - ✅ PHP (opcional, solo para .htaccess)

2. **Contacta** a tu proveedor de hosting si:
   - ❌ Las rutas no funcionan
   - ❌ Los archivos no se comprimen
   - ❌ Hay errores 500

## 🎯 COMANDOS ÚTILES

```bash
# Desarrollo local
npm run dev

# Build para hosting compartido
npm run build:shared

# Preparar archivos para subir
npm run deploy:prepare

# Vista previa local del build
npm run preview
```

## ✅ CHECKLIST FINAL

- [ ] Ejecuté `npm run deploy:prepare`
- [ ] Subí TODO el contenido de `dist/` a `public_html/`
- [ ] El archivo `.htaccess` está en la raíz
- [ ] Probé que el sitio carga correctamente
- [ ] Verifiqué que las rutas funcionan
- [ ] Confirmé que WhatsApp funciona

¡Tu sitio web está listo para recibir clientes! 🎉