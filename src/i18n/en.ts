/* ============================================================
   English dictionary — all UI strings
   (natural English, not a literal translation of pt.ts)
   ============================================================ */

import type { Dict } from './pt'

export const en: Dict = {
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    menuLabel: 'Main menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  langToggle: {
    toEn: 'Switch to English',
    toPt: 'Mudar para português',
    current: 'Language',
  },
  hero: {
    role: 'IT Analyst — Backend Java',
    tagline:
      'Turning problems into scalable solutions with Java backend, data and automation. Curious by nature, rigorous by craft.',
    ctaProjects: 'View projects',
    ctaContact: 'Contact',
    github: 'GitHub',
    githubLabel: 'GitHub profile',
    ticker: ['backend java', 'devops', 'automation', 'data', 'react', 'typescript'],
    metaLocation: 'base',
    metaFormation: 'study',
    formation: 'USP · Information Systems',
  },
  about: {
    kicker: 'about',
    title: 'About me',
    body: [
      'IT Analyst at F1RST Digital Services (Santander), building Java backend on the regulatory investment portability project.',
      'In DevOps at PagBank, I automated flows that impacted over 500 developers; at Instituto Taqtile I built fullstack products with React, Node.js and TypeScript.',
      'Information Systems undergraduate at USP (SP).',
    ],
    currentLabel: '// currently',
    currentRole: 'IT Analyst — Backend Java',
    currentCompany: 'F1RST Digital Services (Santander)',
    currentFocus: 'Investment portability · Spring Boot · Observability',
  },
  experience: {
    kicker: 'experience',
    title: 'Career path',
    current: 'Current',
    openLabel: 'Work experience',
  },
  skills: {
    kicker: 'skills',
    title: 'Stack & tools',
    groups: [
      { title: 'Backend', items: ['Java', 'Spring Boot', 'REST', 'Node.js', 'SQL'] },
      { title: 'Frontend', items: ['TypeScript', 'JavaScript', 'React'] },
      {
        title: 'DevOps & Cloud',
        items: ['Linux', 'Docker', 'AWS', 'CI/CD', 'Observability'],
      },
      {
        title: 'Data',
        items: ['Python', 'Pandas', 'Machine Learning (scikit-learn)'],
      },
      {
        title: 'Tools & Practices',
        items: [
          'GitHub',
          'Jira',
          'Automated testing',
          'JUnit',
          'OpenAPI',
          'SOLID',
          'Agile methodologies',
        ],
      },
      {
        title: 'Languages',
        items: ['Portuguese (native)', 'English (advanced)', 'Spanish (basic)'],
      },
    ],
  },
  projects: {
    kicker: 'projects',
    title: 'Projects',
    openLabel: 'open on GitHub',
    allLabel: 'All projects on GitHub',
  },
  contact: {
    kicker: 'contact',
    title: 'Let’s talk',
    intro:
      'Good conversations about technology, collaborations and new challenges.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    locationLabel: 'Location',
    locationValue: 'São Paulo, Brazil',
  },
}
