/* ============================================================
   Contact — canais de contato
   ============================================================ */

import { useLanguage } from '../../i18n'
import { Icon, type IconName } from '../Icon'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './Contact.module.css'

type ContactItem = {
  label: string
  value: string
  href?: string
  icon: IconName
}

export default function Contact() {
  const { t } = useLanguage()

  const items: ContactItem[] = [
    {
      label: t.contact.emailLabel,
      value: 'davi.batista@usp.br',
      href: 'mailto:davi.batista@usp.br',
      icon: 'mail',
    },
    {
      label: t.contact.linkedinLabel,
      value: 'in/davib42',
      href: 'https://linkedin.com/in/davib42',
      icon: 'linkedin',
    },
    {
      label: t.contact.githubLabel,
      value: '@Davi-s-Brain',
      href: 'https://github.com/Davi-s-Brain',
      icon: 'github',
    },
    {
      label: t.contact.locationLabel,
      value: t.contact.locationValue,
      icon: 'map-pin',
    },
  ]

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader index="05" comment={t.contact.kicker} file="contact.ts" />

        <h2 className={styles.title} data-reveal style={{ animationDelay: '60ms' }}>
          {t.contact.title}
        </h2>
        <p className={styles.intro} data-reveal style={{ animationDelay: '120ms' }}>
          {t.contact.intro}
        </p>

        <ul className={styles.grid}>
          {items.map((item, index) => {
            const isExternal = item.href?.startsWith('http') ?? false
            const content = (
              <>
                <span className={styles.iconBox}>
                  <Icon name={item.icon} size={18} />
                </span>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>{item.value}</span>
              </>
            )

            return (
              <li
                key={item.label}
                className={styles.card}
                data-reveal
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {item.href ? (
                  <a
                    className={styles.cardLink}
                    href={item.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
