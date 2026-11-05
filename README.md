# Ámbar – Cocktail Bar Landing Page

English | [Español](README.es.md)

A one-page website for a fictional cocktail bar in Madrid. This is a portfolio project: I built it to practice responsive layout, accessible markup and a booking-form workflow. The bar, its menu and the reviews are demo content.

## What's on the page

- **Hero** with the bar's name, slogan and two calls to action (book a table, see the menu)
- **About** section with a short story and key numbers
- **Menu** in three categories: signature cocktails, wine and sparkling, small plates (with prices)
- **Gallery** of six photos
- **Reviews**, clearly marked as demo content
- **Location and opening hours** with an embedded Google Map
- **Booking form** plus a WhatsApp shortcut
- Sticky header with in-page navigation and a mobile burger menu

## Technical notes

- Plain HTML, CSS and vanilla JavaScript, no build step
- Responsive layout, mobile-first viewport setup
- About and gallery images served as WebP with JPG fallback (`<picture>`), lazy loading and explicit width/height to limit layout shift
- Accessibility basics: `lang="es"`, descriptive `alt` text, labelled form fields, `aria-label` on icon-style controls, `role="status"` for form feedback
- SEO basics: page title and meta description
- Web fonts from Google Fonts (Cormorant Garamond, Inter)

## Project structure

```
ambar-bar/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── img/          # photos (WebP + JPG for the about and gallery sections)
```

## Run locally

Open `index.html` in a browser, or serve the folder with Python:

```bash
python -m http.server 8000
```

Then go to `http://localhost:8000`.

## Setup notes

The booking form posts to [Formspree](https://formspree.io). The endpoint in `index.html` is a placeholder (`TU_ID_DE_FORMSPREE`), so the form does not send anything until you replace it with your own form ID.

The WhatsApp button uses a placeholder number (`34600000000`) in `js/script.js`. Replace it with a real number to make the shortcut work.

## About this project

Portfolio demo, not a real business. Business name, address, menu, prices and reviews are fictional.
