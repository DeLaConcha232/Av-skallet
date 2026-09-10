import type { Locale, PlanItem } from "./types";

export const plans: Record<Locale, PlanItem[]> = {
  es: [
    {
      service: "landing",
      title: "Landing pages",
      desc: "Sitio de una sola página, pensado para presentar tu negocio y convertir visitas en clientes.",
      price: { type: "from", amount: "$3,000 MXN" },
      features: ["Diseño a medida", "Responsive", "SEO técnico básico incluido", "1 ronda de ajustes"],
    },
    {
      service: "webapp",
      title: "Web apps",
      desc: "Herramientas a medida: reservaciones, pedidos, POS, CRM's y sistemas internos.",
      price: { type: "quote" },
      features: ["Alcance definido contigo", "Funciones e integraciones a medida", "Acompañamiento post-lanzamiento"],
    },
    {
      service: "ecommerce",
      title: "Ecommerce",
      desc: "Tu tienda en línea propia, sin depender de plantillas genéricas ni comisiones de terceros.",
      price: { type: "quote" },
      features: ["Catálogo y pagos a medida", "Panel de administración", "Acompañamiento post-lanzamiento"],
    },
    {
      service: "mobile",
      title: "Apps móviles",
      desc: "Apps multiplataforma o nativas, según lo que tu negocio realmente necesite.",
      price: { type: "quote" },
      features: ["Multiplataforma o nativa", "Diseño a medida", "Acompañamiento post-lanzamiento"],
    },
  ],
  en: [
    {
      service: "landing",
      title: "Landing pages",
      desc: "A single-page site built to present your business and convert visits into customers.",
      price: { type: "from", amount: "$3,000 MXN" },
      features: ["Custom design", "Responsive", "Basic technical SEO included", "1 round of revisions"],
    },
    {
      service: "webapp",
      title: "Web apps",
      desc: "Custom tools: bookings, orders, POS, CRMs, and internal systems.",
      price: { type: "quote" },
      features: ["Scope defined together", "Custom features and integrations", "Post-launch support"],
    },
    {
      service: "ecommerce",
      title: "Ecommerce",
      desc: "Your own online store, without relying on generic templates or third-party fees.",
      price: { type: "quote" },
      features: ["Custom catalog and payments", "Admin dashboard", "Post-launch support"],
    },
    {
      service: "mobile",
      title: "Mobile apps",
      desc: "Cross-platform or native apps, depending on what your business actually needs.",
      price: { type: "quote" },
      features: ["Cross-platform or native", "Custom design", "Post-launch support"],
    },
  ],
};
