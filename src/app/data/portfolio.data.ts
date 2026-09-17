import { PersonalInfo, Project, EducationSection, HobbyItem, NavItem } from '../models/portfolio.model';

/**
 * =========================================================================
 * ARCHIVO PRINCIPAL DE DATOS DEL PORTAFOLIO
 * =========================================================================
 * Aquí puedes editar, agregar o eliminar cualquier información de tu portafolio
 * sin tener que modificar la estructura de los componentes HTML.
 */

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', targetId: 'inicio' },
  { label: 'Proyectos', targetId: 'proyectos' },
  { label: 'Formación', targetId: 'formacion' },
  { label: 'Sobre mi', targetId: 'sobremi' }
];

export const PERSONAL_INFO: PersonalInfo = {
  name: 'David',
  titles: ['Desarrollador', 'Diseñador', 'Filmmaker'],
  bio: 'Un apasionado por aprender cosas nuevas, comprometido a adaptarme a todo tipo de entornos y aportar siempre lo mejor de mi. Aquí comparto mis trabajos y proyectos sobre programación con el objetivo de inspirar y colaborar en el desarrollo de nuevos proyectos.',
  thankYouText: '¡Gracias por visitarme!',
  email: 'ld.martinez.117@gmail.com',
  avatarUrl: 'David.JPG',
  cvUrl: 'Luis-David-Martinez-CV.pdf',
  socials: [
    {
      name: 'Copiar correo',
      url: '#',
      icon: 'fa-solid fa-envelope',
      isEmailCopy: true
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/luis-david-mart%C3%ADnez-mart%C3%ADnez-29ba30305/',
      icon: 'fa-brands fa-linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/David2Mtz',
      icon: 'fa-brands fa-github'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/luisdavidmtzx',
      icon: 'fa-brands fa-instagram'
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'sistema-climatologico',
    title: 'Sistema climatológico en línea',
    description: 'Desarrollé un sistema de consulta del clima enfocado en frontend, utilizando Node.js y la API de Conagua. A través de un mapa interactivo de México, permite obtener información climática actualizada de manera fácil y visual.',
    link: 'https://sistema-climatologico.onrender.com/',
    linkText: 'Conocer',
    images: [
      'previewClima/clima4.webp',
      'previewClima/clima5.webp',
      'previewClima/clima1.webp',
      'previewClima/clima2.webp',
      'previewClima/clima3.webp'
    ]
  },
  // =========================================================================
  // 🚀 PROYECTO 2 (Edita el link y agrega tus capturas en public/previewProyecto2/)
  // =========================================================================
  {
    id: 'Alpha-ICV',
    title: 'Alpha ICV - Control de proyección para seguimiento de puntaje de torneo',
    description: 'Proyecto Frontend basado en Angular. Se realizó un sistema de proyección separada a la ventana del controlados. Para la proyeccion de puntaje separada al entorno de organización equipos y puntos.',
    link: 'https://alpha-icv.netlify.app', // 👈 EDITA AQUÍ TU ENLACE
    linkText: 'Conocer',
    images: [
      // 👈 REEMPLAZA O AGREGA AQUÍ LAS RUTAS DE TUS CAPTURAS (guardadas en public/previewProyecto2/)
      'previewAlpha/presentacion.png',
      'previewAlpha/Seleccion.png',
      'previewAlpha/muestra.png'
    ]
  },
  // =========================================================================
  // 🚀 PROYECTO 3 (Edita el link y agrega tus capturas en public/previewProyecto3/)
  // =========================================================================
  {
    id: 'Zentry-eventos',
    title: 'Zentry Eventos - Gestión de Asistencia a eventos e invitaciones por correo',
    description: 'Proyecto Fullstack basado en Spring Boot y Angular. Realicé un sistema de control de asistencia a eventos mediante invitaciones por correo y escaneos de asistencia por código QR. Gestionando eventos, usuarios, staff y asistencias. Mediante una arquitectura distribuida en YugabyteDB, Render y Netlify.',
    link: 'https://zentryeventos.netlify.app/', // 👈 EDITA AQUÍ TU ENLACE
    linkText: 'Conocer',
    images: [
      // 👈 REEMPLAZA O AGREGA AQUÍ LAS RUTAS DE TUS CAPTURAS (guardadas en public/previewProyecto3/)
      'previewZentry/home.png',
      'previewZentry/login.png',
      'previewZentry/crearEvento.png',
      'previewZentry/eventoCreado.png',
      'previewZentry/agregarInvitado.png',
      'previewZentry/invitacionEnviada.png',
      'previewZentry/invitacionRecibida.png',
      'previewZentry/panelHost.png',
      'previewZentry/panelStaff.png'
    ]
  }
];

export const EDUCATION_DATA: EducationSection = {
  title: 'Formación académica',
  description: 'Terminé mis estudios de la carrera de Ingeniería en Sistemas en la Escuela Superior de Cómputo del Instituto Politécnico Nacional en 2026. Actualmente me encuentro en búsqueda de ofertas laborales para enriquecer mis conocimientos',
  items: [
    {
      level: 'NIVEL SUPERIOR',
      school: 'ESCUELA SUPERIOR DE CÓMPUTO',
      career: 'Ingeniería en sistemas computacionales',
      period: '2022 - 2026',
      logoUrl: 'escom.png'
    },
    {
      level: 'NIVEL MEDIO SUPERIOR',
      school: 'CENTRO DE BACHILLERATO TECNOLÓGICO INDUSTRIAL Y DE SERVICIOS NO. 91',
      career: 'Técnico en programación',
      period: '2018 - 2021',
      logoUrl: 'CBTIOS.png'
    }
  ],
  campusImages: [
    'FotosEscom/ESCOM1.jpg',
    'FotosEscom/ESCOM2.jpg',
    'FotosEscom/ESCOM3.jpg'
  ]
};

export const HOBBIES_DATA: HobbyItem[] = [
  {
    id: 'fotografia-video',
    title: 'Fotografía y Video',
    description: 'Soy un entusiasta de la fotografía y la creación de videos, dos pasiones que han crecido en mí con el tiempo. En mis tiempos libres, me dedico a aprender nuevas técnicas, explorar el equipo adecuado y experimentar con diferentes estilos y enfoques. Me fascina cómo una imagen o un video puede contar una historia, capturar un momento o transmitir una emoción única.',
    images: [
      'fotografia/FOTOS2.jpg',
      'fotografia/FOTOS4.jpg',
      'fotografia/FOTOS6.jpg'
    ]
  },
  {
    id: 'musica',
    title: 'Música',
    description: 'La música siempre ha tenido un lugar especial en mi vida. Desde pequeño, me cautivaba cómo los sonidos podían transmitir emociones tan profundas. A los 15 años, decidí aprender a tocar la guitarra, y desde entonces, no he parado. La guitarra se convirtió en mi medio de expresión, en una forma de conectar con lo que siento y lo que quiero compartir con los demás.',
    images: [
      'music/MUSICA.jpg',
      'music/MUSICA2.jpg',
      'music/MUSICA3.jpg'
    ]
  }
];
