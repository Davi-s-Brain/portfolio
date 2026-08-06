/* ============================================================
   Hero — apresentação + terminal decorativo
   ============================================================ */

import { useLanguage } from '../../i18n'
import { Icon } from '../Icon'
import Particles from './Particles'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.grid} />
        <div className={styles.glow} />
        <Particles />
        <div className={styles.noise} />
      </div>

      <div className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            <span className={styles.kickerArrow}>&gt;</span>
            {t.hero.kicker}
          </p>

          <h1 className={styles.name}>
            Davi <span className={styles.nameAccent}>Batista</span>
          </h1>

          <p className={styles.role}>{t.hero.role}</p>
          <p className={styles.student}>{t.hero.student}</p>
          <p className={styles.tagline}>{t.hero.tagline}</p>

          <div className={styles.actions}>
            <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
              {t.hero.ctaProjects}
              <Icon name="arrow-down" size={15} />
            </a>
            <a href="#contact" className={`${styles.btn} ${styles.btnGhost}`}>
              {t.hero.ctaContact}
            </a>
            <a
              href="https://github.com/Davi-s-Brain"
              target="_blank"
              rel="noreferrer"
              className={`${styles.btn} ${styles.btnGhost}`}
              aria-label={t.hero.githubLabel}
            >
              <Icon name="github" size={16} />
              {t.hero.github}
            </a>
          </div>
        </div>

        <div className={styles.term} aria-hidden="true">
          <div className={styles.termBar}>
            <span className={`${styles.termDot} ${styles.termDotRed}`} />
            <span className={`${styles.termDot} ${styles.termDotYellow}`} />
            <span className={`${styles.termDot} ${styles.termDotGreen}`} />
            <span className={styles.termTitle}>davi@portfolio: ~</span>
          </div>
          <div className={styles.termBody}>
            <p>
              <span className={styles.prompt}>$</span> whoami
            </p>
            <p className={styles.output}>davi_batista</p>
            <p>
              <span className={styles.prompt}>$</span> cat profile.txt
            </p>
            <p className={styles.output}>{t.hero.terminal.profile}</p>
            <p>
              <span className={styles.prompt}>$</span> ./status --current
            </p>
            <p className={styles.output}>{t.hero.terminal.status}</p>
            <p>
              <span className={styles.prompt}>$</span>
              <span className={styles.cursor} />
            </p>
          </div>
        </div>
      </div>

      <a href="#about" className={styles.scrollHint} aria-label={t.hero.scrollHint}>
        <span>{t.hero.scrollHint}</span>
        <Icon name="arrow-down" size={15} />
      </a>
    </section>
  )
}
