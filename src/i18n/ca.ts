// Catalan copy, from docs/copy/ca (v0.2). Text in [brackets] is a placeholder for real data.
// es.ts and en.ts mirror this shape exactly.

export const contact = {
  phone: '+34 666 72 15 55',
  phoneHref: 'tel:+34666721555',
  whatsappHref:
    'https://wa.me/34666721555?text=' +
    encodeURIComponent("Bon dia. Us escric des del web d'Espai Estudi. M'agradaria parlar d'un projecte de restauració integral."),
  email: 'hola@espai-estudi.com',
  address: '[Adreça], Barcelona',
  hours: '[Dilluns a divendres, 9–18 h]'
};

export const global = {
  meta: { ogLocale: 'ca_ES', skipLink: 'Saltar al contingut', homeAria: 'Espai Estudi, inici', navAria: 'Principal', navMobileAria: 'Principal (mòbil)', languageAria: 'Idioma', quickContactAria: 'Contacte ràpid' },
  nav: [
    { label: 'Serveis', href: '/serveis/' },
    { label: 'Projectes', href: '/projectes/' },
    { label: 'Inversors', href: '/inversors/' },
    { label: 'Procés', href: '/proces/' },
    { label: 'Estudi', href: '/estudi/' }
  ],
  cta: { label: 'Sol·liciteu una consulta', href: '/contacte/' },
  whatsapp: { label: 'WhatsApp', aria: 'Escriviu-nos per WhatsApp' },
  menu: { open: 'Obrir el menú', close: 'Tancar el menú' },
  mobileBar: { consult: 'Consulta', whatsapp: 'WhatsApp' },
  ctaBand: {
    eyebrow: 'Projectes a partir de 50.000 €',
    title: 'Un pis amb història mereix una restauració amb criteri.',
    text: 'Expliqueu-nos el vostre projecte. Us respondrem tan aviat com puguem per concertar una primera reunió.',
    button: 'Sol·liciteu una consulta',
    secondary: 'o escriviu-nos per WhatsApp'
  },
  footer: {
    positioning:
      'Espai Estudi és un estudi de restauració arquitectònica i interiorisme a Barcelona. Transformem pisos antics en habitatges contemporanis, segurs i adaptats a la normativa vigent.',
    contactTitle: 'Contacte',
    byAppointment: '(amb cita prèvia)',
    exploreTitle: 'Explorar',
    explore: [
      { label: 'Serveis', href: '/serveis/' },
      { label: 'Projectes', href: '/projectes/' },
      { label: 'Inversors', href: '/inversors/' },
      { label: 'Clients internacionals', href: '/clients-internacionals/' },
      { label: 'Procés', href: '/proces/' },
      { label: 'Estudi', href: '/estudi/' },
      { label: 'Contacte', href: '/contacte/' }
    ],
    legal: [
      { label: 'Avís legal', href: '/avis-legal/' },
      { label: 'Privacitat', href: '/privacitat/' },
      { label: 'Cookies', href: '/cookies/' }
    ],
    copyright: '© 2026 Espai Estudi. Tots els drets reservats.'
  }
};

export const home = {
  seo: {
    title: 'Restauració integral de pisos i interiorisme a Barcelona | Espai Estudi',
    description:
      "Restaurem pisos antics de Barcelona fins a l'estructura i els convertim en habitatges contemporanis i d'alta qualitat. Llicències, obra i interiorisme en un sol equip."
  },
  hero: {
    eyebrow: 'Restauració arquitectònica i interiorisme · Barcelona',
    titleStart: 'Restaurem pisos amb història per a les',
    titleEmphasis: 'properes generacions',
    text:
      "Prenem habitatges antics fins a l'estructura i els reconstruïm per complet: llicències, instal·lacions noves, normativa vigent i un interiorisme fet a mida. Un sol equip, de la primera visita a l'entrega de claus.",
    primary: 'Sol·liciteu una consulta',
    secondary: 'Veure projectes',
    secondaryHref: '/projectes/',
    imageAlt: 'Cuina oberta amb illa de fusta de noguera, armaris antracita i tres llums de sostre negres'
  },
  facts: [
    { value: '50.000 €', label: 'Projectes a partir de' },
    { value: 'Llicències', label: 'Gestió integral' },
    { value: '35', label: 'Pisos restaurats' }
  ],
  positioning: {
    eyebrow: "L'estudi",
    title: 'Només fem una cosa, i la fem sencera.',
    text:
      "Ens dediquem exclusivament a restauracions integrals de pisos. No fem reparacions puntuals ni reformes d'una sola estança. Aquesta especialització ens permet controlar cada fase: des de la llicència i el reforç estructural fins a l'última peça de fusteria."
  },
  services: {
    eyebrow: 'Serveis',
    title: 'Un procés complet, sota una sola direcció.',
    items: [
      { title: 'Llicències i normativa', text: "Gestionem els permisos municipals, les comprovacions estructurals i la legalització final de l'obra." },
      { title: 'Estructura i instal·lacions', text: "Enderroc fins a l'estructura, reforç on calgui i instal·lacions completament noves: electricitat, aigua, climatització i ventilació." },
      { title: 'Arquitectura i interiorisme', text: "Nova distribució, projecte d'il·luminació, fusteria a mida i selecció de materials." },
      { title: 'Presentació i estil', text: "Paletes de color, materials i il·luminació, en una proposta totalment personalitzada o en paquets d'especificació predefinits." },
      { title: 'Garantia i postvenda', text: "Garantia d'obra sobre l'estructura, les instal·lacions i els acabats." }
    ],
    link: 'Descobriu els nostres serveis',
    href: '/serveis/'
  },
  projects: {
    eyebrow: 'Projectes',
    title: 'Abans i després',
    text:
      'Cada pis arriba amb la seva història: sostres alts, mosaics hidràulics, instal·lacions obsoletes. La conservem allà on té valor i la renovem on cal.',
    button: 'Veure tots els projectes',
    href: '/projectes/',
    before: 'Abans',
    after: 'Després',
    beforePending: "Foto de l'estat inicial pendent",
    sliderLabel: "Comparar l'abans i el després",
    viewProject: 'Veure el projecte',
    // Example projects (format only). Replace with real projects.
    items: [
      {
        title: "Pis modernista a l'Eixample",
        href: '/projectes/pis-modernista-eixample/',
        imageAlt: 'Cuina restaurada amb illa de fusta, taulell blanc i armaris foscos fins al sostre',
        spec: [
          ['Ubicació', "Dreta de l'Eixample"],
          ['Superfície', '[120 m²]'],
          ['Edifici · Restauració', '[1905 · 2025]'],
          ['Abast', 'Estructura · Instal·lacions · Interiorisme'],
          ['Finalitat', 'Habitatge propi']
        ]
      },
      {
        title: 'Principal a Sant Gervasi',
        href: '/projectes/principal-sant-gervasi/',
        imageAlt: 'Cuina amb fogons, revestiment ceràmic blanc i racó de menjador amb finestral',
        meta: ['Sant Gervasi', '[140 m²]', '[2025]']
      },
      {
        title: 'Pis al Born',
        href: '/projectes/pis-born/',
        imageAlt: 'Foto pendent',
        meta: ['Ciutat Vella', '[85 m²]', '[2024]']
      }
    ]
  },
  audiences: {
    eyebrow: 'Clients',
    title: "Tres perfils, un mateix nivell d'exigència.",
    items: [
      { title: 'Propietaris', text: 'Per a qui vol viure en un pis restaurat amb el màxim rigor, als millors barris de Barcelona.', link: 'Veure restauració integral', href: '/serveis/restauracio-integral/' },
      { title: 'Inversors', text: 'Per a qui compra per revaloritzar. Pressupost tancat, terminis definits i especificacions pensades per al mercat.', link: 'Espai Estudi per a inversors', href: '/inversors/' },
      { title: 'Clients internacionals', text: 'Per a qui compra des de fora. Un únic interlocutor, comunicació en anglès i gestió completa mentre sou lluny.', link: 'Espai Estudi per a clients internacionals', href: '/clients-internacionals/' }
    ]
  },
  investors: {
    eyebrow: 'Per a inversors',
    titleStart: "Del pis antic a l'actiu de mercat, amb pressupost i calendari",
    titleEmphasis: 'tancats',
    items: [
      { title: 'Pressupost tancat', text: 'Detallat per partides abans de començar.' },
      { title: 'Llicències gestionades', text: 'Pis lliurat legalitzat i documentat.' },
      { title: 'Especificació de mercat', text: 'Paquets provats, decisions àgils, costos previsibles.' }
    ],
    button: 'Parlem del vostre proper actiu',
    href: '/inversors/'
  },
  process: {
    eyebrow: 'Procés',
    title: 'Rigor a cada fase',
    steps: [
      { title: 'Consulta i visita', text: 'Coneixem el pis i els vostres objectius.' },
      { title: 'Projecte i pressupost', text: 'Disseny, especificacions i pressupost tancat.' },
      { title: 'Llicències', text: "Tramitació completa amb l'Ajuntament." },
      { title: 'Obra', text: 'Direcció única i informes setmanals.' },
      { title: 'Entrega i garantia', text: 'Revisió final i acompanyament posterior.' }
    ],
    link: 'Veure el procés complet',
    href: '/proces/'
  },
  // Hidden until there are real reviews.
  testimonials: [] as { quote: string; name: string; role: string }[]
};
