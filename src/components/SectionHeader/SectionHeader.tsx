/* ============================================================
   SectionHeader — cabeçalho de seção estilo editor de código
   ============================================================
   À esquerda um comentário numerado (// 01. sobre), à direita
   um "file tab" (about.ts) — vibe IDE/terminal, autêntica.
   ============================================================ */

import { Icon } from '../Icon'
import styles from './SectionHeader.module.css'

type SectionHeaderProps = {
  index: string
  comment: string
  file: string
}

export default function SectionHeader({ index, comment, file }: SectionHeaderProps) {
  return (
    <div className={styles.head}>
      <p className={styles.kicker} data-reveal>
        <span className={styles.comment}>//</span>
        <span className={styles.index}>{index}.</span>
        {comment}
      </p>
      <span className={styles.file} data-reveal style={{ animationDelay: '100ms' }}>
        <Icon name="file" size={13} />
        {file}
      </span>
    </div>
  )
}