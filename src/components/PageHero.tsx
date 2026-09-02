import OrbitField from './OrbitField'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden">
      <OrbitField />
      <div className="container-xn relative text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl text-starlight mt-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-mist mt-3 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
