# Marquer — Sitio web (bandejas plásticas para tomate)

Sitio estático (HTML/CSS/JS puro, sin frameworks) para catálogo + cotización por WhatsApp. 100% gratuito de operar.

## Estado actual (deploy real)

- **Repo:** https://github.com/ymucarquerp/web_sales
- **Hosting:** Render (static site, plan free), auto-deploy activado en la rama `main`
- **URL pública actual:** https://marquer.onrender.com
- **Dominio propio (`marquer.cl`):** pendiente de conectar en Render → Settings → Custom Domains, y agregar los registros DNS resultantes en NIC.cl

Para publicar cambios: edita los archivos, haz commit y `git push` — Render redespliega automático en ~1 minuto.

```
git add -A
git commit -m "describe el cambio"
git push
```

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

## Publicar gratis (ya en uso: Render)

Ya está desplegado — ver "Estado actual" arriba. Pasos que ya se hicieron:

1. Repo en GitHub (`ymucarquerp/web_sales`).
2. Static site creado en Render, apuntando a ese repo, rama `main`, auto-deploy activado.
3. Pendiente conectar el dominio **marquer.cl**:
   - Dashboard de Render → el servicio `marquer` → **Settings → Custom Domains → Add Custom Domain** → escribe `marquer.cl` (y `www.marquer.cl` si quieres ambos).
   - Render mostrará los registros DNS exactos a configurar (A/CNAME).
   - Entra a tu cuenta en [nic.cl](https://www.nic.cl) → administración del dominio `marquer.cl` → DNS, y agrega esos registros.
   - La propagación puede tardar horas (a veces hasta 24-48h).
   - Render emite el certificado HTTPS automático una vez que el DNS propaga.

### Alternativas (no en uso actualmente)
Netlify (drag & drop, sin git) o GitHub Pages también sirven si en algún momento se quiere migrar el hosting — ambas son gratis y soportan dominio propio vía DNS en nic.cl.

## Próximos pasos posibles (no incluidos aún, quedan para más adelante)
- Formulario de contacto además del botón de WhatsApp.
- Cotizador de flete automático por región.
- Más de un producto/variante en el catálogo.
