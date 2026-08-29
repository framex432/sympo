import { Link } from 'react-router-dom'
import { ArrowRight, Trophy, Sparkles } from 'lucide-react'
import { EventItem } from '../data/symposium'
import { EventOrb } from './SpaceArt'

const GLYPHS: Record<string, 'shield' | 'rocket' | 'bug' | 'glasses' | 'camera' | 'brain'> = {
  ideathon: 'rocket',
  cryptrix: 'shield',
  debugging: 'bug',
  futureverse: 'glasses',
  'frame-quest': 'camera',
  memorax: 'brain',
}

export default function EventCard({ event }: { event: EventItem }) {
  const tone = event.category === 'technical' ? 'cyan' : 'gold'

  return (
    <div className="card-surface p-6 flex flex-col gap-4 group hover:border-nebula-cyan/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
      {event.mandatory && (
        <span className="absolute top-0 right-0 badge bg-nebula-gradient text-void rounded-none rounded-bl-2xl px-4 py-1.5">
          Mandatory
        </span>
      )}

      <div className="flex items-start justify-between">
        <span className="eyebrow">
          {event.category === 'technical' ? 'Technical' : 'Non-Technical'}
        </span>
        <EventOrb glyph={GLYPHS[event.eventId]} tone={tone} className="w-11 h-11" />
      </div>

      <div>
        <h3 className="font-display font-semibold text-xl text-starlight">{event.eventName}</h3>
        <p className="text-sm text-mist mt-1.5 leading-relaxed">{event.tagline}</p>
      </div>

      <div className="hairline pt-4 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5 text-mist">
          <Sparkles size={13} className={event.mandatory ? 'text-nebula-gold' : 'text-nebula-cyan'} />
          {event.mandatory ? '\u20b9200 entry' : 'Free pick'}
        </span>
        <span className="flex items-center gap-1.5 text-mist">
          <Trophy size={13} /> Prizes
        </span>
      </div>

      <Link
        to={`/events/${event.eventId}`}
        className="flex items-center justify-center gap-1.5 text-center text-sm font-medium border border-hairline rounded-full py-2.5 hover:border-nebula-cyan/60 hover:bg-white/5 transition-colors"
      >
        Know the Event <ArrowRight size={14} />
      </Link>
    </div>
  )
}
