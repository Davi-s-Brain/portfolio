/* ============================================================
   Skills — grid de categorias
   ============================================================ */

import { useLanguage } from '../../i18n'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './Skills.module.css'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader index="03" comment={t.skills.kicker} file="skills.ts" />

        <h2 className={styles.title} data-reveal style={{ animationDelay: '60ms' }}>
          {t.skills.title}
        </h2>

        <div className={styles.grid}>
          {t.skills.groups.map((group, index) => (
            <article
              key={group.title}
              className={styles.card}
              data-reveal
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
