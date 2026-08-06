/* ============================================================
   Experiência profissional — ordem cronológica inversa
   ============================================================ */

import type { LocalizedText } from '../i18n'

export type ExperienceItem = {
  id: string
  role: LocalizedText
  company: string
  period: LocalizedText
  current: boolean
  highlights: { pt: string[]; en: string[] }
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'f1rst',
    role: {
      pt: 'IT Analyst — Backend Java',
      en: 'IT Analyst — Backend Java',
    },
    company: 'F1RST Digital Services (Santander)',
    period: {
      pt: 'Dez/2025 — Presente',
      en: 'Dec/2025 — Present',
    },
    current: true,
    highlights: {
      pt: [
        'Endpoints REST para o projeto regulatório de portabilidade de investimentos com Spring Boot',
        'Otimização de 2 aplicações críticas: ~17% menos consumo de memória via refatoração de consultas e cache',
        'Dashboards de observabilidade (latência, throughput, erros) para detecção proativa de incidentes',
        'Testes automatizados (unitários e de integração), elevando cobertura e reduzindo regressões',
      ],
      en: [
        'REST endpoints for the regulatory investment portability project using Spring Boot',
        'Optimized 2 critical applications: ~17% lower memory usage via query refactoring and caching',
        'Observability dashboards (latency, throughput, errors) for proactive incident detection',
        'Automated tests (unit and integration), raising coverage and cutting regressions',
      ],
    },
    tags: ['Spring Boot', 'Java', 'REST', 'Observability'],
  },
  {
    id: 'pagbank',
    role: {
      pt: 'Estágio em DevOps',
      en: 'DevOps Intern',
    },
    company: 'PagBank',
    period: {
      pt: 'Mar/2024 — Out/2025',
      en: 'Mar/2024 — Oct/2025',
    },
    current: false,
    highlights: {
      pt: [
        'Automação da integração de 500+ desenvolvedores ao GitHub Copilot (onboarding e produtividade)',
        'Automações com Jira sincronizando tickets e pipelines de CI/CD',
        'Dashboards de observabilidade para GitHub (saúde de repositórios, PRs e deploys)',
        'Contribuições em funcionalidades para a pipeline de CI/CD',
      ],
      en: [
        'Automated the onboarding of 500+ developers to GitHub Copilot (onboarding and productivity)',
        'Jira automations syncing tickets and CI/CD pipelines',
        'Observability dashboards for GitHub (repo health, PRs and deploys)',
        'Contributions to features for the CI/CD pipeline',
      ],
    },
    tags: ['GitHub Copilot', 'Jira', 'CI/CD', 'Observability'],
  },
  {
    id: 'taqtile',
    role: {
      pt: 'Estágio em Desenvolvimento Fullstack',
      en: 'Fullstack Development Intern',
    },
    company: 'Instituto Taqtile',
    period: {
      pt: 'Jan/2022 — Mar/2023',
      en: 'Jan/2022 — Mar/2023',
    },
    current: false,
    highlights: {
      pt: [
        'Projeto fullstack de ponta a ponta com contato direto com cliente (React + Node.js + TypeScript)',
        'Modelagem de banco de dados, integrações e testes automatizados',
        'Metodologias ágeis no planejamento e execução diária',
      ],
      en: [
        'End-to-end fullstack project with direct client contact (React + Node.js + TypeScript)',
        'Database modeling, integrations and automated tests',
        'Agile methodologies in daily planning and execution',
      ],
    },
    tags: ['React', 'Node.js', 'TypeScript'],
  },
]
