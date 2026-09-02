import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, Calendar, MapPin, Users, Navigation, Copy, Rocket, Gift, QrCode } from 'lucide-react'
import CountdownTimer from '../components/CountdownTimer'
import EventCard from '../components/EventCard'
import OrbitField from '../components/OrbitField'
import { Astronaut, PlanetRings, MoonCrescent, Satellite } from '../components/SpaceArt'
import { symposiumInfo, events, registrationLogic } from '../data/symposium'

export default function Home() {
  const ideathon = events.find((e) => e.eventId === 'ideathon')!
  // Events covered by the on-campus combo — includes Ideathon since it can
  // also be joined in person, not just online.
  const onsiteEvents = events.filter(
    (e) => e.mode === 'onsite' || e.mode === 'hybrid'
  )

  const [addressCopied, setAddressCopied] = useState(false)

  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Sir+Issac+Newton+College+of+Engineering+and+Technology,+Velankanni+Road,+Pappakovil,+Nagapattinam,+Tamil+Nadu+611102'

  const fullAddress =
    'Sir Issac Newton College of Engineering and Technology,\nVelankanni Road, Pappakovil,\nNagapattinam - 611 102, Tamil Nadu'

  function handleCopyAddress() {
    navigator.clipboard.writeText(fullAddress).then(() => {
      setAddressCopied(true)
      setTimeout(() => setAddressCopied(false), 2000)
    })
  }

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end pb-16 sm:pb-20 overflow-hidden">
        <OrbitField variant="dense" />
        <PlanetRings className="absolute -right-16 top-24 w-56 sm:w-72 animate-driftSlow opacity-90" />
        <MoonCrescent className="absolute left-6 top-40 w-16 sm:w-24 animate-float opacity-80 hidden sm:block" />
        <Astronaut className="absolute right-6 sm:right-16 bottom-0 w-40 sm:w-56 animate-float opacity-95 drop-shadow-[0_0_30px_rgba(139,92,246,0.35)]" />
        <Satellite className="absolute left-2 bottom-24 w-24 sm:w-32 animate-driftSlow opacity-70 hidden sm:block" />

        <div className="container-xn relative w-full text-starlight animate-fadeUp">
          <p className="eyebrow mb-4">{symposiumInfo.type}</p>

          <h1 className="font-display font-bold leading-[0.95] text-5xl sm:text-7xl lg:text-8xl">
            <span className="gradient-text">{symposiumInfo.name}</span>
            <span className="block text-starlight">{symposiumInfo.edition}</span>
          </h1>

          <p className="mt-5 text-mist text-sm sm:text-base tracking-[0.15em] uppercase">
            {symposiumInfo.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm text-mist">
            <span className="flex items-center gap-2">
              <Calendar size={15} className="text-nebula-gold" />
              {symposiumInfo.date}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={15} className="text-nebula-gold" />
              {symposiumInfo.venue}, {symposiumInfo.collegeShort}
            </span>

            <span className="flex items-center gap-2">
              <Users size={15} className="text-nebula-gold" />
              Open to All Colleges
            </span>
          </div>

          <div className="mt-8">
            <CountdownTimer target={symposiumInfo.dateISO} />
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {/* REGISTER NOW → GOOGLE FORM */}
            <a
              href="https://forms.gle/RpJVv6rKi8npie4t5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Register Now <ArrowRight size={16} />
            </a>

            <Link to="/events" className="btn-outline">
              Explore Events
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="hairline">
        <div className="container-xn py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-display text-xl text-starlight">
              {symposiumInfo.collegeName}
            </p>

            <p className="text-sm text-mist mt-1">
              {symposiumInfo.collegeMeta} · {symposiumInfo.departments}
            </p>
          </div>

          <p className="font-mono text-xs text-nebula-gold tracking-widest">
            REG. CLOSES {symposiumInfo.registrationDeadline.toUpperCase()}
          </p>
        </div>
      </section>

      {/* HOW REGISTRATION WORKS */}
      <section className="py-20">
        <div className="container-xn">
          <div className="text-center mb-12">
            <span className="eyebrow">The Logic, In Plain Words</span>

            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-starlight mt-2">
              One Combo, Any 1 Technical + 1 Non-Technical Event
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <div className="card-surface p-8 border-nebula-purple/30">
              <span className="badge bg-hull2 text-nebula-violet border border-nebula-purple/40 mb-4">
                <Gift size={12} /> On-Campus Combo
              </span>

              <h3 className="font-display font-semibold text-2xl text-starlight mb-2">
                {registrationLogic.comboFee} for {registrationLogic.comboIncludes}
              </h3>

              <p className="text-mist text-sm leading-relaxed">
                {registrationLogic.bonus}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {onsiteEvents.map((e) => (
                  <span
                    key={e.eventId}
                    className="text-xs font-mono text-mist border border-hairline rounded-full px-3 py-1"
                  >
                    {e.eventName}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-surface p-8 relative overflow-hidden">
              <span className="badge bg-nebula-gradient text-void mb-4">
                <Rocket size={12} /> Hybrid
              </span>

              <h3 className="font-display font-semibold text-2xl text-starlight mb-2">
                {ideathon.eventName}
              </h3>

              <p className="text-mist text-sm leading-relaxed">
                Submit your idea as a PPT through email. Two ways to join — online or on campus — the choice is yours. Don't miss it!
              </p>

              <Link
                to={`/events/${ideathon.eventId}`}
                className="inline-flex items-center gap-1.5 text-sm text-nebula-cyan mt-4 hover:gap-2.5 transition-all"
              >
                Know the Event <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="text-sm text-nebula-gold hover:underline underline-offset-4"
            >
              Read the full FAQ on how registration works →
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="py-24">
        <div className="container-xn">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="eyebrow">Know The Events</span>

              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-starlight mt-2">
                All 6 Events
              </h2>
            </div>

            <Link
              to="/events"
              className="text-sm font-medium text-nebula-gold flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              View all events <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e) => (
              <EventCard key={e.eventId} event={e} />
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER STRIP */}
      <section className="py-20">
        <div className="container-xn">
          <div className="card-surface p-10 sm:p-14 text-center relative overflow-hidden">
            <OrbitField />

            <QrCode
              className="mx-auto text-nebula-cyan mb-4 relative"
              size={30}
            />

            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-starlight relative">
              Ready to Register?
            </h2>

            <p className="text-mist text-sm mt-3 max-w-md mx-auto relative">
              Click the button below to open the registration form and submit
              your details directly with the college.
            </p>

            {/* GO TO REGISTER PAGE → GOOGLE FORM */}
            <a
              href="https://forms.gle/RpJVv6rKi8npie4t5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-6 relative"
            >
              Go to Register Page <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* VENUE & DIRECTIONS */}
      <section className="py-24">
        <div className="container-xn grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Getting There</span>

            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-starlight mt-2 mb-6">
              Venue &amp; Directions
            </h2>

            <div className="space-y-4 text-sm text-mist leading-relaxed">
              <p>
                <span className="font-semibold text-starlight">
                  {symposiumInfo.collegeName}
                </span>
                <br />
                {symposiumInfo.address}
              </p>

              <p>
                <span className="font-semibold text-starlight">
                  Nearby landmark:
                </span>{' '}
                Nagapattinam Bus Stand, approx. 3 km
              </p>

              <p>
                <span className="font-semibold text-starlight">
                  Parking:
                </span>{' '}
                Free on-campus parking available for two- and four-wheelers
              </p>

              <p>
                <span className="font-semibold text-starlight">
                  Travel:
                </span>{' '}
                Well connected by bus and rail from Nagapattinam and Nagore
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-7 relative">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold !py-3 !px-6 !text-xs"
              >
                <Navigation size={14} /> Get Directions
              </a>

              <button
                onClick={handleCopyAddress}
                className="btn-outline !py-3 !px-6 !text-xs"
              >
                <Copy size={14} /> Copy Address
              </button>

              {addressCopied && (
                <span className="text-xs font-medium text-gold-500">
                  Address copied!
                </span>
              )}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-hairline shadow-card aspect-[4/3] card-surface">
            <iframe
              title="Campus location map"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Sir+Issac+Newton+College+of+Engineering+and+Technology+Nagapattinam&output=embed"
            />
          </div>
        </div>
      </section>
    </div>
  )
}