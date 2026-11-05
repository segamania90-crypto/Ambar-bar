# Ámbar – Landing Page de una Coctelería

[English](README.md) | Español

Una web de una sola página para una coctelería ficticia en Madrid. Es un proyecto de portafolio: lo construí para practicar diseño responsivo, marcado accesible y un flujo de formulario de reservas. La coctelería, su carta y las reseñas son contenido de demostración.

## Qué hay en la página

- **Hero** con el nombre del local, eslogan y dos llamadas a la acción (reservar mesa, ver la carta)
- Sección **El bar** con una breve historia y cifras clave
- **Carta** en tres categorías: cócteles de firma, vinos y burbujas, para picar (con precios)
- **Galería** de seis fotos
- **Reseñas**, claramente marcadas como contenido de demostración
- **Ubicación y horarios** con Google Maps embebido
- **Formulario de reserva** más acceso directo a WhatsApp
- Cabecera fija con navegación interna y menú hamburguesa en móvil

## Notas técnicas

- HTML, CSS y JavaScript vainilla, sin paso de build
- Layout responsivo, viewport mobile-first
- Imágenes de la sección El bar y la galería servidas como WebP con fallback JPG (`<picture>`), carga perezosa y width/height explícitos para evitar saltos de layout
- Accesibilidad básica: `lang="es"`, textos `alt` descriptivos, campos de formulario etiquetados, `aria-label` en controles solo icono, `role="status"` para feedback del formulario
- SEO básico: title de página y meta description
- Web fonts de Google Fonts (Cormorant Garamond, Inter)

## Estructura del proyecto

```
ambar-bar/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── img/          # fotos (WebP + JPG para las secciones El bar y Galería)
```

## Ejecutar en local

Abre `index.html` en el navegador, o sirve la carpeta con Python:

```bash
python -m http.server 8000
```

Después ve a `http://localhost:8000`.

## Notas de configuración

El formulario de reserva envía a [Formspree](https://formspree.io). El endpoint en `index.html` es un placeholder (`TU_ID_DE_FORMSPREE`), así que el formulario no envía nada hasta que lo reemplaces por tu propio ID de formulario.

El botón de WhatsApp usa un número placeholder (`34600000000`) en `js/script.js`. Sustitúyelo por uno real para que el acceso directo funcione.

## Sobre este proyecto

Demo de portafolio, no un negocio real. Nombre, dirección, carta, precios y reseñas son ficticios.