// Single source of truth for all site content.
// Edit copy, projects, and experience here, never in the components.

export interface Project {
  title: string
  tagline: string
  description: string
  tech: string[]
  /** Live site URL, if the project is public */
  live?: string
  /** GitHub repo URL, if public */
  repo?: string
  /** Shown instead of links when the work is private */
  privateNote?: string
  /** Featured projects render as a full-width card at the top of the grid */
  featured?: boolean
}

export interface Role {
  title: string
  period: string
}

export interface Experience {
  company: string
  location: string
  period: string
  roles: Role[]
  bullets: string[]
  tags: string[]
}

export const identity = {
  name: 'Dylan Ernst',
  role: 'Software Engineer',
  typedLines: [
    'Full-Stack Developer',
    'AI Product Builder',
    'Software Engineer',
  ],
  tagline:
    'I design and ship full-stack products (AI-powered platforms, client websites, and cross-platform apps) from first commit to live in production.',
  location: 'Orange County, CA',
  email: 'dylanernstr@gmail.com',
  phone: '(949) 933-3607',
  github: 'https://github.com/dylan-ernst',
  resume: 'https://github.com/dylan-ernst/resume',
  // Set when the exact profile URL is confirmed; the link renders only if non-empty
  linkedin: '',
  pianoSite: 'https://dylan-ernst.com',
}

export const about = {
  paragraphs: [
    "I'm a Computer Science student at Chapman University (B.S. in Computer Science, minor in Piano Performance, graduating December 2026) who builds software that real people use. Over the past year I've shipped an AI photo-processing platform for a photography client, a production website for a Brazilian Jiu-Jitsu gym, and internal security tooling at a cybersecurity firm.",
    'I like the full arc of a product: talking to the client, architecting the backend, designing the interface, and deploying it live. Outside of code I teach piano at my own studio and coach youth Brazilian Jiu-Jitsu; both keep me disciplined, patient, and good at explaining hard things simply.',
  ],
  facts: [
    { label: 'Education', value: 'B.S. Computer Science, Chapman University · Dec 2026' },
    { label: 'Based in', value: 'Mission Viejo, CA' },
    { label: 'Focus', value: 'Full-stack development · AI-powered products' },
    { label: 'Currently', value: 'Open to early-career software engineering roles' },
  ],
}

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'C++', 'HTML/CSS'],
  },
  {
    group: 'Frameworks & Tools',
    items: [
      'React',
      'React Native (Expo)',
      'FastAPI',
      'Flask',
      'PostgreSQL',
      'AWS',
      'Docker',
      'Stripe',
      'Git / GitHub',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'ClearCut',
    tagline: 'AI Photo-Processing Platform',
    description:
      'Full-stack platform built for a professional photographer: AI image segmentation removes backgrounds from batches of high-resolution photos, and a custom AI vision pipeline reads the name sign held in each shot to automatically rename and sort every image to the correct client, saving a reported 80 hours of manual work in its first week. FastAPI backend with JWT auth, an atomic credit ledger, and production Stripe billing.',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'OpenAI API', 'Docker'],
    privateNote: 'Private client work',
    featured: true,
  },
  {
    title: 'Data Breach Scanner',
    tagline: 'Security Tool on AWS',
    description:
      'Breach-scanning application aggregating results from APIs covering 2,000+ breach databases for real-time exposure analysis, with JWT authentication, role-based access control, and audit logging. Deployed on AWS with Docker for internal sales and engineering use.',
    tech: ['Python', 'Flask', 'React', 'PostgreSQL', 'Docker'],
    privateNote: 'Internal company tool',
    featured: true,
  },
  {
    title: 'Jiujitsu Manager',
    tagline: 'BJJ School Management Platform',
    description:
      'Multi-tenant management platform for Brazilian Jiu-Jitsu gyms, live in production. Role-based access (User / Admin / Owner) with per-gym data isolation enforced by row-level security, a structured white-belt curriculum, weekly focus posts, and a technique library with a personal → pending → approved submission workflow and multi-video references. Also ships staff-built technique-chain flowcharts on a custom pan-and-zoom SVG graph engine, a class schedule, and a training-consistency heatmap.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'React Router'],
    live: 'https://dylan-ernst.github.io/Jiujitsu-Manager/',
  },
  {
    title: 'Gym Tracker',
    tagline: 'Offline-First Workout PWA',
    description:
      'Installable workout-tracking PWA with an offline service worker and multi-user accounts, each isolated by row-level security. Logs lifting, cardio, and checkbox-style sessions across three tracking modes, with streak logic, personal records, a muscle-recovery map, an editable up-next queue, and a friends system for sharing and copying workout days. Account creation is gated by a server-enforced signup PIN.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PWA'],
    live: 'https://dylan-ernst.github.io/Gym-Tracker/',
  },
  {
    title: 'Carlson Gracie Irvine',
    tagline: 'Production Gym Website',
    description:
      'Marketing site for a Brazilian Jiu-Jitsu gym, live in production. Data-driven content system with a single source-of-truth config, centralized design tokens, a scroll-snap coaches carousel, and an animated testimonials deck with reduced-motion support.',
    tech: ['React', 'TypeScript', 'Vite'],
    live: 'https://carlsongracie-irvine.com',
  },
  {
    title: 'Chris Hori Photography',
    tagline: 'Client Photography Portfolio',
    description:
      'Portfolio and booking site for a Southern California photographer, live in production on a custom domain. Multi-category galleries (professional, sports, real estate, and portraits) rendered with a justified-row layout engine, all gallery content centralized in a single data file, and a booking page for client inquiries. Deployed as a single-page app with deep-linkable client-side routes.',
    tech: ['React', 'Vite', 'React Router'],
    live: 'https://chrishori.com',
  },
  {
    title: 'Triad Turf Estimates',
    tagline: 'Automated Estimate Generator',
    description:
      'Estimate and invoice generator built for Triad Turf Co. Creates customer estimates with automatically computed line-item and grand totals, inline-editable sheet text, and per-browser persistence, then prints them as clean letter-sized PDFs with a multi-page-safe layout: repeating headers and controlled page breaks. Zero dependencies: plain HTML, CSS, and JavaScript.',
    tech: ['JavaScript', 'HTML/CSS'],
    live: 'https://dylan-ernst.github.io/Triad-Turf-Estimates/',
  },
  {
    title: 'Music Theory Trainer',
    tagline: 'Cross-Platform Education App',
    description:
      'Music-theory app with 16 interactive drill games and a 31-lesson curriculum, designed from my own piano-teaching practice and now used by over 15 students across two studios. Includes a custom music-notation rendering engine built from scratch in SVG: staves, clefs, key signatures, and chord engraving. Ships to iOS, Android, and web from one codebase.',
    tech: ['React Native', 'Expo', 'TypeScript'],
  },
]

export const experience: Experience[] = [
  {
    company: 'Unite IT & TRSTXCYBER',
    location: 'Huntington Beach, CA · partnered companies',
    period: 'June 2025 – Present',
    roles: [
      { title: 'Software Developer / IT Support Technician', period: 'Dec 2025 – Present' },
      { title: 'Software Engineer Intern', period: 'June 2025 – Dec 2025' },
    ],
    bullets: [
      'Engineered and deployed a Python-based data breach scanning tool on AWS with secure authentication and activity logging.',
      "Built and administered the company's entire CRM (contacts, pipelines, automated workflows, and AI-powered features), eliminating manual work across sales operations.",
      'Directed a team of three interns to design and deploy a responsive company website, improving inbound sales inquiries.',
      'Managed devices and user access across client environments with Datto RMM and Active Directory.',
    ],
    tags: ['Python', 'AWS', 'CRM Automation', 'IT Support'],
  },
  {
    company: 'Independent Piano Studio',
    location: 'Mission Viejo, CA',
    period: '2021 – Present',
    roles: [{ title: 'Piano Teacher & Studio Owner', period: '' }],
    bullets: [
      'Run a private piano studio end to end: recruiting, scheduling, curriculum, and billing for students of all ages.',
      'Designed personalized learning plans that became the foundation for my Music Theory Trainer app.',
    ],
    tags: ['Teaching', 'Entrepreneurship', 'Curriculum Design'],
  },
  {
    company: 'Carlson Gracie Irvine',
    location: 'Irvine, CA',
    period: 'August 2022 – Present',
    roles: [{ title: 'Brazilian Jiu-Jitsu Instructor', period: '' }],
    bullets: [
      'Lead youth classes for students aged 4–16, coaching technique, discipline, and competition preparation.',
      'Designed, built, and deployed the gym’s production website (see Projects).',
    ],
    tags: ['Coaching', 'Youth Instruction'],
  },
]

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
