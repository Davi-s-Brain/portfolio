/* ============================================================
   Skills — grid de categorias
   ============================================================ */

import { useLanguage } from '../../i18n'
import styles from './Skills.module.css'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>// {t.skills.kicker}</p>
        <h2 className={styles.title}>{t.skills.title}</h2>

        <div className={styles.grid}>
          {t.skills.groups.map((group) => (
            <article key={group.title} className={styles.card}>
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
