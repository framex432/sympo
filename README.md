# XENO 2K26 — Symposium Website (Space Theme, No-Data-Collection Edition)

National-level technical symposium website for **Sir Isaac Newton College of
Engineering and Technology (SINCET)**. Built with React + Vite + TypeScript +
Tailwind CSS + Lucide icons.

This version was fully restructured from the original:

- **No registration form / no personal data is collected anywhere on the site.**
  Payment and registration both happen off-site through two QR codes on the
  `/register` page, exactly like the printed event poster.
- **Space theme** throughout — dark navy background, a moving starfield,
  nebula pink/orange/purple/cyan accents, and original hand-built SVG art
  (astronaut, planets, satellite, rocket) instead of stock images.
- Every event has an elaborate **"Know the Event"** page: description,
  simple bullet-point highlights, rules, eligibility, and quick info —
  designed to be understood at a glance.
- A new **FAQ page** explains the registration logic in plain language.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL. To build for production:

```bash
npm run build
npm run preview
```

## The registration logic (important — read this)

- **Ideathon** is the flagship, hackathon-style event. Its **₹200** fee is
  the one mandatory registration for XENO 2K26.
- Once someone has registered for Ideathon, they can pick **any 2 more
  events** from the remaining 5 (technical or non-technical, any mix) —
  **free**, no extra form.
- This logic is defined in one place: `registrationLogic` inside
  `src/data/symposium.ts`. The `mandatory: true` flag on the Ideathon entry
  in the `events` array drives the "Mandatory" badge across the site.

If your actual pricing structure changes (a different flagship event, a
different number of free picks, etc.), edit `registrationLogic` and the
`mandatory` flag on the relevant event in `src/data/symposium.ts` — every
page (Home, Events, Event Details, FAQ, Register) reads from that single
source and updates automatically.

## ⚠️ Before you deploy — swap in your real QR codes

The `/register` page generates two QR codes **live in the browser** from two
placeholder values in `src/data/symposium.ts`:

```ts
export const upiId = 'xeno2k26@sincet'                       // "Scan to Pay"
export const registrationFormUrl = 'https://forms.gle/...'    // "Scan to Register"
```

Replace these with:

1. **`upiId`** — your real UPI ID. The QR is generated as a UPI-intent link
   (`upi://pay?pa=...&am=200`), so once you put in the real ID it will be a
   genuinely scannable payment QR for ₹200.
2. **`registrationFormUrl`** — the real link to your Google Form (or
   whatever your registration form/sheet is).

If you'd rather use the **exact QR images from your printed poster** instead
of regenerating them, replace the `<QRCodeBox />` components in
`src/pages/Register.tsx` with `<img src={...} />` tags pointing at the poster's
QR image files (drop them into `src/assets/` first).

## Where to edit things

Everything content-related lives in **`src/data/symposium.ts`**:

- `symposiumInfo` — name, dates, venue, fee, contact, address
- `registrationLogic` — the mandatory-event + free-picks logic and its
  4-step explanation (used on Home, FAQ, Register)
- `events` — every event's description, highlights, rules, coordinator,
  and the `mandatory` flag
- `faqs` — the Q&A list shown on the FAQ page
- `facultyLeads`, `eventCoordinators`, `studentCoordinators` — team profiles
  (add a `photo` field with an image path to replace the initials avatar)
- `upiId`, `registrationFormUrl` — see the QR section above

## Space theme notes

- `src/components/StarField.tsx` — the fixed, animated canvas starfield
  behind every page (twinkling + slowly drifting stars, respects
  `prefers-reduced-motion`).
- `src/components/SpaceArt.tsx` — all original SVG illustrations (planet,
  moon, satellite, astronaut, rocket, and the per-event orb icons). Nothing
  here is a downloaded image, so there are no licensing concerns and it
  stays crisp at any size.
- Colors and fonts live in `tailwind.config.js` under the `nebula.*` palette
  and `Space Grotesk` / `Inter` / `JetBrains Mono` font families.

## Pages

```
/              Home — hero, registration logic explainer, event previews
/events        All 6 events, filterable by Technical / Non-Technical
/events/:id    "Know the Event" — description, highlights, rules, info
/team          Faculty, student, and event coordinators
/faq           Full FAQ on how registration works
/register      The two QR codes (pay + register) — no form, no data collected
```
