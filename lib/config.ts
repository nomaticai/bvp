/**
 * Site-wide constants.
 *
 * CONTACT_PHONE is an intentionally-fake placeholder (Section 8 of the brief).
 * It is a one-line swap when the client provides the real WhatsApp/Call number.
 * Keep it obviously fake so the site never dials a real wrong number if it
 * launches before the swap.
 *
 *   TODO(client): replace CONTACT_PHONE with the real number in E.164 format,
 *   e.g. "+18435551234". Update nothing else — every CTA reads from here.
 */
export const CONTACT_PHONE = "+10000000000";

/** Human-friendly rendering of the phone number for display. */
export const CONTACT_PHONE_DISPLAY = "+1 (000) 000-0000";

export const SITE = {
  name: "Beach View Properties",
  shortName: "BVP",
  location: "Hilton Head Island, SC",
  tagline: "Your Hilton Head Island Beach Escape",
  description:
    "Boutique short-term rentals on Hilton Head Island. Book direct with the owner — no service fees, fast response.",
  // Aggregate trust stats (from host bio, Section 6).
  superhost: true,
  aggregateRating: 4.93,
  reviewCount: 96,
  hostSinceLabel: "2012",
} as const;

/** Host bio, shown across all property pages (Section 6). */
export const HOST = {
  name: "Kacey",
  isSuperhost: true,
  reviewCount: 96,
  rating: 4.93,
  monthsHosting: 10,
  location: "Hilton Head Island",
  responseRate: "100%",
  responseTime: "within an hour",
} as const;

/**
 * Builds a WhatsApp deep link with a URL-encoded prefill message.
 * `wa.me` requires the number without the leading "+" or any punctuation.
 */
export function whatsappLink(prefill: string): string {
  const digits = CONTACT_PHONE.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(prefill)}`;
}

/** Builds a `tel:` link from the configured contact number. */
export function telLink(): string {
  return `tel:${CONTACT_PHONE}`;
}

/** Default WhatsApp prefill for a given property (or the brand generally). */
export function whatsappPrefill(propertyName?: string): string {
  return propertyName
    ? `Hi! I'm interested in ${propertyName}. Is it available?`
    : `Hi! I'm interested in booking a stay with Beach View Properties. Can you help?`;
}
