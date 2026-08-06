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
    kicker: "console.log('hello, world!')",
    role: 'IT Analyst — Backend Java',
    student: 'Information Systems undergraduate at USP (SP)',
    tagline:
      'Turning problems into scalable solutions with Java backend, data and automation. Curious by nature, rigorous by craft.',
    ctaProjects: 'View projects',
    ctaContact: 'Contact',
    github: 'GitHub',
    githubLabel: 'GitHub profile',
    terminal: {
      profile: 'backend java · devops · data',
      status: 'it analyst @ f1rst (santander) · usp',
    },
    scrollHint: 'scroll',
  },
  about: {
    kicker: 'about',
    title: 'About me',
    body: 'Information Systems undergraduate at USP and IT Analyst at F1RST Digital Services (Santander), working with Java backend on the regulatory investment portability project. Previously in DevOps at PagBank, building automations that impacted over 500 developers, and in fullstack development with React, Node.js and TypeScript at Instituto Taqtile.',
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
      'I’m open to opportunities, collaborations and good conversations about technology.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    locationValue: 'São Paulo, Brazil',
  },
  footer: {
    built: 'Built with React & Vite',
  },
}
