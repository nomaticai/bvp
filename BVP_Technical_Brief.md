# Beach View Properties — Technical Brief v1

**Client:** Beach View Properties (BVP), Hilton Head Island, SC
**Prepared by:** Nomatic AI
**Build tool:** Claude Code
**Design source:** Google Stitch screens (Homepage + Property Detail template), `D:\bvp\DESIGN.md`

---

## 1. Project Summary

BVP is a boutique short-term rental operator with **6 properties** on Hilton Head Island, currently listed on Airbnb. We are building an independent marketing/booking-inquiry website that:

- Showcases all 6 properties with real content (photos, descriptions, amenities, reviews) pulled from their live Airbnb listings
- Displays **live availability** synced from each property's Airbnb calendar (one-way, read-only sync via iCal)
- Converts visitors via **direct contact** (WhatsApp + Call), not online payment — there is no booking engine, no payment processing, no guest accounts in v1
- Looks and feels like a boutique hotel brand, not a marketplace clone

**Explicitly out of scope for v1:** online payments, two-way calendar sync, guest accounts/login, admin CMS (property data is seeded directly in code/DB), multi-language, Vrbo/Booking.com sync.

---

## 2. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSG/ISR for property pages — fast, SEO-friendly |
| Styling | Tailwind CSS | Design tokens pulled from `DESIGN.md` |
| UI components | shadcn/ui (as base) + custom components matching Stitch design | Do not use default shadcn styling as-is — restyle to match Stitch screens |
| Database | Supabase (Postgres) | Stores property data, amenities, reviews, cached availability |
| Calendar sync | Supabase Edge Function (scheduled/cron) + `node-ical` or `ical.js` | Pulls each property's Airbnb iCal feed, parses busy date ranges, writes to `availability` table |
| Hosting | Vercel | Free tier sufficient for v1 traffic |
| Images | Next/Image with remote patterns allowed for `a0.muscache.com` (initial photos) — plan to migrate to own storage/CDN later | See Section 6 |
| Analytics | Vercel Analytics or Plausible (lightweight, privacy-friendly) | Optional but recommended |
| Forms/contact | No backend form — WhatsApp deep link (`wa.me`) + `tel:` link only | See Section 8 |

---

## 3. Design System (from Stitch + Logo)

Reference `D:\bvp\DESIGN.md` as source of truth; below is the baseline to confirm consistency.

**Colors:**
```
--navy: #2C4A6D        /* headings, primary buttons, footer bg */
--steel-blue: #4A72A8  /* links, secondary accents */
--sky-blue: #7E9FCB    /* highlights, badges */
--periwinkle: #B7C8E3  /* subtle backgrounds, borders */
--slate-gray: #7C93AC  /* secondary text, "PROPERTIES" wordmark tone */
--bg: #FFFFFF / #FAFBFC
--whatsapp-green: #25D366  /* ONLY for WhatsApp CTA — sole accent break from blue palette */
```

**Typography:** Clean modern sans-serif for body (Inter/Poppins), elevated semi-bold/serif display font for headlines. Match weights/sizes shown in Stitch screens exactly.

**Shape language:** 12–16px border radius throughout, soft shadows (no harsh borders), generous whitespace. Mobile-first.

**Logo:** `BVHHI_Logo.png` — layered house silhouette mark + wordmark. Use as-is in header/footer; do not recolor.

---

## 4. Site Map / Routes

```
/                          Homepage — hero, trust bar, property grid (6), 
                            "Two Communities" section, reviews carousel, 
                            why-book-direct section
/properties                Optional index (can redirect to # section on homepage in v1)
/properties/[slug]          Individual property page (×6), e.g.:
                             /properties/unit-248-seaside-villas
                             /properties/bikes-and-chairs-seaside-villas
                             /properties/seaside-villas-ii-direct-access
                             /properties/ocean-view-retreat-seaside-villas
                             /properties/sea-pines-bungalow
                             /properties/unit-292-seaside-villas
/about                      Optional — brand story, host intro
/contact                    Optional — WhatsApp/Call, could just be a footer CTA
```

Property pages are statically generated at build time (SSG) with ISR revalidation (e.g. every 1 hour) so availability data stays fresh without full rebuilds.

---

## 5. Data Model (Supabase / Postgres)

```sql
-- properties
create table properties (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  subtitle text,                    -- e.g. "Unit 248 – Your Beachside Haven with Bikes Included!"
  community text not null,          -- "Seaside Villas" | "Sea Pines"
  description text not null,
  guests int not null,
  bedrooms int not null,
  beds int not null,
  baths numeric not null,
  rating numeric,
  review_count int,
  is_guest_favorite boolean default false,
  str_permit text,                  -- e.g. "STR #040674"
  airbnb_room_id text not null,     -- e.g. "1500898289351367407"
  airbnb_ical_url text,             -- private export URL, added once client supplies it
  hero_image_url text,
  sort_order int,
  created_at timestamptz default now()
);

-- property_photos
create table property_photos (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references properties(id) on delete cascade,
  url text not null,
  alt_text text,
  sort_order int
);

-- property_amenities
create table property_amenities (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references properties(id) on delete cascade,
  label text not null,              -- "Beach access", "Free parking on premises", etc.
  icon_key text                     -- maps to a frontend icon set
);

-- property_reviews
create table property_reviews (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references properties(id) on delete cascade,
  reviewer_name text,
  rating int,
  body text,
  review_date date
);

-- availability_blocks (populated by iCal sync job)
create table availability_blocks (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references properties(id) on delete cascade,
  start_date date not null,
  end_date date not null,
  source text default 'airbnb_ical',
  synced_at timestamptz default now()
);
```

**Note:** iCal feeds from Airbnb only expose blocked/available date ranges — no guest names or pricing. `availability_blocks` should be treated as ephemeral/replaceable: each sync run can safely `delete + reinsert` per property rather than diffing.

---

## 6. Seed Content — All 6 Properties (real data pulled from live Airbnb listings)

Use this to seed the database / build initial static content. Photos below are hot-linked from Airbnb's CDN (`muscache.com`) for now — **flag to client that these should be re-uploaded to Supabase Storage or a CDN before public launch**, since hot-linking third-party images long-term is fragile and not something to depend on.

### Property 1 — "Beach Getaway Special! Cozy 1BR steps from beach"
- Slug: `unit-248-seaside-villas`
- Community: Seaside Villas
- Airbnb room ID: `1500898289351367407`
- Guests: 4 · Bedrooms: 1 · Beds: 4 (queen + sofa bed + bunk bed) · Baths: 1
- Rating: 4.96 (23 reviews) · Guest Favorite · STR #040674
- Description: Unit 248, ocean-view condo in gated beachfront Seaside Villas community, steps from Coligny Plaza and Celebration Park, includes bikes, pool, and 1–2 parking passes.
- Amenities (of 48): Beach access, Wifi, Free parking on premises, Pool, TV

### Property 2 — "Beach Getaway Special! With Bikes & Chairs"
- Slug: `bikes-and-chairs-seaside-villas`
- Community: Seaside Villas
- Airbnb room ID: `1601754149851919852`
- Guests: 4 · Bedrooms: 1 · Beds: 2 · Baths: 1
- Rating: 5.0 (18 reviews) · Guest Favorite · STR Permit #5310
- Description: Ocean-view condo in beachfront complex, steps from sand and public pool, beach chairs provided, near Coligny Plaza, golf, jet skiing, fishing.
- Amenities (of 44): Beach access, Kitchen, Wifi, Free parking on premises, Pool

### Property 3 — "Direct Beach & Pool Access – Seaside Villas II"
- Slug: `seaside-villas-ii-direct-access`
- Community: Seaside Villas
- Airbnb room ID: `1689173181958444712`
- Guests: 4 · Bedrooms: 1 (king bed) + sofa bed in living room · Baths: 1
- Rating: 5.0 (8 reviews) · Guest Favorite (Top 5%) · STR Permit #040730
- Description: Newly furnished ocean-view condo, South Forest Beach, private balcony with ocean views, gated Seaside Villas complex, walk to Coligny Plaza.
- Amenities (of 41): Shared beach access, Kitchen, Wifi, Free parking on premises, Outdoor pool (year-round)

### Property 4 — "Ocean View Retreat! With Chairs & Bikes"
- Slug: `ocean-view-retreat-seaside-villas`
- Community: Seaside Villas
- Airbnb room ID: `1626990849898070003`
- Guests: 4 · Bedrooms: 1 · Beds: 4 · Baths: 1
- Rating: 4.9 (20 reviews) · Guest Favorite
- Description: Beachfront complex, ocean views, central air, two complimentary bikes, 5–10 min walk to Coligny's shops/restaurants.
- Amenities (of 45): Beach access, Kitchen, Wifi, Free parking on premises, Pool

### Property 5 — "Sea Pines Escape 2BR Bungalow Walk to Beach & Pool"
- Slug: `sea-pines-bungalow`
- Community: Sea Pines (the standout larger property — feature prominently)
- Airbnb room ID: `1627016694947617075`
- Guests: 6 · Bedrooms: 2 · Beds: 3 · Baths: 2
- Rating: 4.5 (8 reviews) · Not currently a Guest Favorite
- Description: Charming 2BR bungalow inside Sea Pines, short private walk to beach/pool, near Harbour Town, South Beach Marina, Lawton Stables, two screened-in porches overlooking a lagoon. **Important guest note: guests must purchase their own Sea Pines gate pass on arrival ($10/day or $20/week, cash or card) — display this clearly on the property page, not buried in fine print.**
- Amenities (of 45): Beach access, Kitchen, Wifi, Free parking on premises, Pool

### Property 6 — "Steps From the Beach! Close to Restaurants & Shops"
- Slug: `unit-292-seaside-villas`
- Community: Seaside Villas
- Airbnb room ID: `1609796746527794552`
- Guests: 4 · Bedrooms: 1 (king bed) + pull-out couch · Baths: 1
- Rating: 5.0 (19 reviews) · Guest Favorite (Top 5%) · Unit 292
- Description: Personally owned/managed/cleaned by host, king bed, pull-out couch, kitchenette, walk-in shower, balcony steps from beach, bikes available on request.
- Amenities (of 33): Beach access, Kitchen, Wifi, Free parking on premises, Pool

**Host bio (used across all property pages):** Kacey, Superhost, 96 reviews, 4.93 average rating, 10 months hosting, lives in Hilton Head Island, went to University of Alabama, 100% response rate, responds within an hour.

---

## 7. Calendar Sync — Implementation Detail

1. **Client action required:** For each of the 6 listings, go to Airbnb host dashboard → listing → **Calendar → Availability settings → Sync calendars → Export calendar**, copy the private `.ics` URL, and store it in `properties.airbnb_ical_url`.
2. **Sync job:** A Supabase Edge Function (or Vercel Cron Job calling an API route) runs on a schedule — recommend every 60–120 minutes:
   - Fetch each property's `.ics` URL
   - Parse `VEVENT` blocks (each represents a blocked date range) using `node-ical`
   - Delete existing rows in `availability_blocks` for that property, insert fresh parsed ranges
   - Log sync success/failure (simple table or console log is fine for v1)
3. **Frontend:** Property page calendar widget queries `availability_blocks` for that property and greys out any date falling within a blocked range. No real-time polling on page load needed — cached data refreshed hourly is sufficient since Airbnb bookings aren't second-by-second time-sensitive for display purposes.
4. **Failure handling:** If a sync fails (feed unreachable, malformed), keep last-known-good data rather than clearing the calendar — never show "everything available" as a fallback state, since that's actively misleading.

---

## 8. Booking Flow (No Payment — Direct Contact)

- No "Reserve" button anywhere. Primary CTA throughout is:
  - **"Message on WhatsApp"** — deep link `https://wa.me/[NUMBER]?text=[URL-encoded prefill]`, e.g. prefill: *"Hi! I'm interested in [Property Name] for [dates if selected]. Is it available?"*
  - **"Call Now"** — `tel:[NUMBER]` link, secondary button
- Phone number lives in a single config value (e.g. `lib/config.ts` → `export const CONTACT_PHONE = "+10000000000"`) so it's a one-line swap when the client provides the real number. **Use an obviously-fake placeholder like `+1 000 000 0000`, not a real-looking number**, to avoid accidental wrong-number contact if launched before the swap.
- Trust microcopy near CTA: "Direct booking · No service fees · Fast response."

---

## 9. SEO & Performance Notes

- Each property page needs unique `<title>`, meta description, and OpenGraph image (use hero photo)
- Add `Schema.org` structured data: `LodgingBusiness` for the org, `VacationRental` (or `Accommodation`) per property page where supported, including address (community-level, not exact unit for privacy), amenity list, aggregate rating
- Image optimization via `next/image`, lazy-load below-the-fold galleries
- Core Web Vitals target: LCP < 2.5s — hero images should be appropriately sized/compressed, not raw Airbnb CDN originals at full resolution

---

## 10. Folder Structure (suggested)

```
/app
  /page.tsx                    → Homepage
  /properties/[slug]/page.tsx  → Property detail template
  /about/page.tsx
/components
  /Header.tsx
  /Footer.tsx
  /PropertyCard.tsx
  /PropertyGallery.tsx
  /AvailabilityCalendar.tsx
  /ContactCTA.tsx (WhatsApp + Call buttons)
  /ReviewsCarousel.tsx
  /AmenitiesGrid.tsx
/lib
  /config.ts                   → CONTACT_PHONE, site constants
  /supabase.ts                 → client init
  /icalSync.ts                 → sync job logic
/supabase
  /migrations/                 → SQL from Section 5
  /functions/sync-availability → Edge Function
```

---

## 11. Open Items / Client-Provided Inputs Still Needed

- [ ] Real WhatsApp/Call phone number (currently placeholder)
- [ ] 6 Airbnb iCal export URLs (client confirmed has host access — needs to retrieve and share)
- [ ] Decision on whether to migrate hot-linked Airbnb photos to owned storage before launch (recommended)
- [ ] Domain name for deployment
- [ ] Confirm whether "About" page / host bio page is wanted in v1 or deferred
