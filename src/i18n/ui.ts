export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export interface NavItem {
  label: string;
  href: string;
  icon: 'home' | 'about' | 'projects' | 'skills' | 'contact';
}

export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  period: string;
  summary?: string;
  highlights: string[];
  link?: { label: string; url: string };
}

export interface ProjectItem {
  name: string;
  date: string;
  summary: string;
  tags: string[];
  link: { label: string; url: string };
}

export interface SkillGroup {
  label: string;
  tags: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface UiContent {
  site: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  langSwitch: { label: string; current: string };
  hero: {
    prompt: string;
    name: string;
    headline: string;
    location: string;
    summary: string;
    ctaPrimary: string;
    ctaSecondary: string;
    availability: string;
  };
  about: {
    eyebrow: string;
    title: string;
    profile: string;
    experienceTitle: string;
    educationTitle: string;
    additionalTrainingTitle: string;
    languagesTitle: string;
    experience: ExperienceItem[];
    education: EducationItem[];
    additionalTraining: { name: string; location: string; highlights: string[] };
    languages: { label: string; details: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ProjectItem[];
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: SkillGroup[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    emailLabel: string;
    locationLabel: string;
    linksTitle: string;
  };
  footer: {
    builtWith: string;
    rights: string;
  };
}

const nav = (t: { home: string; about: string; projects: string; skills: string; contact: string }, prefix: string): NavItem[] => [
  { label: t.home, href: `${prefix}/`, icon: 'home' },
  { label: t.about, href: `${prefix}/sobre-mi`, icon: 'about' },
  { label: t.projects, href: `${prefix}/proyectos`, icon: 'projects' },
  { label: t.skills, href: `${prefix}/habilidades`, icon: 'skills' },
  { label: t.contact, href: `${prefix}/contacto`, icon: 'contact' },
];

const navEn = (t: { home: string; about: string; projects: string; skills: string; contact: string }): NavItem[] => [
  { label: t.home, href: '/en', icon: 'home' },
  { label: t.about, href: '/en/about', icon: 'about' },
  { label: t.projects, href: '/en/projects', icon: 'projects' },
  { label: t.skills, href: '/en/skills', icon: 'skills' },
  { label: t.contact, href: '/en/contact', icon: 'contact' },
];

export const ui: Record<Lang, UiContent> = {
  es: {
    site: {
      title: 'Andy Romero — Desarrollador Android',
      description:
        'Andy Luis Hernández Romero, desarrollador Android especializado en Kotlin, Jetpack Compose y Clean Architecture. Con base en Tarapoto, Perú.',
    },
    nav: nav({ home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos', skills: 'Skills', contact: 'Contacto' }, ''),
    langSwitch: { label: 'EN', current: 'Español' },
    hero: {
      prompt: 'whoami',
      name: 'Andy Luis Hernández Romero',
      headline: 'Desarrollador Android · Kotlin · Jetpack Compose · Clean Architecture',
      location: 'Tarapoto, Perú',
      summary:
        'Ingeniero Informático con más de 10 años de experiencia en desarrollo de software, especializado desde 2023 en aplicaciones Android en producción. Actualmente en Fora y, en paralelo, al frente de Delta Apps, mi agencia de desarrollo, diseño y marketing digital.',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Contactar',
      availability: 'Disponible para proyectos remotos',
    },
    about: {
      eyebrow: 'cat about.md',
      title: 'Sobre mí',
      profile:
        'Ingeniero Informático y desarrollador de software con más de 10 años de experiencia profesional, especializado desde 2023 en el desarrollo y mantenimiento de aplicaciones Android en producción. Experiencia con Kotlin, Java, Jetpack Compose, MVVM, Clean Architecture, consumo de APIs RESTful, persistencia local, pruebas automatizadas y procesos de CI/CD. Actualmente participo en el desarrollo de la aplicación Android de Fora y, paralelamente, lidero Delta Apps, mi agencia de desarrollo de software, diseño y marketing digital.',
      experienceTitle: 'Experiencia',
      educationTitle: 'Educación',
      additionalTrainingTitle: 'Formación adicional',
      languagesTitle: 'Idiomas',
      experience: [
        {
          company: 'Fora Space',
          position: 'Desarrollador Android',
          location: 'Remoto',
          period: '2023 — presente',
          summary:
            'Desarrollo y mantenimiento de la aplicación Android de Fora, utilizada por los miembros de su plataforma de espacios de trabajo flexibles.',
          highlights: [
            'Desarrollo de funcionalidades con Kotlin, Java y migración progresiva a Jetpack Compose.',
            'Arquitectura MVVM, MVI y Clean Architecture con Koin y Hilt para inyección de dependencias.',
            'Coroutines, Flow, StateFlow, Room y DataStore para estado reactivo y persistencia local.',
            'Participación en CI/CD y múltiples releases de la aplicación en producción.',
          ],
          link: { label: 'Fora en Google Play', url: 'https://play.google.com/store/apps/details?id=co.fora' },
        },
        {
          company: 'Delta Apps',
          position: 'Fundador y Desarrollador de Software',
          location: 'Tarapoto, Perú',
          period: '2026 — presente',
          summary:
            'Agencia independiente de desarrollo de software, diseño y marketing digital enfocada en crear soluciones tecnológicas para negocios y profesionales.',
          highlights: [
            'Diseño y desarrollo de sitios web, landing pages y plataformas comerciales.',
            'SEO, analítica web, optimización de rendimiento y despliegues automatizados.',
            'Configuración de dominios, DNS, hosting y Cloudflare.',
            'Uso de herramientas de IA para acelerar diseño, desarrollo, pruebas y documentación.',
          ],
          link: { label: 'delta-apps.online', url: 'https://delta-apps.online/' },
        },
        {
          company: 'Profesional independiente',
          position: 'Desarrollador de Software',
          location: 'Remoto',
          period: 'jun 2021 — presente',
          highlights: [
            'Aplicaciones móviles, servicios backend y soluciones web para proyectos propios y clientes.',
            'APIs REST con Python y FastAPI; scripts de automatización con JavaScript, TypeScript y Playwright.',
            'Desarrollo previo de aplicaciones multiplataforma con Flutter.',
          ],
        },
        {
          company: 'ECME',
          position: 'Administrador de Redes y Sistemas',
          location: 'Cuba',
          period: 'may 2017 — may 2019',
          highlights: ['Administración de redes y servidores; migración de infraestructura hacia Linux y software libre con Proxmox y Zentyal.'],
        },
        {
          company: 'Segurmatica',
          position: 'Desarrollador de Software',
          location: 'Cuba',
          period: 'sep 2015 — may 2017',
          highlights: ['Mejoras al antivirus empresarial Segurmatica en C++ y al sistema de generación de licencias en C#.'],
        },
        {
          company: 'MINAL',
          position: 'Administrador de Redes y Sistemas',
          location: 'Cuba',
          period: 'ene 2021 — mar 2021',
          highlights: ['Administración de infraestructura y migración hacia software libre con Proxmox y Zentyal.'],
        },
      ],
      education: [
        {
          institution: 'Universidad de las Ciencias Informáticas',
          degree: 'Ingeniero en Ingeniería Informática',
          location: 'La Habana, Cuba',
          period: '2010 — 2015',
          highlights: [
            'Tesis de grado: aplicación Android desarrollada en Java para el consumo de servicios web universitarios desde dispositivos móviles.',
          ],
        },
      ],
      additionalTraining: {
        name: 'Cursos de posgrado en aprendizaje automático',
        location: 'Universidad de las Ciencias Informáticas',
        highlights: [
          'Introducción al aprendizaje automático mediante prácticas y aplicaciones con Weka.',
          'Métodos para casos especiales de aprendizaje automático basados en Rough Sets.',
        ],
      },
      languages: [
        { label: 'Español', details: 'Nativo.' },
        { label: 'Inglés', details: 'Lectura técnica de documentación, APIs, código fuente e incidencias.' },
      ],
    },
    projects: {
      eyebrow: 'ls ~/proyectos',
      title: 'Proyectos destacados',
      intro: 'Una selección de proyectos propios y aplicaciones en producción en los que trabajo.',
      items: [
        {
          name: 'Fora — app Android',
          date: '2023 — presente',
          summary: 'Aplicación Android de Fora, usada por los miembros de su plataforma de espacios de trabajo flexibles. Kotlin, Jetpack Compose, Clean Architecture.',
          tags: ['Kotlin', 'Jetpack Compose', 'Clean Architecture', 'Coroutines'],
          link: { label: 'Ver en Google Play', url: 'https://play.google.com/store/apps/details?id=co.fora' },
        },
        {
          name: 'QvaPay Android — versión no oficial',
          date: '2026',
          summary:
            'Aplicación Android personal en desarrollo inspirada en los servicios de QvaPay. Todavía no se encuentra publicada en Google Play.',
          tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Material 3'],
          link: { label: 'Canal de Telegram', url: 'https://t.me/qvapayandroid' },
        },
        {
          name: 'Catálogo Baby Nanday',
          date: '2026',
          summary: 'Plataforma web comercial orientada a la presentación y promoción de productos para bebés.',
          tags: ['Web', 'SEO', 'WhatsApp'],
          link: { label: 'catalogobabynanday.shop', url: 'https://catalogobabynanday.shop/' },
        },
        {
          name: 'Proyectos web de Delta Apps',
          date: '2026',
          summary: 'Landing pages médicas, sitios corporativos y plataformas comerciales desarrolladas para clientes de Delta Apps.',
          tags: ['UI/UX', 'Responsive', 'SEO local'],
          link: { label: 'delta-apps.online', url: 'https://delta-apps.online/' },
        },
      ],
    },
    skills: {
      eyebrow: 'cat skills.json',
      title: 'Habilidades técnicas',
      intro: 'Tecnologías y herramientas con las que trabajo a diario.',
      groups: [
        { label: 'Android', tags: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'XML', 'Material Design', 'Material 3', 'ViewModel', 'LiveData', 'Navigation Compose'] },
        { label: 'Arquitectura', tags: ['MVVM', 'MVI', 'Clean Architecture', 'SOLID', 'Repository Pattern', 'Use Cases', 'Modularización', 'Inyección de dependencias'] },
        { label: 'Programación reactiva', tags: ['Coroutines', 'Flow', 'StateFlow', 'RxJava'] },
        { label: 'Redes e integración', tags: ['Retrofit', 'APIs RESTful', 'JSON', 'Autenticación', 'Integración de servicios externos'] },
        { label: 'Persistencia', tags: ['Room', 'DataStore', 'Almacenamiento local'] },
        { label: 'Componentes Android', tags: ['WorkManager', 'Paging 3', 'Firebase', 'Jetpack Components'] },
        { label: 'Pruebas', tags: ['JUnit', 'MockK', 'Pruebas unitarias', 'Pruebas de integración'] },
        { label: 'Herramientas y DevOps', tags: ['Git', 'GitHub', 'Android Studio', 'GitHub Actions', 'CI/CD', 'Revisión de código'] },
        { label: 'Backend', tags: ['Python', 'FastAPI', 'Node.js', 'TypeScript', 'APIs REST'] },
        { label: 'Desarrollo web', tags: ['Nuxt', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'] },
        { label: 'Infraestructura', tags: ['Cloudflare', 'DNS', 'Hosting', 'Linux', 'Proxmox', 'Zentyal'] },
        { label: 'Desarrollo asistido por IA', tags: ['ChatGPT', 'OpenAI Codex', 'GitHub Copilot', 'Claude', 'Cursor', 'Vibe Coding'] },
      ],
    },
    contact: {
      eyebrow: 'contact --send',
      title: 'Hablemos',
      intro: '¿Tienes un proyecto Android o una idea en mente? Escríbeme, estoy disponible para trabajo remoto.',
      emailLabel: 'Email',
      locationLabel: 'Ubicación',
      linksTitle: 'Encuéntrame en',
    },
    footer: {
      builtWith: 'Construido con Astro + Tailwind CSS.',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    site: {
      title: 'Andy Romero — Android Developer',
      description:
        'Andy Luis Hernández Romero, Android developer specialized in Kotlin, Jetpack Compose and Clean Architecture. Based in Tarapoto, Peru.',
    },
    nav: navEn({ home: 'Home', about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact' }),
    langSwitch: { label: 'ES', current: 'English' },
    hero: {
      prompt: 'whoami',
      name: 'Andy Luis Hernández Romero',
      headline: 'Android Developer · Kotlin · Jetpack Compose · Clean Architecture',
      location: 'Tarapoto, Peru',
      summary:
        'Software Engineer with over 10 years of experience in software development, specialized since 2023 in production Android apps. Currently at Fora and, in parallel, running Delta Apps, my software development, design and digital marketing agency.',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Get in touch',
      availability: 'Available for remote projects',
    },
    about: {
      eyebrow: 'cat about.md',
      title: 'About me',
      profile:
        'Software Engineer with over 10 years of professional experience, specialized since 2023 in developing and maintaining production Android applications. Experienced with Kotlin, Java, Jetpack Compose, MVVM, Clean Architecture, RESTful APIs, local persistence, automated testing and CI/CD pipelines. Currently working on Fora’s Android app while also leading Delta Apps, my software development, design and digital marketing agency.',
      experienceTitle: 'Experience',
      educationTitle: 'Education',
      additionalTrainingTitle: 'Additional training',
      languagesTitle: 'Languages',
      experience: [
        {
          company: 'Fora Space',
          position: 'Android Developer',
          location: 'Remote',
          period: '2023 — present',
          summary: 'Development and maintenance of Fora’s Android app, used by members of its flexible workspace platform.',
          highlights: [
            'Feature development with Kotlin and Java, progressively migrating to Jetpack Compose.',
            'MVVM, MVI and Clean Architecture with Koin and Hilt for dependency injection.',
            'Coroutines, Flow, StateFlow, Room and DataStore for reactive state and local persistence.',
            'Involved in CI/CD pipelines and multiple production releases.',
          ],
          link: { label: 'Fora on Google Play', url: 'https://play.google.com/store/apps/details?id=co.fora' },
        },
        {
          company: 'Delta Apps',
          position: 'Founder & Software Developer',
          location: 'Tarapoto, Peru',
          period: '2026 — present',
          summary: 'Independent software development, design and digital marketing agency building tech solutions for businesses and professionals.',
          highlights: [
            'Design and development of websites, landing pages and commercial platforms.',
            'SEO, web analytics, performance optimization and automated deployments.',
            'Domain, DNS, hosting and Cloudflare configuration.',
            'Using AI tooling to speed up design, development, testing and documentation.',
          ],
          link: { label: 'delta-apps.online', url: 'https://delta-apps.online/' },
        },
        {
          company: 'Independent professional',
          position: 'Software Developer',
          location: 'Remote',
          period: 'Jun 2021 — present',
          highlights: [
            'Mobile apps, backend services and web solutions for personal and client projects.',
            'REST APIs with Python and FastAPI; automation scripts with JavaScript, TypeScript and Playwright.',
            'Previous cross-platform app development with Flutter.',
          ],
        },
        {
          company: 'ECME',
          position: 'Network & Systems Administrator',
          location: 'Cuba',
          period: 'May 2017 — May 2019',
          highlights: ['Network and server administration; infrastructure migration to Linux and open-source software with Proxmox and Zentyal.'],
        },
        {
          company: 'Segurmatica',
          position: 'Software Developer',
          location: 'Cuba',
          period: 'Sep 2015 — May 2017',
          highlights: ['Enhancements to the Segurmatica enterprise antivirus in C++ and to its license generation system in C#.'],
        },
        {
          company: 'MINAL',
          position: 'Network & Systems Administrator',
          location: 'Cuba',
          period: 'Jan 2021 — Mar 2021',
          highlights: ['Infrastructure administration and migration to open-source software with Proxmox and Zentyal.'],
        },
      ],
      education: [
        {
          institution: 'University of Informatics Sciences (UCI)',
          degree: 'Engineer in Computer Engineering',
          location: 'Havana, Cuba',
          period: '2010 — 2015',
          highlights: ['Thesis: Android application built in Java for consuming university web services from mobile devices.'],
        },
      ],
      additionalTraining: {
        name: 'Postgraduate courses in machine learning',
        location: 'University of Informatics Sciences',
        highlights: [
          'Introduction to machine learning through practices and applications with Weka.',
          'Methods for special machine learning cases based on Rough Sets.',
        ],
      },
      languages: [
        { label: 'Spanish', details: 'Native.' },
        { label: 'English', details: 'Technical reading of documentation, APIs, source code and issues.' },
      ],
    },
    projects: {
      eyebrow: 'ls ~/projects',
      title: 'Featured projects',
      intro: 'A selection of personal projects and production apps I work on.',
      items: [
        {
          name: 'Fora — Android app',
          date: '2023 — present',
          summary: 'Fora’s Android app, used by members of its flexible workspace platform. Kotlin, Jetpack Compose, Clean Architecture.',
          tags: ['Kotlin', 'Jetpack Compose', 'Clean Architecture', 'Coroutines'],
          link: { label: 'View on Google Play', url: 'https://play.google.com/store/apps/details?id=co.fora' },
        },
        {
          name: 'QvaPay Android — unofficial build',
          date: '2026',
          summary: 'Personal Android app in progress, inspired by QvaPay’s services. Not yet published on Google Play.',
          tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Material 3'],
          link: { label: 'Telegram channel', url: 'https://t.me/qvapayandroid' },
        },
        {
          name: 'Baby Nanday Catalog',
          date: '2026',
          summary: 'Commercial web platform for showcasing and promoting baby products.',
          tags: ['Web', 'SEO', 'WhatsApp'],
          link: { label: 'catalogobabynanday.shop', url: 'https://catalogobabynanday.shop/' },
        },
        {
          name: 'Delta Apps web projects',
          date: '2026',
          summary: 'Medical landing pages, corporate sites and commercial platforms built for Delta Apps clients.',
          tags: ['UI/UX', 'Responsive', 'Local SEO'],
          link: { label: 'delta-apps.online', url: 'https://delta-apps.online/' },
        },
      ],
    },
    skills: {
      eyebrow: 'cat skills.json',
      title: 'Technical skills',
      intro: 'Technologies and tools I work with day to day.',
      groups: [
        { label: 'Android', tags: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'XML', 'Material Design', 'Material 3', 'ViewModel', 'LiveData', 'Navigation Compose'] },
        { label: 'Architecture', tags: ['MVVM', 'MVI', 'Clean Architecture', 'SOLID', 'Repository Pattern', 'Use Cases', 'Modularization', 'Dependency injection'] },
        { label: 'Reactive programming', tags: ['Coroutines', 'Flow', 'StateFlow', 'RxJava'] },
        { label: 'Networking & integration', tags: ['Retrofit', 'RESTful APIs', 'JSON', 'Authentication', 'External service integration'] },
        { label: 'Persistence', tags: ['Room', 'DataStore', 'Local storage'] },
        { label: 'Android components', tags: ['WorkManager', 'Paging 3', 'Firebase', 'Jetpack Components'] },
        { label: 'Testing', tags: ['JUnit', 'MockK', 'Unit testing', 'Integration testing'] },
        { label: 'Tools & DevOps', tags: ['Git', 'GitHub', 'Android Studio', 'GitHub Actions', 'CI/CD', 'Code review'] },
        { label: 'Backend', tags: ['Python', 'FastAPI', 'Node.js', 'TypeScript', 'REST API design'] },
        { label: 'Web development', tags: ['Nuxt', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'] },
        { label: 'Infrastructure', tags: ['Cloudflare', 'DNS', 'Hosting', 'Linux', 'Proxmox', 'Zentyal'] },
        { label: 'AI-assisted development', tags: ['ChatGPT', 'OpenAI Codex', 'GitHub Copilot', 'Claude', 'Cursor', 'Vibe Coding'] },
      ],
    },
    contact: {
      eyebrow: 'contact --send',
      title: "Let's talk",
      intro: 'Have an Android project or an idea in mind? Reach out — I’m available for remote work.',
      emailLabel: 'Email',
      locationLabel: 'Location',
      linksTitle: 'Find me on',
    },
    footer: {
      builtWith: 'Built with Astro + Tailwind CSS.',
      rights: 'All rights reserved.',
    },
  },
};

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/andyromerodev/',
  github: 'https://github.com/andyromerodev',
  stackoverflow: 'https://stackoverflow.com/users/5708478/andy-romero',
  email: 'andyromerodev@gmail.com',
};
