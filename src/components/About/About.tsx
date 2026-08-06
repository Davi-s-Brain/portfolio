/* ============================================================
   About — resumo + painel de contexto atual
   ============================================================ */

import { useLanguage } from '../../i18n'
import styles from './About.module.css'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>// {t.about.kicker}</p>
        <h2 className={styles.title}>{t.about.title}</h2>

        <div className={styles.grid}>
          <p className={styles.body}>{t.about.body}</p>

          <aside className={styles.panel} aria-label={t.about.currentLabel}>
            <p className={styles.panelLabel}>{t.about.currentLabel}</p>
            <p className={styles.panelRole}>{t.about.currentRole}</p>
            <p className={styles.panelCompany}>{t.about.currentCompany}</p>
            <p className={styles.panelFocus}>{t.about.currentFocus}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
