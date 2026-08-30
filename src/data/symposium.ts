// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update symposium info, events, FAQs, and
// coordinators. Nothing else in the app needs to change.
// ─────────────────────────────────────────────────────────────

// ── EVENT IMAGES ──────────────────────────────────────────────

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


// ── TYPES ─────────────────────────────────────────────────────

export interface EventItem {
  eventId: string
  eventName: string
  category: 'technical' | 'non-technical'
  mandatory: boolean
  tagline: string
  description: string
  highlights: string[]
  rules: string[]
  eligibility: string
  teamSize: string
  feeLabel: string
  prize: string
  venue: string
  date: string
  time: string
  coordinator: string

  // 3 images for event gallery
  images: string[]
}

export interface Person {
  name: string
  role: string
  department: string
  photo?: string
  phone?: string
  email?: string
}

export interface FAQItem {
  question: string
  answer: string
}


// ── SYMPOSIUM INFO ────────────────────────────────────────────

export const symposiumInfo = {
  name: 'XENO',
  edition: '2K26',
  fullTitle: 'XENO 2K26',
  tagline: 'INNOVATE • CODE • CREATE • EXPLORE',
  type: 'National Level Technical Symposium',

  collegeName:
    'Sir Isaac Newton College of Engineering and Technology',

  collegeShort: 'SINCET',

  collegeMeta:
    '(An Autonomous Institution) · Accredited B++ by NAAC',

  departments:
    'Departments of CSE, AI&DS, IT & CSE (AI&ML)',

  date: '12 September 2026',

  dateISO: '2026-09-12T09:30:00',

  time: '9:30 A.M.',

  venue: 'College Auditorium',

  registrationDeadline: '7 September 2026',

  fee: '₹200',

  address:
    'Velankanni Road, Pappakovil, Nagapattinam - 611 102, Tamil Nadu',

  phone: '+91 88077 22484',

  email: 'principal@sincet.ac.in',

  website: 'www.sincet.ac.in',
}


// ── REGISTRATION LOGIC ────────────────────────────────────────

export const registrationLogic = {
  mandatoryEventId: 'ideathon',

  freePicks: 2,

  amount: '₹200',

  summary:
    'Ideathon is XENO 2K26’s flagship hackathon-style event. Registering for it (₹200) is mandatory for every participant — that single payment is your entry into the symposium.',

  bonus:
    'Once you’re registered for Ideathon, you can pick any 2 more events from the remaining 5 — technical or non-technical, any combination — completely free. No extra fee, no extra form.',

  steps: [
    {
      title: 'Pay ₹200 for Ideathon',

      detail:
        'Complete the ₹200 registration payment for Ideathon. This is the only paid step.',
    },

    {
      title: 'Register on the form',

      detail:
        'Open the registration form and fill in your details, payment reference, and event choices.',
    },

    {
      title: 'Choose your 2 free events',

      detail:
        'Choose any 2 more events from Cryptrix, Debugging, Futureverse, Frame Quest, or Memorax.',
    },

    {
      title: 'Show up on 12 September',

      detail:
        'Carry your payment screenshot and college ID to the help desk at check-in for confirmation.',
    },
  ],
}


// ── EVENTS ────────────────────────────────────────────────────

export const events: EventItem[] = [

  // ───────────────────────────────────────────────────────────
  // IDEATHON
  // ───────────────────────────────────────────────────────────

  {
    eventId: 'ideathon',

    eventName: 'Ideathon',

    category: 'technical',

    mandatory: true,

    tagline:
      'Pitch the idea that solves tomorrow’s problem.',

    description:
      'XENO 2K26’s flagship event — a rapid-fire, hackathon-style ideation sprint. Teams pick a real-world problem, build an original solution on the spot, and pitch it live to a judging panel. This is the one event every participant registers for; everything else at XENO builds around it.',

    highlights: [
      'Flagship hackathon-style event — mandatory ₹200 registration for all participants',
      'Teams of up to 3 pitch an original solution to a live judging panel',
      'Fixed pitch window followed by rapid-fire Q&A from judges',
      'Registering here also unlocks your pick of 2 more events, free',
    ],

    rules: [
      'Teams of up to 3 members',
      'Each team gets a fixed pitch time followed by Q&A from judges',
      'Ideas must be original and not previously published or awarded elsewhere',
      'Bring your own laptop if your pitch includes a live demo',
    ],

    eligibility:
      'Open to all UG/PG engineering students',

    teamSize:
      '1–3 members',

    feeLabel:
      '₹200 · Mandatory for all participants',

    prize:
      'Cash prize + certificates for winners and runners-up',

    venue:
      'AI&DS Seminar Hall',

    date:
      '12 September 2026',

    time:
      '10:00 A.M. onwards',

    coordinator:
      'Dr. P. Mangai, AP/AI&DS',

    images: [
      ideathon1,
      ideathon2,
      ideathon3,
    ],
  },


  // ───────────────────────────────────────────────────────────
  // CRYPTRIX
  // ───────────────────────────────────────────────────────────

  {
    eventId: 'cryptrix',

    eventName: 'Cryptrix',

    category: 'technical',

    mandatory: false,

    tagline:
      'Crack the code before the clock does.',

    description:
      'A layered cryptography and cybersecurity challenge where teams decode ciphers, break puzzles, and race through progressively harder security scenarios to reach the final flag.',

    highlights: [
      'Multi-stage cipher-breaking challenge with a live leaderboard',
      'Rounds get progressively harder — teams are eliminated at each checkpoint',
      'Tests logical reasoning and cryptographic knowledge under time pressure',
      'Free to join once you’ve registered for Ideathon',
    ],

    rules: [
      'Each team may have a maximum of 2 members',
      'Rounds progress in increasing difficulty; teams are eliminated at each checkpoint',
      'Use of mobile phones or external help is strictly prohibited',
      'Decision of the judges/coordinators is final',
    ],

    eligibility:
      'Open to all UG/PG engineering students',

    teamSize:
      '1–2 members',

    feeLabel:
      'Free — one of your 2 picks after Ideathon',

    prize:
      'Cash prize + certificates for winners and runners-up',

    venue:
      'CSE Seminar Hall',

    date:
      '12 September 2026',

    time:
      '10:00 A.M. onwards',

    coordinator:
      'Mr. J. Johny Sebastine, AP/CSE',

    images: [
      cryptrix1,
      cryptrix2,
      cryptrix3,
    ],
  },


  // ───────────────────────────────────────────────────────────
  // DEBUGGING
  // ───────────────────────────────────────────────────────────

  {
    eventId: 'debugging',

    eventName: 'Debugging',

    category: 'technical',

    mandatory: false,

    tagline:
      'Find the bug. Fix it. Beat the clock.',

    description:
      'A competitive debugging contest where participants are given code snippets with hidden errors and must identify and fix them correctly in the shortest time.',

    highlights: [
      'Solo coding contest — just you, broken code, and a timer',
      'Covers C, C++, Java and Python snippets',
      'Scored on number of bugs fixed and time taken',
      'Free to join once you’ve registered for Ideathon',
    ],

    rules: [
      'Individual event — no team participation',
      'Languages: C, C++, Java, Python',
      'Scoring is based on number of bugs fixed and time taken',
      'Any form of malpractice leads to immediate disqualification',
    ],

    eligibility:
      'Open to all UG/PG engineering students',

    teamSize:
      'Individual',

    feeLabel:
      'Free — one of your 2 picks after Ideathon',

    prize:
      'Cash prize + certificates for winners and runners-up',

    venue:
      'IT Computer Lab',

    date:
      '12 September 2026',

    time:
      '10:00 A.M. onwards',

    coordinator:
      'Mrs. R.G. Nishaa, AP/AI&DS',

    images: [
      debugging1,
      debugging2,
      debugging3,
    ],
  },


  // ───────────────────────────────────────────────────────────
  // FUTUREVERSE
  // ───────────────────────────────────────────────────────────

  {
    eventId: 'futureverse',

    eventName: 'Futureverse',

    category: 'non-technical',

    mandatory: false,

    tagline:
      'Step into a world beyond the screen.',

    description:
      'An immersive non-technical experience exploring futuristic and virtual concepts through interactive stations and challenges scattered across the venue.',

    highlights: [
      'Rotating interactive stations — no two rounds feel the same',
      'Points stack up per station; highest cumulative score wins',
      'A relaxed, imaginative break from the technical events',
      'Free to join once you’ve registered for Ideathon',
    ],

    rules: [
      'Teams of up to 2 members',
      'Participants rotate through multiple interactive stations',
      'Points are awarded per station; highest cumulative score wins',
    ],

    eligibility:
      'Open to all UG/PG students',

    teamSize:
      '1–2 members',

    feeLabel:
      'Free — one of your 2 picks after Ideathon',

    prize:
      'Exciting prizes + certificates',

    venue:
      'Main Block Foyer',

    date:
      '12 September 2026',

    time:
      '10:00 A.M. onwards',

    coordinator:
      'Ms. R. Vidhya, AP/IT',

    images: [
      futureverse1,
      futureverse2,
      futureverse3,
    ],
  },


  // ───────────────────────────────────────────────────────────
  // FRAME QUEST
  // ───────────────────────────────────────────────────────────

  {
    eventId: 'frame-quest',

    eventName: 'Frame Quest',

    category: 'non-technical',

    mandatory: false,

    tagline:
      'One frame, one story, one shot.',

    description:
      'A photography and visual storytelling contest challenging participants to capture the spirit of the symposium through a themed set of prompts, shot live on campus.',

    highlights: [
      'Live photography contest shot entirely on campus, on the day',
      'Themed prompts released at the start of the event',
      'Light mobile editing allowed — no heavy filters or compositing',
      'Free to join once you’ve registered for Ideathon',
    ],

    rules: [
      'Individual participation only',
      'Photos must be captured live on campus during the event',
      'Basic mobile editing allowed; no heavy filters or compositing',
      'Submit entries at the help desk before the deadline announced on the day',
    ],

    eligibility:
      'Open to all UG/PG students',

    teamSize:
      'Individual',

    feeLabel:
      'Free — one of your 2 picks after Ideathon',

    prize:
      'Exciting prizes + certificates',

    venue:
      'Campus-wide',

    date:
      '12 September 2026',

    time:
      '10:00 A.M. onwards',

    coordinator:
      'Ms. R. Vidhya, AP/IT',

    images: [
      framequest1,
      framequest2,
      framequest3,
    ],
  },


  // ───────────────────────────────────────────────────────────
  // MEMORAX
  // ───────────────────────────────────────────────────────────

  {
    eventId: 'memorax',

    eventName: 'Memorax',

    category: 'non-technical',

    mandatory: false,

    tagline:
      'Test your memory. Beat the buzzer.',

    description:
      'A fast-paced memory and recall game with progressively harder rounds, testing sequences, patterns, and quick recollection under pressure.',

    highlights: [
      'Fast-paced elimination rounds leading to a final showdown',
      'Tests sequences, patterns and recall under a ticking clock',
      'Individual event — pure focus and composure',
      'Free to join once you’ve registered for Ideathon',
    ],

    rules: [
      'Individual participation only',
      'Multiple elimination rounds leading to a final showdown',
      'Time limits apply per round as announced by the coordinator',
    ],

    eligibility:
      'Open to all UG/PG students',

    teamSize:
      'Individual',

    feeLabel:
      'Free — one of your 2 picks after Ideathon',

    prize:
      'Exciting prizes + certificates',

    venue:
      'Seminar Hall 2',

    date:
      '12 September 2026',

    time:
      '10:00 A.M. onwards',

    coordinator:
      'Mrs. R.G. Nishaa, AP/AI&DS',

    images: [
      memorax1,
      memorax2,
      memorax3,
    ],
  },
]


// ── FAQs ──────────────────────────────────────────────────────

export const faqs: FAQItem[] = [

  {
    question:
      'Do I need to register for every event separately?',

    answer:
      'No. There’s only one mandatory registration — Ideathon, for ₹200. Once you’ve registered for Ideathon, you can pick any 2 more events from the remaining 5 (technical or non-technical, any mix) completely free.',
  },

  {
    question:
      'Why is Ideathon the only paid event?',

    answer:
      'Ideathon is XENO 2K26’s flagship hackathon-style event, and its ₹200 fee doubles as your entry to the whole symposium. That keeps things simple — one payment, one form, then pick whatever else interests you at no extra cost.',
  },

  {
    question:
      'Can I skip Ideathon and just join two other events?',

    answer:
      'No — Ideathon registration is mandatory for everyone attending XENO 2K26. It’s what unlocks free entry into your choice of 2 more events.',
  },

  {
    question:
      'Can I pick 2 technical events, or must I mix technical and non-technical?',

    answer:
      'Any combination works — 2 technical, 2 non-technical, or 1 of each. It’s entirely your choice.',
  },

  {
    question:
      'How do I actually register — is there a form on this website?',

    answer:
      'Open the registration form, fill in your details, complete the payment if required, and submit the form with your event choices.',
  },

  {
    question:
      'What do I need to bring on the day?',

    answer:
      'Your payment screenshot and a valid college ID card. Show both at the help desk during check-in for on-the-spot confirmation and your participant kit.',
  },

  {
    question:
      'Is XENO 2K26 open to other colleges?',

    answer:
      'Yes, it’s a national-level symposium open to UG/PG engineering students from any college.',
  },

  {
    question:
      'What’s the last date to register?',

    answer:
      'Registrations close on 7 September 2026. Payments and form submissions after this date may not be accepted, so register early.',
  },

  {
    question:
      'Who do I contact if I face an issue while paying or registering?',

    answer:
      'Reach out directly to any of the student coordinators listed on the Team page, or call the college number in the footer. They handle registration queries directly — this website only shares information.',
  },
]


// ── FACULTY LEADS ─────────────────────────────────────────────

export const facultyLeads: Person[] = [

  {
    name: 'Mrs. K. Maheshwari',
    role: 'Convenor · HOD, AI&DS',
    department: 'AI&DS',
  },

  {
    name: 'Mr. M. Mohamed Faisal',
    role: 'Co-Convenor · HOD, CSE',
    department: 'CSE',
  },

  {
    name: 'Mrs. A. Indiradevi',
    role: 'Co-Convenor · HOD, IT',
    department: 'IT',
  },

  {
    name: 'Mrs. S. Sivaranjani',
    role: 'Co-Convenor · HOD, AI&ML',
    department: 'CSE (AI&ML)',
  },
]


// ── EVENT COORDINATORS ────────────────────────────────────────

export const eventCoordinators: Person[] = [

  {
    name: 'Mr. J. Johny Sebastine',
    role: 'Event Coordinator',
    department: 'AP, CSE',
    phone: '+91 88077 22484',
  },

  {
    name: 'Dr. P. Mangai',
    role: 'Event Coordinator',
    department: 'AP, AI&DS',
  },

  {
    name: 'Mrs. R.G. Nishaa',
    role: 'Event Coordinator',
    department: 'AP, AI&DS',
  },

  {
    name: 'Ms. R. Vidhya',
    role: 'Event Coordinator',
    department: 'AP, IT',
  },
]


// ── STUDENT COORDINATORS ──────────────────────────────────────

export const studentCoordinators: Person[] = [

  {
    name: 'P. Praveen Kumar',
    role: 'Student Coordinator',
    department: 'CSE',
    phone: '+91 96298 43540',
  },

  {
    name: 'R. Mahalakshmi',
    role: 'Student Coordinator',
    department: 'AI&DS',
    phone: '+91 93427 12708',
  },

  {
    name: 'R. Thileep',
    role: 'Student Coordinator',
    department: 'AI&DS',
    phone: '+91 76049 07436',
  },

  {
    name: 'M. Godwin',
    role: 'Student Coordinator',
    department: 'IT',
    phone: '+91 86084 26963',
  },
]


// ── REGISTRATION ──────────────────────────────────────────────

// UPI ID for payment
export const upiId =
  'xeno2k26@sincet'


// Google Form registration URL
export const registrationFormUrl =
  'https://forms.gle/RpJVv6rKi8npie4t5'