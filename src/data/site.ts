export const site = {
  name: "av-skallet",
  url: "https://av-skallet.com",
  email: "avskallet@gmail.com",
  phone: "+52 449 143 1962",
  whatsappNumber: "524491431962",
  whatsappMessageEs: "Hola! Nos interesa conocer más sobre sus servicios de desarrollo de software.",
  whatsappMessageEn: "Hi! We're interested in learning more about your software development services.",
  // github: "https://github.com/DeLaConcha232",
  // linkedin: "https://www.linkedin.com/in/diego-díaz-de-la-concha-193488271",
  locationEs: "México",
  locationEn: "Mexico",
} as const;

export function whatsappHref(locale: "es" | "en") {
  const message = locale === "es" ? site.whatsappMessageEs : site.whatsappMessageEn;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
