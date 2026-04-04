// Configuración centralizada de la aplicación
// FASE 3 & 4: Traducción y enlaces centralizados

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Stay Playful",
  description: "A Healthier Way to Feel Well",
  urls: {
    contact: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mailto:hello@stayplayful.com",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "tel:+46-123-456-789",
  },
}

export type Language = "sv" | "en"

export const translations = {
  sv: {
    // Header & Navigation
    nav: {
      programs: "PROGRAM",
      method: "METOD",
      contact: "KONTAKT",
      clientLogin: "KLIENT INLOGGNING",
      bookCall: "BOKA SAMTAL",
    },
    // Top bar
    topBar: "Där din vision blir något oförglömligt",
    getInTouch: "Få kontakt",
    // Hero
    hero: {
      title: "YOUR LIFE, YOUR PLAYGROUND",
    },
    // Buttons & CTAs
    cta: {
      learnMore: "LÄS MER",
      exploreBalance: "UTFORSKA BALANS",
      discoverCreativity: "UPPTÄCK KREATIVITET",
      foodRelationship: "MATFÖRHÅLLANDE",
      getStarted: "BÖRJA NU",
    },
    // Footer
    footer: {
      copyright: "© 2026 Stay Playful. Alla rättigheter reserverade.",
      privacy: "Integritet",
      terms: "Villkor",
    },
  },
  en: {
    // Header & Navigation
    nav: {
      programs: "PROGRAMS",
      method: "METHOD",
      contact: "CONTACT",
      clientLogin: "CLIENT LOGIN",
      bookCall: "BOOK A CALL",
    },
    // Top bar
    topBar: "Where your vision becomes something unforgettable",
    getInTouch: "Get in touch",
    // Hero
    hero: {
      title: "YOUR LIFE, YOUR PLAYGROUND",
    },
    // Buttons & CTAs
    cta: {
      learnMore: "LEARN MORE",
      exploreBalance: "EXPLORE BALANCE",
      discoverCreativity: "DISCOVER CREATIVITY",
      foodRelationship: "FOOD RELATIONSHIP",
      getStarted: "GET STARTED",
    },
    // Footer
    footer: {
      copyright: "© 2026 Stay Playful. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
