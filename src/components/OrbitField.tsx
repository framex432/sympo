// Recurring orbit/satellite linework motif, echoing the poster's
// satellite + ring graphics. Used sparingly behind hero sections.
export default function OrbitField({ variant = 'default' }: { variant?: 'default' | 'dense' }) {
  return (
    <div className="orbit-field" aria-hidden="true">
      <svg
        className="absolute -right-24 -top-24 w-[480px] h-[480px] opacity-80 animate-spinSlower"
        viewBox="0 0 480 480"
        fill="none"
      >
        <circle cx="240" cy="240" r="180" stroke="#8b5cf6" strokeOpacity="0.28" />
        <circle cx="240" cy="240" r="120" stroke="#22d3ee" strokeOpacity="0.22" />
        <ellipse cx="240" cy="240" rx="220" ry="90" stroke="#ff3f9e" strokeOpacity="0.18" transform="rotate(-18 240 240)" />
        <circle cx="60" cy="240" r="3.5" fill="#ffcb57" />
        <circle cx="420" cy="200" r="2.5" fill="#22d3ee" />
        <circle cx="240" cy="60" r="2.5" fill="#ff3f9e" />
        <circle cx="330" cy="380" r="3" fill="#8b5cf6" />
      </svg>
      {variant === 'dense' && (
        <svg
          className="absolute -left-16 bottom-0 w-[320px] h-[320px] opacity-60 animate-spinSlow"
          viewBox="0 0 320 320"
          fill="none"
        >
          <circle cx="160" cy="160" r="110" stroke="#22d3ee" strokeOpacity="0.25" />
          <path d="M50 160 L270 160" stroke="#8b5cf6" strokeOpacity="0.15" />
          <path d="M160 50 L160 270" stroke="#8b5cf6" strokeOpacity="0.15" />
          <circle cx="50" cy="160" r="2.5" fill="#ff3f9e" />
          <circle cx="270" cy="160" r="2.5" fill="#ffcb57" />
        </svg>
      )}
    </div>
  )
}
