/* ============================================================
   Header — nav âncoras + toggle de idioma + menu mobile
   ============================================================ */

import { useEffect, useState } from 'react'
import { useLanguage } from '../../i18n'
import { Icon } from '../Icon'
import styles from './Header.module.css'

const NAV_IDS = ['about', 'experience', 'skills', 'projects', 'contact'] as const

export default function Header() {
  const { lang, t, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo} onClick={closeMenu} aria-label="Davi Batista — home">
          <span className={styles.logoTilde}>~</span>
          <span className={styles.logoSlash}>/</span>
          <span className={styles.logoName}>davi</span>
          <span className={styles.logoAccent}>_batista</span>
        </a>

        <nav
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
          id="site-nav"
          aria-label={t.nav.menuLabel}
        >
          <ul className={styles.navList}>
            {NAV_IDS.map((id, index) => (
              <li key={id}>
                <a href={`#${id}`} className={styles.navLink} onClick={closeMenu}>
                  <span className={styles.navIndex}>0{index + 1}.</span>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={styles.langBtnMobile}
            onClick={() => {
              toggleLang()
              setOpen(false)
            }}
            aria-label={lang === 'pt' ? t.langToggle.toEn : t.langToggle.toPt}
          >
            <span className={lang === 'pt' ? styles.langActive : ''}>PT</span>
            <span className={styles.langSep}>/</span>
            <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
          </button>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.langBtn}
            onClick={toggleLang}
            aria-label={lang === 'pt' ? t.langToggle.toEn : t.langToggle.toPt}
            title={lang === 'pt' ? t.langToggle.toEn : t.langToggle.toPt}
          >
            <span className={lang === 'pt' ? styles.langActive : ''}>PT</span>
            <span className={styles.langSep}>/</span>
            <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
          </button>
          <button
            type="button"
            className={styles.burger}
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}
