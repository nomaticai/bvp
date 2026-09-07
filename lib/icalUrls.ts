/**
 * Maps a property slug to its private Airbnb iCal export URL.
 *
 * The actual URLs are SECRET tokens and live only in `.env.local` (gitignored)
 * / Vercel environment variables — never hard-coded here. This module only
 * references env vars, so it is safe to commit.
 *
 * Server-only: read inside server components / route handlers, never shipped
 * to the client.
 */
export function icalUrlForSlug(slug: string): string | undefined {
  const map: Record<string, string | undefined> = {
    "unit-292-seaside-villas": process.env.AIRBNB_ICAL_UNIT_292,
    "ocean-view-retreat-seaside-villas": process.env.AIRBNB_ICAL_OCEAN_VIEW,
    "unit-248-seaside-villas": process.env.AIRBNB_ICAL_UNIT_248,
    "bikes-and-chairs-seaside-villas": process.env.AIRBNB_ICAL_BIKES_CHAIRS,
    "seaside-villas-ii-direct-access": process.env.AIRBNB_ICAL_SEASIDE_II,
    "sea-pines-bungalow": process.env.AIRBNB_ICAL_SEA_PINES,
  };
  return map[slug];
}
