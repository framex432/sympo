import { Link } from 'react-router-dom'
import { ShieldCheck, Wallet, QrCode, ArrowRight, Phone, IndianRupee } from 'lucide-react'
import PageHero from '../components/PageHero'
import QRCodeBox from '../components/QRCodeBox'
import OrbitField from '../components/OrbitField'
import { symposiumInfo, registrationLogic, upiId, registrationFormUrl, studentCoordinators } from '../data/symposium'

export default function Register() {
  return (
    <div>
      <PageHero
        eyebrow="Direct Registration"
        title="Scan. Pay. Register."
        subtitle="No sign-up form on this website — everything happens with these two QR codes, exactly like on the event poster."
      />

      {/* Privacy note */}
      <section className="pb-4">
        <div className="container-xn">
          <div className="card-surface p-5 flex items-start gap-3 max-w-2xl mx-auto text-center sm:text-left sm:flex-row flex-col items-center">
            <ShieldCheck size={18} className="text-nebula-cyan shrink-0 mt-0.5" />
            <p className="text-sm text-mist leading-relaxed">
              This website does not collect your name, phone number, or any personal detail. Payment and registration both happen directly with the college through the QR codes below.
            </p>
          </div>
        </div>
      </section>

      {/* QR codes */}
      <section className="py-14">
        <div className="container-xn relative">
          <OrbitField />
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto relative">
            <div className="card-surface p-8 flex flex-col items-center text-center gap-4">
              <span className="badge bg-hull2 text-nebula-cyan border border-nebula-cyan/30">
                <Wallet size={12} /> Step 1
              </span>
              <h2 className="font-display font-semibold text-xl text-starlight">Scan to Pay</h2>
              <QRCodeBox value={`upi://pay?pa=${upiId}&pn=${encodeURIComponent(symposiumInfo.fullTitle)}&am=200&cu=INR`} tone="cyan" label={upiId} />
              <p className="text-sm text-mist flex items-center gap-1">
                <IndianRupee size={13} /> 200 via any UPI app
              </p>
            </div>

            <div className="card-surface p-8 flex flex-col items-center text-center gap-4">
              <span className="badge bg-hull2 text-nebula-pink border border-nebula-pink/30">
                <QrCode size={12} /> Step 2
              </span>
              <h2 className="font-display font-semibold text-xl text-starlight">Scan to Register</h2>
              <QRCodeBox value={registrationFormUrl} tone="pink" label="Registration form" />
              <p className="text-sm text-mist">Submit your details &amp; pick your 2 free events</p>
            </div>
          </div>

          <p className="text-center text-xs text-mist/50 mt-8 font-mono tracking-wide">
            LAST DATE TO REGISTER: {symposiumInfo.registrationDeadline.toUpperCase()}
          </p>
        </div>
      </section>

      {/* The logic, restated simply right where people decide to pay */}
      <section className="py-14">
        <div className="container-xn max-w-2xl mx-auto">
          <div className="card-surface p-8">
            <h3 className="font-display font-semibold text-lg text-starlight mb-4">Before You Scan</h3>
            <ul className="space-y-3 text-sm text-mist">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-hull2 text-nebula-gold text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">1</span>
                The {registrationLogic.amount} you pay is for <span className="text-starlight font-medium">Ideathon</span>, XENO 2K26&rsquo;s mandatory flagship event.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-hull2 text-nebula-gold text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">2</span>
                That same registration lets you pick <span className="text-starlight font-medium">any {registrationLogic.freePicks} more events</span> from the rest, free.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-hull2 text-nebula-gold text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">3</span>
                Keep your payment screenshot ready — the registration form will ask for the transaction reference.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-hull2 text-nebula-gold text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">4</span>
                Carry your college ID and the screenshot to the help desk on 12 September for check-in.
              </li>
            </ul>
            <Link to="/faq" className="inline-flex items-center gap-1.5 text-sm text-nebula-cyan mt-6 hover:gap-2.5 transition-all">
              Full FAQ on registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Direct contact */}
      <section className="py-14">
        <div className="container-xn max-w-2xl mx-auto text-center">
          <span className="eyebrow">Facing an Issue?</span>
          <h3 className="font-display font-semibold text-2xl text-starlight mt-2 mb-6">Contact the Team Directly</h3>
          <p className="text-mist text-sm mb-8">
            Payment or registration queries are handled by the coordinators below, not by this website.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {studentCoordinators.slice(0, 2).map((p) => (
              <a
                key={p.name}
                href={`tel:${p.phone?.replace(/\s/g, '')}`}
                className="btn-outline !py-3 !px-5 !text-xs"
              >
                <Phone size={13} /> {p.name}
              </a>
            ))}
            <Link to="/team" className="btn-outline !py-3 !px-5 !text-xs">
              View Full Team <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
