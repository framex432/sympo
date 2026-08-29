import PageHero from '../components/PageHero'
import { CoordinatorCard } from '../components/CoordinatorCard'
import { facultyLeads, eventCoordinators, studentCoordinators } from '../data/symposium'

export default function Team() {
  return (
    <div>
      <PageHero
        eyebrow="Meet The Team"
        title="Faculty & Event Incharge"
        subtitle="The convenors, coordinators, and students steering XENO 2K26. Reach out to them directly for any registration query."
      />

      <section className="py-16">
        <div className="container-xn space-y-16">
          <div>
            <h2 className="font-display font-semibold text-2xl text-starlight mb-6 text-center">
              Faculty Coordinators
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facultyLeads.map((p) => (
                <CoordinatorCard key={p.name} person={p} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-semibold text-2xl text-starlight mb-8 text-center">
              Event Coordinators
            </h2>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
              {eventCoordinators.map((p) => (
                <CoordinatorCard key={p.name} person={p} size="small" />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-semibold text-2xl text-starlight mb-6 text-center">
              Student Coordinators
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentCoordinators.map((p) => (
                <CoordinatorCard key={p.name} person={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
