import type { ImageMetadata } from "astro";

export type Locale = "es" | "en";

export interface NavDictionary {
  servicios: string;
  proceso: string;
  trabajo: string;
  planes: string;
  faq: string;
  cta: string;
  openMenu: string;
  closeMenu: string;
}

export interface HeroDictionary {
  kicker: string;
  headline: string;
  sub: string;
  cta1: string;
  cta2: string;
}

export interface PainPoint {
  tag: string;
  text: string;
}

export interface ProblemDictionary {
  heading: string;
  pains: PainPoint[];
  closing: string;
}

export type ServiceId = "landing" | "webapp" | "ecommerce" | "mobile";

export interface ServiceItem {
  id: ServiceId;
  title: string;
  desc: string;
}

export interface ServicesDictionary {
  heading: string;
  sub: string;
  items: ServiceItem[];
}

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export interface ProcessDictionary {
  heading: string;
  steps: ProcessStep[];
}

export interface TechItem {
  title: string;
  desc: string;
}

export interface TechDictionary {
  heading: string;
  sub: string;
  items: TechItem[];
}

export interface DiffDictionary {
  label: string;
  quote: string;
}

export interface SectionHeading {
  heading: string;
  sub: string;
}

export interface WorkHeading extends SectionHeading {
  viewProject: string;
}

export interface PlansHeading extends SectionHeading {
  fromLabel: string;
  quoteLabel: string;
  ctaLabel: string;
}

export interface ContactDictionary {
  heading: string;
  sub: string;
  whatsapp: string;
}

export interface FooterDictionary {
  tagline: string;
  rights: string;
}

export interface MetaDictionary {
  title: string;
  description: string;
}

export interface NotFoundDictionary {
  title: string;
  heading: string;
  text: string;
  home: string;
}

export interface Dictionary {
  meta: MetaDictionary;
  nav: NavDictionary;
  hero: HeroDictionary;
  problem: ProblemDictionary;
  services: ServicesDictionary;
  process: ProcessDictionary;
  tech: TechDictionary;
  diff: DiffDictionary;
  work: WorkHeading;
  plans: PlansHeading;
  faqHeading: string;
  contact: ContactDictionary;
  footer: FooterDictionary;
  notFound: NotFoundDictionary;
}

export interface WorkItem {
  tag: string;
  title: string;
  desc: string;
  imageCaption: string;
  /** Real screenshot/mockup, imported from src/assets/work/. Falls back to the
   * texture placeholder (imageCaption) when omitted. */
  image?: ImageMetadata;
  /** Short muted looping clip that plays on hover/click, shown instead of the
   * static image. Uses `image` as its poster frame when both are present. */
  video?: string;
  liveUrl?: string;
}

export type WorkPrice =
  | { type: "from"; amount: string }
  | { type: "quote" };

export interface PlanItem {
  service: ServiceId;
  title: string;
  desc: string;
  price: WorkPrice;
  features: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}
