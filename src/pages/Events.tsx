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
        subtitle="Every event runs on campus under one combo registration — pick 1 Technical + 1 Non-Technical."
      />

      <section className="pb-4">
        <div className="container-xn">
          <div className="card-surface p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mist">
            <p>
              Every event runs on campus under one {registrationLogic.comboFee} combo covering {registrationLogic.comboIncludes} — extra events are {registrationLogic.extraEventFee} each. <span className="text-nebula-gold font-semibold">Ideathon</span> submissions are evaluated by the panel; attending online instead is also possible on request.
            </p>
            <Link to="/faq" className="text-nebula-cyan flex items-center gap-1.5 shrink-0 hover:gap-2.5 transition-all">
              How this works <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-xn">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {(['all', 'technical', 'non-technical'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
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
