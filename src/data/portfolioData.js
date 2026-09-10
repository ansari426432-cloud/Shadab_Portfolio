// Single source of truth for portfolio content.
// Update the values here — components read from this file only.

export const profile = {
  name: 'Mohammad Sadab',
  role: 'Full-Stack Developer',
  location: 'Mau, Uttar Pradesh, India',
  email: 'your.email@example.com', // TODO: replace with your real email
  phone: '+91 9005954900',
  linkedin: 'https://linkedin.com/in/your-handle', // TODO: replace with your real LinkedIn URL
  github: 'https://github.com/your-handle', // TODO: replace with your real GitHub URL
  summary:
    "I build production web applications with React.js, .NET Core, and C# — REST APIs, real-time features with SignalR, and role-based access control on top of relational databases. Shipped systems currently running in a live clinic and used by real students.",
  status: 'Open to full-stack roles',
}

export const metrics = [
  { label: 'Years shipping production code', value: '1+' },
  { label: 'API endpoints designed & built', value: '30+' },
  { label: 'User roles secured with RBAC', value: '5+' },
  { label: 'Live production systems', value: '2' },
]

export const skills = [
  {
    group: 'Languages',
    items: ['JavaScript (ES6+)', 'C#', 'HTML5', 'CSS3', 'C'],
  },
  {
    group: 'Frontend',
    items: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Web Design'],
  },
  {
    group: 'Backend',
    items: ['.NET Core', 'ASP.NET Core Web API', 'C#', 'SignalR', 'Entity Framework Core', 'LINQ'],
  },
  {
    group: 'API & Security',
    items: ['RESTful API Design', 'JWT Authentication', 'Role-Based Access Control'],
  },
  {
    group: 'Data',
    items: ['MySQL', 'SQL Server'],
  },
  {
    group: 'DevOps & Tools',
    items: ['Azure DevOps', 'CI/CD Pipelines', 'Git', 'GitHub', 'Postman'],
  },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    org: 'Cubicle Eight India',
    link: 'https://cubicleeight.com',
    period: 'Jul 2025 — Present',
    status: 'live',
    points: [
      'Engineered full-stack features across 3+ production modules using React.js, .NET Core (C#), and MySQL within an Agile team, cutting average page load time by 35%.',
      'Redesigned responsive UI components with React.js and Tailwind CSS, improving cross-device usability scores by 40% across desktop, tablet, and mobile breakpoints.',
      'Implemented JWT authentication and role-based access control in .NET Core REST APIs, securing access across 5+ distinct user roles.',
    ],
  },
  {
    role: 'Full Stack Developer Trainee',
    org: 'Coders Academy India',
    link: 'https://academy.codersfoundation.org',
    period: 'Jul 2024 — Jun 2025',
    status: 'complete',
    points: [
      'Completed a 1-year intensive full-stack development program, building 2 production-deployed applications from scratch with React.js and .NET Core.',
      'Developed JWT-secured RESTful APIs with .NET Core and C#, supporting authentication and full CRUD across 10+ endpoints.',
    ],
  },
]

export const projects = [
  {
    name: 'Doctora',
    tagline: 'Real-time OPD & clinic queue management platform',
    period: 'Aug 2024 — Jul 2025',
    status: 'live',
    link: 'https://doctora.live',
    stack: ['React.js', '.NET Core', 'C#', 'MySQL', 'SignalR', 'Tailwind CSS'],
    points: [
      'Architected a full-stack OPD management system adopted by a live clinic, eliminating 30% of manual scheduling and registration work.',
      'Built a real-time doctor-patient queue with SignalR — live status tracking (In Cabin / On Rest / Offline) across Doctor, Reception, and Display dashboards, cutting patient wait-response time by 40%.',
      'Delivered a mobile-responsive UI with consistent rendering across Android and desktop; companion app published to the Google Play Store.',
    ],
  },
  {
    name: 'AcademyGo',
    tagline: 'E-learning platform for courses & assessments',
    period: 'Oct 2024 — Jan 2025',
    status: 'complete',
    link: '',
    stack: ['.NET Core', 'C#', 'Entity Framework Core', 'LINQ', 'MySQL', 'Azure DevOps'],
    points: [
      'Designed and deployed 20+ RESTful API endpoints for course management, MCQ testing, and role-based access control.',
      'Built the data access layer with Entity Framework Core and LINQ, cutting data-retrieval code volume by 40% versus raw SQL.',
      'Configured Azure DevOps CI/CD pipelines, cutting manual deployment effort by 30% and enabling daily release cycles.',
    ],
  },
  {
    name: 'TaskFlow',
    tagline: 'MERN-stack task manager, built as a portfolio piece',
    period: '',
    status: 'complete',
    link: '',
    stack: ['MongoDB', 'Express', 'React.js', 'Node.js'],
    points: [
      'Built end-to-end on the MERN stack to demonstrate range beyond the .NET ecosystem — schema design, REST endpoints, and a React front end in one repo.',
    ],
  },
]

export const education = [
  {
    degree: 'Bachelor of Science',
    org: 'Veer Bahadur Singh Purvanchal University, Jaunpur, UP',
    period: '2019 — 2022',
  },
]

export const certifications = [
  'Full Stack Developer Training (1 Year) — Coders Academy (2025)',
  'CCC (Course on Computer Concepts) — NIELIT',
]

export const nav = [
  { id: 'top', label: 'Index' },
  { id: 'work', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]
