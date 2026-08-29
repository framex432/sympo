import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Rocket } from 'lucide-react'
import { symposiumInfo } from '../data/symposium'

export default function Footer() {
  return (
    <footer className="relative bg-hull text-starlight/90 mt-24 border-t border-hairline">
      <div className="nebula-divider" />
      <div className="container-xn py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-nebula-gradient text-void">
              <Rocket size={16} strokeWidth={2.25} />
            </span>
            <span className="font-display font-semibold text-lg text-starlight">
              {symposiumInfo.fullTitle}
            </span>
          </div>
          <p className="text-sm text-mist leading-relaxed">
            {symposiumInfo.type} by the {symposiumInfo.departments}, {symposiumInfo.collegeName}.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-mist">
            <li><Link to="/" className="hover:text-nebula-cyan transition-colors">Home</Link></li>
            <li><Link to="/events" className="hover:text-nebula-cyan transition-colors">Events</Link></li>
            <li><Link to="/team" className="hover:text-nebula-cyan transition-colors">Team</Link></li>
            <li><Link to="/faq" className="hover:text-nebula-cyan transition-colors">FAQ</Link></li>
            <li><Link to="/register" className="hover:text-nebula-cyan transition-colors">Register</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-mist">
            <li className="flex items-start gap-2.5">
              <Phone size={15} className="mt-0.5 text-nebula-cyan shrink-0" />
              {symposiumInfo.phone}
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={15} className="mt-0.5 text-nebula-cyan shrink-0" />
              {symposiumInfo.email}
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 text-nebula-cyan shrink-0" />
              {symposiumInfo.address}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Follow</h4>
          <div className="flex items-center gap-3">
            {[Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center hover:border-nebula-cyan/60 hover:text-nebula-cyan transition-colors"
                aria-label="Social link"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="hairline">
        <div className="container-xn py-5 text-xs text-mist/50 text-center">
          © 2026 {symposiumInfo.collegeName}. All Rights Reserved. This website collects no personal data — registration happens via QR on the Register page.
        </div>
      </div>
    </footer>
  )
}
