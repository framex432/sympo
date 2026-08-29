import { useEffect, useRef } from 'react'

// A fixed, full-viewport starfield that sits behind every page.
// Stars gently drift and twinkle — the site's persistent "moving space
// background" instead of a static image, so it stays crisp at any
// screen size and never repeats obviously.
export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    type Star = { x: number; y: number; r: number; speed: number; phase: number; hue: string }

    let stars: Star[] = []
    const hues = ['#f4f6ff', '#f4f6ff', '#f4f6ff', '#a5f3ff', '#ffd9a5', '#e9d5ff']

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round((width * height) / 9000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        speed: Math.random() * 0.012 + 0.003,
        phase: Math.random() * Math.PI * 2,
        hue: hues[Math.floor(Math.random() * hues.length)],
      }))
    }

    resize()
    window.addEventListener('resize', resize)

    let raf = 0
    let t = 0

    function draw() {
      ctx!.clearRect(0, 0, width, height)
      t += 1
      for (const s of stars) {
        const twinkle = 0.4 + Math.abs(Math.sin(t * s.speed + s.phase)) * 0.6
        ctx!.globalAlpha = twinkle
        ctx!.fillStyle = s.hue
        ctx!.beginPath()
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx!.fill()

        if (!reduceMotion) {
          s.y += s.speed * 6
          if (s.y > height) {
            s.y = -2
            s.x = Math.random() * width
          }
        }
      }
      ctx!.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="starfield-layer" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
