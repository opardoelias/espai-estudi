// English copy, written for international buyers and investors (not a literal translation). Mirrors ca.ts.
import type * as ca from './ca';

export const contact: typeof ca.contact = {
  phone: '+34 666 72 15 55',
  phoneHref: 'tel:+34666721555',
  whatsappHref:
    'https://wa.me/34666721555?text=' +
    encodeURIComponent("Hello, I'm writing from the Espai Estudi website. I'd like to discuss a full apartment restoration."),
  email: 'hola@espai-estudi.com',
  address: '[Address], Barcelona',
  hours: '[Monday to Friday, 9am–6pm CET]'
};

export const global: typeof ca.global = {
  meta: { ogLocale: 'en_GB', skipLink: 'Skip to content', homeAria: 'Espai Estudi, home', navAria: 'Main', navMobileAria: 'Main (mobile)', languageAria: 'Language', quickContactAria: 'Quick contact' },
  nav: [
    { label: 'Services', href: '/en/services/' },
    { label: 'Projects', href: '/en/projects/' },
    { label: 'Investors', href: '/en/investors/' },
    { label: 'Process', href: '/en/process/' },
    { label: 'International buyers', href: '/en/international-buyers/' }
  ],
  cta: { label: 'Book a consultation', href: '/en/contact/' },
  whatsapp: { label: 'WhatsApp', aria: 'Message us on WhatsApp' },
  menu: { open: 'Open menu', close: 'Close menu' },
  mobileBar: { consult: 'Consultation', whatsapp: 'WhatsApp' },
  ctaBand: {
    eyebrow: 'Projects from €50,000',
    title: 'An apartment with history deserves a restoration done properly.',
    text: "Tell us about your property. We'll get back to you as soon as we can to arrange a first meeting, in person or by video call.",
    button: 'Book a consultation',
    secondary: 'or message us on WhatsApp'
  },
  footer: {
    positioning:
      'Espai Estudi is an architectural restoration and interior design studio in Barcelona. We turn period apartments into contemporary, safe, fully code-compliant homes.',
    contactTitle: 'Contact',
    byAppointment: '(by appointment)',
    exploreTitle: 'Explore',
    explore: [
      { label: 'Services', href: '/en/services/' },
      { label: 'Projects', href: '/en/projects/' },
      { label: 'Investors', href: '/en/investors/' },
      { label: 'International buyers', href: '/en/international-buyers/' },
      { label: 'Process', href: '/en/process/' },
      { label: 'Studio', href: '/en/studio/' },
      { label: 'Contact', href: '/en/contact/' }
    ],
    legal: [
      { label: 'Legal notice', href: '/en/legal-notice/' },
      { label: 'Privacy', href: '/en/privacy/' },
      { label: 'Cookies', href: '/en/cookies/' }
    ],
    copyright: '© 2026 Espai Estudi. All rights reserved.'
  }
};

export const home: typeof ca.home = {
  seo: {
    title: 'Full apartment renovation & interior architecture in Barcelona | Espai Estudi',
    description:
      'We restore period Barcelona apartments down to the structure and rebuild them as high-end contemporary homes. Permits, construction and interior design under one team.'
  },
  hero: {
    eyebrow: 'Architectural restoration & interior design · Barcelona',
    titleStart: 'Restoring Barcelona apartments for the',
    titleEmphasis: 'next generations',
    text:
      'We take period apartments back to their structure and rebuild them completely: permits, all-new installations, full building-code compliance and bespoke interior design. One team, from the first viewing to handing over the keys.',
    primary: 'Book a consultation',
    secondary: 'View projects',
    secondaryHref: '/en/projects/',
    imageAlt: 'Open-plan kitchen with a walnut island, charcoal cabinetry and three black pendant lights'
  },
  facts: [
    { value: '€50,000', label: 'Projects from' },
    { value: 'Permits', label: 'Fully managed' },
    { value: '35', label: 'Apartments restored' }
  ],
  positioning: {
    eyebrow: 'The studio',
    title: 'We do one thing, and we do all of it.',
    text:
      "We work exclusively on full apartment restorations. No minor repairs, no single-room refits. That focus lets us control every stage, from the building permit and structural reinforcement to the last piece of joinery."
  },
  services: {
    eyebrow: 'Services',
    title: 'One complete process, under one direction.',
    items: [
      { title: 'Permits & compliance', text: 'We handle municipal permits, structural checks and the final legal sign-off of the works.' },
      { title: 'Structure & installations', text: 'Strip-out to the structural core, reinforcement where needed and entirely new electrics, plumbing, heating, cooling and ventilation.' },
      { title: 'Architecture & interiors', text: 'New floor plans, lighting design, bespoke joinery and material selection.' },
      { title: 'Presentation & styling', text: 'Colour, material and lighting palettes, fully bespoke or as curated specification packages.' },
      { title: 'Warranty & aftercare', text: 'A workmanship warranty covering structure, installations and finishes.' }
    ],
    link: 'Explore our services',
    href: '/en/services/'
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Before and after',
    text:
      'Every apartment arrives with a history: high ceilings, hydraulic tiles, decades-old wiring. We keep what has value and renew everything else.',
    button: 'View all projects',
    href: '/en/projects/',
    before: 'Before',
    after: 'After',
    beforePending: 'Before photo to come',
    sliderLabel: 'Compare before and after',
    viewProject: 'View project',
    items: [
      {
        title: 'Modernista apartment in the Eixample',
        href: '/en/projects/modernista-apartment-eixample/',
        imageAlt: 'Restored kitchen with a wooden island, white worktop and full-height dark cabinetry',
        spec: [
          ['Location', 'Dreta de l’Eixample'],
          ['Size', '[120 m²]'],
          ['Built · Restored', '[1905 · 2025]'],
          ['Scope', 'Structure · Installations · Interiors'],
          ['Purpose', 'Owner-occupied']
        ]
      },
      {
        title: 'Principal floor in Sant Gervasi',
        href: '/en/projects/principal-sant-gervasi/',
        imageAlt: 'Kitchen with a gas hob, white tiled wall and a dining nook by a large window',
        meta: ['Sant Gervasi', '[140 m²]', '[2025]']
      },
      {
        title: 'Apartment in El Born',
        href: '/en/projects/apartment-born/',
        imageAlt: 'Photo to come',
        meta: ['Ciutat Vella', '[85 m²]', '[2024]']
      }
    ]
  },
  audiences: {
    eyebrow: 'Clients',
    title: 'Three kinds of client, one standard.',
    items: [
      { title: 'Homeowners', text: "For those who want to live in an apartment restored with real rigour, in Barcelona's finest neighbourhoods.", link: 'Full restoration', href: '/en/services/full-restoration/' },
      { title: 'Investors', text: 'For those buying to add value. Fixed budget, defined timeline and specifications designed for the market.', link: 'Espai Estudi for investors', href: '/en/investors/' },
      { title: 'International buyers', text: 'For those buying from abroad. One point of contact, everything in English, and the whole project managed while you are away.', link: 'Espai Estudi for international buyers', href: '/en/international-buyers/' }
    ]
  },
  investors: {
    eyebrow: 'For investors',
    titleStart: 'From period apartment to market-ready asset, with budget and timeline',
    titleEmphasis: 'fixed',
    items: [
      { title: 'Fixed budget', text: 'Itemised line by line before work begins.' },
      { title: 'Permits handled', text: 'Delivered fully legalised and documented.' },
      { title: 'Market specification', text: 'Proven packages, faster decisions, predictable costs.' }
    ],
    button: "Let's talk about your next property",
    href: '/en/investors/'
  },
  process: {
    eyebrow: 'Process',
    title: 'Rigour at every stage',
    steps: [
      { title: 'Consultation & viewing', text: 'We get to know the apartment and your goals.' },
      { title: 'Design & fixed quote', text: 'Design, specification and a fixed, itemised budget.' },
      { title: 'Permits', text: 'Full application process with Barcelona City Council.' },
      { title: 'Construction', text: 'A single site lead and weekly photo reports.' },
      { title: 'Handover & warranty', text: 'Final walkthrough and ongoing aftercare.' }
    ],
    link: 'See the full process',
    href: '/en/process/'
  },
  testimonials: []
};
