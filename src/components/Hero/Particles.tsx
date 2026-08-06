/* ============================================================
   Particles — fundo animado do Hero (canvas)
   ============================================================
   Partículas pequenas subindo lentamente com drift sinusoidal.
   - Leve: poucos pontos, só transform-like (posição no canvas),
     rAF pausado quando o hero sai da viewport.
   - Respeita prefers-reduced-motion: desenha um frame estático.
   - Decorativo: aria-hidden + pointer-events: none.
   ============================================================ */

import { useEffect, useRef } from 'react'
import styles from './Particles.module.css'

type Particle = {
  x: number
  y: number
  r: number
  speed: number
  drift: number
  phase: number
  opacity: number
  accent: boolean
}

const ACCENT_COLOR = '#e94560'
const NEUTRAL_COLOR = '#a2a5cc'
const MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const motionQuery = window.matchMedia(MOTION_QUERY)

    let particles: Particle[] = []
    let width = 0
    let height = 0
    let rafId = 0
    let running = false
    let lastTime = 0

    const buildParticles = () => {
      // Densidade proporcional à área, com limite para telas grandes.
      const count = Math.min(70, Math.max(22, Math.floor((width * height) / 18000)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.8 + Math.random() * 1.7,
        speed: 0.08 + Math.random() * 0.22,
        drift: 0.5 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
        opacity: 0.22 + Math.random() * 0.45,
        accent: Math.random() < 0.35,
      }))
    }

    const drawParticle = (p: Particle) => {
      ctx.globalAlpha = p.opacity * 0.55
      ctx.fillStyle = p.accent ? ACCENT_COLOR : NEUTRAL_COLOR
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    }

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) drawParticle(p)
      ctx.globalAlpha = 1
    }

    const tick = (now: number) => {
      if (!running) return
      // dt normalizado para ~60fps, limitado para evitar saltos.
      const dt = Math.min((now - lastTime) / 16.7, 3)
      lastTime = now

      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.y -= p.speed * dt
        p.x += Math.sin((p.y + p.phase) * 0.008) * 0.14 * dt

        if (p.y < -6) {
          p.y = height + 6
          p.x = Math.random() * width
        }
        if (p.x < -6) p.x = width + 6
        else if (p.x > width + 6) p.x = -6

        drawParticle(p)
      }
      ctx.globalAlpha = 1
      rafId = requestAnimationFrame(tick)
    }

    const start = () => {
      if (running || motionQuery.matches) return
      running = true
      lastTime = performance.now()
      rafId = requestAnimationFrame(tick)
    }

    const stop = () => {
      running = false
      cancelAnimationFrame(rafId)
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.round(width * dpr))
      canvas.height = Math.max(1, Math.round(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildParticles()
      if (motionQuery.matches) drawFrame()
    }

    resize()

    // Pausa o loop quando o hero sai da viewport (economia de CPU).
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start()
        else stop()
      },
      { threshold: 0 },
    )
    observer.observe(canvas)

    const onMotionChange = () => {
      if (motionQuery.matches) {
        stop()
        drawFrame()
      } else {
        const rect = canvas.getBoundingClientRect()
        const visible = rect.top < window.innerHeight && rect.bottom > 0
        if (visible) start()
      }
    }

    window.addEventListener('resize', resize)
    motionQuery.addEventListener('change', onMotionChange)

    return () => {
      stop()
      observer.disconnect()
      window.removeEventListener('resize', resize)
      motionQuery.removeEventListener('change', onMotionChange)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
}
