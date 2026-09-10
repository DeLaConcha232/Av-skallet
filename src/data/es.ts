import type { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "av-skallet — Estudio de desarrollo de software en México",
    description:
      "Diseñamos y construimos landing pages, web apps, ecommerce y apps móviles. Tomamos pocos proyectos a la vez, para que el tuyo tenga toda nuestra atención.",
  },
  nav: {
    servicios: "Servicios",
    proceso: "Proceso",
    trabajo: "Trabajo",
    planes: "Planes",
    faq: "FAQ",
    cta: "Hablemos",
  },
  hero: {
    kicker: "Estudio de desarrollo de software",
    headline: "Tu proyecto merece el estudio completo, no una fábrica de páginas.",
    sub: "Diseñamos y construimos landing pages, web apps, ecommerce y apps móviles. Tomamos pocos proyectos a la vez — para que el tuyo tenga toda nuestra atención, no una fracción de ella.",
    cta1: "Cuéntanos tu proyecto",
    cta2: "Cómo trabajamos",
  },
  problem: {
    heading: "¿Te suena familiar?",
    pains: [
      { tag: "01", text: "Ya intentaste con un freelancer y el proyecto quedó a medias." },
      { tag: "02", text: "Una consultora te vendió una gran propuesta y entregó una plantilla genérica." },
      { tag: "03", text: "No sabes si necesitas una landing, una web app, o ambas — y nadie te lo explica claro." },
    ],
    closing:
      "Por eso solo tomamos un puñado de proyectos a la vez. Así, el que trabajamos es siempre el tuyo — no uno de veinte en fila.",
  },
  services: {
    heading: "Qué hacemos",
    sub: "Cada proyecto se piensa desde cero, según tu negocio — no partimos de una plantilla.",
    items: [
      {
        id: "landing",
        title: "Landing pages",
        desc: "La puerta de entrada a tu marca. Rápida, clara y hecha para convertir visitas en clientes.",
      },
      {
        id: "webapp",
        title: "Web apps",
        desc: "POS, reservaciones, pedidos, CRM's. Herramientas a medida para tu operación diaria.",
      },
      {
        id: "ecommerce",
        title: "Ecommerce",
        desc: "Tu tienda en línea, sin depender de plantillas genéricas ni comisiones ajenas.",
      },
      {
        id: "mobile",
        title: "Apps móviles",
        desc: "Multiplataforma o nativa, según lo que tu negocio realmente necesite.",
      },
    ],
  },
  process: {
    heading: "Cómo trabajamos",
    steps: [
      { n: "01", title: "Descubrimiento", desc: "Entendemos tu negocio, tus clientes y qué problema hay que resolver primero." },
      { n: "02", title: "Propuesta y diseño", desc: "Te mostramos exactamente qué construiremos, antes de escribir una línea de código." },
      { n: "03", title: "Desarrollo", desc: "Construimos con contacto constante — sin sorpresas ni entregas a ciegas." },
      { n: "04", title: "Lanzamiento y acompañamiento", desc: "Publicamos y seguimos cerca durante las primeras semanas de uso real." },
    ],
  },
  tech: {
    heading: "No solo escribimos código y ya",
    sub: "Cada proyecto que entregamos pasa por estos estándares — no son un extra, son parte del trabajo.",
    items: [
      { title: "Internacionalización", desc: "Contenido listo para crecer a otros idiomas y mercados sin reescribir nada desde cero." },
      { title: "Diseño responsivo", desc: "Se ve y funciona igual de bien en un celular, una tablet o una pantalla de escritorio." },
      { title: "SEO técnico", desc: "Estructura y metadatos pensados para que los buscadores encuentren tu sitio, no solo tus clientes." },
      { title: "Performance", desc: "Tiempos de carga optimizados — cada segundo de espera cuesta clientes." },
      { title: "Longevidad", desc: "Tecnologías actuales y buenas prácticas, para que tu software siga funcionando bien en años, no meses." },
    ],
  },
  diff: {
    label: "Nuestra manera de trabajar",
    quote: "Menos proyectos, más atención. Preferimos decir que no a un cliente más, que decirte que sí a medias.",
  },
  work: {
    heading: "Lo que hemos hecho",
    sub: "Landing pages, web apps y sistemas reales para negocios reales.",
    viewProject: "Ver proyecto",
  },
  plans: {
    heading: "Planes",
    sub: "Un punto de partida por tipo de proyecto. El alcance y precio final se ajustan según lo que tu negocio necesite.",
    fromLabel: "Desde",
    quoteLabel: "Cotización personalizada",
    ctaLabel: "Cotizar este proyecto",
  },
  faqHeading: "Preguntas frecuentes",
  contact: {
    heading: "Hablemos de tu proyecto",
    sub: "Cuéntanos qué necesitas. Te respondemos en menos de 24 horas para agendar una llamada breve.",
    whatsapp: "Escríbenos por WhatsApp",
    formName: "Nombre",
    formEmail: "Correo",
    formTypeLabel: "Tipo de proyecto",
    formTypes: ["Landing page", "Web app (POS, reservas, pedidos, CRM)", "Ecommerce", "App móvil"],
    formMsg: "Cuéntanos brevemente tu proyecto",
    formSubmit: "Enviar",
  },
  thanks: {
    title: "Gracias — av-skallet",
    heading: "¡Mensaje recibido!",
    text: "Gracias por escribirnos. Revisamos tu proyecto y te respondemos en menos de 24 horas.",
    back: "Volver al inicio",
  },
  footer: {
    tagline: "av-skallet — Estudio de desarrollo de software",
    rights: "Todos los derechos reservados.",
  },
  notFound: {
    title: "Página no encontrada — av-skallet",
    heading: "404",
    text: "Lo sentimos, la página que buscas no existe o fue movida.",
    home: "Ir al inicio",
  },
};
