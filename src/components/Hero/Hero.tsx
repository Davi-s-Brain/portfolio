/* ============================================================
   Hero — wordmark editorial + "lanterna" de cursor
   Conceito inédito para o portfólio:
   - Tipografia como herói: nome em escala de pôster (clamp 3.5→10rem)
   - Camada duotone (primary→accent) revelada por máscara radial
     que segue o cursor (vars --mx/--my do useParallax)
   - Composição assimétrica: copy à esquerda, badge circular
     rotativo + meta à direita, ticker contínuo na base
   Motion: só transform/opacity, easing cubic-bezier(0.22,1,0.36,1)
   ============================================================ */

import { useLanguage } from '../../i18n'
import { useParallax } from '../../hooks/useParallax'
import { Icon } from '../Icon'
import styles from './Hero.module.css'

const FIRST_NAME = 'Davi'
const LAST_NAME = 'Batista'

export default function Hero() {
  const { t } = useLanguage()
  const heroRef = useParallax<HTMLElement>()

  // Duplicado para o loop seamless do ticker (-50% translateX)
  const ticker = [...t.hero.ticker, ...t.hero.ticker]

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      {/* ====== FUNDO — wash respirando + dot grid + noise ====== */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.wash} />
        <div className={styles.dots} />
        <div className={styles.noise} />
      </div>

      <div className={styles.content}>
        {/* ====== COLUNA PRINCIPAL — positioning statement ====== */}
        <div className={styles.copy}>
          <p className={styles.kicker}>
            <span className={styles.openDot} aria-hidden="true" />
            {t.hero.kicker}
          </p>

          {/* Nome em escala de pôster, com camada duotone revelada
              pela "lanterna" do cursor (mask nas vars --mx/--my) */}
          <h1 className={styles.name}>
            <span className={styles.srOnly}>Davi Batista</span>
            <span className={styles.nameBlock} aria-hidden="true">
              <span className={styles.nameText}>
                <span className={styles.nameLine}>{FIRST_NAME.toUpperCase()}</span>
                <span className={styles.nameLine}>{LAST_NAME.toUpperCase()}</span>
              </span>
              <span className={styles.nameGlow}>
                <span className={styles.nameLine}>{FIRST_NAME.toUpperCase()}</span>
                <span className={styles.nameLine}>{LAST_NAME.toUpperCase()}</span>
              </span>
            </span>
          </h1>

          <p className={styles.role}>{t.hero.role}</p>

          <p className={styles.tagline}>{t.hero.tagline}</p>

          <div className={styles.actions}>
            <a
              href="#projects"
              className={`${styles.btn} ${styles.btnPrimary}`}
              aria-label={t.hero.ctaProjects}
            >
              {t.hero.ctaProjects}
              <Icon name="arrow-down" size={12} />
            </a>
            <a
              href="#contact"
              className={`${styles.btn} ${styles.btnGhost}`}
              aria-label={t.hero.ctaContact}
            >
              {t.hero.ctaContact}
            </a>
            <a
              href="https://github.com/Davi-s-Brain"
              target="_blank"
              rel="noreferrer"
              className={`${styles.btn} ${styles.btnGhost}`}
              aria-label={t.hero.githubLabel}
            >
              <Icon name="github" size={14} />
              {t.hero.github}
            </a>
          </div>
        </div>

        {/* ====== RAIL — badge circular rotativo + meta ====== */}
        <aside className={styles.rail}>
          <div className={styles.badge} aria-hidden="true">
            <svg className={styles.badgeSvg} viewBox="0 0 200 200">
              <defs>
                <path
                  id="hero-badge-circle"
                  d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                />
              </defs>
              <text className={styles.badgeText}>
                <textPath href="#hero-badge-circle">
                  {t.hero.ticker.join(' • ')}
                </textPath>
              </text>
            </svg>
            <span className={styles.badgeCenter}>
              {'>'}
              <span className={styles.badgeCenterUnderscore}>_</span>
            </span>
          </div>

          <dl className={styles.meta}>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>{t.hero.metaLocation}</dt>
              <dd className={styles.metaValue}>{t.contact.locationValue}</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>{t.hero.metaFormation}</dt>
              <dd className={styles.metaValue}>{t.hero.formation}</dd>
            </div>
          </dl>
        </aside>
      </div>

      {/* ====== TICKER — stack contínuo na base ====== */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {ticker.map((word, i) => (
            <span key={i} className={styles.marqueeItem}>
              {word}
              <span className={styles.marqueeSep}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}