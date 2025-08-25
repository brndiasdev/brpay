// Common Types
export interface Image {
  src: string;
  alt: string;
}

export interface TitleWithHighlight {
  text: string;
  highlight: string;
}

// Hero Types
export interface HeroData {
  title: TitleWithHighlight;
  description: string;
  cta: string;
  image: Image;
}

// Beneficios Types
export interface BeneficioItem {
  titulo: string;
  descricao: string;
}

export interface BeneficiosData {
  title: TitleWithHighlight;
  items: BeneficioItem[];
}

// Plans Types
export interface Plan {
  nome: string;
  preco: string;
  destaque: boolean;
  texto: string;
  descricao: string;
  beneficios: string[];
}

export interface PlansData {
  title: string;
  description: string;
  plans: Plan[];
}

// FAQ Types
export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  title: string;
  items: FaqItem[];
  cta: {
    text: string;
    href: string;
    icon: string;
  };
}

// How Works Types
export interface HowWorksStep {
  title: string;
  description: string;
  icon: string;
  effect: string;
}

export interface HowWorksData {
  title: string;
  steps: HowWorksStep[];
}

// Impact Types
export interface ImpactMetric {
  value: string;
  label: string;
}

export interface ImpactData {
  title: string;
  description: string;
  metrics: ImpactMetric[];
}

// Header Types
export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderData {
  logo: Image;
  navItems: NavItem[];
  cta: string;
}

// Final CTA Types
export interface FinalCTAData {
  title: string;
  description: string;
  cta: string;
}

export interface TermsSection {
  title: string;
  content: string;
}

export type TermsData = TermsSection[];
