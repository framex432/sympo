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
  // 'online'  = joins only as a standalone online track (₹150, PPT submission).
  // 'onsite'  = runs on campus only, under the ₹200 combo (any 2 events of
  //             your choice), ₹100 per additional event.
  // 'hybrid'  = can be joined either way — online for ₹150 (Ideathon), or
  //             on campus under the same ₹200 combo as every other event.
  mode: 'online' | 'onsite' | 'hybrid'
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
  // Leave this as an empty string '' when the coordinator for this event
  // isn't confirmed — the UI then shows a link to the Team page's full
  // coordinator list instead of guessing a name.
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
    'Sir Issac Newton College of Engineering and Technology',

  collegeShort: 'SINCET',

  collegeMeta:
    '(An Autonomous Institution) · Accredited B++ by NAAC',

  departments:
    'Departments of AI&DS, CSE, IT & CSE (AI&ML)',

  date: '12 September 2026',

  // Reporting time at the registration desk (see registrationLogic.steps)
  dateISO: '2026-09-12T09:00:00',

  time: '9:00 A.M. (Reporting)',

  venue: 'College Auditorium',

  // Only concrete cutoff given is Ideathon's PPT submission deadline.
  // Other (on-campus combo) events register at the desk on the day.
  registrationDeadline: '10 September 2026',

  fee: '₹200 combo (on-campus) · ₹150 Ideathon (online)',

  address:
    'Velankanni Road, Pappakovil, Nagapattinam - 611 102, Tamil Nadu',

  phone: '+91 96298 43540',

  // Second official contact number
  altPhone: '+91 63740 82223',

  email: 'xeno.official21@gmail.com',

  website: 'www.sincet.ac.in',
}


// ── REGISTRATION LOGIC ────────────────────────────────────────

export const registrationLogic = {
  // ── Track 1: Ideathon (on campus by default; online is a quiet option) ──
  ideathonEventId: 'ideathon',
  ideathonFee: '₹150',
  ideathonNote:
    'Submit an IEEE-format PPT by email — entries are evaluated by the panel',
  // Soft, low-key line for the online option. Don't headline this fee
  // anywhere (Home page / cards) — only mention it inline on the Ideathon
  // event page itself, for people who specifically ask about attending online.
  ideathonOnlineNote:
    'If you\u2019d rather attend online instead of on campus, register for \u20b9150 before submitting your PPT.',
  ideathonOfflineNote:
    'Attending in person on campus? Ideathon is covered under the same ₹200 combo as every other event.',
  ideathonDeadline: '10 September 2026',

  // ── Track 2: on-campus combo (1 Technical + 1 Non-Technical) ──
  comboFee: '₹200',
  comboIncludes: 'any 1 Technical + 1 Non-Technical event',
  extraEventFee: '₹100',
  extraEventNote: 'per additional event, per participant',

  summary:
    'Pick 1 Technical + 1 Non-Technical event for one ₹200 on-campus combo registration. Ideathon is part of this combo too — submit your idea as an IEEE-format PPT and it\u2019s evaluated by the panel.',

  bonus:
    'The ₹200 combo registration covers your pick of 1 Technical + 1 Non-Technical event. Want to join more? Each additional event is just ₹100 per participant.',

  steps: [
    {
      title: 'Pick your track',

      detail:
        'Every event, including Ideathon, runs on campus under the ₹200 combo (1 Technical + 1 Non-Technical).',
    },

    {
      title: 'Pay & register',

      detail:
        'Pay via UPI and submit the registration form with your details, payment reference, and event choices.',
    },

    {
      title: 'Ideathon: submit your PPT',

      detail:
        'Email your IEEE-format PPT to xeno.official21@gmail.com on or before 10 September 2026.',
    },

    {
      title: 'Show up on 12 September',

      detail:
        'Report to the registration desk at 9:00 A.M. with your college ID and payment screenshot.',
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

    mode: 'hybrid',

    tagline:
      'Pitch the idea that solves tomorrow’s problem.',

    description:
      'Present an innovative solution to a real-world problem in IEEE paper format. Submit your PPT by email and it gets evaluated by the panel. It runs on campus as part of the usual combo — attending online instead is also possible, on request.',

    highlights: [
      'Teams of up to 3 present an original idea in IEEE paper format',
      'Submit your PPT by email — entries are evaluated by the faculty panel',
      'Runs on campus under the usual combo; online attendance is available too',
      'Exciting cash prizes for the best ideas',
    ],

    rules: [
      'Teams of up to 3 members',
      'Solution must be presented in IEEE paper format',
      'Submit your PPT to xeno.official21@gmail.com on or before 10 September 2026',
      'Attending on campus is covered under the ₹200 combo (or ₹100 as an additional event); attending online instead is a separate ₹150 registration',
    ],

    eligibility:
      'Open to all UG/PG engineering students',

    teamSize:
      '1–3 members',

    feeLabel:
      'Covered under the ₹200 combo (online attendance available for ₹150)',

    prize:
      'Exciting cash prizes for the best ideas',

    venue:
      'On Campus (online attendance available)',

    date:
      '12 September 2026',

    time:
      '10:00 A.M. onwards · PPT due 10 September 2026',

    coordinator:
      '',

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

    mode: 'onsite',

    tagline:
      'Crack the code before the clock does.',

    description:
      'A cryptography challenge where teams solve basic-to-medium level cipher and code-breaking problems under time pressure.',

    highlights: [
      'Basic to medium level cryptography problems to solve',
      'Teams of 2–3 members work against the clock',
      'Tests logical reasoning and cryptographic knowledge',
      'Covered under the ₹200 combo (1 Technical + 1 Non-Technical)',
    ],

    rules: [
      'Teams of 2–3 members',
      'Problems range from basic to medium level cryptography',
      'Use of mobile phones or external help is strictly prohibited',
      'Decision of the judges/coordinators is final',
    ],

    eligibility:
      'Open to all UG/PG engineering students',

    teamSize:
      '2–3 members',

    feeLabel:
      'Included in ₹200 combo · ₹100 if taken as an extra event',

    prize:
      'Participation certificate for every attendee',

    venue:
      'CSE Seminar Hall',

    date:
      '12 September 2026',

    time:
      '10:00 A.M. onwards',

    coordinator:
      'Mrs.V.Dhavamani, AP/CSE',

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

    mode: 'onsite',

    tagline:
      'Find the bug. Fix it. Beat the clock.',

    description:
      'A competitive debugging contest where teams are given code snippets with hidden errors and must identify and fix them correctly within the allotted time.',

    highlights: [
      'Teams of 2 find and fix bugs within the allotted time',
      'Scored on number of bugs fixed and time taken',
      'Tests debugging speed and code-reading accuracy',
      'Covered under the ₹200 combo (1 Technical + 1 Non-Technical)',
    ],

    rules: [
      'Teams of 2 members',
      'Find and fix the given bugs within the allotted time',
      'Scoring is based on number of bugs fixed and time taken',
      'Any form of malpractice leads to immediate disqualification',
    ],

    eligibility:
      'Open to all UG/PG engineering students',

    teamSize:
      '2 members',

    feeLabel:
      'Included in ₹200 combo · ₹100 if taken as an extra event',

    prize:
      'Participation certificate for every attendee',

    venue:
      'IT Computer Lab',

    date:
      '12 September 2026',

    time:
      '10:00 A.M. onwards',

    coordinator:
      '',

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

    mode: 'onsite',

    tagline:
      'Step into a world beyond the screen.',

    description:
      'A fun, non-technical event exploring futuristic ideas and concepts — a relaxed, imaginative break from the technical events.',

    highlights: [
      'Teams of 2–3 explore the future through a fun-filled event',
      'A relaxed, imaginative break from the technical events',
      'Open format, light on rules — built for enjoyment',
      'Covered under the ₹200 combo (1 Technical + 1 Non-Technical)',
    ],

    rules: [
      'Teams of 2–3 members',
      'Follow the format announced by the coordinator on the day',
    ],

    eligibility:
      'Open to all UG/PG students',

    teamSize:
      '2–3 members',

    feeLabel:
      'Included in ₹200 combo · ₹100 if taken as an extra event',

    prize:
      'Participation certificate for every attendee',

    venue:
      'Main Block Foyer',

    date:
      '12 September 2026',

    time:
      '10:00 A.M. onwards',

    coordinator:
      'Mr.G.Bharathikannan, CSE',

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

    mode: 'onsite',

    tagline:
      'One frame, one story, one shot.',

    description:
      'A photography contest — capture a creative photograph based on a theme announced on the spot, shot live on campus.',

    highlights: [
      'Individual event — capture a themed photo on the spot',
      'Theme is announced at the start of the event',
      'Shot live on campus during the event',
      'Covered under the ₹200 combo (1 Technical + 1 Non-Technical)',
    ],

    rules: [
      'Individual participation only',
      'Photos must be captured live on campus during the event, based on the theme announced on the spot',
      'Submit entries at the help desk before the deadline announced on the day',
    ],

    eligibility:
      'Open to all UG/PG students',

    teamSize:
      'Individual',

    feeLabel:
      'Included in ₹200 combo · ₹100 if taken as an extra event',

    prize:
      'Participation certificate for every attendee',

    venue:
      'Campus-wide',

    date:
      '12 September 2026',

    time:
      '10:00 A.M. onwards',

    coordinator:
      '',

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

    mode: 'onsite',

    tagline:
      'Test your memory. Beat the buzzer.',

    description:
      'A memory game — observe the given images, remember them, and win. Teams of 2 test their recall against the clock.',

    highlights: [
      'Teams of 2 observe images and race to recall them',
      'Tests memory, focus and quick recollection',
      'A fun, fast-paced non-technical challenge',
      'Covered under the ₹200 combo (1 Technical + 1 Non-Technical)',
    ],

    rules: [
      'Teams of 2 members',
      'Observe the given images, then recall them correctly to win',
      'Time limits apply per round as announced by the coordinator',
    ],

    eligibility:
      'Open to all UG/PG students',

    teamSize:
      '2 members',

    feeLabel:
      'Included in ₹200 combo · ₹100 if taken as an extra event',

    prize:
      'Participation certificate for every attendee',

    venue:
      'Seminar Hall 2',

    date:
      '12 September 2026',

    time:
      '10:00 A.M. onwards',

    coordinator:
      '',

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
      'Is Ideathon online only, or can I attend it on campus?',

    answer:
      'Ideathon runs as part of the on-campus combo, same as every other event — present your idea as an IEEE-format PPT and it\u2019s evaluated by the panel on the day. If you\u2019d rather attend online instead, that\u2019s also possible — register separately for ₹150 and submit your PPT by email before 10 September 2026.',
  },

  {
    question:
      'How does registration work for the on-campus events?',

    answer:
      'Debugging, Cryptrix, Futureverse, Frame Quest, Memorax, and Ideathon all run under one combo registration: ₹200 covers your pick of 1 Technical + 1 Non-Technical event. Want to join more? Each additional event is ₹100 per participant.',
  },

  {
    question:
      'Do I have to register for online Ideathon to join the other events?',

    answer:
      'No — online Ideathon and the ₹200 on-campus combo are separate registrations. You can register for the combo without registering for online Ideathon, and vice versa.',
  },

  {
    question:
      'Can I pick 2 technical events, or must I mix technical and non-technical?',

    answer:
      'The ₹200 combo covers exactly 1 Technical + 1 Non-Technical event. If you want a second Technical or second Non-Technical event, it\u2019s available for ₹100 as an additional event.',
  },

  {
    question:
      'How do I submit my Ideathon PPT?',

    answer:
      `If you're joining Ideathon online, email your IEEE-format PPT to ${'xeno.official21@gmail.com'} on or before 10 September 2026. Late submissions may not be accepted. If you're attending on campus instead, no PPT submission is needed beforehand.`,
  },

  {
    question:
      'Who is the coordinator for a specific event?',

    answer:
      'A couple of events list their coordinator directly on the event page. For every other event, the page links out to the full coordinator list on the Team page instead of naming an individual — reach out to any coordinator listed there for event-day queries.',
  },

  {
    question:
      'What do I need to bring on the day?',

    answer:
      'Your payment screenshot and a valid college ID card. Report to the registration desk at 9:00 A.M. on 12 September 2026 for check-in.',
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
      'The only fixed cutoff announced is Ideathon’s PPT submission deadline — 10 September 2026. For the on-campus combo events, register early; check with the coordinators for the latest on-the-day cut-off.',
  },

  {
    question:
      'Who do I contact if I face an issue while paying or registering?',

    answer:
      'Reach out directly to any of the student coordinators listed on the Team page, or call the numbers in the footer. They handle registration queries directly — this website only shares information.',
  },
]


// ── FACULTY LEADS ─────────────────────────────────────────────

export const facultyLeads: Person[] = [

  {
    name: 'Mrs. K. Maheshwari',
    role: 'Convenor · HOD',
    department: 'AI&DS',
  },

  {
    name: 'Mr. M. Mohamed Faisal',
    role: 'Co-Convenor · HOD',
    department: 'CSE',
  },

  {
    name: 'Mrs. A. Indiradevi',
    role: 'Co-Convenor · HOD',
    department: 'IT',
  },

  {
    name: 'Mrs. S. Sivaranjani',
    role: 'Co-Convenor · HOD',
    department: 'CSE (AI&ML)',
  },
]


// ── EVENT COORDINATORS ────────────────────────────────────────

export const eventCoordinators: Person[] = [

  {
    name: 'Mr.J.Johny Sepastine',
    role: 'Event Coordinator',
    department: 'AP/CSE',
    phone: '+91 88077 22484',
  },

  {
    name: 'Dr.P.Mangai',
    role: 'Event Coordinator',
    department: 'AP/AI&DS',
  },

  {
    name: 'Ms.R.Vidhya',
    role: 'Event Coordinator',
    department: 'AP/IT',
  },

  {
    name: 'Mrs. R.G. Nishaa',
    role: 'Event Coordinator',
    department: 'AP/AI&DS',
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