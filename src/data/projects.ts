/* ============================================================
   Projetos — dados independentes dos componentes
   ============================================================ */

import type { LocalizedText } from '../i18n'

export type Project = {
  id: string
  name: string
  description: LocalizedText
  tags: string[]
  url: string
}

export const projects: Project[] = [
  {
    id: 'libras-ml',
    name: 'libras-ML',
    description: {
      pt: 'Interpretação de LIBRAS (Língua Brasileira de Sinais) com Machine Learning.',
      en: 'LIBRAS (Brazilian Sign Language) interpretation using Machine Learning.',
    },
    tags: ['Python', 'Machine Learning'],
    url: 'https://github.com/Davi-s-Brain/libras-ML',
  },
  {
    id: 'evasao-escolar',
    name: 'Análise de Evasão Escolar — Ensino Médio',
    description: {
      pt: 'ML para prever fatores de evasão escolar no ensino médio brasileiro com dados do INEP.',
      en: 'ML to predict school dropout factors in Brazilian high schools using INEP data.',
    },
    tags: ['Python', 'scikit-learn', 'Pandas'],
    url: 'https://github.com/Davi-s-Brain/analise_ensino_medio_rp2',
  },
  {
    id: 'bolsa-familia',
    name: 'Análise de dados do Bolsa Família',
    description: {
      pt: 'Análise de dados do programa Bolsa Família.',
      en: 'Data analysis of the Bolsa Família welfare program.',
    },
    tags: ['Python', 'Pandas'],
    url: 'https://github.com/Davi-s-Brain/analise-de-dados-bolsa-familia',
  },
  {
    id: 'steam',
    name: 'Análise Steam',
    description: {
      pt: 'Análise de dados de jogos da Steam.',
      en: 'Data analysis of Steam games.',
    },
    tags: ['Python', 'Pandas'],
    url: 'https://github.com/Davi-s-Brain/analise_steam',
  },
  {
    id: 'sandwich-cli',
    name: 'sandwich-cli',
    description: {
      pt: 'Gerador de sanduíches aleatórios via CLI.',
      en: 'Random sandwich generator for the CLI.',
    },
    tags: ['Python', 'CLI'],
    url: 'https://github.com/Davi-s-Brain/sandwich-cli',
  },
  {
    id: 'ep-distribuidos',
    name: 'EP-Distribuidos',
    description: {
      pt: 'Rede P2P de compartilhamento de arquivos: download paralelo em chunks via sockets.',
      en: 'P2P file-sharing network: parallel chunk download over sockets.',
    },
    tags: ['Python', 'Sockets', 'P2P'],
    url: 'https://github.com/Davi-s-Brain/EP-Distribuidos',
  },
]
