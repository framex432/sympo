import { useEffect, useState } from 'react'

function getRemaining(targetISO: string) {
  const total = new Date(targetISO).getTime() - Date.now()
  const clamped = Math.max(total, 0)
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24))
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((clamped / (1000 * 60)) % 60)
  const seconds = Math.floor((clamped / 1000) % 60)
  return { days, hours, minutes, seconds, done: total <= 0 }
}

export default function CountdownTimer({ target }: { target: string }) {
  const [time, setTime] = useState(() => getRemaining(target))

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Min', value: time.minutes },
    { label: 'Sec', value: time.seconds },
  ]

  return (
    <div className="flex items-center gap-2.5 sm:gap-4" role="timer" aria-live="polite">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-2.5 sm:gap-4">
          <div className="flex flex-col items-center min-w-[58px] sm:min-w-[72px] bg-white/5 backdrop-blur-md border border-hairline rounded-xl px-2.5 py-2.5 sm:px-4 sm:py-3 shadow-card">
            <span className="font-mono font-semibold text-xl sm:text-3xl text-starlight tabular-nums">
              {String(u.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-mist/70 mt-0.5">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && <span className="text-nebula-gold font-display text-xl hidden sm:block">:</span>}
        </div>
      ))}
    </div>
  )
}
