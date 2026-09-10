# av-skallet

Landing page del estudio de desarrollo de software av-skallet. Construida con [Astro](https://astro.build) (salida 100% estática) + Tailwind CSS, con una isla de React solo para el menú móvil.

## Desarrollo

```bash
pnpm install
pnpm dev       # servidor de desarrollo en http://localhost:4321
pnpm build     # build de producción a dist/
pnpm preview   # sirve el build de producción localmente
pnpm check     # type-check de archivos .astro/.ts
pnpm lint      # ESLint
```

## Estructura

- `src/data/` — contenido bilingüe (ES/EN) tipado: textos de cada sección (`es.ts`/`en.ts`), portafolio (`work.ts`), planes (`plans.ts`), preguntas frecuentes (`faq.ts`) y datos de contacto (`site.ts`).
- `src/components/astro/` — cada sección de la landing, como componentes `.astro` sin JS.
- `src/components/react/` — la única isla interactiva del sitio (menú móvil).
- `src/layouts/BaseLayout.astro` — `<head>`, meta/OG/hreflang y JSON-LD por idioma.
- `src/pages/` — `index.astro` (ES, ruta `/`) y `en/index.astro` (EN, ruta `/en/`).

## Idiomas

El español es el idioma por defecto (`/`) y el inglés vive bajo `/en/`. Para editar el copy, se edita `src/data/es.ts` y `src/data/en.ts` — ambos están tipados contra la misma interfaz (`src/data/types.ts`), así que si un idioma le falta una clave que el otro tiene, `pnpm check`/`pnpm build` fallan.

## Contacto

No hay formulario — la sección de contacto es un CTA directo a WhatsApp (`src/data/site.ts`, función `whatsappHref`). El número y el mensaje predefinido se editan ahí.

## Precios

Los precios por tipo de servicio están en `src/data/plans.ts`. Landing pages ya tiene un precio real ("Desde $3,000 MXN"); Web apps, Ecommerce y Apps móviles muestran "Cotización personalizada" hasta que se definan cifras — basta con cambiar el campo `price` de cada plan cuando estén listas.
