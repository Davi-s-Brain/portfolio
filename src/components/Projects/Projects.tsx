/* ============================================================
   Projects — grid de cards
   ============================================================ */

import { useLanguage } from '../../i18n'
import { projects, type Project } from '../../data/projects'
import { useCardTilt } from '../../hooks/useCardTilt'
import { Icon } from '../Icon'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './Projects.module.css'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { lang, t } = useLanguage()
  const tilt = useCardTilt<HTMLElement>()

  return (
    <article
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={styles.card}
      data-reveal
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <span className={styles.cardNum} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className={styles.cardTop}>
        <span className={styles.folder} aria-hidden="true">
          <Icon name="folder" size={22} />
        </span>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className={styles.extLink}
          aria-label={`${project.name} — ${t.projects.openLabel}`}
        >
          <Icon name="external" size={18} />
        </a>
      </div>

      <h3 className={styles.cardTitle}>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className={styles.cardLink}
        >
          {project.name}
        </a>
      </h3>

      <p className={styles.cardDesc}>{project.description[lang]}</p>

      <div className={styles.cardTags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.cardTag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader index="04" comment={t.projects.kicker} file="projects.ts" />

        <div className={styles.titleRow} data-reveal>
          <h2 className={styles.title}>{t.projects.title}</h2>
          <a
            href="https://github.com/Davi-s-Brain"
            target="_blank"
            rel="noreferrer"
            className={styles.allLink}
          >
            {t.projects.allLabel}
            <Icon name="external" size={14} />
          </a>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}