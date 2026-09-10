import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "av-skallet — Software Development Studio in Mexico",
    description:
      "We design and build landing pages, web apps, ecommerce and mobile apps. We take on a handful of projects at a time, so yours gets our full attention.",
  },
  nav: {
    servicios: "Services",
    proceso: "Process",
    trabajo: "Work",
    planes: "Plans",
    faq: "FAQ",
    cta: "Let's talk",
  },
  hero: {
    kicker: "Software development studio",
    headline: "Your project deserves the full studio, not a landing page factory.",
    sub: "We design and build landing pages, web apps, ecommerce and mobile apps. We take on a handful of projects at a time — so yours gets our full attention, not a fraction of it.",
    cta1: "Tell us about your project",
    cta2: "How we work",
  },
  problem: {
    heading: "Sound familiar?",
    pains: [
      { tag: "01", text: "You already tried a freelancer and the project stalled halfway." },
      { tag: "02", text: "A consultancy sold you a big pitch and delivered a generic template." },
      { tag: "03", text: "You're not sure if you need a landing page, a web app, or both — and no one explains it clearly." },
    ],
    closing:
      "That's why we only take a handful of projects at a time. The one we're working on is always yours — not one of twenty in line.",
  },
  services: {
    heading: "What we do",
    sub: "Every project is designed from scratch around your business — we don't start from a template.",
    items: [
      {
        id: "landing",
        title: "Landing pages",
        desc: "The front door to your brand. Fast, clear, built to convert visits into customers.",
      },
      {
        id: "webapp",
        title: "Web apps",
        desc: "POS, bookings, orders, CRMs. Custom tools for your daily operations.",
      },
      {
        id: "ecommerce",
        title: "Ecommerce",
        desc: "Your own store, without relying on generic templates or third-party fees.",
      },
      {
        id: "mobile",
        title: "Mobile apps",
        desc: "Cross-platform or native, depending on what your business actually needs.",
      },
    ],
  },
  process: {
    heading: "How we work",
    steps: [
      { n: "01", title: "Discovery", desc: "We understand your business, your customers, and which problem to solve first." },
      { n: "02", title: "Proposal and design", desc: "We show you exactly what we'll build, before writing a line of code." },
      { n: "03", title: "Development", desc: "We build with constant contact — no surprises, no blind handoffs." },
      { n: "04", title: "Launch and follow-up", desc: "We ship and stay close during the first weeks of real-world use." },
    ],
  },
  tech: {
    heading: "It's not just code and done",
    sub: "Every project we deliver goes through these standards — they're not an extra, they're part of the work.",
    items: [
      { title: "Internationalization", desc: "Content ready to grow into other languages and markets without rewriting from scratch." },
      { title: "Responsive design", desc: "Looks and works just as well on a phone, a tablet, or a desktop screen." },
      { title: "Technical SEO", desc: "Structure and metadata built so search engines find your site, not just your customers." },
      { title: "Performance", desc: "Optimized load times — every second of waiting costs you customers." },
      { title: "Longevity", desc: "Current technologies and best practices, so your software keeps working well for years, not months." },
    ],
  },
  diff: {
    label: "How we work",
    quote: "Fewer projects, more attention. We'd rather say no to one more client than say yes to you halfway.",
  },
  work: {
    heading: "What we've built",
    sub: "Landing pages, web apps and real systems for real businesses.",
    viewProject: "View project",
  },
  plans: {
    heading: "Plans",
    sub: "A starting point per project type. Final scope and price adjust to what your business needs.",
    fromLabel: "From",
    quoteLabel: "Custom quote",
    ctaLabel: "Quote this project",
  },
  faqHeading: "Frequently asked questions",
  contact: {
    heading: "Let's talk about your project",
    sub: "Tell us what you need. We'll reply within 24 hours to set up a short call.",
    whatsapp: "Message us on WhatsApp",
    formName: "Name",
    formEmail: "Email",
    formTypeLabel: "Project type",
    formTypes: ["Landing page", "Web app (POS, bookings, orders, CRM)", "Ecommerce", "Mobile app"],
    formMsg: "Briefly tell us about your project",
    formSubmit: "Send",
  },
  thanks: {
    title: "Thank you — av-skallet",
    heading: "Message received!",
    text: "Thanks for reaching out. We'll review your project and reply within 24 hours.",
    back: "Back to home",
  },
  footer: {
    tagline: "av-skallet — Software development studio",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "Page not found — av-skallet",
    heading: "404",
    text: "Sorry, the page you're looking for doesn't exist or was moved.",
    home: "Go home",
  },
};
