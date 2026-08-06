/* ============================================================
   useRevealOnScroll — IntersectionObserver global
   ============================================================
   Observa todos os elementos com [data-reveal] e marca
   [data-revealed="true"] quando entram na viewport.
   A animação em si é definida no CSS global (index.css),
   usando apenas transform/opacity para não gerar jank.
   ============================================================ */

import { useEffect } from 'react'

export function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    // Fallback: sem IntersectionObserver, revela tudo de imediato
    // para nunca deixar conteúdo invisível.
    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.setAttribute('data-revealed', 'true'))
      return
    }

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', 'true')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -48px 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
