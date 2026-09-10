import type { Locale, FaqItem } from "./types";

export const faq: Record<Locale, FaqItem[]> = {
  es: [
    { q: "¿Cuánto tarda un proyecto?", a: "Depende del alcance: una landing puede estar lista en 2-3 semanas; una web app o app móvil, entre 6 y 12 semanas." },
    { q: "¿De quién es el código al terminar?", a: "Tuyo. Al finalizar el proyecto y liquidar el pago, te entregamos el código fuente completo." },
    { q: "¿Cómo funcionan los pagos?", a: "Normalmente en 2 o 3 partes: un anticipo para iniciar, un pago intermedio, y el cierre al entregar." },
    { q: "¿Qué pasa después del lanzamiento?", a: "Te acompañamos las primeras semanas sin costo extra. Después, ofrecemos planes de mantenimiento opcionales." },
    { q: "¿Por qué toman pocos proyectos a la vez?", a: "Porque calidad y atención personal no escalan con volumen. Preferimos hacer pocos proyectos muy bien, que muchos a medias." },
  ],
  en: [
    { q: "How long does a project take?", a: "Depends on scope: a landing page can be ready in 2-3 weeks; a web app or mobile app, between 6 and 12 weeks." },
    { q: "Who owns the code once it's done?", a: "You do. Once the project is finished and paid in full, we hand over the complete source code." },
    { q: "How do payments work?", a: "Usually in 2 or 3 parts: a deposit to start, a mid-project payment, and the final one on delivery." },
    { q: "What happens after launch?", a: "We stay close for the first weeks at no extra cost. After that, we offer optional maintenance plans." },
    { q: "Why do you take on so few projects at a time?", a: "Because quality and personal attention don't scale with volume. We'd rather do a few projects very well than many halfway." },
  ],
};
