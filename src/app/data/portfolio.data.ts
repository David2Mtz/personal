import { PersonalInfo, Project, EducationSection, HobbyItem, NavItem, ThesisProject, TechnologiesSection } from '../models/portfolio.model';

/**
 * =========================================================================
 * ARCHIVO PRINCIPAL DE DATOS DEL PORTAFOLIO
 * =========================================================================
 * Aquí puedes editar, agregar o eliminar cualquier información de tu portafolio
 * sin tener que modificar la estructura de los componentes HTML.
 */

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', targetId: 'inicio' },
  { label: 'Formación', targetId: 'formacion' },
  { label: 'Titulación', targetId: 'titulacion' },
  { label: 'Tecnologías', targetId: 'tecnologias' },
  { label: 'Proyectos', targetId: 'proyectos' },
  { label: 'Sobre mí', targetId: 'sobremi' }
];

export const PERSONAL_INFO: PersonalInfo = {
  name: 'David',
  titles: ['Desarrollador', 'Diseñador', 'Filmmaker'],
  bio: 'Un apasionado por aprender cosas nuevas, comprometido a adaptarme a todo tipo de entornos y aportar siempre lo mejor de mi. Aquí comparto mis trabajos y proyectos sobre programación con el objetivo de inspirar y colaborar en el desarrollo de nuevos proyectos.',
  thankYouText: '¡Gracias por visitarme!',
  email: 'ld.martinez.117@gmail.com',
  avatarUrl: 'David.JPG',
  cvUrl: ['Luis_Martinez_ingeniero_sistemas_Curriculum.pdf','Luis_Martinez_Software_Developer_Resume.pdf'],
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

// =========================================================================
// 🎓 PROYECTO DE TITULACIÓN (TRABAJO TERMINAL)
// =========================================================================
// Edita aquí los textos, tecnologías, pasos del proceso y las rutas a tus videos.
// Para los videos, puedes colocar tus archivos .mp4 en public/videos/ o usar una URL.
export const THESIS_PROJECT: ThesisProject = {
  id: 'titulacion',
  tag: 'Trabajo Terminal · ESCOM IPN',
  title: 'Proyecto de Titulación',
  subtitle: 'Desarrollo de una solución tecnológica integral para la obtención del título en Ingeniería en Sistemas Computacionales.',
  introduction: [
    'Este proyecto de titulación surge ante la necesidad de de desarrollar un sistema que integre el control por señales EEG y la visión por computadora para automatizar el proceso de recolección y acercamiento (entrega) de comprimidos. ','El proyecto busca consolidar un prototipo funcional capaz de validar, mediante simulación en un entorno controlado (uso de maniquí), la precisión y seguridad necesarias para asistir a un usuario en la recepción de comprimidos sólidos, eliminando la necesidad de manipulación manual.'
  ],
  objectives: {
    main: 'Implementar un prototipo de control híbrido EEG-Visión por computadora para un brazo robótico de asistencia, validando su funcionamiento en la entrega de comprimidos sólidos a un maniquí.',
    specifics: [
      'Construir la estructura mecánica de un brazo robótico de 5 grados de libertad basada en un modelo 3D, diseñando y fabricando un efector final adaptado específicamente para la sujeción de comprimidos sólidos.',
      'Desarrollar un sistema de control híbrido mediante el procesamiento de señales EEG (paradigma P300) y algoritmos de visión artificial para la selección y localización de los comprimidos.',
      'Integrar los módulos de control y visual con el sistema mecánico para la ejecución autónoma de trayectorias de movimiento en lazo cerrado.',
      'Validar la precisión del posicionamiento del efector final y la tasa de acierto en la entrega de comprimidos mediante pruebas experimentales con un maniquí.'
    ]
  },
  cvTechnologies: [
    {
      name: 'OpenCV (cv2)',
      category: 'Segmentación HSV, Morfología & Contornos',
      icon: 'fa-solid fa-camera'
    },
    {
      name: 'Dlib (68 Landmarks)',
      category: 'Detección Facial & Puntos Clave',
      icon: 'fa-solid fa-face-smile'
    },
    {
      name: 'Python',
      category: 'Pipeline de Visión & Algoritmos de Control',
      icon: 'fa-brands fa-python'
    },
    {
      name: 'NumPy',
      category: 'Álgebra Matricial & Máscaras de Píxeles',
      icon: 'fa-solid fa-calculator'
    },
    {
      name: 'Imutils & Face Utils',
      category: 'ROIs Anatómicas & Métrica EAR',
      icon: 'fa-solid fa-crop'
    },
    {
      name: 'SciPy (Spatial)',
      category: 'Distancias Euclidianas & Clustering',
      icon: 'fa-solid fa-ruler-combined'
    },
    {
      name: 'XIAO ESP32-S3 (OV2640)',
      category: 'Sensor CMOS & Streaming Serial (460.8 kbps)',
      icon: 'fa-solid fa-microchip'
    },
    {
      name: 'Visual Servoing',
      category: 'Tracking en Lazo Cerrado & Guiado al Gripper',
      icon: 'fa-solid fa-crosshairs'
    }
  ],
  process: [
    {
      stepNumber: '01',
      title: 'Estructura Mecánica y Efector 3D',
      description: 'Construcción del brazo robótico de 5 GDL y diseño de un efector final adaptado con sensor magnético para la sujeción segura de comprimidos.'
    },
    {
      stepNumber: '02',
      title: 'Pipeline de Visión por Computadora',
      description: 'Segmentación por rangos HSV, sustracción de base, filtrado morfológico y circularidad para comprimidos, junto con detección de boca por clustering geométrico.'
    },
    {
      stepNumber: '03',
      title: 'Control Híbrido EEG (P300) y Serial',
      description: 'Procesamiento de bioseñales EEG con paradigma P300 para la selección del comprimido y comunicación de streaming a alta velocidad con ESP32-S3.'
    },
    {
      stepNumber: '04',
      title: 'Validación Experimental con Maniquí',
      description: 'Integración en lazo cerrado para la ejecución de trayectorias, visual servoing de aproximación y pruebas de entrega de comprimidos a un maniquí.'
    }
  ],
  videos: [
    {
      id: 'video-1',
      mediaType: 'video',
      title: 'Demostración General del Sistema',
      subtitle: 'Video Demostración',
      description: 'Muestra en funcionamiento del flujo integral: detección de comprimido por visión artificial, recolección y aproximación.',
      src: 'https://youtu.be/7HnjzE-ql8Q',
      poster: 'BRAZO.JPG'
    },
    {
      id: 'foto-equipo',
      mediaType: 'image',
      title: 'Equipo de Desarrollo del Proyecto',
      subtitle: 'Foto del Equipo',
      description: 'Integrantes del Trabajo Terminal: Sistema de Control Híbrido EEG y Visión por Computadora para Brazo Robótico en ESCOM IPN.',
      src: 'EQUIPO.jpg',
      image: 'EQUIPO.jpg',
      poster: 'EQUIPO.jpg'
    }
  ],
  links: [
    {
      label: 'Ver Repositorio TT',
      url: 'https://github.com/David2Mtz/TT2026-A085',
      icon: 'fa-brands fa-github',
      primary: true
    }
  ]
};

// =========================================================================
// 💻 HABILIDADES Y TECNOLOGÍAS GENERALES
// =========================================================================
export const TECHNOLOGIES_DATA: TechnologiesSection = {
  tag: 'STACK & HABILIDADES TÉCNICAS',
  title: 'Habilidades y Tecnologías',
  subtitle: 'Stack tecnológico, lenguajes de programación y herramientas que utilizo para construir aplicaciones web modernas, sistemas distribuidos y proyectos multimedia.',
  categories: [
    {
      category: 'Frontend',
      icon: 'fa-solid fa-laptop-code',
      skills: [
        { name: 'Angular', level: 'Intermedio', icon: 'fa-brands fa-angular' },
        { name: 'TypeScript', level: 'Intermedio', icon: 'fa-solid fa-code' },
        { name: 'JavaScript', level: 'Intermedio', icon: 'fa-brands fa-js' },
        { name: 'HTML5 & CSS3', level: 'Avanzado', icon: 'fa-brands fa-html5' },
        { name: 'Bootstrap', level: 'Avanzado', icon: 'fa-brands fa-bootstrap' }
      ]
    },
    {
      category: 'Backend & APIs',
      icon: 'fa-solid fa-server',
      skills: [
        { name: 'Node.js', level: 'Intermedio', icon: 'fa-brands fa-node-js' },
        { name: 'Spring Boot', level: 'Intermedio', icon: 'fa-solid fa-leaf' },
        { name: 'Java', level: 'Intermedio', icon: 'fa-brands fa-java' },
        { name: 'Express.js', level: 'Intermedio', icon: 'fa-solid fa-network-wired' },
        { name: 'RESTful APIs', level: 'Avanzado', icon: 'fa-solid fa-cloud-arrow-up' }
      ]
    },
    {
      category: 'Bases de Datos',
      icon: 'fa-solid fa-database',
      skills: [
        { name: 'PostgreSQL', level: 'Intermedio - Avanzado', icon: 'fa-solid fa-database' },
        { name: 'YugabyteDB (Distributed SQL)', level: 'Intermedio', icon: 'fa-solid fa-server' },
        { name: 'MySQL', level: 'Intermedio', icon: 'fa-solid fa-database' },
        { name: 'Modelado Relacional & SQL', level: 'Avanzado', icon: 'fa-solid fa-table' }
      ]
    },
    {
      category: 'DevOps & Herramientas',
      icon: 'fa-solid fa-gears',
      skills: [
        { name: 'Git & GitHub', level: 'Avanzado', icon: 'fa-brands fa-github' },
        { name: 'Docker', level: 'Intermedio', icon: 'fa-brands fa-docker' },
        { name: 'Render / Netlify', level: 'Avanzado', icon: 'fa-solid fa-cloud' },
        { name: 'Linux / Bash', level: 'Intermedio', icon: 'fa-brands fa-linux' },
        { name: 'Postman', level: 'Avanzado', icon: 'fa-solid fa-paper-plane' }
      ]
    },
    {
      category: 'Diseño & Multimedia',
      icon: 'fa-solid fa-photo-film',
      skills: [
        { name: 'Figma (UI/UX)', level: 'Avanzado', icon: 'fa-brands fa-figma' },
        { name: 'Edición de Video (Final Cut Pro X', level: 'Avanzado', icon: 'fa-solid fa-film' },
        { name: 'Fotografía & Color Grading', level: 'Avanzado', icon: 'fa-solid fa-camera' }
      ]
    }
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
