export const projects = [
  {
    id: 1,
    title: 'RECHUB_BACKEND',
    slug: 'rechub-backend',
    desc: 'Distributed recruitment management engine built with Flask and PostgreSQL. Features automated CI/CD and AWS deployment.',
    longDesc: 'A comprehensive recruitment management system backend. Features RESTful API endpoints, PostgreSQL database management with SQLAlchemy, and automated CI/CD pipelines via GitHub Actions and AWS CodePipeline.',
    tag: 'PRODUCTION',
    links: ['PYTHON', 'FLASK', 'AWS', 'DOCKER'],
    github: 'https://github.com/KacperCelejewski/RecHub',
    imageOverlay: 'RECHUB_BACKEND_CORE'
  },
  {
    id: 2,
    title: 'RECHUB_FRONTEND',
    slug: 'rechub-frontend',
    desc: 'Modern, edge-optimized HR dashboard interface. High-performance multi-repo solution with real-time UI updates.',
    longDesc: 'Modern recruitment hub dashboard built with Vue.js. Part of a multirepo architecture, providing a seamless and high-performance user experience.',
    tag: 'STABLE',
    links: ['VUE.JS', 'VITE', 'UI/UX', 'MULTIREPO'],
    github: 'https://github.com/KacperCelejewski/RecHub-Frontend',
    imageOverlay: 'RECHUB_UI'
  }
];
