/* ============================================================
   Experience — timeline cronológica inversa
   ============================================================ */

import { useLanguage } from '../../i18n'
import { experience } from '../../data/experience'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './Experience.module.css'

export default function Experience() {
  const { lang, t } = useLanguage()

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader index="02" comment={t.experience.kicker} file="career.ts" />

        <h2 className={styles.title} data-reveal style={{ animationDelay: '60ms' }}>
          {t.experience.title}
        </h2>

        <ol className={styles.timeline}>
          {experience.map((item, index) => (
            <li
              key={item.id}
              className={styles.item}
              data-reveal
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span className={styles.marker} aria-hidden="true" />
              <article className={styles.card}>
                <header className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{item.role[lang]}</h3>
                    <p className={styles.company}>{item.company}</p>
                  </div>
                  <div className={styles.meta}>
                    {item.current && (
                      <span className={styles.badge}>{t.experience.current}</span>
                    )}
                    <time className={styles.period}>{item.period[lang]}</time>
                  </div>
                </header>

                <ul className={styles.list}>
                  {item.highlights[lang].map((highlight) => (
                    <li key={highlight} className={styles.highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
