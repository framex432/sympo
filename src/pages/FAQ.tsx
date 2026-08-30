import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import { faqs, registrationLogic, symposiumInfo } from '../data/symposium'

function FAQRow({ question, answer, open, onToggle }: { question: string; answer: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="card-surface overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
        aria-expanded={open}
      >
        <span className="font-display font-medium text-starlight text-base">{question}</span>
        <ChevronDown size={18} className={`text-nebula-cyan shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-6 -mt-1 text-sm text-mist leading-relaxed animate-fadeUp">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div>
      <PageHero
        eyebrow="Know Before You Go"
        title="Frequently Asked Questions"
        subtitle="Everything about how XENO 2K26 registration actually works — no forms on this site, just answers."
      />

      {/* Registration logic, step by step */}
      <section className="pb-6">
        <div className="container-xn">
          <div className="card-surface p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <HelpCircle size={18} className="text-nebula-gold" />
              <h2 className="font-display font-semibold text-lg text-starlight">
                How Registration Works
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {registrationLogic.steps.map((s, i) => (
                <div key={s.title} className="relative">
                  <span className="font-mono text-xs text-nebula-cyan">
                    STEP {i + 1}
                  </span>

                  <h3 className="font-display font-medium text-starlight mt-1.5 mb-1.5">
                    {s.title}
                  </h3>

                  <p className="text-xs text-mist leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* REGISTER - Google Form */}
            <a
              href="https://forms.gle/RpJVv6rKi8npie4t5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-nebula-gold mt-7 hover:gap-2.5 transition-all"
            >
              Go to the Register page
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-xn max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <FAQRow
                key={f.question}
                question={f.question}
                answer={f.answer}
                open={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>

          <div className="text-center mt-14 text-sm text-mist">
            Still have a question? Reach the team directly at{' '}
            <a
              href={`tel:${symposiumInfo.phone.replace(/\s/g, '')}`}
              className="text-nebula-cyan hover:underline"
            >
              {symposiumInfo.phone}
            </a>{' '}
            or see the{' '}
            <Link
              to="/team"
              className="text-nebula-cyan hover:underline"
            >
              Team page
            </Link>{' '}
            for individual coordinators.
          </div>
        </div>
      </section>
    </div>
  )
}