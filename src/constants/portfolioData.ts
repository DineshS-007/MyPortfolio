export interface Project {
  id: string
  num: string
  year: string
  title: string
  description: string
  role: string
  colorClass: 'proj--lime' | 'proj--mint' | 'proj--gold' | 'proj--olive'
  tags: string[]
  metrics?: string
  link?: string
}

export interface StackCategory {
  idx: string
  title: string
  description: string
  tags: string[]
}

export interface BeforeAfterStat {
  label: string
  before: string
  targetValue: number
  decimals: number
  prefix?: string
  suffix?: string
  note?: string
}

export interface ExperienceItem {
  period: string
  role: string
  company: string
  location: string
  highlights: string[]
  technologies: string[]
}

export interface EducationItem {
  period: string
  degree: string
  institution: string
  location: string
}

export const PORTFOLIO_DATA = {
  meta: {
    siteTitle: 'DINESH S — Frontend & Mobile Developer',
    roleTag: 'dinesh.dev — frontend & mobile',
    location: 'Chennai, INDIA · IST',
    experienceBadge: '1+ year in production',
    heroLine1: 'FRONTEND',
    heroLine2: 'DEVELOPER',
    circleBadge: 'DEV',
    heroCaption: 'the dev you can trust with prod',
    email: 'dineshsankar202@gmail.com',
    phone: '+91-9360632570',
    phoneFormatted: '+91 93606 32570',
    linkedIn: 'https://www.linkedin.com/in/dineshs-/',
    linkedInDisplay: 'linkedin.com/in/dineshs-',
    github: 'https://github.com/dineshsankar',
    githubDisplay: 'GitHub: @dineshsankar',
    copyright: '© 2026 DINESH S®',
  },

  tickerItems: [
    'React Native',
    'React.js',
    'Next.js',
    'TypeScript',
    'Redux Toolkit',
    'React Query',
    'Firebase Push',
    'REST APIs',
    'iOS In-App Purchases',
    'Tailwind CSS',
    'Performance Optimization',
    'Data-Driven SEO',
  ],

  manifesto: {
    subtitle: '// About Me',
    line1: { text: 'I build ', mark: 'web.' },
    line2: { text: 'I craft ', mark: 'mobile.' },
    line3: { text: 'I ship ', mark: 'prod.' },
    description:
      'One engineer for mobile, web, and APIs: React Native, Next.js, state architecture, and payment pipelines in a single pair of hands. Nothing gets lost between departments, because code is written with end-to-end ownership.',
  },

  stackCategories: [
    {
      idx: '01',
      title: 'Frontend & Web',
      description:
        'Interfaces that don\'t lag and don\'t fall apart. Next.js SSR, reusable components, responsive layouts, 90+ Lighthouse scores.',
      tags: ['TypeScript', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS', 'Material UI', 'Ant Design', 'Bootstrap'],
    },
    {
      idx: '02',
      title: 'Mobile Architecture',
      description:
        'Cross-platform iOS and Android apps engineered with React Native (Expo & CLI). BLE connectivity, native SDK bridges, and smooth 60fps rendering.',
      tags: ['React Native', 'Expo', 'React Native CLI', 'BLE SDKs', 'iOS In-App Purchase', 'Firebase Push', 'Razorpay'],
    },
    {
      idx: '03',
      title: 'State & Integrations',
      description:
        'Predictable application workflows and zero redundant re-renders. Automated JWT authentication refresh, offline sync, and REST API data caching.',
      tags: ['Redux Toolkit', 'React Query', 'REST APIs', 'JWT Auth', 'Token Refresh', 'Razorpay Gateway', 'Firebase'],
    },
    {
      idx: '04',
      title: 'Performance & Quality',
      description:
        'Fast page loads and bulletproof releases. Code splitting, component memoization, lazy loading, data-driven SEO initiatives (+25% traffic).',
      tags: ['Code Splitting', 'Lazy Loading', 'SEO Optimization', 'Git & GitHub', 'Agile / Scrum', 'Bug Diagnostics'],
    },
  ] as StackCategory[],

  beforeAfter: {
    note: '// impact metrics across client projects & mobile apps, first year of engineering',
    beforeCaption: 'before: manual state bugs, broken layouts, slow load times',
    afterCaption: 'after: 60fps mobile screens, instant API cache, +25% SEO boost',
    stats: [
      {
        label: 'Organic SEO Traffic',
        before: '+0%',
        targetValue: 25,
        decimals: 0,
        prefix: '+',
        suffix: '%',
        note: 'Data-driven SEO initiatives',
      },
      {
        label: 'Mobile Frame Rate',
        before: '35 FPS',
        targetValue: 60,
        decimals: 0,
        suffix: ' FPS',
        note: 'Optimized state & component memoization',
      },
      {
        label: 'API Query Response',
        before: '2.1s',
        targetValue: 0.3,
        decimals: 1,
        suffix: 's',
        note: 'React Query caching & lazy loading',
      },
      {
        label: 'Crash-Free Sessions',
        before: '89%',
        targetValue: 99.6,
        decimals: 1,
        suffix: '%',
        note: 'JWT token recovery & defensive error boundaries',
      },
    ] as BeforeAfterStat[],
  },

  projects: [
    {
      id: 'event-booking',
      num: '№01 — 2026',
      title: 'EVENTFLOW',
      description:
        'Cross-platform event booking mobile application with real-time seat selection, Razorpay payment gateway, iOS In-App Purchases, Firebase push notifications, and digital tickets.',
      role: 'mobile · payments · push notifications',
      colorClass: 'proj--lime',
      tags: ['React Native', 'Redux Toolkit', 'Razorpay', 'iOS IAP', 'Firebase Push'],
    },
    {
      id: 'fitness-app',
      num: '№02 — 2025',
      title: 'FITPULSE',
      description:
        'Full-featured mobile fitness application with personalized workouts, dietary plan scheduling, recurring subscriptions, and seamless profile/health sync over REST APIs.',
      role: 'mobile · subscriptions · state architecture',
      colorClass: 'proj--mint',
      tags: ['React Native', 'REST APIs', 'Redux Toolkit', 'Subscriptions', 'Firebase'],
    },
    {
      id: 'smartwatch-ble',
      num: '№03 — 2025',
      title: 'CHRONO-BLE',
      description:
        'Smartwatch connectivity mobile app integrating Bluetooth Low Energy (BLE) SDKs. Synchronizes real-time and historical steps, sleep metrics, and biometric activity logs.',
      role: 'bluetooth ble · react query · sdk integration',
      colorClass: 'proj--gold',
      tags: ['React Native', 'BLE SDKs', 'React Query', 'Health Data', 'Redux Toolkit'],
    },
    {
      id: 'coderz-web',
      num: '№04 — 2025',
      title: 'CODERZ WEB',
      description:
        'High-performance corporate web platform engineered in Next.js. Integrated REST APIs, React Query data caching, code splitting, and SEO strategies generating +25% organic traffic.',
      role: 'next.js · seo · rest caching · responsive ui',
      colorClass: 'proj--olive',
      tags: ['Next.js', 'React Query', 'Tailwind CSS', 'SEO', 'REST APIs'],
    },
  ] as Project[],

  experience: [
    {
      period: 'AUG 2025 — JUL 2026',
      role: 'Junior Software Developer',
      company: 'Coderz Vision Technology',
      location: 'Chennai, India',
      highlights: [
        'Built cross-platform mobile and web applications using React Native, React.js, Next.js, and TypeScript.',
        'Created reusable, responsive UI components with HTML5, CSS3, Material UI, Ant Design, and Tailwind CSS.',
        'Secured user login flows with JWT-based authentication, token storage, and automatic token refresh.',
        'Implemented Redux, Redux Toolkit, React Query, and REST APIs for predictable state and high-speed data caching.',
        'Integrated Firebase Push Notifications, Razorpay payment processing, and iOS In-App Purchases (IAP).',
        'Spearheaded data-driven SEO initiatives, driving a 25% increase in website traffic and online visibility.',
        'Collaborated with UI/UX, backend, and QA teams in Agile development; managed version control via Git/GitHub.',
      ],
      technologies: ['React Native', 'React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'React Query', 'Firebase', 'Tailwind CSS'],
    },
  ] as ExperienceItem[],

  education: [
    {
      period: '2022 — 2025',
      degree: 'BSc. Computer Science',
      institution: 'Hindusthan College of Arts & Science',
      location: 'Coimbatore, India',
    },
    {
      period: '2021 — 2022',
      degree: 'Higher Secondary School — Computer Science',
      institution: 'AKT Higher Secondary School',
      location: 'Kallakurichi, India',
    },
  ] as EducationItem[],

  processSteps: [
    {
      num: '01',
      title: 'Audit & Specs',
      description: 'I analyze UI/UX designs, device constraints, API schemas, and edge cases before writing a line of code.',
    },
    {
      num: '02',
      title: 'Architecture',
      description: 'Clean state management (Redux/Query), type contracts in TypeScript, modular and reusable UI primitives.',
    },
    {
      num: '03',
      title: 'Development',
      description: 'Rapid, iterative sprint development. Real-time feedback, mobile device testing, smooth 60fps animations.',
    },
    {
      num: '04',
      title: 'Ship & Optimize',
      description: 'Store deployment readiness, code splitting, SEO validation, and defensive error logging for prod stability.',
    },
  ],

  languages: ['Tamil (Native)', 'English (Professional)'],
}
