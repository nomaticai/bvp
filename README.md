# Beach View Properties

Boutique short-term rental marketing/inquiry site for 6 properties on Hilton
Head Island, SC. Next.js 14 (App Router) + Tailwind CSS + Supabase. Direct
contact only (WhatsApp + Call) — no payments, no booking engine, no accounts.

Built to the Google Stitch designs and `DESIGN.md` ("Coastal Refinement").

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 (auto-picks a free port if taken)
npm run build    # static export of homepage + 6 SSG property pages
```

## Structure

```
app/
  layout.tsx                     Root layout, fonts, Material Symbols
  page.tsx                       Homepage
  properties/[slug]/page.tsx     Reusable property template (SSG, hourly ISR)
  not-found.tsx
components/                      Header, Footer, PropertyCard, PropertyGallery,
                                 AmenitiesGrid, ReviewsSection, BookingWidget,
                                 AvailabilityCalendar, ContactCTA, FloatingConcierge…
lib/
  config.ts                      CONTACT_PHONE (placeholder), site + host constants
  data.ts                        Seed content for all 6 real properties
  images.ts                      Placeholder imagery (Stitch demo URLs)
  types.ts                       Domain types mirroring the DB schema
  supabase.ts                    Client init (no-ops until env vars set)
  icalSync.ts                    iCal sync scaffold (not wired yet)
supabase/
  migrations/0001_schema.sql     Full schema + RLS (Section 5)
  migrations/0002_seed.sql       6 properties + amenities seed
  functions/sync-availability/   Edge Function scaffold (Section 7)
```

## Design tokens

`tailwind.config.ts` defines two intentional color layers (confirmed with client):
the full Material-3 token set from the Stitch exports (for pixel fidelity —
`primary` is `#123355`, the brief's navy `#2C4A6D` is `primary-container`), plus
named brand aliases (`navy`, `steel-blue`, `sky-blue`, `periwinkle`,
`slate-gray`, `whatsapp-green`) from Section 3.

## Handoff TODOs (client-provided inputs still needed)

- [ ] **Real phone number** — swap `CONTACT_PHONE` in `lib/config.ts` (currently
      the obviously-fake placeholder `+10000000000`). One-line change; every CTA
      reads from it.
- [ ] **6 Airbnb iCal export URLs** — add to `properties.airbnb_ical_url`, then
      implement + schedule `supabase/functions/sync-availability` and
      `lib/icalSync.ts`. The `AvailabilityCalendar` already accepts real
      `availability_blocks` with no code changes.
- [ ] **Real photos** — replace the Stitch placeholder URLs in `lib/images.ts`
      with real listing photos, and re-host off `a0.muscache.com` onto Supabase
      Storage / a CDN before public launch. `next.config.mjs` allows both hosts
      for now.
- [ ] **Placeholder nightly rates** — `placeholderNightlyRate` in `lib/data.ts`
      is displayed on cards and the booking widget, flagged `TODO(placeholder
      rate)` in code. Swap for real rates when supplied.
- [ ] **Supabase credentials** — copy `.env.local.example` → `.env.local`, run
      the migrations, then move `lib/data.ts` reads to live queries.
- [ ] **Domain**, and a decision on the optional `/about` page.

## Not in v1 (per brief)

Online payments, two-way calendar sync, guest accounts, admin CMS,
multi-language, Vrbo/Booking.com sync.
