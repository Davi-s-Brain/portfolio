/* ============================================================
   Dicionário PT-BR — todas as strings de interface
   ============================================================ */

export const pt = {
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    skills: 'Skills',
    projects: 'Projetos',
    contact: 'Contato',
    menuLabel: 'Menu principal',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  langToggle: {
    toEn: 'Switch to English',
    toPt: 'Mudar para português',
    current: 'Idioma',
  },
  hero: {
    kicker: "console.log('olá, mundo!')",
    role: 'IT Analyst — Backend Java',
    student: 'Estudante de Sistemas de Informação na USP (SP)',
    tagline:
      'Transformo problemas em soluções escaláveis com backend Java, dados e automação. Curioso por natureza, rigoroso por ofício.',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Contato',
    github: 'GitHub',
    githubLabel: 'Perfil no GitHub',
    terminal: {
      profile: 'backend java · devops · dados',
      status: 'it analyst @ f1rst (santander) · usp',
    },
    scrollHint: 'explore',
  },
  about: {
    kicker: 'sobre',
    title: 'Sobre mim',
    body: 'Estudante de Sistemas de Informação na USP e IT Analyst na F1RST Digital Services (Santander), atuando com backend Java no projeto regulatório de portabilidade de investimentos. Experiência prévia em DevOps no PagBank, com automações que impactaram mais de 500 desenvolvedores, e em desenvolvimento fullstack com React, Node.js e TypeScript no Instituto Taqtile.',
    currentLabel: '// no momento',
    currentRole: 'IT Analyst — Backend Java',
    currentCompany: 'F1RST Digital Services (Santander)',
    currentFocus: 'Portabilidade de investimentos · Spring Boot · Observabilidade',
  },
  experience: {
    kicker: 'experiência',
    title: 'Trajetória',
    current: 'Atual',
    openLabel: 'Experiência de trabalho',
  },
  skills: {
    kicker: 'skills',
    title: 'Stack & ferramentas',
    groups: [
      { title: 'Backend', items: ['Java', 'Spring Boot', 'REST', 'Node.js', 'SQL'] },
      { title: 'Frontend', items: ['TypeScript', 'JavaScript', 'React'] },
      {
        title: 'DevOps & Cloud',
        items: ['Linux', 'Docker', 'AWS', 'CI/CD', 'Observabilidade'],
      },
      {
        title: 'Dados',
        items: ['Python', 'Pandas', 'Machine Learning (scikit-learn)'],
      },
      {
        title: 'Ferramentas & Práticas',
        items: [
          'GitHub',
          'Jira',
          'Testes automatizados',
          'JUnit',
          'OpenAPI',
          'SOLID',
          'Metodologias ágeis',
        ],
      },
      {
        title: 'Idiomas',
        items: ['Português (nativo)', 'Inglês (avançado)', 'Espanhol (básico)'],
      },
    ],
  },
  projects: {
    kicker: 'projetos',
    title: 'Projetos',
    openLabel: 'abrir no GitHub',
    allLabel: 'Ver todos no GitHub',
  },
  contact: {
    kicker: 'contato',
    title: 'Vamos conversar',
    intro: 'Estou aberto a oportunidades, colaborações e boas conversas sobre tecnologia.',
    emailLabel: 'E-mail',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    phoneLabel: 'Telefone',
    locationLabel: 'Localização',
    locationValue: 'São Paulo, SP',
  },
  footer: {
    built: 'Feito com React & Vite',
  },
}

export type Dict = typeof pt
