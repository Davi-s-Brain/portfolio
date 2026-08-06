/* ============================================================
   useParallax — deslocamento sutil que segue o mouse
   ============================================================
   Define --mx/--my (0..1 normalizado pela janela) no elemento.
   O CSS usa essas vars para deslocar com transform.
   - Só ativa com ponteiro fino e sem prefers-reduced-motion.
   - Throttle via requestAnimationFrame (um update por frame).
   ============================================================ */

import { useEffect, useRef } from 'react'

export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return

    let rafId = 0
    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        el.style.setProperty('--mx', (event.clientX / window.innerWidth).toFixed(3))
        el.style.setProperty('--my', (event.clientY / window.innerHeight).toFixed(3))
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return ref
}