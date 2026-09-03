import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Lightbulb,
  UsersRound,
  BarChart3,
  Target,
} from 'lucide-react'

import { events, registrationLogic, eventCoordinators, faqs } from '../data/symposium'
import OrbitField from '../components/OrbitField'
import { EventOrb } from '../components/SpaceArt'
import EventStickers from '../components/EventStickers'

import ideathon1 from '../assets/events/ideathon-1.jpg'
import ideathon2 from '../assets/events/ideathon-2.jpg'
import ideathon3 from '../assets/events/ideathon-3.jpg'

import cryptrix1 from '../assets/events/cryptrix-1.jpg'
import cryptrix2 from '../assets/events/cryptrix-2.jpg'
import cryptrix3 from '../assets/events/cryptrix-3.jpg'

import debugging1 from '../assets/events/debugging-1.jpg'
import debugging2 from '../assets/events/debugging-2.jpg'
import debugging3 from '../assets/events/debugging-3.jpg'

import futureverse1 from '../assets/events/futureverse-1.jpg'
import futureverse2 from '../assets/events/futureverse-2.jpg'
import futureverse3 from '../assets/events/futureverse-3.jpg'

import framequest1 from '../assets/events/framequest-1.jpg'
import framequest2 from '../assets/events/framequest-2.jpg'
import framequest3 from '../assets/events/framequest-3.jpg'

import memorax1 from '../assets/events/memorax-1.jpg'
import memorax2 from '../assets/events/memorax-2.jpg'
import memorax3 from '../assets/events/memorax-3.jpg'


const GLYPHS: Record<
  string,
  'shield' | 'rocket' | 'bug' | 'glasses' | 'camera' | 'brain'
> = {
  ideathon: 'rocket',
  cryptrix: 'shield',
  debugging: 'bug',
  futureverse: 'glasses',
  'frame-quest': 'camera',
  memorax: 'brain',
}


// Event images
const EVENT_IMAGES: Record<string, string[]> = {
  ideathon: [ideathon1, ideathon2, ideathon3],
  cryptrix: [cryptrix1, cryptrix2, cryptrix3],
  debugging: [debugging1, debugging2, debugging3],
  futureverse: [futureverse1, futureverse2, futureverse3],
  'frame-quest': [framequest1, framequest2, framequest3],
  memorax: [memorax1, memorax2, memorax3],
}


// Icons cycled through for the "highlight chips" grid on the About tab
const CHIP_ICONS = [Target, Lightbulb, UsersRound, BarChart3]

const TABS = ['About', 'Rules', 'Format', 'Judging', 'Prizes', 'FAQs'] as const
type Tab = (typeof TABS)[number]


export default function EventDetails() {
  const { eventId } = useParams()

  const event = events.find((e) => e.eventId === eventId)

  if (!event) return <Navigate to="/events" replace />

  const tone = event.category === 'technical' ? 'cyan' : 'gold'

  const images = EVENT_IMAGES[event.eventId] || []

  // Active image for gallery
  const [activeImage, setActiveImage] = useState(0)

  // Active tab
  const [activeTab, setActiveTab] = useState<Tab>('About')

  const infoItems = [
    { icon: Calendar, label: 'Date', value: event.date },
    { icon: Clock, label: 'Time', value: event.time },
    { icon: MapPin, label: 'Venue', value: event.venue },
    { icon: Users, label: 'Team Size', value: event.teamSize },
    { icon: Trophy, label: 'Prize', value: event.prize },
  ]

  // Not every event has a confirmed coordinator — event.coordinator is ''
  // in that case, and the UI falls back to pointing people at the Team page.
  const hasNamedCoordinator = event.coordinator.trim().length > 0

  // Try to find a fuller coordinator record (for phone/email) that
  // matches the plain-text coordinator string in the event data.
  const coordinatorPerson = hasNamedCoordinator
    ? eventCoordinators.find((p) => event.coordinator.startsWith(p.name))
    : undefined

  const nextImage = () => {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    )
  }

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    )
  }

  return (
    <div className="relative">
      <EventStickers eventId={event.eventId} />

      {/* =====================================================
          HERO / EVENT HEADER + IMAGE GALLERY
      ====================================================== */}
      <section className="relative pt-32 pb-8 overflow-hidden">
        <OrbitField />

        <div className="container-xn relative grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* =================================================
              LEFT SIDE
          ================================================== */}
          <div>

            {/* Back */}
            <Link
              to="/events"
              className="inline-flex items-center gap-1.5 text-sm text-mist hover:text-starlight mb-5"
            >
              <ArrowLeft size={14} />
              Back to Events
            </Link>


            {/* Event category */}
            <div className="flex items-center gap-3 mb-3">
              <EventOrb
                glyph={GLYPHS[event.eventId]}
                tone={tone}
                className="w-12 h-12"
              />

              <span className="eyebrow">
                {event.category === 'technical'
                  ? 'Technical Event'
                  : 'Non-Technical Event'}
              </span>

              {event.mode === 'online' && (
                <span className="badge bg-nebula-gradient text-void">
                  Online Only
                </span>
              )}

              {event.mode === 'hybrid' && (
                <span className="badge bg-nebula-gradient text-void">
                  Online or On-Campus
                </span>
              )}
            </div>


            {/* Event name */}
            <h1 className="font-display font-semibold text-4xl sm:text-5xl text-starlight">
              {event.eventName.toUpperCase()}
            </h1>


            {/* Tagline */}
            <p className="text-mist mt-3 max-w-xl">
              {event.tagline}
            </p>

            <p className="text-mist/70 mt-2 max-w-xl text-sm leading-relaxed">
              {event.description}
            </p>


            {/* Register + Share */}
            <div className="flex flex-wrap items-center gap-3 mt-6">

              <a
                href="https://forms.gle/RpJVv6rKi8npie4t5"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Register for this Event
                <ArrowRight size={15} />
              </a>

              {(event.mode === 'online' || event.mode === 'hybrid') && (
                <a
                  href="mailto:xeno.official21@gmail.com?subject=Ideathon%20PPT%20Submission"
                  className="btn-outline"
                >
                  Submit Your PPT
                </a>
              )}

              <button
                type="button"
                className="btn-outline"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: event.eventName,
                      text: event.tagline,
                      url: window.location.href,
                    })
                  } else {
                    navigator.clipboard?.writeText(
                      window.location.href
                    )
                  }
                }}
              >
                Share
              </button>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE IMAGE GALLERY
              (1 large image on top, remaining images below)
          ================================================== */}
          {images.length > 0 && (
            <div className="w-full">

              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-hull2">

                <img
                  src={images[activeImage]}
                  alt={`${event.eventName} ${activeImage + 1}`}
                  className="w-full h-[260px] sm:h-[300px] lg:h-[330px] object-cover"
                />


                {/* Image count */}
                <span className="absolute top-4 right-4 px-4 py-2 rounded-full bg-black/70 text-white text-xs font-medium backdrop-blur-sm">
                  {activeImage + 1} / {images.length}
                </span>


                {/* Previous button */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-black/80 transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}


                {/* Next button */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-black/80 transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}

              </div>


              {/* Secondary thumbnails — the images NOT currently active,
                  so the row mirrors "1 big + 2 small" from the reference */}
              {images.length > 1 && (
                <div className="grid grid-cols-2 gap-3 mt-3">

                  {images
                    .map((image, index) => ({ image, index }))
                    .filter(({ index }) => index !== activeImage)
                    .map(({ image, index }) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        className="relative overflow-hidden rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
                      >
                        <img
                          src={image}
                          alt={`${event.eventName} thumbnail ${index + 1}`}
                          className="w-full h-[110px] sm:h-[130px] lg:h-[150px] object-cover"
                        />
                      </button>
                    ))}

                </div>
              )}

            </div>
          )}

        </div>
      </section>


      {/* =====================================================
          EVENT INFORMATION
      ====================================================== */}
      <section className="py-6">
        <div className="container-xn">

          {/* Fee logic banner — full width */}
          <div
            className={`card-surface p-5 flex items-start gap-3 mb-8 ${
              event.mode === 'online'
                ? 'border-nebula-gold/40'
                : 'border-nebula-purple/30'
            }`}
          >

            <Sparkles
              size={18}
              className={
                event.mode === 'online'
                  ? 'text-nebula-gold shrink-0 mt-0.5'
                  : 'text-nebula-violet shrink-0 mt-0.5'
              }
            />

            <p className="text-sm text-mist leading-relaxed">

              {event.mode === 'online' && (
                <>
                  This is a{' '}
                  <span className="text-starlight font-medium">
                    standalone online track
                  </span>{' '}
                  — {registrationLogic.ideathonFee} registration, separate
                  from the on-campus combo. {registrationLogic.ideathonNote},
                  due {registrationLogic.ideathonDeadline}.
                </>
              )}

              {event.mode === 'hybrid' && (
                <>
                  This event is{' '}
                  <span className="text-starlight font-medium">
                    covered by the on-campus combo
                  </span>{' '}
                  — {registrationLogic.comboFee} gets you {registrationLogic.comboIncludes}.
                  {' '}{registrationLogic.ideathonNote}, due{' '}
                  {registrationLogic.ideathonDeadline}.
                  {' '}{registrationLogic.ideathonOnlineNote}
                </>
              )}

              {event.mode === 'onsite' && (
                <>
                  This event is{' '}
                  <span className="text-starlight font-medium">
                    covered by the on-campus combo
                  </span>{' '}
                  — {registrationLogic.comboFee} gets you {registrationLogic.comboIncludes}.
                  Taking it as an extra pick costs just {registrationLogic.extraEventFee}{' '}
                  {registrationLogic.extraEventNote}.
                </>
              )}

            </p>
          </div>


          <div className="grid lg:grid-cols-3 gap-10">

            {/* =================================================
                LEFT: TABS CARD
            ================================================== */}
            <div className="lg:col-span-2 space-y-8">

              <div className="card-surface p-6 sm:p-7">

                {/* Tab bar */}
                <div className="flex items-center gap-6 border-b border-hairline mb-6 overflow-x-auto scrollbar-none">

                  {TABS.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`relative pb-3 text-sm whitespace-nowrap transition-colors ${
                        activeTab === tab
                          ? 'text-starlight font-medium'
                          : 'text-mist hover:text-starlight/80'
                      }`}
                    >
                      {tab}

                      {activeTab === tab && (
                        <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-nebula-gradient rounded-full" />
                      )}
                    </button>
                  ))}

                </div>


                {/* ============ ABOUT ============ */}
                {activeTab === 'About' && (
                  <div>
                    <h2 className="font-display font-semibold text-xl text-starlight mb-3">
                      About the Event
                    </h2>

                    <p className="text-mist leading-relaxed text-sm">
                      {event.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mt-6">
                      {event.highlights.slice(0, 4).map((h, i) => {
                        const Icon = CHIP_ICONS[i % CHIP_ICONS.length]
                        return (
                          <div
                            key={i}
                            className="card-surface-2 p-4 flex items-start gap-3"
                          >
                            <span className="w-9 h-9 rounded-full bg-hull flex items-center justify-center text-nebula-cyan shrink-0">
                              <Icon size={16} />
                            </span>
                            <p className="text-sm text-mist leading-snug">
                              {h}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}


                {/* ============ RULES ============ */}
                {activeTab === 'Rules' && (
                  <div>
                    <h2 className="font-display font-semibold text-xl text-starlight mb-4">
                      Rules
                    </h2>

                    <ul className="space-y-2.5">
                      {event.rules.map((r, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-mist"
                        >
                          <span className="w-5 h-5 rounded-full bg-hull2 text-nebula-cyan text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}


                {/* ============ FORMAT ============ */}
                {activeTab === 'Format' && (
                  <div>
                    <h2 className="font-display font-semibold text-xl text-starlight mb-4">
                      Format
                    </h2>

                    <ul className="space-y-3 text-sm text-mist">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-nebula-cyan shrink-0 mt-0.5" />
                        Team size: {event.teamSize}
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-nebula-cyan shrink-0 mt-0.5" />
                        Held at {event.venue} on {event.date}, {event.time}
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-nebula-cyan shrink-0 mt-0.5" />
                        Eligibility: {event.eligibility}
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-nebula-cyan shrink-0 mt-0.5" />
                        See the Rules tab for round-by-round specifics
                      </li>
                    </ul>
                  </div>
                )}


                {/* ============ JUDGING ============ */}
                {activeTab === 'Judging' && (
                  <div>
                    <h2 className="font-display font-semibold text-xl text-starlight mb-4">
                      Judging
                    </h2>

                    <p className="text-mist leading-relaxed text-sm">
                      {event.eventId === 'ideathon' &&
                        'Judging focuses on originality, problem relevance, feasibility, and the clarity of the proposed solution.'}
                      {event.eventId === 'cryptrix' &&
                        'Judging focuses on accuracy, logical reasoning, cryptographic understanding, and the ability to solve challenges within the allotted time.'}
                      {event.eventId === 'debugging' &&
                        'Judging focuses on the number of issues identified, correctness of the fixes, code quality, and completion time.'}
                      {event.eventId === 'futureverse' &&
                        'Judging focuses on creativity, innovation, presentation quality, and how effectively the concept is communicated.'}
                      {event.eventId === 'frame-quest' &&
                        'Judging focuses on creativity, composition, originality, theme interpretation, and the overall visual impact of the entry.'}
                      {event.eventId === 'memorax' &&
                        'Judging focuses on recall accuracy, concentration, response speed, and consistency throughout the memory challenge.'}
                    </p>
                  </div>
                )}


                {/* ============ PRIZES ============ */}
                {activeTab === 'Prizes' && (
                  <div>
                    <h2 className="font-display font-semibold text-xl text-starlight mb-4">
                      Prizes
                    </h2>

                    <div className="card-surface-2 p-5 flex items-start gap-3">
                      <Trophy size={18} className="text-nebula-gold shrink-0 mt-0.5" />
                      <p className="text-sm text-mist leading-relaxed">
                        {event.prize}
                      </p>
                    </div>
                  </div>
                )}


                {/* ============ FAQs ============ */}
                {activeTab === 'FAQs' && (
                  <div>
                    <h2 className="font-display font-semibold text-xl text-starlight mb-4">
                      FAQs
                    </h2>

                    <div className="space-y-4">
                      {faqs.slice(0, 5).map((f, i) => (
                        <div key={i}>
                          <p className="text-sm font-medium text-starlight mb-1">
                            {f.question}
                          </p>
                          <p className="text-sm text-mist leading-relaxed">
                            {f.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>


              {/* Bottom CTA */}
              <div className="card-surface p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-display font-semibold text-lg text-starlight">
                    Ready to participate?
                  </p>
                  <p className="text-sm text-mist mt-1">
                    Register now and be a part of XENO 2K26!
                  </p>
                </div>

                <a
                  href="https://forms.gle/RpJVv6rKi8npie4t5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold shrink-0"
                >
                  Register Now
                  <ArrowRight size={15} />
                </a>
              </div>

            </div>


            {/* =================================================
                RIGHT: QUICK INFO + COORDINATOR
            ================================================== */}
            <div className="space-y-6">

              {/* Quick Info */}
              <div className="card-surface p-6 lg:sticky lg:top-28">

                <h3 className="eyebrow mb-4">
                  Quick Info
                </h3>

                <ul className="space-y-4">
                  {infoItems.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-hull2 flex items-center justify-center text-nebula-cyan shrink-0">
                        <Icon size={14} />
                      </span>
                      <div>
                        <p className="text-[11px] text-mist/60 uppercase tracking-wide">
                          {label}
                        </p>
                        <p className="text-sm font-medium text-starlight">
                          {value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://forms.gle/RpJVv6rKi8npie4t5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full mt-7 !py-3.5"
                >
                  Go to Register Page
                  <ArrowRight size={15} />
                </a>

                <p className="text-[11px] text-center text-mist/50 mt-3">
                  Click the button to open the registration form.
                </p>

              </div>


              {/* Event Coordinator */}
              {hasNamedCoordinator ? (
                <div className="card-surface p-5 flex items-center gap-4">

                  <span className="w-14 h-14 rounded-full bg-hull2 border border-hairline flex items-center justify-center text-nebula-cyan shrink-0 font-display font-semibold text-lg">
                    {event.coordinator
                      .replace(/^(Mr\.|Mrs\.|Dr\.|Ms\.)\s*/, '')
                      .charAt(0)}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] text-mist/60 uppercase tracking-wide">
                      Event Coordinator
                    </p>

                    <p className="text-sm font-semibold text-starlight truncate">
                      {event.coordinator}
                    </p>

                    {coordinatorPerson?.phone && (
                      <a
                        href={`tel:${coordinatorPerson.phone}`}
                        className="inline-flex items-center gap-1.5 text-xs text-mist hover:text-nebula-cyan mt-1 transition-colors"
                      >
                        <Phone size={11} />
                        {coordinatorPerson.phone}
                      </a>
                    )}
                  </div>

                  {coordinatorPerson?.email && (
                    <a
                      href={`mailto:${coordinatorPerson.email}`}
                      aria-label={`Email ${event.coordinator}`}
                      className="w-9 h-9 rounded-full bg-hull2 flex items-center justify-center text-nebula-cyan hover:text-nebula-gold transition-colors shrink-0"
                    >
                      <Mail size={14} />
                    </a>
                  )}

                </div>
              ) : (
                <Link
                  to="/team"
                  className="card-surface p-5 flex items-center gap-4 hover:border-nebula-cyan/40 transition-colors"
                >

                  <span className="w-14 h-14 rounded-full bg-hull2 border border-hairline flex items-center justify-center text-nebula-cyan shrink-0">
                    <UsersRound size={20} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] text-mist/60 uppercase tracking-wide">
                      Event Coordinator
                    </p>

                    <p className="text-sm font-semibold text-starlight">
                      See event coordinators
                    </p>

                    <p className="text-xs text-mist mt-0.5">
                      Full list on the Team page
                    </p>
                  </div>

                  <ArrowRight size={15} className="text-mist shrink-0" />

                </Link>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
