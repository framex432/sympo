import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, Clock, MapPin, Users, Trophy, UserCircle2, ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react'
import { events, registrationLogic } from '../data/symposium'
import OrbitField from '../components/OrbitField'
import { EventOrb, PlanetRings, Satellite, RocketTrail, MoonCrescent } from '../components/SpaceArt'
import EventStickers from '../components/EventStickers'

const GLYPHS: Record<string, 'shield' | 'rocket' | 'bug' | 'glasses' | 'camera' | 'brain'> = {
  ideathon: 'rocket',
  cryptrix: 'shield',
  debugging: 'bug',
  futureverse: 'glasses',
  'frame-quest': 'camera',
  memorax: 'brain',
}

// Each event gets a distinct hero visual built from the same space-art set,
// so every "know the event" page feels illustrated rather than templated.
function EventVisual({ eventId }: { eventId: string }) {
  switch (eventId) {
    case 'ideathon':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <RocketTrail className="w-32 sm:w-44 animate-float drop-shadow-[0_0_30px_rgba(255,63,158,0.4)]" />
        </div>
      )
    case 'cryptrix':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <Satellite className="w-40 sm:w-52 animate-driftSlow" />
        </div>
      )
    case 'debugging':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <PlanetRings className="w-36 sm:w-48 animate-driftSlow" />
        </div>
      )
    case 'futureverse':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <MoonCrescent className="w-32 sm:w-44 animate-float" />
        </div>
      )
    case 'frame-quest':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <PlanetRings className="w-32 sm:w-44 animate-float" />
        </div>
      )
    default:
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <Satellite className="w-32 sm:w-44 animate-driftSlow" />
        </div>
      )
  }
}

export default function EventDetails() {
  const { eventId } = useParams()
  const event = events.find((e) => e.eventId === eventId)

  if (!event) return <Navigate to="/events" replace />

  const tone = event.category === 'technical' ? 'cyan' : 'gold'

  const infoItems = [
    { icon: Calendar, label: 'Date', value: event.date },
    { icon: Clock, label: 'Time', value: event.time },
    { icon: MapPin, label: 'Venue', value: event.venue },
    { icon: Users, label: 'Team Size', value: event.teamSize },
    { icon: Trophy, label: 'Prize', value: event.prize },
  ]

  return (
    <div className="relative">
      <EventStickers eventId={event.eventId} />
      <section className="relative pt-36 pb-14 overflow-hidden">
        <OrbitField />
        <div className="container-xn relative grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <Link to="/events" className="inline-flex items-center gap-1.5 text-sm text-mist hover:text-starlight mb-5">
              <ArrowLeft size={14} /> Back to Events
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <EventOrb glyph={GLYPHS[event.eventId]} tone={tone} className="w-12 h-12" />
              <span className="eyebrow">{event.category === 'technical' ? 'Technical Event' : 'Non-Technical Event'}</span>
              {event.mandatory && (
                <span className="badge bg-nebula-gradient text-void">Mandatory</span>
              )}
            </div>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl text-starlight">
              {event.eventName.toUpperCase()}
            </h1>
            <p className="text-mist mt-3 max-w-xl">{event.tagline}</p>
          </div>
          <div className="h-40 sm:h-52">
            <EventVisual eventId={event.eventId} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-xn grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Fee logic banner, contextual per event */}
            <div className={`card-surface p-5 flex items-start gap-3 ${event.mandatory ? 'border-nebula-gold/40' : 'border-nebula-purple/30'}`}>
              <Sparkles size={18} className={event.mandatory ? 'text-nebula-gold shrink-0 mt-0.5' : 'text-nebula-violet shrink-0 mt-0.5'} />
              <p className="text-sm text-mist leading-relaxed">
                {event.mandatory
                  ? <>This is XENO 2K26&rsquo;s <span className="text-starlight font-medium">mandatory flagship event</span> — {registrationLogic.amount} registration here is required for every participant, and it also unlocks your pick of {registrationLogic.freePicks} more events, free.</>
                  : <>This event is <span className="text-starlight font-medium">free</span> — it&rsquo;s included the moment you register for Ideathon ({registrationLogic.amount}) and choose it as one of your {registrationLogic.freePicks} picks.</>}
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-starlight mb-3">About the Event</h2>
              <p className="text-mist leading-relaxed text-sm">{event.description}</p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-starlight mb-4">At a Glance</h2>
              <ul className="space-y-3">
                {event.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-mist">
                    <CheckCircle2 size={16} className="text-nebula-cyan shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-starlight mb-3">Rules</h2>
              <ul className="space-y-2.5">
                {event.rules.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-mist">
                    <span className="w-5 h-5 rounded-full bg-hull2 text-nebula-cyan text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-starlight mb-3">Eligibility</h2>
              <p className="text-mist leading-relaxed text-sm">{event.eligibility}</p>
            </div>

            <div className="card-surface p-5 flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-hull2 flex items-center justify-center text-nebula-cyan shrink-0">
                <UserCircle2 size={20} />
              </span>
              <div>
                <p className="text-xs text-mist/60 uppercase tracking-wide">Coordinator</p>
                <p className="text-sm font-medium text-starlight">{event.coordinator}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="card-surface p-6 sticky top-28">
              <h3 className="eyebrow mb-4">Quick Info</h3>
              <ul className="space-y-4">
                {infoItems.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-hull2 flex items-center justify-center text-nebula-cyan shrink-0">
                      <Icon size={14} />
                    </span>
                    <div>
                      <p className="text-[11px] text-mist/60 uppercase tracking-wide">{label}</p>
                      <p className="text-sm font-medium text-starlight">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                to="/register"
                className="btn-gold w-full mt-7 !py-3.5"
              >
                Go to Register Page <ArrowRight size={15} />
              </Link>
              <p className="text-[11px] text-center text-mist/50 mt-3">
                No form here — you&rsquo;ll scan a QR to pay and a QR to register.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
