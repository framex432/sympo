import { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

export default function QRCodeBox({
  value,
  size = 220,
  label,
  tone = 'cyan',
}: {
  value: string
  size?: number
  label?: string
  tone?: 'cyan' | 'pink'
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, value, {
        width: size,
        margin: 1,
        color: { dark: '#0b0e24', light: '#f4f6ff' },
      }).catch(() => {})
    }
  }, [value, size])

  const ring = tone === 'cyan' ? 'border-nebula-cyan/50 shadow-glowCyan' : 'border-nebula-pink/50 shadow-glowPink'

  return (
    <div className="inline-flex flex-col items-center gap-3 max-w-full">
      <div className={`p-3 sm:p-4 bg-starlight rounded-2xl border-2 ${ring} max-w-full`}>
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="max-w-full h-auto"
          style={{ width: '100%', maxWidth: size, height: 'auto' }}
        />
      </div>
      {label && <span className="text-xs text-mist font-mono tracking-wide">{label}</span>}
    </div>
  )
}
