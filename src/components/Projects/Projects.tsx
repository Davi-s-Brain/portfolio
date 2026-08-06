/* ============================================================
   Projects — grid de cards
   ============================================================ */

import { useLanguage } from '../../i18n'
import { projects } from '../../data/projects'
import { Icon } from '../Icon'
import styles from './Projects.module.css'

export default function Projects() {
  const { lang, t } = useLanguage()

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <p className={styles.kicker}>// {t.projects.kicker}</p>
            <h2 className={styles.title}>{t.projects.title}</h2>
          </div>
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
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
