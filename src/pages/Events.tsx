import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import EventCard from '../components/EventCard'
import { events, registrationLogic } from '../data/symposium'

type Filter = 'all' | 'technical' | 'non-technical'

export default function Events() {
  const [filter, setFilter] = useState<Filter>('all')

  const shown = events.filter((e) => filter === 'all' || e.category === filter)

  return (
    <div>
      <PageHero
        eyebrow="Browse"
        title="Events"
        subtitle="One mandatory flagship event, plus your pick of 2 more — technical and non-technical, free."
      />

      <section className="pb-4">
        <div className="container-xn">
          <div className="card-surface p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mist">
            <p>
              <span className="text-nebula-gold font-semibold">Ideathon</span> is mandatory ({registrationLogic.amount}). Register for it once, then pick any {registrationLogic.freePicks} of the events below — free.
            </p>
            <Link to="/faq" className="text-nebula-cyan flex items-center gap-1.5 shrink-0 hover:gap-2.5 transition-all">
              How this works <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-xn">
          <div className="flex justify-center gap-2 mb-12">
            {(['all', 'technical', 'non-technical'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                  filter === f
                    ? 'bg-nebula-gradient text-void border-transparent'
                    : 'border-hairline text-mist hover:border-nebula-cyan/60'
                }`}
              >
                {f === 'all' ? 'All Events' : f === 'technical' ? 'Technical' : 'Non-Technical'}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((e) => (
              <EventCard key={e.eventId} event={e} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
