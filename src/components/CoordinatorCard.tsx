import { Phone, Mail } from 'lucide-react'
import { Person } from '../data/symposium'

export function CoordinatorCard({ person, size = 'large' }: { person: Person; size?: 'large' | 'small' }) {
  if (size === 'small') {
    return (
      <div className="flex flex-col items-center text-center gap-2.5 group">
        <div className="w-20 h-20 rounded-full bg-hull2 border border-hairline flex items-center justify-center overflow-hidden group-hover:border-nebula-cyan/60 transition-colors">
          {person.photo ? (
            <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
          ) : (
            <span className="font-display font-semibold text-xl text-nebula-cyan">
              {person.name.replace(/^(Mr\.|Mrs\.|Dr\.|Ms\.)\s*/, '').charAt(0)}
            </span>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-starlight leading-tight">{person.name}</p>
          <p className="text-xs text-mist/70 mt-0.5">{person.department}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="card-surface p-6 flex flex-col items-center text-center gap-3">
      <div className="w-24 h-24 rounded-full bg-hull2 border-2 border-hairline flex items-center justify-center overflow-hidden">
        {person.photo ? (
          <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
        ) : (
          <span className="font-display font-semibold text-2xl text-nebula-cyan">
            {person.name.replace(/^(Mr\.|Mrs\.|Dr\.|Ms\.)\s*/, '').charAt(0)}
          </span>
        )}
      </div>
      <div>
        <p className="font-display font-semibold text-lg text-starlight">{person.name}</p>
        <p className="text-sm text-mist mt-0.5">{person.role}</p>
        <p className="text-xs text-mist/60 mt-0.5">{person.department}</p>
      </div>
      {(person.phone || person.email) && (
        <div className="flex items-center gap-3 mt-1">
          {person.phone && (
            <span className="w-8 h-8 rounded-full bg-hull2 flex items-center justify-center text-nebula-cyan">
              <Phone size={13} />
            </span>
          )}
          {person.email && (
            <span className="w-8 h-8 rounded-full bg-hull2 flex items-center justify-center text-nebula-cyan">
              <Mail size={13} />
            </span>
          )}
        </div>
      )}
    </div>
  )
}
