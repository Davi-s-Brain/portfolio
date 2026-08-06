/* ============================================================
   Footer — créditos + redes sociais
   ============================================================ */

import { useLanguage } from '../../i18n'
import { Icon } from '../Icon'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.note}>
          © {year} Davi Batista — {t.footer.built}
        </p>

        <div className={styles.socials}>
          <a
            href="https://github.com/Davi-s-Brain"
            target="_blank"
            rel="noreferrer"
            className={styles.social}
            aria-label="GitHub — Davi-s-Brain"
          >
            <Icon name="github" size={18} />
          </a>
          <a
            href="https://linkedin.com/in/davib42"
            target="_blank"
            rel="noreferrer"
            className={styles.social}
            aria-label="LinkedIn — davib42"
          >
            <Icon name="linkedin" size={18} />
          </a>
          <a
            href="mailto:davi.batista@usp.br"
            className={styles.social}
            aria-label="davi.batista@usp.br"
          >
            <Icon name="mail" size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
