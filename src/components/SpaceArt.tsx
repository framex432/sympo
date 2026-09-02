// Original vector illustrations in the XENO palette — no external images.
// These are the site's recurring "space theme" visuals: planets, orbit
// rings, a satellite, a drifting astronaut, and a rocket trail.

export function PlanetRings({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="planetBody" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffcb57" />
          <stop offset="45%" stopColor="#ff8a3d" />
          <stop offset="100%" stopColor="#ff3f9e" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="92" ry="26" fill="none" stroke="#8b5cf6" strokeOpacity="0.55" strokeWidth="2" transform="rotate(-14 100 100)" />
      <circle cx="100" cy="100" r="52" fill="url(#planetBody)" />
      <ellipse cx="100" cy="100" rx="92" ry="26" fill="none" stroke="#22d3ee" strokeOpacity="0.35" strokeWidth="1.5" transform="rotate(-14 100 100)" strokeDasharray="4 6" />
    </svg>
  )
}

export function MoonCrescent({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="moonBody" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#e7ebff" />
          <stop offset="100%" stopColor="#8b93c9" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="46" fill="url(#moonBody)" />
      <circle cx="42" cy="42" r="7" fill="#6b74a8" opacity="0.5" />
      <circle cx="72" cy="70" r="10" fill="#6b74a8" opacity="0.4" />
      <circle cx="80" cy="40" r="5" fill="#6b74a8" opacity="0.4" />
    </svg>
  )
}

export function Satellite({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <g stroke="#aab0d6" strokeWidth="2" fill="none">
        <rect x="66" y="66" width="28" height="28" rx="4" fill="#12163a" stroke="#22d3ee" />
        <path d="M66 74 L34 60 M66 86 L34 100" stroke="#22d3ee" />
        <rect x="6" y="46" width="30" height="16" rx="2" transform="rotate(-18 21 54)" fill="#141a45" stroke="#8b5cf6" />
        <rect x="6" y="88" width="30" height="16" rx="2" transform="rotate(18 21 96)" fill="#141a45" stroke="#8b5cf6" />
        <path d="M94 74 L118 66 M94 86 L118 96" stroke="#ff3f9e" />
        <circle cx="124" cy="60" r="4" fill="#ff3f9e" />
        <circle cx="124" cy="102" r="4" fill="#ff3f9e" />
      </g>
    </svg>
  )
}

export function Astronaut({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 260" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="visorGlow" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#7dd8ff" />
          <stop offset="100%" stopColor="#1a3a6b" />
        </radialGradient>
      </defs>
      {/* backpack */}
      <rect x="72" y="90" width="56" height="70" rx="14" fill="#1b2050" stroke="#3b4590" strokeWidth="2" />
      {/* torso */}
      <path d="M60 110 q40 -24 80 0 l8 76 q-48 24 -96 0 z" fill="#eef1ff" stroke="#c3c9f2" strokeWidth="2" />
      <path d="M60 110 q40 -24 80 0" fill="none" stroke="#ff3f9e" strokeWidth="3" opacity="0.7" />
      {/* helmet */}
      <circle cx="100" cy="68" r="46" fill="#eef1ff" stroke="#c3c9f2" strokeWidth="2" />
      <circle cx="103" cy="66" r="32" fill="url(#visorGlow)" />
      <circle cx="90" cy="54" r="7" fill="#ffffff" opacity="0.55" />
      {/* arms */}
      <path d="M60 118 q-30 10 -34 46" fill="none" stroke="#eef1ff" strokeWidth="20" strokeLinecap="round" />
      <path d="M140 118 q30 22 20 58" fill="none" stroke="#eef1ff" strokeWidth="20" strokeLinecap="round" />
      {/* legs */}
      <path d="M78 182 q-6 34 -2 56" fill="none" stroke="#eef1ff" strokeWidth="22" strokeLinecap="round" />
      <path d="M122 182 q10 30 4 56" fill="none" stroke="#eef1ff" strokeWidth="22" strokeLinecap="round" />
      {/* badge */}
      <circle cx="100" cy="132" r="10" fill="#ffcb57" opacity="0.9" />
    </svg>
  )
}

export function RocketTrail({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 220" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffcb57" />
          <stop offset="100%" stopColor="#ff3f9e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M70 200 C 40 150 40 60 70 10 C 100 60 100 150 70 200 Z" fill="#eef1ff" stroke="#c3c9f2" strokeWidth="2" />
      <path d="M70 30 C 55 55 55 100 70 130 C 85 100 85 55 70 30 Z" fill="#22d3ee" opacity="0.5" />
      <path d="M40 150 l-22 30 M100 150 l22 30" stroke="#8b5cf6" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M55 195 Q70 240 85 195" fill="url(#flame)" />
    </svg>
  )
}

export function NebulaBlob({ className = '', color = '#8b5cf6' }: { className?: string; color?: string }) {
  return (
    <div
      className={className}
      style={{
        background: `radial-gradient(circle, ${color}55 0%, ${color}00 70%)`,
        filter: 'blur(2px)',
      }}
      aria-hidden="true"
    />
  )
}

// Per-event badge icons — small orbit-ring emblem with a category glyph.
export function EventOrb({
  glyph,
  tone,
  className = '',
}: {
  glyph: 'shield' | 'rocket' | 'bug' | 'glasses' | 'camera' | 'brain'
  tone: 'cyan' | 'gold'
  className?: string
}) {
  const ring = tone === 'cyan' ? '#22d3ee' : '#ffa53d'
  const fill = tone === 'cyan' ? '#0e2a3a' : '#3a2410'
  const glyphColor = tone === 'cyan' ? '#67e8f9' : '#ffcb57'

  const glyphs: Record<string, JSX.Element> = {
    shield: (
      <path d="M0 -10 L8 -6 V2 C8 8 4 11 0 12 C-4 11 -8 8 -8 2 V-6 Z" fill={glyphColor} />
    ),
    rocket: (
      <path d="M0 -12 C5 -6 5 4 0 12 C-5 4 -5 -6 0 -12 Z M-6 6 L-10 12 M6 6 L10 12" stroke={glyphColor} strokeWidth="1.6" fill={glyphColor} />
    ),
    bug: (
      <g fill="none" stroke={glyphColor} strokeWidth="1.6">
        <ellipse cx="0" cy="0" rx="6" ry="9" fill={glyphColor} />
        <path d="M-8 -6 L-3 -3 M8 -6 L3 -3 M-9 0 H-6 M9 0 H6 M-8 6 L-3 3 M8 6 L3 3 M0 -9 V-12" />
      </g>
    ),
    glasses: (
      <g fill="none" stroke={glyphColor} strokeWidth="1.8">
        <rect x="-11" y="-5" width="9" height="10" rx="3" />
        <rect x="2" y="-5" width="9" height="10" rx="3" />
        <path d="M-2 0 H2" />
      </g>
    ),
    camera: (
      <g fill="none" stroke={glyphColor} strokeWidth="1.8">
        <rect x="-10" y="-6" width="20" height="14" rx="3" />
        <circle cx="0" cy="1" r="4.5" />
        <path d="M-4 -6 L-2 -9 H2 L4 -6" fill={glyphColor} stroke="none" />
      </g>
    ),
    brain: (
      <path
        d="M-2 -10 C-8 -10 -10 -4 -7 -1 C-10 2 -8 9 -2 9 C-1 11 1 11 2 9 C8 9 10 2 7 -1 C10 -4 8 -10 2 -10 C1 -12 -1 -12 -2 -10 Z"
        fill={glyphColor}
      />
    ),
  }

  return (
    <svg viewBox="-20 -20 40 40" className={className} aria-hidden="true">
      <circle cx="0" cy="0" r="19" fill={fill} stroke={ring} strokeWidth="1.5" />
      <circle cx="0" cy="0" r="19" fill="none" stroke={ring} strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
      {glyphs[glyph]}
    </svg>
  )
}
