# Marquer — Sitio web (bandejas plásticas para tomate)

Sitio estático (HTML/CSS/JS puro, sin frameworks) para catálogo + cotización por WhatsApp. 100% gratuito de operar.

## Estructura

```
index.html        página principal
css/styles.css     estilos
js/script.js       menú móvil, año automático, links de WhatsApp
img/               imágenes (partimos con un ícono referencial)
```

## Qué falta editar antes de publicar

1. **Precios** — en `index.html`, sección `#precios`, reemplaza los `$XXX` (marcados con "(editar)" en rojo) por tus precios reales por tramo de pallets.
2. **Ficha técnica del producto** — sección `#producto`. Los datos actuales (470x340x270mm, 840g, resistencia 18kg, etc.) son referenciales, tomados de la ficha de otro proveedor del rubro. Reemplázalos por los datos reales de tu bandeja apenas los tengas.
3. **Fotos** — reemplaza `img/bandeja-placeholder.svg` por fotos reales del producto (formato .jpg o .png, referenciadas en `index.html` donde dice `src="img/bandeja-placeholder.svg"`).
4. **WhatsApp** — el número `+56 9 6303 8624` ya está puesto en todos los botones (nav, hero, tabla de precios, contacto, botón flotante). Si cambia, se reemplaza el número `56963038624` en `index.html` y `js/script.js`.

## Ver el sitio en tu computador

Basta con abrir `index.html` con doble clic en cualquier navegador. No necesita servidor ni instalación.

## Publicar gratis (recomendado: Netlify)

1. Crea una cuenta gratis en [netlify.com](https://www.netlify.com).
2. Arrastra la carpeta `web_sales` completa a la pantalla de "Deploy" (drag & drop, sin necesidad de Git).
3. Netlify te da una URL gratuita tipo `nombre-random.netlify.app`. Pruébala.
4. Para usar tu dominio **marquer.cl**:
   - En Netlify: **Site settings → Domain management → Add custom domain** → escribe `marquer.cl`.
   - Netlify te mostrará los registros DNS a configurar (normalmente un registro **A** para `marquer.cl` apuntando a su IP, y un **CNAME** para `www.marquer.cl` apuntando a tu-sitio.netlify.app).
   - Entra a tu cuenta en [nic.cl](https://www.nic.cl) → administración del dominio `marquer.cl` → DNS, y agrega esos registros exactos que te dio Netlify.
   - La propagación puede tardar algunas horas (a veces hasta 24-48h).
   - Netlify emite el certificado HTTPS automáticamente una vez que el DNS propaga — no hay que hacer nada extra para eso.

### Alternativa: GitHub Pages
Si prefieres usar GitHub Pages en vez de Netlify, se sube esta misma carpeta a un repositorio de GitHub y se activa Pages en la configuración del repo. También es gratis y soporta dominio propio vía registros DNS (A/CNAME) en nic.cl.

## Próximos pasos posibles (no incluidos aún, quedan para más adelante)
- Formulario de contacto además del botón de WhatsApp.
- Cotizador de flete automático por región.
- Más de un producto/variante en el catálogo.
