/* ============================================================
   useCardTilt — tilt 3D + glow spotlight que segue o cursor
   ============================================================
   Define --rx/--ry (graus) e --gx/--gy (percentuais) no elemento.
   - Leve: atualiza via requestAnimationFrame (throttle) e só
     com transform/opacity no CSS.
   - Só ativa em dispositivos com ponteiro fino e sem
     prefers-reduced-motion; em touch nada trava (nada de hover).
   ============================================================ */

import { useEffect, useRef } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'

const MAX_DEG = 6

export function useCardTilt<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const rafId = useRef(0)
  const enabledRef = useRef(true)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    enabledRef.current = finePointer && !reducedMotion
  }, [])

  const onMouseMove = (event: ReactMouseEvent<T>) => {
    if (!enabledRef.current) return
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    const gx = ((event.clientX - rect.left) / rect.width) * 100
    const gy = ((event.clientY - rect.top) / rect.height) * 100

    cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', `${(-py * MAX_DEG).toFixed(2)}deg`)
      el.style.setProperty('--ry', `${(px * MAX_DEG).toFixed(2)}deg`)
      el.style.setProperty('--gx', `${gx.toFixed(1)}%`)
      el.style.setProperty('--gy', `${gy.toFixed(1)}%`)
    })
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    })
  }

  return { ref, onMouseMove, onMouseLeave }
}