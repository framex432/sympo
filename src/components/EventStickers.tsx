import {
  Lock, KeyRound, ShieldCheck, Binary, Terminal, ScanLine,
  Lightbulb, Rocket, Presentation, MessageSquare, Laptop, Sparkles,
  Bug, Wrench, Search, Code2,
  Glasses, Globe, Gamepad2, Orbit, Compass,
  Camera, Aperture, Film, Image as ImageIcon, MapPin,
  Brain, Puzzle, Clock, Layers, Grid3x3,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Tone = 'cyan' | 'gold' | 'purple' | 'pink'

const TONE_STYLES: Record<Tone, { ring: string; bg: string; icon: string; glow: string }> = {
  cyan: { ring: 'border-nebula-cyan/50', bg: 'bg-nebula-cyan/10', icon: 'text-nebula-cyan', glow: 'rgba(34,211,238,0.45)' },
  gold: { ring: 'border-nebula-gold/50', bg: 'bg-nebula-gold/10', icon: 'text-nebula-gold', glow: 'rgba(255,203,87,0.45)' },
  purple: { ring: 'border-nebula-purple/50', bg: 'bg-nebula-purple/10', icon: 'text-nebula-violet', glow: 'rgba(139,92,246,0.45)' },
  pink: { ring: 'border-nebula-pink/50', bg: 'bg-nebula-pink/10', icon: 'text-nebula-pink', glow: 'rgba(255,63,158,0.45)' },
}

// Themed picture-sticker sets per event — every event gets exactly 5,
// mixing big "hero" stickers with smaller accent ones, styled as glowing
// badges (not thin outline icons) so they actually read as illustrations
// from a glance, the way the astronaut/planet art does in the hero.
const SETS: Record<string, { icon: LucideIcon; tone: Tone }[]> = {
  cryptrix: [
    { icon: Lock, tone: 'cyan' },
    { icon: ShieldCheck, tone: 'gold' },
    { icon: KeyRound, tone: 'purple' },
    { icon: Binary, tone: 'cyan' },
    { icon: Terminal, tone: 'pink' },
  ],
  ideathon: [
    { icon: Lightbulb, tone: 'gold' },
    { icon: Rocket, tone: 'pink' },
    { icon: Presentation, tone: 'cyan' },
    { icon: MessageSquare, tone: 'purple' },
    { icon: Laptop, tone: 'gold' },
  ],
  debugging: [
    { icon: Bug, tone: 'cyan' },
    { icon: Laptop, tone: 'gold' },
    { icon: Wrench, tone: 'purple' },
    { icon: Terminal, tone: 'cyan' },
    { icon: Code2, tone: 'pink' },
  ],
  futureverse: [
    { icon: Glasses, tone: 'purple' },
    { icon: Globe, tone: 'gold' },
    { icon: Gamepad2, tone: 'pink' },
    { icon: Orbit, tone: 'purple' },
    { icon: Compass, tone: 'cyan' },
  ],
  'frame-quest': [
    { icon: Camera, tone: 'pink' },
    { icon: Aperture, tone: 'gold' },
    { icon: Film, tone: 'purple' },
    { icon: ImageIcon, tone: 'pink' },
    { icon: MapPin, tone: 'cyan' },
  ],
  memorax: [
    { icon: Brain, tone: 'purple' },
    { icon: Puzzle, tone: 'pink' },
    { icon: Clock, tone: 'gold' },
    { icon: Layers, tone: 'purple' },
    { icon: Grid3x3, tone: 'cyan' },
  ],
}

// 5 fixed spots per event — a mix of big and small badges, spread down
// the left/right margins of a tall page so they never sit on top of text.
const SPOTS: { top: string; left: string; box: number; icon: number; anim: 'animate-float' | 'animate-drift' | 'animate-driftSlow'; delay: string }[] = [
  { top: '6%', left: '4%', box: 84, icon: 36, anim: 'animate-float', delay: '0s' },
  { top: '20%', left: '91%', box: 56, icon: 24, anim: 'animate-driftSlow', delay: '0.5s' },
  { top: '42%', left: '3%', box: 44, icon: 19, anim: 'animate-drift', delay: '1s' },
  { top: '62%', left: '92%', box: 92, icon: 40, anim: 'animate-float', delay: '0.3s' },
  { top: '84%', left: '5%', box: 52, icon: 22, anim: 'animate-driftSlow', delay: '0.8s' },
]

function StickerBadge({ Icon, tone, box, icon, anim, delay, top, left }: {
  Icon: LucideIcon
  tone: Tone
  box: number
  icon: number
  anim: string
  delay: string
  top: string
  left: string
}) {
  const t = TONE_STYLES[tone]
  return (
    <div
      className={`absolute ${anim}`}
      style={{ top, left, animationDelay: delay }}
    >
      <div
        className={`rounded-full border-2 ${t.ring} ${t.bg} backdrop-blur-[2px] flex items-center justify-center`}
        style={{ width: box, height: box, boxShadow: `0 0 ${box * 0.55}px ${t.glow}` }}
      >
        <Icon size={icon} className={t.icon} strokeWidth={1.8} />
      </div>
    </div>
  )
}

export default function EventStickers({ eventId }: { eventId: string }) {
  const set = SETS[eventId] ?? SETS.cryptrix

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Desktop / tablet — full 5-sticker spread in the margins */}
      <div className="hidden sm:block">
        {SPOTS.map((spot, i) => (
          <StickerBadge key={i} Icon={set[i].icon} tone={set[i].tone} {...spot} />
        ))}
      </div>
      {/* Mobile — smaller versions, pulled closer to the edges, still all 5 */}
      <div className="sm:hidden">
        {SPOTS.map((spot, i) => (
          <StickerBadge
            key={`m-${i}`}
            Icon={set[i].icon}
            tone={set[i].tone}
            top={spot.top}
            left={i % 2 === 0 ? '2%' : '80%'}
            box={Math.round(spot.box * 0.6)}
            icon={Math.round(spot.icon * 0.6)}
            anim={spot.anim}
            delay={spot.delay}
          />
        ))}
      </div>
    </div>
  )
}
