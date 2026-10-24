// Spanish copy (formal "usted"), adapted from the Catalan v0.2. Mirrors ca.ts.
import type * as ca from './ca';

export const contact: typeof ca.contact = {
  phone: '+34 666 72 15 55',
  phoneHref: 'tel:+34666721555',
  whatsappHref:
    'https://wa.me/34666721555?text=' +
    encodeURIComponent('Buenos días. Les escribo desde la web de Espai Estudi. Me gustaría hablar de un proyecto de restauración integral.'),
  email: 'hola@espai-estudi.com',
  address: '[Dirección], Barcelona',
  hours: '[Lunes a viernes, 9–18 h]'
};

export const global: typeof ca.global = {
  meta: { ogLocale: 'es_ES', skipLink: 'Saltar al contenido', homeAria: 'Espai Estudi, inicio', navAria: 'Principal', navMobileAria: 'Principal (móvil)', languageAria: 'Idioma', quickContactAria: 'Contacto rápido' },
  nav: [
    { label: 'Servicios', href: '/es/servicios/' },
    { label: 'Proyectos', href: '/es/proyectos/' },
    { label: 'Inversores', href: '/es/inversores/' },
    { label: 'Proceso', href: '/es/proceso/' },
    { label: 'Estudio', href: '/es/estudio/' }
  ],
  cta: { label: 'Solicite una consulta', href: '/es/contacto/' },
  whatsapp: { label: 'WhatsApp', aria: 'Escríbanos por WhatsApp' },
  menu: { open: 'Abrir el menú', close: 'Cerrar el menú' },
  mobileBar: { consult: 'Consulta', whatsapp: 'WhatsApp' },
  ctaBand: {
    eyebrow: 'Proyectos a partir de 50.000 €',
    title: 'Un piso con historia merece una restauración con criterio.',
    text: 'Cuéntenos su proyecto. Le responderemos lo antes posible para concertar una primera reunión.',
    button: 'Solicite una consulta',
    secondary: 'o escríbanos por WhatsApp'
  },
  footer: {
    positioning:
      'Espai Estudi es un estudio de restauración arquitectónica e interiorismo en Barcelona. Transformamos pisos antiguos en viviendas contemporáneas, seguras y adaptadas a la normativa vigente.',
    contactTitle: 'Contacto',
    byAppointment: '(con cita previa)',
    exploreTitle: 'Explorar',
    explore: [
      { label: 'Servicios', href: '/es/servicios/' },
      { label: 'Proyectos', href: '/es/proyectos/' },
      { label: 'Inversores', href: '/es/inversores/' },
      { label: 'Clientes internacionales', href: '/es/clientes-internacionales/' },
      { label: 'Proceso', href: '/es/proceso/' },
      { label: 'Estudio', href: '/es/estudio/' },
      { label: 'Contacto', href: '/es/contacto/' }
    ],
    legal: [
      { label: 'Aviso legal', href: '/es/aviso-legal/' },
      { label: 'Privacidad', href: '/es/privacidad/' },
      { label: 'Cookies', href: '/es/cookies/' }
    ],
    copyright: '© 2026 Espai Estudi. Todos los derechos reservados.'
  }
};

export const home: typeof ca.home = {
  seo: {
    title: 'Reforma integral de pisos e interiorismo en Barcelona | Espai Estudi',
    description:
      'Restauramos pisos antiguos de Barcelona hasta la estructura y los convertimos en viviendas contemporáneas de alta calidad. Licencias, obra e interiorismo en un solo equipo.'
  },
  hero: {
    eyebrow: 'Restauración arquitectónica e interiorismo · Barcelona',
    titleStart: 'Restauramos pisos con historia para las',
    titleEmphasis: 'próximas generaciones',
    text:
      'Llevamos viviendas antiguas hasta la estructura y las reconstruimos por completo: licencias, instalaciones nuevas, normativa vigente e interiorismo a medida. Un solo equipo, de la primera visita a la entrega de llaves.',
    primary: 'Solicite una consulta',
    secondary: 'Ver proyectos',
    secondaryHref: '/es/proyectos/',
    imageAlt: 'Cocina abierta con isla de madera de nogal, armarios antracita y tres lámparas de techo negras'
  },
  facts: [
    { value: '50.000 €', label: 'Proyectos a partir de' },
    { value: 'Licencias', label: 'Gestión integral' },
    { value: '35', label: 'Pisos restaurados' }
  ],
  positioning: {
    eyebrow: 'El estudio',
    title: 'Solo hacemos una cosa, y la hacemos entera.',
    text:
      'Nos dedicamos exclusivamente a restauraciones integrales de pisos. No hacemos reparaciones puntuales ni reformas de una sola estancia. Esta especialización nos permite controlar cada fase: desde la licencia y el refuerzo estructural hasta la última pieza de carpintería.'
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Un proceso completo, bajo una sola dirección.',
    items: [
      { title: 'Licencias y normativa', text: 'Gestionamos los permisos municipales, las comprobaciones estructurales y la legalización final de la obra.' },
      { title: 'Estructura e instalaciones', text: 'Demolición hasta la estructura, refuerzo donde sea necesario e instalaciones completamente nuevas: electricidad, agua, climatización y ventilación.' },
      { title: 'Arquitectura e interiorismo', text: 'Nueva distribución, proyecto de iluminación, carpintería a medida y selección de materiales.' },
      { title: 'Presentación y estilo', text: 'Paletas de color, materiales e iluminación, en una propuesta totalmente personalizada o en paquetes de especificación predefinidos.' },
      { title: 'Garantía y posventa', text: 'Garantía de obra sobre la estructura, las instalaciones y los acabados.' }
    ],
    link: 'Descubra nuestros servicios',
    href: '/es/servicios/'
  },
  projects: {
    eyebrow: 'Proyectos',
    title: 'Antes y después',
    text:
      'Cada piso llega con su propia historia: techos altos, mosaicos hidráulicos, instalaciones obsoletas. La conservamos allí donde tiene valor y la renovamos donde hace falta.',
    button: 'Ver todos los proyectos',
    href: '/es/proyectos/',
    before: 'Antes',
    after: 'Después',
    beforePending: 'Foto del estado inicial pendiente',
    sliderLabel: 'Comparar el antes y el después',
    viewProject: 'Ver el proyecto',
    items: [
      {
        title: 'Piso modernista en el Eixample',
        href: '/es/proyectos/piso-modernista-eixample/',
        imageAlt: 'Cocina restaurada con isla de madera, encimera blanca y armarios oscuros hasta el techo',
        spec: [
          ['Ubicación', 'Dreta de l’Eixample'],
          ['Superficie', '[120 m²]'],
          ['Edificio · Restauración', '[1905 · 2025]'],
          ['Alcance', 'Estructura · Instalaciones · Interiorismo'],
          ['Finalidad', 'Vivienda propia']
        ]
      },
      {
        title: 'Principal en Sant Gervasi',
        href: '/es/proyectos/principal-sant-gervasi/',
        imageAlt: 'Cocina con fogones, revestimiento cerámico blanco y rincón de comedor con ventanal',
        meta: ['Sant Gervasi', '[140 m²]', '[2025]']
      },
      {
        title: 'Piso en el Born',
        href: '/es/proyectos/piso-born/',
        imageAlt: 'Foto pendiente',
        meta: ['Ciutat Vella', '[85 m²]', '[2024]']
      }
    ]
  },
  audiences: {
    eyebrow: 'Clientes',
    title: 'Tres perfiles, un mismo nivel de exigencia.',
    items: [
      { title: 'Propietarios', text: 'Para quien quiere vivir en un piso restaurado con el máximo rigor, en los mejores barrios de Barcelona.', link: 'Ver restauración integral', href: '/es/servicios/restauracion-integral/' },
      { title: 'Inversores', text: 'Para quien compra para revalorizar. Presupuesto cerrado, plazos definidos y especificaciones pensadas para el mercado.', link: 'Espai Estudi para inversores', href: '/es/inversores/' },
      { title: 'Clientes internacionales', text: 'Para quien compra desde fuera. Un único interlocutor, comunicación en inglés y gestión completa mientras usted está lejos.', link: 'Espai Estudi para clientes internacionales', href: '/es/clientes-internacionales/' }
    ]
  },
  investors: {
    eyebrow: 'Para inversores',
    titleStart: 'Del piso antiguo al activo de mercado, con presupuesto y calendario',
    titleEmphasis: 'cerrados',
    items: [
      { title: 'Presupuesto cerrado', text: 'Detallado por partidas antes de empezar.' },
      { title: 'Licencias gestionadas', text: 'Piso entregado legalizado y documentado.' },
      { title: 'Especificación de mercado', text: 'Paquetes probados, decisiones ágiles, costes previsibles.' }
    ],
    button: 'Hablemos de su próximo activo',
    href: '/es/inversores/'
  },
  process: {
    eyebrow: 'Proceso',
    title: 'Rigor en cada fase',
    steps: [
      { title: 'Consulta y visita', text: 'Conocemos el piso y sus objetivos.' },
      { title: 'Proyecto y presupuesto', text: 'Diseño, especificaciones y presupuesto cerrado.' },
      { title: 'Licencias', text: 'Tramitación completa con el Ayuntamiento.' },
      { title: 'Obra', text: 'Dirección única e informes semanales.' },
      { title: 'Entrega y garantía', text: 'Revisión final y acompañamiento posterior.' }
    ],
    link: 'Ver el proceso completo',
    href: '/es/proceso/'
  },
  testimonials: []
};
